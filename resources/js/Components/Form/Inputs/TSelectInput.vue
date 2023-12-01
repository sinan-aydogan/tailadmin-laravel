<script setup>

const emit = defineEmits([
    'update:modelValue',
])

defineProps({
    modelValue: {
        required: false,
    },
    options: {
        type: Array,
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
    <select class='rounded-lg text-slate-600' :value='modelValue'
            @change="emit('update:modelValue', $event.target.value)">
        <option v-show='hideSelectedOption ? option[optionValue] !== modelValue : true'
                :disabled='disabledCallback(option)' v-for='option in options' :key='option'
                :value='option[optionValue]'
                v-text='option[optionLabel]'></option>
    </select>
</template>

<style scoped>

</style>
