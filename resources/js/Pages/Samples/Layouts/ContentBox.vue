<template>
    <app-layout>
        <template #header></template>
        <template #subHeader></template>
        <template #default>
            <grid-section :col="3" :gap="4">
                <!--Without Title : Code 1-->
                <t-content-card :width="2" :border="true">
                    <template #content>
                        Without Title and With Border <br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        dapibus metus enim. In vestibulum sit amet felis vitae ornare. Sed
                        posuere, mauris et dapibus tincidunt, turpis risus lacinia dolor,
                        sit amet ornare odio orci nec ipsum. Maecenas molestie ornare
                        molestie.
                    </template>
                </t-content-card>
                <!--With Title : Code 2-->
                <t-content-card :width="1">
                    <template #title>
                        With Title and Without Border
                    </template>
                    <template #content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        dapibus metus enim. In vestibulum sit amet felis vitae ornare. Sed
                        posuere, mauris et dapibus tincidunt, turpis risus lacinia dolor,
                        sit amet ornare odio orci nec ipsum. Maecenas molestie ornare
                        molestie.
                    </template>
                </t-content-card>
                <!--With Title and Subtitle : Code 3-->
                <t-content-card :width="1">
                    <template #title>
                        With Title and Sub Title
                    </template>
                    <template #subTitle>
                        This is a sub title
                    </template>
                    <template #content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        dapibus metus enim. In vestibulum sit amet felis vitae ornare. Sed
                        posuere, mauris et dapibus tincidunt, turpis risus lacinia dolor,
                        sit amet ornare odio orci nec ipsum. Maecenas molestie ornare
                        molestie.
                    </template>
                </t-content-card>
                <!--With separator : Code 4-->
                <t-content-card :line="true" :width="2">
                    <template #title>
                        With Line Separator
                    </template>
                    <template #content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        dapibus metus enim. In vestibulum sit amet felis vitae ornare. Sed
                        posuere, mauris et dapibus tincidunt, turpis risus lacinia dolor,
                        sit amet ornare odio orci nec ipsum. Maecenas molestie ornare
                        molestie.
                    </template>
                </t-content-card>
                <!--With Radius and : Code 5-->
                <t-content-card :radius="cardRadius" :border="true" color="blue" :width="1">
                    <template #title>
                        With corner radius and border
                    </template>
                    <template #subTitle>
                        9 different radius sizes
                    </template>
                    <template #content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        dapibus metus enim. In vestibulum sit amet felis vitae ornare. Sed
                        posuere, mauris et dapibus tincidunt, turpis risus lacinia dolor,
                        sit amet ornare odio orci nec ipsum. Maecenas molestie ornare
                        molestie.
                        <ul class="flex w-full justify-center gap-2 mt-4 text-gray-500">
                            <li :class="cardRadius === 0 ? 'bg-green-400 border-green-700 text-white font-bold' : 'bg-white border-gray-400'"
                                class="border-4 w-10 h-10 p-2 items-center flex justify-center cursor-pointer"
                                @click="cardRadius=0">0
                            </li>
                            <li :class="cardRadius === 1 ? 'rounded-sm bg-green-400 border-green-700 text-white font-bold' : 'bg-white border-gray-400'"
                                class="border-4 w-10 h-10 p-2 items-center flex justify-center cursor-pointer"
                                @click="cardRadius=1">1
                            </li>
                            <li :class="cardRadius === 2 ? 'rounded bg-green-400 border-green-700 text-white font-bold' : 'bg-white border-gray-400'"
                                class="border-4 w-10 h-10 p-2 items-center flex justify-center cursor-pointer"
                                @click="cardRadius=2">2
                            </li>
                            <li :class="cardRadius === 3 ? 'rounded-md bg-green-400 border-green-700 text-white font-bold' : 'bg-white border-gray-400'"
                                class="border-4 w-10 h-10 p-2 items-center flex justify-center cursor-pointer"
                                @click="cardRadius=3">3
                            </li>
                            <li :class="cardRadius === 4 ? 'rounded-lg bg-green-400 border-green-700 text-white font-bold' : 'bg-white border-gray-400'"
                                class="border-4 w-10 h-10 p-2 items-center flex justify-center cursor-pointer"
                                @click="cardRadius=4">4
                            </li>
                            <li :class="cardRadius === 5 ? 'rounded-xl bg-green-400 border-green-700 text-white font-bold' : 'bg-white border-gray-400'"
                                class="border-4 w-10 h-10 p-2 items-center flex justify-center cursor-pointer"
                                @click="cardRadius=5">5
                            </li>
                            <li :class="cardRadius === 6 ? 'rounded-2xl bg-green-400 border-green-700 text-white font-bold' : 'bg-white border-gray-400'"
                                class="border-4 w-10 h-10 p-2 items-center flex justify-center cursor-pointer"
                                @click="cardRadius=6">6
                            </li>
                            <li :class="cardRadius === 7 ? 'rounded-3xl bg-green-400 border-green-700 text-white font-bold' : 'bg-white border-gray-400'"
                                class="border-4 w-10 h-10 p-2 items-center flex justify-center cursor-pointer"
                                @click="cardRadius=7">7
                            </li>
                            <li :class="cardRadius === 8 ? 'rounded-full bg-green-400 border-green-700 text-white font-bold' : 'bg-white border-gray-400'"
                                class="border-4 w-10 h-10 p-2 items-center flex justify-center cursor-pointer"
                                @click="cardRadius=8">8
                            </li>
                        </ul>
                    </template>
                </t-content-card>
                <!--With Background Color : Code 6-->
                <t-content-card :color="selectedColor" :line="true" :width="2">
                    <template #title>
                        Changeable Backgrounds
                    </template>
                    <template #subTitle>
                        Solid, Light and Gradient Options
                    </template>
                    <template #content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        dapibus metus enim. In vestibulum sit amet felis vitae ornare. Sed
                        posuere, mauris et dapibus tincidunt, turpis risus lacinia dolor,
                        sit amet ornare odio orci nec ipsum. Maecenas molestie ornare
                        molestie.
                        <div class="flex justify-center w-full mt-6">
                            <t-component-color-selector @selected-color="selectedColor = $event"/>
                        </div>
                    </template>
                </t-content-card>
                <!--With Width : Code 7-->
                <t-content-card :width="cardWidth">
                    <template #title>
                        Changeable Width
                    </template>
                    <template #subTitle>
                        It works only on the desktops
                    </template>
                    <template #content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        dapibus metus enim. In vestibulum sit amet felis vitae ornare. Sed
                        posuere, mauris et dapibus tincidunt, turpis risus lacinia dolor,
                        sit amet ornare odio orci nec ipsum. Maecenas molestie ornare
                        molestie.
                        <div class="text-lg font-bold text-center">

                        </div>
                        <ul class="flex w-full justify-center gap-2 mt-4">
                            <li :class="cardWidth == 1 ? 'bg-green-400 text-white border-green-500 font-semibold' : 'bg-white border-gray-400'"
                                class="border p-2 w-7 h-7 rounded-full items-center flex justify-center cursor-pointer"
                                @click="cardWidth='1'">
                                1
                            </li>
                            <li :class="cardWidth == 2 ? 'bg-green-400 text-white border-green-500 font-semibold' : 'bg-white border-gray-400'"
                                class="border bp-2 w-7 h-7 rounded-full items-center flex justify-center cursor-pointer"
                                @click="cardWidth='2'">
                                2
                            </li>
                            <li :class="cardWidth == 3 ? 'bg-green-400 text-white border-green-500 font-semibold' : 'bg-white border-gray-400'"
                                class="border bg-p-2 w-7 h-7 rounded-full items-center flex justify-center cursor-pointer"
                                @click="cardWidth='3'">
                                3
                            </li>
                        </ul>
                    </template>
                </t-content-card>
            </grid-section><!--Sample Codes-->
            <ssh-pre :copy-button="true" label="Code" language="html">{{ sampleCode.html }}</ssh-pre>
            <ssh-pre :copy-button="true" label="JS" language="js">{{ sampleCode.js }}</ssh-pre>
            <!--Variables Table-->
            <t-table :content="sampleCode.table.content" :header="sampleCode.table.header" class="mt-5" color="blue" :searchable="['variable','details']"/>
        </template>
    </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import SshPre from "simple-syntax-highlighter";
