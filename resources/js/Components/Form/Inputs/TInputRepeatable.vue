<template>
  <div v-click-outside="outside" class="relative select-none">
    <!--Adding Form-->
    <div :class="['form-input h-10 items-center cursor-pointer hover:border-blue-500 relative', radiusStyle]"
         @click="showPanel=!showPanel">
      <!--Placeholder-->
      {{ value.length === 0 ? 'No items found' : value.length + ' items' }}
      <!--Items and Add Form Showing Button-->
      <t-chevron-down-icon
          :class="[
                'absolute right-2 w-5 h-5 transform duration-300',
                showPanel ? 'rotate-90' : 'rotate-0'
                ]"
      />
    </div>

    <!--Panel-->
    <div
        v-if="showPanel"
        class="absolute flex flex-col w-full border border-gray-300 py-4 px-2 rounded-md mt-2 space-y-2 bg-gradient-to-t from-gray-200 to-gray-100 shadow-inner shadow z-10">
      <!--Fields-->
      <div class="flex flex-row items-center">
        <!--Conditional View-->
        <input v-if="value1name"
               v-model="value1"
               :class="value2name == null ? 'rounded-md border' : 'md:rounded-l md:rounded-r-none md:border-r-0'" :placeholder="value1name" class="flex w-full rounded  border-gray-300 p-2" name="value1"
               type="text"/>
        <input v-if="value2name" v-model="value2" :placeholder="value2name" class="flex w-full rounded md:rounded-r md:rounded-l-none border border-gray-300 p-2"
               name="value2"
               type="text"/>
        <!--Add Button-->
        <div class="flex items-center justify-center ml-1 h-10">
          <t-button color="green" type="button" @click.native="addItem">
            <t-plus-circle-icon class="w-6 h-6 md:w-5 md:h-5"/>
            <span class="hidden md:block pr-2">Add</span>
          </t-button>
        </div>
      </div>
      <div v-if="emptyMessage != null" class="text-red-500 text-sm">{{ emptyMessage }}</div>
      <!--Header-->
      <div v-if="value.length >0"
           class="grid grid-cols-12 w-full border-b border-gray-300 items-center space-x-2 px-2 py-1 font-bold ">
        <span class="col-span-1"></span>
        <span class="col-span-5">{{ value1name }}</span>
        <span class="col-span-5">{{ value2name }}</span>
        <span class="col-span-1"></span>
      </div>
      <!--Items-->
      <div v-for="(item,index) in value" :key="index"
           class="grid grid-cols-12 bg-gray-50 border rounded-md items-center space-x-2 px-2 py-1">
        <!--Counter-->
        <span class="col-span-1">{{ index + 1 }}.</span>
        <!--Fields-->
        <span class="col-span-5">{{ item.value1 }}</span>
        <span class="col-span-5">{{ item.value2 }}</span>
        <!--Delete Button-->
        <span class="col-span-1" @click="deleteItem(index)">
                     <t-trash-icon class="w-6 h-5 text-red-500 cursor-pointer"/>
                </span>
      </div>
      <!--Close Button-->
      <t-button color="white" size="sm" type="button" @click.native="showPanel=false">
        Close
      </t-button>
    </div>
  </div>
</template>

<script>
import TPlusCircleIcon from "@/Components/Icon/TPlusCircleIcon";
import TTrashIcon from "@/Components/Icon/TTrashIcon";
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";
import TButton from "@/Components/Button/TButton";
import TChevronDownIcon from "@/Components/Icon/TChevronDownIcon";

export default {
  props: ['value1name', 'value2name', 'value'],
  components: {
    TChevronDownIcon,
    TButton,
    TTrashIcon,
    TPlusCircleIcon,
  },
  mixins: [radiusSizeMixin],
  data() {
    return {
      value1: null,
      value2: null,
      showPanel: false,
      emptyMessage: null,
    }
  },
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
  methods: {
    reset() {
      this.value1 = null;
      this.value2 = null;
      this.emptyMessage = null;
    },
    addItem() {
      if (this.value2name != null) {
        if (this.value1 == null || this.value2 == null) {
          this.emptyMessage = 'Please fill in the fields';
          window.setTimeout(() => {
            this.emptyMessage = null;
          }, 3000);
        } else {
          this.value.push({value1: this.value1, value2: this.value2});
          this.reset();
        }
      } else {
        if (this.value1 == null) {
          this.emptyMessage = 'Please fill in the fields';
          window.setTimeout(() => {
            this.emptyMessage = null;
          }, 3000);
        } else {
          this.value.push({value1: this.value1});
          this.reset();
        }
      }
    },
    deleteItem(index) {
      this.value.splice(index, 1);
    },
    outside() {
      this.showPanel = false
    }
  }
}
</script>
