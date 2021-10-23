<template>
        <div :class="styleClass()">
            <!--Icon-->
            <div v-if="$slots['icon']">
                <slot name="icon"></slot>
            </div>
            <!--Title-->
            <div v-if="$slots['title']">
                <b>
                    <slot name="title"></slot>
                </b>
            </div>
            <!--Default Content-->
            <div class="list-content">
                <slot></slot>
            </div>
            <!--Second Content-->
            <div v-if="$slots['secondContent']">
                <slot name="secondContent"></slot>
            </div>
        </div>
</template>

<script>
import {defineComponent, inject, ref, toRefs} from "vue";

export default defineComponent({
    name: "TListItem",
    props: {
        active: {
            type: Boolean,
            required: false
        },
        color: {
            type: String,
            request: false
        },
    },
    setup(props, {slots}) {
        /*Definitions*/
        const {active, color} = toRefs(props)

        /*Injections*/
        const radius = inject('radius')
        const border = inject('border')
        const separated = inject('separated')
        const rootColor = inject('rootColor')
        const rootDesign = inject('rootDesign')

        /*Taken Over Definitions from Root */
        const activeColor = ()=>{
            return rootColor.value ? rootColor.value : color.value
        }
        const activeDesign = ()=>{
            return rootDesign.value ? rootDesign.value : design.value
        }

        /*Generating Style Classes*/
        const styleClass = () => {
            return 'list-container' + ' ' +
                'list-' + activeDesign() + '-base' + ' ' +
                'list-' + activeDesign() + '-' + activeColor() + (active.value ? '-active': '') +' ' +
                (separated.value && border ? 'border last:border first:border' : '') + ' ' +
                (separated.value ? 'radius-' + radius.value : 'group-radius-' + radius.value) + ' ' +
                (activeDesign() === 'outline' || activeDesign() === 'elegant' ? 'list-border' : (border.value ? 'list-border' : 'border-none'))+ ' ' +
                (hasSlot('secondContent') ? 'justify-between' : 'justify-start')
        }

        /*Slot Check*/
        const hasSlot = name => !!slots[name]

        return {hasSlot,styleClass, rootColor}
    }
})
</script>
