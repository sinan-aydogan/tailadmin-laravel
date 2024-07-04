<template>
    <app-layout>
        <template #header>Permissions</template>
        <template #subHeader>Management of Permissions</template>
        <initial-vertical-menu :menu="menuList" class="mb-10"/>
        <div v-if="permissionGroups.length>0" class="grid grid-cols-4 grid-flow-row gap-4">
            <template v-for="group in permissionGroups">
                <div class="flex border border-slate-300 bg-white dark:bg-slate-800 dark:text-slate-100 rounded flex-col select-none">
                    <div class="flex flex-col p-4">
                        <span v-text="group.name" class="font-semibold"></span>
                        <span v-text="group.description" class="text-sm"></span>
                    </div>
                    <div class="flex justify-end text-slate-700 overflow-hidden">
                        <div class="group flex space-x-1 font-semibold items-center cursor-pointer bg-slate-300 hover:bg-emerald-200 active:bg-emerald-500 p-1 rounded-l-full mb-2 -mr-1 duration-100">
                            <icon icon="plus-circle"/>
                            <span class="text-2xs opacity-0 transform w-0 group-hover:block group-hover:w-14 group-hover:opacity-100 transition-all duration-300">Permission</span>
                        </div>
                    </div>
                </div>
            </template>
            <div class="flex space-y-2 justify-center items-center border border-slate-400 bg-emerald-200 hover:bg-emerald-300 hover:border-emerald-300 transform active:scale-95 duration-300 select-none dark:bg-slate-800 text-emerald-800 dark:text-slate-100 p-2 rounded flex-col cursor-pointer">
                <icon icon="plus-circle" size="2x" class="transform hover:scale-125 duration-300"/>
                <span class="text-sm">Add new group</span>
            </div>
        </div>

        <!--Empty Group Message-->
        <div v-else class="flex justify-between w-full p-4 rounded bg-orange-200 dark:bg-slate-800 text-slate-700 dark:text-slate-100 items-center text-xl">
            <span>
                There is any role groups, please add a role group
            </span>
            <t-button color="green" class="text-sm">
                Add New Group
            </t-button>
        </div>

        <!--Modal-->
        <t-modal v-model="showModal.status">
            <template #header>
                <span v-text="showModal.title"></span>
            </template>
            <template #content>
                <span v-html="modalContent"></span>
            </template>
            <template #footer-left>
                <t-button
                    design="light"
                    color="green"
                    @click="showModal.status = false"
                >
                    No, Nevermind
                </t-button>
            </template>
            <template #footer-right>
                <form id="delete" @submit.prevent="showModal.submit">

                    <t-button
                        design="light"
                        color="gray"
                        type="submit">
                        Yes, Delete
                    </t-button>
                </form>
            </template>
        </t-modal>
    </app-layout>

</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";
import InitialVerticalMenu from "@/Layouts/InitialVerticalMenu.vue";
import {settingsMenuMixin} from "@/Mixins/settingsMenuMixin";
import {reactive, ref} from "vue";
import {useForm} from "@inertiajs/vue3";
import TBackEndTable from "@/Components/Table/TBackEndTable.vue";
import TModal from "@/Components/Modal/TModal.vue";
import TButton from "@/Components/Button/TButton.vue";
import TAlert from "@/Components/Alert/TAlert.vue";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons/faPlusCircle"
import {library} from "@fortawesome/fontawesome-svg-core";
library.add(faPlusCircle)

export default {
    name: "Index",
    components: {TAlert, InitialVerticalMenu, AppLayout, TBackEndTable, TModal, TButton},
    mixins: [settingsMenuMixin],
    props: {
        permissions: {
            type: Object,
            default: () => {
            }
        },
        permissionGroups: {
            type: Object,
            default: () => {
            }
        }
    },
    setup() {
        const showModal = ref({
            type: null,
            status: false
        });
        const modalContent = ref(null);
        const selectedPermission = ref(null);
        const form = useForm({
            id: null
        })

        const showDeleteModal = (role) => {
            showModal.value.status = true
            showModal.value.title = 'User Deleting'
            showModal.value.submit = deletePermission
            modalContent.value = `You are going to delete <b> ${role.name} </b>, Are you sure ?`
        }

        const deletePermission = () => {
            form.id = selectedPermission.value;
            form.delete(route('settings-permission.destroy', selectedPermission.value), {
                preserveScroll: true,
                onSuccess: () => showModal.value = false,
            })
        }

        const compareOperators = reactive([
            {key: "contains", label: "contains"},
            {key: "notContains", label: "not contains"},
            {key: "starts", label: "starts"},
            {key: "ends", label: "ends"}
        ]);

        const header = reactive([
            {
                label: "Name",
                key: "name",
                align: "left",
                status: true,
                sortable: true,
                simpleSearchable: true,
                advancedSearchable: true,
                advancedSearchInputType: "text",
                compareOperators: compareOperators
            }
        ])

        return {
            deletePermission,
            showDeleteModal,
            modalContent,
            selectedPermission,
            header,
            showModal
        }
    }
}
</script>

<style scoped>

</style>
