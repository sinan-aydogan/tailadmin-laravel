<template>
  <transition name="fade">
    <div v-if="showAlertBox"
         :class="[
             'toastr',
             calculatedToastrStyle,
             ]">
      <div class="flex px-1 items-center justify-start gap-2">
        <slot name="icon"></slot>
        <div class="flex flex-wrap items-center whitespace-normal flex-shrink-0">
          <slot></slot>
        </div>
      </div>
      <div v-if="closeable" :class="['toastr-close', closeIconColors[color]]" @click="close">
        <t-x-circle-icon class="w-5 h-5 text-white"/>
      </div>
    </div>
  </transition>
</template>

<script>
import {defineComponent} from "vue";
import {toastrStyleMixin} from "@/Mixins/Styles/toastrStyleMixin";
import TXCircleIcon from "@/Components/Icon/TXCircleIcon.vue";

export default defineComponent({
  name: "TToastr",
  components: {TXCircleIcon},
  mixins: [toastrStyleMixin],
  props: {
    id: {
      type: String
    },
    closeable: {
      type: Boolean,
      required: false,
      default: false
    },
    timer: {
      type: Number,
      required: false
    },
  },
  data() {
    return {
      showAlertBox: true,
    }
  },
  created() {
    if (this.timer) {
      setTimeout(() => {
        this.showAlertBox = false;
        this.$emit('destroy', this.id)
      }, this.timer)
    }
  },
  methods: {
    close() {
      this.showAlertBox = false;
      this.$emit('destroy', this.id)
    }
  },
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all ease-out .75s;
}

.fade-enter {
  opacity: 0;
  max-width: 0;
}

.fade-enter-to {
  opacity: 1;
  max-width: 100%;
}

.fade-leave {
  opacity: 1;
  max-width: 100%;
}

.fade-leave-to {
  opacity: 0;
  max-width: 0;
}
</style>
