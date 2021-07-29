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
import {fullScreenCardStyleMixin} from "@/Mixins/Styles/fullScreenCardStyleMixin";

export default {
  name: "TFullScreenCard",
  props: {
    bgImage: {
      type: String,
      default: null
    }
  },
  mixins: [fullScreenCardStyleMixin],
}
</script>
