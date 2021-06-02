<template>
  <app-layout>
    <template #header>
      Input Group
    </template>
    <template #default>
      <grid-section col="4" gap="2">
        <content-card radius="3" width="1">
          <template #title>
            With Label
          </template>
          <template #content>
            <t-input-group label="Text Label" label-for="name">
              <t-input-text id="name1" placeholder="I'm a placeholder text"/>
            </t-input-group>
          </template>
        </content-card>

        <content-card radius="3" width="1">
          <template #title>
            With Sub Label
          </template>
          <template #content>
            <t-input-group label="Text Label" label-for="name" sub-label="Cash only">
              <t-input-text id="name2" placeholder="I'm a placeholder text"/>
            </t-input-group>
          </template>
        </content-card>

        <content-card radius="3" width="1">
          <template #title>
            With Colorful Sub Label
          </template>
          <template #content>
            <t-input-group label="Text Label" label-for="name" sub-label="Cash only" sub-label-color="green">
              <t-input-text id="name3" placeholder="I'm a placeholder text"/>
            </t-input-group>
          </template>
        </content-card>

        <content-card radius="3" width="1">
          <template #title>
            With Error Message
          </template>
          <template #content>
            <t-input-group label="Text Label" label-for="name" sub-label="Cash only" sub-label-color="yellow" error="Please enter numerical value">
              <t-input-text id="name4" placeholder="I'm a placeholder text" value="Hi, I'm a prefilled text"/>
            </t-input-group>
          </template>
        </content-card>
      </grid-section>
      <ssh-pre copy-button="true" language="html" label="Code">{{sampleCode.html}}</ssh-pre>
      <ssh-pre copy-button="true" language="js" label="JS">{{sampleCode.js}}</ssh-pre>
      <t-table :header="sampleCode.table.header" :content="sampleCode.table.content" color="blue" class="mt-5">

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
import SshPre from 'simple-syntax-highlighter'
import 'simple-syntax-highlighter/dist/sshpre.css'
import TTable from "@/Components/Table/TTable";

export default {
  name: "InputGroup",
  components: {TTable, SshPre,GridSection, TInputText, TInputGroup, ContentCard, AppLayout},
  data(){
    return{
      sampleCode : {
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
            '  components: {SshPre,GridSection, TInputText, TInputGroup, ContentCard, AppLayout},\n'+
            '  }',
        table: {
          header : [
            {key:'variable', label: 'Variable'},
            {key:'type', label: 'Value Type'},
            {key:'action', label: 'Action'},
          ],
          content: [
            {variable:'label', type:'String', action:'Your input label'},
            {variable:'label-for', type:'String', action:'Label identity indicator, you should enter input\'s id'},
            {variable:'sub-label', type:'String', action:'If you want to show a second and small label, you can use'},
            {variable:'sub-label-color', type:'<b>Options:</b> red, blue, green, yellow, indigo, pink, gray', action:'You can change sub label color'},
            {variable:'error', type:'String', action:'Every time it\'s text color is red, If It has a value, it shows'}
          ]
        }
      }
    }
  }
}
</script>

<style scoped>

</style>