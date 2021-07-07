<template>
    <div
        v-if="$slots.icon"
        :class="['flex flex-row items-center overflow-hidden',
        radiusStyle]"
    >
        <div :class="['absolute flex w-10 h-10 bg-gray-200 items-center justify-center rounded-r-none border-gray-300 border border-r-0 text-gray-600', radiusStyle]">
            <slot name="icon"></slot>
        </div>
        <input
            :class="['form-input rounded-l-none h-10 ml-10',radiusStyle]"
            :type="type"
            :id="id"
            :placeholder="placeholder"
            :value="value"
            :disabled="disabled"
            @input="$emit('input', $event.target.value)"
            ref="input"
        >
    </div>
    <input
        v-else
        :class="['form-input h-10', radiusStyle]"
        :type="type"
        :id="id"
        :placeholder="placeholder"
        :value="value"
        :disabled="disabled"
        @input="$emit('input', $event.target.value)"
        ref="input"
    >

</template>

<script>
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";
export default {
    name: "TInputText",
    props: {
      value:{},
      id:{},
      placeholder: {},
      type: {
        default: 'text'
      },
      disabled: {
        default:false
      }

},
    mixins: [radiusSizeMixin],
}
</script>
