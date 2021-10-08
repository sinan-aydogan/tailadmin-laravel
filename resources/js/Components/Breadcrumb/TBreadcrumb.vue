<template>
    <div>
        <div
            v-if="design==='filled'"
            :class="[
            'breadcrumb',
            styleClass,
            position === 'right' && 'flex-row-reverse'
            ]">
            <div id="breadcrumb-filled-container">
                <div
                    v-for="(item,index) in breadcrumbs"
                    :key="index"
                    :class="[
                    'breadcrumb-filled-item',
                    item.active && 'breadcrumb-item-active '
                    ]">
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
            :class="[
            'breadcrumb breadcrumb-block-base',
            position === 'right' && 'flex-row-reverse'
        ]">
            <div id="breadcrumb-block-container" :class="styleClass">
                <div
                    v-for="(item,index) in breadcrumbs"
                    :key="index"
                    :class="[
              'breadcrumb-block-item',
              item.active ? 'breadcrumb-item-active' : 'text-gray-700'
              ]">
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
        const {breadcrumbs, design, color, position} = toRefs(props)

        /*Design Check*/
        const styleClass = ref()
        if (design.value === 'filled') {
            styleClass.value = 'breadcrumb-' + design.value + '-' + color.value + ' breadcrumb-' + design.value + '-base'
        } else if (design.value === 'block') {
            styleClass.value = 'breadcrumb-block-' + color.value
        }

        const hasSlot = name => !!slots[name]

        return {breadcrumbs, design, color, position, hasSlot, styleClass}
    }
})
</script>
