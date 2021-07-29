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
      <t-component-color-selector class="mb-4" @selected-color="selectedColor = $event"/>
      <grid-section :col-tablet="2">
        <!--Style 1-->
        <t-tab :color="selectedColor" :tab-style="1">
          <!--Tab 1-->
          <t-tab-item title="Tab1">
            Content 1<br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu sem molestie, mollis
            velit a, auctor
            nisi. Duis ut ex luctus, ornare sem id, tempus purus.
          </t-tab-item>
          <!--Tab 2-->
          <t-tab-item title="Tab2">
            Content 2<br>
            Vestibulum ut tellus blandit, molestie risus eget,
            aliquet odio. In eleifend lectus in dolor laoreet blandit. Nulla sagittis felis tellus,
            id vulputate
            nulla auctor at.
          </t-tab-item>
          <!--Tab 3-->
          <t-tab-item title="Tab3">
            Content 3<br>
            Nunc a nulla dictum, rutrum purus volutpat, suscipit eros. Fusce fermentum lectus non
            dignissim viverra. Integer non accumsan lorem. Suspendisse at finibus lacus, eu auctor
            purus.
          </t-tab-item>
        </t-tab>
        <!--Style 2-->
        <t-tab :active="2" :color="selectedColor" :radius="5" :tab-style="2">
          <!--Tab 1-->
          <t-tab-item title="Tab1">
            Content 1<br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu sem molestie, mollis
            velit a, auctor
            nisi. Duis ut ex luctus, ornare sem id, tempus purus.
          </t-tab-item>
          <!--Tab 2-->
          <t-tab-item title="Tab2">
            Content 2<br>
            Vestibulum ut tellus blandit, molestie risus eget,
            aliquet odio. In eleifend lectus in dolor laoreet blandit. Nulla sagittis felis tellus,
            id vulputate
            nulla auctor at.
          </t-tab-item>
          <!--Tab 3-->
          <t-tab-item title="Tab3">
            Content 3<br>
            Nunc a nulla dictum, rutrum purus volutpat, suscipit eros. Fusce fermentum lectus non
            dignissim viverra. Integer non accumsan lorem. Suspendisse at finibus lacus, eu auctor
            purus.
          </t-tab-item>
        </t-tab>
      </grid-section>
      <!--Sample Codes-->
      <ssh-pre :copy-button="true" label="Code" language="html">{{ sampleCode.html }}</ssh-pre>
      <ssh-pre :copy-button="true" label="JS" language="js">{{ sampleCode.js }}</ssh-pre>
      <!--Variables Table-->
      <t-table :content="sampleCode.table.content"
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
import TContentCard from "@/Components/Card/TContentCard";
import TTab from "@/Components/Tab/TTab";
import TTabItem from "@/Components/Tab/TTabItem";
import TTable from "@/Components/Table/TTable";
/*Codehighlighter*/
import SshPre from "simple-syntax-highlighter";
import "simple-syntax-highlighter/dist/sshpre.css";
import TComponentColorSelector from "@/Components/Misc/TComponentColorSelector";

export default {
  name: "Tab",
  components: {TComponentColorSelector, AppLayout, GridSection, SshPre, TContentCard, TTab, TTable, TTabItem},
  data() {
    return {
      selectedColor: 'solid-gray',
      sampleCode: {
        html:
            '<t-tab color="solid-red" :radius="3" :tab-style="2" :active="2">\n' +
            '    <!--Tab 1-->\n' +
            '    <t-tab-item title="Tab1">\n' +
            '        Content 1\n' +
            '    </t-tab-item>\n' +
            '    <!--Tab 2-->\n' +
            '    <t-tab-item title="Tab2">\n' +
            '        Content 2\n' +
            '    </t-tab-item>\n' +
            '</t-tab>',
        js:
            'import TTab from "@/Components/Tab/TTab";\n' +
            'import TTabItem from "@/Components/Tab/TTabItem";\n' +
            '\n' +
            'export default {\n' +
            '  name: "Tab",\n' +
            '  components: {TTab, TTabItem},\n' +
            '  }',
        table: {
          header: [
            {key: 'variable', label: 'Variable'},
            {key: 'type', label: 'Value Type'},
            {key: 'details', label: 'Details'},
          ],
          content: [
            {
              variable: 'title',
              type: 'String',
              details: 'Tab header text'
            },
            {
              variable: ':tab-style',
              type: 'Number',
              details: 'You can select different 2 style sheet <br><b>Options:</b> 1 ,2 <b>Default:</b> 1'
            },
            {
              variable: ':active',
              type: 'Number',
              details: 'You can choose which tab is active when page first load. You should write tab\'s order. <br><b>Default:</b> 1'
            },
            {
              variable: 'color',
              type: 'String',
              details: "Your tab color theme.<br><b>Options Solid:</b> solid-red, solid-blue, solid-green, solid-yellow, solid-indigo, solid-pink, solid-purple, solid-gray, solid-black, solid-white,<br>" +
                  "<b>Options Light:</b> light-red, light-blue, light-green, light-yellow, light-indigo, light-pink, light-purple, light-gray<br>"
            },
            {
              variable: ":radius",
              type: "Number",
              details: "<b>Options:</b> none, 1, 2, 3, 4, 5, 6, 7, 8 <b>Options:</b> none"
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
