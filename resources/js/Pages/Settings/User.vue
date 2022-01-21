<template>
    <app-layout title="Users">
        <template #header>Users</template>
        <template #subHeader>Management of Users</template>
        <initial-vertical-menu :menu="menuList" class="mb-10"/>
        <t-back-end-table
            @selectedItem="selectedUser = $event.data;$event.action === 'delete' && showDeleteModal($event.data)"
            :content="users"
            :header="header"
            content-key="users"
            unique-id="id"
            search-route="settings-user.search"
        >

        </t-back-end-table>
        <t-modal v-model="showModal">
            <template #header>
                User Deleting
            </template>
            <template #content>
                <span v-html="modalContent"></span>
            </template>
            <template #footer-left>
                <t-button
                    design="light"
                    color="green"
                    @click="showModal = false"
                >
                    No, Nevermind
                </t-button>
            </template>
            <template #footer-right>
                <form id="delete" @submit.prevent="deleteUser">

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
/*Main functions*/
import {settingsMenuMixin} from "@/Mixins/settingsMenuMixin";
import {reactive, ref, toRefs, watch} from "vue";
import {useForm} from "@inertiajs/inertia-vue3";

/*Components*/
import AppLayout from "@/Layouts/AppLayout";
import InitialVerticalMenu from "@/Layouts/InitialVerticalMenu";
import TTable from "@/Components/Table/TTable";
import TButton from "@/Components/Button/TButton";
import TTrashIcon from "@/Components/Icon/TTrashIcon";
import TPencilAltIcon from "@/Components/Icon/TPencilAltIcon";
import TDropdown from "@/Components/Dropdown/TDropdown";
import TDotsVerticalIcon from "@/Components/Icon/TDotsVerticalIcon";
import TList from "@/Components/List/TList";
import TListItem from "@/Components/List/TListItem";
import TModal from "@/Components/Modal/TModal";
import TBackEndTable from "@/Components/Table/TBackEndTable";

export default {
    name: "SettingsUser",
    components: {
        TBackEndTable,
        TModal,
        TListItem,
        TList,
        TDotsVerticalIcon,
        TDropdown,
        TPencilAltIcon,
        TTrashIcon,
        TButton,
        TTable,
        InitialVerticalMenu,
        AppLayout
    },
    mixins: [settingsMenuMixin],
    props: {
        users: {
            type: Array,
            default() {
                return []
            }
        },
        roles: {
            type: Array,
            default() {
                return []
            }
        }
    },
    setup(props) {
        const {users, roles} = toRefs(props);
        const showModal = ref(false);
        const modalContent = ref(null);
        const selectedUser = ref(null);
        const form = useForm({
            id: null
        })

        watch(()=>selectedUser,()=>{

        })

        const showDeleteModal = (user)=> {
            showModal.value = true
            modalContent.value = `You are going to delete <b> ${user.name} </b>, Are you sure ?`
        }

        const deleteUser = ()=> {
            form.id = selectedUser.value;
            form.delete(route('settings-user.destroy', selectedUser.value), {
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
            showModal,
            showDeleteModal,
            deleteUser,
            modalContent,
            selectedUser,
            form,
            header,
            compareOperators,
        }
    }
}
</script>

<style scoped>

</style>
