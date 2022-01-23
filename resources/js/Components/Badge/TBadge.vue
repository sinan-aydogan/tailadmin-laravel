<template>
    <div
        class="badge"
        :class="containerStyle"
        @click.stop="collapsible && toggle(); (selectable && !selectIndicator) && select()"
    >
        <!--Inline Line-->
        <div v-if="temporaryDesign.includes('line')"
             id="line"
             :class="temporaryDesign === 'inline' ? 'badge-inline-line' : 'badge-outline-line'"
        />

        <!--Badge Icon-->
        <div
            v-if="hasSlot('icon') && temporaryDesign !== 'outline'"
            class="badge-icon"
            :class="[
                {'ml-0.5' : 5 > temporaryRadius && temporaryDesign !== 'block' && !collapsible},
                {'ml-0.5' : 5 <= temporaryRadius && temporaryDesign === 'inline'}
            ]"
        >
            <slot name="icon" @click="collapsible && toggle()"></slot>
        </div>

        <!--Badge Content-->
        <transition name="content">
            <div v-if="showContent || !collapsible" class="badge-content-container">
                <!--Content-->
                <div
                    class="badge-content"
                    :class="[
                        {'-ml-0.5' : hasSlot('icon')},
                        {'ml-[1.5rem]' : temporaryDesign === 'block' && hasSlot('icon')}
                    ]"
                >
                    <slot/>
                </div>
                <!--Badge Value-->
                <div v-if="badgeValue"
                     class="badge-value"
                     :class="[
                         {'mr-0.5' : temporaryRadius > 4 && temporaryDesign !== 'elegant'},
                         badgeValue.length === 1 ? 'px-1.5' : 'px-1'
                     ]"
                >
                    {{ badgeValue }}
                </div>
                <!--Selected Icon-->
                <div v-if="selectable">
                    <!--Custom Selected Icon-->
                    <div v-if="hasSlot('selected-icon')" key="selected-icon" class="badge-select-icon" @click="select">
                        <slot name="selected-icon"></slot>
                    </div>
                    <!--Custom Unselected Icon-->
                    <div v-if="hasSlot('unselected-icon')" key="unselected-icon" class="badge-select-icon"
                         @click="select">
                        <slot name="unselected-icon"></slot>
                    </div>
                </div>
                <!--Select Indicator-->
                <div
                    v-if="selectable && selectIndicator"
                    class="badge-select-icon"
                    @click="select"
                >
                    <svg v-if="modelValue" class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <svg v-else class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                    </svg>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
/*Main functions*/
import {computed, defineComponent, inject, reactive, ref, toRefs} from "vue";

/*Sources*/
import {avatarConf, badgeConf} from "@/config";

export default defineComponent({
    name: "TBadge",
    props: {
        design: {
            type: String,
            default: null
        },
        color: {
            type: String,
            default: null
        },
        radius: {
            type: Number,
            default: null
        },
        selectable: {
            type: Boolean,
            default: false
        },
        selectIndicator: {
            type: Boolean,
            default: false
        },
        selectActiveStyle: {
            type: Object,
            default: null
        },
        selectPassiveStyle: {
            type: Object,
            default: null
        },
        modelValue: {
            type: Boolean,
            default: false
        },
        badgeValue: {
            type: [Number, String],
            default: null,
            required: false
        },
        collapsible: {
            type: Boolean,
            default: false
        }
    },
    emits: ["update:modelValue"],
    setup(props, {emit, slots}) {
        /*Definitions*/
        const {
            design,
            color,
            radius,
            selectable,
            selectActiveStyle,
            selectPassiveStyle,
            selectIndicator,
            modelValue,
            collapsible,
        } = toRefs(props);
        const showContent = ref(false);
        const value = ref(modelValue.value);
        const appConf = inject('appConf');

        /*Temporary Definitions*/
        const temporaryDesign = ref(design.value ? design.value : badgeConf.design ? badgeConf.design : appConf.design);
        const temporaryColor = ref(color.value ? color.value : badgeConf.color ? badgeConf.color : appConf.color);
        const temporaryRadius = ref(radius.value ? radius.value : badgeConf.radius ? badgeConf.radius : appConf.radius);

        /*Select*/
        const select = () => {
            value.value = !value.value;
            emit("update:modelValue", value.value);
        };

        /*Toggle*/
        const toggle = () => {
            showContent.value = !showContent.value;
        };

        /*Generating Style Classes*/
        const containerStyle = computed(() => {
            let activeColor, activeDesign, passiveStyle;
            if (selectable.value) {

                /*Select Style Check*/
                if (selectActiveStyle.value && !selectPassiveStyle.value) {
                    passiveStyle = selectActiveStyle.value;
                } else {
                    passiveStyle = selectPassiveStyle.value;
                }

                if (value.value && selectActiveStyle.value) {
                    activeColor = selectActiveStyle.value["color"];
                    activeDesign = selectActiveStyle.value["design"];
                } else if (!value.value && selectActiveStyle.value) {
                    activeColor = passiveStyle["color"];
                    activeDesign = passiveStyle["design"];
                } else {
                    activeColor = temporaryColor.value;
                    activeDesign = temporaryDesign.value;
                }
            } else {
                activeColor = temporaryColor.value;
                activeDesign = temporaryDesign.value;
            }

            return [
                `badge-${activeDesign}`,
                `badge-${activeDesign}-${activeColor}`,
                `radius-${temporaryRadius.value}`,
                ((collapsible.value || (selectable.value && !selectIndicator.value)) && "cursor-pointer"),
                (selectable.value && !modelValue.value && !selectActiveStyle.value && "filter grayscale opacity-50")
            ];
        });

        /*Slot Check*/
        const hasSlot = name => !!slots[name];

        return {
            hasSlot,
            toggle,
            select,
            temporaryDesign,
            temporaryRadius,
            showContent,
            containerStyle
        };
    }
});
</script>

<style scoped>
.content-enter-active,
.content-leave-active {
    transition: all ease-in-out 1s;
}

.content-enter-from,
.content-leave-to {
    opacity: 0;
    max-width: 0;
}

.content-enter-to,
.content-leave-from {
    opacity: 1;
    max-width: 250px;
}
</style>
