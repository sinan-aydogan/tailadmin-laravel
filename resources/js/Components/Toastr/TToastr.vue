<template>
    <transition name="fade">
        <div v-if="showAlertBox"
             :class="[alertBoxStyle,toastrStyle,radiusStyle,border && 'border', position ? positions[position].positionStyle : 'relative w-full overflow-hidden flex-shrink-0']">
      <span class="flex px-1 items-center justify-start gap-2">
        <slot name="icon"></slot>
        <span class="flex flex-wrap items-center whitespace-normal flex-shrink-0">
          <slot></slot>
        </span>
      </span>
            <span v-if="closeable" :class="alertBoxCloseIconStyle" @click="close">X</span>
        </div>
    </transition>
</template>

<script>
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";

export default {
    name: "TToastr",
    mixins: [radiusSizeMixin],
    props: {
        id: {
            type: String
        },
        color: {
            required: false,
            default: 'red'
        },
        border: {
            type: Boolean,
            default: false
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
            positions: {
                'lb': {
                    positionStyle: 'fixed left-4 bottom-4'
                },
                'rb': {
                    positionStyle: 'fixed right-6 bottom-4'
                },
                'lt': {
                    positionStyle: 'fixed left-4 top-4'
                },
                'rt': {
                    positionStyle: 'fixed right-6 top-4'
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
                this.$emit('destroy', this.id)
            }, this.timer)
        }
    },
    methods: {
        close(){
            this.showAlertBox = false;
            this.$emit('destroy', this.id)
        }
    },
    computed: {
        toastrStyle(){
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
    }
}
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
