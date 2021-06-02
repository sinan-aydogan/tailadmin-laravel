<template>
  <div class="flex flex-col w-full">
    <!--Label-->
    <label :for="labelFor" class="block font-medium text-sm text-gray-700 whitespace-normal">
            <span v-if="label">
              {{ label }}
              <span v-if="subLabel" :class="'text-'+subLabelColor+'-500 text-xs italic'">{{ subLabel }}</span>
            </span>
      <span v-else><slot #label></slot></span>
    </label>
    <!--Input Content-->
    <slot></slot>
    <!--Error-->
    <div v-show="error">
      <p class="text-sm text-red-600 mt-2 whitespace-nowrap">
        {{ error }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['label', 'subLabel', 'subLabelColor', 'labelFor', 'error'],
}
</script>
