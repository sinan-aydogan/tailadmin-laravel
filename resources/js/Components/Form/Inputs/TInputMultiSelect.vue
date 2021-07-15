<template>
  <div v-click-outside="outside" class="relative select-none min-w-3">
    <!--Clear Button-->
    <span v-if="clearButton && selectedID"
          class="absolute flex top-2 right-2 border w-6 h-6 items-center justify-center rounded-lg hover:bg-red-500 hover:text-white cursor-pointer"
          @click="selectedID = [];selectedOption = [];searchText = '';$emit('input',null)">x</span>
    <div :class="['form-input bg-white min-h-10 flex items-center cursor-pointer',radiusStyle]">
      <slot></slot>
      <!--Placeholder Text-->
      <span v-if="selectedOption.length === 0" :class="['w-full p-2 hover:font-semibold',disabled && 'text-gray-300']"
            aria-disabled="true"
            @click="changeShowOptions">
                {{ placeHolder ? placeHolder : 'Select' }}
            </span>
      <!--Selected Option-->
      <div
          v-if="selectedOption.length > 0"
          class="flex flex-wrap gap-1 pl-0 p-2 w-full"
          @click="changeShowOptions">
        <div
            class="relative"
            v-for="(item,index) in selectedOption"
            v-if="item.componentInstance.$el.innerHTML"
            :key="index"
            @click="deSelect(index)"
        >
          <t-badge class="hover:bg-red-500" v-html="item.componentInstance.$el.innerHTML" />
        </div>
        <div v-for="(item,index) in selectedOption" v-else :key="index">
          <t-badge v-html="item.componentInstance.label"/>
        </div>
      </div>
      <!--Options Container-->
      <div v-if="showOptions"
           class="absolute flex flex-col top-11 bg-white border border-gray-300 rounded-md w-full -ml-2 shadow-lg z-50">
        <!--Search Box-->
        <div v-if="search" class="flex w-full p-2 bg-gray-200">
          <t-input-text v-model="searchText"
                        :placeholder="searchPlaceHolder ? searchPlaceHolder : 'Search...'"></t-input-text>
        </div>
        <!--Options List-->
        <div
            v-for="(item,index) in searchList"
            v-if="index<9"
            :key="index"
            :class="[
                'inline-flex justify-between hover:bg-gray-200 p-2 cursor-pointer',
                alignStyle[align]
            ]"
            @click="$emit('input', item.componentInstance.value); showOptions = !showOptions; select(index)">
          <div v-if="item.componentInstance.$el.innerHTML" v-html="item.componentInstance.$el.innerHTML"/>
          <div v-else v-html="item.componentInstance.label"/>
          <t-check-circle-solid-icon
              v-if="selectedID.includes(item.componentInstance.value)"
              class="w-5 h-5 text-green-500"
          />
        </div>
        <div v-if="searchList.length>10" class="hidden lg:block text-xs text-center p-2 text-blue-500">The results are
          too many, please search...
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TInputText from "@/Components/Form/Inputs/TInputText";
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";
import TBadge from "@/Components/Badge/TBadge";
import TCheckCircleSolidIcon from "@/Components/Icon/TCheckCircleSolidIcon";

export default {
  name: "TInputMultiSelect",
  components: {TCheckCircleSolidIcon, TBadge, TInputText},
  props: ['value', 'placeHolder', 'searchPlaceHolder', 'clearButton', 'disabled', 'search', 'align'],
  mixins: [radiusSizeMixin],
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
      searchText: '',
      searchList: [],
      options: [],
      selectedID: [],
      selectedOption: [],
      showOptions: false,
      alignStyle: {
        'left': 'text-left',
        'center': 'text-center',
        'right': 'text-right'
      }
    }
  },
  methods: {
    outside() {
      this.showOptions = false
    },
    select(index) {
      let options = [...this.searchList];
      let selectedUid = options[index].componentInstance._uid;
      let selected = options.filter(item => item.componentInstance._uid === selectedUid)
      if(!this.selectedID.includes(selected[0].componentInstance.value)){
        this.selectedOption.push(selected[0]);
        this.selectedID.push(selected[0].componentInstance.value)
      }else{
        this.deSelect(index)
      }
    },
    deSelect(index) {
      this.selectedOption.splice(index,1);
      this.selectedID.splice(index,1);
    },
    changeShowOptions() {
      if (this.disabled) {
        this.showOptions = false
      } else {
        this.showOptions = !this.showOptions
      }
    }
  },
  created() {
    this.options = this.$slots.default;
    if (this.searchText === '') {
      let list;
      list = this.options;
      list.forEach(item => {
        if (item.tag !== undefined) {
          this.searchList = [...this.searchList, item]
        }
      })
    }
  },
  watch: {
        value() {
          this.$emit('change',this.value)
        },
    selectedID(){
          this.$emit('input',this.selectedID)
},
    searchText() {
      if (this.searchText !== '') {
        this.searchList = this.options.filter(option => option.componentInstance.$el.innerHTML.toLowerCase().replace(/[^a-zA-Z ]/g, "").indexOf(this.searchText.toLowerCase().replace(/[^a-zA-Z ]/g, "")) > -1)
      } else {
        this.searchList = this.options
      }
    }
  }
}
</script>

<style scoped>

</style>
