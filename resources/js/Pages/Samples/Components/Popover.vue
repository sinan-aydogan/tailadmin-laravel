<template>
  <app-layout>
    <template #header>Popovers</template>
    <template #subHeader>Simple and casual pops</template>
    <template #default>
      <grid-section :col="2">
        <t-content-card :width="1">
          <template #title>Popover Title and Position</template>
          <template #subTitle>Left, Top, Right and Bottom Positions</template>
          <template #content>
            <div class="flex flex-wrap gap-8 space-x-8">
              <t-popover position="top">
                <template #mainContent>Click me!</template>
                <template #secondTitle>Title for Top</template>
                <template #secondContent>Hello, I'm at the top</template>
              </t-popover>
              <t-popover position="bottom">
                <template #mainContent>Click me!</template>
                <template #secondTitle>Title for Bottom</template>
                <template #secondContent>Hello, I'm at the bottom</template>
              </t-popover>
              <t-popover position="left">
                <template #mainContent>Click me!</template>
                <template #secondTitle>Title for Left</template>
                <template #secondContent>Hello, I'm at the left</template>
              </t-popover>
              <t-popover position="right">
                <template #mainContent>Click me!</template>
                <template #secondTitle>Title for Right</template>
                <template #secondContent>Hello, I'm at the right</template>
              </t-popover>
            </div>
          </template>
        </t-content-card>
        <t-content-card :width="1">
          <template #title>Popover without Title</template>
          <template #subTitle>Left, Top, Right and Bottom Positions</template>
          <template #content>
            <div class="flex flex-wrap space-x-8">
              <t-popover position="top">
                <template #mainContent>Click me!</template>
                <template #secondContent>Hello, I'm at the top</template>
              </t-popover>
              <t-popover position="bottom">
                <template #mainContent>Click me!</template>
                <template #secondContent>Hello, I'm at the bottom</template>
              </t-popover>
              <t-popover position="left">
                <template #mainContent>Click me!</template>
                <template #secondContent>Hello, I'm at the left</template>
              </t-popover>
              <t-popover position="right">
                <template #mainContent>Click me!</template>
                <template #secondContent>Hello, I'm at the right</template>
              </t-popover>
            </div>
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
import TButton from "@/Components/Button/TButton";
import TContentCard from "@/Components/Card/TContentCard";
import TTable from "@/Components/Table/TTable";
import TPopover from "@/Components/Popover/TPopover";
/*Codehighlighter*/
import "simple-syntax-highlighter/dist/sshpre.css";
import SshPre from "simple-syntax-highlighter";

export default {
  name: "Popover",
  components: {AppLayout, SshPre, GridSection, TButton, TContentCard, TTable, TPopover},
  data() {
    return {
      sampleCode: {
        html:
            '<t-popover position="right">\n' +
            '    <template #mainContent>Click me!</template>\n' +
            '    <template #secondTitle>Title for Right</template>\n' +
            '    <template #secondContent>Hello, I\'m at the right</template>\n' +
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
