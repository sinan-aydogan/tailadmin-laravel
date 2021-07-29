<template>
  <div class="flex flex-col">
    <!--Label-->
    <label
        :for="labelFor"
        class="flex flex-row gap-1 items-center font-medium text-sm text-gray-700 whitespace-normal"
    >
      <!--Label-->
      <span v-if="label">
        {{ label }}
      </span>
      <!--Label Prop-->
      <span v-if="!label && $slots.label" class="inline-flex items-center">
        <!--Label Slot-->
        <slot name="label"/>
      </span>
      <!--Sub Label-->
      <span
          v-if="subLabel"
          :class="['text-xs italic',subLabelColors[subLabelColor]]"
      >
        {{ subLabel }}
      </span>
    </label>
    <!--Input Content-->
    <slot></slot>
    <!--Error-->
    <div v-show="error">
      <p class="text-sm text-red-600 mt-2 whitespace-nowrap">
        {{ error }}
      </p>
    </div>
  </div>
</template>

<script>
import {inputGroupStyleMixin} from "@/Mixins/Styles/inputGroupStyleMixin";

export default {
  props: ['label', 'subLabel', 'subLabelColor', 'labelFor', 'error'],
  mixins: [inputGroupStyleMixin]
}
</script>
