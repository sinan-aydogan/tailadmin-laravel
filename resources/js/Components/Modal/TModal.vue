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
        <div class="modal-close-button" @click="showModal=false;$emit('close', false)">x</div>
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
            v-if="$slots.hasOwnProperty('footer-left') || $slots.hasOwnProperty('footer-center') || $slots.hasOwnProperty('footer-right')"
            class="modal-footer-container"
        >
          <!--Left-->
          <div class="modal-footer-left">
            <slot name="footer-left" v-show="$slots.hasOwnProperty('footer-left')"/>
          </div>
          <!--Center-->
          <div class="modal-footer-center">
            <slot name="footer-center" v-show="$slots.hasOwnProperty('footer-center')"/>
          </div>
          <!--Right-->
          <div class="modal-footer-right" v-show="$slots.hasOwnProperty('footer-right')">
            <slot name="footer-right"/>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import {modalStyleMixin} from "@/Mixins/Styles/modalStyleMixin";

export default {
  name: "TModal",
  mixins: [modalStyleMixin],
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showModal: this.show
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
    document.addEventListener('keydown', closeOnEscape);
  },
  watch: {
    show() {
      this.showModal = this.show
    }
  }
}
</script>

<style scoped>

</style>
