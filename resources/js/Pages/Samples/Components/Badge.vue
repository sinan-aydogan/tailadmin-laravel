<template>
    <app-layout title="Badges">
        <template #header>
            Badges
        </template>
        <template #subHeader>
            Useful badges like tags
        </template>
        <template #default>
            <grid-section :col="1">
                <!--General Samples-->
                <t-content-card :width="1">
                    <template #title>Custom Badges</template>
                    <template #subTitle>Color, radius, icon and value options</template>
                    <template #content>
                        <grid-section :col-laptop="2">
                            <!--Filled-->
                            <div class="flex flex-wrap justify-center md:justify-start items-center">
                                <h2 class="font-semibold mr-4">Filled</h2>
                                <div
                                    class="flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2">
                                    <t-badge design="filled" color="red" :radius="0" class="mt-2">REJECTED</t-badge>
                                    <t-badge design="filled" color="green">ACTIVE</t-badge>
                                    <t-badge design="filled" color="gray" badge-value="2.825,90 TRY">SALARY</t-badge>
                                    <t-badge design="filled" color="yellow" badge-value="8" :radius="8">
                                        <template #icon>
                                            <t-shield-check-icon class="w-4 h-4"/>
                                        </template>
                                        Attacks
                                    </t-badge>
                                </div>
                            </div>

                            <!--Light-->
                            <div class="flex flex-wrap justify-center md:justify-start items-center">
                                <h2 class="font-semibold mr-4">Light</h2>
                                <div
                                    class="flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2">
                                    <t-badge design="light" color="blue" :radius="0" class="mt-2">pending</t-badge>
                                    <t-badge design="light" color="purple" badge-value="12">open tasks</t-badge>
                                    <t-badge design="light" color="white" badge-value="125" :radius="8">
                                        <template #icon>
                                            <t-user-circle-icon class="w-4 h-4"/>
                                        </template>
                                        Staff
                                    </t-badge>
                                </div>
                            </div>

                            <!--Inline-->
                            <div class="flex flex-wrap justify-center md:justify-start items-center">
                                <h2 class="font-semibold mr-4">Inline</h2>
                                <div
                                    class="flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2">
                                    <t-badge design="inline" color="green" :radius="0" class="mt-2">#tailwindcss
                                    </t-badge>
                                    <t-badge design="inline" color="pink" badge-value="1 Hr. 25 Min." :radius="2">
                                        London
                                    </t-badge>
                                    <t-badge design="inline" color="yellow" badge-value="2" :radius="2">
                                        <template #icon>
                                            <t-star-solid-icon class="w-5 h-5"/>
                                        </template>
                                        Awards
                                    </t-badge>
                                </div>
                            </div>

                            <!--Outline-->
                            <div class="flex flex-wrap justify-center md:justify-start items-center">
                                <h2 class="font-semibold mr-4">Outline</h2>
                                <div
                                    class="flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2">
                                    <t-badge design="outline" color="green" :radius="0" class="mt-2">Online</t-badge>
                                    <t-badge design="outline" color="red">Offline</t-badge>
                                    <t-badge design="outline" color="yellow" badge-value="12 minutes">Away</t-badge>
                                    <t-badge design="outline" color="green" badge-value="+%2">BTC</t-badge>
                                    <t-badge design="outline" color="red" badge-value="-%1,8">ADA</t-badge>
                                </div>
                            </div>

                            <!--Elegant-->
                            <div class="flex flex-wrap justify-center md:justify-start items-center">
                                <h2 class="font-semibold mr-4">Elegant</h2>
                                <div
                                    class="flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2">
                                    <t-badge design="elegant" color="green" :radius="0" class="mt-2">Manager</t-badge>
                                    <t-badge design="elegant" color="indigo" badge-value="12">Engineer</t-badge>
                                    <t-badge design="elegant" color="yellow" badge-value="8" :radius="6">
                                        <template #icon>
                                            <t-cog-icon class="w-4 h-4"/>
                                        </template>
                                        Maintainer
                                    </t-badge>
                                </div>
                            </div>

                            <!--Block-->
                            <div class="flex flex-wrap justify-center md:justify-start items-center">
                                <h2 class="font-semibold mr-4">Block</h2>
                                <div
                                    class="flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2">
                                    <t-badge design="block" color="green" :radius="0" class="mt-2">PASSED</t-badge>
                                    <t-badge design="block" color="gray" badge-value="-3K TRY">Prompt Cash</t-badge>
                                    <t-badge design="block" color="red" badge-value="8" :radius="8">
                                        <template #icon>
                                            <t-trash-icon class="w-4 h-4"/>
                                        </template>
                                        Trash
                                    </t-badge>
                                </div>
                            </div>
                        </grid-section>
                    </template>
                </t-content-card>
                <!--Selectable Badges-->
                <t-content-card :width="1">
                    <template #title>
                        Selectable Badges
                    </template>
                    <template #subTitle>
                        It works like tag
                    </template>
                    <template #content>
                        <grid-section :col-tablet="2">
                            <div class="flex flex-col border border-dashed p-2">
                                <h3 class="font-semibold">Tags:</h3>
                                <div class="flex flex-wrap space-x-2 justify-start items-center mt-2">
                                    <div class="flex flex-wrap border space-x-2 p-2 mb-2 w-full min-h-10">
                                        <t-badge
                                            v-for="(tag,key) in activeTagList"
                                            color="green"
                                            design="filled"
                                            class="my-2 cursor-pointer"
                                            @click="deleteTag(tag)"
                                        >
                                            {{ tag.label }}
                                        </t-badge>
                                    </div>
                                    <div class="flex flex-wrap">
                                        <t-badge
                                            v-for="(tag,key) in passiveTagList"
                                            color="gray"
                                            design="filled"
                                            class="mb-2 mr-2 cursor-pointer"
                                            @click="addTag(tag)"
                                        >
                                            {{ tag.label }}
                                        </t-badge>
                                    </div>
                                </div>
                            </div>
                            <!--Custom Select Color-->
                            <div class="flex flex-col border border-dashed p-2">
                                <h3 class="font-semibold">Custom Selected:</h3>
                                <div class="flex flex-wrap justify-start items-center mt-2">
                                    <t-badge v-for="(tag,key) in tagBadgeCustomColor"
                                             :model-value="tag.status"
                                             :select-active-style="{color: 'green', design: 'filled'}"
                                             :select-passive-style="{color: 'white', design: 'elegant'}"
                                             class="mb-2 mr-2"
                                             v-model="tag.status"
                                             selectable
                                             select-indicator
                                    >
                                        {{ tag.label }}
                                    </t-badge>
                                </div>
                            </div>
                        </grid-section>
                    </template>

                </t-content-card>
                <!--Closeable Badges-->
                <t-content-card :width="1">
                    <template #title>Collapsible Badges</template>
                    <template #subTitle>Click them</template>
                    <template #content>
                        <div class="flex flex-wrap space-x-4">
                            <t-badge :collapsible="true" :radius="1" color="indigo" design="filled">
                                <template #icon>
                                    <t-shield-check-icon slot="icon"/>
                                </template>
                                Super Admin
                            </t-badge>
                            <t-badge :collapsible="true" :radius="8" color="red" design="filled">
                                <template #icon>
                                    <t-ban-icon slot="icon"/>
                                </template>
                                Restricted Area
                            </t-badge>
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
import TBadge from "@/Components/Badge/TBadge";
/*Codehighlighter*/
import SshPre from "simple-syntax-highlighter";
import "simple-syntax-highlighter/dist/sshpre.css";
import TXCircleIcon from "@/Components/Icon/TXCircleIcon";
import TCheckCircleIcon from "@/Components/Icon/TCheckCircleIcon";
import TStarSolidIcon from "@/Components/Icon/TStarSolidIcon";
import TShieldCheckIcon from "@/Components/Icon/TShieldCheckIcon";
import TBanIcon from "@/Components/Icon/TBanIcon";
import TPlusCircleIcon from "@/Components/Icon/TPlusCircleIcon";
import TUserCircleIcon from "@/Components/Icon/TUserCircleIcon";
import TUserGroupIcon from "@/Components/Icon/TUserGroupIcon";
import TCogIcon from "@/Components/Icon/TCogIcon";
import TTrashIcon from "@/Components/Icon/TTrashIcon";
import {reactive, ref, toRef, computed, watch} from "vue";


