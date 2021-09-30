<template>
    <transition enter-active-class="ease-out duration-300"
                enter-class="opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="ease-in duration-200"
                leave-class="opacity-100"
                leave-to-class="opacity-0">
        <!--Modal Container-->
        <div v-if="show" class="modal-container">
            <div :class="[
                'modal-box',
                calculatedModalStyle
                ]">
                <!--Close button-->
                <div class="modal-close-button" @click="showModal = false; $emit('close',false)">x</div>
                <!--Header-->
                <div class="modal-header">
                    <slot name="header"/>
                </div>
                <!--Content-->
                <div class="my-6 px-4 gap-y-2 whitespace-normal">
                    <slot name="content"/>
                </div>
                <!--Footer-->
                <div
                    v-if="$slots['footer-left'] || $slots['footer-center'] || $slots['footer-right']"
                    class="modal-footer-container"
                >
                    <!--Left-->
                    <div class="modal-footer-left">
                        <span class="flex flex-wrap space-x-2" v-show="$slots['footer-left']">
                        <slot name="footer-left"/>
                        </span>
                    </div>
                    <!--Center-->
                    <div class="modal-footer-center">
                        <span class="flex flex-wrap space-x-2" v-show="$slots['footer-center']">
                        <slot name="footer-center"/>
                        </span>
                    </div>
                    <!--Right-->
                    <div class="modal-footer-right">
                        <span class="flex flex-wrap space-x-2" v-show="$slots['footer-right']">
                        <slot name="footer-right"/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import {defineComponent} from "vue";
import {ref} from "vue";
import {modalStyleMixin} from "@/Mixins/Styles/modalStyleMixin";
import {useKeypress} from 'vue3-keypress'

export default defineComponent({
    name: "TModal",
    mixins: [modalStyleMixin],
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    emits: ['close'],
    setup(props, {slots, emit}) {
        const showModal = ref(props.show)
        const someSuccessCallback = ({keyCode}) => {
            showModal.value = false
            emit('close', false)
        };

        useKeypress({
            keyEvent: "keydown",
            keyBinds: [
                {
                    keyCode: "esc", // or keyCode as integer, e.g. 40
                    success: someSuccessCallback,
                },
            ]
        })

        const hasSlot = name => !!slots[name]

        return {hasSlot, showModal}
    }
})
</script>
