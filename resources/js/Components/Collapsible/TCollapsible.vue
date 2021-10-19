<template>
    <div
        :class="styleClass()"
    >
        <slot></slot>
    </div>
</template>

<script>
import {defineComponent, inject, provide, ref, toRef, toRefs} from 'vue'


export default defineComponent({
    name: "Collapsible",
    props: {
        openingType: {
            type: String,
            default: 'click'
        },
        radius: {
            type: Number,
            default: 3
        },
        accordion:{
            type: Boolean,
            default: false
        },
        triggerType: {
            type: String,
            default: 'chevron'
        },
        separated: {
            type: Boolean,
            default: false
        },
        modelValue: {
            type: Array,
            default: []
        },
        color: {
            type: String,
        },
        design: {
            type: String,
        },
        titleAlign: {
            type: String,
        },
        triggerAlign: {
            type: String,
        },
    },
    setup(props) {
        /*Definitions*/
        const {
            openingType,
            modelValue,
            border,
            triggerType,
            separated,
            radius,
            color,
            design,
            titleAlign,
            triggerAlign,
            accordion
        } = toRefs(props)
        const radiusSizes = {
            1: 'first:rounded-t-sm last:rounded-b-sm',
            2: 'first:rounded-t last:rounded-b',
            3: 'first:rounded-t-md last:rounded-b-md',
            4: 'first:rounded-t-lg last:rounded-b-lg',
            5: 'first:rounded-t-xl last:rounded-b-xl',
            6: 'first:rounded-t-2xl last:rounded-b-2xl',
            7: 'first:rounded-t-3xl last:rounded-b-3xl',
            8: 'first:rounded-t-full last:rounded-b-full'
        }

        /*Provide*/
        provide('openingType', ref(openingType.value))
        provide('activeItems', ref(modelValue.value))
        provide('radius', ref(radius.value))
        provide('accordion', ref(accordion.value))
        provide('separated', ref(separated.value))
        provide('rootColor', ref(color.value))
        provide('rootDesign', ref(design.value))
        provide('rootTitleAlign', ref(titleAlign.value))
        provide('rootTriggerAlign', ref(triggerAlign.value))
        provide('rootTriggerType', ref(triggerType.value))

        /*Generating Style Classes*/
        const styleClass = () => {

            return 'collapsible ' +
                (separated.value ? 'space-y-2' : radiusSizes[radius.value])
        }

        return {modelValue, styleClass}
    }
})
</script>
