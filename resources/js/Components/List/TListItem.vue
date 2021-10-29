<template>
  <div :class="tStyle">
    <!--Icon-->
    <div v-if="hasSlot('icon')">
      <slot name="icon"></slot>
    </div>
    <!--Title-->
    <div v-if="hasSlot('title')">
      <b>
        <slot name="title"></slot>
      </b>
    </div>
    <!--Default Content-->
    <div class="list-content">
      <slot></slot>
    </div>
    <!--Second Content-->
    <div v-if="hasSlot('secondContent')">
      <slot name="secondContent"></slot>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, inject, toRefs } from "vue";

export default defineComponent({
  name: "TListItem",
  props: {
    active: {
      type: Boolean,
      required: false
    },
    design: {
      type: String,
      default: "filled"
    },
    color: {
      type: String,
      default: null,
      request: false
    }
  },
  setup(props, { slots }) {
    /*Definitions*/
    const { active, design, color} = toRefs(props);

    /*Injections*/
    const radius = inject("radius");
    const border = inject("border");
    const separated = inject("separated");
    const rootColor = inject("rootColor");
    const rootDesign = inject("rootDesign");

    /*Taken Over Definitions from Root */
    const activeColor = computed(() => {
      return rootColor.value ? rootColor.value : color.value;
    });
    const activeDesign = computed(() => {
      return rootDesign.value ? rootDesign.value : design.value;
    });

    /*Generating Style Classes*/
    const tStyle = computed(() => {
      return "list-container" + " " +
        "list-" + activeDesign.value + "-base" + " " +
        "list-" + activeDesign.value + "-" + activeColor.value + (active.value ? "-active" : "") + " " +
        (separated.value && border ? "border last:border first:border" : "") + " " +
        (separated.value ? "radius-" + radius.value : "group-radius-" + radius.value) + " " +
        (activeDesign.value === "outline" || activeDesign.value === "elegant" ? "list-border" : (border.value ? "list-border" : "border-none")) + " " +
        (hasSlot("secondContent") ? "justify-between" : "justify-start");
    });

    /*Slot Check*/
    const hasSlot = name => !!slots[name];

    return { hasSlot, tStyle };
  }
});
</script>
