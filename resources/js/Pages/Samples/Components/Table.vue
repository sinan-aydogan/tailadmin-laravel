<template>
    <app-layout>
        <!--Header-->
        <template #header>
            Tables
        </template>
        <!--Subheader-->
        <template #subHeader>
            Customizable tables
        </template>
        <!--Content-->
        <template #default>
            <t-component-color-selector @selected-color="tableColor = $event"/>

            <t-table :color="tableColor" :content="users" :header="header" :pagination="true"
                     :searchable="['name','email']">
                <template #search>
                    <grid-section :col="12" :gap="2">
                        <!--Name-->
                        <t-input-group class="col-span-12 md:col-span-6" label="Name">
                            <t-input-text id="name"/>
                        </t-input-group>
                        <!--Email-->
                        <t-input-group class="col-span-12 md:col-span-6" label="Email">
                            <t-input-text id="email"/>
                        </t-input-group>
                    </grid-section>
                </template>
                <template #right>
                    <t-button :link="route('form-structure')" :radius="8">
                        <t-user-circle-icon class="w-6 h-6"/>
                        Add New User
                    </t-button>
                </template>
                <template #photo="{props}">
                        <t-avatar :link="props.photo" :radius="8" :size="3"/>
                </template>
            </t-table>
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
              <span class="whitespace-nowrap tablet:whitespace-normal" v-html="props.details">
              </span>
              </template>
            </t-table>
        </template>
    </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import TTable from "@/Components/Table/TTable";
import TAvatar from "@/Components/Avatar/TAvatar";
import SshPre from 'simple-syntax-highlighter'
import 'simple-syntax-highlighter/dist/sshpre.css'
import TInputGroup from "@/Components/Form/TInputGroup";
import TInputText from "@/Components/Form/Inputs/TInputText";
import GridSection from "@/Layouts/GridSection";
import TButton from "@/Components/Button/TButton";
import TUserCircleIcon from "@/Components/Icon/TUserCircleIcon";
import TComponentColorSelector from "@/Components/Misc/TComponentColorSelector";

