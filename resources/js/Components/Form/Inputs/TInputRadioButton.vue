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
import TCheckIcon from "@/Components/Icon/TCheckIcon.vue";

export default {
    name: 'TInputRadioButton',
    components: {TCheckIcon},
    mixins: [radiusSizeMixin],
    props: {
        value: {},
        inputValue: {},
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
    data() {
        return {
            isChecked: this.checked
        }
    },
    computed: {
        checkboxStyle() {
            let style;
            if (this.color === 'white') {
                style = 'hover:bg-blue-100 checked:bg-indigo-200 border-gray-300 text-gray-600'
            } else if (this.color === 'black') {
                style = 'hover:bg-gray-500 checked:bg-indigo-200 border-black bg-gray-500 text-gray-100'
            } else {
                style = 'hover:bg-' + this.color + '-200 active:bg-' + this.color + '-200 border-' + this.color + '-500'
            }
            return style
        },
        defaultSelectorStyle() {
            let style;
            if (this.color === 'white') {
                style = 'bg-gray-500'
            } else if (this.color === 'black') {
                style = 'bg-gray-700'
            } else {
                style = 'bg-' + this.color + '-500'
            }
            return style
        }
    },
    methods: {
        updateField() {
            this.isChecked = !this.isChecked
            this.$emit('input', this.inputValue);
        }
    },
    watch: {
        value() {
            if (this.value !== this.inputValue) this.isChecked = false;
        }
    }
}
</script>
