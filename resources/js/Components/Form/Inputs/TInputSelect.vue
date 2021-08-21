<template>
  <div v-click-outside="outside" class="relative select-none min-w-3">
    <!--Container-->
    <div
        :class="['select-container', disabled && 'bg-gray-100' ,radiusStyle]"
        @click="changeShowOptions"
    >

      <!--Texts-->
      <div class="inline-flex w-full">

        <!--Placeholder Text-->
        <span
            v-if="value === null"
            v-text="placeHolder ? placeHolder : 'Select'"
        />

        <!--Selected Option-->
        <span v-else>
          <!--ScopeSlot Rich Label-->
          <slot
              v-if="$scopedSlots.label"
              :props="selectedOption"
              name="label"
              v-html="selectedOption[optionsLabelKey]"
          />
          <!--Simple Text Label-->
        <span
            v-if="!$scopedSlots.label"
            v-text="selectedOption[optionsLabelKey]"
        />
        </span>

      </div>

      <!--Icons-->
      <div class="inline-flex">

        <!--Clear Button-->
        <div
            v-if="clearButton && selectedOption"
            @click="searchText = '';$emit('input',null)"
        >
          <t-x-circle-icon class="w-6 h-6 rounded-full hover:bg-red-500 hover:text-white cursor-pointer"/>
        </div>

        <!--Dropdown Icon-->
        <t-chevron-down-icon
            :class="[
                'select-dropdown-icon transform',
                showOptions ? 'rotate-90' : 'rotate-0'
                ]"
            @click="changeShowOptions"
        />
      </div>
    </div>

    <!--Options Container-->
    <div v-if="showOptions" class="select-options-container">
      <!--Search Box-->
      <div v-if="search" class="flex w-full p-2 bg-gray-200">
        <t-input-text
            v-model="searchText"
            :placeholder="searchPlaceHolder ? searchPlaceHolder : 'Search...'"
        />
      </div>
      <!--Options List-->
      <div
          v-for="(item,index) in searchedList"
          v-if="index<10"
          :key="item[optionsValueKey]"
          :class="[
              'select-option-item',
              alignStyle[align]
              ]"
          @click="select(item)"
      >
        <!--ScopeSlot Rich Label-->
        <slot
            v-if="$scopedSlots.label"
            :props="item"
            name="label"
            v-html="item[optionsLabelKey]"
        />
        <!--Simple Text Label-->
        <span
            v-else
            v-text="item[optionsLabelKey]"
        />
      </div>
      <!--Many Items Notification-->
      <div
          v-if="searchedList.length>10"
          class="hidden tablet:block text-xs text-center p-2 text-blue-500"
      >
        The
        results({{ searchedList.length }}) are
        too many, please search...
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
  props: ['value', 'options', 'optionsLabelKey', 'optionsValueKey', 'placeHolder', 'searchPlaceHolder', 'clearButton', 'disabled', 'search', 'align'],
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
      showOptions: false,
      alignStyle: {
        'left': 'text-left',
        'center': 'text-center',
        'right': 'text-right'
      }
    }
  },
  computed: {
    selectedOption() {
      if (!this.value) {
        return null
      }

      return this.options.find(item => item[this.optionsValueKey] === this.value)
    },
    searchedList() {
      if (this.searchText === '') {
        return this.options
      }

      return this.options.filter(option => option[this.optionsLabelKey].toLowerCase().replace(/[^a-zA-Z ]/g, "").includes(this.searchText.toLowerCase().replace(/[^a-zA-Z ]/g, "")))
    }
  },
  methods: {
    outside() {
      this.showOptions = false
    }
    ,
    changeShowOptions() {
      if (this.disabled) {
        this.showOptions = false
      } else {
        this.showOptions = !this.showOptions
      }
    }
    ,
    select(item) {
      this.$emit('input', item[this.optionsValueKey])
      this.showOptions = false
    }
  }
}
</script>

<style scoped>

</style>
