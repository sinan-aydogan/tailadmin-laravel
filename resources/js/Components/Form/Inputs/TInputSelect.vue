<template>
  <div v-click-outside="outside" class="relative select-none min-w-3">
    <div :class="['form-input hover:border-gray-400 bg-white h-10 flex items-center cursor-pointer',radiusStyle]">
      <slot></slot>
      <!--Placeholder Text-->
      <span v-if="selectedID === null" :class="['w-full p-2',disabled && 'text-gray-300']"
            aria-disabled="true"
            @click="changeShowOptions">
                {{ placeHolder ? placeHolder : 'Select' }}
            </span>
      <!--Selected Option-->
      <div v-if="selectedID !== null" class="p-2 w-full" @click="changeShowOptions">
                <span v-if="selectedOption.componentInstance.$el.innerHTML"
                      v-html="selectedOption.componentInstance.$el.innerHTML"/>
        <span v-else v-html="selectedOption.componentInstance.label"/>
      </div>
      <!--Clear Button-->
      <div v-if="clearButton && selectedID" @click="selectedID = null;searchText = '';$emit('input',null)">
        <t-x-circle-icon class="w-6 h-6 rounded-full hover:bg-red-500 hover:text-white cursor-pointer"/>
      </div>
      <!--DropDown Icon-->
      <div @click="changeShowOptions">
        <t-chevron-down-icon
            :class="[
                'w-6 h-6 transform duration-300',
                showOptions ? 'rotate-90' : 'rotate-0'
                ]"
        />
      </div>
      <!--Options Container-->
      <div v-if="showOptions"
           class="absolute flex flex-col top-11 bg-white border border-gray-300 rounded-md -ml-2 shadow-lg z-50">
        <!--Search Box-->
        <div v-if="search" class="flex w-full p-2 bg-gray-200">
          <t-input-text v-model="searchText"
                        :placeholder="searchPlaceHolder ? searchPlaceHolder : 'Search...'"></t-input-text>
        </div>
        <!--Options List-->
        <div
            v-for="(item,index) in searchList"
            v-if="index<10"
            :key="index"
            :class="[
                'flex hover:bg-gray-200 p-2 cursor-pointer whitespace-nowrap',
                alignStyle[align]
            ]"
            @click="
            !item.componentInstance.$attrs.disabled && $emit('input', item.componentInstance.value);
            !item.componentInstance.$attrs.disabled && (showOptions = !showOptions);
            !item.componentInstance.$attrs.disabled && select(index)">
          <div v-if="item.componentInstance.$el.innerHTML" v-html="item.componentInstance.$el.innerHTML"/>
          <div v-else v-html="item.componentInstance.label"/>
        </div>
        <div v-if="searchList.length>10" class="hidden tablet:block text-xs text-center p-2 text-blue-500">The results({{searchList.length}}) are
          too many, please search...
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TInputText from "@/Components/Form/Inputs/TInputText";
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";
import TChevronDownIcon from "@/Components/Icon/TChevronDownIcon";
import TChevronLeftIcon from "@/Components/Icon/TChevronLeftIcon";
import TXCircleIcon from "@/Components/Icon/TXCircleIcon";

export default {
  name: "TInputSelect",
  components: {TXCircleIcon, TChevronLeftIcon, TChevronDownIcon, TInputText},
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
      selectedID: null,
      selectedOption: {},
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
      let options = [...this.options];
      this.selectedID = options[index].componentInstance._uid;
      let selected = options.filter(item => item.componentInstance._uid === this.selectedID)
      this.selectedOption = selected[0];
    },
    changeShowOptions() {
      if (this.disabled) {
        this.showOptions = false
      } else {
        this.showOptions = !this.showOptions
      }
    },
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
      this.options = this.searchList
    }
  },
  watch: {
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
