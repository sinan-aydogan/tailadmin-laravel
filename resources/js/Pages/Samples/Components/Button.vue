<template>
  <app-layout title="Buttons">
    <template #header>Buttons</template>
    <template #subHeader>For all use (1.296 variations)</template>
    <template #default>
      <grid-section :col-tablet="1">
        <t-content-card :width="1">
          <template #title>Sample Buttons</template>
          <template #subTitle>Color, radius, icon, size, disabled, loading, extended and group options
          </template>
          <template #content>
            <three-bars />
            <grid-section :col-laptop="2">
              <!--Styles-->
              <div class="flex flex-wrap justify-center md:justify-start items-center">
                <h2 class="font-semibold mr-4">Styles</h2>
                <div
                  class="flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2">
                  <!--Filled-->
                  <t-button :radius="0" class="mt-2" color="green">
                    Filled
                  </t-button>
                  <!--Light-->
                  <t-button :radius="2" design="light" color="pink">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                    Light
                  </t-button>
                  <!--Light with Border-->
                  <t-button :radius="1" design="light" border color="indigo">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                    Light with border
                  </t-button>
                  <!--Outline-->
                  <t-button :radius="3" design="outline" color="yellow">
                    Outline
                  </t-button>
                  <!--Link-->
                  <t-button design="link" color="blue">
                    Link
                  </t-button>
                  <!--Link Plus-->
                  <t-button design="link-plus" color="gray">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                    Link Plus
                  </t-button>
                </div>
              </div>

              <!--Disabled-->
              <div class="flex flex-wrap justify-center md:justify-start items-center">
                <h2 class="font-semibold mr-4">Disabled</h2>
                <div
                  class="flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2">
                  <!--Filled-->
                  <t-button :radius="0" class="mt-2" color="green" disabled>
                    Filled
                  </t-button>
                  <!--Light-->
                  <t-button :radius="2" design="light" color="pink" disabled>
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                    Light
                  </t-button>
                  <!--Light with Border-->
                  <t-button :radius="1" design="light" border color="indigo" disabled>
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                    Light with border
                  </t-button>
                  <!--Outline-->
                  <t-button :radius="3" design="outline" color="yellow" disabled>
                    Outline
                  </t-button>
                  <!--Link-->
                  <t-button design="link" color="blue" disabled>
                    Link
                  </t-button>
                  <!--Link Plus-->
                  <t-button design="link-plus" color="gray" disabled>
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                    Link Plus
                  </t-button>
                </div>
              </div>

              <!--Loading-->
              <div class="flex flex-wrap justify-center md:justify-start items-center">
                <h2 class="font-semibold mr-4">Loading</h2>
                <div
                  class="flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2">
                  <!--Filled-->
                  <t-button :radius="2" design="filled" color="pink" loading-with-content class="mt-2">
                    With Text
                  </t-button>
                  <!--Light-->
                  <t-button :radius="2" design="light" color="pink" loading>
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                    Light
                  </t-button>
                  <!--Outline-->
                  <t-button :radius="3" design="outline" color="yellow" loading loading-design="three-dots">
                    Outline
                  </t-button>
                  <!--Link-->
                  <t-button design="link" color="blue" loading>
                    Link
                  </t-button>
                  <!--Link Plus-->
                  <t-button design="link-plus" color="gray" loading loading-design="three-dots">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                    Link Plus
                  </t-button>
                </div>
              </div>

              <!--Icon Buttons-->
              <div class="flex flex-wrap justify-center md:justify-start items-center">
                <h2 class="font-semibold mr-4">Icon Buttons</h2>
                <div
                  class="flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2">
                  <t-button :radius="0" color="pink" class="mt-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                  </t-button>
                  <t-button :radius="3" design="light" color="indigo">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                  </t-button>
                  <t-button :radius="5" design="link" color="yellow">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                  </t-button>
                  <t-button :radius="8" design="link-plus" color="red">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                  </t-button>
                </div>
              </div>
            </grid-section>
          </template>
        </t-content-card>
        <!--Buton Sizes-->
        <t-contentCard :width="1">
          <template #title>
            Buton Sizes
          </template>
          <template #content>
            <div class="flex flex-wrap gap-2 items-center justify-center w-full">
              <t-button color="red" size="small">Small Button : small</t-button>
              <t-button color="red" size="normal">Default : normal</t-button>
              <t-button color="yellow" size="large">Large Button: large</t-button>
              <t-button color="blue" size="full">Full Button : full</t-button>
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
import TButton from "@/Components/Button/TButton";
import TContentCard from "@/Components/Card/TContentCard";
import TTable from "@/Components/Table/TTable";
/*Codehighlighter*/
import SshPre from "simple-syntax-highlighter";
import "simple-syntax-highlighter/dist/sshpre.css";
import ThreeBars from "@/Components/Loading/Animations/ThreeBars";

export default {
  name: "Button",
  components: { ThreeBars, AppLayout, GridSection, SshPre, TButton, TContentCard, TTable },
  data() {
    return {
      colors: ["solid-red", "solid-blue", "solid-green", "solid-yellow", "solid-indigo", "solid-pink", "solid-purple", "solid-gray", "solid-black", "solid-white", "light-red", "light-blue", "light-green", "light-yellow", "light-indigo", "light-pink", "light-purple", "light-gray"],
      sampleCode: {
        html:
          "<t-button color=\"yellow\" :radius=\"5\" :link=\"route('login')\" type=\"button\">\n" +
          "    <font-awesome-icon icon=\"user\"/>\n" +
          "    Login\n" +
          "</t-button>",
        js:
          "import TButton from \"@/Components/Button/TButton\";" +
          "\n" +
          "export default {\n" +
          "  name: \"Button\",\n" +
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
              variable: "color",
              type: "String",
              details: "Your button color theme.<br><b>Options Solid:</b> solid-red, solid-blue, solid-green, solid-yellow, solid-indigo, solid-pink, solid-purple, solid-gray, solid-black, solid-white,<br>" +
                "<b>Options Light:</b> light-red, light-blue, light-green, light-yellow, light-indigo, light-pink, light-purple, light-gray<br" +
                "><b>Options Gradient:</b> gradient-red-to-pink. Red is first color and Pink is second color. You change red end pink with red, blue, green, yellow, indigo, pink, purple and gray)"
            },
            {
              variable: "gradient-direction",
              type: "String",
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
    };
  }
};
</script>

<style scoped>

</style>
