<template>
  <app-layout>
    <template #header>Content Card</template>
    <template #subHeader>It is a shell for your content</template>
    <template #default>
      <!--Icon Options-->
      <grid-section :col="2" :gap="4">
        <!--Users-->
        <t-content-card>
          <template #title>Users</template>
          <template #icon>
            <t-user-group-icon class="w-12 h-12"/>
          </template>
          <template #content>
            255 user/s
          </template>
        </t-content-card>
        <!--Team Member-->
        <t-content-card color="gradient-gray-to-pink">
          <template #title>Sinan AYDOĞAN</template>
          <template #icon>
            <t-avatar slot="icon" :radius="8" :size="4" src="https://i.pravatar.cc/300"/>
          </template>
          <template #content>
            Developer
          </template>
        </t-content-card>
      </grid-section>
      <!--Simple-->
      <grid-section :col="3" :gap="4">
        <t-content-card
            :border="true"
            :line="true"
            :radius="0"
            :width="1"
        >
          <template #title>
            Content Card Component Title
          </template>
          <template #subTitle>
            Solid, Light and Gradient Color Options
          </template>
          <template #content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            dapibus metus enim. In vestibulum sit amet felis vitae ornare. Sed
            posuere, mauris et dapibus tincidunt.
            <div class="flex flex-col justify-center w-full mt-6 gap-4">

            </div>
          </template>
        </t-content-card>
        <t-content-card
            :border="true"
            :line="true"
            :radius="3"
            :width="1"
            color="solid-red"
        >
          <template #title>
            Adaptive Height: False
          </template>
          <template #content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            dapibus metus enim. In vestibulum sit amet felis vitae ornare.
            <div class="flex flex-col justify-center w-full mt-6 gap-4">

            </div>
          </template>
        </t-content-card>
        <t-content-card
            :adaptive-height="true"
            :border="true"
            :line="false"
            :radius="6"
            :width="1"
            color="light-indigo"
        >
          <template #title>
            Adaptive Height: True
          </template>
          <template #content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            dapibus metus enim. In vestibulum sit amet felis vitae ornare. Sed
            posuere, mauris et dapibus tincidunt.
            <div class="flex flex-col justify-center w-full mt-6 gap-4">

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
          color="solid-blue">
        <template #details="{props}">
              <span class="whitespace-nowrap md:whitespace-normal" v-html="props.details">
              </span>
        </template>
      </t-table>
    </template>
  </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import SshPre from "simple-syntax-highlighter";
import 'simple-syntax-highlighter/dist/sshpre.css'
import GridSection from "@/Layouts/GridSection";
import TContentCard from "@/Components/Card/TContentCard";
import TTable from "@/Components/Table/TTable";
import TInputSelect from "@/Components/Form/Inputs/TInputSelect";
import TUserGroupIcon from "@/Components/Icon/TUserGroupIcon";
import TAvatar from "@/Components/Avatar/TAvatar";

export default {
  name: "ContentBox",
  components: {
    TAvatar,
    TUserGroupIcon,
    TInputSelect,
    TTable,
    TContentCard,
    GridSection,
    AppLayout,
    SshPre
  },
  data() {
    return {
      sampleCode: {
        html:
            '<!--You prefer use to this component in the grid component-->\n' +
            '<t-content-card\n' +
            '    :color="gradient-purple-to-pink"\n' +
            '    :radius="3"\n' +
            '    :line="true"\n' +
            '    :border="true"\n' +
            '    :width="2"\n' +
            '    >\n' +
            '        <!--If you show a icon/photo on the left you can use this icon template-->\n' +
            '        <template #icon>\n' +
            '            <t-avatar slot="icon" :radius="8" :size="4" src="link"/>\n' +
            '          </template>\n' +
            '        <template #title>\n' +
            '            Title Text\n' +
            '        </template>\n' +
            '        <template #subTitle>\n' +
            '            Subtitle Text\n' +
            '        </template>\n' +
            '        <template #content>\n' +
            '           Content Area\n' +
            '        </template>\n' +
            '</t-content-card>',
        js:
            'import TContentCard from "@/Components/Card/TContentCard";' +
            '\n' +
            'export default {\n' +
            '  name: "ContentCard",\n' +
            '  components: {TContentCard},\n' +
            '  }',
        table: {
          header: [
            {key: 'variable', label: 'Variable'},
            {key: 'type', label: 'Value Type'},
            {key: 'details', label: 'Details', width: 60},
          ],
          content: [
            {
              variable: 'show',
              type: 'Boolean',
              details: 'You should define a variable in the data and connect to this data'
            },
            {
              variable: 'color',
              type: 'String',
              details: "Your content box color theme.<br><b>Options Solid:</b> solid-red, solid-blue, solid-green, solid-yellow, solid-indigo, solid-pink, solid-purple, solid-gray, solid-black, solid-white,<br>" +
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
              variable: ":line",
              type: "Number",
              details: "If you want to separate the header and the content area with a line, You can use to this variable<br><b>Options:</b> true, false<b> Default:</b> false"
            },
            {
              variable: ":border",
              type: "Number",
              details: "If you want to show a border around of the content box, You can use to this variable<br><b>Options:</b> true, false<b> Default:</b> false"
            },
            {
              variable: ":width",
              type: "Number",
              details: "The width of the content box. <br><b>Options:</b> From 1 to maximum of column size. Example If you use to grid component, you can give to maximum value that col size of the grid. If you don'\ use the grid component, your content area 12 columns and you can give the value from 1 to 12"
            },
            {
              variable: ":adaptive-height",
              type: "Boolean",
              details: "Regularly Your content's height will stretch to grid's height, You can change to fit height with this option <br><b>Options: true, false</b><br><b>Default:</b> false"
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
