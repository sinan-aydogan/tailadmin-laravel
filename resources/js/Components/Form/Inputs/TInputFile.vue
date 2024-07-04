<template>
    <div>
        <!--Preview-->
        <div
            v-if="files.length>0 && preview && !multiple"
            :class="['flex justify-center items-center my-2 overflow-hidden',radiusStyle]"
        >
            <img v-if="files[0].type.split('/')[0] === 'image'" :class="['max-h-36 w-auto p-1 border',radiusStyle]"
                 :src="files[0] | urlGenerator"/>
        </div>
        <!--Input-->
        <div :class="['flex border items-center overflow-hidden',radiusStyle]">
            <input ref="input" class="hidden" type="file" :multiple="multiple" @change="updateFile"/>
            <!--Single File Title & Size-->
            <div v-if="!multiple && files.length>0"
                 class="flex flex-wrap flex-grow overflow-hidden p-2 justify-between items-center">
                <!--File Title-->
                <div class="flex overflow-hidden whitespace-nowrap">
                    {{ files[0].name }}
                </div>
                <!--File Size-->
                <div class="flex overflow-hidden whitespace-nowrap">
                    Size: {{ files[0].size | sizeCalculator }}
                </div>
            </div>
            <!--Multiple File-->
            <div v-else class="flex px-4 overflow-hidden whitespace-nowrap w-full">
                {{ files.length === 0 ? 'Please select some files' : files.length + ' files added' }}
            </div>
            <!--Buttons-->
            <div class="flex flex-grow-0 flex-shrink-0 items-center space-x-2">
                <button
                    v-if="files[0]"
                    class="input-clear-button"
                    type="button"
                    @click="clearFile"
                >
                  <svg class="input-clear-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
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
        <!--Multiple File Area-->
        <transition name="fade">
            <div v-if="files.length>0 && multiple" :class="['flex flex-col border w-full p-4 mt-2',radiusStyle]">
                <transition-group name="fade" tag="div">
                    <div v-for="(item,index) in files"
                         :class="['flex flex-wrap justify-between items-center border p-2 w-full my-1',radiusStyle]"
                         :key="item.index">
                        <!--Left Area-->
                        <div class="flex justify-start items-center gap-4">
                            <!--File Preview-->
                            <div v-if="preview">
                                <img v-if="item.type.split('/')[0] === 'image'" :class="['h-14 w-14 p-1 border object-cover',radiusStyle]" :src="item | urlGenerator"/>
                                <t-video-icon v-else-if="item.type.split('/')[0] === 'video'" :class="['w-14 h-14 p-3 border text-gray-600',radiusStyle]"/>
                                <t-audio-icon v-else-if="item.type.split('/')[0] === 'audio'" :class="['w-14 h-14 p-3 border text-gray-600',radiusStyle]"/>
                                <div v-else :class="['relative flex justify-center items-center w-14 h-14 border text-gray-600',radiusStyle]">

                                    <t-document-icon class="w-12 h-12"/>
                                    <span class="absolute flex pt-0.5 w-10 rounded-md items-center justify-center bg-gray-600 text-white top-5 text-sm font-semibold overflow-hidden">
                                       {{ item.name | upperCase}}
                                   </span>
                                </div>
                            </div>
                            <!--File Name-->
                            <span class="font-semibold">
                            {{ item.name }}
                        </span>
                        </div>
                        <!--Right Area-->
                        <div class="flex justify-between items-center gap-4">
                            <!--File Size-->
                            <span>
                                <t-badge>
                                    {{ item.size | sizeCalculator }}
                                </t-badge>
                            </span>
                            <!--Delete Button-->
                            <t-button type="button" color="red" @click.native="deleteFile(index)">
                                <t-trash-icon class="w-5 h-5"/>
                            </t-button>
                        </div>
                    </div>
                </transition-group>
            </div>
        </transition>

    </div>
</template>

<script>
import TButton from "@/Components/Button/TButton.vue";
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";
import Button from "@/Pages/Samples/Components/Button.vue";
import TXIcon from "@/Components/Icon/TXIcon.vue";
import TTrashIcon from "@/Components/Icon/TTrashIcon.vue";
import TBadge from "@/Components/Badge/TBadge.vue";
import TPaperClipIcon from "@/Components/Icon/TPaperClipIcon.vue";
import TAudioIcon from "@/Components/Icon/TAudioIcon.vue";
import TVideoIcon from "@/Components/Icon/TVideoIcon.vue";
import TDocumentIcon from "@/Components/Icon/TDocumentIcon.vue";

export default {
    name: "TInputFile",
    components: {TDocumentIcon, TVideoIcon, TAudioIcon, TPaperClipIcon, TBadge, TTrashIcon, TXIcon, Button, TButton},
    mixins: [radiusSizeMixin],
    props: {
        value: {},
        multiple: {
            type: Boolean,
            default: false
        },
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
            files: [],
        }
    },
    methods: {
        clearFile() {
            this.$refs.input.value = null
            this.files = []
            this.$emit('input', null)
        },
        deleteFile(index) {
            this.files.splice(index, 1)
            this.$refs.input.files = null
            this.$emit('input', this.files)
        },
        updateFile() {
            let x = 0;
            for (x = 0; x < this.$refs.input.files.length; x++) {
                this.$refs.input.files[x].index = x
                this.files.push(this.$refs.input.files[x])
            }
            this.$emit('input', this.files)
        }
    },
    filters: {
        sizeCalculator(value) {
            let sizes = ["Bytes", "KB", "MB", "GB", "TB"];
            if (value === 0) return "0 Byte";
            let i = parseInt(Math.floor(Math.log(value) / Math.log(1024)));
            return Math.round(value / Math.pow(1024, i), 2) + " " + sizes[i];
        },
        urlGenerator(value) {
            return URL.createObjectURL(value)
        },
        upperCase(value){
            return value.toUpperCase().split('.')[value.toUpperCase().split('.').length-1]
        }
    }
}
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
