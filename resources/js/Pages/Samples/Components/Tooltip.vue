<template>
    <app-layout>
        <template #header>Tooltips</template>
        <template #subHeader>Smart and fast infos in the line</template>
        <template #default>
            <grid-section :col="1" :gap="4">
                <t-content-card :width="1">
                    <template #title>Simple</template>
                    <template #subTitle>Left, Top, Right and Bottom Positions</template>
                    <template #content>
                        <div class="flex flex-wrap space-x-8">
                            <t-tooltip position="top">
                                <template #mainContent>Hover me!</template>
                                <template #secondContent>Hello, I'm at the top</template>
                            </t-tooltip>
                            <t-tooltip position="bottom">
                                <template #mainContent>Hover me!</template>
                                <template #secondContent>Hello, I'm at the bottom</template>
                            </t-tooltip>
                            <t-tooltip position="left">
                                <template #mainContent>Hover me!</template>
                                <template #secondContent>Hello, I'm at the left</template>
                            </t-tooltip>
                            <t-tooltip position="right">
                                <template #mainContent>Hover me!</template>
                                <template #secondContent>Hello, I'm at the right</template>
                            </t-tooltip>
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
/*Layout*/
import AppLayout from "@/Layouts/AppLayout";
/*Component*/
import GridSection from "@/Layouts/GridSection";
import TContentCard from "@/Components/Card/TContentCard";
import TTable from "@/Components/Table/TTable";
import TTooltip from "@/Components/Tooltip/TTooltip";
/*Codehighlighter*/
import SshPre from "simple-syntax-highlighter";
import "simple-syntax-highlighter/dist/sshpre.css";

export default {
    name: "Tooltip",
    components: {AppLayout, SshPre, GridSection, TContentCard, TTable, TTooltip},
    data() {
        return {
            sampleCode: {
                html:
                    '<t-tooltip position="right">\n' +
                    '    <template #mainContent>Click me!</template>\n' +
                    '    <template #secondContent>Hello, I\'m at the right</template>\n' +
                    '</t-tooltip>',
                js:
                    'import TTooltip from "@/Components/Popover/TTooltip";\n' +
                    '\n' +
                    'export default {\n' +
                    '  name: "Tooltip",\n' +
                    '  components: {TTooltip},\n' +
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
