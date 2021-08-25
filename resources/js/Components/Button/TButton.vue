<template>
  <button
      v-if="type === 'submit' || type === 'button'"
      :class="[
            'button',
            calculatedButtonStyle,
            size ? sizes[size].sizeStyle : 'h-10',
            ]"
      :onclick="'window.location.href=\''+link+'\''"
      :type="type">
    <slot></slot>
  </button>
  <inertia-link
      v-else
      :href="link"
      :class="[
            'button',
            calculatedButtonStyle,
            size ? sizes[size].sizeStyle : 'h-10',
            ]"
  >
    <slot></slot>
  </inertia-link>
</template>

<script>
import {buttonStyleMixin} from "@/Mixins/Styles/buttonStyleMixin";

export default {
  name: "TButton",
  mixins: [buttonStyleMixin],
  props: {
    size: String,
    link: {
      type: String,
      default: '#'
    },
    type: {
      type: String,
      default: 'submit'
    }
  },
  data() {
    return {
      sizes: {
        'full': {
          sizeStyle: "h-12 w-full text-center"
        },
        'xl': {
          sizeStyle: "h-14 text-xl font-bold"
        },
        'sm': {
          sizeStyle: "h-8 text-sm min-w-min min-h-min"
        }
      }
    }
  }
}
</script>