import 'simple-syntax-highlighter/dist/sshpre.css'
import GridSection from "@/Layouts/GridSection";
import TContentCard from "@/Components/Card/TContentCard";
import TComponentColorSelector from "@/Components/Misc/TComponentColorSelector";
import TTable from "@/Components/Table/TTable";

export default {
    name: "ContentBox",
    components: {TTable, TComponentColorSelector, TContentCard, GridSection, AppLayout, SshPre},
    data() {
        return {
            selectedColor: 'gradient-purple-to-pink',
            cardRadius: 2,
            cardWidth: 3,
            sampleCode: {
                html:
                    '<t-content-card\n' +
                    '    :color="gradient-purple-to-pink"\n' +
                    '    :radius="3"\n' +
                    '    :line="true"\n' +
                    '    :border="true"\n' +
                    '    :width="2"\n' +
                    '    >\n' +
                    '        <template #title>\n' +
                    '            Title Text\n' +
                    '        </template>\n' +
                    '        <template #subTitle>\n' +
                    '            Subtitle Text\n' +
                    '        </template>\n' +
                    '        <template #content>\n' +
                    '           Content Area\n' +
                    '        </template>\n' +
                    '</t-content-card>',
                js:
                    'import TContentCard from "@/Components/Card/TContentCard";' +
                    '\n' +
                    'export default {\n' +
                    '  name: "ContentCard",\n' +
                    '  components: {TContentCard},\n' +
                    '  }',
                table: {
                    header: [
                        {key: 'variable', label: 'Variable'},
                        {key: 'type', label: 'Value Type'},
                        {key: 'details', label: 'Details'},
                    ],
                    content: [
                        {variable: 'show', type: 'Boolean', details: 'You should define a variable in the data and connect to this data'},
                        {
                            variable: 'color',
                            type: 'String',
                            details: "Your content box color theme.<br><b>Options Simple:</b> red, blue, green, yellow, indigo, pink, purple, gray, black, white,<br>" +
                                "<b>Options Light:</b> light-red, light-blue, light-green, light-yellow, light-indigo, light-pink, light-purple, light-gray<br" +
                                "><b>Options Gradient:</b> gradient-red-to-pink. Red is first color and Pink is second color. You change red end pink with red, blue, green, yellow, indigo, pink, purple and gray)"
                        },
                        {
                            variable: ":radius",
                            type: "Number",
                            details: "<b>Options:</b> none, 1, 2, 3, 4, 5, 6, 7, 8"
                        },
                        {
                            variable: ":line",
                            type: "Number",
                            details: "If you want to separate the header and the content area with a line, You can use to this variable<b>Options:</b> true, false<b> Default:</b> false"
                        },
                        {
                            variable: ":border",
                            type: "Number",
                            details: "If you want to show a border around of the content box, You can use to this variable<b>Options:</b> true, false<b> Default:</b> false"
                        },
                        {
                            variable: ":width",
                            type: "Number",
                            details: "The width of the content box. <b>Options:</b> From 1 to maximum of column size. Example If you use to grid component, you can give to maximum value that col size of the grid. If you don'\ use the grid component, your content area 12 columns and you can give the value from 1 to 12"
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
