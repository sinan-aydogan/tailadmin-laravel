<template>
  <div class="relative">
    <span v-if="clearButton && value" class="absolute flex -top-3 -right-3 border w-6 h-6 items-center justify-center rounded-lg bg-white hover:bg-red-500 hover:text-white cursor-pointer" @click="value = null">x</span>
    <textarea class="form-input h-auto w-full" :rows="rows" :id="id" :placeholder="placeholder" :value="value" @input="$emit('input', $event.target.value)" ref="input"></textarea>
    <span class="absolute bg-white bg-opacity-70 bottom-3 right-2 float-right text-xs border px-1 py-0.5 rounded-full min-w-6 text-center bg-white-500" v-if="counter && value">{{value.length}}</span>
  </div>
</template>

<script>
export default {
  name: "InputTextArea",
  props: {
    value: {
      type: String
    },
    id: {
      type: String
    },
    rows: {
      type: Number,
      default: 3
    },
    placeholder: {
      type: String
    },
    clearButton: {
      type: Boolean
    },
    counter: {
      type: Boolean
    }
  }
}
</script>

<style scoped>

</style>