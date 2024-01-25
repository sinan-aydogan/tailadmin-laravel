<template>
  <div
    class="flex flex-wrap justify-center p-2 bg-white border border-gray-300 bg-opacity-60 border-opacity-60 rounded-lg lg:rounded-full">
    <div class="flex flex-wrap justify-center items-center space-x-2">
      <div v-if="selectData !== null" class="flex flex-wrap justify-center items-center space-x-2 text-sm">
        <template v-for="item in selectData">
          <t-input-select
            :options="item.options"
            v-model="modelData[item.key]"
            options-value-key="key"
            options-label-key="label"
            :place-holder="item.label"
            :radius="8"
            :disabled="false"
          />
        </template>
      </div>
      <ul class="grid grid-cols-5 my-2 md:grid-cols-10 gap-2 place-items-center items-center">
        <li
          v-for="(item,itemKey,index) in colorOptions"
          :key="index"
          :class="[
                    'w-5 h-5 rounded-full items-center flex justify-center flex-shrink-0 cursor-pointer',
                    item.style
                ]"
          @click="modelData.color = itemKey"
        >
          <t-check-icon
            v-if="modelValue['color']===itemKey"
            :class="[
                  'w-5 h-5',
                  itemKey === 'white' ? 'text-gray-600' : 'text-white'
                  ]"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, toRefs, watch } from "vue";

import TCheckIcon from "@/Components/Icon/TCheckIcon";
import TInputSelect from "@/Components/Form/Inputs/TInputSelect";

export default defineComponent({
  name: "TComponentStyleSelector",
  components: { TInputSelect, TCheckIcon },
  props: {
    selectData: {
      type: Array,
      default: null
    },
    modelValue: {
      type: Object,
      default(){
        return { color: null }
      }
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    /*Definitions*/
    const { modelValue, selectData } = toRefs(props);
    const colorOptions = reactive({
      "red": {
        style: "bg-red-500",
        name: "Red"
      },
      "blue": {
        style: "bg-blue-500",
        name: "Blue"
      },
      "green": {
        style: "bg-green-500",
        name: "Green"
      },
      "yellow": {
        style: "bg-yellow-500",
        name: "Yellow"
      },
      "indigo": {
        style: "bg-indigo-500",
        name: "Indigo"
      },
      "purple": {
        style: "bg-purple-500",
        name: "Purple"
      },
      "pink": {
        style: "bg-pink-500",
        name: "Pink"
      },
      "gray": {
        style: "bg-gray-500",
        name: "Gray"
      },
      "white": {
        style: "bg-white border border-gray-200",
        name: "White"
      },
      "black": {
        style: "bg-black",
        name: "Black"
      }
    });
    const modelData = reactive(modelValue)

    watch(modelData,
      ()=>{
        emit("update:modelValue", modelData);
      })

    return {
      colorOptions,
      modelData
    };
  }
});
</script>
