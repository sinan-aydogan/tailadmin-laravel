<template>
  <div :class="tStyle">
    <slot />
  </div>
</template>

<script>
import { computed, defineComponent, provide, ref, toRefs } from "vue";

export default defineComponent({
  name: "TList",
  props: {
    color: {
      type: String,
      default: "white"
    },
    design: {
      type: String,
      default: "filled"
    },
    radius: {
      type: Number,
      default: 3
    },
    separated: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    /*Definitions*/
    const { color, design, radius, separated, border } = toRefs(props);

    /*Provide*/
    provide("separated", ref(separated));
    provide("radius", ref(radius));
    provide("border", ref(border));
    provide("rootColor", ref(color));
    provide("rootDesign", ref(design));

    /*Generating Style Classes*/
    const tStyle = computed(() => {
      return "list" + " " +
        (separated.value ? "space-y-2" : "");
    });

    return { tStyle };
  }
});
</script>
