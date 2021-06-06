<template>
  <app-layout>
    <!--Header-->
    <template #header>
      Tables
    </template>
    <!--Subheader-->
    <template #subHeader>
      Customizable tables
    </template>
    <!--Content-->
    <template #default>
      <div class="my-2 border rounded-md overflow-hidden">
        <ul class="flex justify-center">
          <li class="bg-red-500 p-2 w-full h-10 items-center flex justify-center cursor-pointer"
              @click="tableColor='red'">
            <div v-if="tableColor=='red'" :class="selectorInnerStyle">Red</div>
          </li>
          <li class="bg-blue-500 p-2 w-full h-10 items-center flex justify-center cursor-pointer"
              @click="tableColor='blue'">
            <div v-if="tableColor=='blue'" :class="selectorInnerStyle">Blue</div>
          </li>
          <li class="bg-indigo-500 p-2 w-full h-10 items-center flex justify-center cursor-pointer"
              @click="tableColor='indigo'">
            <div v-if="tableColor=='indigo'" :class="selectorInnerStyle">Indigo</div>
          </li>
          <li class="bg-yellow-500 p-2 w-full h-10 items-center flex justify-center cursor-pointer"
              @click="tableColor='yellow'">
            <div v-if="tableColor=='yellow'" :class="selectorInnerStyle">Yellow</div>
          </li>
          <li :class="{'bg-gray-600' : tableColor === 'black'}"
              class="bg-black p-2 w-full h-10 items-center flex justify-center cursor-pointer"
              @click="tableColor='black'">
            <div v-if="tableColor=='black'" :class="selectorInnerStyle">Black</div>
          </li>
          <li class="bg-gray-500 p-2 w-full h-10 items-center flex justify-center cursor-pointer"
              @click="tableColor='gray'">
            <div v-if="tableColor=='gray'" :class="selectorInnerStyle">Gray</div>
          </li>
        </ul>
      </div>
      <t-table :color="tableColor" :content="users" :header="header">
        <template #photo="{props}">
          <div class="flex justify-center">
            <t-avatar :link="props.photo" :radius="8" :size="3"/>
          </div>
        </template>
      </t-table>

      <ssh-pre copy-button="true" language="html" label="Code">{{sampleCode.html}}</ssh-pre>
      <ssh-pre copy-button="true" language="js" label="JS">{{sampleCode.js}}</ssh-pre>
    </template>
  </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import TTable from "@/Components/Table/TTable";
import TAvatar from "@/Components/Avatar/TAvatar";
import SshPre from 'simple-syntax-highlighter'
import 'simple-syntax-highlighter/dist/sshpre.css'

export default {
  name: "Table",
  components: {AppLayout, TTable, TAvatar,SshPre},
  props: ['users'],
  data() {
    return {
      tableColor: 'blue',
      header: ['name', 'email'],
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
  },
  computed: {
    selectorInnerStyle() {
      return 'flex-shrink-0 w-full text-center bg-opacity-50 px-2 py-1 bg-white rounded-full font-semibold z-10'
    }
  }
}
</script>

<style scoped>

</style>
