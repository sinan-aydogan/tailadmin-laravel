<template>
    <div class="progress">
        <div class="progress-container">
            <div v-text="title"></div>
            <div>{{ counterValue + '%' }}</div>
        </div><transition name="progress">
            <div :class="[
            'progress-value',
            heightStyles[height]
            ]">
                <div :class="[
                    'flex',
                    calculatedProgressStyle
                    ]"
                     :style="'width:'+counterValue+'%'"
                ></div>

    </div></transition>
    </div>
</template>

<script>
import {progressStyleMixin} from "@/Mixins/Styles/progressStyleMixin";

export default {
    name: "TProgress",
    props: {
        title: {
            type: String
        },
        value: {
            type: Number,
            default: 10
        },
        speed: {
            type: Number,
            default: 20
        }
    },
  mixins: [progressStyleMixin],
    data(){
        return {
            counterValue:0
        }
    },
    watch:{
        value: {
            handler: function (){
                let vm = this;
                vm.counterValue = 0;
                let fn = setInterval(()=>{
                    if(vm.counterValue>=vm.value){
                        clearInterval(fn)
                    }else{
                        vm.counterValue++
                    }
                },vm.speed)
            },
            immediate: true,
        }
    }
}
</script>
