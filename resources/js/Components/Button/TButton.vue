<script setup>
import { defineAsyncComponent, toRefs, ref, onBeforeMount, watch, computed } from "vue";
import { Link } from "@inertiajs/vue3";

/*Styles*/
import { useTheme } from "@/Stores/useTheme.js";

const themeStore = useTheme();
const ButtonStyles = ref(null);
const RadiusStyles = ref(null);

const props = defineProps({
    type: {
        type: String,
        default: "submit"
    },
    size: {
        type: String,
        default: "normal"
    },
    label: {
        type: String,
        default: ""
    },
    design: {
        type: String,
        default: "solid"
    },
    color: {
        type: String,
        default: "primary"
    },
    icon: {
        type: [Function, null],
        default: null
    },
    iconRight: {
        type: [Function, null],
        default: null
    },
    layout: {
        type: String,
        default: "default",
        validator: (value) => {
            return ["default", "icon-only", "stacked"].includes(value);
        }
    },
    radius: {
        type: String,
        default: "regular"
    },
    link: {
        type: String,
        default: "#"
    },
    linkTarget: {
        type: String,
        default: "_self",
        validator: (value) => {
            return ["_self", "_blank", "_parent", "_top"].includes(value);
        }
    },
    border: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    loading: {
        type: Boolean,
        default: false
    },
    loadingIconPosition: {
        type: String,
        default: "left",
        validator: (value) => {
            return ["left", "right", "over"].includes(value);
        }
    },
    loadingDesign: {
        type: String,
        default: "bars",
        validator: (value) => {
            return ["bars", "cogs", "dots"].includes(value);
        }
    }
});


/*Definitions*/
const {
    type,
    size,
    label,
    design,
    color,
    icon,
    iconRight,
    radius,
    link,
    linkTarget,
    border,
    disabled,
    loading,
    loadingIconPosition,
    loadingDesign,
    loadingColor
} = toRefs(props);


/*Loading Component*/
const loadingComponent = computed(() => {
    switch (loadingDesign.value) {
        case "bars":
            return defineAsyncComponent(() => import("/resources/js/Components/Loading/Spinners/TBarsSpinner.vue"));
        case "cogs":
            return defineAsyncComponent(() => import("/resources/js/Components/Loading/Spinners/TCogsSpinner.vue"));
        default:
            return defineAsyncComponent(() => import("/resources/js/Components/Loading/Spinners/TDotsSpinner.vue"));
    }
});

onBeforeMount(async () => {
    ButtonStyles.value = await themeStore.currentTheme("Button");
    RadiusStyles.value = await themeStore.currentTheme("Misc/Radius");
});

watch(() => themeStore.selectedTheme, async () => {
    ButtonStyles.value = await themeStore.currentTheme("Button");
    RadiusStyles.value = await themeStore.currentTheme("Misc/Radius");
});
</script>

<template>
    <!--Link-->
    <Link v-if="type === 'link'" :href="link" :class="tStyle['container']" :target="linkTarget">
        <slot></slot>
    </Link>


    <!--Button-->
    <button
        v-else
        :disabled="disabled || loading"
        :class="[
            ButtonStyles?.buttonWrapper,
            ButtonStyles?.designs[design]?.defaults?.wrapper,
            ButtonStyles?.designs[design][color]?.wrapper,
            border ?
                ButtonStyles?.designs[design]?.defaults?.border + ' ' +
                ButtonStyles?.designs[design][color]?.border
                 : '',
            disabled ? ButtonStyles?.disabled : '',
            layout === 'icon-only' ? ButtonStyles?.iconOnly : '',
            layout === 'stacked' ? ButtonStyles?.stacked : '',
            RadiusStyles?.radiusSizes[radius],
        ]"
        :type="type"
    >
        <!--Left area-->
        <component
            :is="loading && loadingIconPosition === 'left' ? loadingComponent : icon"
            v-if="(loading && loadingIconPosition === 'left') || icon"
            :class="[
                ButtonStyles?.icon,
                ButtonStyles?.designs[design]?.defaults?.icon,
                ButtonStyles?.designs[design][color]?.icon,
                ]"
            :ta="{
                    icon: ButtonStyles?.designs[design][color]?.loading,
                }"
        />

        <!--Button content-->
        <div v-if="layout !== 'icon-only'" :class="ButtonStyles?.content">
            <!--Slot content-->
            <slot v-if="'default' in $slots" />

            <!--Prop content-->
            <span
                v-else
                :class="[
                      ButtonStyles?.designs[design]?.defaults?.content,
                      ButtonStyles?.designs[design][color].content,
                ]"
                v-text="label"></span>
        </div>


        <!--Right content-->
        <component
            :is="loading && loadingIconPosition === 'right' ? loadingComponent : iconRight"
            v-if="((loading && loadingIconPosition === 'right') || iconRight) && layout !== 'icon-only'"
            :class="[
                ButtonStyles?.icon,
                ButtonStyles?.designs[design]?.defaults?.icon,
                ButtonStyles?.designs[design][color]?.icon
                ]"
            :ta="{
                    icon: ButtonStyles?.designs[design][color]?.loading,
                }"
        />

        <!--Over loading-->
        <component
            :is="loadingComponent"
            v-if="loading && loadingIconPosition === 'over'"
            :color="loadingColor ? loadingColor : color"
            class="mx-auto absolute"
        />
    </button>

</template>
