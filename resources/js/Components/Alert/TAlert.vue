<template>
    <transition name="alert">
        <!--Alert Container-->
        <div
            v-if="showAlertBox"
            class="alert"
            :class="[
                `alert-${temporaryDesign}`,
                !type ? `alert-${temporaryDesign}-${temporaryColor}` :
                    [{ 'alert-success': type === 'success' },
                    { 'alert-warning': type === 'warning' },
                    { 'alert-danger': type === 'error' },
                    { 'alert-info': type === 'info' }],
                `radius-${temporaryRadius}`,
            ]"
        >
            <!--Alert Line-->
            <div v-if="temporaryDesign.includes('line')" class="alert-line" />

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
            <icon icon="times" v-if="temporaryCloseable" @click="close" class="alert-close" />

            <!--Countdown Line-->
            <div v-if="temporaryTimer" class="alert-countdown">
                <div
                    class="alert-countdown-line"
                    :class="`radius-${temporaryRadius}`"
                    :style="{ width: countDownCounter + '%' }"
                ></div>
            </div>
        </div>
    </transition>
</template>
<script>
/* Main Functions */
import { defineComponent, inject, ref, toRefs, watch } from "vue";

/*Sources*/
import { alertConf } from "@/config";

/*Import FontAwesomeIcon*/
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
library.add(faTimes)

export default defineComponent({
    name: "TAlert",
    props: {
        id: {
            type: [Number, String, Array, Object, Date, Boolean],
            default: function () {
                return "alert-" + Number(new Date());
            }
        },
        closeable: {
            type: Boolean,
            default: false
        },
        timerStatus: {
            type: Boolean,
            default: false,
        },
        timer: {
            type: Number,
            default: null,
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
            default: null
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
        const { design, color, radius, closeable, timerStatus, timer, id } = toRefs(props);
        const showAlertBox = ref(true);
        const appConf = inject('appConf');

        /*Temporary Definations*/
        const temporaryDesign = ref(design.value ? design.value : alertConf.design ? alertConf.design : appConf.value.design)
        const temporaryColor = ref(color.value ? color.value : alertConf.color ? alertConf.color : appConf.value.color)
        const temporaryRadius = ref(radius.value ? radius.value : alertConf.radius ? alertConf.radius : appConf.value.radius)
        const temporaryCloseable = ref(closeable.value ? closeable.value : alertConf.closeable ? alertConf.closeable : appConf.value.closeable)
        const temporaryTimer = ref(timer.value ? timer.value : alertConf.timer ? alertConf.timer : appConf.value.timer)

        /*Close Function*/
        const close = () => {
            showAlertBox.value = false;
            emit("destroy", id.value);
        };

        /*Timer*/
        const timerCounter = ref(0);
        const countDownCounter = ref(0);

        watch(timerStatus, (newValue, oldValue) => {
            if (timerStatus.value && !oldValue && newValue > 0) {
                /*Timer Function*/
                setTimeout(() => {
                    showAlertBox.value = false;
                    emit("destroy", id.value);
                }, temporaryTimer.value);

                /*Count Down Function*/
                let countDownFn = setInterval(() => {
                    if (temporaryTimer.value >= timerCounter.value) {
                        countDownCounter.value = 100 - (timerCounter.value / temporaryTimer.value) * 100;
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
            appConf,
            alertConf,
            temporaryDesign,
            temporaryColor,
            temporaryRadius,
            temporaryCloseable,
            temporaryTimer,
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
    transition: all ease-in-out 1000ms;
}

.alert-enter-from,
.alert-leave-to {
    opacity: 0;
}

.alert-enter-to,
.alert-leave-from {
    opacity: 1;
}

/* eslint-disable no-alert */
</style>
