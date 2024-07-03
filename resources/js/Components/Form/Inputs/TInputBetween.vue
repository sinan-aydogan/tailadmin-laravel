<template>
    <div class="grid grid-cols-12 gap-4">
        <!--From : Text Input-->
        <t-input-text
            class="col-span-5"
            placeholder="from"
            :model-value="modelValue.from"
        />
        <!--Divider-->
        <span class="col-span-2 flex justify-center items-center">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </span>
        <!--To : Text Input-->
        <t-input-text
            class="col-span-5"
            placeholder="to"
            :model-value="modelValue.to"
        />
    </div>
</template>

<script>
import TInputText from "@/Components/Form/Inputs/TInputText.vue";

export default {
    name: "TInputBetween",
    components: {TInputText},
    props: {
        modelValue: {
            type: Object,
            default() {
                return {
                    from: null,
                    to: null
                }
            }
        },
        inputType: {
            type: String,
            default: 'text'
        }
    },
    emits: ['update:modelValue'],
    setup() {
    }
}
</script>

<style scoped>

</style>
