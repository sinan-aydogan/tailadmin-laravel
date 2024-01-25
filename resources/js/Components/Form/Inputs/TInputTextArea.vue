<template>
  <div
      class="relative"
      :class="[errors.length>0 ? `border border-red-500 radius-${radius}`: '']"
  >
    <t-x-circle-icon
        v-if="clearButton && modelValue"
        @click.native="$emit('update:modelValue', null)"
        class="absolute rounded-full -top-3 -right-3 w-6 h-6 bg-white hover:bg-red-500 text-red-500 hover:text-white cursor-pointer"
    />
    <textarea
        :class="[
            'input h-auto w-full',
            `radius-${radius}`,
            {'input-disabled cursor-not-allowed' : disabled || readOnly }
            ]"
        :rows="rows"
        :id="id"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        ref="input"
        :disabled="disabled"
    />
    <span
        class="absolute bg-white bg-opacity-70 bottom-3 right-2 float-right text-xs border px-1 py-0.5 rounded-full min-w-[1.5rem] text-center bg-white-500"
        v-show="counter && modelValue">
      {{ textLength }}
    </span>
  </div>
</template>

<script>
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";
import TXCircleIcon from "@/Components/Icon/TXCircleIcon";
import {toRefs, watch, inject, ref} from "vue";

export default {
  name: "TInputTextArea",
  components: {TXCircleIcon},
  mixins: [radiusSizeMixin],
  props: {
    modelValue: {
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
      default: false
    },
    readOnly: {
      default: false
    }
  },
  setup(props) {
    /*Definitions*/
    const {modelValue} = toRefs(props);

    /*Watch Text Length*/
    const textLength = ref();
    watch(modelValue, () => {
      if (modelValue.value) {
        textLength.value = modelValue.value.length
      }
    })

    /*Get Error Status*/
    const errors = inject('errors', []);

    return {errors, textLength}
  }
}
</script>
