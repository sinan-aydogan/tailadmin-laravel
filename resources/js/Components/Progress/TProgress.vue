<template>
    <div class="flex flex-col w-full">
        <div class="flex flex-row justify-between text-sm">
            <div v-text="title"></div>
            <div>{{ counter + '%' }}</div>
        </div><transition name="progress">
            <div :class="[
            'flex w-full bg-gray-200 shadow-inner rounded-full overflow-hidden flex-shrink-0 flex-grow-0',
            6>height ? 'h-'+height : 'h-2'
            ]">
                <transition appear @before-enter="beforeStyle" @after-appear="enterStyle">
                <div :class="[
                    'flex',
                    colorStyle,
                    6>height ? 'h-'+height : 'h-2',
                    ]"
                ></div>
                </transition>

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
        },
        counter(){
            let vm = this;
            if(vm.value>100){
                vm.value = 100
            }
            if(vm.counterValue>vm.value){
                clearInterval(this.fn())
            }
            let fn = setInterval(()=>{
                vm.counterValue++
            },200)
            return vm.counterValue
        }
    },
    methods: {
        beforeStyle(event){
            event.style.width = 0
        },
        enterStyle(event){
            if(this.value>100){
                this.value = 100
            }
            event.style.width = this.value+'%'
            event.style.transition = `all 1s linear`
        }
    },
}
</script>
