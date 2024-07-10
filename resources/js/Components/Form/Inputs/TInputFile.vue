<template>
    <div>
        <!--Multiple File Area-->
        <transition name="fade" class="mb-2">
            <div v-if="files.length>0 && multiple" :class="['flex flex-col border w-full p-4 mt-2',radiusStyle]">
                <transition-group name="fade" tag="div">
                    <div v-for="(item,index) in files"
                         :class="['flex justify-between items-center border p-2 w-full my-1',radiusStyle]"
                         :key="item.index">
                        <!--Left Area-->
                        <div class="flex flex-grow justify-start items-center">
                            <!--File Preview-->
                            <div v-if="preview" class="shrink-0">
                                <img v-if="item.type.split('/')[0] === 'image'"
                                     :class="['h-14 w-14 p-1 border object-cover',radiusStyle]"
                                     :src="urlGenerator(item)" />
                                <iconify-icon icon="ph:video" v-else-if="item.type.split('/')[0] === 'video'"
                                              :class="['w-14 h-14 p-3 border text-gray-600',radiusStyle]"/>
                                <iconify-icon icon="fluent:headphones-sound-wave-20-filled"
                                              v-else-if="item.type.split('/')[0] === 'audio'"
                                              :class="['w-14 h-14 p-3 border text-gray-600',radiusStyle]"/>
                                <div v-else
                                     :class="['relative flex justify-center items-center w-14 h-14 border text-gray-600',radiusStyle]">
                                    <iconify-icon icon="tabler:file-text" class="w-12 h-12"></iconify-icon>
                                    <span
                                        class="absolute flex pt-0.5 w-10 rounded-md items-center justify-center bg-gray-600 text-white top-5 text-sm font-semibold overflow-hidden">
                                       {{ upperCase(item.name) }}
                                   </span>
                                </div>
                            </div>
                            <!--File Name-->
                            <span class="font-semibold px-2" v-text="item.name"></span>
                        </div>
                        <!--Right Area-->
                        <div class="flex justify-between items-center gap-4">
                            <!--File Size-->
                            <span>
                                <t-badge>
                                    {{ sizeCalculator(item.size) }}
                                </t-badge>
                            </span>
                            <!--Delete Button-->
                            <t-button type="button" color="red" @click.native="deleteFile(index)">
                                <iconify-icon icon="tabler:trash" class="w-5 h-5"></iconify-icon>
                            </t-button>
                        </div>
                    </div>
                </transition-group>
            </div>
        </transition>

        <!--Preview-->
        <div
            v-if="files.length>0 && preview && !multiple"
            :class="['flex justify-center items-center my-2 overflow-hidden',radiusStyle]"
        >
            <img v-if="files[0].type.split('/')[0] === 'image'" :class="['max-h-36 w-auto p-1 border',radiusStyle]"
                 :src="urlGenerator(files[0])" />
        </div>
        <!--Input-->
        <div :class="['flex border items-center overflow-hidden',radiusStyle]">
            <input ref="input" class="hidden" type="file" :multiple="multiple" @change="updateFile" />
            <!--Single File Title & Size-->
            <div v-if="!multiple && files.length>0"
                 class="flex flex-wrap flex-grow overflow-hidden p-2 justify-between items-center">
                <!--File Title-->
                <div class="flex overflow-hidden whitespace-nowrap">
                    {{ files[0].name }}
                </div>
                <!--File Size-->
                <div class="flex overflow-hidden whitespace-nowrap">
                    Size: {{ sizeCalculator(files[0].size) }}
                </div>
            </div>
            <!--Multiple File-->
            <div v-else class="flex px-4 overflow-hidden whitespace-nowrap w-full">
                {{ files.length === 0 ? "Please select some files" : files.length + " files added" }}
            </div>
            <!--Buttons-->
            <div class="flex flex-grow-0 flex-shrink-0 items-center space-x-2">
                <button
                    v-if="files[0]"
                    class="input-clear-button"
                    type="button"
                    @click="clearFile"
                >
                    <iconify-icon
                        icon="mingcute:close-circle-line"
                        class="rounded-full w-6 h-6 hover:bg-red-500 hover:text-red-500 hover:text-white cursor-pointer"
                    />
                </button>
                <button
                    class="form-control min-h-10 px-2 border-l outline-none focus:outline-none whitespace-nowrap"
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
import TButton from "@/Components/Button/TButton.vue";
import { radiusSizeMixin } from "@/Mixins/radiusSizeMixin";
import Button from "@/Pages/Samples/Components/Button.vue";
import TBadge from "@/Components/Badge/TBadge.vue";
import TPaperClipIcon from "@/Components/Icon/TPaperClipIcon.vue";

export default {
    name: "TInputFile",
    components: { TPaperClipIcon, TBadge, Button, TButton },
    mixins: [radiusSizeMixin],
    props: {
        value: {},
        multiple: {
            type: Boolean,
            default: false
        },
        browseLabel: {
            default: "Browse"
        },
        placeholder: {
            default: "Please choose a file"
        },
        preview: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            files: []
        };
    },
    methods: {
        clearFile() {
            this.$refs.input.value = null;
            this.files = [];
            this.$emit("input", null);
        },
        deleteFile(index) {
            this.files.splice(index, 1);
            this.$refs.input.files = null;
            this.$emit("input", this.files);
        },
        updateFile() {
            this.multiple ? this.updateMultipleFile() : this.updateSingleFile();
        },
        updateSingleFile() {
            this.files = [];
            this.files.push(this.$refs.input.files[0]);
            this.$emit("input", this.files[0]);
        },
        updateMultipleFile() {
            let x = 0;
            for (x = 0; x < this.$refs.input.files.length; x++) {
                this.$refs.input.files[x].index = x;
                this.files.push(this.$refs.input.files[x]);
            }
            this.$emit("input", this.files);
        },
        sizeCalculator(value) {
            let sizes = ["Bytes", "KB", "MB", "GB", "TB"];
            if (value === 0) return "0 Byte";
            let i = parseInt(Math.floor(Math.log(value) / Math.log(1024)));
            return Math.round(value / Math.pow(1024, i), 2) + " " + sizes[i];
        },
        urlGenerator(value) {
            return URL.createObjectURL(value);
        },
        upperCase(value) {
            return value.toUpperCase().split(".")[value.toUpperCase().split(".").length - 1];
        }
    }
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: all .4s ease;
}

.fade-enter-from, .fade-leave-to {
    opacity: 0;
    transform: translateY(30px);
    max-height: 0;
}

.fade-enter-to, .fade-leave-from {
    opacity: 1;
    transform: translateX(30px);
    max-height: 100%;
}
</style>
