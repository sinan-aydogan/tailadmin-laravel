<template>
  <app-layout>
    <!--Header-->
    <template #header>
      Tables
    </template>
    <!--Subheader-->
    <template #subHeader>
      Customizable tables
    </template>
    <!--Content-->
    <template #default>
      <t-table
        :content="users"
        :header="tableHeader"
        :features="tableFeatures"
      >
        <template #search>
          <grid-section :col="12" :gap="2">
            <!--Name-->
            <t-input-group class="col-span-12 md:col-span-6" label="Name">
              <t-input-text id="name" />
            </t-input-group>
            <!--Email-->
            <t-input-group class="col-span-12 md:col-span-6" label="Email">
              <t-input-text id="email" />
            </t-input-group>
          </grid-section>
        </template>
        <template #right>
          <t-button :link="route('form-structure')" :radius="8">
            <t-user-circle-icon class="w-6 h-6" />
            Add New User
          </t-button>
        </template>
        <template #photo="{props}">
          <t-avatar :link="props.photo" :radius="8" :size="3" />
        </template>
      </t-table>
    </template>
  </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import TTable from "@/Components/Table/TTable";
import TAvatar from "@/Components/Avatar/TAvatar";
import SshPre from "simple-syntax-highlighter";
import "simple-syntax-highlighter/dist/sshpre.css";
import TInputGroup from "@/Components/Form/TInputGroup";
import TInputText from "@/Components/Form/Inputs/TInputText";
import GridSection from "@/Layouts/GridSection";
import TButton from "@/Components/Button/TButton";
import TUserCircleIcon from "@/Components/Icon/TUserCircleIcon";
import { reactive } from "vue";

export default {
  name: "Table",
  components: {
    TUserCircleIcon, TButton, GridSection, TInputText, TInputGroup, AppLayout, TTable, TAvatar, SshPre
  },
  props: ["users"],
  setup() {
    /*Table States*/
    const tableHeader = reactive([
      { label: "Avatar", key: "photo", align: "center", width: "5", status: true },
      { label: "Name", key: "name", align: "left", simpleSearchable:true, status: true, sortable: true },
      { label: "Email", key: "email", align: "left", status: true, sortable: true }
    ]);
    const tableFeatures = reactive({
      table: {
        design: "elegant",
        seperatedRow: true,
        rowBorder: true,
        zebraRow: true,
        radius: 3,
        perPage: 5
      },
      pagination: {
        status: true,
        radius: 3,
        range: 5,
        jump: true,
      },
      actions: {
        status: true,
        headerText: "Aksiyonlar"
      },
      deleteModal: {
        headerText: "Item's deleting",
        contentText: "You are going to delete <br><b></b><br>Are you sure ?",
        icon: "warning"
      }
    });

    return { tableHeader, tableFeatures };
  }
};
</script>
