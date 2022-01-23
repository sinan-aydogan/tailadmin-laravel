<template>
  <app-layout>
    <template #header>Roles</template>
    <template #subHeader>Management of Roles</template>
      <initial-vertical-menu :menu="menuList" class="mb-10"/>
      <t-back-end-table
          @selectedItem="selectedPermission = $event.data;$event.action === 'delete' && showDeleteModal($event.data)"
          :content="Roles"
          :header="header"
          content-key="roles"
          unique-id="id"
          search-route="settings-role.search"
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
              <form id="delete" @submit.prevent="deletePermission">

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
import AppLayout from "@/Layouts/AppLayout";
import InitialVerticalMenu from "@/Layouts/InitialVerticalMenu";
import {settingsMenuMixin} from "@/Mixins/settingsMenuMixin";
import {reactive, ref} from "vue";
import {useForm} from "@inertiajs/inertia-vue3";
import TBackEndTable from "@/Components/Table/TBackEndTable";
import TModal from "@/Components/Modal/TModal";
import TButton from "@/Components/Button/TButton";

export default {
  name: "Index",
  components: {InitialVerticalMenu, AppLayout, TBackEndTable,TModal,TButton},
  mixins: [settingsMenuMixin],
    props: {
        Roles: {
            type: Object,
            default: ()=>{}
        }
    },
    setup() {
        const showModal = ref(false);
        const modalContent = ref(null);
        const selectedPermission = ref(null);
        const form = useForm({
            id: null
        })

        const showDeleteModal = (role)=> {
            showModal.value = true
            modalContent.value = `You are going to delete <b> ${role.name} </b>, Are you sure ?`
        }

        const deletePermission = ()=> {
            form.id = selectedPermission.value;
            form.delete(route('settings-role.destroy', selectedPermission.value), {
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
