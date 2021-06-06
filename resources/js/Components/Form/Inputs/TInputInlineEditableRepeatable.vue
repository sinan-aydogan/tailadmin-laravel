<template>
    <div class="relative">
        <!--Adding Form-->
        <div :class="value.length > 0 && 'p-inputtext p-component hover:border-blue-400'" class=" justify-between items-center flex  cursor-pointer text-gray-600">
            <!--Conditional View-->
            <!--Fields-->
            <div class="flex flex-col space-y-2 w-full">
                <div v-for="(item,index) in value" class="flex flex-col w-full items-center" :key="index">
                    <div class="flex flex-row items-center w-full">
                        <!--Counter-->
                        <span class="flex mr-2 font-semibold text-md text-gray-400" :class="nullError && value[index] === null && 'text-red-500'">{{ index+1 }}.</span>
                        <!--Field-->
                        <label for="value" class="flex w-full">
                            <input v-model="value[index]" type="text" name="value" class="flex w-full rounded border border-gray-300 p-2 text-gray-500" :class="nullError && value.length === index+1 && 'border-red-500 placeholder-red-500'" :placeholder="nullError && value.length === index+1 ? 'Please fill this field' : placeHolderText" />
                        </label>
                        <!--Delete Button-->
                        <span class="col-span-1" @click="deleteItem(index)"><delete-icon class="w-6 h-5 text-red-500 cursor-pointer"/></span>
                    </div>
                    <!--Add Button-->
                    <div class="w-full pl-4 pr-6 mt-2">
                        <button type="button" v-if="value.length === index+1" class="flex flex-row w-full items-center text-white border rounded-md bg-green-500 p-2 justify-center"  @click="addItem(index)">
                            <add-icon class="w-6 h-5 text-white cursor-pointer mr-2"/> Add new item
                        </button>
                    </div>

                </div>
                <!--Placeholder-->
                <button type="button" v-if="value.length === 0" class="flex flex-row w-full text-green-500 border border-green-500 shadow-inner rounded-md p-2 justify-center"  @click="addItem"><add-icon class="w-6 h-5 text-green-500 cursor-pointer mr-2"/> No items found, add new item</button>

            </div>
        </div>
    </div>
</template>

<script>
import AddIcon from '@/Components/Icons/General/Plus'
import DeleteIcon from '@/Components/Icons/General/XIcon'
import DownIcon from '@/Components/Icons/General/SlimeDownArrow'
export default {
    props:['placeHolderText','value'],
    components: {
        AddIcon,
        DeleteIcon,
        DownIcon,
    },
    data(){
      return{
          nullError:false,
      }
    },
    methods: {
        reset(){
            this.valueName =null;
            this.nullError=false;
        },
        addItem(index){
            if(this.value[index]=== null || this.value[index]=== ''){
                this.nullError = true;
            }else{

                this.value.push(null);
                this.reset();
            }

        },
        deleteItem(index){
            this.value.splice(index,1);
        }
    }
}
</script>
