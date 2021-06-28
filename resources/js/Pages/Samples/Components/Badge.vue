<template>
  <app-layout>
    <template #header>
      Badges
    </template>
    <template #subHeader>
      Useful badges like tags (648 Variations)
    </template>
    <template #default>
      <grid-section col="2" gap="4">
        <!--With Color-->
        <t-content-card width="2">
          <template #title>Badge Colors</template>
          <template #subTitle>18 different colors</template>
          <template #content>
            <div class="flex flex-wrap gap-4">
              <t-badge :radius="8" v-for="i in colors" :color="i" :key="i">{{ i.charAt(0).toUpperCase()+i.toLowerCase().slice(1) }}</t-badge>
            </div>
          </template>
        </t-content-card>
        <!--With Radius-->
        <t-content-card width="2">
          <template #title>Badge Radius</template>
          <template #subTitle>9 different radius sizes</template>
          <template #content>
            <div class="flex flex-wrap gap-4">
              <t-badge>Radius - None</t-badge>
              <t-badge v-for="i in 8" :key="i" :radius="i">Radius - {{ i }}</t-badge>
            </div>
          </template>
        </t-content-card>
        <!--With Value-->
        <t-content-card width="2">
          <template #title>Badge Values</template>
          <template #content>
            <div class="flex flex-wrap gap-4">
              <t-badge :radius="8" color="indigo" value="123">Number</t-badge>
              <t-badge :radius="8" color="red" value="12 TL">Currency</t-badge>
              <t-badge :radius="8" color="pink" value="0,25">Double</t-badge>
              <t-badge :radius="8" color="yellow" value="15 pcs.">Count</t-badge>
              <t-badge :radius="8" color="purple" value="03.09.2025">Date</t-badge>
              <t-badge :radius="8" color="white" value="®">Special Char.</t-badge>
              <t-badge :radius="8" color="black" value="Plus">String</t-badge>
              <t-badge :radius="8" color="red" value="+25%">Percent</t-badge>
              <t-badge :radius="8" color="blue" value="-15px">Mathematical Signs</t-badge>
            </div>
          </template>
        </t-content-card>
        <!--With Collapsible-->
        <t-content-card width="2">
          <template #title>Collapsible Badges</template>
          <template #subTitle>Click them</template>
          <template #content>
            <div class="flex flex-wrap gap-4">
              <t-badge :collapsible="true" :radius="1" color="indigo">
                <font-awesome-icon slot="icon" icon="info"/>
                Number
              </t-badge>
              <t-badge :collapsible="true" :radius="2" color="red">
                <font-awesome-icon slot="icon" icon="info"/>
                Currency
              </t-badge>
              <t-badge :collapsible="true" :radius="3" color="pink">
                <font-awesome-icon slot="icon" icon="info"/>
                Double
              </t-badge>
              <t-badge :collapsible="true" :radius="4" color="yellow" value="15 pcs.">
                <font-awesome-icon slot="icon" icon="info"/>
                Count
              </t-badge>
              <t-badge :collapsible="true" :radius="5" color="purple" value="03.09.2025">
                <font-awesome-icon slot="icon" icon="info"/>
                Date
              </t-badge>
              <t-badge :collapsible="true" :radius="6" color="white" value="®">
                <font-awesome-icon slot="icon" icon="info"/>
                Special Char.
              </t-badge>
              <t-badge :collapsible="true" :radius="7" color="black" value="Plus">
                <font-awesome-icon slot="icon" icon="info"/>
                String
              </t-badge>
              <t-badge :collapsible="true" :radius="8" color="red" value="+25%">
                <font-awesome-icon slot="icon" icon="info"/>
                Percent
              </t-badge>
              <t-badge :collapsible="true" :radius="8" color="blue" value="-15px">
                <font-awesome-icon slot="icon" icon="info"/>
                Mathematical Signs
              </t-badge>
            </div>
          </template>
        </t-content-card>
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
import TContentCard from "@/Components/Card/TContentCard";
import TTable from "@/Components/Table/TTable";
import TBadge from "@/Components/Badge/TBadge";
/*Codehighlighter*/
import SshPre from "simple-syntax-highlighter";
import "simple-syntax-highlighter/dist/sshpre.css";

export default {
  name: "Badge",
  components: {AppLayout, GridSection, SshPre, TBadge, TContentCard, TTable},
  data() {
    return {
      colors:['red','blue','green','yellow','indigo','pink','purple','gray','black','white','light-red','light-blue','light-green','light-yellow','light-indigo','light-pink','light-purple','light-gray'],
      sampleCode: {
        html:
            '<t-badge :radius="8" color="blue" :collapsible="true" value="6.40TL">\n' +
            '    <font-awesome-icon icon="info" slot="icon" />\n' +
            "    Mathematical Signs\n" +
            "</t-badge>",
        js:
            'import TBadge from "@/Components/Badge/TBadge";' +
            "\n" +
            "export default {\n" +
            '  name: "Badge",\n' +
            "  components: {TBadge},\n" +
            "  }",
        table: {
          header: [
            {
              key: "variable",
              label: "Variable"
            },
            {
              key: "type",
              label: "Value Type"
            },
            {
              key: "details",
              label: "Details"
            }
          ],
          content: [
            {
              variable: "color",
              type: "String",
              details: "Your badge color theme.<br><b>Options Simple:</b> red, blue, green, yellow, indigo, pink, purple, gray, black, white,<br><b>Options Light:</b> light-red, light-blue, light-green, light-yellow, light-indigo, light-pink, light-purple, light-gray"
            },
            {
              variable: ":radius",
              type: "Number",
              details: "<b>Options:</b> none, 1, 2, 3, 4, 5, 6, 7, 8"
            },
            {
              variable: "value",
              type: "String",
              details: "Everything you want"
            },
            {
              variable: ":collapsible",
              type: "Boolean",
              details:
                  "You should with an icon element or font-awesome-icon component. <br>Your icon element or component must contain slot=\"icon\" variable"
            }
          ]
        }
      }
    };
  }
};
</script>

<style scoped></style>
