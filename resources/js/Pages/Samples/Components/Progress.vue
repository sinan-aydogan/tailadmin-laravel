<template>
    <app-layout>
        <template #header>Progress Bars</template>
        <template #subHeader>Loading, graphical indicator and more than</template>
        <template #default>
            <grid-section col="1">
                <t-content-card width="1">
                    <template #title>Simple and colorful</template>
                    <template #subTitle>8 different color and 5 different height</template>
                    <template #content>
                        <div class="flex flex-col w-full gap-4">
                            <t-progress :height="1" :value="5" title="Performance"/>
                            <t-progress :height="2" :value="25" color="red" title="Claim"/>
                            <t-progress :height="3" :value="50" color="yellow" title="Cost"/>
                            <t-progress :height="4" :value="75" color="blue" title="Man Hour"/>
                            <t-progress :height="5" :value="90" color="indigo" title="Lost"/>
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
import TProgress from "@/Components/Progress/TProgress";
import TTable from "@/Components/Table/TTable";
/*Codehighlighter*/
import SshPre from "simple-syntax-highlighter";
import "simple-syntax-highlighter/dist/sshpre.css";

export default {
    name: "Progress",
    components: {TProgress, TContentCard, GridSection, AppLayout, SshPre, TTable},
    data() {
        return {
            sampleCode: {
                html:
                    '<t-progress title="Man Hour" :value="75" color="blue" :height="4"/>',
                js:
                    'import TProgress from "@/Components/Progress/TProgress";' +
                    '\n' +
                    'export default {\n' +
                    '  name: "Progress",\n' +
                    '  components: {TProgress},\n' +
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
                            details: 'You want to what ever'
                        },
                        {
                            variable: ':value',
                            type: 'Number',
                            details: 'It must be between 1 and 100'
                        },
                        {
                            variable: "color",
                            type: "String",
                            details: "Your progress bar color theme.<br><b>Options:</b> red,blue,green,yellow,indigo,pink,purple,gray,black,white. <b>Default:</b> green"
                        },

                        {
                            variable: ":height",
                            type: "Number",
                            details: "It's line height <br><b>Options:</b> 1,2,3,4,5. <b>Default:</b> 3"
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
