<template>
  <div v-click-outside="outside" class="relative select-none min-w-3">
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
          <t-badge :radius="8" class="hover:bg-red-500 hover:text-white hover:border-0 text-sm px-2" v-html="item.componentInstance.$el.innerHTML"/>
        </div>
        <div v-for="(item,index) in selectedOption" v-else :key="index">
          <t-badge :radius="8" color="solid-blue" v-html="item.componentInstance.label"/>
        </div>
      </div>
      <!--Clear Button-->
      <div v-if="clearButton && selectedID.length>0"
           @click="selectedID = [];selectedOption = [];searchText = '';$emit('input',null)">
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
import TXCircleIcon from "@/Components/Icon/TXCircleIcon";
import TChevronDownIcon from "@/Components/Icon/TChevronDownIcon";

export default {
  name: "TInputMultiSelect",
  components: {TChevronDownIcon, TXCircleIcon, TCheckCircleSolidIcon, TBadge, TInputText},
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
