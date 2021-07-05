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
  data() {
    return {
      showModal: this.show
    }
  },
  computed: {
    modalStyle() {
      /*Color Styles*/
      /*Solid*/
      if (!this.color.includes('-') && this.color !== 'black' && this.color !== 'white') {
        return 'bg-' + this.color + '-500 text-white';
      } else if (this.color === 'black') {
        return 'bg-black text-white'
      } else if (this.color === 'white') {
        return 'bg-white border border-gray-300 text-gray-700'
      }
      /*Light*/
      if (this.color.includes('light')) {
        return 'bg-' + this.color.split('-')[1] + '-50 border border-' + this.color.split('-')[1] + '-500 text-' + this.color.split('-')[1] + '-600';
      }
      /*Gradient*/
      if (this.color.includes('gradient')) {
        return 'bg-gradient-to-r from-' + this.color.split('-')[1] + '-500 to-' + this.color.split('-')[3] + '-700 text-white';
      }
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
