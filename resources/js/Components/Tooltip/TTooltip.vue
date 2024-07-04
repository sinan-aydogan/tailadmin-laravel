<template>
    <!--Main Content-->
    <div class="tooltip">
        <div
            class="tooltip-container"
            :class="[
                {'tooltip-border' : border},
                {'tooltip-bold' : bold}
            ]"
            @click="showPopover = !showPopover"
            ref="tooltipItem"
        >
            <slot/>
            <!--Second Content Container-->
            <div
                ref="box"
                :style="{visibility: showPopover ? 'visible': 'hidden'}"
                class="tooltip-box"
                :class="[
                    `tooltip-${color}`,
                    `tooltip-${activePosition}-container`
                ]"
            >
                <!--Arrow-->
                <div
                    class="tooltip-arrow"
                    :class="[
                        `tooltip-${activePosition}-arrow`,
                        hasSlot('boxTitle')
                    ]"
                ></div>
                <!--Content-->
                <div
                    class="tooltip-box-content"
                    :class="(hasSlot('boxTitle') ? 'rounded-b-md' : 'rounded-md')"
                >
                    <slot name="boxContent"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {computed, defineComponent, useSlots, ref, toRefs, watch} from "vue";
import {onClickOutside} from "@vueuse/core";

export default defineComponent({
    name: "TTooltip",
    props: {
        position: {
            type: String,
            default: "bottom"
        },
        color: {
            type: String,
            default: "white"
        },
        border: {
            type: Boolean,
            default: true
        },
        bold: {
            type: Boolean,
            default: true
        },
    },
    setup(props, {slots}) {
        /*Definitions*/
        const {position} = toRefs(props);
        const showPopover = ref(false);
        const activePosition = ref(position.value);
        const tooltipItem = ref(null);
        const box = ref(null);

        /*Open-Close Actions*/
        const updateStatus = () => {
            let tooltipPosition = box.value.getBoundingClientRect();
            let windowInnerWidth = window.innerWidth;

            if (position.value !== 'top' && position.value !== 'bottom') {
                /*If it's outside of the left*/
                if (tooltipPosition.width > tooltipPosition.left && position.value === 'left') {
                    activePosition.value = "right";
                }

                /*If it's outside of the right*/
                if (tooltipPosition.right > windowInnerWidth) {
                    activePosition.value = "left";
                }
            } else {

                /*If it's outside of the right*/
                if (tooltipPosition.right > windowInnerWidth && windowInnerWidth > tooltipPosition.left) {
                    Object.assign(box.value.style, {
                        position: 'absolute',
                        left: `-${Number(tooltipPosition.right) - Number(windowInnerWidth) + 20}px`
                    })
                }
            }
        };
        watch(showPopover, () => {
            updateStatus()
        })
        onClickOutside(tooltipItem, () => showPopover.value = false);

        /*Slot Check*/
        const hasSlot = name => !!useSlots()[name];

        return {
            tooltipItem,
            box,
            showPopover,
            updateStatus,
            hasSlot,
            activePosition
        };
    }
});
</script>
