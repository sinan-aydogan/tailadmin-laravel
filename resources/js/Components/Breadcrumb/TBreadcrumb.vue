<template>
    <div>
        <div
            v-if="design==='filled'"
            :class="filledStyle()">
            <div id="breadcrumb-filled-container">
                <div
                    v-for="(item,index) in breadcrumbs"
                    :key="index"
                    :class="filledContainerStyle(item)">
                    <!--Icon-->
                    <div v-if="$slots[item.key]">
                        <slot :name="item.key" :props="item"/>
                    </div>
                    <div>
                        {{ item.label }}
                    </div>
                    <t-chevron-right-icon v-if="breadcrumbs.length !== index+1" class="w-5 h-5"/>
                </div>
            </div>
            <div v-if="$slots['subContent']" class="breadcrumb-sub-content">
                <slot name="subContent"></slot>
            </div>
        </div>

        <div
            v-if="design==='block'"
            :class="blockStyle()">
            <div id="breadcrumb-block-container" :class="blockSubStyle()">
                <div
                    v-for="(item,index) in breadcrumbs"
                    :key="index"
                    :class="blockContainerStyle(item)">
                    <!--Icon-->
                    <div v-if="$slots[item.key]">
                        <slot :name="item.key" :props="item"/>
                    </div>
                    <div>
                        {{ item.label }}
                    </div>
                </div>
            </div>
            <div v-if="$slots['subContent']" class="breadcrumb-sub-content">
                <slot name="subContent"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import {defineComponent, toRefs, ref} from 'vue'
import TChevronRightIcon from "@/Components/Icon/TChevronRightIcon";

export default defineComponent({
    name: 'TBreadcrumb',
    props: {
        breadcrumbs: {
            type: Array,
            require: true
        },
        design: {
            type: String,
            default: 'filled'
        },
        color: {
            type: String,
            default: 'gray'
        },
        position: {
            type: String,
            require: true,
            default: 'left'
        },
    },
    components: {TChevronRightIcon},
    setup(props, {slots}) {
        /*Definitions*/
        const {breadcrumbs, design, color, position} = toRefs(props)

        /*Generating Style Classes*/
        const styleClass = () => {
            let style;
            if (design.value === 'filled') {
                style = 'breadcrumb-' + design.value + '-' + color.value + ' breadcrumb-' + design.value + '-base'
            } else if (design.value === 'block') {
                style = 'breadcrumb-block-' + color.value
            }

            return style
        }
        const filledStyle = () => {
            return 'breadcrumb' + ' ' +
                'breadcrumb-' + design.value + '-' + color.value + ' '+
                'breadcrumb-' + design.value + '-base' + ' ' +
                (position.value === 'right' ? 'flex-row-reverse' : '')
        }
        const filledContainerStyle = (item) => {
            return 'breadcrumb-filled-item' + ' ' +
                (item.active ? 'breadcrumb-item-active' : '')
        }
        const blockStyle = () => {
            return 'breadcrumb' + ' ' +
                'breadcrumb-' + design.value + '-base' + ' ' +
                (position.value === 'right' ? 'flex-row-reverse' : '')
        }
        const blockSubStyle = () => {
            return 'breadcrumb-' + design.value + '-' + color.value + ' '
        }
        const blockContainerStyle = (item) => {
            return 'breadcrumb-block-item'+ ' ' +
                (item.active ? 'breadcrumb-item-active' : 'text-gray-700')
        }

        /*Slot Check*/
        const hasSlot = name => !!slots[name]

        return {
            breadcrumbs,
            design,
            color,
            position,
            hasSlot,
            styleClass,
            filledContainerStyle,
            filledStyle,
            blockStyle,
            blockSubStyle,
            blockContainerStyle
        }
    }
})
</script>
