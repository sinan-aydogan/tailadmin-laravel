<template>
  <app-layout>
    <template #header>
      Tabs
    </template>
    <template #subHeader>
      Multi content in single area
    </template>
    <template #default>
      <!-- Color Selector -->
      <t-component-style-selector :select-data="selectData" v-model="selectedData" class="mb-4" />
      <grid-section :col-tablet="2">
        <!--Style 1-->
        <t-tab :data="tab1content" v-model="tab1" :color="selectedData.color" :design="selectedData.design"
               :colored-text="selectedData.coloredText">
          <template #icon="{props}">
            <svg v-if="props.id===2" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            <svg v-if="props.id===3" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </template>
          <template #content="{props}">
            <span v-if="props.id===1">
              Laravel is a web application framework with expressive, elegant syntax. <br/><h4 class='mt-1 font-semibold'>Rich Html Content</h4><p>Laravel attempts to take the pain out of development by easing common tasks used in most web projects. </p>
            </span>
          </template>
        </t-tab>
        <!--Style 2-->
        <t-tab :data="tab2content" v-model="tab2" :color="selectedData.color" :design="selectedData.design"
               :colored-text="selectedData.coloredText" dark-mode
               :radius="5" />
      </grid-section>
      <!--Sample Codes-->
      <ssh-pre :copy-button="true" label="Code" language="html">{{ sampleCode.html }}</ssh-pre>
      <ssh-pre :copy-button="true" label="JS" language="js">{{ sampleCode.js }}</ssh-pre>
      <!--Variables Table-->
      <t-table :content="sampleCode.table.content"
               :header="sampleCode.table.header"
               :searchable="['variable','details']"
               class="mt-5"
               color="solid-blue"
      >
        <template #details="{props}">
              <span class="whitespace-nowrap md:whitespace-normal" v-html="props.details">
              </span>
        </template>
      </t-table>
    </template>
  </app-layout>
</template>

<script>
/*Layout*/
import AppLayout from "@/Layouts/AppLayout";
/*Component*/
import GridSection from "@/Layouts/GridSection";
import TTab from "@/Components/Tab/TTab";
import TTable from "@/Components/Table/TTable";
/*Codehighlighter*/
import SshPre from "simple-syntax-highlighter";
import "simple-syntax-highlighter/dist/sshpre.css";
import TComponentStyleSelector from "@/Components/Misc/TComponentStyleSelector";

export default {
  name: "Tab",
  components: { TComponentStyleSelector, AppLayout, GridSection, SshPre, TTab, TTable },
  data() {
    return {
      tab1: 1,
      tab2: 1,
      tab1content: [
        {
          id: 1,
          title: "Laravel",
          content: ""
        },
        { id: 2, title: "Vuejs", content: "The Progressive JavaScript Framework." },
        {
          id: 3,
          title: "",
          content: "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup."
        }
      ],
      tab2content: [
        {
          id: 1,
          title: "Tailadmin",
          content: "It's a dashboard theme/UI-Starter Kit with Laravel, Inertia and Vue (JetStream)."
        },
        { id: 2, title: "Laraquality", content: "Online quality assurance(QA) management system" },
        { id: 3, title: "TailCoin", content: "Simple crypto wallet track system" }
      ],
      selectedData: {
        color: "blue",
        design: "filled",
        coloredText: false
      },
      selectData: [
        {
          label: "Design",
          key: "design",
          options: [
            { key: "filled", label: "Filled" },
            { key: "underline", label: "Underline" }
          ]
        },
        {
          label: "Colored Text",
          key: "coloredText",
          options: [
            { key: false, label: "Simple Text" },
            { key: true, label: "Colored Text" }
          ]
        }
      ],
      sampleCode: {
        html:
          "<t-tab color=\"solid-red\" :radius=\"3\" :tab-style=\"2\" :active=\"2\">\n" +
          "    <!--Tab 1-->\n" +
          "    <t-tab-item title=\"Tab1\">\n" +
          "        Content 1\n" +
          "    </t-tab-item>\n" +
          "    <!--Tab 2-->\n" +
          "    <t-tab-item title=\"Tab2\">\n" +
          "        Content 2\n" +
          "    </t-tab-item>\n" +
          "</t-tab>",
        js:
          "import TTab from \"@/Components/Tab/TTab\";\n" +
          "import TTabItem from \"@/Components/Tab/TTabItem\";\n" +
          "\n" +
          "export default {\n" +
          "  name: \"Tab\",\n" +
          "  components: {TTab, TTabItem},\n" +
          "  }",
        table: {
          header: [
            { key: "variable", label: "Variable" },
            { key: "type", label: "Value Type" },
            { key: "details", label: "Details" }
          ],
          content: [
            {
              variable: "title",
              type: "String",
              details: "Tab header text"
            },
            {
              variable: ":tab-style",
              type: "Number",
              details: "You can select different 2 style sheet <br><b>Options:</b> 1 ,2 <b>Default:</b> 1"
            },
            {
              variable: ":active",
              type: "Number",
              details: "You can choose which tab is active when page first load. You should write tab's order. <br><b>Default:</b> 1"
            },
            {
              variable: "color",
              type: "String",
              details: "Your tab color theme.<br><b>Options Solid:</b> solid-red, solid-blue, solid-green, solid-yellow, solid-indigo, solid-pink, solid-purple, solid-gray, solid-black, solid-white,<br>" +
                "<b>Options Light:</b> light-red, light-blue, light-green, light-yellow, light-indigo, light-pink, light-purple, light-gray<br>"
            },
            {
              variable: ":radius",
              type: "Number",
              details: "<b>Options:</b> none, 1, 2, 3, 4, 5, 6, 7, 8 <b>Options:</b> none"
            }
          ]
        }
      }
    };
  }
};
</script>

<style scoped>

</style>
