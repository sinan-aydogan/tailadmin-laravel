<template>
    <date-picker v-model="date" :is24hr="is24hr" :isRange="isRange" :masks="{input:masks}" :mode="mode">
        <template v-slot="{ inputValue, togglePopover }">
            <div class="relative flex items-center">
                <input
                    v-if="!isRange"
                    v-model="inertnalDate"
                    :class="['form-input h-10',radiusStyle]"
                    :placeholder="masks.input"
                    @click="togglePopover()"
                />
                <div
                    v-if="isRange"
                    :class="['form-input flex-col justify-center gap-1 h-16 select-none cursor-pointer',radiusStyle]"
                    @click="togglePopover()"
                >
                    <div v-if="date" class="inline-flex">
                        <span class="text-center mr-1"><b>Start:</b></span>
                        {{ inputValue.start }}
                    </div>
                    <div v-if="date" class="inline-flex">
                        <span class="text-center mr-3"><b>End:</b></span>
                        {{ inputValue.end }}
                    </div>
                    <div v-if="isRange && !date">
                        Please click for select
                    </div>
                </div>
                <div class="absolute flex right-3">
                    <t-x-circle-icon
                        v-if="isRange && date"
                        class="w-5 h-5 text-gray-500 mr-2 cursor-pointer hover:text-red-500"
                        @click.native="date = null"
                    />
                    <t-clock-icon
                        v-if="mode.toLowerCase().includes('time')"
                        class="w-5 h-5 text-gray-500 cursor-pointer"
                        @click.native="togglePopover()"
                    />
                    <t-calendar-icon
                        v-if="mode.toLowerCase().includes('date')"
                        class="w-5 h-5 text-gray-500 cursor-pointer"
                        @click.native="togglePopover()"
                    />
                </div>
            </div>
        </template>

    </date-picker>
</template>

<script>
import { DatePicker } from 'v-calendar';
import TCalendarIcon from "@/Components/Icon/TCalendarIcon";
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";
import TClockIcon from "@/Components/Icon/TClockIcon";
import TXCircleIcon from "@/Components/Icon/TXCircleIcon";


export default {
    props: {
        value: {
            required: true
        },
        mode: {
            default: 'date'
        },
        masks: {
            default: 'DD-MM-YYYY'
        },
        is24hr: {
            type: Boolean,
            default: false
        },
        isRange: {
            type: Boolean,
            default: false
        }
    },
    mixins: [radiusSizeMixin],
    components: {
        TXCircleIcon,
        TClockIcon,
        TCalendarIcon,
        DatePicker,
    },
    data() {
        return {
            inertnalDate: null,
            date: this.value
        }
    },
    watch: {
        date() {
            this.$emit('input', this.date);
        },
        value() {
            this.date = this.value
        }
    }
}
</script>

<style scoped>
* >>> select {
    background-image: none;
}
</style>
