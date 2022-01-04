<template>
    <div id="link" :class="'radius-t-' + conf.app.leftMenu.radius">
        <!--Dropdown Item-->
        <div
            v-if="item.type === 'dropdown'"
            @click="
    foldLeftMenu ? [$emit('foldLeftMenu', false) , showingSubMenu=true] :
    showingSubMenu = !showingSubMenu;"
            class="left-menu-root-link"
            :class="[
      foldLeftMenu ? 'left-menu-root-link-fold' : 'left-menu-root-link-expand',
      showingSubMenu ? 'left-menu-root-link-active' : 'left-menu-root-link-passive',
      'radius-'+conf.app.leftMenu.radius,
      (showingSubMenu && !foldLeftMenu ) ? 'radius-b-0' : ''
    ]"
        >
            <!-- Icon -->
            <span class="left-menu-icon">
      <icon v-if="item.icon" :icon="item.icon"/>
    </span>
            <!-- Label -->
            <span
                class="left-menu-label-wrapper"
                :class="[!foldLeftMenu ? 'w-show' : 'w-hide']"
            >
      <span v-text="tm(item.label ? item.label : item.label)"/>
                <!--Indicator Icon-->
      <span id="trigger">
      <svg
          id="trigger-icon"
          :class="[
         showingSubMenu  ? 'rotate-90' : 'rotate-0'
         ]"
          v-if="item.items"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
      >
        <path fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
        />
      </svg>
      </span>
    </span>
        </div>
        <!--Internal and Route Link-->
        <Link
            v-else-if="item.type === 'route' || item.type === 'internal'"
            :href="
    item.link != null ?
    item.type === 'route' ? route(item.link) :
    item.type === 'internal' ? URL(item.link) : '' : ''"
            :active="
    item.link !== null ?
    item.type === 'route' ? route().current(item.link) :
    item.type === 'internal' ? URL().current(item.link) : '' : ''"
            class="left-menu-root-link"
            :class="[
      'left-menu-root-link-passive',
      foldLeftMenu ? 'left-menu-root-link-fold' : 'left-menu-root-link-expand',
      'radius-' + conf.app.leftMenu.radius
      ]"
        >
            <!-- Icon -->
            <span class="left-menu-icon">
      <icon v-if="item.icon" :icon="item.icon"/>
    </span>
            <!-- Label -->
            <span
                class="left-menu-label-wrapper"
                :class="[!foldLeftMenu ? 'w-show' : 'w-hide']"
                v-text="tm(item.label ? item.label : item.label)"
            />
        </Link>
        <!--External Link-->
        <a
            v-else
            :href="item.link ? item.link : '#'"
            :target="item.target ? item.target : '_blank'"
            class="left-menu-root-link"
            :class="[
      'left-menu-root-link-passive',
      foldLeftMenu ? 'left-menu-root-link-fold' : 'left-menu-root-link-expand',
      'radius-' + conf.app.leftMenu.radius
      ]"
        >
            <!-- Icon -->
            <span class="left-menu-icon">
      <icon v-if="item.icon" :icon="item.icon"/>
    </span>
            <!-- Label -->
            <span
                class="left-menu-label-wrapper"
                :class="[!foldLeftMenu ? 'w-show' : 'w-hide']"
                v-text="tm(item.label ? item.label : item.label)"
            />

        </a>
        <!-- Sub Item -->
        <transition name="fade" mode="in-out">
            <div
                v-if="showingSubMenu && !foldLeftMenu"
                class="left-menu-sub-links-wrapper"
                :class="[
          (showingSubMenu && !foldLeftMenu ) ? 'radius-b-' + conf.app.leftMenu.radius : ''
        ]"
            >
                <left-menu-sub-item
                    v-for="(subItem, index) in item.items"
                    :key="index"
                    :item="subItem"
                />
            </div>
        </transition>
    </div>
</template>

<script>
/*Main Functions*/
import {defineComponent, inject, reactive, toRefs, ref, onBeforeMount} from "vue";
import {Link} from "@inertiajs/inertia-vue3";


/*Components*/
import LeftMenuSubItem from "@/Layouts/LeftMenuSubItem";

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
    emits: ["foldLeftMenu"],
    setup(props) {
        /*Definitions*/
        const {item} = toRefs(props);
        const showingSubMenu = ref();
        const foldLeftMenu = inject("foldLeftMenu");
        const showLeftMenu = inject("showLeftMenu");
        const conf = inject("conf");

        /*Multi Language*/
        const tm = inject('tm');


        /*Generating Style Classes*/
        const tStyle = reactive({});

        /*Search Active Link*/
        onBeforeMount(() => {
            if (item.value["items"]) {
                for (let child of item.value["items"]) {
                    if (route().current(child.link)) {
                        showingSubMenu.value = true;
                    }
                }
            } else {
                showingSubMenu.value = false;
            }
        });

        return {
            tStyle,
            foldLeftMenu,
            showLeftMenu,
            showingSubMenu,
            conf,
            /*Multi Language*/
            tm
        };
    }
});
</script>

<style scoped>
/*Show Hide Menu Titles*/
.fade-enter-active, .fade-leave-active {
    transition: all 700ms ease-in-out;
}

.fade-enter-from, .fade-leave-to {
    max-height: 0;
    transform: translateY(-2rem);
    opacity: 0;
}

.fade-enter-to, .fade-leave-from {
    max-height: 50rem;
    transform: translateY(0);
    opacity: 1;
}
</style>
