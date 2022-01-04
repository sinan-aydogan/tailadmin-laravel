<template>
  <app-layout title="Login Screen">
    <template #header>Login Screen</template>
    <template #subHeader>You should make to changes in the Resources/Js/Pages/Auth/Login.vue</template>
    <template #default>
      <grid-section :col-tablet="3">
        <!--Demo 1-->
        <div class="flex flex-col gap-2">
          <img :src="'/img/demo/login_1_gradient.jpg'" class="rounded-md" alt="Login Screen">
          <t-button type="link" :link="route('login-app-1')" :radius="3" color="pink" size="full">See Demo Login
            1
          </t-button>
        </div>
        <!--Demo 2-->
        <div class="flex flex-col gap-2">
          <img :src="'/img/demo/login_2_gray.jpg'" class="rounded-md" alt="Login Screen">
          <t-button type="link" :link="route('login-app-2')" :radius="3" color="gray" size="full">See Demo Login 2</t-button>
        </div>
        <!--Demo 3-->
        <div class="flex flex-col gap-2">
          <img :src="'/img/demo/login_3_blue.jpg'" class="rounded-md" alt="Login Screen">
          <t-button type="link" :link="route('login-app-3')" :radius="3" color="blue" size="full">See Demo Login 3</t-button>
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
  name: "LoginApp",
  components: {TButton, TContentCard, GridSection, AppLayout, TTable, SshPre},
  data() {
    return {
      sampleCode: {
        html:
            '<t-login\n' +
            '         color="gradient-purple-to-pink"\n' +
            '         gradient-direction="l"\n' +
            '         :radius="5"\n' +
            '         bg-color="gradient-purple-to-pink"\n' +
            '         bg-gradient-direction="br"\n' +
            '         bg-image="/img/samples/bgFakurianDesign-nY14Fs8pxT8-unsplash.jpg"\n' +
            '         login-button-color="pink"\n' +
            '         register-button-color="pink"\n' +
            '        :canResetPassword="canResetPassword"\n' +
            '        :status="status"\n' +
            '        :register-button="false"\n' +
            '>\n' +
            '    <!--Logo-->\n' +
            '    <template #logo>\n' +
            '        <Link href="/">\n' +
            '            <div class="flex flex-col justify-center items-center w-full">\n' +
            '                <t-logo class="w-12 h-12"/>\n' +
            '                <span class="text-3xl">TailAdmin</span>\n' +
            '            </div>\n' +
            '        </Link>\n' +
            '    </template>\n' +
            '    <!--Greeting-->\n' +
            '    <template #greeting>\n' +
            '        Sign in to your account\n' +
            '    </template>\n' +
            '</t-login>',
        js:
            'import TLogin from "@/Components/Auth/TLogin";\n' +
            'import TLogo from "@/Components/Icon/TLogo";' +
            'import {Link} from "@inertiajs/inertia-vue3";;' +
            "\n" +
            "export default {\n" +
            '  name: "Login",\n' +
            "  components: {TLogin, TLogo, Login},\n" +
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
              details: "Your login form continer\'s color theme.<br><b>Options Solid:</b> solid-red, solid-blue, solid-green, solid-yellow, solid-indigo, solid-pink, solid-purple, solid-gray, solid-black, solid-white,<br>" +
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
              details: "<b>Options:</b> 0, 1, 2, 3, 4, 5, 6, 7, 8"
            },
            {
              variable: "bg-color",
              type: "String",
              details: "<b>Notice:</b> You should use either bg-color or bg-image. It\'s same color but It sets form container\'s outside."
            },
            {
              variable: 'bg-gradient-direction',
              type: 'String',
              details: "If you use to the gradient color, you can select gradient's direction of background color. <br><b>Options:</b> r, l, b, t, tl, bl, tr, br<br>" +
                  "<b>Default:</b> r<br>(Means: l: left, r: right, b: bottom, t: top)"
            },
            {
              variable: "bg-image",
              type: "String",
              details: "<b>Notice:</b> You should use either bg-color or bg-image. You can use initial or external image links"
            },
            {
              variable: "login-button-color",
              type: "String",
              details: "Your submit button\'s color theme.<br><b>Options Simple:</b> red, blue, green, yellow, indigo, pink, purple, gray, black, white,<br><b>Options Light:</b> light-red, light-blue, light-green, light-yellow, light-indigo, light-pink, light-purple, light-gray"
            },
            {
              variable: "register-button-color",
              type: "String",
              details: "Your register button\'s color theme.<br><b>Options Simple:</b> red, blue, green, yellow, indigo, pink, purple, gray, black, white,<br><b>Options Light:</b> light-red, light-blue, light-green, light-yellow, light-indigo, light-pink, light-purple, light-gray"
            },
            {
              variable: ":canResetPassword",
              type: "Boolean",
              details: "For showing to 'Forgot your password?' link.<br><b>Options:</b> true, false. <b>Default:</b> true"
            },
            {
              variable: ":status",
              type: "String",
              details: "If you want to feedback, you can use this prop. It'll showing in the greeting area."
            },
            {
              variable: ":register-button",
              type: "Boolean",
              details: "If you want to show a register button on the login form, you can use this prop.<br><b>Options:</b> true, false. <b>Default:</b> true"
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
