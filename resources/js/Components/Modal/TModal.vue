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
                radiusStyle,
                modalStyle
                ]">
                <!--Close button-->
                <div class="modal-close-button" @click="show=false;$emit('close', false)">x</div>
                <!--Header-->
                <div class="modal-header">
                    <slot name="header"/>
                </div>
                <!--Content-->
                <div class="my-6 px-4 whitespace-normal">
                    <slot name="content"/>
                </div>
                <!--Footer-->
                <div class="modal-footer-container">
                    <!--Left-->
                    <div class="modal-footer-left">
                        <slot name="footer-left"/>
                    </div>
                    <!--Center-->
                    <div class="modal-footer-center">
                        <slot name="footer-center"/>
                    </div>
                    <!--Right-->
                    <div class="modal-footer-right">
                        <slot name="footer-right"/>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";

export default {
    name: "TModal",
    mixins: [radiusSizeMixin],
    props: {
        show: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: 'white'
        }
    },
    created() {
        /*Close with Escape Key*/
        const closeOnEscape = (e) => {
            if (this.show && e.keyCode === 27) {
                this.show = false
                this.$emit('close', false)
            }
        }

        this.$once('hook:destroyed', () => {
            document.removeEventListener('keydown', closeOnEscape)
        })

        document.addEventListener('keydown', closeOnEscape)
        /*Gradient Color Generator*/
        if (this.color.includes('gradient')) {
            this.modalStyle = 'bg-gradient-to-r from-' + this.color.split('-')[1] + '-500 to-' + this.color.split('-')[3] + '-700 text-white';
        }
        /*Light Color Generator*/
        if (this.color.includes('light')) {
            this.modalStyle = 'bg-'+ this.color.split('-')[1] +'-50 border border-'+ this.color.split('-')[1] +'-500 text-'+ this.color.split('-')[1] +'-600';
        }
        /*Simple Color Generator*/
        if (!this.color.includes('-') && this.color !== 'black' && this.color !== 'white') {
            this.modalStyle = 'bg-'+ this.color +'-500 text-white';
        } else if(this.color === 'black'){
            this.modalStyle = 'bg-black text-white'
        } else if(this.color === 'white'){
            this.modalStyle = 'bg-white border border-gray-300 text-gray-700'
        }
    },
    data() {
        return {
            modalStyle: null,
        }
    }
}
</script>

<style scoped>

</style>
