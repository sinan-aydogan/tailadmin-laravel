<template>
    <div :class="[styleClass(),'loading-screen']">
        <!--Countdown Line-->
        <div v-if="timer" class="loading-screen-countdown">
            <div id="countdown" :style="{width: countDownCounter+'%'}"></div>
        </div>
        <!--Close Icon-->
        <div v-if="closeable" class="loading-screen-close" @click="close">
            <t-x-icon class="h-10 w-10"/>
        </div>
        <!--Content-->
        <div v-if="!$slots['default']" class="loading-screen-content">
            <!--Text Content-->
            <div class="flex flex-col h-full space-y-8 justify-center items-center">
                <!--Title-->
                <span id="title">
                {{title}}
            </span>
                <!--Message-->
                <span id="message">
                {{message}}
            </span>
            </div>
            <!--Animation-->
            <component id="animation" :is="loadingComponent" :color="loadingColor ? loadingColor : color" target="loading-screen"/>
        </div>
        <!--Custom Content-->
        <div v-if="$slots['default']">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import TXCircleIcon from "@/Components/Icon/TXCircleIcon";
import {defineAsyncComponent, defineComponent, ref, toRefs} from "vue";
import TXIcon from "@/Components/Icon/TXIcon";
export default defineComponent({
    name: "TLoading",
    components: {TXIcon, TXCircleIcon},
    props: {
        color: {
            type: String,
            default: 'gray'
        },
        title: {
            type: String,
            default: 'Loading...'
        },
        message: {
            type: String,
            default: 'Please wait, while your request being processed'
        },
        loadingDesign: {
            type: String,
            default: 'three-bars'
        },
        loadingColor: {
            type: String,
        },
        closeable : {
            type: Boolean,
            default: false
        },
        timer: {
            type: Number,
            required: false
        }
    },
    setup(props,{emit,slots}){
        const {timer,color,loadingColor,loadingDesign} = toRefs(props)

        /*Design Check*/
        const styleClass = () => {
            return 'loading-screen-'+color.value
        }

        /*Timer*/
        const timerCounter = ref(0)
        const countDownCounter = ref(0)

        if (timer.value) {
            /*Timer Function*/
            let timerFn = setTimeout(() => {
                close();
            }, timer.value)

            /*Count Down Function*/
            let countDownFn = setInterval(() => {
                if (timer.value >= timerCounter.value) {
                    countDownCounter.value = 100 - (timerCounter.value / timer.value) * 100
                    timerCounter.value += 4
                } else {
                    clearInterval(countDownFn)
                }
            }, 1)
        }

        /*Close*/
        const close = () => {
            emit('close', false)
        }

        /*Loading Component*/
        const activeLoadingComponent = ref();
        if(loadingDesign.value === 'three-bars'){
            activeLoadingComponent.value = 'ThreeBars'
        }else if(loadingDesign.value === 'three-dots') {
            activeLoadingComponent.value = 'ThreeDots'
        } else {
            activeLoadingComponent.value = 'Cogs'
        }

        const loadingComponent = defineAsyncComponent(()=>import(`@/Components/Loading/Animations/${activeLoadingComponent.value}.vue`))

        /*Slot Check*/
        const hasSlot = name => !!slots[name]

        return {close,countDownCounter,styleClass,hasSlot,loadingComponent}
    }
})
</script>
