<template>
    <div class="flex flex-row" @click="!disabled && updateField()">
        <div :class="[
        'flex flex-shrink-0 justify-center items-center w-5 h-5 border mr-1',
        isChecked && 'bg-'+color+'-100',
        checkboxStyle,
        radiusStyle
        ]">
            <div v-if="isChecked" :class="'text-'+color+'-500'">
                <slot v-if="$slots.hasOwnProperty('icon')" name="icon"/>
                <div v-else :class="['flex w-3 h-3',defaultSelectorStyle,radiusStyle]"></div>
            </div>
        </div>
        {{ label }}
    </div>
</template>

<script>
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";
import { computed, ref, toRefs, watch } from "vue";

export default {
    name: 'TInputRadioButton',
    mixins: [radiusSizeMixin],
    props: {
        modelValue: String|Number|Boolean|null,
        inputValue: String|Number|Boolean|null,
        label: String,
        color: {
            type: String,
            default: 'white'
        },
        nullable: {
            default: true
        },
        id: String,
        checked: Boolean,
        disabled: Boolean
    },
    emits: ['update:modelValue'],
    setup(props, {emit}) {
        const isChecked = ref(props.checked);
        const {modelValue, inputValue, color} = toRefs(props);

        const updateField = ()=>{
            emit('update:modelValue', inputValue.value);
        }

        const checkboxStyle = computed(() => {
            let style;
            if (color.value === 'white') {
                style = 'hover:bg-blue-100 checked:bg-indigo-200 border-gray-300 text-gray-600'
            } else if (color.value === 'black') {
                style = 'hover:bg-gray-500 checked:bg-indigo-200 border-black bg-gray-500 text-gray-100'
            } else {
                style = 'hover:bg-' + color.value + '-200 active:bg-' + color.value + '-200 border-' + color.value + '-500'
            }
            return style
        })

        const defaultSelectorStyle = computed(() => {
            let style;
            if (color.value === 'white') {
                style = 'bg-gray-500'
            } else if (color.value === 'black') {
                style = 'bg-gray-700'
            } else {
                style = 'bg-' + color.value + '-500'
            }
            return style
        })

        watch(modelValue, (value)=>{
            isChecked.value = value === inputValue.value;
        })

        return {
            isChecked,
            checkboxStyle,
            defaultSelectorStyle,
            updateField
        }
    }
}
</script>
