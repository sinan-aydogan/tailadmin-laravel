<template>
    <date-picker
        v-model="date"
        :is24hr="is24hr"
        :isRange="isRange"
        :masks="{ type: 'string', mask: masks }"
        :mode="mode"
    >
        <template v-slot="{ inputValue, inputEvents, togglePopover }">
            <div class="relative flex items-center">
                <t-input-text
                    v-if="!isRange"
                    :modelValue="inputValue"
                    v-on="inputEvents"
                    :placeholder="masks"
                    @click="togglePopover()"
                    :radius="temporaryRadius"
                >
                    <template #append>
                        <div class="flex space-x-2 overflow-hidden">
                            <!--Clear Icon-->
                            <iconify-icon
                                icon="mingcute:close-circle-fill"
                                v-if="!isRange && date && clearButton"
                                class="rounded-full w-6 h-6 hover:text-red-500 cursor-pointer ml-1"
                                @click="date = null"
                            />

                            <!-- Icon -->
                            <iconify-icon
                                :icon="mode.toLowerCase().includes('time') && !mode.toLowerCase().includes('date') ? 'tabler:clock' : mode.toLowerCase().includes('date') && !mode.toLowerCase().includes('time') ? 'tabler:calendar' : 'tabler:calendar-time'"
                                v-if="mode"
                                class="w-6 h-6"
                                @click="togglePopover()"
                            />
                        </div>
                    </template>
                </t-input-text>
                <div
                    v-if="isRange"
                    class="input flex-wrap sm:justify-between items-center pl-2 cursor-pointer w-full overflow-hidden"
                    :class="`radius-${temporaryRadius}`"
                    @click="togglePopover()"
                >
                    <div v-if="date">
                        <span class="text-center mr-1 py-1 whitespace-nowrap">
                            <b>Start:</b>
                        </span>
                        {{ inputValue.start }}
                    </div>
                    <div v-if="date">
                        <span class="text-center mr-3 py-1 whitespace-nowrap">
                            <b>End:</b>
                        </span>
                        {{ inputValue.end }}
                    </div>
                    <div v-if="isRange && !date">Please click for select</div>
                    <div class="flex space-x-2 px-1 justify-center text-input-append">
                        <!-- Clear Icon -->
                        <span v-if="isRange && date">
                            <iconify-icon
                                icon="mingcute:close-circle-fill"
                                class="rounded-full w-6 h-6 hover:text-red-500 cursor-pointer ml-1"
                                @click="date = null"
                            />
                        </span>

                        <!-- Icon -->
                        <span v-if="mode">
                            <iconify-icon
                                :icon="mode.toLowerCase().includes('time') && !mode.toLowerCase().includes('date') ? 'tabler:clock' : mode.toLowerCase().includes('date') && !mode.toLowerCase().includes('time') ? 'tabler:calendar' : 'tabler:calendar-time'"
                                class="w-6 h-6"
                                @click="togglePopover()"
                            />
                        </span>
                    </div>
                </div>
            </div>
        </template>
    </date-picker>
</template>

<script>
/* Main function */
import { defineComponent, toRefs, ref, watch, inject } from "vue";
import { DatePicker } from "v-calendar";
import "v-calendar/style.css";
/* Components */
import TInputText from "@/Components/Form/Inputs/TInputText.vue";

/*Sources*/
import { inputDateConf } from "@/config";

export default defineComponent({
    props: {
        modelValue: {
            type: [String, Array, Object],
            default: null
        },
        mode: {
            type: String,
            default: "date"
        },
        masks: {
            type: String,
            default: "DD-MM-YYYY"
        },
        is24hr: {
            type: Boolean,
            default: false
        },
        isRange: {
            type: Boolean,
            default: false
        },
        radius: {
            type: Number,
            default: null
        },
        clearButton: {
            type: Boolean,
            default: true
        }
    },
    components: {
        TInputText,
        DatePicker
    },
    emits: ["update:modelValue"],
    setup(props, { emit }) {
        const { modelValue, radius } = toRefs(props);
        const date = ref(modelValue.value ? modelValue.value : new Date());
        const inertnalDate = ref(null);
        const appConf = inject("appConf");

        /*Temporary Definations*/
        const temporaryRadius = ref(radius.value ? radius.value : inputDateConf.radius ? inputDateConf.radius : appConf.value.radius);

        watch(modelValue, () => {
            date.value = modelValue.value;
        });

        watch(date, () => {
            emit("update:modelValue", date.value);
        });

        return {
            temporaryRadius,
            inertnalDate,
            date
        };
    }
});
</script>

<style scoped>
* >>> select {
    background-image: none;
}
</style>
