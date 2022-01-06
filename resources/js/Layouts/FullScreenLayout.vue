<template>
  <div class="full-screen-card">
    <div :class="[
        'full-screen-card-container',
        calculatedFullscreenCardStyle
        ]"
         :style="[bgImage && {backgroundImage: 'url('+bgImage+')'}]"
    >

    </div>
    <div class="full-screen-card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import {fullScreenCardStyleMixin} from "@/Mixins/Styles/fullScreenCardStyleMixin";

export default defineComponent({
  name: "FullScreenLayout",
  props: {
    bgImage: {
      type: String,
      default: null
    }
  },
  mixins: [fullScreenCardStyleMixin],
})
</script>
