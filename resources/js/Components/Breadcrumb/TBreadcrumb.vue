<template>
  <div>
    <!--Style 1-->
    <div
        v-if="breadcrumbStyle === 1"
        :class="['hidden sm:flex flex-row items-center justify-start p-2 border-2 rounded-md h-14 w-full bg-white bg opacity-80',
                  $slots.hasOwnProperty('subContent') && 'justify-between']">
      <div class="flex flex-row gap-2">
        <div
            v-for="(item,index) in breadcrumbs"
            :key="index"
            :class="['flex items-center justify-center gap-2',
        breadcrumbs.length !== index+1 ?
        'font-semibold text-gray-600' :
                item.activeColor ?
                'border-2 px-2 py-1 rounded-full font-bold border-'+item.activeColor+'-600 text-'+item.activeColor+'-600' :
                'border-2 px-2 py-1 rounded-full font-bold border-blue-600 text-blue-600'
        ]">
          {{ item.label }}
          <font-awesome-icon v-if="breadcrumbs.length !== index+1" class="mt-0.5" icon="angle-double-right"/>
        </div>
      </div>
      <span v-if="$slots.hasOwnProperty('subContent')" class="px-3 text-2xl text-gray-700">
        <slot name="subContent"></slot>
      </span>
    </div>
    <!--Style 2-->
    <div
        v-if="breadcrumbStyle === 2"
        :class="['hidden sm:flex flex-wrap items-center justify-between gap-1 bg-white bg-opacity-50 border-b-4 shadow-sm', position === 'right' ? 'flex-row-reverse' : 'justify-end']">
      <div class="flex flex-row gap-1">
        <div
            v-for="(item,index) in breadcrumbs"
            :key="index"
            :class="[
              'flex items-center justify-center p-3 border-b-4 -mb-1',
              breadcrumbs.length !== index+1 ? 'bg-gray-300 border-gray-500' :
              'bg-'+item.activeColor+'-500 border-'+item.activeColor+'-900 bg-opacity-80 font-bold text-white',
              ]">
        <span class="flex">
          {{item.label}}
        </span>
        </div>
      </div>
      <span v-if="$slots.hasOwnProperty('subContent')" class="px-3 text-2xl text-gray-700">
        <slot name="subContent"></slot>
      </span>
    </div>
    <!--Mobile-->
  </div>
</template>

<script>
export default {
  props : {
    breadcrumbStyle : {
      type : Number,
      require: true,
      default :1
    },
    position : {
      type: String,
      require: true,
      default: 'left'
    },
    breadcrumbs : {
      type: Array,
      require : true
    }
  },
  name: "Breadcrumb"
}
</script>

<style scoped>

</style>