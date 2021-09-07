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
        <div v-if="$slots.footerLeft || $slots.footerCenter || $slots.footerRight" class="modal-footer-container">
          <!--Left-->
          <div v-if="$slots.footerLeft" class="modal-footer-left">
            <slot name="footer-left"/>
          </div>
          <!--Center-->
          <div v-if="$slots.footerCenter" class="modal-footer-center">
            <slot name="footer-center"/>
          </div>
          <!--Right-->
          <div v-if="$slots.footerRight" class="modal-footer-right">
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
