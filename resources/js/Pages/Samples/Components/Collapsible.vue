<template>
  <app-layout>
    <template #header>
      Collapsible Content
    </template>
    <template #subHeader>

    </template>
    <template #default>
      <grid-section :col-laptop="2" :col-tablet="2">
        <t-collapsible :radius="3">
          <!--Solid White-->
          <t-collapsible-item color="solid-white">
            <template #title>
              Solid White
            </template>
            <template #content>
              Content
            </template>
          </t-collapsible-item>
          <!--Solid Blue-->
          <t-collapsible-item color="solid-blue">
            <template #title>
              Solid Blue
            </template>
            <template #content>
              Content
            </template>
          </t-collapsible-item>
          <!--Light Yellow-->
          <t-collapsible-item color="light-yellow">
            <template #title>
              Light Yellow
            </template>
            <template #content>
              Content
            </template>
          </t-collapsible-item>
          <!--Gradient Purple to Pink-->
          <t-collapsible-item color="gradient-purple-to-pink">
            <template #title>
              Purple
            </template>
            <template #content>
              Content
            </template>
          </t-collapsible-item>
        </t-collapsible>
        <!--Icon and Align-->
        <t-collapsible :radius="0">
          <!--First Item-->
          <t-collapsible-item align="left">
            <template #title>
              <font-awesome-icon icon="shopping-bag"/>
              Left
            </template>
            <template #content>
              Content
            </template>
          </t-collapsible-item>
          <!--Second Item-->
          <t-collapsible-item align="center">
            <template #title>
              <font-awesome-icon icon="tv"/>
              Center
            </template>
            <template #content>
              Content
            </template>
          </t-collapsible-item>
          <!--Third Item-->
          <t-collapsible-item align="right">
            <template #title>
              <font-awesome-icon icon="tasks"/>
              Right
            </template>
            <template #content>
              Content
            </template>
          </t-collapsible-item>
        </t-collapsible>
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
import TCollapsible from "@/Components/Collapsible/TCollapsible";
import TCollapsibleItem from "@/Components/Collapsible/TCollapsibleItem";
import TContentCard from "@/Components/Card/TContentCard";
import TTable from "@/Components/Table/TTable";
/*Codehighlighter*/
import "simple-syntax-highlighter/dist/sshpre.css";
import SshPre from "simple-syntax-highlighter";

export default {
  name: "Collapsible",
  components: {GridSection, AppLayout, TContentCard, TCollapsible, TCollapsibleItem, SshPre, TTable},
  data() {
    return {
      sampleCode: {
        html:
            '<t-collapsible :radius="3">\n' +
            '    <!--First Item-->\n' +
            '    <t-collapsible-item align="right" color="solid-red">\n' +
            '        <template #title>\n' +
            '            <!--You can use any component in this area-->\n' +
            '            <font-awesome-icon icon="chart-bar"/>\n' +
            '            Default, non-added align indicator\n' +
            '        </template>\n' +
            '        <template #content>\n' +
            '            <!--You can use any component in this area-->\n' +
            '            Content\n' +
            '        </template>\n' +
            '    </t-collapsible-item>\n' +
            '    <!--Second Item-->\n' +
            '    <t-collapsible-item align="left" color="solid-blue">\n' +
            '        <template #title>\n' +
            '            <!--You can use any component in this area-->\n' +
            '            <font-awesome-icon icon="shopping-bag"/>\n' +
            '            Left\n' +
            '        </template>\n' +
            '        <template #content>\n' +
            '            <!--You can use any component in this area-->\n' +
            '            Content\n' +
            '        </template>\n' +
            '    </t-collapsible-item>\n' +
            '</t-collapsible>',
        js:
            'import TCollapsible from "@/Components/Collapsible/TCollapsible";\n' +
            'import TCollapsibleItem from "@/Components/Collapsible/TCollapsibleItem";' +
            '\n' +
            'export default {\n' +
            '  name: "InputGroup",\n' +
            '  components: {TCollapsible, TCollapsibleItem},\n' +
            '  }',
        table: {
          header: [
            {key: 'variable', label: 'Variable'},
            {key: 'type', label: 'Value Type'},
            {key: 'details', label: 'Details'},
          ],
          content: [
            {
              variable: 'color',
              type: 'String',
              details: "Your collapsible item color theme.<br><b>Options Solid:</b> solid-red, solid-blue, solid-green, solid-yellow, solid-indigo, solid-pink, solid-purple, solid-gray, solid-black, solid-white,<br>" +
                  "<b>Options Light:</b> light-red, light-blue, light-green, light-yellow, light-indigo, light-pink, light-purple, light-gray<br" +
                  "><b>Options Gradient:</b> gradient-red-to-pink. Red is first color and Pink is second color. You change red end pink with red, blue, green, yellow, indigo, pink, purple and gray)"
            },
            {
              variable: 'gradient-direction',
              type: 'String',
              details: "If you use to the gradient color, you can select gradient's direction. <br><b>Options:</b> r, l, b, t, tl, bl, tr, br<br>" +
                  "<b>Default:</b> r<br>(Means: l: left, r: right, b: bottom, t: top)"
            },
            {
              variable: ":radius",
              type: "Number",
              details: "<b>Options:</b> none, 1, 2, 3, 4, 5, 6, 7, 8"
            },
            {
              variable: 'align',
              type: 'String',
              details: '<b>Options:</b> left, center and right'
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
