<template>
    <div class="relative">
        <span v-if="clearButton && selectedID" class="absolute flex top-2 right-2 border w-6 h-6 items-center justify-center rounded-lg hover:bg-red-500 hover:text-white cursor-pointer" @click="selectedID = null">x</span>
        <div @click="showOptions = !showOptions" class="form-input h-10 flex items-center cursor-pointer">
            <slot></slot>
            <span v-if="selectedID === null" aria-disabled="true" class="p-2">{{placeHolder ? placeHolder : 'Select'}}</span>
            <div v-if="selectedID !== null">
                <span v-if="options[selectedID].$el.innerHTML" v-html="options[selectedID].$el.innerHTML"/>
                <span v-else v-html="options[selectedID].label"/>
            </div>
            <div v-if="showOptions" class="absolute flex flex-col top-10 bg-white border border-gray-300 rounded-md w-full -ml-2 shadow-lg z-50">
                <div v-for="(item,index) in options" :key="index" class="hover:bg-gray-200 p-2 cursor-pointer" @click="selectedID = index;  $emit('input', item.value)">
                    <span v-if="item.$el.innerHTML" v-html="item.$el.innerHTML"/>
                    <span v-else v-html="item.label"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TInputDropdown",
    props: ['value','placeHolder','clearButton'],
    data(){
        return{
            options: [],
            selectedID: null,
            showOptions : false
        }
    },
    created() {
        this.options = this.$children
    },
    watch:{
        value(){
            this.selectedID = this.value
        }
    }
}
</script>

<style scoped>

</style>
