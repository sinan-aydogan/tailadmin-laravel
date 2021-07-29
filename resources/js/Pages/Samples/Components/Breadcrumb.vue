<template>
  <app-layout>
    <template #header>Breadcrumb</template>
    <template #subHeader>2 Different breadcrumbs style</template>
    <template #default>
      <grid-section class="hidden tablet:block" :col="1" :gap="8">
        <h3>
          <b>Style 1</b>
        </h3>
        <!--Style 1 without Subcontent-->
        <t-breadcrumb :breadcrumbStyle="1" :breadcrumbs="breadcrumbs1"/>
        <!--Style 1 with Subcontent-->
        <t-breadcrumb :breadcrumbStyle="1" :breadcrumbs="breadcrumbs2" position="right">
          <template #subContent>
            Alternative Title
          </template>
        </t-breadcrumb>
        <!--Style 1 with Subcontent-->
        <t-breadcrumb :breadcrumbStyle="1" :breadcrumbs="breadcrumbs3" position="right">
          <template #subContent>
            <t-button color="solid-green" size="sm">
              <font-awesome-icon icon="plus-circle"/>
              Add Button
            </t-button>
          </template>
        </t-breadcrumb>
        <h3>
          <b>Style 2</b>
        </h3>
        <!--Style 2 without Subcontent on the left-->
        <t-breadcrumb :breadcrumbStyle="2" :breadcrumbs="breadcrumbs4" position="left"/>
        <!--Style 2 with Subcontent on the left-->
        <t-breadcrumb :breadcrumbStyle="2" :breadcrumbs="breadcrumbs5" position="right">
          <template #subContent>
            Alternative Title
          </template>
        </t-breadcrumb>
        <!--Style 2 with Subcontent on the left-->
        <t-breadcrumb :breadcrumbStyle="2" :breadcrumbs="breadcrumbs6" position="right">
          <template #subContent>
            <t-button color="solid-green" size="sm">
              <font-awesome-icon icon="plus-circle"/>
              Add Button
            </t-button>
          </template>
        </t-breadcrumb>
      </grid-section>
        <t-alert class="block tablet:hidden" color="solid-red">The breakcrumb component works only on the large screens. If you want to see how ist works, you should use a large screen bigger than 728px</t-alert>
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
              <span class="whitespace-nowrap tablet:whitespace-normal" v-html="props.details">
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

export default {
  name: "Breadcrumb",
  components: {TAlert, AppLayout, GridSection, SshPre, TBreadcrumb, TButton, TContentCard,TTable},
  data() {
    return {
      breadcrumbs1: [
        {label: 'Home', link: '/', active: false},
        {label: 'Departments', link: '/department', active: false},
        {label: 'New Department', link: '', active: true, activeColor: 'solid-red'}
      ],
      breadcrumbs2: [
        {label: 'Home', link: '/', active: false},
        {label: 'Departments', link: '/department', active: false},
        {label: 'New Department', link: '', active: true, activeColor: 'solid-blue'}
      ],
      breadcrumbs3: [
        {label: 'Home', link: '/', active: false},
        {label: 'Departments', link: '/department', active: false},
        {label: 'New Department', link: '', active: true, activeColor: 'solid-green'}
      ],
      breadcrumbs4: [
        {label: 'Home', link: '/', active: false},
        {label: 'Departments', link: '/department', active: false},
        {label: 'New Department', link: '', active: true, activeColor: 'solid-yellow'}
      ],
      breadcrumbs5: [
        {label: 'Home', link: '/', active: false},
        {label: 'Departments', link: '/department', active: false},
        {label: 'New Department', link: '', active: true, activeColor: 'solid-indigo'}
      ],
      breadcrumbs6: [
        {label: 'Home', link: '/', active: false},
        {label: 'Departments', link: '/department', active: false},
        {label: 'New Department', link: '', active: true, activeColor: 'solid-pink'}
      ],
      sampleCode: {
        html:
            '<t-breadcrumb :breadcrumbStyle="2" :breadcrumbs="breadcrumbs" position="right">\n' +
            '    <!--If you want to show a second content in the breadcrumb-->\n' +
            '    <template #subContent>\n' +
            '    <!--You are free this area, be mindful of the height of the items you use-->\n' +
            '      <t-button color="solid-green" size="sm">\n' +
            '        <font-awesome-icon icon="plus-circle"/>\n' +
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
            '        ]\n'+
            '      }\n'+
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
              details:"This object have must 4 sub items: label, link, active and activeColor<br>" +
                  "<b>Label Options:</b> everything you want <br>" +
                  "<b>Link Options:</b> everything you want, Ex.: route('user.index'), http://example.com/users etc. <br>" +
                  "<b>Active Options:</b> true, false <br>" +
                  "<b>Active Color Options:</b> solid-red, solid-blue, solid-green, solid-yellow, solid-indigo, solid-pink, solid-purple, solid-gray <br> <b>Default:</b> solid-blue"
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
