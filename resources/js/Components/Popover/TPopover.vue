<template>
    <!--Main Content-->
    <div class="popover">
        <div :class="tStyle['container']" ref="popoverItem" @click="showPopover = !showPopover">
            <slot/>
            <!--Second Content Container-->
            <div
                ref="box"
                :style="{visibility: showPopover ? 'visible': 'hidden'}"
                :class="tStyle['box']"
            >
                <!--Arrow-->
                <div :class="!customStyle &&tStyle['arrow']" :style="{backgroundColor: !hasSlot('boxTitle') ? 'white': ''}"></div>
                <!--Title-->
                <div v-if="hasSlot('boxTitle')"
                     class="popover-box-title">
                    <slot name="boxTitle"></slot>
                </div>
                <!--Content-->
                <div :class="!customStyle && tStyle['content']">
                    <slot name="boxContent"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {computed, defineComponent, reactive, ref, toRefs, watch} from "vue";
import {onClickOutside} from "@vueuse/core";

export default defineComponent({
    name: "TPopover",
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
        customStyle: {
            type: Boolean,
            default: false
        }
    },
    setup(props, {slots}) {
        /*Definitions*/
        const {color, position, border, bold} = toRefs(props);
        const showPopover = ref(false);
        const activePosition = ref(position.value);
        const popoverItem = ref(null);
        const box = ref(null);

        /*Open-Close Actions*/
        const updateStatus = () => {
            let popoverPosition = box.value.getBoundingClientRect();
            let windowInnerWidth = window.innerWidth;

            if(position.value !== 'top' && position.value !== 'bottom'){
                /*If it's outside of the left*/
                if (popoverPosition.width > popoverPosition.left && position.value === 'left') {
                    activePosition.value = "right";
                }

                /*If it's outside of the right*/
                if (popoverPosition.right > windowInnerWidth) {
                    activePosition.value = "left";
                }
            }else{

                /*If it's outside of the right*/
                if (popoverPosition.right > windowInnerWidth && windowInnerWidth > popoverPosition.left) {
                    Object.assign(box.value.style, {
                        position: 'absolute',
                        left: `-${Number(popoverPosition.right)-Number(windowInnerWidth)+20}px`
                    })
                }
            }
        };
        watch(showPopover, ()=>{
            updateStatus()
        })
        onClickOutside(popoverItem, () => showPopover.value = false);

        /*Generating Style Classes*/
        const tStyle = reactive({});

        tStyle["container"] = computed(() => {
            return "popover-container" + " " +
                (border.value ? 'popover-border' : '') + " " +
                (bold.value ? 'popover-bold' : '')
        });

        tStyle["box"] = computed(() => {
            return "popover-box" + " " +
                "popover-" + color.value + " " +
                "popover-" + activePosition.value + "-container";
        });
        tStyle["arrow"] = computed(() => {
            return "popover-arrow" + " " +
                "popover-" + activePosition.value + "-arrow" + " " +
                (hasSlot("boxTitle") && activePosition.value === "top" ? "bg-white" : "") + " ";
        });
        tStyle["content"] = computed(() => {
            return "popover-box-content" + " " +
                (hasSlot("boxTitle") ? "rounded-b-md" : "rounded-md");
        });

        /*Slot Check*/
        const hasSlot = name => !!slots[name];

        return {popoverItem, box, showPopover, updateStatus, hasSlot, tStyle};
    }
});
</script>
