<template>
    <div class="flex flex-col w-full">
        <div class="flex flex-row justify-between text-sm">
            <div v-text="title"></div>
            <div>{{ counterValue + '%' }}</div>
        </div><transition name="progress">
            <div :class="[
            'flex w-full bg-gray-200 shadow-inner rounded-full overflow-hidden flex-shrink-0 flex-grow-0',
            6>height ? 'h-'+height : 'h-2'
            ]">
                <div :class="[
                    'flex',
                    colorStyle,
                    6>height ? 'h-'+height : 'h-2',
                    ]"
                     :style="'width:'+counterValue+'%'"
                ></div>

    </div></transition>
    </div>
</template>

<script>
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
        color: {
            type: String,
            default: 'green'
        },
        height: {
            type: Number,
            default: 3
        },
        timer: {
            type: Number,
            default: 20
        }
    },
    data(){
        return {
            counterValue:0
        }
    },
    computed: {
        colorStyle() {
            if (this.color === 'white') {
                return 'bg-white'
            } else if (this.color === 'black') {
                return 'bg-black'
            } else {
                return 'bg-' + this.color + '-500'
            }
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
                },vm.timer)
            },
            immediate: true,
        }
    }
}
</script>
