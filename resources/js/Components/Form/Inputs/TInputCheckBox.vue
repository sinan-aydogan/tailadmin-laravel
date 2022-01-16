<template>
    <!--TODO:Styles will be separated-->
    <div class="flex flex-row" @click="!disabled && updateField()">
        <div
            :class="[
                'flex flex-shrink-0 justify-center items-center w-5 h-5 border mr-1',
                isChecked && 'bg-'+color+'-100',
                checkboxStyle(),
                radiusStyle
                ]">
            <div v-if="isChecked" :class="'text-'+color+'-500'">

                <slot v-if="$slots.icon" name="icon"/>
                <div v-else :class="['flex w-3 h-3',defaultSelectorStyle(),radiusStyle]"></div>
            </div>
        </div>
        {{ label }}
    </div>
</template>

<script>
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";
import TCheckIcon from "@/Components/Icon/TCheckIcon";
import {computed, defineComponent, ref, toRefs} from "vue";

export default defineComponent({
    name: 'TInputCheckBox',
    components: {TCheckIcon},
    mixins: [radiusSizeMixin],
    props: {
        modelValue: [Array, Boolean],
        inputValue: String,
        multipleOption: {
            type: Boolean,
            default: false
        },
        label: String,
        color: {
            type: String,
            default: 'white'
        },
        id: String,
        disabled: Boolean
    },
    emits: ['update:modelValue'],
    setup(props, {emit}) {
        /*Definitions*/
        const {multipleOption, color, inputValue, modelValue} = toRefs(props)

        /*Generating Style Classes*/
        const checkboxStyle = () => {
            let style;
            if (color.value === 'white') {
                style = 'bg-white hover:bg-blue-100 checked:bg-indigo-200 border-gray-300 text-gray-600'
            } else if (color.value === 'black') {
                style = 'bg-white hover:bg-gray-500 checked:bg-indigo-200 border-black text-gray-100'
            } else {
                style = 'bg-white hover:bg-' + color.value + '-200 active:bg-' + color.value + '-200 border-' + color.value + '-500'
            }
            return style
        }

        const defaultSelectorStyle = () => {
            let style;
            if (color.value === 'white') {
                style = 'bg-gray-500'
            } else if (color.value === 'black') {
                style = 'bg-gray-800'
            } else {
                style = 'bg-' + color.value + '-500'
            }
            return style
        }

        /*Default Value Control*/
        const isChecked = computed(() => {
            if (multipleOption.value) {
                return modelValue.value.includes(inputValue.value)
            }
            return !!modelValue.value
        })

        /*Update Action*/
        const updateField = () => {
            let newValue = modelValue.value
            if (multipleOption.value) {
                if (!modelValue.value.includes(inputValue.value)) {
                    newValue.push(inputValue.value);
                } else {
                    newValue.splice(modelValue.value.indexOf(inputValue.value), 1);
                }
            } else {
                newValue = !newValue
            }
            emit('update:modelValue', newValue);
        }

        return {isChecked, checkboxStyle, defaultSelectorStyle, updateField}
    }
})
</script>
