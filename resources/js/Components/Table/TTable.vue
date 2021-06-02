<template>
  <div class="rounded-md overflow-hidden shadow-lg">
    <table class="w-full">
      <thead>
      <tr :class="headerStyle">
        <th v-for="(item,index) in header" :key="index" :class="['p-2',item.align ? 'text-'+item.align : 'text-left']">{{ item.label }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-if="content.length === 0" >
        <td :colspan="header.length" :class="noContentStyle">
          <div class="noContentStyle">
            <font-awesome-icon icon="info-circle"/>
            Any record not found
          </div>
        </td>
      </tr>
      <tr
          v-for="(item,index) in content"
          :key="index"
          :class="['hover:bg-'+color+'-200',index%2 === 0 ? 'bg-white' : 'bg-'+color+'-100']">
        <td v-for="i in header.length" :key="i" :class="['p-4',header[i-1].align ? 'text-'+header[i-1].align : 'text-left']">
          <span v-if="!$scopedSlots[header[i-1].key]" v-html="item[header[i-1].key]"></span>
          <slot v-else :name="header[i-1].key" :props="item"></slot>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons'
library.add(faInfoCircle)

export default {
  name: "Table",
  props : {
    header : {
      type : Array
    },
    content : {
      type : Array
    },
    color : {
      type: String,
      default: 'white'
    }
  },
  computed: {
    headerStyle(){
      let headerStyle;
      if(this.color === 'white'){
        headerStyle = 'bg-white'
      }else if(this.color === 'black'){
        headerStyle = 'bg-black text-white'
      }else{
        headerStyle = 'bg-'+this.color+'-200'
      }
      return headerStyle
    },
    noContentStyle(){
      let noContentStyle;
      if(this.color === 'white'){
        noContentStyle = 'bg-red-200 text-gray-600 text-center p-3'
      }else if(this.color === 'black'){
        noContentStyle = 'bg-gray-500 text-gray-200 text-center p-3'
      }else{
        noContentStyle = 'bg-'+this.color+'-50  text-'+this.color+'-500 text-center p-3'
      }
      return noContentStyle
    }
  }
}
</script>

<style scoped>

</style>