<template>
  <app-layout title="Popover">
    <template #header>Popovers</template>
    <template #subHeader>Simple and casual pops</template>
    <template #default>
      <grid-section :col="2">
        <t-content-card :width="1">
          <template #title>Popover Title and Position</template>
          <template #subTitle>Left, Top, Right and Bottom Positions</template>
          <template #content>
            <grid-section :col-tablet="2" :col-desktop="4" class="place-items-start">
              <t-popover position="top" color="gray">
                Click me (T)
                <template #boxTitle>Title for Top</template>
                <template #boxContent>Hello, I'm at the top</template>
              </t-popover>
              <t-popover position="bottom" color="red">
                Click me (B)
                <template #boxTitle>Title for Bottom</template>
                <template #boxContent>Hello, I'm at the bottom</template>
              </t-popover>
              <t-popover position="right" color="blue">
                Click me (R)
                <template #boxTitle>Title for Right</template>
                <template #boxContent>Hello, I'm at the left</template>
              </t-popover>
              <t-popover position="right" color="black">
                Click me (L)
                <template #boxTitle>Title for Left</template>
                <template #boxContent>Hello, I'm at the right</template>
              </t-popover>
            </grid-section>
          </template>
        </t-content-card>
        <t-content-card :width="1">
          <template #title>Popover without Title</template>
          <template #subTitle>Left, Top, Right and Bottom Positions</template>
          <template #content>
            <grid-section :col-tablet="2" :col-desktop="4">
              <t-popover position="top">
                Click me (T)
                <template #boxContent>Hello, I'm at the top</template>
              </t-popover>
              <t-popover position="bottom">
                Click me (B)
                <template #boxContent>Hello, I'm at the bottom</template>
              </t-popover>
              <t-popover position="right" color="red">
                Click me (R)
                <template #boxContent>Hello, I'm at the right</template>
              </t-popover>
              <t-popover position="left">
                Click me (L)
                <template #boxContent>Hello, I'm at the left</template>
              </t-popover>
            </grid-section>
          </template>
        </t-content-card>
      </grid-section>
      <!--Sample Codes-->
      <ssh-pre :copy-button="true" label="Code" language="html">{{ sampleCode.html }}</ssh-pre>
      <ssh-pre :copy-button="true" label="JS" language="js">{{ sampleCode.js }}</ssh-pre>
      <!--Variables Table-->
      <t-table
          :content="sampleCode.table.content"
          :header="sampleCode.table.header"
          :searchable="['variable','details']" class="mt-5"
          color="solid-blue"
      >
        <template #details="{props}">
              <span class="whitespace-nowrap md:whitespace-normal" v-html="props.details">
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
import TTable from "@/Components/Table/TTable";
import TPopover from "@/Components/Popover/TPopover";
/*Codehighlighter*/
import "simple-syntax-highlighter/dist/sshpre.css";
import SshPre from "simple-syntax-highlighter";

export default {
  name: "Popover",
  components: {AppLayout, SshPre, GridSection, TContentCard, TTable, TPopover},
  data() {
    return {
      sampleCode: {
        html:
            '<t-popover position="right">\n' +
            '    Click me!\n' +
            '    <template #boxTitle>Title for Right</template>\n' +
            '    <template #boxContent>Hello, I\'m at the right</template>\n' +
            '</t-popover>',
        js:
            'import TPopover from "@/Components/Popover/TPopover";\n' +
            '\n' +
            'export default {\n' +
            '  name: "Popover",\n' +
            '  components: {TPopover},\n' +
            '  }',
        table: {
          header: [
            {key: 'variable', label: 'Variable'},
            {key: 'type', label: 'Value Type'},
            {key: 'details', label: 'Details'},
          ],
          content: [
            {
              variable: 'position',
              type: 'String',
              details: '<b>Options:</b> left, right, bottom and top'
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
