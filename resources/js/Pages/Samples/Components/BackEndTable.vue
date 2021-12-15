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
      <!--<t-component-style-selector
        v-model="selectedData"
        :select-data="selectData"
        class="mb-4"
      />-->
      <t-back-end-table
        :content="demoContent"
        content-key="demoContent"
        :header="header"
        :features="features"
      >
        <template #top-right>
          <t-button color="green" design="light" border>+ Add New</t-button>
        </template>
        <template #type="{props}">
          {{ filterType.find(t => t.key === Number(props.type)).label }}
        </template>
        <template #status="{props}">
          <t-badge :color="filterStatus.find(t=>t.key === props.status).color">
            {{ filterStatus.find(t => t.key === props.status).label }}
          </t-badge>
        </template>
      </t-back-end-table>
    </template>
  </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import "simple-syntax-highlighter/dist/sshpre.css";
import TComponentStyleSelector from "@/Components/Misc/TComponentStyleSelector";
import { reactive, defineComponent, computed } from "vue";
import TBackEndTable from "@/Components/Table/TBackEndTable";
import TBadge from "@/Components/Badge/TBadge";
import TButton from "@/Components/Button/TButton";

export default defineComponent({
  name: "Table",
  components: {
    TButton,
    TBadge,
    TBackEndTable,
    TComponentStyleSelector, AppLayout
  },
  props: {
    demoContent: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
    const filterStatus = reactive([
      { key: 1, label: "Active", color: "green" },
      { key: 0, label: "Passive", color: "red" }
    ]);
    const filterType = reactive([
      { key: 0, label: "Printer" },
      { key: 1, label: "Pencil" },
      { key: 2, label: "Clipper" }
    ]);
    const compareOperators = reactive([
      { key: "contains", label: "contains" },
      { key: "notContains", label: "not contains" },
      { key: "starts", label: "starts" },
      { key: "ends", label: "ends" }
    ]);
    const priceCompareOperators = reactive([
      { key: "=", label: "=" },
      { key: ">", label: ">" },
      { key: ">=", label: ">=" },
      { key: "<", label: "<" },
      { key: "<=", label: "<=" }
    ]);

    const selectData = reactive([
      {
        label: "Dark Mode",
        key: "darkMode",
        options: [
          { key: true, label: "Dark Mode" },
          { key: false, label: "Light Mode" }
        ]
      },
      {
        label: "Design",
        key: "design",
        options: [
          { key: "elegant", label: "Elegant" }
        ]
      },
      {
        label: "Radius",
        key: "radius",
        options: [
          { key: 0, label: "Without radius" },
          { key: 3, label: "Small" },
          { key: 5, label: "Large" }
        ]
      }
    ]);
    const selectedData = reactive({
      darkMode: false,
      design: "elegant",
      radius: 3
    });
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
      },
      {
        label: "Type",
        key: "type",
        align: "left",
        status: true,
        simpleSearchable: true,
        advancedSearchable: true,
        advancedSearchSelectInputSource: filterType,
        advancedSearchInputType: "select"
      },
      {
        label: "Price",
        key: "price",
        align: "right",
        status: true,
        sortable: true,
        simpleSearchable: true,
        advancedSearchable: true,
        advancedSearchInputType: "text",
      },
      {
        label: "Status",
        key: "status",
        align: "center",
        status: true,
        sortable: true,
        simpleSearchable: true,
        advancedSearchable: true,
        advancedSearchSelectInputSource: filterStatus,
        advancedSearchInputType: "select",
        compareOperators: compareOperators
      }
    ]);
    const features = computed(() => {
      return {
        table: {
          darkMode: selectedData.darkMode,
          design: selectedData.design,
          borderRow: true,
          zebraRow: false,
          hoverRow: true,
          radius: selectedData.radius
        },
        pagination: {
          status: true,
          darkMode: selectedData.darkMode,
          radius: selectedData.radius,
          range: 5,
          jump: true,
        },
        actions: {
          status: true,
          headerText: "Aksiyonlar"
        },
        deleteModal: {
          headerText: "Item's deleting",
          contentText: "You are going to delete <br><b>{$name}</b><br>Are you sure ?",
          icon: "warning"
        }
      };
    });

    return { selectData, selectedData, header, features, filterType, filterStatus };
  }
});
</script>
