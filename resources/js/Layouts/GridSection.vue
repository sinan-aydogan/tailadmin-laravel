<template>
  <div class="col-span-full w-full">
    <div
        :class="[
            'grid w-full grid-flow-row',
            gapStyle[gap],
            calculatedGridStyle
            ]">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import {gridStyleMixin} from "@/Mixins/Styles/gridStyleMixin";

export default defineComponent({
  name: "GridSection",
  mixins: [gridStyleMixin],
})
</script>
