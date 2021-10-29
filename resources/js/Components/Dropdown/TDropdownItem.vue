<template>
  <div class="dropdown-item-container">
    <Link
      :href="link"
      v-if="link"
      class="dropdown-item"
    >
      <div v-if="hasSlot('icon')" class="dropdown-icon">
        <slot name="icon"></slot>
      </div>
      <div class="flex">
        <slot></slot>
      </div>
    </Link>
    <slot v-else></slot>

  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Link } from "@inertiajs/inertia-vue3";

export default defineComponent({
  name: "TDropdownItem",
  components: {
    Link
  },
  props: {
    link: {
      type: String,
      default: null
    }
  },
  setup(props,{slots}) {

    /*Slot Check*/
    const hasSlot = name => !!slots[name];

    return { hasSlot };
  }
});
</script>
