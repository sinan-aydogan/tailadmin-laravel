<template>
    <div class="relative">
        <!--Adding Form-->
        <div class="p-inputtext p-component justify-between items-center flex hover:border-blue-400 cursor-pointer text-gray-600" @click="showPanel=!showPanel" >
            <!--Placeholder-->
            {{ value.length == 0 ? 'No items found' : value.length+' items' }}
            <!--Items and Add Form Showing Button-->
            <span class="p-dropdown-trigger-icon pi pi-chevron-down" ></span>
        </div>
        <!--Panel-->
        <div class="absolute flex flex-col w-full border border-gray-300 p-2 rounded-md mt-2 space-y-2 bg-white shadow-inner shadow z-10" v-if="showPanel">
            <!--Fields-->
            <div class="flex flex-col md:flex-row space-y-2 md:space-y-0">
                <!--Conditional View-->
                <input v-model="value1" :class="value2name == null ? 'rounded-md border' : 'md:rounded-l md:rounded-r-none md:border-r-0'" v-if="value1name" type="text" name="value1" class="flex w-full rounded  border-gray-300 p-2" :placeholder="value1name"/>
                <input v-model="value2" v-if="value2name" type="text" name="value2" class="flex w-full rounded md:rounded-r md:rounded-l-none border border-gray-300 p-2" :placeholder="value2name" />
                <!--Add Button-->
                <div class="flex items-center justify-center md:ml-2" >
                    <button type="button" @click="addItem" class="h-8 bg-green-500 rounded-sm flex items-center justify-center text-white hover:bg-green-400">
                        <add-icon class="w-6 h-5"/> <span class="hidden md:block pr-2">Add</span>
                    </button>
                </div>
            </div>
            <div v-if="emptyMessage != null" class="text-red-500 text-sm">{{ emptyMessage }}</div>
            <!--Header-->
            <div class="grid grid-cols-12 w-full border rounded-md items-center space-x-2 px-2 py-1 font-bold bg-gray-200 bg-opacity-50" v-if="value.length >0">
                <span class="col-span-1"></span>
                <span class="col-span-5">{{ value1name }}</span>
                <span class="col-span-5">{{ value2name }}</span>
                <span class="col-span-1"></span>
            </div>
            <!--Items-->
            <div v-for="(item,index) in value" :key="index" class="grid grid-cols-12 border rounded-md items-center space-x-2 px-2 py-1">
                <!--Counter-->
                <span class="col-span-1">{{ index+1 }}.</span>
                <!--Fields-->
                <span class="col-span-5">{{ item.value1 }}</span>
                <span class="col-span-5">{{ item.value2 }}</span>
                <!--Delete Button-->
                <span class="col-span-1" @click="deleteItem(index)"><delete-icon class="w-6 h-5 text-red-500 cursor-pointer"/></span>
            </div>
            <!--Close Button-->
            <div class="flex bg-gray-100 cursor-pointer border text-center m-auto px-2 border rounded-md text-gray-600 font-bold" @click="showPanel=false">
                Close
            </div>
        </div>
    </div>
</template>

<script>
import AddIcon from '@/Components/Icons/General/Plus'
import DeleteIcon from '@/Components/Icons/General/XIcon'
import DownIcon from '@/Components/Icons/General/SlimeDownArrow'
export default {
    props:['value1name','value2name','value'],
    components: {
        AddIcon,
        DeleteIcon,
        DownIcon,
    },
    data(){
      return{
          value: [],
          showPanel:false,
          emptyMessage:null,
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
        }
    }
}
</script>
