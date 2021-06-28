<template>
  <app-layout>
    <template #header>Charts</template>
    <template #subHeader>Change the tables to the show</template>
    <template #default>
      <grid-section>
        <t-content-card></t-content-card>
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
import TAlert from "@/Components/Alert/TAlert";
import TButton from "@/Components/Button/TButton";
import TContentCard from "@/Components/Card/TContentCard";
import TTable from "@/Components/Table/TTable";
/*Codehighlighter*/
import "simple-syntax-highlighter/dist/sshpre.css";
import SshPre from "simple-syntax-highlighter";

export default {
  name: "Chart",
  components: {
    AppLayout,
    GridSection,
    SshPre,
    TAlert,
    TButton,
    TContentCard,
    TTable
  },
  data() {
    return {
      sampleCode: {
        html:
            '<t-input-group label="Text Label" label-for="name4" sub-label="Cash only" sub-label-color="yellow" error="Please enter numerical value">\n' +
            '    <t-input-text id="name4" placeholder="I\'m a placeholder text" value="Hi, I\'m a prefilled text"/>\n' +
            '</t-input-group>',
        js:
            'import TInputGroup from "@/Components/Form/TInputGroup";\n' +
            'import TInputText from "@/Components/Form/Inputs/TInputText";\n' +
            '\n' +
            'export default {\n' +
            '  name: "InputGroup",\n' +
            '  components: {SshPre,GridSection, TInputText, TInputGroup, ContentCard, AppLayout},\n' +
            '  }',
        table: {
          header: [
            {key: 'variable', label: 'Variable'},
            {key: 'type', label: 'Value Type'},
            {key: 'details', label: 'Details'},
          ],
          content: [
            {variable: 'label', type: 'String', details: 'Your input label'},
            {variable: 'label-for', type: 'String', details: 'Label identity indicator, you should enter input\'s id'},
            {
              variable: 'sub-label',
              type: 'String',
              details: 'If you want to show a second and small label, you can use'
            },
            {
              variable: 'sub-label-color',
              type: 'String',
              details: 'You can change sub label color <br><b>Options:</b> red, blue, green, yellow, indigo, pink, gray'
            },
            {
              variable: 'error',
              type: 'String',
              details: 'Every time it\'s text color is red, If It has a value, it shows'
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
