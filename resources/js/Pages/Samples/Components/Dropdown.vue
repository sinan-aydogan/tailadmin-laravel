<template>
  <app-layout>
    <template #header>
      Dropdowns
    </template>
    <template #subHeader>
      Menu or multi functional buttons
    </template>
    <template #default>
      <grid-section :col="1">
        <t-content-card :width="1">
          <template #title>Simple</template>
          <template #subTitle>Link (Blank, Internal, External and Route) and Icons</template>
          <template #content>
            <div class="flex flex-wrap items-center justify-center space-x-4">
              <!--Indigo-->
              <t-dropdown color="solid-white" size="fit">
                <template #title>
                  Fit Links
                </template>
                <t-dropdown-item>Menu 1</t-dropdown-item>
                <t-dropdown-item>Menu 2</t-dropdown-item>
                <t-dropdown-item>Menu 3</t-dropdown-item>
              </t-dropdown>
              <!--With Icon-->
              <t-dropdown color="gradient-red-to-pink" align="right">
                <template #title>
                  Wide Links
                </template>
                <t-dropdown-item :link="route('alert')">
                  <font-awesome-icon slot="icon" icon="info"/>
                  Alert Component
                </t-dropdown-item>
                <t-dropdown-item :link="route('badge')">
                  <font-awesome-icon slot="icon" icon="dot-circle"/>
                  Badge Component
                </t-dropdown-item>
                <t-dropdown-item :link="route('list')">
                  <font-awesome-icon slot="icon" icon="layer-group"/>
                  List Component
                </t-dropdown-item>
              </t-dropdown>

              <!--Trigger-->
              <t-dropdown size="fit" align="right">
                <template #trigger>
                  <t-avatar src="https://i.pravatar.cc" :indicator="{color:'solid-green',position:'rb'}"/>
                </template>
                <div class="bg-white rounded-md border mt-1 overflow-hidden w-32">
                  <t-dropdown-item>
                    <t-user-circle-icon class="w-5 h-5 inline-block"/>
                    Profile
                  </t-dropdown-item>
                  <t-dropdown-item>
                    <t-cash-icon class="w-5  inline-block"/>
                    Wallet
                  </t-dropdown-item>
                  <span class="inline-flex px-2 pb-2 pt-1 -mb-1 border-t border-red-500 w-full gap-1 h-full items-center text-red-500 bg-gray-100 hover:bg-red-500 hover:text-white">
                      <t-log-out-icon class="w-5 h-5"/>
                    Logout
                  </span>
                </div>
              </t-dropdown>
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
import TDropdown from "@/Components/Dropdown/TDropdown";
import TDropdownItem from "@/Components/Dropdown/TDropdownItem";
import TContentCard from "@/Components/Card/TContentCard";
import TTable from "@/Components/Table/TTable";
/*Codehighlighter*/
import "simple-syntax-highlighter/dist/sshpre.css";
import SshPre from "simple-syntax-highlighter";
import TAvatar from "@/Components/Avatar/TAvatar";
import TLogOutIcon from "@/Components/Icon/TLogOutIcon";
import TCashIcon from "@/Components/Icon/TCashIcon";
import TUserCircleIcon from "@/Components/Icon/TUserCircleIcon";

export default {
  name: "Dropdown",
  components: {
    TUserCircleIcon,
    TCashIcon,
    TLogOutIcon, TAvatar, TContentCard, GridSection, AppLayout, TDropdown, TDropdownItem, SshPre, TTable},
  data() {
    return {
      sampleCode: {
        html:
            '<t-dropdown color="solid-red" size="wide">\n' +
            '    <!--If you want to the dropdown looking like a button-->\n' +
            '    <template #title>\n' +
            '      Title\n' +
            '    </template>\n' +
            '    <!--Or For what you want to use whatever-->\n' +
            '    <template #trigger>\n' +
            '      <t-avatar :src="avatar.jpg"/>\n' +
            '    </template>\n' +
            '    <!--Route links, you must define links in the web.php-->\n' +
            '    <t-dropdown-item :link="route(\'alert\')">\n' +
            '        <!--You can use any icon component but you must use slot="icon" attributes-->\n' +
            '        <font-awesome-icon icon="info" slot="icon"/>\n' +
            '        Alert Component\n' +
            '    </t-dropdown-item>\n' +
            '    <!--You can internal links-->\n' +
            '    <t-dropdown-item link="/login">\n' +
            '        <!--You can use any icon component but you must use slot="icon" attributes-->\n' +
            '        <font-awesome-icon icon="dot-circle" slot="user"/>\n' +
            '        Login\n' +
            '    </t-dropdown-item>\n' +
            '    <!--You can external links-->\n' +
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
              details: "Your dropdown theme.<br><b>Options Solid:</b> solid-red, solid-blue, solid-green, solid-yellow, solid-indigo, solid-pink, solid-purple, solid-gray, solid-black, solid-white,<br>" +
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
              variable: 'size',
              type: 'String',
              details: 'You can select size/width type<br><b>Options:</b> fit, wide<br><b>Default:</b> wide<br>Wide: The width is min 15rem, Fit: The with is min. content\'s width'
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
