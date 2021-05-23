<template>
  <div class="max-w-min" v-click-outside="outside">
    <div
        @click="showContent = !showContent"
        :class="['whitespace-normal',colorStyle.trigger]">
      <slot name="title"></slot>
      <font-awesome-icon icon="angle-down"/>
    </div>
    <div v-if="showContent" :class="['whitespace-normal',colorStyle.childContent]">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  directives: {
    'click-outside': {
      bind: function(el, binding, vNode) {
        // Provided expression must evaluate to a function.
        if (typeof binding.value !== 'function') {
          const compName = vNode.context.name
          let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`
          if (compName) { warn += `Found in component '${compName}'` }

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

      unbind: function(el) {
        // Remove Event Listeners
        document.removeEventListener('click', el.__vueClickOutside__)
        el.__vueClickOutside__ = null

      }
    }
  },
  props : {
    color : {
      type : String,
      default : 'white'
    }
  },
  data(){
    return {
      showContent : false,
      colorStyle : {
        trigger : '',
        childContent : ''
      }
    }
  },
  methods : {
    outside(){
      this.showContent = false
    }
  },
  created(){
    if(this.color === 'white'){
      this.colorStyle.trigger = 'relative flex flex-row justify-between border rounded-md p-2 items-center gap-2 cursor-pointer'
        this.colorStyle.childContent = 'absolute border rounded-md -mt-5 overflow-hidden bg-white'
    }else if(this.color === 'black'){
      this.colorStyle.trigger = 'relative flex flex-row justify-between border rounded-md bg-black text-white p-2 items-center gap-2 cursor-pointer'
        this.colorStyle.childContent = 'absolute border rounded-md -mt-5 overflow-hidden bg-black text-white'
    }else{
      this.colorStyle.trigger = 'relative bg-'+this.color+'-500 text-'+this.color+'-50 flex flex-row justify-between border rounded-md p-2 items-center gap-2 cursor-pointer',
          this.colorStyle.childContent = 'absolute border rounded-md -mt-5 overflow-hidden bg-'+this.color+'-200'
    }
  }
}
</script>

<style scoped>

</style>
