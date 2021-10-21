<template>
    <div :class="[
        containerStyle(),
        activeDesign().includes('line') ? 'justify-between' : 'flex-col'
        ]">
        <!--Inline Line-->
        <div v-if="activeDesign().includes('line')"
             id="line"
             :class="[activeDesign() === 'inline' ? 'collapsible-inline-line' : 'collapsible-outline-line']"
        />
        <div class="w-full">
            <!--Header-->
            <div
                :class="headerStyle()"
                @click="updateStatus"
                @mouseenter.passive="openingType.includes('hover') ? updateStatus('open') :''"
            >
                <!--Title-->
                <div :class="titleStyle()">
                    <slot name="title"/>
                </div>
                <!--DropDown Icons-->
                <component
                    :is="activeTriggerType()==='chevron' ? 'TChevronIcon' : 'TCrossIcon'"
                    :class="triggerStyle()"
                />
            </div>
            <!--Content-->
            <transition name="content">
                <div v-show="isVisibleContent()">
                    <div :class="contentStyle()" >
                        <slot name="content"></slot>
                    </div>
                </div>

            </transition>
        </div>
    </div>
</template>

<script>
import {defineComponent, ref, inject, toRefs, reactive} from 'vue'
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
        triggerType: {
            type: String,
            require: false
        },
        design: {
            type: String,
            default: 'filled'
        },
        color: {
            type: String,
            default: 'white'
        }
    },
    setup(props, {emit}) {
        /*Definitions*/
        const {itemKey, titleAlign, triggerAlign, design, color} = toRefs(props)

        /*Injections*/
        const activeItems = inject('activeItems')
        const openingType = inject('openingType')
        const accordion = inject('accordion')
        const radius = inject('radius')
        const separated = inject('separated')
        const rootColor = inject('rootColor')
        const rootDesign = inject('rootDesign')
        const rootTitleAlign = inject('rootTitleAlign')
        const rootTriggerAlign = inject('rootTriggerAlign')
        const rootTriggerType = inject('rootTriggerType')

        /*Taken Over Definitions from Root */
        const activeColor = () => {
            return rootColor.value ? rootColor.value : color.value
        }
        const activeDesign = () => {
            return rootDesign.value ? rootDesign.value : design.value
        }
        const activeTitleAlign = () => {
            return rootTitleAlign.value ? rootTitleAlign.value : titleAlign.value
        }
        const activeTriggerAlign = () => {
            return rootTriggerAlign.value ? rootTriggerAlign.value : triggerAlign.value
        }
        const activeTriggerType = () => {
            return rootTriggerType.value ? rootTriggerType.value : triggerType.value
        }

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
        const containerStyle = () => {
            return 'collapsible-container ' +
                'collapsible-' + activeDesign() + '-base ' +
                'collapsible-' + activeDesign() + '-' + activeColor() + ' ' +
                (separated.value ? 'radius-' + radius.value + ' border-0' : '')
        }
        const headerStyle = () => {
            let triggerAlignStyle;
            /*Trigger Position*/
            if (activeTriggerAlign() === 'left') {
                triggerAlignStyle = 'flex-row-reverse';
            } else {
                triggerAlignStyle = 'justify-start';
            }

            return 'collapsible-header ' +
                triggerAlignStyle
        }
        const triggerStyle = () => {
            let triggerAnimationStyle;
            if (isVisibleContent() && activeTriggerType() === 'chevron' || activeTriggerType() === 'cross') {
                triggerAnimationStyle = 'rotate-0'
            }

            if (!isVisibleContent() && activeTriggerType() === 'chevron') {
                if (activeTriggerAlign() === 'right') {
                    triggerAnimationStyle = 'rotate-90'
                } else {
                    triggerAnimationStyle = '-rotate-90'
                }
            }

            if (!isVisibleContent() && activeTriggerType() === 'cross') {
                triggerAnimationStyle = 'rotate-45'
            }

            return 'collapsible-trigger-icon ' +
                triggerAnimationStyle
        }
        const titleStyle = () => {
            let titleAlignStyle;
            if (activeTitleAlign() === 'left') {
                titleAlignStyle = 'text-left';
            } else if (activeTitleAlign() === 'center') {
                titleAlignStyle = 'justify-center';
            } else {
                titleAlignStyle = 'flex-row-reverse';
            }

            return 'collapsible-title ' + titleAlignStyle
        }
        const contentStyle = () => {
            return 'collapsible-content '
        }

        return {isVisibleContent, openingType, updateStatus, contentStyle, containerStyle, titleStyle, triggerStyle,headerStyle, activeTriggerType,activeDesign}
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
