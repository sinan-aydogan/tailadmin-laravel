<template>
    <div class="relative select-none">
        <!--Trigger-->
        <t-dots-vertical-icon class="w-6 h-6 cursor-pointer" @click="showPanel = !showPanel"/>
        <transition name="fade">
            <div v-if="showPanel" class="absolute -top-1 -left-24 -ml-2 overflow-hidden">
                <ul class="flex flex-row gap-2 p-1 border border-gray-500 bg-gray-100 bg-opacity-90 rounded-md">
                    <!--Show-->
                    <li class="border-r border-gray-500 pr-2 cursor-pointer" @click="clickedButton('show')">
                        <t-eye-icon class="w-5 h-5 hover:text-blue-500"/>
                    </li>
                    <!--Edit-->
                    <li class="border-r border-gray-500 pr-2 cursor-pointer" @click="clickedButton('edit')">
                        <t-pencil-alt-icon class="w-5 h-5 hover:text-yellow-600"/>
                    </li>
                    <!--Delete-->
                    <li class=" cursor-pointer" @click="clickedButton('delete')">
                        <t-trash-icon class="w-5 h-5 hover:text-red-600"/>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
import {defineComponent} from "vue";
import TDotsVerticalIcon from "@/Components/Icon/TDotsVerticalIcon";
import TEyeIcon from "@/Components/Icon/TEyeIcon";
import TPencilAltIcon from "@/Components/Icon/TPencilAltIcon";
import TTrashIcon from "@/Components/Icon/TTrashIcon";

export default defineComponent({
    name: "TTableActionDropdown",
    components: {TTrashIcon, TPencilAltIcon, TEyeIcon, TDotsVerticalIcon},
    props: {
        showAction: {
            type: Object,
            default(){
                return {}
            }
        },
        editAction: {
            type: Object,
            default(){
                return {}
            }
        },
        deleteAction: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    emits: ['action'],
    data(){
        return{
            showPanel: false
        }
    },
    methods: {
        clickedButton(button){
                this.$emit('action', button)
        }
    }
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: all .4s ease;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}

.fade-enter-to, .fade-leave {
    opacity: 1;
}
</style>
