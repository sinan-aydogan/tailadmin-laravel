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
    </template>
  </app-layout>
</template>

<script>
/*Layout*/
import AppLayout from "@/Layouts/AppLayout";
/*Component*/
import GridSection from "@/Layouts/GridSection";
import TTab from "@/Components/Tab/TTab";
import TComponentStyleSelector from "@/Components/Misc/TComponentStyleSelector";

export default {
  name: "Tab",
  components: { TComponentStyleSelector, AppLayout, GridSection, TTab },
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
      ]
    };
  }
};
</script>

<style scoped>

</style>
