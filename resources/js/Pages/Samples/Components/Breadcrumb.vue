<template>
    <app-layout title="Breadcrumb">
        <template #header>Breadcrumb</template>
        <template #subHeader>2 Different breadcrumbs style</template>
        <template #default>
            <grid-section class="hidden md:block" :col="1" :gap="8">

                <div v-for="design in ['filled','block']">
                    <t-breadcrumb
                        v-for="(color,index) in ['white','white','black','purple']"
                        :design="design" :color="color"
                        :breadcrumbs="breadcrumbs"
                        class="mb-4"
                        :position="index%2 === 0 ? 'left' : 'right'">
                        <template #home="{props}">
                            <t-collection-icon v-if="props.label === 'Home'" class="w-5 h-5"/>
                        </template>
                        <template #subContent>
                            <t-button v-if="index===0" color="green" size="sm">
                                <t-plus-circle-icon class="w-5 h-5"/>
                                Add Button
                            </t-button>
                            <span v-if="index===2">Alternative Title</span>
                        </template>
                    </t-breadcrumb>
                </div>
            </grid-section>
            <t-alert class="block md:hidden" color="red">The breakcrumb component works only on the large
                screens. If you want to see how ist works, you should use a large screen bigger than 728px
            </t-alert>
            <!--Sample Codes-->
            <ssh-pre :copy-button="true" label="Code" language="html">{{ sampleCode.html }}</ssh-pre>
            <ssh-pre :copy-button="true" label="JS" language="js">{{ sampleCode.js }}</ssh-pre>
            <!--Variables Table-->
            <t-table
                :content="sampleCode.table.content"
                :header="sampleCode.table.header"
                class="mt-5"
                color="solid-blue"
                :searchable="['variable','details']"
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
import TBreadcrumb from "@/Components/Breadcrumb/TBreadcrumb";
import TButton from "@/Components/Button/TButton";
import TContentCard from "@/Components/Card/TContentCard";
import TTable from "@/Components/Table/TTable";
/*Codehighlighter*/
import SshPre from 'simple-syntax-highlighter'
import 'simple-syntax-highlighter/dist/sshpre.css'
import TAlert from "@/Components/Alert/TAlert";
import TPlusCircleIcon from "@/Components/Icon/TPlusCircleIcon";
import TCollectionIcon from "@/Components/Icon/TCollectionIcon";

export default {
    name: "Breadcrumb",
    components: {
        TCollectionIcon,
        TPlusCircleIcon, TAlert, AppLayout, GridSection, SshPre, TBreadcrumb, TButton, TContentCard, TTable},
    setup() {
        const breadcrumbs = [
            {key: 'home', label: 'Home', link: '/', active: false},
            {key: 'department', label: 'Departments', link: '/department', active: false},
            {key: 'new-department', label: 'New Department', link: '', active: true, activeColor: 'solid-red'}
        ]

        const sampleCode = {
            html:
                '<t-breadcrumb :breadcrumbStyle="2" :breadcrumbs="breadcrumbs" position="right">\n' +
                '    <!--If you want to show a second content in the breadcrumb-->\n' +
                '    <template #subContent>\n' +
                '    <!--You are free this area, be mindful of the height of the items you use-->\n' +
                '      <t-button color="green" size="sm">\n' +
                '        <t-plus-circle-icon class="w-5 h-5"/>\n' +
                '        Add Button\n' +
                '      </t-button>\n' +
                '    </template>\n' +
                '</t-breadcrumb>',
            js:
                'import TBreadcrumb from "@/Components/Breadcrumb/TBreadcrumb";' +
                '\n' +
                'export default {\n' +
                '  name: "Breadcrumb",\n' +
                '  components: {TBreadcrumb},\n' +
                '  },\n ' +
                ' data() {\n' +
                '      return {\n' +
                '        breadcrumbs: [\n' +
                '          {label: \'Home\', link: \'/\', active: false},\n' +
                '          {label: \'Departments\', link: \'/department\', active: false},\n' +
                '          {label: \'New Department\', link: \'\', active: true, activeColor: \'solid-red\'}\n' +
                '        ]\n' +
                '      }\n' +
                '  },',
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
                        variable: "breadcrumbStyle",
                        type: "Number",
                        details: "<b>Options:</b> 1 or none, 2"
                    },
                    {
                        variable: ":position",
                        type: "String",
                        details: "<b>Options:</b> left, right"
                    },
                    {
                        variable: ":breadcrumbs",
                        type: "Array",
                        details: "The source of the breadcrumbs list"
                    },
                    {
                        variable: "Breadcrumbs data object <br><em>breadcrumbs: [<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>label:' ',<br>link:' ',<br>active:' ',<br>activeColor:' '<br>}</em><br>]",
                        type: "Object in Array",
                        details: "This object have must 4 sub items: label, link, active and activeColor<br>" +
                            "<b>Label Options:</b> everything you want <br>" +
                            "<b>Link Options:</b> everything you want, Ex.: route('user.index'), http://example.com/users etc. <br>" +
                            "<b>Active Options:</b> true, false <br>" +
                            "<b>Active Color Options:</b> solid-red, solid-blue, solid-green, solid-yellow, solid-indigo, solid-pink, solid-purple, solid-gray <br> <b>Default:</b> solid-blue"
                    }
                ]
            }
        }

        return {breadcrumbs, sampleCode}
    }
}
</script>
