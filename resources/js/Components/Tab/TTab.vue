<template>
    <div class="flex flex-col w-full ">
        <div
            :class="[
            'flex flex-row max-w-min',
            tabStyle === 2 && 'p-2 gap-2 rounded-b-0 rounded-t'+radiusStyle,
            tabStyle === 2 & color === 'black' && 'bg-black',
            tabStyle === 2 & color === 'white' && 'bg-gray-200',
            tabStyle === 2 & color !== 'black' && 'bg-'+color+'-500',
            ]">
            <div
                v-for="(item,index) in tabs"
                :key="index"
                :class="['flex justify-start cursor-pointer font-semibold whitespace-normal',
              tabStyle === 1 ?
                 'border border-b-0 px-4 py-2' :
                 'border-0 px-4 py-1 rounded'+radiusStyle,
               color !== 'black'  ? 'bg-'+color+'-300'  : 'text-gray-200 bg-'+color,
               color === 'black' & !item.isActive && 'text-gray-700',
               color === 'white' && 'text-gray-800 bg-gray-200',
               item.isActive ?
                  color !== 'white' ? 'bg-opacity-90 text-'+color+'-900' : 'border border-gray-300' :
                 tabStyle === 1 ? 'bg-opacity-20 text-gray-400' : 'bg-'+color+'-500 text-white',
               index === tabs.length-1 & tabStyle === 1 && 'rounded-tr'+radiusStyle,
               index === 0 & tabStyle === 1 && 'rounded-tl'+radiusStyle
          ]" @click="selectedTab(index)">
                {{item.title}}
            </div>
        </div>
        <div :class="[
        'flex p-2 border rounded-r'+radiusStyle+' rounded-bl'+radiusStyle,
        color !== 'black'  ? 'bg-'+color+'-50 text-'+color+'-900' : 'text-gray-200 bg-'+color,
        color === 'white' && 'text-gray-800 bg-white',
        ]">
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TTab',
    props: {
        radius: {
            required: false,
            default: 0
        },
        color: {
            required: false,
            default: 'white'
        },
        tabStyle: {
            required: false,
            default: 1
        }
    },
    data() {
        return {
            activeID: null,
            tabs: [],
            isActive: false,
            radiusSizes: [
                '-sm',
                '',
                '-md',
                '-lg',
                '-xl',
                '-2xl',
                '-3xl',
                '-full'
            ]
        }
    },
    created() {
        this.tabs = this.$children
    },
    mounted() {
        this.selectedTab(0)
    },
    methods: {
        selectedTab(ID) {
            this.activeID = ID;
            this.tabs.forEach((tab, index) => {
                tab.isActive = (index === ID)
            })
        }
    },
    computed: {
        radiusStyle(){
            let i,radiusStyle;
            for(i=0; i<this.radiusSizes.length;i++){
                if(i === this.radius-1){
                    radiusStyle = this.radiusSizes[i];
                }
            }
            return radiusStyle
        }
    }
}
</script>
