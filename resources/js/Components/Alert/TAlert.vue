<template>
    <transition name="fade">
        <div v-if="showAlertBox"
             :class="[alertBoxStyle,colorStyle,radiusStyle,border && 'border', position ? directionStyle : 'relative w-full']">
      <span class="flex px-2 items-center justify-start gap-2">
        <slot></slot>
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
            directionStyles: [
                {key: 'lb', class: 'fixed left-4 bottom-4'},
                {key: 'rb', class: 'fixed right-4 bottom-4'},
                {key: 'lt', class: 'fixed left-4 top-4'},
                {key: 'rt', class: 'fixed right-4 top-4'},
            ],
            alertBoxStyle: 'flex flex-row justify-between items-center shadow p-4 min-h-max',
            alertBoxCloseIconStyle: 'flex items-center justify-center w-5 h-5 rounded-full text-' + this.color + '-500 font-bold border-' + this.color + '-500 hover:bg-red-700 hover:text-white hover:bg-opacity-90 cursor-pointer'
        }
    },
    computed: {
        colorStyle() {
            if (this.color === 'red') {
                return 'bg-red-200 border-red-500 text-red-700';
            } else if (this.color === 'blue') {
                return 'bg-blue-200 border-blue-500 text-blue-700';
            } else if (this.color === 'indigo') {
                return 'bg-indigo-200 border-indigo-500 text-indigo-700';
            } else if (this.color === 'yellow') {
                return 'bg-yellow-200 border-yellow-500 text-yellow-700';
            } else if (this.color === 'green') {
                return 'bg-green-200 border-green-500 text-green-700';
            } else if (this.color === 'gray') {
                return 'bg-gray-200 border-gray-500 text-gray-700';
            } else if (this.color === 'black') {
                return 'bg-gray-700 border-black text-gray-200';
            } else {
                return 'bg-white'
            }
        },
        directionStyle() {
            let i, directionStyle;
            if (this.position) {
                for (i = 0; i < this.directionStyles.length; i++) {
                    if (this.position === this.directionStyles[i].key) {
                        directionStyle = this.directionStyles[i].class;
                    }
                }

            }
            return directionStyle
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
