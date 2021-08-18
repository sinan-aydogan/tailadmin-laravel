<template>
    <app-layout>
        <template #header>Toaster Notifications</template>
        <template #subHeader>Elegant and simple notifications bubbles</template>
        <template #default>
            <t-form-content>
                <t-form-section
                    description="You can customize toaster notfication to demo"
                    title="Toaster Customizer"
                >
                    <t-input-group label-for="timer" label="Timer" class="col-span-12 md:col-span-6">
                        <t-input-text id="timer" placeholder="3000"/>
                    </t-input-group>
                    <t-input-group label-for="timer" label="Timer" class="col-span-12 md:col-span-6">
                        <t-input-select>
                            <t-input-select-item v-for="item in colorOptions" :key="item.key">

                            </t-input-select-item>
                        </t-input-select>
                    </t-input-group>
                </t-form-section>
            </t-form-content>
            <!--Sample Codes-->
            <ssh-pre :copy-button="true" label="Code" language="html">{{ sampleCode.html }}</ssh-pre>
            <ssh-pre :copy-button="true" label="JS" language="js">{{ sampleCode.js }}</ssh-pre>
            <!--Variables Table-->
            <t-table :content="sampleCode.table.content" :header="sampleCode.table.header" :searchable="['variable','details']" class="mt-5"
                     color="blue"/>
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
import TAlert from "@/Components/Alert/TAlert";
/*Codehighlighter*/
import "simple-syntax-highlighter/dist/sshpre.css";
import SshPre from "simple-syntax-highlighter";
import TFormSection from "@/Components/Form/TFormSection";
import TFormContent from "@/Components/Form/TFormContent";
import TInputGroup from "@/Components/Form/TInputGroup";
import TInputText from "@/Components/Form/Inputs/TInputText";
import TInputSelect from "@/Components/Form/Inputs/TInputSelect";

export default {
    name: "Toaster",
    components: {
        TInputSelectItem,
        TInputSelect,
        TInputText,
        TInputGroup,
        TFormContent, TFormSection, TTable, TButton, TContentCard, GridSection, AppLayout, SshPre, TAlert},
    data() {
        return {
            colorOptions : {
                'red': {
                    label: 'Red',
                    alertStyle: "bg-red-200 border-red-500 text-red-700 shadow-sm"
                },
                'blue': {
                    label: 'Blue',
                    alertStyle: "bg-blue-200 border-blue-500 text-blue-700 shadow-sm"
                },
                'green': {
                    label: 'Green',
                    alertStyle: "bg-green-200 border-green-500 text-green-700 shadow-sm"
                },
                'yellow': {
                    label: 'Yellow',
                    alertStyle: "bg-yellow-200 border-yellow-500 text-yellow-700 shadow-sm"
                },
                'indigo': {
                    label: 'Indigo',
                    alertStyle: "bg-indigo-200 border-indigo-500 text-indigo-700 shadow-sm"
                },
                'purple': {
                    label: 'Purple',
                    alertStyle: "bg-purple-200 border-purple-500 text-purple-700 shadow-sm"
                },
                'pink': {
                    label: 'Pink',
                    alertStyle: "bg-pink-200 border-pink-500 text-pink-700 shadow-sm"
                },
                'white': {
                    label: 'White',
                    alertStyle: "bg-white border-gray-300 shadow-sm"
                },
                'gray': {
                    label: 'Gray',
                    alertStyle: "bg-gray-200 border-gray-500 text-gray-700 shadow-sm"
                },
                'black': {
                    label: 'Black',
                    alertStyle: "bg-gray-700 border-black text-gray-200 shadow-sm"
                },
            },
            sampleCode: {
                html:
                    '<t-alert color="indigo" :border="true" :closeable="true" :radius="5" :timer="500" position="rb">\n' +
                    "    <b>Colorful toaster / notification</b>\n" +
                    "</t-alert>",
                js:
                    'import TAlert from "@/Components/Alert/TAlert";";\n\n' +
                    "export default {\n" +
                    '  name: "Notification",\n' +
                    "  components: {TAlert},\n" +
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
                            details: "Your alert box color theme.<br><b>Options:</b> red,blue,green,yellow,indigo,pink,purple,gray,black,white"
                        },
                        {
                            variable: ":radius",
                            type: "Number",
                            details: "<b>Options:</b> none, 1, 2, 3, 4, 5, 6, 7, 8"
                        },
                        {
                            variable: ":border",
                            type: "Boolean",
                            details: "Show with a border"
                        },
                        {
                            variable: ":closeable",
                            type: "Boolean",
                            details: "Show a close button on the top right"
                        },
                        {
                            variable: ":timer",
                            type: "Number",
                            details:
                                "This value is milisecond, you can enter 1000"
                        },
                        {
                            variable: "position",
                            type: "String",
                            details: "If you use the toaster notification, you can use. It's toaster notification position <br><b>Options:</b> lb, rb, lt, rt <small><br>(Means: l:left,r:right,b:bottom,t:top)</small>"
                        }
                    ]
                }
            }
        }
    },
    methods: {
        toastAlert() {
            this.$page.props.flash.toastr = {
                color: 'red',
                position: '',
                closeable: true,
                timer: 6000,
                content: 'Selam ben bir uyarı kutusuyum'
            }
            console.log(this.$page.props.flash.toastr)
        }
    }
}
</script>

<style scoped>

</style>
