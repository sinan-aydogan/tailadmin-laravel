<template>
  <div>
    <!--Style 1-->
    <div
        v-if="breadcrumbStyle === 1"
        :class="['breadcrumb-1',
                  position === 'right' ? 'flex-row-reverse' : 'justify-end']">
      <div class="breadcrumb-container">
        <div
            v-for="(item,index) in breadcrumbs"
            :key="index"
            :class="['breadcrumb-item-1',
            breadcrumbs.length !== index+1 ? 'font-semibold text-gray-600' :
              item.activeColor ? 'breadcrumb-item-active ' + style1ActiveColors[item.activeColor] :
                  'breadcrumb-item-active border-blue-600 text-blue-600'
        ]">
          {{ item.label }}
          <font-awesome-icon v-if="breadcrumbs.length !== index+1" class="mt-0.5" icon="angle-double-right"/>
        </div>
      </div>
      <div v-if="$slots.hasOwnProperty('subContent')" class="breadcrumb-sub-content">
        <slot name="subContent"></slot>
      </div>
    </div>
    <!--Style 2-->
    <div
        v-if="breadcrumbStyle === 2"
        :class="['breadcrumb-2',
        position === 'right' ? 'flex-row-reverse' : 'justify-end'
        ]">
      <div class="breadcrumb-container">
        <div
            v-for="(item,index) in breadcrumbs"
            :key="index"
            :class="[
              'breadcrumb-item-2',
                breadcrumbs.length !== index+1 ? 'bg-gray-300 border-gray-500' :
                  style2ActiveColors[item.activeColor] +  ' bg-opacity-80 font-bold text-white',
              ]">
          <div class="flex">
            {{ item.label }}
          </div>
        </div>
      </div>
      <div v-if="$slots.subContent" class="breadcrumb-sub-content">
        <slot name="subContent"></slot>
      </div>
    </div>
    <!--Mobile-->
  </div>
</template>

<script>
import {breadcrumbStyleMixin} from "@/Mixins/Styles/breadcrumbStyleMixin";

export default {
  name: 'TBreadcrumb',
  props: {
    breadcrumbs: {
      type: Array,
      require: true
    },
    breadcrumbStyle: {
      type: Number,
      require: true,
      default: 1
    },
    position: {
      type: String,
      require: true,
      default: 'left'
    },
  },
  mixins: [breadcrumbStyleMixin]
}
</script>

<style scoped>

</style>
