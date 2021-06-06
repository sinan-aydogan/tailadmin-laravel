<template>
  <transition name="fade">
    <div v-if="showAlertBox"
         :class="[alertBoxStyle,colors[color].alertStyle,radiusStyle,border && 'border', position ? positions[position].positionStyle : 'relative w-full']">
      <span class="flex px-1 items-center justify-start gap-2">
        <slot name="icon"></slot>
        <span class="flex flex-wrap items-center whitespace-normal">
          <slot></slot>
        </span>
      </span>
      <span v-if="closeable" :class="alertBoxCloseIconStyle" @click="showAlertBox = !showAlertBox">X</span>
    </div>
  </transition>
</template>

<script>
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";

export default {
  name: "Alert",
  mixins: [radiusSizeMixin],
  props: {
    color: {
      required: false
    },
    border: {
      type: Boolean,
      required: false
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
    position: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      showAlertBox: true,
      colors: {
        'red': {
          alertStyle: "bg-red-200 border-red-500 text-red-700 shadow-sm"
        },
        'blue': {
          alertStyle: "bg-blue-200 border-blue-500 text-blue-700 shadow-sm"
        },
        'green': {
          alertStyle: "bg-green-200 border-green-500 text-green-700 shadow-sm"
        },
        'yellow': {
          alertStyle: "bg-yellow-200 border-yellow-500 text-yellow-700 shadow-sm"
        },
        'indigo': {
          alertStyle: "bg-indigo-200 border-indigo-500 text-indigo-700 shadow-sm"
        },
        'purple': {
          alertStyle: "bg-purple-200 border-purple-500 text-purple-700 shadow-sm"
        },
        'pink': {
          alertStyle: "bg-pink-200 border-pink-500 text-pink-700 shadow-sm"
        },
        'white': {
          alertStyle: "bg-white border-gray-300 shadow-sm"
        },
        'gray': {
          alertStyle: "bg-gray-200 border-gray-500 text-gray-700 shadow-sm"
        },
        'black': {
          alertStyle: "bg-gray-700 border-black text-gray-200 shadow-sm"
        },
      },
      positions: {
        'lb': {
          positionStyle: 'fixed left-4 bottom-4'
        },
        'rb': {
          positionStyle: 'fixed right-4 bottom-4'
        },
        'lt': {
          positionStyle: 'fixed left-4 top-4'
        },
        'rt': {
          positionStyle: 'fixed right-4 top-4'
        },
        '': {
          positionStyle: 'relative w-full'
        }
      },
      alertBoxStyle: 'flex flex-row justify-between items-center shadow p-4 min-h-max',
      alertBoxCloseIconStyle: 'flex items-center justify-center w-5 h-5 rounded-full text-' + this.color + '-500 font-bold border-' + this.color + '-500 hover:bg-red-700 hover:text-white hover:bg-opacity-90 cursor-pointer'
    }
  },
  created() {
    if (this.timer) {
      setTimeout(() => {
        this.showAlertBox = false;
      }, this.timer)
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all linear 2s;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}
</style>
