<template>
  <div class="flex flex-row" @click="updateField">
    <span :class="['flex flex-shrink-0 justify-center items-center w-5 h-5 border mr-1',isChecked && 'bg-'+color+'-100',checkboxStyle,radiusStyle]"><font-awesome-icon v-if="isChecked" :class="'text-'+color+'-500'" icon="check"/></span>{{label}}
  </div>
</template>

<script>
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";
export default {
  name: 'TInputCheckBox',
  mixins:[radiusSizeMixin],
  props: {
    value: Array,
    inputValue: String,
    label: String,
    color: {
      type:String,
      default:'white'
    },
    id: String,
    checked: Boolean,
  },
  data()
  {
    return{
      isChecked : this.checked
    }
  },
  computed:{
    checkboxStyle(){
      let style;
      if(this.color === 'white'){
        style = 'hover:bg-blue-100 checked:bg-indigo-200 border-gray-300 text-gray-600'
      }else if(this.color === 'black'){
        style = 'hover:bg-gray-500 checked:bg-indigo-200 border-black bg-gray-500 text-gray-100'
      }else{
        style = 'hover:bg-'+this.color+'-200 active:bg-'+this.color+'-200 border-'+this.color+'-500'
      }
      return style
    }
  },
  methods: {
    updateField(){
      this.isChecked = !this.isChecked
      if (this.isChecked) {
        this.value.push(this.inputValue);
      } else {
        this.value.splice(this.value.indexOf(this.inputValue), 1);
      }
      this.$emit('input', this.value);
    }
  }
}
</script>