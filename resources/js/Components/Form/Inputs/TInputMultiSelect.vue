<template>
  <div v-click-outside="outside" class="relative select-none min-w-3">
    <!--Container-->
    <div
        :class="['select-container z-10',radiusStyle]"
        @click.self="changeShowOptions"
    >

      <!--Texts-->
      <div class="flex">

        <!--Placeholder Text-->
        <span
            v-if="value === [] || value === null || value.length === 0"
            class="w-full"
            @click="changeShowOptions"
            v-text="placeHolder ? placeHolder : 'Select'"
        />

        <!--Selected Option-->
        <div v-else class="flex flex-wrap justify-start gap-2 py-2 z-10">
          <!--ScopeSlot Rich Label-->
          <span
              v-for="(item,key,index) in selectedOption"
              v-if="$scopedSlots.label"
              :key="selectedOption[optionsValueKey]"
          >
            <t-badge
                :radius="8"
            >
              <t-x-circle-icon slot="icon" class="w-5 h-5 text-gray-400 hover:text-red-500"
                               @click.native="select(item)"/>
              <slot
                  :props="item"
                  name="label"
                  v-html="item[optionsLabelKey]"
              />
            </t-badge>
          </span>

          <!--Simple Text Label-->
          <span
              v-for="(item,key,index) in selectedOption"
              v-if="!$scopedSlots.label"
              :key="selectedOption[optionsValueKey]"
          >
          <t-badge
              :radius="8"

          >
            <t-x-circle-icon slot="icon" class="w-5 h-5 text-gray-400 hover:text-red-500" @click.native="select(item)"/>
            {{ item[optionsLabelKey] }}
          </t-badge>
        </span>
        </div>

      </div>

      <!--Icons-->
      <div class="inline-flex">

        <!--Clear Button-->
        <div
            v-if="clearButton && selectedOption.length > 0"
            @click="selectedIDs = [];searchText = '';$emit('input',[])"
        >
          <t-x-circle-icon class="w-6 h-6 rounded-full hover:bg-red-500 hover:text-white cursor-pointer"/>
        </div>

        <!--Dropdown Icon-->
        <t-chevron-down-icon
            :class="[
                'select-dropdown-icon transform',
                showOptions ? 'rotate-90' : 'rotate-0'
                ]"
            @click.native="changeShowOptions"
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
              selectedIDs.includes(item[optionsValueKey]) && 'bg-gray-100 border-b last:border-b-0',
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
        <t-check-circle-solid-icon
            v-if="selectedIDs.includes(item[optionsValueKey])"
            class="w-5 h-5 text-green-500"
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
import TBadge from "@/Components/Badge/TBadge";
import TCheckCircleSolidIcon from "@/Components/Icon/TCheckCircleSolidIcon";

export default {
  name: "TInputMultiSelect",
  components: {TCheckCircleSolidIcon, TBadge, TXCircleIcon, TChevronLeftIcon, TChevronDownIcon, TInputText},
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
        el.__vueClickOutside__ = []

      }
    }
  },
  data() {
    return {
      selectedIDs: [],
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

      let list = [];

      for (let i = 0; i < this.value.length; i++) {
        if (this.options.find((item => item[this.optionsValueKey] === this.value[i]))) {
          list.push(this.options.find((item => item[this.optionsValueKey] === this.value[i])))
        }
      }

      return list

      console.log(this.list)
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
    },
    changeShowOptions() {
      if (this.disabled) {
        this.showOptions = false
      } else {
        this.showOptions = !this.showOptions
      }
    },
    select(item) {

      if (!this.selectedIDs.includes(item[this.optionsValueKey])) {
        /*Select the option*/
        this.selectedOption.push(item);
        this.selectedIDs.push(item[this.optionsValueKey])
        this.$emit('input', this.selectedIDs)
        this.showOptions = false
      } else {
        /*Deselect the option*/
        this.selectedOption.forEach((a, index) => {
          if (a[this.optionsValueKey] === item[this.optionsValueKey]) {
            this.selectedOption.splice(index, 1);
            this.selectedIDs.splice(index, 1);
            this.$emit('input', this.selectedIDs)
            this.showOptions = false
          }
        })

      }

    }
  }
}
</script>

<style scoped>

</style>
