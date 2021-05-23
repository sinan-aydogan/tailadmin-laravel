<template>
  <div class="rounded-md overflow-hidden shadow-lg">
    <table class="w-full">
      <thead>
        <tr :class="'bg-'+color+'-200'">
          <th v-for="(item,index) in header" :key="index" class="p-2">{{ item.toUpperCase() }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
            v-for="(item,index) in content"
            :key="index"
            :class="['hover:bg-'+color+'-200',index%2 === 0 ? 'bg-white' : 'bg-'+color+'-100']">
          <td v-for="i in header.length" :key="i" class="p-4">
            <span v-if="!$scopedSlots[header[i-1]]">{{ item[header[i-1]] }}</span>
            <slot v-else :name="header[i-1]" :props="item"></slot>

          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
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
      type: String
    }
  },
  data(){
    return {

    }
  }
}
</script>

<style scoped>

</style>