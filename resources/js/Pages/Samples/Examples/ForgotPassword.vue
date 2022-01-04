<template>
  <app-layout title="Forgot Password Screen">
    <template #header>Forgot Password Screen</template>
    <template #subHeader>You should make to changes in the Resources/Js/Pages/Auth/ForgotPassword.vue</template>
    <template #default>
      <grid-section :col-tablet="3">
        <!--Demo 1-->
        <div class="flex flex-col gap-2">
          <img :src="'/img/demo/forgot_1_gradient.jpg'" class="rounded-md" alt="Forgot Password Screen">
          <t-button type="link" :link="route('forgot-password-app-1')" :radius="3" color="pink" size="full">See Demo Login
            1
          </t-button>
        </div>
        <!--Demo 2-->
        <div class="flex flex-col gap-2">
          <img :src="'/img/demo/forgot_2_gray.jpg'" class="rounded-md" alt="Forgot Password Screen">
          <t-button type="link" :link="route('forgot-password-app-2')" :radius="3" color="gray" size="full">See Demo Login 2</t-button>
        </div>
        <!--Demo 3-->
        <div class="flex flex-col gap-2">
          <img :src="'/img/demo/forgot_3_blue.jpg'" class="rounded-md" alt="Forgot Password Screen">
          <t-button type="link" :link="route('forgot-password-app-3')" :radius="3" color="blue" size="full">See Demo Login 3</t-button>
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
/*Codehighlighter*/
import SshPre from "simple-syntax-highlighter";
import "simple-syntax-highlighter/dist/sshpre.css";
import TButton from "@/Components/Button/TButton";

export default {
  name: "ForgotPasswordApp",
  components: {TButton, TContentCard, GridSection, AppLayout, TTable, SshPre},
  data() {
    return {
      sampleCode: {
        html:
            '<t-forgot\n' +
            '         color="gradient-purple-to-pink"\n' +
            '         :radius="5"\n' +
            '         bg-color="solid-pink"\n' +
            '         bg-image="/img/samples/bgFakurianDesign-nY14Fs8pxT8-unsplash.jpg"\n' +
            '         button-color="pink"\n' +
            '        :status="status"\n' +
            '>\n\n' +
            '    <!--Logo-->\n' +
            '    <template #logo>\n' +
            '        <div class="flex flex-col justify-center items-center w-full">\n' +
            '            <t-logo class="w-12 h-12"/>\n' +
            '            <span class="text-3xl">TailAdmin</span>\n' +
            '        </div>\n' +
            '    </template>\n\n' +
            '    <!--Greeting-->\n' +
            '    <template #greeting>\n' +
            '        <b>Forgot your password? No problem.</b>\n' +
            '    </template>\n\n' +
            '    <!--Greeting Sub-->\n' +
            '    <template #subGreeting>\n' +
            '        Write your email address and we will email you a password reset link\n' +
            '    </template>\n\n' +
            '</t-forgot>',
        js:
            'import TForgot from "@/Components/Auth/TForgot;\n' +
            'import TLogo from "@/Components/Icon/TLogo";\n' +
            "\n" +
            "export default {\n" +
            '  name: "Badge",\n' +
            "  components: {TForgot, TLogo},\n" +
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
              details: "Your forgot password form continer\'s color theme.<br><b>Options Solid:</b> solid-red, solid-blue, solid-green, solid-yellow, solid-indigo, solid-pink, solid-purple, solid-gray, solid-black, solid-white,<br>" +
                  "<b>Options Light:</b> light-red, light-blue, light-green, light-yellow, light-indigo, light-pink, light-purple, light-gray<br" +
                  "><b>Options Gradient:</b> gradient-red-to-pink. Red is first color and Pink is second color. You change red end pink with red, blue, green, yellow, indigo, pink, purple and gray)"
            },
            {
              variable: 'gradient-direction',
              type: 'String',
              details: "If you use to the gradient color, you can select gradient's direction of login form continer. <br><b>Options:</b> r, l, b, t, tl, bl, tr, br<br>" +
                  "<b>Default:</b> r<br>(Means: l: left, r: right, b: bottom, t: top)"
            },
            {
              variable: ":radius",
              type: "Number",
              details: "<b>Options:</b> none, 1, 2, 3, 4, 5, 6, 7, 8"
            },
            {
              variable: "bg-color",
              type: "String",
              details: "<b>Notice:</b> You should use only once of bg-color or bg-image. It\'s same color but It sets form container\'s outside."
            },
            {
              variable: "bg-image",
              type: "String",
              details: "<b>Notice:</b> You should use only once of bg-color or bg-image. You can use initial or external image links"
            },
            {
              variable: "button-color",
              type: "String",
              details: "Your submit button\'s color theme.<br><b>Options Simple:</b> red, blue, green, yellow, indigo, pink, purple, gray, black, white,<br><b>Options Light:</b> light-red, light-blue, light-green, light-yellow, light-indigo, light-pink, light-purple, light-gray"
            },
            {
              variable: ":status",
              type: "String",
              details: "If you want to feedback, you can use this prop. It'll showing in the greeting area."
            },
          ]
        }
      }

    }
  }
}
</script>
