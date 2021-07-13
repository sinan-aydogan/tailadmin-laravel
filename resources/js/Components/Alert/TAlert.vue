<template>
    <transition name="fade">
        <!--Alert Container-->
        <div
            v-if="showAlertBox"
            :class="[
                'alert-box',
                alertStyle,
                radiusStyle
                ]"
        >
            <!--Alert Icon-->
            <div class="flex flex-shrink-0">
                <slot name="icon"></slot>
            </div>
            <!--Alert Content-->
            <div class="flex flex-wrap flex-grow whitespace-normal">
              <span>
                <slot></slot>
              </span>
            </div>
            <!--Close Icon-->
            <span v-if="closeable" class="alert-close" @click="close">
                <t-x-circle-icon class="h-6 w-6"/>
            </span>
        </div>
    </transition>
</template>

<script>
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";
import TXCircleIcon from "@/Components/Icon/TXCircleIcon";

export default {
    name: "TAlert",
    components: {TXCircleIcon},
    mixins: [radiusSizeMixin],
    props: {
        id: {
            type: String
        },
        color: {
            required: false,
            default: 'red'
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
    computed: {
        alertStyle() {
            /*Color Styles*/
            /*Solid*/
            if (!this.color.includes('-') && this.color !== 'black' && this.color !== 'white') {
                return 'bg-' + this.color + '-500 bg-opacity-95 text-white';
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
