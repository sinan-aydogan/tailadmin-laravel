<template>
  <div>
    <div v-if="inputStyle === 'checkbox'">
      <ul class="flex flex-wrap justify-center gap-2 p-2 bg-white bg-opacity-60 border-opacity-60 border rounded-lg lg:rounded-full items-center">
        <li
            v-for="(item,index) in radii"
            :key="index"
            :class="[
            item,
            'w-6 h-6 text-white items-center flex justify-center flex-shrink-0 cursor-pointer',
            selectedRadius === index ? 'bg-green-500' : 'bg-gray-500'
            ]"
            @click="selectedRadius=index; $emit('selected-radius',index)">{{index}}
        </li>
      </ul>
    </div>
    <!--<div v-if="inputStyle === 'select'" class="flex flex-col gap-4 justify-center items-start">
      <div class="flex flex-wrap gap-4 items-center">
        <t-input-select v-model="selectedRadius" place-holder="Radius">
          <t-input-select-item :disabled="true">
            Select a Radius
          </t-input-select-item>
          <t-input-select-item
              v-for="(item,itemKey,index) in radii"
              :key="index"
              :value="itemKey"
          >
            {{ itemKey }}
          </t-input-select-item>
        </t-input-select>
      </div>
      <div class="inline-flex gap-2">
        Radius Code:
        <t-badge color="white">:radius="{{ selectedRadius }}"</t-badge>
      </div>
    </div>-->
  </div>
</template>

<script>
import {defineComponent} from "vue";

import TInputSelect from "@/Components/Form/Inputs/TInputSelect.vue";
import TBadge from "@/Components/Badge/TBadge.vue";
export default defineComponent({
  name: "TComponentRadiusSelector",
  components: {TBadge, TInputSelect},
  props: {
    inputStyle: {
      type: String,
      default: 'checkbox'
    }
  },
  data(){
    return {
      selectedRadius: 3,
      radii: {
        '0' : '',
        '1' : 'rounded-sm',
        '2' : 'rounded',
        '3' : 'rounded-md',
        '4' : 'rounded-lg',
        '5' : 'rounded-xl',
        '6' : 'rounded-2xl',
        '7' : 'rounded-3xl',
        '8' : 'rounded-full',
      }
    }
  },
  watch:{
    selectedRadius(itemKey){
      this.$emit('selected-radius',itemKey)
    }
  }
})
</script>
