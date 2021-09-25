<template>
  <div>
    <div v-if="inputStyle === 'checkbox'">
      <ul class="flex flex-wrap justify-center space-x-2 p-2 bg-white border border-gray-300 bg-opacity-60 border-opacity-60 rounded-lg laptop:rounded-full items-center">
        <li
            v-for="(item,itemKey,index) in colors"
            :key="index"
            :class="[
                    'w-5 h-5 rounded-full items-center flex justify-center flex-shrink-0 cursor-pointer',
                    item.style
                ]"
            @click="selectedColor=itemKey"
        >
          <t-check-icon
              v-if="selectedColor===itemKey"
              :class="[
                  'w-5 h-5',
                  itemKey === 'solid-white' || itemKey.includes('light') ? 'text-gray-600' : 'text-white'
                  ]"
          />
        </li>
      </ul>
    </div>
    <!--<div v-if="inputStyle === 'select'" class="flex flex-col gap-4 justify-center items-start">
      <div class="flex flex-wrap gap-4 items-center">
        &lt;!&ndash;Color Type&ndash;&gt;
        <t-input-select
            v-model="selectedType"
            place-holder="Color Type"
            :options="colorTypes"
            options-label-key="label"
            options-value-key="id"
            :clear-button="true"
        />
        &lt;!&ndash;Solid Colors&ndash;&gt;
        <t-input-select
            v-show="selectedType === 'solid'"
            v-model="selectedSolidColors"
            place-holder="Solid Colors"
            :options="mainColors"
            options-value-key=""
        >
          <t-input-select-item :disabled="true">Select a Color</t-input-select-item>
          <t-input-select-item v-for="(item,index) in mainColors" :key="index" :value="item">Solid: {{ item }}
          </t-input-select-item>
        </t-input-select>
        &lt;!&ndash;Light Colors&ndash;&gt;
        <t-input-select v-show="selectedType === 'light'" v-model="selectedLightColors" place-holder="Light Colors">
          <t-input-select-item :disabled="true">Select a Color</t-input-select-item>
          <t-input-select-item v-for="(item,index) in mainColors" :key="index" :value="item">Light: {{ item }}
          </t-input-select-item>
        </t-input-select>
        &lt;!&ndash;Gradient First Color&ndash;&gt;
        <t-input-select v-show="selectedType === 'gradient'" v-model="selectedGradientFirstColors"
                        place-holder="First Gradient Colors">
          <t-input-select-item :disabled="true">Select a Color</t-input-select-item>
          <t-input-select-item v-for="(item,index) in mainColors" :key="index" :value="item">First: {{ item }}
          </t-input-select-item>
        </t-input-select>
        &lt;!&ndash;Gradient Second Color&ndash;&gt;
        <t-input-select v-show="selectedType === 'gradient'" v-model="selectedGradientSecondColors"
                        place-holder="Second Gradient Colors">
          <t-input-select-item :disabled="true">Select a Color</t-input-select-item>
          <t-input-select-item v-for="(item,index) in mainColors" :key="index" :value="item">Second: {{ item }}
          </t-input-select-item>
        </t-input-select>
      </div>
      <div class="inline-flex gap-2">
        Color Code:
        <t-badge color="white">color="{{ calculatedColor }}"</t-badge>
      </div>
    </div>-->
  </div>
</template>

<script>
import TCheckIcon from "@/Components/Icon/TCheckIcon";
import TInputSelect from "@/Components/Form/Inputs/TInputSelect";
import TBadge from "@/Components/Badge/TBadge";

export default {
  name: "TComponentColorSelector",
  components: {TBadge, TInputSelect, TCheckIcon},
  props: {
    inputStyle: {
      type: String,
      default: 'checkbox'
    }
  },
  data() {
    return {
      colors: {
        'solid-red': {
          style: 'bg-red-500'
        },
        'solid-blue': {
          style: 'bg-blue-500'
        },
        'solid-green': {
          style: 'bg-green-500'
        },
        'solid-yellow': {
          style: 'bg-yellow-500'
        },
        'solid-indigo': {
          style: 'bg-indigo-500'
        },
        'solid-purple': {
          style: 'bg-purple-500'
        },
        'solid-pink': {
          style: 'bg-pink-500'
        },
        'solid-gray': {
          style: 'bg-gray-500'
        },
        'solid-white': {
          style: 'bg-white border border-gray-200'
        },
        'solid-black': {
          style: 'bg-black'
        },
        'light-red': {
          style: 'bg-red-200 border border-red-500'
        },
        'light-blue': {
          style: 'bg-blue-200 border border-blue-500'
        },
        'light-green': {
          style: 'bg-green-200 border border-green-500'
        },
        'light-yellow': {
          style: 'bg-yellow-200 border border-yellow-500'
        },
        'light-indigo': {
          style: 'bg-indigo-200 border border-indigo-500'
        },
        'light-pink': {
          style: 'bg-pink-200 border border-pink-500'
        },
        'light-purple': {
          style: 'bg-purple-200 border border-purple-500'
        },
        'light-gray': {
          style: 'bg-gray-200 border border-gray-500'
        }
      },
      mainColors: [
        'Red',
        'Blue',
        'Green',
        'Yellow',
        'Indigo',
        'Pink',
        'Purple',
        'Gray',
        'Black',
        'White'
      ],
      selectedColor: this.calculatedColor,
      selectedSolidColors: '',
      selectedLightColors: '',
      selectedGradientFirstColors: 'purple',
      selectedGradientSecondColors: 'red',
      selectedType: ''
    }
  },
  computed: {
    calculatedColor() {
      if (this.selectedType === 'solid') {
        return 'solid-' + this.selectedSolidColors.toLowerCase()
      } else if (this.selectedType === 'light') {
        return 'light-' + this.selectedLightColors.toLowerCase()
      } else {
        return 'gradient-' + this.selectedGradientFirstColors.toLowerCase() + '-to-' + this.selectedGradientSecondColors.toLowerCase()
      }
    }
  },
  watch: {
    calculatedColor() {
      this.$emit('selected-color', this.calculatedColor)
    },
    selectedColor() {
      this.$emit('selected-color', this.selectedColor)
    }
  }
}
</script>
