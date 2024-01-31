<script setup>
import { onMounted, ref, toRefs, watchEffect } from "vue";
import TButton from "@/Components/Button/TButton.vue";
import { onClickOutside, useWindowSize } from "@vueuse/core";

/*Icons*/
import { IconChevronDown } from "@tabler/icons-vue";
import { computePosition, flip, shift, offset, limitShift } from "@floating-ui/dom";


const props = defineProps({
    align: {
        type: String,
        default: "left"
    },
    buttonColor: {
        type: String,
        default: "blue"
    },
    buttonDesign: {
        type: String,
        default: "filled"
    },
    buttonSize: {
        type: String,
        default: "normal"
    },
    icon: {
        type: [Object, null],
        default: null
    },
    size: {
        type: String,
        default: "wide"
    },
    buttonLabel: {
        type: String,
        default: ""
    },
    buttonIcon: {
        type: [Object, null],
        default: null
    },
    triggerType: {
        type: String,
        default: "button"
    },
    radius: {
        type: String,
        default: "regular"
    }
});

/*Definitions*/
const { width, height } = useWindowSize();
const { radius, triggerType } = toRefs(props);
const refDropdown = ref(null);
const refTrigger = ref(null);
const refArrow = ref(null);
const refWrapper = ref(null);
const isVisible = ref(false);


const hideContent = () => {
    refDropdown.value.style.display = "";
    update();
};

const showContent = () => {
    refDropdown.value.style.display = "block";
    update();
};


const update = async () => {
    await computePosition(refTrigger.value, refDropdown.value, {
        placement: "bottom",
        middleware: [flip(), shift({
            crossAxis: true,
            limiter: limitShift()
        }), offset(8)]
    }).then(({ x, y }) => {
        Object.assign(refDropdown.value.style, {
            left: `${x}px`,
            top: `${y}px`
        });
    });
};

onClickOutside(refWrapper, () => hideContent());

onMounted(async () => {
    if (refTrigger.value) {
        await update();
    }
});


watchEffect(() => {
    if (refTrigger.value && width.value && height.value) {
        setTimeout(() => {
            update();
        }, 100);
    }
});
</script>

<template>
    <!--Trigger as a Simple Trigger-->
    <div v-if="triggerType === 'button'" ref="refWrapper" class="relative">
        <!--Trigger-->
        <div
            ref="refTrigger"
            @click="showContent"
        >
            <!--Trigger Content-->
            <t-button
                type="button" :label="buttonLabel" :color="buttonColor" :radius :design="buttonDesign"
                :size="buttonSize" :icon>
                <IconChevronDown />
            </t-button>
        </div>

        <!--Dropdown Content-->
        <div v-show="isVisible" ref="refDropdown"
        >
            <slot />
            <div ref="refArrow"></div>
        </div>
    </div>

    <!--Trigger as a Rich Item-->
    <div v-else ref="refWrapper" class="relative"
    >
        <!--Trigger-->
        <div
            ref="refTrigger"
            @click="showContent"
        >
            <slot name="trigger" />

            <div ref="refArrow"></div>

        </div>

        <!--Content-->
        <div
            ref="refDropdown"
            class="absolute hidden"
        >
            <slot />
        </div>
    </div>


</template>

<style scoped>

</style>
