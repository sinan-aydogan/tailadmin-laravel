<template>
  <!-- Item Container-->
  <div v-show="showingLeftMenu === true">
    <Link
      :href="
            item.link != null ?
            item.linkType === 'route' ? route(item.link) :
            item.linkType === 'internal' ? URL(item.link) :
            item.linkType === 'external' ? item.link : '' : ''"
      tag="div">
      <div :class="['flex flex-row py-1 items-center justify-between cursor-pointer',menuStyle]">
        <div class="flex items-center justify-between w-full">
          <!-- Label -->
          <div v-if="showingLeftMenu === true" class="flex ml-3 py-1">{{ item.label }}</div>
          <!-- Icon -->
          <div class="flex pr-4">
            <font-awesome-icon v-if="item.icon" :icon="item.icon" />
          </div>
        </div>
      </div>
    </Link>
  </div>
</template>

<script>
import { defineComponent, inject } from "vue";
import { Link } from "@inertiajs/inertia-vue3";

export default defineComponent({
  name: "LeftMenuSubItem",
  components: {
    Link
  },
  props: ["item",  "active"],
  setup(){

    const showingLeftMenu = inject("showingLeftMenu");

    return {showingLeftMenu}
  },
  computed: {
    menuStyle() {
      let style;
      if (route().current(this.item.link)) {
        style = "bg-white bg-opacity-70 text-gray-700 font-semibold border-b-4 border-opacity-70 border-blue-500";
      } else {
        style = "text-gray-300 bg-opacity-10 hover:bg-gray-200 hover:bg-opacity-40 hover:text-white";
      }
      return style;
    }
  }
});
</script>
