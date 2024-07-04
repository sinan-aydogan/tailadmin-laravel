<template>
  <div
      :class="[
          'relative p-4 shadow-sm w-full dark:bg-gray-800 dark:border-transparent',
          calculatedCardStyle,
          border && 'border',
          ]">
    <div :class="hasSlot('icon') ? 'flex justify-between items-center' : 'justify-start'">
      <!--Icon-->
      <div v-if="hasSlot('icon')" class="flex w-16 h-full justify-center items-center -ml-3 dark:text-gray-200">
        <slot name="icon"/>
      </div>
      <div :class="[
        'flex-grow',
        hasSlot('icon') ? 'border-l pl-2': '']">
        <!--Card Title-->
        <div v-if="hasSlot('title') || title" class="font-bold text-xl dark:text-gray-200">
          <span v-if="title" v-text="title"/>
          <slot v-else name="title"/>
        </div>
        <!--Card Subtitle-->
        <div v-if="hasSlot('subTitle') || subTitle" class="text-sm dark:text-gray-400">
          <span v-if="subTitle" v-text="subTitle"/>
          <slot v-else name="subTitle"/>
        </div>
        <!--Separator-->
        <hr v-if="line" :class="'my-1 border'"/>
        <div class="flex flex-wrap whitespace-normal w-full">
          <!--Card Main Content-->
          <slot v-if="!showSecondContent" name="content"></slot>
          <slot v-if="!showSecondContent"></slot>
          <!--Card Second Content-->
          <slot v-if="showSecondContent" name="secondContent"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, useSlots } from "vue";
import {contentCardStyleMixin} from "@/Mixins/Styles/contentCardStyleMixin";

export default defineComponent({
  name: "TContentCard",
  mixins: [contentCardStyleMixin],
  props: {
    title: {
      type: String,
      default: null,
      required: false
    },
    subTitle: {
      type: String,
      default: null,
      required: false
    },
    line: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
  },
  setup(props, {slots}){
    /*Definitions*/
    const showSecondContent = ref(false)

    /*Slot Check*/
    const hasSlot = name => !!useSlots()[name];

    return {hasSlot,showSecondContent}
  }
})
</script>
