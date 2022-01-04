<template>
  <app-layout>
    <template #header>
      Input Group
    </template>
    <template #default>
      <grid-section :col-tablet="2" :col-desktop="4">
        <content-card :radius="3" :width="1">
          <template #title>
            With Label Prop
          </template>
          <template #content>
            <t-input-group label="Text Label" label-for="name1">
              <t-input-text id="name1" placeholder="I'm a placeholder text"/>
            </t-input-group>
          </template>
        </content-card>

        <content-card :radius="3" :width="1">
          <template #title>
            With Label Slot
          </template>
          <template #content>
            <t-input-group label-for="name2" sub-label="Cash only">
              <template slot="label">
                <t-cash-icon class="w-5 h-5 mr-1"/> Label Slot
              </template>
              <t-input-text id="name2" placeholder="I'm a placeholder text"/>
            </t-input-group>
          </template>
        </content-card>

        <content-card :radius="3" :width="1">
          <template #title>
            With Colorful Sub Label
          </template>
          <template #content>
            <t-input-group label="Text Label" label-for="name3" sub-label="Cash only" sub-label-color="solid-green">
              <t-input-text id="name3" placeholder="I'm a placeholder text"/>
            </t-input-group>
          </template>
        </content-card>

        <content-card :radius="3" :width="1">
          <template #title>
            With Error Message
          </template>
          <template #content>
            <t-input-group error="Please enter numerical value" label="Text Label" label-for="name4" sub-label="Cash only"
                           sub-label-color="solid-yellow">
              <t-input-text id="name4" placeholder="I'm a placeholder text" value="Hi, I'm a prefilled text"/>
            </t-input-group>
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
import ContentCard from "@/Components/Card/TContentCard";
import TInputGroup from "@/Components/Form/TInputGroup";
import TInputText from "@/Components/Form/Inputs/TInputText";
import GridSection from "@/Layouts/GridSection";
import TTable from "@/Components/Table/TTable";
import SshPre from 'simple-syntax-highlighter'
import 'simple-syntax-highlighter/dist/sshpre.css'
import TCashIcon from "@/Components/Icon/TCashIcon";

export default {
  name: "InputGroup",
  components: {TCashIcon, AppLayout, ContentCard, GridSection, SshPre, TTable, TInputGroup, TInputText},
  data() {
    return {
      sampleCode: {
        html:
            '<t-input-group \n' +
            '    label="Text Label" \n' +
            '    label-for="name" \n' +
            '    sub-label="Cash only" \n' +
            '    sub-label-color="solid-yellow" \n' +
            '    error="Please enter numerical value"\n' +
            '>\n' +
            '    <!--If you want to show a rich label, you shoul use label template-->\n' +
            '    <template slot="label">\n' +
            '        <t-cash-icon class="w-5 h-5 mr-1"/> Label Slot\n' +
            '    </template>\n\n' +
            '    <!--Any input component you want to add-->\n' +
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
