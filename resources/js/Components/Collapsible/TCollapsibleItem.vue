<template>
    <div :class="[
        styleClass.container(),
        activeDesign.includes('line') ? 'justfiy-between' : 'flex-col'
        ]">
        <!--Inline Line-->
        <div v-if="activeDesign.includes('line')"
             id="line"
             :class="[activeDesign === 'inline' ? 'collapsible-inline-line' : 'collapsible-outline-line']"
        />
        <div class="w-full">
            <!--Header-->
            <div
                :class="styleClass.header()"
                @click="updateStatus"
                @mouseenter.passive="openingType.includes('hover') ? updateStatus('open') :''"
            >
                <!--Title-->
                <div :class="styleClass.title()">
                    <slot name="title"/>
                </div>
                <!--DropDown Icons-->
                <component
                    :is="activeTriggerType==='chevron' ? 'TChevronIcon' : 'TCrossIcon'"
                    :class="styleClass.trigger()"
                />
            </div>
            <!--Content-->
            <transition name="content">
                <div v-show="isVisibleContent()">
                    <div :class="styleClass.content()" >
                        <slot name="content"></slot>
                    </div>
                </div>

            </transition>
        </div>
    </div>
</template>

<script>
import {defineComponent, ref, inject, toRefs, reactive, onMounted, onUpdated} from 'vue'
import {uniqueId} from "lodash";
import TChevronIcon from "@/Components/Icon/TChevronDownIcon";
import TCrossIcon from "@/Components/Icon/TXIcon";

export default defineComponent({
    name: "CollapsibleItem",
    components: {TChevronIcon, TCrossIcon},
    props: {
        itemKey: {
            type: [String, Number],
            default: uniqueId()
        },
        titleAlign: {
            type: String,
            default: 'left'
        },
        triggerAlign: {
            type: String,
            default: 'right'
        },
        design: {
            type: String,
            default: 'filled'
        },
        color: {
            type: String,
            default: 'white'
        },
    },
    setup(props, {emit}) {
        /*Definitions*/
        const {itemKey, titleAlign, triggerAlign, design, color} = toRefs(props)
        const styleClass = reactive({})
        const radiusSizes = {
            1: 'rounded-sm',
            2: 'rounded',
            3: 'rounded-md',
            4: 'rounded-lg',
            5: 'rounded-xl',
            6: 'rounded-2xl',
            7: 'rounded-3xl',
            8: 'rounded-full'
        }

        /*Injections*/
        const activeItems = ref(inject('activeItems'))
        const openingType = ref(inject('openingType'))
        const accordion = ref(inject('accordion'))
        const radius = ref(inject('radius'))
        const separated = ref(inject('separated'))
        const rootColor = ref(inject('rootColor'))
        const rootDesign = ref(inject('rootDesign'))
        const rootTitleAlign = ref(inject('rootTitleAlign'))
        const rootTriggerAlign = ref(inject('rootTriggerAlign'))
        const rootTriggerType = ref(inject('rootTriggerType'))

        /*Taken Over Definitions from Root */
        const activeColor = ref(rootColor.value ? rootColor.value : color.value)
        const activeDesign = ref(rootDesign.value ? rootDesign.value : design.value)
        const activeTitleAlign = ref(rootTitleAlign.value ? rootTitleAlign.value : titleAlign.value)
        const activeTriggerAlign = ref(rootTriggerAlign.value ? rootTriggerAlign.value : triggerAlign.value)
        const activeTriggerType = ref(rootTriggerType.value ? rootTriggerType.value : triggerType.value)

        /*Detection of Active Items*/
        const isVisibleContent = () => {
            if(activeItems.value.includes(itemKey.value)){
                return  true
            }else{
                return  false
            }
        }


        /*Open-Close Actions*/
        const updateStatus = (rule) => {
            /*Open Function*/
            const openItem = () => {
                if(accordion.value && !activeItems.value.includes(itemKey.value)){
                    activeItems.value = [itemKey.value]
                }else if(!accordion.value && !activeItems.value.includes(itemKey.value)){
                    activeItems.value.push(itemKey.value)
                }
                emit('active', activeItems.value)
            }
            /*Close Function*/
            const closeItem = () => {
                if (activeItems.value.includes(itemKey.value)) {
                    activeItems.value.splice(activeItems.value.indexOf(item => item === itemKey.value), 1)
                }
                emit('active', activeItems.value)
            }
            /*Open/Close Action Controller*/
            if (rule === 'open') {
                openItem();
            } else if (rule === 'close') {
                closeItem()
            } else {
                if (isVisibleContent()) {
                    closeItem()
                } else {
                    openItem()
                }
            }
        }

        /*Generating Style Classes*/
        styleClass.container = () => {
            return 'collapsible-container ' +
                'collapsible-' + activeDesign.value + '-base ' +
                'collapsible-' + activeDesign.value + '-' + activeColor.value + ' ' +
                (separated.value ? radiusSizes[radius.value] + ' border-0' : '')
        }
        styleClass.header = () => {
            let triggerAlignStyle;
            /*Trigger Position*/
            if (activeTriggerAlign.value === 'left') {
                triggerAlignStyle = 'flex-row-reverse';
            } else {
                triggerAlignStyle = 'justify-start';
            }

            return 'collapsible-header ' +
                triggerAlignStyle
        }
        styleClass.trigger = () => {
            let triggerAnimationStyle;
            if (isVisibleContent() && activeTriggerType.value === 'chevron' || activeTriggerType.value === 'cross') {
                triggerAnimationStyle = 'rotate-0'
            }

            if (!isVisibleContent() && activeTriggerType.value === 'chevron') {
                if (activeTriggerAlign.value === 'right') {
                    triggerAnimationStyle = 'rotate-90'
                } else {
                    triggerAnimationStyle = '-rotate-90'
                }
            }

            if (!isVisibleContent() && activeTriggerType.value === 'cross') {
                triggerAnimationStyle = 'rotate-45'
            }

            return 'collapsible-trigger-icon ' +
                triggerAnimationStyle
        }
        styleClass.title = () => {
            let titleAlignStyle;
            if (activeTitleAlign.value === 'left') {
                titleAlignStyle = 'text-left';
            } else if (activeTitleAlign.value === 'center') {
                titleAlignStyle = 'justify-center';
            } else {
                titleAlignStyle = 'flex-row-reverse';
            }

            return 'collapsible-title ' + titleAlignStyle
        }
        styleClass.content = () => {
            return 'collapsible-content '
        }

        return {isVisibleContent, openingType, updateStatus, styleClass, activeTriggerType,activeDesign}
    }
})
</script>

<style>
.content-enter-active, .content-leave-active {
    transition: all 300ms ease-in-out;
}

.content-enter-from, .content-leave-to {
    max-height: 0;
}
.content-enter-to, .content-leave-from {
    max-height: 100vmax;
}
</style>
