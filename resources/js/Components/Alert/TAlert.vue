<template>
    <transition name="fade">
        <!--Alert Container-->
        <div
            v-if="showAlertBox"
            :class="[
                'alert-box',
                calculatedAlertStyle
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
import {alertStyleMixin} from "@/Mixins/Styles/alertStyleMixin";
import TXCircleIcon from "@/Components/Icon/TXCircleIcon";

export default {
    name: "TAlert",
    components: {TXCircleIcon},
    mixins: [alertStyleMixin],
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
