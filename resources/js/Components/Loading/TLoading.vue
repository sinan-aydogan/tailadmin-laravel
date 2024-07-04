<script setup>
import { computed, defineAsyncComponent, ref, toRefs, watch, useSlots } from "vue";

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    color: {
        type: String,
        default: "gray"
    },
    title: {
        type: String,
        default: "Loading..."
    },
    message: {
        type: String,
        default: "Please wait, while your request being processed"
    },
    loadingDesign: {
        type: String,
        default: "three-bars"
    },
    loadingColor: {
        type: String,
        default: null
    },
    closeable: {
        type: Boolean,
        default: false
    },
    timer: {
        type: Number,
        default: null,
        required: false
    }
})

defineEmits(["update:modelValue"])

const { modelValue, timer, color, loadingDesign } = toRefs(props);

/*Design Check*/
const tStyle = computed(() => {
    return "loading-screen" + " " +
        "loading-screen-" + color.value;
});

/*Timer*/
const timerCounter = ref(0);
const countDownCounter = ref(0);
watch(modelValue, () => {
    if (timer.value && modelValue.value) {
        /*Timer Function*/
        setTimeout(() => {
            close();
        }, timer.value);

        /*Count Down Function*/
        let countDownFn = setInterval(() => {
            if (timer.value >= timerCounter.value) {
                countDownCounter.value = 100 - (timerCounter.value / timer.value) * 100;
                timerCounter.value += 4;
            } else {
                clearInterval(countDownFn);
                timerCounter.value = 0;
                close();
            }
        }, 1);
    }
})

/*Close*/
const close = () => {
    emit("update:modelValue", false);
};

/*Loading Component*/
const activeLoadingComponent = ref();
if (loadingDesign.value === "three-bars") {
    activeLoadingComponent.value = "TLoadingAnimationThreeBars";
} else if (loadingDesign.value === "three-dots") {
    activeLoadingComponent.value = "TLoadingAnimationThreeDots";
} else {
    activeLoadingComponent.value = "TLoadingAnimationCogs";
}

const loadingComponent = defineAsyncComponent(() => import(`./Animations/${activeLoadingComponent.value}.vue`));

/*Slot Check*/
const hasSlot = name => !!useSlots()[name];
</script>

<style scoped>
/*Show Hide Menu Titles*/
.fade-enter-active,
.fade-leave-active {
    transition: all 700ms ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    transform: scaleX(1.1);
    filter: blur(4px);
    opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
    transform: scaleX(1);
    filter: blur(0);
    opacity: 1;
}
</style>

<template>
    <transition name="fade">
        <div :class="tStyle" v-if="modelValue">
            <!--Countdown Line-->
            <div v-if="timer" class="loading-screen-countdown">
                <div id="countdown" :style="{ width: countDownCounter + '%' }"></div>
            </div>
            <!--Close Icon-->
            <div v-if="closeable" class="loading-screen-close" @click="close">
                <svg
                    class="h-10 w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </div>
            <!--Content-->
            <div v-if="!hasSlot('default')" class="loading-screen-content">
                <!--Text Content-->
                <div id="wrapper">
                    <!--Title-->
                    <span id="title">{{ title }}</span>
                    <!--Message-->
                    <span id="message">{{ message }}</span>
                </div>
                <!--Animation-->
                <component
                    id="animation"
                    :is="loadingComponent"
                    :color="loadingColor ? loadingColor : color"
                    target="loading-screen"
                />
            </div>
            <!--Custom Content-->
            <div v-if="hasSlot('default')" id="custom-content">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>
