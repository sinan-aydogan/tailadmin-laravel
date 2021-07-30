<template>
  <!--TODO: THE EFFECT ADDED-->
  <div v-click-outside="outside" class="relative select-none">
    <!--Main Content-->
    <div
        :class="[
                $slots.mainContent[0].text.length>0 && 'popover'
                ]"
        @click="show = !show"
    >
      <slot name="mainContent"></slot>
    </div>
    <!--Second Content Container-->
    <div
        v-if="show"
        :class="[
                'absolute z-10 w-44 m-2',
                positionStyle[position].box
            ]"
    >
      <!--Arrow-->
      <div :class="[
                positionStyle[position].arrow,
                $slots.secondTitle && position !== 'top' ? 'bg-gray-300' : 'bg-white',
                !$slots.secondTitle && 'bg-white'
                ]"></div>
      <!--Title-->
      <div v-if="$slots.secondTitle"
           class="popover-title">
        <slot name="secondTitle"></slot>
      </div>
      <!--Content-->
      <div :class="[
                'popover-content',
                $slots.secondTitle ? 'rounded-b-md' : 'rounded-md'
                ]">
        <slot name="secondContent"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import {popoverStyleMixin} from "@/Mixins/Styles/popoverStyleMixin";

export default {
  name: "TPopover",
  mixins: [popoverStyleMixin],
  directives: {
    'click-outside': {
      bind: function (el, binding, vNode) {
        // Provided expression must evaluate to a function.
        if (typeof binding.value !== 'function') {
          const compName = vNode.context.name
          let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`
          if (compName) {
            warn += `Found in component '${compName}'`
          }

          console.warn(warn)
        }
        // Define Handler and cache it on the element
        const bubble = binding.modifiers.bubble
        const handler = (e) => {
          if (bubble || (!el.contains(e.target) && el !== e.target)) {
            binding.value(e)
          }
        }
        el.__vueClickOutside__ = handler

        // add Event Listeners
        document.addEventListener('click', handler)
      },

      unbind: function (el) {
        // Remove Event Listeners
        document.removeEventListener('click', el.__vueClickOutside__)
        el.__vueClickOutside__ = null

      }
    }
  },
  data() {
    return {
      show: false,
    }
  },
  methods: {
    outside() {
      this.show = false
    }
  },
}
</script>

<style scoped>

</style>
