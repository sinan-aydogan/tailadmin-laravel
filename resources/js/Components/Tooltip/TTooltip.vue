<template>
  <div class="relative select-none">
    <!--Main Content-->
    <div
        :class="[
                typeof $slots.mainContent[0].text !== 'undefined' ? 'tooltip' :'whitespace-normal'
                ]"
        @mouseenter="show = true"
        @mouseleave="show = false"
    >
      <slot name="mainContent"></slot>
    </div>
    <!--Second Content Container-->
    <div
        v-if="show"
        :class="[
                'tooltip-container',
                positionStyle[position].box
            ]"
    >
      <!--Arrow-->
      <div :class="[
                positionStyle[position].arrow,
                'bg-white'
                ]"></div>
      <!--Content-->
      <div :class="[
                'tooltip-content',
                ]">
        <slot name="secondContent"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import {tooltipStyleMixin} from "@/Mixins/Styles/tooltipStyleMixin";

export default {
  name: "TTooltip",
  props: {
    position: {
      type: String,
      default: 'bottom'
    }
  },
  mixins: [tooltipStyleMixin],
  data() {
    return {
      show: false,
    }
  },
  methods: {
    outside() {
      this.show = false
    }
  }
}
</script>