export default {
    name: "Table",
    components: {
        TComponentColorSelector,
        TUserCircleIcon, TButton, GridSection, TInputText, TInputGroup, AppLayout, TTable, TAvatar, SshPre},
    props: ['users'],
    data() {
        return {
            tableColor: 'solid-blue',
            header: [
                {label: 'Avatar', key: 'photo', align: 'center', width: '5'},
                {label: 'Name', key: 'name', align: 'left'},
                {label: 'Email', key: 'email', align: 'left'}
            ],
            sampleCode: {
                html:
                    '<t-table\n' +
                    '    :content="content"\n' +
                    '    :header="header"\n' +
                    '    :searchable="[\'name\',\'email\']"\n' +
                    '    color="solid-blue"\n' +
                    '    pagination-color="solid-blue"\n' +
                    '    :radius="3"\n' +
                    '    :border="true"\n' +
                    '    :zebra="true"\n' +
                    '    :shadow="true"\n' +
                    '>\n' +
                    '     <!--If you wanto to show a advanced search fileds and button, you shoul use this template area-->\n' +
                    '     <template #search>\n' +
                    '         <grid-section col="12" gap="2">\n' +
                    '             <!--Name-->\n' +
                    '             <t-input-group class="col-span-12 md:col-span-6" label="Name">\n' +
                    '                 <t-input-text/>\n' +
                    '             </t-input-group>\n' +
                    '             <!--Email-->\n' +
                    '             <t-input-group class="col-span-12 md:col-span-6" label="Email">\n' +
                    '                 <t-input-text/>\n' +
                    '             </t-input-group>\n' +
                    '         </grid-section>\n' +
                    '    </template>\n' +
                    '    <!--If you want to show somethings like that the button at the right, you should this template area-->\n' +
                    '    <template #right>\n' +
                    '        <t-button :link="route(\'form-structure\')" :radius="8">\n' +
                    '            <t-user-circle-icon class="w-6 h-6"/>\n' +
                    '            Add New User\n' +
                    '        </t-button>\n' +
                    '    </template>\n' +
                    '    <!--If you want to customized content, you should this ScopeSlot template. You can change the photo with your filed\'s key name. You can use for more than fields-->\n' +
                    '    <template #photo="{props}">\n' +
                    '        <t-avatar :link="props.photo" :radius="8" :size="3"/>\n' +
                    '    </template>\n' +
                    '</t-table>',
                js:
                    'import TTable from "@/Components/Table/TTable";\n' +
                    '\n' +
                    'export default {\n' +
                    '  name: "Table",\n' +
                    '  components: {TTable},\n' +
                    '  },\n' +
                    '  data(){\n' +
                    '    return {\n' +
                    '      header: [\n' +
                    '               /* key: You want to field\'s key of write to screen */\n' +
                    '               /* label: It showing at the header area */\n' +
                    '               /* position: Content align */\n' +
                    '               /* width: Content width, if it is blank, it will be auto width */\n' +
                    '              {key: \'photo\', label: \'Avatar\', position: \'center\', width: \'5\'},\n' +
                    '              {key: \'name\', label: \'Name\', position: \'left\'},\n' +
                    '              {key: \'email\', label: \'Email\', position: \'left\'},\n' +
                    '              ],\n' +
                    '     content: [\n' +
                    '               /*id,name,email and status are a key. The status do not write to screen because it\'s not defined in the header. */\n' +
                    '              {id: 1, name: \'Hamdi KAYA\', email: \'hamdi@tailadmin.dev\', photo: \'img/x2.jpg\'},\n' +
                    '              {id: 2, name: \'Emre HAS\', email: \'emre@tailadmin.dev\', photo: \'img/x4.jpg\'},\n' +
                    '              {id: 3, name: \'Zuhal TAŞÇI\', email: \'zuhal@tailadmin.dev\', photo: \'img/x1.jpg\'},\n' +
                    '              ],\n' +
                    '     }\n' +
                    '   }',
                table: {
                    header: [
                        {key: 'variable', label: 'Variable'},
                        {key: 'type', label: 'Value Type'},
                        {key: 'details', label: 'Details'},
                    ],
                    content: [
                        {
                            variable: ':content',
                            type: 'Array',
                            details: 'You should define array your content.'
                        },
                        {
                            variable: ':header',
                            type: 'Array',
                            details: 'You should define array your content header.'
                        },
                        {
                            variable: ':searchable',
                            type: 'Array',
                            details: 'It\'s you want to search in which the fields. You should write the field\'s key names. If it\'s blank, the search area will be hidden'
                        },
                      {
                        variable: 'color',
                        type: 'String',
                        details: "Your table color theme.<br><b>Options Solid:</b> solid-red, solid-blue, solid-green, solid-yellow, solid-indigo, solid-pink, solid-purple, solid-gray, solid-black, solid-white,<br>" +
                            "<b>Options Light:</b> light-red, light-blue, light-green, light-yellow, light-indigo, light-pink, light-purple, light-gray<br>"
                      },
                        {
                            variable: "pagination-color",
                            type: "String",
                            details: "Your table\'s pagination color theme. If you want to set different color than the table color, you can use it. If you didn't use it, the pagination color will be the table color<br><b>Options Solid:</b> solid-red, solid-blue, solid-green, solid-yellow, solid-indigo, solid-pink, solid-purple, solid-gray, solid-black, solid-white,<br><b>Options Light:</b> light-red, light-blue, light-green, light-yellow, light-indigo, light-pink, light-purple, light-gray<br>"
                        },
                        {
                            variable: ":radius",
                            type: "Number",
                            details: "<b>Options:</b> none, 1, 2, 3, 4, 5, 6, 7, 8. <br><b>Default:</b> 3"
                        },
                        {
                            variable: ":border",
                            type: "Number",
                            details: "If you want to show a border between rows. <b>Options:</b> true, false. <br><b>Default:</b> true"
                        },
                        {
                            variable: ":zebra",
                            type: "Number",
                            details: "If you want the table looks like zebra. <b>Options:</b> true, false. <br><b>Default:</b> true"
                        },
                        {
                            variable: ":shadow",
                            type: "Number",
                            details: "If you want to show the show around the table <b>Options:</b> true, false. <br><b>Default:</b> true"
                        },
                    ]
                }
            }
        }
    },
    computed: {
        selectorInnerStyle() {
            return 'flex-shrink-0 w-full text-center bg-opacity-50 px-2 py-1 bg-white rounded-full font-semibold z-10'
        }
    }
}
</script>

<style scoped>

</style>
