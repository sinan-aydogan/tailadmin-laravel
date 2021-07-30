<template>
  <div :class="[
        'flex flex-wrap gap-2 first:border-t border-b border-l border-r hover:shadow items-center w-full whitespace-normal p-2 transition duration-300 ease-in-out',
        $slots.secondContent ? 'justify-between' : 'justify-start',
        calculatedListStyle
        ]">
    <div v-if="$slots.icon" class="flex">
      <slot name="icon"></slot>
    </div>
    <div v-if="$slots.title" class="flex">
      <b>
        <slot name="title"></slot>
      </b>
    </div>
    <div class="flex">
      <slot></slot>
    </div>
    <div v-if="$slots.secondContent" class="flex">
      <slot name="secondContent"></slot>
    </div>
  </div>
</template>

<script>
import {listStyleMixin} from "@/Mixins/Styles/listStyleMixin";

export default {
  name: "TListItem",
  props: {
    active: {
      required: false
    }
  },
  mixins: [listStyleMixin],
}
</script>

<style scoped>

</style>
