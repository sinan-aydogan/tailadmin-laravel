<script setup lang="ts">
import type { PropType } from 'vue'

const emit = defineEmits(['update:modelValue'])

const modelValue = defineModel({
    type() {
        return String
    },
})

defineProps({
    options: {
        type: Array as PropType<Record<string, any>[]>,
        default: () => [],
    },
    optionValue: {
        type: String,
        default: 'id',
    },
    optionLabel: {
        type: String,
        default: 'name',
    },
    disabledCallback: {
        type: Function,
        default: () => false,
    },
    hideSelectedOption: {
        type: Boolean,
        default: false,
    },
})
</script>

<template>
    <select v-model="modelValue" class="rounded-lg text-slate-600">
        <template v-for="option in options" :key="option">
            <option
                v-show="
                    hideSelectedOption
                        ? option[optionValue] !== modelValue
                        : true
                "
                :disabled="disabledCallback(option)"
                :value="option[optionValue]"
                v-text="option[optionLabel]"
            ></option>
        </template>
    </select>
</template>