export default {
    name: "Badge",
    components: {
        TTrashIcon,
        TCogIcon,
        TUserGroupIcon,
        TUserCircleIcon,
        TPlusCircleIcon,
        TBanIcon,
        TShieldCheckIcon,
        TStarSolidIcon,
        TCheckCircleIcon, TXCircleIcon, AppLayout, GridSection, SshPre, TBadge, TContentCard, TTable
    },
    setup() {
        const tagBadge = reactive([
            {id: 1, label: 'VueJS'},
            {id: 2, label: 'Tailawindcss'},
            {id: 3, label: 'Laravel'},
            {id: 4, label: 'Javascript'},
            {id: 5, label: 'CSS'}
        ])
        const activeTagList = reactive([])
        const passiveTagList = reactive([...tagBadge])

        const tagBadgeCustomColor = reactive([
            {id: 1, label: 'Urgent', status: true},
            {id: 2, label: 'Low', status: true},
            {id: 3, label: 'High', status: true},
            {id: 4, label: 'Modarete', status: false},
            {id: 5, label: 'Insignificant', status: false}
        ])

        const addTag = (tag) => {
            activeTagList.push(tag)
            passiveTagList.splice(passiveTagList.findIndex(pt => pt.id === tag.id), 1)
        }

        const deleteTag = (tag) => {
            passiveTagList.push(tag)
            activeTagList.splice(activeTagList.findIndex(pt => pt.id === tag.id), 1)
        }

        const sampleCode = {
            html:
                '<t-badge :radius="8" color="blue" :collapsible="true" value="6.40TL">\n' +
                '    <font-awesome-icon icon="info" slot="icon" />\n' +
                "    Mathematical Signs\n" +
                "</t-badge>",
            js:
                'import TBadge from "@/Components/Badge/TBadge";' +
                "\n" +
                "export default {\n" +
                '  name: "Badge",\n' +
                "  components: {TBadge},\n" +
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
                        variable: 'color',
                        type: 'String',
                        details: "Your badge color theme.<br><b>Options Solid:</b> solid-red, solid-blue, solid-green, solid-yellow, solid-indigo, solid-pink, solid-purple, solid-gray, solid-black, solid-white,<br>" +
                            "<b>Options Light:</b> light-red, light-blue, light-green, light-yellow, light-indigo, light-pink, light-purple, light-gray<br" +
                            "><b>Options Gradient:</b> gradient-red-to-pink. Red is first color and Pink is second color. You change red end pink with red, blue, green, yellow, indigo, pink, purple and gray)"
                    },
                    {
                        variable: 'gradient-direction',
                        type: 'String',
                        details: "If you use to the gradient color, you can select gradient's direction. <br><b>Options:</b> r, l, b, t, tl, bl, tr, br<br>" +
                            "<b>Default:</b> r<br>(Means: l: left, r: right, b: bottom, t: top)"
                    },
                    {
                        variable: ":radius",
                        type: "Number",
                        details: "<b>Options:</b> none, 1, 2, 3, 4, 5, 6, 7, 8"
                    },
                    {
                        variable: "value",
                        type: "String",
                        details: "Everything you want"
                    },
                    {
                        variable: ":collapsible",
                        type: "Boolean",
                        details:
                            "You should with an icon element or font-awesome-icon component. <br>Your icon element or component must contain slot=\"icon\" variable"
                    }
                ]
            }
        }

        return {tagBadge, tagBadgeCustomColor, sampleCode, activeTagList, addTag, deleteTag, passiveTagList}
    }
};
</script>
