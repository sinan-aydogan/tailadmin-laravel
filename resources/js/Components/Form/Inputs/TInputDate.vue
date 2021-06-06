<template>
    <calendar v-model="value">
        <template v-slot="{ inputValue, inputEvents }">
            <div class="relative flex items-center">
                <input
                    class="border rounded-sm  border-gray-300 w-full p-2"
                    v-on="inputEvents"
                    v-model="inputValue"
                />
                <div class="absolute flex right-2">
                    <calendar-icon class="w-5 h-5 text-gray-500 cursor-pointer" />
                </div>
            </div>
        </template>
    </calendar>
</template>

<script>
import CalendarIcon from '@/Components/Icons/General/Calendar'
import Calendar from 'v-calendar/lib/components/date-picker.umd';


export default {
    props:['value'],
    components: {
        Calendar,
        CalendarIcon,
    },
    watch: {
        value() {
            this.$emit('input', this.value);
        }
    }
}
</script>
