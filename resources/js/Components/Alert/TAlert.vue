<template>
    <transition name="alert">
        <!--Alert Container-->
        <div
            v-if="showAlertBox"
            :class="[
                'alert',
                radiusStyle,
                styleClass
                ]"
        >
            <!--Inline Line-->
            <div v-if="design.includes('line')"
                 id="line"
                 :class="[design === 'inline' ? 'alert-inline-line' : 'alert-outline-line']"
            />

            <!--Alert Icon-->
            <div v-if="$slots['icon'] && design !== 'elegant'"
                 class="alert-icon"
            >
                <slot name="icon"></slot>
            </div>


            <!--Alert Content-->
            <div class="flex justify-start items-center flex-grow whitespace-normal py-2 px-4">
                <!--Elegant Title-->
                <div v-if="title && design === 'elegant'" id="elegant-title">
                    {{ title }}
                </div>
                <div class="grid grid-cols-1">
                    <!--General Title (except elegant style)-->
                    <span v-if="title && design !== 'elegant'" class="font-bold text-lg">{{ title }}</span>
                    <!--Content Slot-->
                    <div>
                        <slot></slot>
                    </div>
                </div>
            </div>

            <!--Close Icon-->
            <span v-if="closeable" class="alert-close" @click="close">
                <t-x-circle-icon class="h-6 w-6"/>
            </span>

            <!--Countdown Line-->
            <div v-if="timer" class="alert-countdown">
                <div id="countdown" :style="{width: countDownCounter+'%'}"></div>
            </div>
        </div>
    </transition>
</template>

<script>
import {defineComponent, ref} from 'vue'
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";
import TXCircleIcon from "@/Components/Icon/TXCircleIcon";

export default defineComponent({
    name: "TAlert",
    components: {TXCircleIcon},
    mixins: [radiusSizeMixin],
    props: {
        id: {
            type: String
        },
        closeable: {
            type: Boolean,
            required: false,
            default: false
        },
        timer: {
            type: Number,
            required: false
        },
        type: {
            type: String,
            default: null
        },
        title: {
            type: String,
            default: null
        },
        design: {
            type: String,
            default: 'filled'
        },
        color: {
            type: String,
            default: 'white'
        },
        gradientDirection: {
            type: String,
            default: 'r'
        }
    },
    setup(props, {slots, emit}) {
        const showAlertBox = ref(true)
        /*Design Check*/
        const design = props.design
        const color = props.color
        const styleClass = 'alert-' + design + '-' + color + ' alert-' + design + '-base'

        /*Close Function*/
        const close = () => {
            showAlertBox.value = false;
            emit('destroy', props.id)
        }

        /*Timer*/
        const timerCounter = ref(0)
        const countDownCounter = ref(0)

        if (props.timer) {
            /*Timer Function*/
            let timerFn = setTimeout(() => {
                showAlertBox.value = false;
                emit('destroy', props.id)
            }, props.timer)

            /*Count Down Function*/
            let countDownFn = setInterval(() => {
                if (props.timer >= timerCounter.value) {
                    countDownCounter.value = 100 - (timerCounter.value / props.timer) * 100
                    timerCounter.value += 4
                } else {
                    clearInterval(countDownFn)
                }
            }, 1)
        }

        /*Slot Check*/
        const hasSlot = name => !!slots[name]

        return {showAlertBox, styleClass, countDownCounter, timerCounter, hasSlot, close}
    }
})
</script>

<style scoped>
.alert-enter-active, .alert-leave-active {
    transition: opacity ease-out .75s;
}

.alert-enter, .alert-leave-to {
    opacity: 0;
    height: revert;
}

.alert-enter-to, .alert-leave {
    opacity: 1;
    height: revert;
}
</style>
