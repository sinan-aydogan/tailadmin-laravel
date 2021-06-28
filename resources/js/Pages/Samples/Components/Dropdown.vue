<template>
  <app-layout>
    <template #header>
      Dropdowns
    </template>
    <template #subHeader>
      Menu or multi functional buttons
    </template>
    <template #default>
      <grid-section col="1" gap="4">
        <t-content-card width="1">
          <template #title>Simple</template>
          <template #subTitle>Link (Blank, Internal, External and Route) and Icons</template>
          <template #content>
            <div class="flex flex-wrap gap-4">
              <!--Simple Dropdown 1-->
              <t-dropdown color="red">
                <template #title>
                  Title
                </template>
                <t-dropdown-item :link="route('alert')">
                    <font-awesome-icon icon="info" slot="icon"/>
                    Alert Component
                </t-dropdown-item>
                <t-dropdown-item :link="route('badge')">
                    <font-awesome-icon icon="dot-circle" slot="icon"/>
                    Badge Component
                </t-dropdown-item>
                <t-dropdown-item :link="route('list')">
                    <font-awesome-icon icon="layer-group" slot="icon"/>
                    List Component
                </t-dropdown-item>
              </t-dropdown>
              <!--Indigo-->
              <t-dropdown color="indigo">
                <template #title>
                  Title
                </template>
                <t-dropdown-item>Menu 1</t-dropdown-item>
                <t-dropdown-item>Menu 2</t-dropdown-item>
                <t-dropdown-item>Menu 3</t-dropdown-item>
              </t-dropdown>
              <!--White-->
              <t-dropdown>
                <template #title>
                  Title
                </template>
                <t-dropdown-item>Menu 1</t-dropdown-item>
                <t-dropdown-item>Menu 2</t-dropdown-item>
                <t-dropdown-item>Menu 3</t-dropdown-item>
              </t-dropdown>
              <!--Black-->
              <t-dropdown color="black">
                <template #title>
                  Title
                </template>
                <t-dropdown-item>Menu 1</t-dropdown-item>
                <t-dropdown-item>Menu 2</t-dropdown-item>
                <t-dropdown-item>Menu 3</t-dropdown-item>
              </t-dropdown>
            </div>
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
import TDropdown from "@/Components/Dropdown/TDropdown";
import TDropdownItem from "@/Components/Dropdown/TDropdownItem";
import TContentCard from "@/Components/Card/TContentCard";
import TTable from "@/Components/Table/TTable";
/*Codehighlighter*/
import "simple-syntax-highlighter/dist/sshpre.css";
import SshPre from "simple-syntax-highlighter";

export default {
  name: "Dropdown",
  components: {TContentCard, GridSection, AppLayout, TDropdown, TDropdownItem, SshPre, TTable},
  data() {
    return {
      sampleCode: {
        html:
            '<t-dropdown color="red">\n' +
            '    <template #title>\n' +
            '      Title\n' +
            '    </template>\n' +
            '    <!--Route links, you must define links in the web.php-->\n'+
            '    <t-dropdown-item :link="route(\'alert\')">\n' +
            '        <!--You can use any icon component but you must use slot="icon" attributes-->\n'+
            '        <font-awesome-icon icon="info" slot="icon"/>\n' +
            '        Alert Component\n' +
            '    </t-dropdown-item>\n' +
            '    <!--You can internal links-->\n'+
            '    <t-dropdown-item link="/login">\n' +
            '        <!--You can use any icon component but you must use slot="icon" attributes-->\n'+
            '        <font-awesome-icon icon="dot-circle" slot="user"/>\n' +
            '        Login\n' +
            '    </t-dropdown-item>\n' +
            '    <!--You can external links-->\n'+
            '    <t-dropdown-item link="http://tailadmin.dev">\n' +
            '        TailAdmin\n' +
            '    </t-dropdown-item>\n' +
            '</t-dropdown>',
        js:
            'import TDropdown from "@/Components/Dropdown/TDropdown";\n' +
            'import TDropdownItem from "@/Components/Dropdown/TDropdownItem";' +
            '\n' +
            'export default {\n' +
            '  name: "Dropdown",\n' +
            '  components: {TDropdown, TDropdownItem},\n' +
            '  }',
        table: {
          header: [
            {key: 'variable', label: 'Variable'},
            {key: 'type', label: 'Value Type'},
            {key: 'details', label: 'Details'},
          ],
          content: [
            {
              variable: 'link',
              type: 'String',
              details: 'There are three link\'s types. Internal (/login), External (https://tailadmin.dev) and Route (route(\'login\'))'
            },
            {
              variable: 'color',
              type: 'String',
              details: 'You can change dropdown color<br><b>Options:</b> red,blue,green,yellow,indigo,pink,purple,gray,black,white'
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
