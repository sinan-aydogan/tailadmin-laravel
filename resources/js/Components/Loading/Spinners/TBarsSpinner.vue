<script setup>
import { toRefs, computed, onBeforeMount, watch, ref } from "vue";

/*Styles*/
import { useTheme } from "@/Stores/useTheme.js";

const themeStore = useTheme();
const BarsSpinnerStyles = ref(null);

const props = defineProps({
    color: {
        type: String,
        default: "light"
    },
    ta: {
        type: Object,
        default: () => ({})
    }
});

const { color } = toRefs(props);

onBeforeMount(async () => {
    BarsSpinnerStyles.value = await themeStore.currentTheme("Loading/Spinners/BarsSpinner");
});

watch(() => themeStore.selectedTheme, async () => {
    BarsSpinnerStyles.value = await themeStore.currentTheme("Loading/Spinners/BarsSpinner");
});
</script>

<template>

    <div
        :class="ta?.wrapper ?? [
            BarsSpinnerStyles?.wrapper,
        ]"
    >
        <div
            id="bar1"
            :class="ta?.icon ?? [
                BarsSpinnerStyles?.icon,
                BarsSpinnerStyles?.colors[color],
            ]"
        />
        <div
            id="bar2"
            :class="ta?.icon ?? [
                BarsSpinnerStyles?.icon,
                BarsSpinnerStyles?.colors[color],
            ]" />
        <div
            id="bar3"
            :class="ta?.icon ?? [
                BarsSpinnerStyles?.icon,
                BarsSpinnerStyles?.colors[color],
            ]" />
    </div>
</template>

<style scoped>
#bar1,
#bar2,
#bar3 {
    content: "&nbps";
    -webkit-animation: threeBars 1.2s infinite ease-in-out;
    animation: threeBars 1.2s infinite ease-in-out;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
}

#bar2 {
    -webkit-animation-delay: 50ms;
    animation-delay: 50ms;
}

#bar3 {
    -webkit-animation-delay: 150ms;
    animation-delay: 150ms;
}

@-webkit-keyframes threeBars {
    0% {
        opacity: 0.4;
        transform: scaleY(0.5);
    }
    50% {
        opacity: 1;
        transform: scaleY(1);
    }
    100% {
        opacity: 0.4;
        transform: scaleY(0.5);
    }
}

@keyframes threeBars {
    0% {
        opacity: 0.4;
        transform: scaleY(0.5);
    }
    50% {
        opacity: 1;
        transform: scaleY(1);
    }
    100% {
        opacity: 0.4;
        transform: scaleY(0.5);
    }
}
</style>
