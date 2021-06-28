<template>
  <app-layout>
    <template #header>Buttons</template>
    <template #subHeader>For all use (1.296 variations)</template>
    <template #default>
      <grid-section col="2" gap="2">
        <!--With Color-->
        <t-contentCard width="2">
          <template #title>Button Colors</template>
          <template #subTitle>18 different colors</template>
          <template #content>
            <t-button v-for="i in colors" :key="i" :color="i" class="m-1">Button</t-button>
          </template>
        </t-contentCard>
        <!--With Radius-->
        <t-contentCard width="2">
          <template #title>Button Radius</template>
          <template #subTitle>9 different radius sizes</template>
          <template #content>
            <div class="flex-grow-0 flex-row">
              <div class="flex flex-wrap">
                <t-button color="red" class="m-1">Button</t-button>
                <t-button v-for="i in 8" :key="i" :radius="i" :color="colors[i]" class="m-1">Button</t-button>
                <t-button color="red" class="m-1">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                  </svg>
                </t-button>
                <t-button v-for="i in 8" :key="i" :radius="i" :color="colors[i]" class="m-1">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                  </svg>
                </t-button>
              </div>
            </div>
          </template>
        </t-contentCard>
        <!--With Icon-->
        <t-contentCard width="1">
          <template #title>Button Icons</template>
          <template #content>
            <div class="flex flex-wrap gap-2">
              <t-button>
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                  <path
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>
                Link
              </t-button>
              <t-button color="blue">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>
                Download
              </t-button>
              <t-button color="yellow">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                  <path
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>
                Edit
              </t-button>
              <t-button color="red">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                  <path
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>
                Delete
              </t-button>
              <t-button>
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                  <path
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>
              </t-button>
              <t-button color="green">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>
              </t-button>
              <t-button color="yellow">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                  <path
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>
              </t-button>
              <t-button color="red">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                  <path
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>
              </t-button>
            </div>
          </template>
        </t-contentCard>
        <!--With Size : Code 4-->
        <t-contentCard width="1">
          <template #title>
            With size
          </template>
          <template #content>
            <div class="flex gap-2 items-end w-full">
              <t-button color="yellow" size="xl">XL Button: xl</t-button>
              <t-button color="green" size="full">Full Button : full</t-button>
              <t-button color="red" size="sm">Small Button : sm</t-button>
            </div>
          </template>
        </t-contentCard>
      </grid-section>
      <!--Sample Codes-->
      <ssh-pre :copy-button="true" label="Code" language="html">{{ sampleCode.html }}</ssh-pre>
      <ssh-pre :copy-button="true" label="JS" language="js">{{ sampleCode.js }}</ssh-pre>
      <!--Variables Table-->
      <t-table :content="sampleCode.table.content" :header="sampleCode.table.header" class="mt-5" color="blue" :searchable="['variable','details']"/>
    </template>
  </app-layout>
</template>

<script>
/*Layout*/
import AppLayout from "@/Layouts/AppLayout";
/*Component*/
import GridSection from "@/Layouts/GridSection";
import TButton from "@/Components/Button/TButton";
import TContentCard from "@/Components/Card/TContentCard";
import TTable from "@/Components/Table/TTable";
/*Codehighlighter*/
import SshPre from 'simple-syntax-highlighter'
import 'simple-syntax-highlighter/dist/sshpre.css'

export default {
  name: "Button",
  components: {AppLayout, GridSection, SshPre, TButton, TContentCard, TTable},
  data() {
    return {
      colors: ['red', 'blue', 'green', 'yellow', 'indigo', 'pink', 'purple', 'gray', 'black', 'white', 'light-red', 'light-blue', 'light-green', 'light-yellow', 'light-indigo', 'light-pink', 'light-purple', 'light-gray'],
      sampleCode: {
        html:
            '<t-button color="yellow" :radius="5" :link="route(\'login\')" type="button">\n' +
            '    <font-awesome-icon icon="user"/>\n' +
            "    Login\n" +
            "</t-button>",
        js:
            'import TButton from "@/Components/Button/TButton";' +
            "\n" +
            "export default {\n" +
            '  name: "Button",\n' +
            "  components: {TButton},\n" +
            "  }",
        table: {
          header: [
            {
              key: "variable",
              label: "Variable"
            },
            {
              key: "type",
              label: "Value Type"
            },
            {
              key: "details",
              label: "Details"
            }
          ],
          content: [
            {
              variable: "color",
              type: "String",
              details: "Your button color theme.<br><b>Options Simple:</b> red, blue, green, yellow, indigo, pink, purple, gray, black, white,<br><b>Options Light:</b> light-red, light-blue, light-green, light-yellow, light-indigo, light-pink, light-purple, light-gray"
            },
            {
              variable: ":radius",
              type: "Number",
              details: "<b>Options:</b> none, 1, 2, 3, 4, 5, 6, 7, 8"
            },
            {
              variable: ":size",
              type: "Number",
              details: "<b>Options:</b> none, sm, xl, full"
            },
            {
              variable: "link",
              type: "String",
              details: "Everything you want, external, internal or route()"
            },
            {
              variable: "type",
              type: "String",
              details:"<b>Options:</b> submit(default), button and reset"
            }
          ]
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
