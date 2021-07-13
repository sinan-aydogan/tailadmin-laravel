<template>
  <div v-click-outside="outside" class="relative max-w-min select-none">
    <div
        v-if="$slots.title"
        :class="['whitespace-normal font-semibold',triggerStyle]"
        @click="showContent = !showContent"
    >
      <slot name="title"/>
      <font-awesome-icon icon="angle-down"/>

    </div>
    <div
        v-if="$slots.trigger"
        @click="showContent = !showContent"
    >
      <slot name="trigger"/>
    </div>
    <transition
        enter-active-class="transition ease-out duration-200"
        enter-class="transform opacity-0 scale-90"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95">
      <div
          v-if="showContent && $slots.title"
          :class="['flex flex-col whitespace-normal z-10 min-w-22',
          childStyle,
          alignStyle
          ]">
        <slot></slot>
      </div>
      <div
          v-if="showContent && $slots.trigger"
          :class="['absolute flex flex-col whitespace-normal z-10 min-w-22',
          alignStyle
          ]"
      >
        <slot/>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "TDropdown",
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
  props: {
    color: {
      type: String,
      default: 'white'
    },
    align: {
      type: String,
      default: 'left'
    }
  },
  data() {
    return {
      showContent: false,
    }
  },
  methods: {
    outside() {
      this.showContent = false
    }
  },
  computed: {
    /*Color Styles*/
    triggerStyle() {
      if (this.color === 'white') {
        return 'relative flex flex-row justify-between hover:bg-gray-200 hover:border-gray-500 border rounded-md p-2 items-center gap-2 cursor-pointer'
      } else if (this.color === 'black') {
        return 'relative flex flex-row justify-between hover:bg-gray-600 hover:border-gray-500 border rounded-md bg-black text-white p-2 items-center gap-2 cursor-pointer'
      } else {
        return 'relative hover:bg-gray-600 bg-' + this.color + '-500 text-' + this.color + '-50 flex flex-row justify-between border rounded-md p-2 items-center gap-2 cursor-pointer'
      }

    },
    childStyle() {
      if (this.color === 'white') {
        return 'absolute border rounded-md mt-1 overflow-hidden bg-white'
      } else if (this.color === 'black') {
        return 'absolute border rounded-md mt-1 overflow-hidden bg-black text-white'
      } else {
        return 'absolute border rounded-md mt-1 overflow-hidden bg-' + this.color + '-200'
      }
    },
    alignStyle(){
      if (this.align === 'left') {
        return 'origin-top-left left-0'
      } else if (this.align === 'right') {
        return 'origin-top-right right-0'
      } else {
        return 'origin-top'
      }
    }
  }
}
</script>

<style scoped>

</style>
