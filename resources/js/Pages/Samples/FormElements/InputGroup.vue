<template>
  <app-layout>
    <template #header>
      Input Group
    </template>
    <template #default>
      <grid-section col="4" gap="2">
        <content-card :radius="3" :width="1">
          <template #title>
            With Label
          </template>
          <template #content>
            <t-input-group label="Text Label" label-for="name1">
              <t-input-text id="name1" placeholder="I'm a placeholder text"/>
            </t-input-group>
          </template>
        </content-card>

        <content-card :radius="3" :width="1">
          <template #title>
            With Sub Label
          </template>
          <template #content>
            <t-input-group label="Text Label" label-for="name2" sub-label="Cash only">
              <t-input-text id="name2" placeholder="I'm a placeholder text"/>
            </t-input-group>
          </template>
        </content-card>

        <content-card :radius="3" :width="1">
          <template #title>
            With Colorful Sub Label
          </template>
          <template #content>
            <t-input-group label="Text Label" label-for="name3" sub-label="Cash only" sub-label-color="green">
              <t-input-text id="name3" placeholder="I'm a placeholder text"/>
            </t-input-group>
          </template>
        </content-card>

        <content-card :radius="3" :width="1">
          <template #title>
            With Error Message
          </template>
          <template #content>
            <t-input-group label="Text Label" label-for="name4" sub-label="Cash only" sub-label-color="yellow"
                           error="Please enter numerical value">
              <t-input-text id="name4" placeholder="I'm a placeholder text" value="Hi, I'm a prefilled text"/>
            </t-input-group>
          </template>
        </content-card>
      </grid-section>
      <!--Sample Codes-->
      <ssh-pre :copy-button="true" language="html" label="Code">{{ sampleCode.html }}</ssh-pre>
      <ssh-pre :copy-button="true" language="js" label="JS">{{ sampleCode.js }}</ssh-pre>
      <!--Variables Table-->
      <t-table :header="sampleCode.table.header" :content="sampleCode.table.content" color="blue" class="mt-5" :searchable="['variable','details']"/>
    </template>
  </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import ContentCard from "@/Components/Card/TContentCard";
import TInputGroup from "@/Components/Form/TInputGroup";
import TInputText from "@/Components/Form/Inputs/TInputText";
import GridSection from "@/Layouts/GridSection";
import TTable from "@/Components/Table/TTable";
import SshPre from 'simple-syntax-highlighter'
import 'simple-syntax-highlighter/dist/sshpre.css'

export default {
  name: "InputGroup",
  components: {AppLayout, ContentCard, GridSection, SshPre, TTable, TInputGroup, TInputText},
  data() {
    return {
      sampleCode: {
        html:
            '<t-input-group label="Text Label" label-for="name4" sub-label="Cash only" sub-label-color="yellow" error="Please enter numerical value">\n' +
            '    <t-input-text id="name" placeholder="I\'m a placeholder text" value="Hi, I\'m a prefilled text" type="text"/>\n' +
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
            },
            {
              variable: 'type',
              type: 'String',
              details: '<b>Default:</b> text<br> <b>Options:</b> <a target="_blank" href="https://www.w3schools.com/tags/tag_input.asp">Type List</a> '
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
