<template>
    <div :class="['flex border justify-between items-center',radiusStyle]">
        <input ref="input" class="hidden" type="file" @change="updateFile"/>
        <div class="flex px-2 overflow-hidden" :title="file.title">
                {{ file.title }}
        </div>
        <div class="flex flex-shrink-0">
            {{ file.size && '-' + file.size }}
        </div>
        <div class="flex justify-end items-center">
            <button class="file-input-close-button" type="button" @click="clearFile">
                <t-x-icon class="file-input-close-icon"/>
            </button>
            <button
                class="form-control h-10 px-2 border-l outline-none focus:outline-none"
                type="button"
                @click="$refs.input.click()"
            >
                {{ browseLabel }}
            </button>
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
        value:{},
        browseLabel: {
            default: 'Browse'
        },
        placeholder: {
            default: 'Please choose a file'
        }
    },
    data() {
        return {
            file: {
                title: this.placeholder,
                size: null
            },
        }
    },
    methods: {
        clearFile() {
            this.$refs.input.value = null
            this.file.title = null
            this.file.size = null
            this.$emit('input', null)
        },
        updateFile() {
            this.file.title = this.$refs.input.files[0].name
            this.$emit('input', this.$refs.input.value)
            let size = this.$refs.input.files[0].size
            let sizes = ["Bytes", "KB", "MB", "GB", "TB"];
            if (size === 0) return "0 Byte";
            let i = parseInt(Math.floor(Math.log(size) / Math.log(1024)));
            this.file.size = Math.round(size / Math.pow(1024, i), 2) + " " + sizes[i];
        }
    }
}
</script>

<style scoped>

</style>
