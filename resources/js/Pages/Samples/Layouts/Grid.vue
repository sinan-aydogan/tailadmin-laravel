<template>
  <app-layout>
    <template #header>Grid</template>
    <template #subHeader>Grid system for contents</template>
    <template #default>
        <grid-section :col="3" :gap="4">
            <div v-for="i in 6" class="bg-gray-300 border border-gray-500 h-16 items-center justify-center flex font-bold text-xl">{{ 'Col '+ i }}</div>
        </grid-section><!--Sample Codes-->
        <ssh-pre :copy-button="true" label="Code" language="html">{{ sampleCode.html }}</ssh-pre>
        <ssh-pre :copy-button="true" label="JS" language="js">{{ sampleCode.js }}</ssh-pre>
        <!--Variables Table-->
        <t-table :content="sampleCode.table.content" :header="sampleCode.table.header" class="mt-5" color="blue" :searchable="['variable','details']"/>
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
            '<grid-section :col="3" :gap="4">\n' +
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
              details: 'It is how many items are there in one row<br><b>Options:</b>1, 2, 3, 4, 5, 6<br><b> Advice:</b> From 1 to 3'
            },
            {
              variable: ':gap',
              type: 'Number',
              details: 'The amount of the gap between items <br><b>Options:</b> 2, 4, 6, 8, 10, 12'
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
