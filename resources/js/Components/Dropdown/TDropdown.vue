<template>
  <div v-click-outside="outside" class="relative max-w-min select-none">
    <div
        v-if="$slots.title"
        :class="[
            'dropdown',
            calculatedTriggerStyle
            ]"
        @click="showContent = !showContent"
    >
      <slot name="title"/>
      <t-chevron-down-icon
          :class="[
                'w-5 h-5 transform duration-300',
                showContent ? 'rotate-90' : 'rotate-0'
                ]"
      />
    </div>
    <div
        class="cursor-pointer"
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
          :class="['dropdown-content',
          calculatedContentStyle
          ]">
        <slot></slot>
      </div>
      <div
          v-if="showContent && $slots.trigger"
          :class="['absolute flex flex-col whitespace-normal z-10',
          calculatedContentStyle
          ]"
      >
        <slot/>
      </div>
    </transition>
  </div>
</template>

<script>
import {dropdownStyleMixin} from "@/Mixins/Styles/dropdownStyleMixin";
import TChevronDownIcon from "@/Components/Icon/TChevronDownIcon";
export default {
  name: "TDropdown",
  components: {TChevronDownIcon},
  mixins: [dropdownStyleMixin],
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
      showContent: false,
    }
  },
  methods: {
    outside() {
      this.showContent = false
    }
  }
}
</script>
