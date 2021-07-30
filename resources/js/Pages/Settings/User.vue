<template>
  <app-layout>
    <template #header>Users</template>
    <template #subHeader>Management of Users</template>
    <initial-vertical-menu :menu="menuList"/>
    <t-table :content="users" :header="headers" class="mt-4">
      <template #id="{props}">
        <t-dropdown align="right" size="fit">
          <template #trigger>
            <t-dots-vertical-icon class="w-6 h-6 cursor-pointer"/>
          </template>
          <!--Delete User-->
          <t-list :radius="3">
            <t-list-item class="hover:bg-red-100 hover:text-red-500 cursor-pointer"
                         @click.native="showDeleteModal(selectedUser = props.id)">
              <div class="inline-flex items-center">
                <t-trash-icon class="w-5 h-5"/>
                Delete
              </div>
            </t-list-item>
            <t-list-item class="hover:bg-blue-100 hover:text-blue-500 cursor-pointer"
                         @click.native="editUser(selectedUser = props.id)">
              <div class="inline-flex items-center">
                <t-pencil-alt-icon class="w-5 h-5"/>
                Edit
              </div>
            </t-list-item>
          </t-list>
        </t-dropdown>
      </template>
    </t-table>
    <t-modal :show="showModal" @close="showModal = $event">
      <template #header>
        User Deleting
      </template>
      <template #content>
        <span v-html="modalContent"></span>
      </template>
      <template #footer-left>
        <t-button color="light-green" @click.native="showModal = false">No, Nevermind</t-button>
      </template>
      <template #footer-right>
        <form id="delete" @submit.prevent="deleteUser">

          <t-button color="light-gray" type="submit">Yes, Delete</t-button>
        </form>
      </template>
    </t-modal>
  </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import InitialVerticalMenu from "@/Layouts/InitialVerticalMenu";
import {settingsMenuMixin} from "@/Mixins/settingsMenuMixin";
import TTable from "@/Components/Table/TTable";
import TButton from "@/Components/Button/TButton";
import TTrashIcon from "@/Components/Icon/TTrashIcon";
import TPencilAltIcon from "@/Components/Icon/TPencilAltIcon";
import TDropdown from "@/Components/Dropdown/TDropdown";
import TDotsVerticalIcon from "@/Components/Icon/TDotsVerticalIcon";
import GridSection from "@/Layouts/GridSection";
import TDropdownItem from "@/Components/Dropdown/TDropdownItem";
import TList from "@/Components/List/TList";
import TListItem from "@/Components/List/TListItem";
import TModal from "@/Components/Modal/TModal";

export default {
  name: "SettingsUser",
  components: {
    TModal,
    TListItem,
    TList,
    TDropdownItem,
    GridSection,
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
  props: ['users'],
  data() {
    return {
      showModal: false,
      modalContent: null,
      selectedUser: null,
      form: this.$inertia.form({
        id: null
      }),
      headers: [
        {key: 'name', label: 'Name', align: 'left'},
        {key: 'id', label: 'Action', align: 'center'},
      ]
    }
  },
  methods: {
    showDeleteModal() {
      let user;
      this.users.forEach(item => {
        if (item.id === this.selectedUser) {
          user = item
        }
      })
      this.showModal = true
      this.modalContent = 'You are going to delete <b>' + user.name + '</b>, Are you sure ?'
    },
    deleteUser() {
      this.form.id = this.selectedUser;
      this.form.delete(route('settings-user.destroy',this.selectedUser), {
        preserveScroll: true,
        onSuccess: () => this.showModal = false,
      })
    },
    editUser(id) {

    }
  }
}
</script>

<style scoped>

</style>