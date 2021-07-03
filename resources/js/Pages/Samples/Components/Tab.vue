<template>
    <app-layout>
        <template #header>
            Tabs
        </template>
        <template #subHeader>
            Multi content in single area
        </template>
        <template #default>
            <grid-section col="2" gap="4">
                <!--Simple-->
                <t-content-card :width="1">
                    <template #title>
                        Simple Tabs
                    </template>
                    <template #subTitle>
                        Default, without color and radius
                    </template>
                    <template #content>
                        <t-tab>
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
                                Suspendisse efficitur aliquet elit, a congue dui dignissim at. Quisque pellentesque
                                volutpat sem a
                                tincidunt. Pellentesque id tristique erat. Curabitur scelerisque blandit quam.
                            </t-tab-item>
                        </t-tab>
                    </template>
                </t-content-card>
                <!--With Color-->
                <t-content-card :width="1">
                    <template #title>With color</template>
                    <template #subTitle>
                        10 different colors
                        <!--Color selector-->
                        <ul class="flex justify-center mt-4 w-full">
                            <li class="flex bg-red-500 py-1 px-2 w-full rounded-l items-center flex justify-center cursor-pointer"
                                @click="tabColor='red'">
                                <div v-if="tabColor==='red'"
                                     class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">
                                    Red
                                </div>
                            </li>
                            <li class="flex bg-blue-500 py-1 px-2 w-full items-center flex justify-center cursor-pointer"
                                @click="tabColor='blue'">
                                <div v-if="tabColor==='blue'"
                                     class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">
                                    Blue
                                </div>
                            </li>
                            <li class="flex bg-green-500 py-1 px-2 w-full items-center flex justify-center cursor-pointer"
                                @click="tabColor='green'">
                                <div v-if="tabColor==='green'"
                                     class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">
                                    Green
                                </div>
                            </li>
                            <li class="flex bg-yellow-500 py-1 px-2 w-full items-center flex justify-center cursor-pointer"
                                @click="tabColor='yellow'">
                                <div v-if="tabColor==='yellow'"
                                     class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">
                                    Yellow
                                </div>
                            </li>
                            <li class="flex bg-indigo-500 py-1 px-2 w-full items-center flex justify-center cursor-pointer"
                                @click="tabColor='indigo'">
                                <div v-if="tabColor==='indigo'"
                                     class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">
                                    Indigo
                                </div>
                            </li>
                            <li class="flex bg-pink-500 py-1 px-2 w-full items-center flex justify-center cursor-pointer"
                                @click="tabColor='pink'">
                                <div v-if="tabColor==='pink'"
                                     class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">
                                    Pink
                                </div>
                            </li>
                            <li class="flex bg-purple-500 py-1 px-2 w-full items-center flex justify-center cursor-pointer"
                                @click="tabColor='purple'">
                                <div v-if="tabColor==='purple'"
                                     class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">
                                    Purple
                                </div>
                            </li>
                            <li :class="{'bg-gray-600' : tabColor === 'black'}"
                                class="flex bg-black py-1 px-2 w-full items-center flex justify-center cursor-pointer"
                                @click="tabColor='black'">
                                <div v-if="tabColor==='black'"
                                     class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">
                                    Black
                                </div>
                            </li>
                            <li class="flex bg-gray-500 py-1 px-2 w-full items-center flex justify-center cursor-pointer"
                                @click="tabColor='gray'">
                                <div v-if="tabColor==='gray'"
                                     class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">
                                    Gray
                                </div>
                            </li>
                            <li class="flex bg-white border py-1 px-2 w-full rounded-r items-center flex justify-center cursor-pointer"
                                @click="tabColor='white'">
                                <div v-if="tabColor==='white'"
                                     class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">
                                    White
                                </div>
                            </li>
                        </ul>
                    </template>
                    <template #content>
                        <t-tab :color="tabColor">
                            <!--Tab 1-->
                            <t-tab-item title="Tab1" @set-id="set-id">
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
                                Suspendisse efficitur aliquet elit, a congue dui dignissim at. Quisque pellentesque
                                volutpat sem a
                                tincidunt. Pellentesque id tristique erat. Curabitur scelerisque blandit quam.
                            </t-tab-item>
                        </t-tab>
                    </template>
                </t-content-card>
                <!--With Radius and Style 1-->
                <t-content-card :width="1">
                    <template #title>With radius and Style 1</template>
                    <template #subTitle>
                        9 different radius sizes
                        <ul class="flex justify-center gap-2 mt-4">
                            <li :class="tabRadius === 0 && 'bg-green-500 text-white'"
                                class="bg-gray-300 p-2 items-center flex justify-center cursor-pointer hover:bg-green-300 hover:text-gray-600"
                                @click="tabRadius=0">
                                <div class="flex font-semibold justify-center items-center w-5 h-5 z-10">0</div>
                            </li>
                            <li :class="tabRadius === 1 && 'bg-green-500 text-white'"
                                class="bg-gray-300 rounded-sm p-2 items-center flex justify-center cursor-pointer hover:bg-green-300 hover:text-gray-600"
                                @click="tabRadius=1">
                                <div class="flex font-semibold justify-center items-center w-5 h-5 z-10">1</div>
                            </li>
                            <li :class="tabRadius === 2 && 'bg-green-500 text-white'"
                                class="bg-gray-300 rounded p-2 items-center flex justify-center cursor-pointer hover:bg-green-300 hover:text-gray-600"
                                @click="tabRadius=2">
                                <div class="flex font-semibold justify-center items-center w-5 h-5 z-10">2</div>
                            </li>
                            <li :class="tabRadius === 3 && 'bg-green-500 text-white'"
                                class="bg-gray-300 rounded-md p-2 items-center flex justify-center cursor-pointer hover:bg-green-300 hover:text-gray-600"
                                @click="tabRadius=3">
                                <div class="flex font-semibold justify-center items-center w-5 h-5 z-10">3</div>
                            </li>
                            <li :class="tabRadius === 4 && 'bg-green-500 text-white'"
                                class="bg-gray-300 rounded-lg p-2 items-center flex justify-center cursor-pointer hover:bg-green-300 hover:text-gray-600"
                                @click="tabRadius=4">
                                <div class="flex font-semibold justify-center items-center w-5 h-5 z-10">4</div>
                            </li>
                            <li :class="tabRadius === 5 && 'bg-green-500 text-white'"
                                class="bg-gray-300 rounded-xl p-2 rounded-2xl items-center flex justify-center cursor-pointer hover:bg-green-300 hover:text-gray-600"
                                @click="tabRadius=5">
                                <div class="flex font-semibold justify-center items-center w-5 h-5 z-10">5</div>
                            </li>
                            <li :class="tabRadius === 6 && 'bg-green-500 text-white'"
                                class="bg-gray-300 rounded-2xl p-2 items-center flex justify-center cursor-pointer hover:bg-green-300 hover:text-gray-600"
                                @click="tabRadius=6">
                                <div class="flex font-semibold justify-center items-center w-5 h-5 z-10">6</div>
                            </li>
                            <li :class="tabRadius === 7 && 'bg-green-500 text-white'"
                                class="bg-gray-300 rounded-3xl p-2 items-center flex justify-center cursor-pointer hover:bg-green-300 hover:text-gray-600"
                                @click="tabRadius=7">
                                <div class="flex font-semibold justify-center items-center w-5 h-5 z-10">7</div>
                            </li>
                            <li :class="tabRadius === 8 && 'bg-green-500 text-white'"
                                class="bg-gray-300 p-2 rounded-full items-center flex justify-center cursor-pointer hover:bg-green-300 hover:text-gray-600"
                                @click="tabRadius=8">
                                <div class="flex font-semibold justify-center items-center w-5 h-5 z-10">8</div>
                            </li>
                        </ul>
                    </template>
                    <template #content>
                        <t-tab :radius="tabRadius" :tab-style="1" color="red">
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
                                Suspendisse efficitur aliquet elit, a congue dui dignissim at. Quisque pellentesque
                                volutpat sem a
                                tincidunt. Pellentesque id tristique erat. Curabitur scelerisque blandit quam.
                            </t-tab-item>
                        </t-tab>
                    </template>
                </t-content-card>
                <!--With Color and Style 2-->
                <t-content-card :width="1">
                    <template #title>
                        With color, active and Style 2
                    </template>
                    <template #subTitle>
                        :active="1"
                        <!--Color selector-->
                        <ul class="flex justify-center mt-4 w-full">
                            <li class="flex bg-red-500 py-1 px-2 w-full rounded-l items-center flex justify-center cursor-pointer"
                                @click="tabColor2='red'">
                                <div v-if="tabColor2==='red'"
                                     class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">
                                    Red
                                </div>
                            </li>
                            <li class="flex bg-blue-500 py-1 px-2 w-full items-center flex justify-center cursor-pointer"
                                @click="tabColor2='blue'">
                                <div v-if="tabColor2==='blue'"
                                     class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">
                                    Blue
                                </div>
                            </li>
                            <li class="flex bg-green-500 py-1 px-2 w-full items-center flex justify-center cursor-pointer"
                                @click="tabColor2='green'">
                                <div v-if="tabColor2==='green'"
                                     class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">
                                    Green
                                </div>
                            </li>
                            <li class="flex bg-yellow-500 py-1 px-2 w-full items-center flex justify-center cursor-pointer"
                                @click="tabColor2='yellow'">
                                <div v-if="tabColor2==='yellow'"
                                     class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">
                                    Yellow
                                </div>
                            </li>
                            <li class="flex bg-indigo-500 py-1 px-2 w-full items-center flex justify-center cursor-pointer"
                                @click="tabColor2='indigo'">
                                <div v-if="tabColor2==='indigo'"
                                     class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">
                                    Indigo
                                </div>
                            </li>
                            <li class="flex bg-pink-500 py-1 px-2 w-full items-center flex justify-center cursor-pointer"
                                @click="tabColor2='pink'">
                                <div v-if="tabColor2==='pink'"
                                     class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">
                                    Pink
                                </div>
                            </li>
                            <li class="flex bg-purple-500 py-1 px-2 w-full items-center flex justify-center cursor-pointer"
                                @click="tabColor2='purple'">
                                <div v-if="tabColor2==='purple'"
                                     class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">
                                    Purple
                                </div>
                            </li>
                            <li :class="{'bg-gray-600' : tabColor2 === 'black'}"
                                class="flex bg-black py-1 px-2 w-full items-center flex justify-center cursor-pointer"
                                @click="tabColor2='black'">
                                <div v-if="tabColor2==='black'"
                                     class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">
                                    Black
                                </div>
                            </li>
                            <li class="flex bg-gray-500 py-1 px-2 w-full items-center flex justify-center cursor-pointer"
                                @click="tabColor2='gray'">
                                <div v-if="tabColor2==='gray'"
                                     class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">
                                    Gray
                                </div>
                            </li>
                            <li class="flex bg-white border py-1 px-2 w-full rounded-r items-center flex justify-center cursor-pointer"
                                @click="tabColor2='white'">
                                <div v-if="tabColor2==='white'"
                                     class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">
                                    White
                                </div>
                            </li>
                        </ul>
                    </template>
                    <template #content>
                        <t-tab :color="tabColor2" :radius="5" :tab-style="2" :active="2">
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
                                Suspendisse efficitur aliquet elit, a congue dui dignissim at. Quisque pellentesque
                                volutpat sem a
                                tincidunt. Pellentesque id tristique erat. Curabitur scelerisque blandit quam.
                            </t-tab-item>
                        </t-tab>
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
import TTab from "@/Components/Tab/TTab";
import TTabItem from "@/Components/Tab/TTabItem";
import TTable from "@/Components/Table/TTable";
/*Codehighlighter*/
import SshPre from "simple-syntax-highlighter";
import "simple-syntax-highlighter/dist/sshpre.css";

export default {
    name: "Tab",
    components: {AppLayout, GridSection, SshPre, TContentCard, TTab, TTable, TTabItem},
    data() {
        return {
            tabColor: 'blue',
            tabColor2: 'pink',
            tabRadius: 0,
            sampleCode: {
                html:
                    '<t-tab color="red" :radius="3" :tab-style="2" :active="2">\n' +
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
                            details: 'You can change sub label color <br><b>Options:</b> red, blue, green, yellow, indigo, pink, purple, gray, black, white <b>Options:</b> white'
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
