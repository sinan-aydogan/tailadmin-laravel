<template>
    <app-layout>
        <template #header>Login Screen</template>
        <template #subHeader>You should make to changes in the Resources/Js/Pages/Auth/Login.vue</template>
        <template #default>
            <grid-section col="3" gap="4">
                <!--Demo 1-->
                <div class="flex flex-col gap-2">
                    <img :src="'/img/demo/login_1_gradient.png'" class="rounded-md">
                    <t-button color="purple" :radius="3" size="full" :link="route('login-app-1')">See Demo Login 1</t-button>
                </div>
                <!--Demo 2-->
                <div class="flex flex-col gap-2">
                    <img :src="'/img/demo/login_2_gray.png'" class="rounded-md">
                    <t-button color="gray" :radius="3" size="full" :link="route('login-app-2')">See Demo Login 2</t-button>
                </div>
                <!--Demo 3-->
                <div class="flex flex-col gap-2">
                    <img :src="'/img/demo/login_3_blue.png'" class="rounded-md">
                    <t-button color="blue" :radius="3" size="full" :link="route('login-app-3')">See Demo Login 3</t-button>
                </div>
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
                    '         :radius="5"\n' +
                    '         bg-color="pink"\n' +
                    '         bg-image="/img/samples/bgFakurianDesign-nY14Fs8pxT8-unsplash.jpg"\n' +
                    '         button-color="pink"\n' +
                    '        :canResetPassword="canResetPassword"\n' +
                    '        :status="status"\n' +
                    '>\n' +
                    '    <!--Logo-->\n' +
                    '    <template #logo>\n' +
                    '        <inertia-link href="/">\n' +
                    '            <div class="flex flex-col justify-center items-center w-full">\n' +
                    '                <t-logo class="w-12 h-12"/>\n' +
                    '                <span class="text-3xl">TailAdmin</span>\n' +
                    '            </div>\n' +
                    '        </inertia-link>\n' +
                    '    </template>\n' +
                    '    <!--Greeting-->\n' +
                    '    <template #greeting>\n' +
                    '        Sign in to your account\n' +
                    '    </template>\n' +
                    '</t-login>',
                js:
                    'import TLogin from "@/Components/Auth/TLogin";\n' +
                    'import TLogo from "@/Components/Icon/TLogo";' +
                    "\n" +
                    "export default {\n" +
                    '  name: "Login",\n' +
                    "  components: {TLogin, TLogo},\n" +
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
                            details: "Your login form continer\'s color theme.<br><b>Options Simple:</b> red, blue, green, yellow, indigo, pink, purple, gray, black, white,<br>" +
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
                    ]
                }
            }

        }
    }
}
</script>

<style scoped>

</style>
