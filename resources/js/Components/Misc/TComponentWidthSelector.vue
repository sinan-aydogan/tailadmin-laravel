<template>
  <div>
    <div v-if="inputStyle === 'checkbox'">
      <ul class="flex flex-wrap justify-center gap-2 p-2 bg-white bg-opacity-60 border-opacity-60 border rounded-lg lg:rounded-full items-center">
        <li
            v-for="(item,index) in 6"
            :key="index"
            :class="[
            item,
            'w-6 h-6 text-white items-center flex justify-center flex-shrink-0 cursor-pointer',
            selectedWidth === item ? 'bg-green-500' : 'bg-gray-500'
            ]"
            @click="selectedWidth=item; $emit('selected-radius',item)">{{item}}
        </li>
      </ul>
    </div>
    <!--<div v-if="inputStyle === 'select'" class="flex flex-col gap-4 justify-center items-start">
      <div class="flex flex-wrap gap-4 items-center">
        <t-input-select v-model="selectedWidth" place-holder="Radius" :value="6">
          <t-input-select-item :disabled="true">
            Select a Width
          </t-input-select-item>
          <t-input-select-item
              v-for="(item,index) in 6"
              :key="index"
              :value="item"
          >
            {{ item }}
          </t-input-select-item>
        </t-input-select>
      </div>
      <div class="inline-flex gap-2">
        Width Code:
        <t-badge color="white">:width="{{ selectedWidth }}"</t-badge>
      </div>
    </div>-->
  </div>
</template>

<script>
import {defineComponent} from "vue";

import TInputSelect from "@/Components/Form/Inputs/TInputSelect.vue";
import TBadge from "@/Components/Badge/TBadge.vue";
export default defineComponent({
  name: "TComponentWidthSelector",
  components: {TBadge, TInputSelect},
  props: {
    inputStyle: {
      type: String,
      default: 'checkbox'
    }
  },
  data(){
    return {
      selectedWidth: 6,
    }
  },
  watch:{
      selectedWidth(item){
      this.$emit('selected-width',item)
    }
  }
})
</script>
