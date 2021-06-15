<template>
    <app-layout>
        <template #header>
            Collapsible Content
        </template>
        <template #subHeader>

        </template>
        <template #default>
            <grid-section col="2" gap="4">
                <t-content-card width="1">
                    <!--Simple-->
                    <template #title>
                        Simple
                    </template>
                    <template #subTitle>
                        Radius size "0"
                    </template>
                    <template #content>
                        <t-collapsible>
                            <!--First Item-->
                            <t-collapsible-item>
                                <template #title>
                                    Title
                                </template>
                                <template #content>
                                    Content
                                </template>
                            </t-collapsible-item>
                            <!--Second Item-->
                            <t-collapsible-item>
                                <template #title>
                                    Title
                                </template>
                                <template #content>
                                    Content
                                </template>
                            </t-collapsible-item>
                            <!--Third Item-->
                            <t-collapsible-item>
                                <template #title>
                                    Title
                                </template>
                                <template #content>
                                    Content
                                </template>
                            </t-collapsible-item>
                            <!--Fourth Item-->
                            <t-collapsible-item>
                                <template #title>
                                    Title
                                </template>
                                <template #content>
                                    Content
                                </template>
                            </t-collapsible-item>
                        </t-collapsible>
                    </template>
                </t-content-card>
                <!--Colorful-->
                <t-content-card width="1">
                    <template #title>
                        Colorful
                    </template>
                    <template #subTitle>
                        Radius size "3"
                    </template>
                    <template #content>
                        <t-collapsible :radius="3">
                            <!--First Item-->
                            <t-collapsible-item color="red">
                                <template #title>
                                    Red
                                </template>
                                <template #content>
                                    Content
                                </template>
                            </t-collapsible-item>
                            <!--Second Item-->
                            <t-collapsible-item color="blue">
                                <template #title>
                                    Blue
                                </template>
                                <template #content>
                                    Content
                                </template>
                            </t-collapsible-item>
                            <!--Third Item-->
                            <t-collapsible-item color="yellow">
                                <template #title>
                                    Yellow
                                </template>
                                <template #content>
                                    Content
                                </template>
                            </t-collapsible-item>
                            <!--Fourth Item-->
                            <t-collapsible-item color="purple">
                                <template #title>
                                    Purple
                                </template>
                                <template #content>
                                    Content
                                </template>
                            </t-collapsible-item>
                        </t-collapsible>
                    </template>
                </t-content-card>
                <!--Icons-->
                <t-content-card width="1">
                    <template #title>
                        With Icon
                    </template>
                    <template #subTitle>
                        Radius size "5", FontAwesome Library
                    </template>
                    <template #content>
                        <t-collapsible :radius="5">
                            <!--First Item-->
                            <t-collapsible-item color="red">
                                <template #title>
                                    <font-awesome-icon icon="shopping-bag"/>
                                    Red
                                </template>
                                <template #content>
                                    Content
                                </template>
                            </t-collapsible-item>
                            <!--Second Item-->
                            <t-collapsible-item color="blue">
                                <template #title>
                                    <font-awesome-icon icon="tv"/>
                                    Blue
                                </template>
                                <template #content>
                                    Content
                                </template>
                            </t-collapsible-item>
                            <!--Third Item-->
                            <t-collapsible-item color="yellow">
                                <template #title>
                                    <font-awesome-icon icon="tasks"/>
                                    Yellow
                                </template>
                                <template #content>
                                    Content
                                </template>
                            </t-collapsible-item>
                            <!--Fourth Item-->
                            <t-collapsible-item color="purple">
                                <template #title>
                                    <font-awesome-icon icon="envelope"/>
                                    Purple
                                </template>
                                <template #content>
                                    Content
                                </template>
                            </t-collapsible-item>
                        </t-collapsible>
                    </template>
                </t-content-card>
                <!--Align-->
                <t-content-card width="1">
                    <template #title>
                        With Title Align
                    </template>
                    <template #subTitle>
                        Radius size "7"
                    </template>
                    <template #content>
                        <t-collapsible :radius="7">
                            <!--Default Item-->
                            <t-collapsible-item color="black">
                                <template #title>
                                    <font-awesome-icon icon="chart-bar"/>
                                    Default, non-added align indicator
                                </template>
                                <template #content>
                                    Content
                                </template>
                            </t-collapsible-item>
                            <!--First Item-->
                            <t-collapsible-item align="left" color="white">
                                <template #title>
                                    <font-awesome-icon icon="shopping-bag"/>
                                    Left
                                </template>
                                <template #content>
                                    Content
                                </template>
                            </t-collapsible-item>
                            <!--Second Item-->
                            <t-collapsible-item align="center" color="blue">
                                <template #title>
                                    <font-awesome-icon icon="tv"/>
                                    Center
                                </template>
                                <template #content>
                                    Content
                                </template>
                            </t-collapsible-item>
                            <!--Third Item-->
                            <t-collapsible-item align="right" color="yellow">
                                <template #title>
                                    <font-awesome-icon icon="tasks"/>
                                    Right
                                </template>
                                <template #content>
                                    Content
                                </template>
                            </t-collapsible-item>
                        </t-collapsible>
                    </template>
                </t-content-card>
            </grid-section>
            <!--Sample Codes-->
            <ssh-pre :copy-button="true" label="Code" language="html">{{ sampleCode.html }}</ssh-pre>
            <ssh-pre :copy-button="true" label="JS" language="js">{{ sampleCode.js }}</ssh-pre>
            <!--Variables Table-->
            <t-table :content="sampleCode.table.content" :header="sampleCode.table.header" class="mt-5" color="blue"/>
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
                    '    <t-collapsible-item align="right" color="red">\n' +
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
                    '    <t-collapsible-item align="left" color="blue">\n' +
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
                            variable: "color",
                            type: "String",
                            details: "Your collapsible item color theme.<br><b>Options:</b> red,blue,green,yellow,indigo,pink,purple,gray,black,white"
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
