<template>
    <app-layout>
        <template #header>Alerts</template>
        <template #subHeader>Notifications and alert boxes (2.880 variations)</template>
        <template #default>
            <grid-section :col="3" :gap="4">
                <!--With Color-->
                <t-content-card :width="3">
                    <template #title>Alert Box Colors</template>
                    <template #subTitle>
                    </template>
                    <template #content>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
                            <!--Red-Deleted-->
                            <t-alert color="red">
                                <t-trash-icon slot="icon" class="w-6 h-6"/>
                                The user deleted successfully,click me
                            </t-alert>
                            <!--Blue-Info-->
                            <t-alert color="blue">
                                <t-information-circle-icon slot="icon" class="w-6 h-6"/>
                                The all of changes overwrite to themself
                            </t-alert>
                            <!--Green-Added-->
                            <t-alert color="green">
                                <t-check-circle-solid-icon slot="icon" class="w-7 h-7"/>
                                The post added successfully
                            </t-alert>
                            <!--Indigo-Reconnect-->
                            <t-alert color="indigo">
                                <t-refresh-icon slot="icon" class="w-6 h-6"/>
                                You entered a new configuration, the settings will refresh 24hr after
                            </t-alert>
                            <!--Pink-Attempt-->
                            <t-alert color="pink">
                                Please, confirm user name and repeat the registration attempt
                            </t-alert>
                            <!--Purple-Blocked-->
                            <t-alert color="purple">
                                <t-ban-icon slot="icon" class="w-6 h-6"/>
                                Your account was blocked, please connect with IT
                            </t-alert>
                           <!-- &lt;!&ndash;Red-Deleted&ndash;&gt;
                            <t-alert color="gray">
                                <t-trash-icon slot="icon" class="w-6 h-6"/>
                                The user deleted successfully,click me
                            </t-alert>
                            &lt;!&ndash;Red-Deleted&ndash;&gt;
                            <t-alert color="black">
                                <t-trash-icon slot="icon" class="w-6 h-6"/>
                                The user deleted successfully,click me
                            </t-alert>-->
                            <!--White-->
                            <t-alert :radius="3" color="white">
                                <t-avatar slot="icon" :radius="8" :size="3" src="https://i.pravatar.cc/300"/>
                                The new user is successfully added.
                                <br/><b>User:</b> Hamdi KAYA
                            </t-alert>
                        </div>
                    </template>
                </t-content-card>
                <!--With Close Button-->
                <t-content-card :width="3">
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
                <t-content-card :width="3">
                    <template #title>Alert Box Timer</template>
                    <template #subTitle>Timer for close</template>
                    <template #content>
                        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
                            <t-alert id="test" :radius="5" :timer="4000" color="gray">
                                Closer timer activated, alert box. (<b>Time:</b>4 seconds)
                            </t-alert>
                            <component
                                :is="'t-alert'"
                                v-if="newAlertID>0"
                                id="alertTimer"
                                :key="newAlertID"
                                :radius="5"
                                :timer="4000"
                                color="gray"
                                @destroy="$event === 'alertTimer' ? active = false : active = true"
                            >
                                Closer timer activated, alert box. (<b>Time:</b>4 seconds)
                            </component>
                            <t-button :radius="5" color="green" size="full" @click.native="addAlertBox">
                                Recall Closed Alert Box
                            </t-button>
                        </div>
                    </template>
                </t-content-card>
            </grid-section>
            <!--Sample Codes-->
            <ssh-pre :copy-button="true" label="Code" language="html">{{ sampleCode.html }}</ssh-pre>
            <ssh-pre :copy-button="true" label="JS" language="js">{{ sampleCode.js }}</ssh-pre>
            <!--Variables Table-->
            <t-table :content="sampleCode.table.content" :header="sampleCode.table.header"
                     :searchable="['variable','details']" class="mt-5"
                     color="blue"/>
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
import TComponentColorSelector from "@/Components/Misc/TComponentColorSelector";
import TUserCircleIcon from "@/Components/Icon/TUserCircleIcon";
import TAvatar from "@/Components/Avatar/TAvatar";
import TCheckCircleSolidIcon from "@/Components/Icon/TCheckCircleSolidIcon";
import TTrashIcon from "@/Components/Icon/TTrashIcon";
import TChevronLeftIcon from "@/Components/Icon/TChevronLeftIcon";
import TRefreshIcon from "@/Components/Icon/TRefreshIcon";
import TTooltip from "@/Components/Tooltip/TTooltip";
import TInformationCircleIcon from "@/Components/Icon/TInformationCircleIcon";
import TBanIcon from "@/Components/Icon/TBanIcon";

export default {
    name: "Alert",
    components: {
        TBanIcon,
        TInformationCircleIcon,
        TTooltip,
        TRefreshIcon,
        TChevronLeftIcon,
        TTrashIcon,
        TCheckCircleSolidIcon,
        TAvatar,
        TUserCircleIcon,
        TComponentColorSelector,
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
            active: false,
            newAlertID: 0,
            selectedColor: 'red',
            colors: ['red', 'blue', 'green', 'yellow', 'indigo', 'pink', 'purple', 'gray', 'black', 'white'],
            toasterPosition: null,
            newToasterID: 1,
            sampleCode: {
                html:
                    '<t-alert color="indigo" :closeable="true" :radius="5" :timer="500">\n' +
                    "    <b>Colorful toaster / notification</b>\n" +
                    "</t-alert>",
                js:
                    'import TAlert from "@/Components/Alert/TAlert";";\n\n' +
                    "export default {\n" +
                    '  name: "Alert",\n' +
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
            if (this.active === false) {
                this.newAlertID++;
                this.active = true
            }
        },
        toastAlert() {
            this.newToasterID++;
        }
    }
}
</script>

<style scoped></style>
