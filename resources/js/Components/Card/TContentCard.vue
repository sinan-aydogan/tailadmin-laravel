<template>
  <div
      :class="[
          'relative p-4 shadow-sm w-full',
          calculatedCardStyle,
          border && 'border',
          ]">
    <div :class="$slots.icon ? 'flex justify-between items-center' : 'justify-start'">
      <!--Icon-->
      <div v-if="$slots.icon" class="flex w-16 h-full justify-center items-center -ml-3">
        <slot name="icon"/>
      </div>
      <div :class="[
        'flex-grow',
        $slots.icon ? 'border-l pl-2': '']">
        <!--Card Title-->
        <div class="font-bold text-xl">
          <slot name="title"></slot>
        </div>
        <!--Card Subtitle-->
        <div v-if="$slots.subTitle" class="text-sm">
          <slot name="subTitle"></slot>
        </div>
        <!--Separator-->
        <hr v-if="line" :class="'my-1 border'"/>
        <div
            v-if="$slots.secondContent"
            class="content-card-show-button"
            @click="showSecondContent = ! showSecondContent">
          <font-awesome-icon icon="code"/>
        </div>
        <div class="flex flex-wrap whitespace-normal w-full">
          <!--Card Main Content-->
          <slot v-if="!showSecondContent" name="content"></slot>
          <!--Card Second Content-->
          <slot v-if="showSecondContent" name="secondContent"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {contentCardStyleMixin} from "@/Mixins/Styles/contentCardStyleMixin";

export default {
  name: "TContentCard",
  mixins: [contentCardStyleMixin],
  props: {
    line: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      showSecondContent: false,
    }
  }
}
</script>
