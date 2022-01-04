<template>
  <app-layout>
    <template #header>Grid</template>
    <template #subHeader>Grid system for contents</template>
    <template #default>
      <grid-section :col-tablet="2" :col-laptop="3" :col-desktop="4">
        <div v-for="i in 6"
             class="bg-gray-300 border border-gray-500 h-16 items-center justify-center flex font-bold text-xl">
          {{ 'Col ' + i }}
        </div>
      </grid-section><!--Sample Codes-->
      <ssh-pre :copy-button="true" label="Code" language="html">{{ sampleCode.html }}</ssh-pre>
      <ssh-pre :copy-button="true" label="JS" language="js">{{ sampleCode.js }}</ssh-pre>
      <!--Variables Table-->
      <t-table
          :content="sampleCode.table.content"
          :header="sampleCode.table.header"
          :searchable="['variable','details']"
          class="mt-5"
          color="solid-blue">
        <template #details="{props}">
              <span class="whitespace-nowrap md:whitespace-normal" v-html="props.details">
              </span>
        </template>
      </t-table>
    </template>
  </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import SshPre from "simple-syntax-highlighter";
import 'simple-syntax-highlighter/dist/sshpre.css'
import GridSection from "@/Layouts/GridSection";
import TTable from "@/Components/Table/TTable";

export default {
  name: "Grid",
  components: {TTable, GridSection, AppLayout, SshPre},
  data() {
    return {
      sampleCode: {
        html:
            '<grid-section :col-tablet="2" :col-laptop="3" :col-desktop="4" :gap="4">\n' +
            '    <div>Col 1</div>\n' +
            '    <div>Col 2</div>\n' +
            '    <div>Col 3</div>\n' +
            '    <div>Col 4</div>\n' +
            '    <div>Col 5</div>\n' +
            '    <div>Col 6</div>\n' +
            '</grid-section>',
        js:
            'import GridSection from "@/Layouts/GridSection";' +
            '\n' +
            'export default {\n' +
            '  name: "Grid",\n' +
            '  components: {GridSection},\n' +
            '  }',
        table: {
          header: [
            {key: 'variable', label: 'Variable'},
            {key: 'type', label: 'Value Type'},
            {key: 'details', label: 'Details'},
          ],
          content: [
            {
              variable: ':col',
              type: 'Number',
              details: 'It is how many items are there in one row. This is default columns counts. If it is 5, it will be 5 for all screens. If you want to different column sizes at different screens, you should specific variables.<br><b>Options:</b>1, 2, 3, 4, 5, 6<br><b> Advice:</b> From 1 to 3'
            },
            {
              variable: ':col-phone',
              type: 'Number',
              details: 'This is columns counts for type of screen is the phone(<=425px). <br><b>Options:</b>1, 2, 3, 4, 5, 6<br><b> Advice:</b> From 1 to 3'
            },
            {
              variable: ':col-tablet',
              type: 'Number',
              details: 'This is columns counts for type of screen is the tablet and bigger than devices (laptop, desktop)(425px=<). This is popular variable because that if you set :col-tablet:5, it will be columns count is 1 for the phone and the tablet and bigger than the tablets are 5 <br><b>Options:</b>1, 2, 3, 4, 5, 6<br><b> Advice:</b> From 1 to 3'
            },
            {
              variable: ':col-laptop',
              type: 'Number',
              details: 'This is columns counts for type of screen is the laptop and bigger than devices (desktop)(768px<=). <br><b>Options:</b>1, 2, 3, 4, 5, 6<br><b> Advice:</b> From 1 to 3'
            },
            {
              variable: ':col-desktop',
              type: 'Number',
              details: 'This is columns counts for type of screen is the desktop(1024px<). <br><b>Options:</b>1, 2, 3, 4, 5, 6<br><b> Advice:</b> From 1 to 3'
            },
            {
              variable: ':gap',
              type: 'Number',
              details: 'This variable is auto calculated from col variables but if you want to specific value, you can use this. The amount of the gap between items <br><b>Options:</b> 2, 4, 6, 8, 10, 12'
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
