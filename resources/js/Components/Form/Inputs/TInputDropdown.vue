<template>
  <div class="relative select-none" v-click-outside="outside">
    <!--Clear Button-->
    <span v-if="clearButton && selectedID"
          class="absolute flex top-2 right-2 border w-6 h-6 items-center justify-center rounded-lg hover:bg-red-500 hover:text-white cursor-pointer"
          @click="selectedID = null;search = '';$emit('input',null)">x</span>
    <div class="form-input h-10 flex items-center cursor-pointer">
      <slot></slot>
      <!--Placeholder Text-->
      <span @click="changeShowOptions" v-if="selectedID === null" aria-disabled="true"
            :class="['w-full p-2 hover:font-semibold',disabled && 'text-gray-300']">{{ placeHolder ? placeHolder : 'Select' }}
      </span>
      <!--Selected Option-->
      <div @click="changeShowOptions" v-if="selectedID !== null" class="w-full">
        <span v-if="selectedOption.componentInstance.$el.innerHTML" v-html="selectedOption.componentInstance.$el.innerHTML"/>
        <span v-else v-html="selectedOption.componentInstance.label"/>
      </div>
      <!--Options Container-->
      <div v-if="showOptions"
           class="absolute flex flex-col top-11 bg-white border border-gray-300 rounded-md w-full -ml-2 shadow-lg z-50">
        <!--Search Box-->
        <div class="flex w-full p-2 bg-gray-200">
          <t-input-text v-model="search" :placeholder="searchPlaceHolder ? searchPlaceHolder : 'Search...'"></t-input-text>
        </div>
        <!--Options List-->
        <div v-if="index<9" v-for="(item,index) in searchList" :key="index" class="hover:bg-gray-200 p-2 cursor-pointer"
             @click="$emit('input', item.componentInstance.value); showOptions = !showOptions; select(index)">
          <span v-if="item.componentInstance.$el.innerHTML" v-html="item.componentInstance.$el.innerHTML"/>
          <span v-else v-html="item.componentInstance.label"/>
        </div>
        <div v-if="searchList.length>10" class="hidden lg:block text-xs text-center p-2 text-blue-500">Sonuç listesi çok uzun, lütfen arama
          yapınız
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TInputText from "@/Components/Form/Inputs/TInputText";

export default {
  name: "TInputDropdown",
  components: {TInputText},
  props: ['value', 'placeHolder', 'searchPlaceHolder', 'clearButton', 'disabled'],
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
  data() {
    return {
      search: '',
      searchList: [],
      options: [],
      selectedID: null,
      selectedOption: {},
      showOptions: false
    }
  },
  created() {
    this.options = this.$slots.default;
    if(this.search === ''){
      let list;
      list = this.options;
      list.forEach(item=>{
        if(item.tag !== undefined){
          this.searchList = [...this.searchList, item]
        }
      })
      this.options = this.searchList
    }
  },
  methods:{
    outside(){
      this.showOptions = false
    },
    select(index){
      let options = [...this.options];
      this.selectedID = options[index].componentInstance._uid;
      let selected = options.filter(item => item.componentInstance._uid === this.selectedID)
      this.selectedOption = selected[0];
    },
    changeShowOptions(){
      if(this.disabled){
        this.showOptions = false
      }else {
        this.showOptions = !this.showOptions
      }
    }
  },
  watch: {
    value() {
      this.selectedID = this.value
    },
    search() {
      if (this.search !== '') {
        this.searchList = this.options.filter(option => option.componentInstance.$el.innerHTML.toLowerCase().replace(/[^a-zA-Z ]/g, "").indexOf(this.search.toLowerCase().replace(/[^a-zA-Z ]/g, "")) > -1)
      } else {
        this.searchList = this.options
      }
    }
  }
}
</script>

<style scoped>

</style>
