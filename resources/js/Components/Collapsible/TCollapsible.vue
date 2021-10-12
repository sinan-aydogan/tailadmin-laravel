<template>
    <div :class="['collapsible',calculatedCollapsibleStyle]">
        <slot></slot>
        {{modelValue}}
    </div>
</template>

<script>
import {defineComponent, inject, provide, ref, toRef, toRefs} from 'vue'
import {collapsibleStyleMixin} from "@/Mixins/Styles/collapsibleStyleMixin";

export default defineComponent({
    name: "Collapsible",
    mixins: [collapsibleStyleMixin],
    props : {
        type: {
            type: String,
            default: 'simple'
        },
        modelValue: {
            type: Array,
            default: []
        }
    },
    setup(props){
        const {type,modelValue} = toRefs(props)

        provide('type', ref(type))

        return {modelValue}
    }
})
</script>
