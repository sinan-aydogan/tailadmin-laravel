<template>
  <div :class="['flex px-2 py-1 items-center max-w-min max-h-min whitespace-nowrap gap-2',colorStyle,radiusStyle]">
    <slot></slot>
    <span v-if="value" class="flex px-1 my-1 text-xs items-center justify-center border rounded-full">{{value}}</span>
  </div>
</template>

<script>
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";

export default {
  name: "Badge",
  mixins: [radiusSizeMixin],
  props : {
    color : {
      type : String,
      required : false,
      default : 'blue'
    },
    value : {
      type : String,
      required: false
    }
  },
  data() {
    return {
      colors : [
        {key:'red', badgeStyle:'bg-red-500 text-white'},
        {key:'blue', badgeStyle:'bg-blue-500 text-white'},
        {key:'green', badgeStyle:'bg-green-500 text-white'},
        {key:'yellow', badgeStyle:'bg-yellow-500 text-white'},
        {key:'indigo', badgeStyle:'bg-indigo-500 text-white'},
        {key:'purple', badgeStyle:'bg-purple-500 text-white'},
        {key:'pink', badgeStyle:'bg-pink-500 text-white flex'},
        {key:'white', badgeStyle:'bg-white border text-gray-700 flex'},
        {key:'gray', badgeStyle:'bg-gray-500 text-gray-700 flex'},
        {key:'black', badgeStyle:'bg-black text-white flex'},
      ]
    }
  },
  computed : {
    colorStyle(){
      let i, colorStyle;
      if(this.color){
        for(i=0;i<this.colors.length ; i++){
          if(this.color === this.colors[i].key){
            colorStyle = this.colors[i].badgeStyle;
          }
        }
      }
      return colorStyle;
    }
  }
}
</script>

<style scoped>

</style>
