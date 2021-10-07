<template>
    <div
        :class="[
            'badge',
            (collapsible || (selectable && !selectIndicator)) && 'cursor-pointer',
            selectable && !modelValue && !selectActiveStyle && 'filter grayscale opacity-50',
            radiusStyle,
            styleClass()
        ]"
        @click.stop="toggle(); (selectable && !selectIndicator) && select()"
    >
        <!--Inline Line-->
        <div v-if="design.includes('line')"
             id="line"
             :class="[design === 'inline' ? 'badge-inline-line' : 'badge-outline-line']"
        />

        <!--Badge Icon-->
        <div
            v-if="$slots['icon'] && design !== 'outline'"
            :class="[
            'badge-icon',
            5 > radius && design  !== 'block' && !collapsible && 'ml-0.5',
            5 <= radius && design === 'inline' && 'ml-0.5'
            ]"
        >
            <slot name="icon" @click="toggle"></slot>
        </div>

        <!--Badge Content-->
        <transition name="show-content">
            <div v-if="showContent || !collapsible" class="badge-content-container" :key="badge-content">
                <!--Content-->
                <div :class="[
                    'badge-content',
                    $slots['icon'] &&  '-ml-0.5'
                    ]">
                    <slot/>
                </div>
                <!--Badge Value-->
                <div v-if="badgeValue"
                     :class="[
                         'badge-value',
                         radius > 4  && design !== 'elegant' && 'mr-0.5',
                         badgeValue.length===1 ? 'px-1.5' : 'px-1'
                         ]"
                >
                    {{ badgeValue }}
                </div>
                <!--Selected Icon-->
                <div v-if="selectable">
                    <!--Custom Selected Icon-->
                    <div v-if="$slots['selected-icon']" key="selected-icon" class="badge-select-icon" @click="select">
                        <slot name="selected-icon"></slot>
                    </div>
                    <!--Custom Unselected Icon-->
                    <div v-if="$slots['unselected-icon']" key="unselected-icon" class="badge-select-icon" @click="select">
                        <slot name="unselected-icon"></slot>
                    </div>
                </div>
                <!--Select Indicator-->
                <div
                    v-if="selectable && selectIndicator"
                    class="badge-select-icon"
                    @click="select"
                >
                    <t-x-circle-icon v-if="modelValue" class="w-4 h-4"/>
                    <t-plus-icon v-else class="w-4 h-4"/>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import {defineComponent, ref, toRefs} from 'vue'
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";
import TPlusIcon from "@/Components/Icon/TPlusIcon";
import TIconMinus from "@/Components/Icon/solid/TIconMinus";
import TXCircleIcon from "@/Components/Icon/TXCircleIcon";

export default defineComponent({
    name: "TBadge",
    components: {TXCircleIcon, TIconMinus, TPlusIcon},
    mixins: [radiusSizeMixin],
    props: {
        design: {
            type: String,
            default: 'filled'
        },
        color: {
            type: String,
            default: 'white'
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
        },
        selectPassiveStyle: {
            type: Object,
        },
        modelValue: {
            type: Boolean,
            default: false
        },
        badgeValue: {
            type: [Number, String],
            required: false
        },
        collapsible: {
            type: Boolean,
            default: false
        }
    },
    setup(props, {emit}) {
        const {design, color, selectable, selectActiveStyle, selectPassiveStyle} = toRefs(props)

        /*Select*/
        const value = ref(props.modelValue)
        const select = () => {
            value.value = !value.value
            emit('update:modelValue', value.value)
        }

        /*Toggle*/
        const showContent = ref(false)
        const toggle = () => {
            showContent.value = !showContent.value
        }

        /*Design Check*/
        const styleClass = () => {
            const activeColor = ref();
            const activeDesign = ref();

            if(selectable.value){
                /*Select Style Check*/
                if(selectActiveStyle.value && !selectPassiveStyle.value){
                    selectPassiveStyle.value = selectActiveStyle.value
                }
                if(value.value && selectActiveStyle.value){
                    activeColor.value = selectActiveStyle.value['color'];
                    activeDesign.value = selectActiveStyle.value['design'];
                }else if(!value.value && selectActiveStyle.value){
                    activeColor.value = selectPassiveStyle.value['color'];
                    activeDesign.value = selectPassiveStyle.value['design'];
                }else{
                    activeColor.value = color.value;
                    activeDesign.value = design.value;
                }
            } else {
                activeColor.value = color.value;
                activeDesign.value = design.value;
            }

            console.log(activeDesign.value)
            return 'badge-' + activeDesign.value + '-' + activeColor.value + ' badge-' + activeDesign.value + '-base'
        }

        const hasSlot = name => !!slots[name]

        return {hasSlot, showContent, toggle, select, styleClass}
    }
});
</script>

<style scoped>
.show-content-enter-active,
.show-content-leave-active {
    transition: all ease-in-out 1s;
}

.show-content-enter-from,
.show-content-leave-to {
    opacity: 0;
    max-width: 0;
}

.show-content-enter-to,
.show-content-leave-from {
    opacity: 1;
    max-width: 250px;
}
</style>
