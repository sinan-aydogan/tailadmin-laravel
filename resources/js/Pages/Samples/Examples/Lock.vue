<template>
  <app-layout title="Lock Screen">
    <template #header>Lock Screen</template>
    <template #subHeader>Only sample screen, it's not active module</template>
    <template #default>
      <grid-section :col-tablet="3">
        <!--Demo 1-->
        <div class="flex flex-col gap-2">
          <img :src="'/img/demo/lock_1_gradient.jpg'" class="rounded-md" alt="Lock Screen Photo">
          <t-button type="link" :link="route('lock-app-1')" :radius="3" color="pink" size="full">See Demo Lock 1
          </t-button>
        </div>
        <!--Demo 2-->
        <div class="flex flex-col gap-2">
          <img :src="'/img/demo/lock_2_gray.jpg'" class="rounded-md" alt="Lock Screen Photo">
          <t-button type="link" :link="route('lock-app-2')" :radius="3" color="gray" size="full">See Demo Lock 2
          </t-button>
        </div>
        <!--Demo 3-->
        <div class="flex flex-col gap-2">
          <img :src="'/img/demo/lock_3_blue.jpg'" class="rounded-md" alt="Lock Screen Photo">
          <t-button type="link" :link="route('lock-app-3')" :radius="3" color="blue" size="full">See Demo Lock 3
          </t-button>
        </div>
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
import TLock from "@/Components/Auth/TLock";
import TButton from "@/Components/Button/TButton";
/*Codehighlighter*/
import SshPre from "simple-syntax-highlighter";
import "simple-syntax-highlighter/dist/sshpre.css";


export default {
  name: "Lock",
  components: {TButton, GridSection, TLock, TTable, TContentCard, AppLayout, SshPre},
  data() {
    return {
      sampleCode: {
        html:
            '<t-lock\n' +
            '    color="solid-white"\n' +
            '    :radius="5"\n' +
            '    <!--You should use either bg-color or bg-image-->\n' +
            '    bg-image="/img/samples/bgFakurianDesign-nY14Fs8pxT8-unsplash.jpg"\n' +
            '    bg-color="gradient-pink-to-pruple"\n' +
            '    button-color="pink"\n' +
            '>\n' +
            '</t-lock>',
        js:
            'import TLock from "@/Components/Auth/TLock";' +
            "\n" +
            "export default {\n" +
            '  name: "Lock",\n' +
            "  components: {TLock},\n" +
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
              details: "Your lock form continer\'s color theme.<br><b>Options Simple:</b> red, blue, green, yellow, indigo, pink, purple, gray, black, white,<br>" +
                  "<b>Options Light:</b> light-red, light-blue, light-green, light-yellow, light-indigo, light-pink, light-purple, light-gray<br" +
                  "><b>Options Gradient:</b> gradient-red-to-pink. Red is first color and Pink is second color. You change red end pink with red, blue, green, yellow, indigo, pink, purple and gray)"
            },
            {
              variable: ":radius",
              type: "Number",
              details: "<b>Options:</b> none, 1, 2, 3, 4, 5, 6, 7, 8"
            },
            {
              variable: "bg-color",
              type: "String",
              details: "<b>Notice:</b> You should use either bg-color or bg-image. It\'s same color but It sets form container\'s outside."
            },
            {
              variable: "bg-image",
              type: "String",
              details: "<b>Notice:</b> You should use either bg-color or bg-image. You can use initial or external image links"
            },
            {
              variable: "button-color",
              type: "String",
              details: "Your submit button\'s color theme.<br><b>Options Simple:</b> red, blue, green, yellow, indigo, pink, purple, gray, black, white,<br><b>Options Light:</b> light-red, light-blue, light-green, light-yellow, light-indigo, light-pink, light-purple, light-gray"
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
