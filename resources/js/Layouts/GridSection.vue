<script setup>
import { computed, toRefs } from "vue";

const props = defineProps({
    gap: {
        type: Number,
        default: 4
    },
    col: {
        type: Number,
        default: 1
    },
    colPhone: {
        type: Number,
        default: 1
    },
    colTablet: {
        type: Number,
        default: 1
    },
    colLaptop: {
        type: Number,
        default: 1
    },
    colDesktop: {
        type: Number,
        default: 1
    }
});

const { gap, col, colPhone, colTablet, colLaptop, colDesktop } = toRefs(props);

const gapStyle = {
    "0": "gap-0",
    "1": "gap-1 mb-1",
    "2": "gap-2 mb-2",
    "3": "gap-3 mb-3",
    "4": "gap-4 mb-4",
    "5": "gap-5 mb-5",
    "6": "gap-6 mb-6",
    "7": "gap-7 mb-7",
    "8": "gap-8 mb-8",
    "9": "gap-9 mb-9",
    "10": "gap-10 mb-10"
};
const gridStyle = {
    "0": "grid-cols-none",
    "1": "grid-cols-1",
    "2": "grid-cols-2",
    "3": "grid-cols-3",
    "4": "grid-cols-4",
    "5": "grid-cols-5",
    "6": "grid-cols-6",
    "7": "grid-cols-7",
    "8": "grid-cols-8",
    "9": "grid-cols-9",
    "10": "grid-cols-10",
    "11": "grid-cols-11",
    "12": "grid-cols-12"
};
const gridPhoneStyle = {
    "0": "sm:grid-cols-none",
    "1": "sm:grid-cols-1",
    "2": "sm:grid-cols-2",
    "3": "sm:grid-cols-3",
    "4": "sm:grid-cols-4",
    "5": "sm:grid-cols-5",
    "6": "sm:grid-cols-6",
    "7": "sm:grid-cols-7",
    "8": "sm:grid-cols-8",
    "9": "sm:grid-cols-9",
    "10": "sm:grid-cols-10",
    "11": "sm:grid-cols-11",
    "12": "sm:grid-cols-12"
};
const gridTabletStyle = {
    "0": "md:grid-cols-none",
    "1": "md:grid-cols-1",
    "2": "md:grid-cols-2",
    "3": "md:grid-cols-3",
    "4": "md:grid-cols-4",
    "5": "md:grid-cols-5",
    "6": "md:grid-cols-6",
    "7": "md:grid-cols-7",
    "8": "md:grid-cols-8",
    "9": "md:grid-cols-9",
    "10": "md:grid-cols-10",
    "11": "md:grid-cols-11",
    "12": "md:grid-cols-12"
};
const gridLaptopStyle = {
    "0": "lg:grid-cols-none",
    "1": "lg:grid-cols-1",
    "2": "lg:grid-cols-2",
    "3": "lg:grid-cols-3",
    "4": "lg:grid-cols-4",
    "5": "lg:grid-cols-5",
    "6": "lg:grid-cols-6",
    "7": "lg:grid-cols-7",
    "8": "lg:grid-cols-8",
    "9": "lg:grid-cols-9",
    "10": "lg:grid-cols-10",
    "11": "lg:grid-cols-11",
    "12": "lg:grid-cols-12"
};
const gridDesktopStyle = {
    "0": "xl:grid-cols-none",
    "1": "xl:grid-cols-1",
    "2": "xl:grid-cols-2",
    "3": "xl:grid-cols-3",
    "4": "xl:grid-cols-4",
    "5": "xl:grid-cols-5",
    "6": "xl:grid-cols-6",
    "7": "xl:grid-cols-7",
    "8": "xl:grid-cols-8",
    "9": "xl:grid-cols-9",
    "10": "xl:grid-cols-10",
    "11": "xl:grid-cols-11",
    "12": "xl:grid-cols-12"
};
const defaultStyle = {
    "0": "justify-items-stretch"
};

const calculatedGridStyle = computed(() => {
    let style;
    if (col) {
        style = gridStyle[this.col];
    } else {
        style = gridStyle[1] + " ";
    }
    if (colPhone) {
        style = this.gridPhoneStyle[this.colPhone] + " ";
    }
    if (colTablet) {
        style = style + gridTabletStyle[colTablet] + " ";
    }
    if (colLaptop) {
        style = style + gridLaptopStyle[colLaptop] + " ";
    }
    if (colDesktop) {
        style = style + gridDesktopStyle[colDesktop];
    }

    return style + " " + defaultStyle[0];
});
</script>

<template>
    <div class="col-span-full w-full">
        <div
            :class="[
            'grid w-full grid-flow-row',
            gapStyle[gap],
            calculatedGridStyle
            ]">
            <slot></slot>
        </div>
    </div>
</template>
