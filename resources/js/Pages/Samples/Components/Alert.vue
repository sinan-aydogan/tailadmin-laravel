<template>
    <app-layout>
        <template #header>Alerts</template>
        <template #subHeader>Notifications and alert boxes (2.880 variations)</template>
        <template #default>
            <grid-section col="3" gap="4">
                <!--With Color-->
                <t-content-card width="3">
                    <template #title>Alert Box Colors</template>
                    <template #subTitle>10 different colors</template>
                    <template #content>
                        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
                            <t-alert v-for="(i,index) in colors" :key="index" :color="i" :radius="3">
                                <font-awesome-icon slot="icon" icon="check" size="lg"/>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </t-alert>
                        </div>
                    </template>
                </t-content-card>
                <!--With Radius-->
                <t-content-card width="3">
                    <template #title>Alert Box Radius</template>
                    <template #subTitle>9 different radius sizes</template>
                    <template #content>
                        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
                            <t-alert color="red">
                                <font-awesome-icon slot="icon" icon="info-circle" size="lg"/>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </t-alert>
                            <t-alert v-for="(i,index) in 8" :key="index" :color="colors[i]" :radius="i">
                                <font-awesome-icon slot="icon" icon="info-circle" size="lg"/>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </t-alert>
                        </div>
                    </template>
                </t-content-card>
                <!--With Border-->
                <t-content-card width="3">
                    <template #title>Alert Box Border</template>
                    <template #content>
                        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
                            <t-alert :border="true" color="red">
                                <font-awesome-icon slot="icon" icon="check" size="lg"/>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </t-alert>
                            <t-alert color="red">
                                <font-awesome-icon slot="icon" icon="check" size="lg"/>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </t-alert>
                        </div>
                    </template>
                </t-content-card>
                <!--With Close Button-->
                <t-content-card width="3">
                    <template #title>Alert Box Close Button</template>
                    <template #content>
                        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
                            <t-alert v-for="(i,index) in 3" :key="index" :border="true" :closeable="true"
                                     :color="colors[i]" :radius="3">
                                <font-awesome-icon slot="icon" icon="check" size="lg"/>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </t-alert>
                        </div>
                    </template>
                </t-content-card>
                <!--With Timer-->
                <t-content-card width="3">
                    <template #title>Alert Box Timer</template>
                    <template #subTitle>Timer for close</template>
                    <template #content>
                        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
                            <t-alert :radius="5" :timer="4000" color="gray">
                                Closer timer activated, alert box. (<b>Time:</b>4 seconds)
                            </t-alert>
                            <component
                                :is="'t-alert'"
                                v-if="newAlert"
                                :key="newAlertID"
                                :radius="5"
                                :timer="3000"
                                color="gray"
                            >
                                Closer timer activated, alert box. (<b>Time:</b>4 seconds)
                            </component>
                            <t-button :radius="5" color="green" size="full" @click.native="addAlertBox">
                                Recall Closed Alert Box
                            </t-button>
                        </div>
                    </template>
                </t-content-card>
                <t-content-card width="3">
                    <template #title>Toaster Alert</template>
                    <template #content>
                        <div class="flex flex-row gap-4">
                            <component
                                :is="'t-alert'"
                                v-if="toasterPosition"
                                :key="newToasterID"
                                :closeable="true"
                                :position="toasterPosition"
                                :radius="5"
                                color="indigo"
                            >
                                Hi, I'm a toaster notification
                            </component>
                            <t-button :radius="8" color="green" @click.native="toasterPosition= 'lt'; toastAlert;">
                                Left-Top
                            </t-button>
                            <t-button :radius="8" color="green" @click.native="toasterPosition= 'lb'; toastAlert;">
                                Left-Bottom
                            </t-button>
                            <t-button :radius="8" color="blue" @click.native="toasterPosition= 'rt'; toastAlert;">
                                Right-Top
                            </t-button>
                            <t-button :radius="8" color="blue" @click.native="toasterPosition= 'rb'; toastAlert;">
                                Right-Bottom
                            </t-button>
                        </div>
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
import TAlert from "@/Components/Alert/TAlert";
import TButton from "@/Components/Button/TButton";
import TContentCard from "@/Components/Card/TContentCard";
import TTable from "@/Components/Table/TTable";
/*Codehighlighter*/
import "simple-syntax-highlighter/dist/sshpre.css";
import SshPre from "simple-syntax-highlighter";

export default {
    name: "Alert",
    components: {
        AppLayout,
        GridSection,
        SshPre,
        TAlert,
        TButton,
        TContentCard,
        TTable
    },
    data() {
        return {
            newAlert: false,
            newAlertID: 1,
            colors: ['red', 'blue', 'green', 'yellow', 'indigo', 'pink', 'purple', 'gray', 'black', 'white'],
            toasterPosition: null,
            newToasterID: 1,
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
        };
    },
    methods: {
        addAlertBox() {
            this.newAlert = true;
            this.newAlertID++;
        },
        toastAlert() {
            this.newToasterID++;
        }
    }
}
</script>

<style scoped></style>
