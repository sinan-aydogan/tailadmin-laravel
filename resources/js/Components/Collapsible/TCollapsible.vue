<template>
  <div class="flex w-full">
    <div :class="tStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, provide, ref, toRefs } from "vue";

export default defineComponent({
  name: "Collapsible",
  props: {
    openingType: {
      type: String,
      default: "click"
    },
    radius: {
      type: Number,
      default: 3
    },
    accordion: {
      type: Boolean,
      default: false
    },
    triggerType: {
      type: String,
      default: "chevron"
    },
    separated: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: Array,
      default(){
        return []
      }
    },
    color: {
      type: String,
      default: null
    },
    design: {
      type: String,
      default: null
    },
    titleAlign: {
      type: String,
      default: null
    },
    triggerAlign: {
      type: String,
      default: null
    }
  },
  setup(props) {
    /*Definitions*/
    const {
      openingType,
      modelValue,
      triggerType,
      separated,
      radius,
      color,
      design,
      titleAlign,
      triggerAlign,
      accordion
    } = toRefs(props);

    /*Provide*/
    provide("openingType", ref(openingType));
    provide("activeItems", ref(modelValue.value));
    provide("radius", ref(radius));
    provide("accordion", ref(accordion));
    provide("separated", ref(separated));
    provide("rootColor", ref(color));
    provide("rootDesign", ref(design));
    provide("rootTitleAlign", ref(titleAlign));
    provide("rootTriggerAlign", ref(triggerAlign));
    provide("rootTriggerType", ref(triggerType));

    /*Generating Style Classes*/
    const tStyle = computed(() => {
      return "collapsible" + " " +
        (separated.value ? "space-y-2" : "group-radius-" + radius.value);
    });

    return { tStyle };
  }
});
</script>
