<template>
    <transition name="alert">
        <!--Alert Container-->
        <div
            v-if="showAlertBox"
            class="alert"
            :class="[
                `alert-${design}`,
                !type ? `alert-${design}-${color}` :
                    [{ 'alert-green': type === 'success' },
                    { 'alert-yellow': type === 'warning' },
                    { 'alert-red': type === 'error' },
                    { 'alert-blue': type === 'info' }],
                `radius-${radius}`,
            ]"
        >
            <!--Alert Line-->
            <div v-if="design.includes('line')" class="alert-line" />

            <!--Alert Icon-->
            <div v-if="hasSlot('icon')" class="alert-icon">
                <slot name="icon"></slot>
            </div>

            <!--Alert Content-->
            <div class="alert-content">
                <!--Title-->
                <span v-if="title" class="alert-title" v-text="title"></span>
                <!--Content-->
                <span>
                    <slot></slot>
                </span>
            </div>

            <!--Close Icon-->
            <icon icon="times" v-if="closeable" @click="close" class="alert-close" />

            <!--Countdown Line-->
            <div v-if="timer" class="alert-countdown">
                <div
                    class="alert-countdown-line"
                    :class="`radius-${radius}`"
                    :style="{ width: countDownCounter + '%' }"
                ></div>
            </div>
        </div>
    </transition>
</template>
<script>
/* Main Functions */
import { defineComponent, ref, toRefs, watch } from "vue";

/*Import FontAwesomeIcon*/
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
library.add(faTimes)

export default defineComponent({
    name: "TAlert",
    props: {
        id: {
            type: String,
            default: function () {
                return "alert-" + Number(new Date());
            }
        },
        closeable: {
            type: Boolean,
            default: false
        },
        timer: {
            type: Number,
            default: null,
            required: false
        },
        title: {
            type: String,
            default: null
        },
        type: {
            type: String,
            default: null
        },
        radius: {
            type: Number,
            default: 3
        },
        design: {
            type: String,
            default: "filled"
        },
        color: {
            type: String,
            default: "light"
        }
    },
    emits: ["destroy"],

    setup(props, { slots, emit }) {
        /*Definitions*/
        const { timer, id } = toRefs(props);
        const showAlertBox = ref(true);

        /*Close Function*/
        const close = () => {
            showAlertBox.value = false;
            emit("destroy", id.value);
        };

        /*Timer*/
        const timerCounter = ref(0);
        const countDownCounter = ref(0);

        watch(timer, (newValue, oldValue) => {
            if (!oldValue && newValue > 0) {
                /*Timer Function*/
                setTimeout(() => {
                    showAlertBox.value = false;
                    emit("destroy", id.value);
                }, timer.value);

                /*Count Down Function*/
                let countDownFn = setInterval(() => {
                    if (timer.value >= timerCounter.value) {
                        countDownCounter.value = 100 - (timerCounter.value / timer.value) * 100;
                        timerCounter.value += 4;
                    } else {
                        clearInterval(countDownFn);
                    }
                }, 1);
            }
        })

        /*Slot Check*/
        const hasSlot = name => !!slots[name];

        return {
            showAlertBox,
            countDownCounter,
            timerCounter,
            hasSlot,
            close
        };
    }
});
</script>

<style scoped>
/* eslint-disable no-alert */
.alert-enter-active,
.alert-leave-active {
    transition: opacity ease-out 0.75s;
}

.alert-enter,
.alert-leave-to {
    opacity: 0;
    height: revert;
}

.alert-enter-to,
.alert-leave {
    opacity: 1;
    height: revert;
}

/* eslint-disable no-alert */
</style>
