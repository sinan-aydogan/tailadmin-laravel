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
import {gridStyleMixin} from "@/Mixins/Styles/gridStyleMixin";
export default {
  name: "GridSection",
  mixins: [gridStyleMixin],
}
</script>

<style scoped>

</style>
