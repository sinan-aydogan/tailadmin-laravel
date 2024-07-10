<template>
    <div class="grid grid-cols-12 gap-4">
        <!--From : Text Input-->
        <t-input-text
            class="col-span-5"
            placeholder="from"
            :model-value="modelValue.from"
            @update:model-value="modelValue.from = inputType === 'number' ? Number($event) : $event"
        />
        <!--Divider-->
        <span class="col-span-2 flex justify-center items-center">
                <iconify-icon icon="octicon:arrow-both-16"
                              class="w-6 h-6"/>
        </span>

        <!--To : Text Input-->
        <t-input-text
            class="col-span-5"
            placeholder="to"
            :model-value="modelValue.to"
            @update:model-value="modelValue.to = inputType === 'number' ? Number($event) : $event"
        />
    </div>
</template>

<script>
import TInputText from "@/Components/Form/Inputs/TInputText.vue";

export default {
    name: "TInputBetween",
    components: { TInputText },
    props: {
        modelValue: {
            type: Object,
            default() {
                return {
                    from: null,
                    to: null
                };
            }
        },
        inputType: {
            type: String,
            default: "text"
        }
    },
    emits: ["update:modelValue"],
    setup() {
    }
};
</script>

<style scoped>

</style>
