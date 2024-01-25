<script setup>
import { onBeforeMount, provide, ref, toRefs, watch } from "vue";

/*Styles*/
import {useTheme} from "@/Stores/useTheme.js";

const props = defineProps({
    label: {
        type: String,
        default: null
    },
    subLabel: {
        type: String,
        default: null
    },
    subLabelColor: {
        type: String,
        default: "yellow"
    },
    labelFor: {
        type: String,
        default: null
    },
    errors: {
        type: Array,
        default() {
            return [];
        }
    },
    phoneWidth: {
        type: Number,
        default: 12
    },
    tabletWidth: {
        type: Number,
        default: null
    },
    laptopWidth: {
        type: Number,
        default: 6
    },
    desktopWidth: {
        type: Number,
        default: null
    }
});

/*Styles*/
const theme = useTheme();
const InputGroupStyles = ref(null);

/*Error Status Provide to Input Component*/
const { errors } = toRefs(props);
provide("errors", errors);

onBeforeMount(async ()=>{
    InputGroupStyles.value = await theme.currentTheme('Form/InputGroup')
})

watch(() => theme.currentTheme.value, async () => {
    InputGroupStyles.value = await theme.currentTheme('Form/InputGroup')
})
</script>

<template>
    <div
        :class="[
            InputGroupStyles?.wrapper,
            phoneWidth ? `grid-${phoneWidth}` : '',
            tabletWidth ? `grid-md-${tabletWidth}` : '',
            laptopWidth ? `grid-lg-${laptopWidth}` : '',
            desktopWidth ? `grid-xl-${desktopWidth}` : '',
        ]"
    >
        <!--Label-->
        <label
            :for="labelFor"
            :class="InputGroupStyles?.labelWrapper"
        >
            <!--Label-->
            <span v-if="label">{{ label }}</span>
            <!--Label Prop-->
            <span v-if="!label && $slots.label" :class="InputGroupStyles?.labelProp">
                <!--Label Slot-->
                <slot name="label" />
            </span>
            <!--Sub Label-->
            <span
                v-if="subLabel"
                :class="['text-xs italic', InputGroupStyles?.subLabelColors[subLabelColor]]"
            >{{ subLabel }}</span>
        </label>
        <!--Input Content-->
        <slot></slot>
        <!--Front End Error-->
        <div v-if="errors.length > 0">
            <template v-for="error in errors" :key="error.$uid">
                <p :class="InputGroupStyles?.errorText">{{ error.$message }}</p>
            </template>
        </div>

        <!--Backend Error-->
        <div v-else>
            <p :class="InputGroupStyles?.errorText">{{ $page.props.errors[labelFor] }}</p>
        </div>
    </div>
</template>
