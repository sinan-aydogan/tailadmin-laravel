<template>
    <div class="relative select-none"  v-click-outside="outside">
        <!--Adding Form-->
        <div :class="['form-input h-10 items-center cursor-pointer hover:border-blue-500', radiusStyle]" @click="showPanel=!showPanel" >
            <!--Placeholder-->
            {{ value.length === 0 ? 'No items found' : value.length+' items' }}
            <!--Items and Add Form Showing Button-->
            <span class="p-dropdown-trigger-icon pi pi-chevron-down" ></span>
        </div>
        <!--Panel-->
        <div class="absolute flex flex-col w-full border border-gray-300 py-4 px-2 rounded-md mt-2 space-y-2 bg-gradient-to-t from-gray-200 to-gray-100 shadow-inner shadow z-10" v-if="showPanel">
            <!--Fields-->
            <div class="flex flex-col md:flex-row space-y-2 md:space-y-0">
                <!--Conditional View-->
                <input v-model="value1" :class="value2name == null ? 'rounded-md border' : 'md:rounded-l md:rounded-r-none md:border-r-0'" v-if="value1name" type="text" name="value1" class="flex w-full rounded  border-gray-300 p-2" :placeholder="value1name"/>
                <input v-model="value2" v-if="value2name" type="text" name="value2" class="flex w-full rounded md:rounded-r md:rounded-l-none border border-gray-300 p-2" :placeholder="value2name" />
                <!--Add Button-->
                <div class="flex items-center justify-center md:ml-2" >
                    <t-button type="button" color="green" @click.native="addItem">
                        <t-plus-circle-icon class="w-6 h-5"/>
                        <span class="hidden md:block pr-2">Add</span>
                    </t-button>
                </div>
            </div>
            <div v-if="emptyMessage != null" class="text-red-500 text-sm">{{ emptyMessage }}</div>
            <!--Header-->
            <div class="grid grid-cols-12 w-full border-b border-gray-300 items-center space-x-2 px-2 py-1 font-bold " v-if="value.length >0">
                <span class="col-span-1"></span>
                <span class="col-span-5">{{ value1name }}</span>
                <span class="col-span-5">{{ value2name }}</span>
                <span class="col-span-1"></span>
            </div>
            <!--Items-->
            <div v-for="(item,index) in value" :key="index" class="grid grid-cols-12 bg-gray-50 border rounded-md items-center space-x-2 px-2 py-1">
                <!--Counter-->
                <span class="col-span-1">{{ index+1 }}.</span>
                <!--Fields-->
                <span class="col-span-5">{{ item.value1 }}</span>
                <span class="col-span-5">{{ item.value2 }}</span>
                <!--Delete Button-->
                <span class="col-span-1" @click="deleteItem(index)">
                     <t-trash-icon class="w-6 h-5 text-red-500 cursor-pointer"/>
                </span>
            </div>
            <!--Close Button-->
            <t-button type="button" color="white" @click.native="showPanel=false" size="sm">
                Close
            </t-button>
        </div>
    </div>
</template>

<script>
import TPlusCircleIcon from "@/Components/Icon/TPlusCircleIcon";
import TTrashIcon from "@/Components/Icon/TTrashIcon";
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";
import TButton from "@/Components/Button/TButton";
export default {
    props:['value1name','value2name','value'],
    components: {
        TButton,
        TTrashIcon,
        TPlusCircleIcon,
    },
    mixins: [radiusSizeMixin],
    data(){
      return{
          value1: null,
          value2: null,
          showPanel:false,
          emptyMessage:null,
      }
    },
    directives: {
        'click-outside': {
            bind: function (el, binding, vNode) {
                // Provided expression must evaluate to a function.
                if (typeof binding.value !== 'function') {
                    const compName = vNode.context.name
                    let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`
                    if (compName) {
                        warn += `Found in component '${compName}'`
                    }

                    console.warn(warn)
                }
                // Define Handler and cache it on the element
                const bubble = binding.modifiers.bubble
                const handler = (e) => {
                    if (bubble || (!el.contains(e.target) && el !== e.target)) {
                        binding.value(e)
                    }
                }
                el.__vueClickOutside__ = handler

                // add Event Listeners
                document.addEventListener('click', handler)
            },

            unbind: function (el) {
                // Remove Event Listeners
                document.removeEventListener('click', el.__vueClickOutside__)
                el.__vueClickOutside__ = null

            }
        }
    },
    methods: {
        reset(){
            this.value1 =null;
            this.value2 =null;
            this.emptyMessage=null;
        },
        addItem(){
            if(this.value2name != null){
                if(this.value1==null || this.value2==null){
                    this.emptyMessage = 'Please fill in the fields';
                    window.setTimeout(()=>{
                        this.emptyMessage=null;
                    }, 3000);
                }else{
                    this.value.push({value1:this.value1,value2:this.value2});
                    this.reset();
                }
            }else{
                if(this.value1==null){
                    this.emptyMessage = 'Please fill in the fields';
                    window.setTimeout(()=>{
                        this.emptyMessage=null;
                    }, 3000);
                }else{
                    this.value.push({value1:this.value1});
                    this.reset();
                }
            }
        },
        deleteItem(index){
            this.value.splice(index,1);
        },
        outside() {
            this.showPanel = false
        }
    }
}
</script>
