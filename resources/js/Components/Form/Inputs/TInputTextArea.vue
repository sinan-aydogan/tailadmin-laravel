<template>
  <div class="relative">
    <t-x-circle-icon
        v-if="clearButton && value"
        @click.native="$emit('input', null)"
        class="absolute rounded-full -top-3 -right-3 w-6 h-6 bg-white hover:bg-red-500 text-red-500 hover:text-white cursor-pointer"
    />
    <textarea
        :class="['form-input h-auto w-full',radiusStyle]"
        :rows="rows"
        :id="id"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event.target.value)"
        ref="input"
        :disabled="disabled"
    />
    <span
        class="absolute bg-white bg-opacity-70 bottom-3 right-2 float-right text-xs border px-1 py-0.5 rounded-full min-w-6 text-center bg-white-500"
        v-show="counter && value">
      {{textLength}}
    </span>
  </div>
</template>

<script>
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";
import TXCircleIcon from "@/Components/Icon/TXCircleIcon";

export default {
  name: "TInputTextArea",
  components: {TXCircleIcon},
  mixins: [radiusSizeMixin],
  props: {
    value: {
      type: String
    },
    id: {
      type: String
    },
    rows: {
      type: Number,
      default: 3
    },
    placeholder: {
      type: String
    },
    clearButton: {
      type: Boolean,
      default: false
    },
    counter: {
      type: Boolean,
      default: false
    },
    disabled: {
      default:false
    }
  },
    data(){
      return {
          textLength:null
      }
    },
    watch: {
      value(){
        if(this.value) this.textLength = this.value.length
      }
    }
}
</script>

<style scoped>

</style>
