<template>
  <app-layout>
    <template #header>Paginate</template>
    <template #subHeader>Tables, lists and all of lists</template>
    <template #default>
      <t-component-color-selector class="mb-4" @selected-color="selectedColor = $event"/>
      <grid-section :col="1">
        <content-card :width="1">
          <template #title>The color, the radius, the active you want</template>
          <template #subTitle>18 colors and 8 radius options, custom range and custom active page</template>
          <template #content>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-4">
              <!--Color Selector-->
              <t-paginate v-model="activePage" :color="selectedColor" :range="2" :total="17"/>
              <t-paginate :active="3" :color="selectedColor" :radius="3" :range="3" :total="17"/>
              <t-paginate :active="4" :color="selectedColor" :radius="5" :range="4" :total="17"/>
              <t-paginate :active="5" :color="selectedColor" :radius="8" :range="5" :total="17"/>
            </div>
          </template>
        </content-card>
      </grid-section>
      <!--Sample Codes-->
      <ssh-pre :copy-button="true" label="Code" language="html">{{ sampleCode.html }}</ssh-pre>
      <ssh-pre :copy-button="true" label="JS" language="js">{{ sampleCode.js }}</ssh-pre>
      <!--Variables Table-->
      <t-table
          :content="sampleCode.table.content"
          :header="sampleCode.table.header"
          :searchable="['variable','details']"
          class="mt-5"
          color="solid-blue"
      >
        <template #details="{props}">
              <span class="whitespace-nowrap tablet:whitespace-normal" v-html="props.details">
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
import ContentCard from "@/Components/Card/TContentCard";
import TTable from "@/Components/Table/TTable";
import TPaginate from "@/Components/Paginate/TPaginate";
import TComponentColorSelector from "@/Components/Misc/TComponentColorSelector";
/*Codehighlighter*/
import "simple-syntax-highlighter/dist/sshpre.css";
import SshPre from "simple-syntax-highlighter";

export default {
  name: "Paginate",
  components: {ContentCard, GridSection, AppLayout, SshPre, TTable, TPaginate, TComponentColorSelector},
  data() {
    return {
      activePage: 2,
      selectedColor: 'solid-gray',
      sampleCode: {
        html:
            '<t-paginate :range="3" :active="3" :total="17" :radius="3" color="solid-white" v-model="activePage"/>',
        js:
            'import TPaginate from "@/Components/Paginate/TPaginate";\n' +
            '\n' +
            'export default {\n' +
            '    name: "Paginate",\n' +
            '    components: {TPaginate},\n' +
            '    data(){\n' +
            '       return {\n' +
            '           activePage: null\n' +
            '       }\n' +
            '   }\n' +
            '}',
        table: {
          header: [
            {key: 'variable', label: 'Variable'},
            {key: 'type', label: 'Value Type'},
            {key: 'details', label: 'Details'},
          ],
          content: [
            {
              variable: ':total',
              type: 'Number',
              details: 'Total page count'
            },
            {
              variable: ':range',
              type: 'Number',
              details: 'Optional, It sets how many pages are displayed once time. <b>Default:</b> 5'
            },
            {
              variable: ':active',
              type: 'Number',
              details: 'Optional, the active page when opening page. <b>Default:</b> 1'
            },
            {
              variable: 'color',
              type: 'String',
              details: "Your pagination color theme.<br><b>Options Solid:</b> solid-red, solid-blue, solid-green, solid-yellow, solid-indigo, solid-pink, solid-purple, solid-gray, solid-black, solid-white,<br>" +
                  "<b>Options Light:</b> light-red, light-blue, light-green, light-yellow, light-indigo, light-pink, light-purple, light-gray<br>"
            },
            {
              variable: ":radius",
              type: "Number",
              details: "<b>Options:</b> none, 1, 2, 3, 4, 5, 6, 7, 8"
            },
            {
              variable: '<span class="whitespace-nowrap">v-model="active"</span>',
              type: "Event",
              details: "You can get active page number from the pagination component. You should create a state named 'active'. The v-model will linked the state"
            },
          ]
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
