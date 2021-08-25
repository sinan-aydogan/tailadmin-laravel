<template>
  <div>
    <!--Preview-->
    <div
        v-if="file.url && preview"
        :class="['flex justify-center items-center my-2 overflow-hidden',radiusStyle]"
    >
      <img :class="['max-h-36 w-auto p-1 border',radiusStyle]" :src="file.url"/>
    </div>
    <!--Input-->
    <div :class="['flex h-10 border justify-between items-center overflow-hidden',radiusStyle]">
      <input ref="input" class="hidden" type="file" @change="updateFile"/>
      <!--File Title-->
      <div :title="file.title" class="flex px-2 overflow-hidden whitespace-nowrap w-full">
        {{ file.title }}
      </div>
      <!--File Size-->
      <div class="flex flex-shrink-0">
        {{ file.size && 'Size: ' + file.size }}
      </div>
      <!--Buttons-->
      <div class="flex justify-end items-center">
        <button
            v-if="file.title"
            class="file-input-close-button"
            type="button"
            @click="clearFile"
        >
          <t-x-icon class="file-input-close-icon"/>
        </button>
        <button
            class="form-control h-10 px-2 border-l outline-none focus:outline-none whitespace-nowrap"
            type="button"
            @click="$refs.input.click()"
        >
          {{ browseLabel }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import TButton from "@/Components/Button/TButton";
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";
import Button from "@/Pages/Samples/Components/Button";
import TXIcon from "@/Components/Icon/TXIcon";

export default {
  name: "TInputFile",
  components: {TXIcon, Button, TButton},
  mixins: [radiusSizeMixin],
  props: {
    value: {},
    browseLabel: {
      default: 'Browse'
    },
    placeholder: {
      default: 'Please choose a file'
    },
    preview: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      file: {
        title: this.placeholder,
        size: null,
        url: null
      },
    }
  },
  methods: {
    clearFile() {
      this.$refs.input.value = null
      this.file.title = null
      this.file.size = null
      this.file.url = null
      this.$emit('input', null)
    },
    updateFile() {
      this.file.title = this.$refs.input.files[0].name
      this.$emit('input', this.$refs.input.files[0])
      let size = this.$refs.input.files[0].size
      let sizes = ["Bytes", "KB", "MB", "GB", "TB"];
      if (size === 0) return "0 Byte";
      let i = parseInt(Math.floor(Math.log(size) / Math.log(1024)));
      this.file.size = Math.round(size / Math.pow(1024, i), 2) + " " + sizes[i];
      this.file.url = URL.createObjectURL(this.$refs.input.files[0])
    }
  }
}
</script>

<style scoped>

</style>
