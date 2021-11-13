<template>
  <!--Dropdown Item-->
  <div v-if="item.type === 'dropdown'"
       @click="
             showingLeftMenu === false ?
             $emit('showLeftMenuEmit', true) :
             showingSubMenu = !showingSubMenu ;
             showingLeftMenu === false &&
             showingSubMenu === false ? showingSubMenu = true :''
             "
       :class="tStyle['dropDown']"
  >
    <transition-group name="fade">
      <!-- Icon -->
      <div key="icon" class="py-1">
        <font-awesome-icon v-if="item.icon" :icon="item.icon" />
      </div>
      <!-- Label -->
      <div key="label" v-if="showLabelStatus" class="flex justify-between items-center w-full">
        <div
          :class="['w-full',item.icon ? 'ml-3':'']">
          {{ item.label }}
        </div>

        <!--Indicator Icon-->
        <font-awesome-icon
          v-if="item.items && !showingSubMenu && showLabelStatus"
          class="mr-1"
          icon="angle-down" />
        <font-awesome-icon
          v-if="item.items && showingSubMenu && showLabelStatus"
          class="mr-1"
          icon="angle-left" />
      </div>
    </transition-group>
  </div>
  <!-- Root Item-->
  <Link
    v-if="item.link"
    :href="
            item.link != null ?
            item.linkType === 'route' ? route(item.link) :
            item.linkType === 'internal' ? URL(item.link) :
            item.linkType === 'external' ? item.link : '' : ''"
    :active="
                          item.link !== null ?
                          item.linkType === 'route' ? route().current(item.link) :
                          item.linkType === 'internal' ? URL().current(item.link) : '' : ''
                          "
    :class="tStyle['rootLink']">
    <div>
      <font-awesome-icon v-if="item.icon" :icon="item.icon" />
    </div>
    <!-- Label -->
    <transition name="leftMenu">
      <div
        v-if="showLabelStatus"
        :class="['w-full',item.icon ? 'ml-3':'']">
        {{ item.label }}
      </div>
    </transition>
  </Link>
  <!-- Sub Item -->
  <transition name="subMenu">
    <div
      v-show="showingSubMenu"
      class="flex flex-col mt-1 bg-gray-100 bg-opacity-10 rounded-md overflow-hidden"
    >
      <left-menu-sub-item
        v-for="(subItem, index) in item.items"
        :key="index"
        :item="subItem" />
    </div>
  </transition>
</template>

<script>
import { computed, defineComponent, inject, reactive, toRefs, ref } from "vue";
import LeftMenuSubItem from "@/Layouts/LeftMenuSubItem";
import { Link } from "@inertiajs/inertia-vue3";

export default defineComponent({
  name: "LeftMenuItem",
  components: {
    LeftMenuSubItem,
    Link
  },
  props: {
    "item": {
      type: [Object, Array],
      default() {
        return [];
      }
    }
  },
  emits: ["showLeftMenuEmit"],
  setup(props) {
    /*Definitions*/
    const { item } = toRefs(props);
    const showingSubMenu = ref(searchActive);
    const showingLeftMenu = inject("showingLeftMenu");
    const showLabelStatus = inject("showLabelStatus");

    /*Generating Style Classes*/
    const tStyle = reactive({});
    tStyle["dropDown"] = computed(() => {
      return "left-menu-item" + " " +
        (showingSubMenu.value ? "bg-white text-gray-700 rounded-md" : "text-white hover:text-gray-700 hover:bg-gray-100 rounded-md");
    });
    tStyle["rootLink"] = computed(() => {
      let style;
      if (route().current(item.value["link"])) {
        style = "bg-white bg-opacity-10 text-white font-semibold border border-opacity-70 border-blue-500";
      } else {
        style = "text-gray-300 bg-opacity-10 hover:bg-gray-200  hover:text-white";
      }
      return style + " " + tStyle["dropDown"];
    });

    /*Search Active Link*/
    const searchActive = computed(() => {
      if (item.value["items"]) {
        for (let child of item.value["items"]) {
          if (route().current(child.link)) {
            return true;
          }
        }
      }
      return false;
    });

    return { tStyle, showLabelStatus, showingLeftMenu, showingSubMenu };
  }
});
</script>

<style scoped>
/*Sub Menu Opening Effect*/
.subMenu-enter-active, .subMenu-leave-active {
  transition: all .75s;
}

.subMenu-enter-from, .subMenu-leave-to {
  opacity: 0;
  max-height: 0;
}

.subMenu-enter-to, .subMenu-leave-from {
  opacity: 1;
  max-height: 700px;
}


/*Show Hide Menu Titles*/
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}

.fade-enter-from, .fade-leave-to {
  max-width: 0;
  opacity: 0;
}

.fade-enter-to, .fade-leave-from {
  max-width: 250px;
  opacity: 1;
}
</style>
