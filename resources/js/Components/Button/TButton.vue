<script setup>
import { toRefs, ref, computed, defineAsyncComponent, reactive } from "vue";
import { Link } from "@inertiajs/vue3";

const props = defineProps({
    size: {
        type: String,
        default: "normal"
    },
    design: {
        type: String,
        default: "filled"
    },
    color: {
        type: String,
        default: "blue"
    },
    radius: {
        type: Number,
        default: 3
    },
    link: {
        type: String,
        default: "#"
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
    loadingDesign: {
        type: String,
        default: "three-bars"
    },
    loadingWithContent: {
        type: Boolean,
        default: false
    },
    loadingColor: {
        type: String,
        default: null
    },
    type: {
        type: String,
        default: "submit"
    }
});

/*Definitions*/
const {
    color,
    design,
    border,
    radius,
    disabled,
    size,
    loading,
    loadingWithContent,
    loadingDesign
} = toRefs(props);

/*Generating Style Classes*/
const tStyle = reactive({});
tStyle["container"] = computed(() => {
    return "button" + " " +
        "button-" + size.value + " " +
        "button-" + design.value + "-base" + " " +
        "button-" + design.value + "-" + color.value + " " +
        "radius-" + radius.value + " " +
        (disabled.value ? " button-disabled" : "") + " " +
        (border.value ? "border" : "") + " " +
        (loading.value || loadingWithContent.value ? "pointer-events-none" : "");
});
tStyle["content"] = computed(() => {
    return "button-content" + " " +
        (loading.value ? "invisible" : "");
});


/*Loading Component*/
const activeLoadingComponent = ref();
if (loadingDesign.value === "three-bars") {
    activeLoadingComponent.value = "TLoadingAnimationThreeBars";
} else if (loadingDesign.value === "cogs") {
    activeLoadingComponent.value = "TLoadingAnimationCogs";
} else {
    activeLoadingComponent.value = "TLoadingAnimationThreeDots";
}

const loadingComponent = defineAsyncComponent(() => import(`../Loading/Animations/${activeLoadingComponent.value}.vue`));
</script>

<template>
    <button
        v-if="type === 'submit' || type === 'button' || type === 'external-link'"
        :class="tStyle['container']"
        :onclick="(!disabled && type === 'external-link') ? 'window.location.href=\'' + link + '\'' : ''"
        :type="type"
    >
        <component
            :is="loadingComponent"
            v-if="loadingWithContent"
            :color="loadingColor ? loadingColor : color"
        />

        <span :class="tStyle['content']">
            <slot />
        </span>
        <component
            :is="loadingComponent"
            v-if="loading"
            :color="loadingColor ? loadingColor : color"
            class="mx-auto absolute"
        />
    </button>
    <Link v-else :href="link" :class="tStyle['container']">
        <slot></slot>
    </Link>
</template>
