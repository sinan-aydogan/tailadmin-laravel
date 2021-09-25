<template>
  <app-layout>
    <template #header>Buttons</template>
    <template #subHeader>For all use (1.296 variations)</template>
    <template #default>
      <grid-section :col-tablet="3">
        <!--With Color-->
        <t-contentCard :width="2">
          <template #title>Sample Buttons</template>
          <template #subTitle>Color, radius, icon and size options</template>
          <template #content>
            <div class="flex flex-wrap items-center justify-center tablet:justify-start items-stretch space-x-4">
              <!--With Text-->
              <div class="flex flex-wrap space-x-2  space-y-2 items-center justify-center">
                <t-button :radius="0" class="mt-2">
                  Submit
                </t-button>
                <t-button :radius="1" color="light-green">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                  </svg>
                  Link
                </t-button>
                <t-button :radius="2" color="solid-blue">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                  </svg>
                  Download
                </t-button>
                <t-button :radius="3" color="light-yellow">
                  Reset
                </t-button>
                <t-button :radius="4" color="solid-yellow">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                  </svg>
                  Edit
                </t-button>
                <t-button :radius="8" color="solid-red">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                  </svg>
                  Delete
                </t-button>
              </div>
              <div class="flex flex-wrap space-x-2  space-y-2 items-center justify-center w-full desktop:w-auto">
                <t-button :radius="0" color="gradient-red-to-pink" class="mt-2">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                  </svg>
                </t-button>
                <t-button :radius="3" color="solid-indigo">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                  </svg>
                </t-button>
                <t-button :radius="5" color="solid-yellow">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                  </svg>
                </t-button>
                <t-button :radius="8" color="solid-red">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                  </svg>
                </t-button>
              </div>
            </div>
          </template>
        </t-contentCard>
        <!--Sizes-->
        <t-contentCard :width="1">
          <template #title>
            Sizes
          </template>
          <template #content>
            <div class="flex flex-wrap gap-2 items-center justify-center w-full">
              <t-button color="solid-red" size="sm">Small Button : sm</t-button>
              <t-button color="solid-yellow" size="xl">XL Button: xl</t-button>
              <t-button color="gradient-green-to-blue" size="full">Full Button : full</t-button>
            </div>
          </template>
        </t-contentCard>
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
import TButton from "@/Components/Button/TButton";
import TContentCard from "@/Components/Card/TContentCard";
import TTable from "@/Components/Table/TTable";
/*Codehighlighter*/
import SshPre from 'simple-syntax-highlighter'
import 'simple-syntax-highlighter/dist/sshpre.css'

export default {
  name: "Button",
  components: {AppLayout, GridSection, SshPre, TButton, TContentCard, TTable},
  data() {
    return {
      colors: ['solid-red', 'solid-blue', 'solid-green', 'solid-yellow', 'solid-indigo', 'solid-pink', 'solid-purple', 'solid-gray', 'solid-black', 'solid-white', 'light-red', 'light-blue', 'light-green', 'light-yellow', 'light-indigo', 'light-pink', 'light-purple', 'light-gray'],
      sampleCode: {
        html:
            '<t-button color="solid-yellow" :radius="5" :link="route(\'login\')" type="button">\n' +
            '    <font-awesome-icon icon="user"/>\n' +
            "    Login\n" +
            "</t-button>",
        js:
            'import TButton from "@/Components/Button/TButton";' +
            "\n" +
            "export default {\n" +
            '  name: "Button",\n' +
            "  components: {TButton},\n" +
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
              details: "Your button color theme.<br><b>Options Solid:</b> solid-red, solid-blue, solid-green, solid-yellow, solid-indigo, solid-pink, solid-purple, solid-gray, solid-black, solid-white,<br>" +
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
              variable: ":size",
              type: "Number",
              details: "<b>Options:</b> none, sm, xl, full"
            },
            {
              variable: "link",
              type: "String",
              details: "Everything you want, external, internal or route()"
            },
            {
              variable: "type",
              type: "String",
              details: "This component works as both a button or a link. If you want to be a link, you should set the link. If you want to be a button, you should set the button or the submit.<b>Options:</b> submit(default), button and link"
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
