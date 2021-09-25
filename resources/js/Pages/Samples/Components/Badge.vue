<template>
  <app-layout>
    <template #header>
      Badges
    </template>
    <template #subHeader>
      Useful badges like tags
    </template>
    <template #default>
      <grid-section :col="1">
        <!--With Color-->
        <t-content-card :width="1">
          <template #title>Custom Badges</template>
          <template #subTitle>Color, radius, icon and value options</template>
          <template #content>
            <div class="flex flex-wrap space-x-4 space-y-2 items-center justify-center py-4">
              <t-badge :radius="8" color="solid-red">Error</t-badge>
              <t-badge :radius="8" color="solid-red">
                <t-x-circle-icon slot="icon" class="w-5 h-5"/>
                Error
              </t-badge>
              <t-badge :radius="8" color="solid-white">
                <t-x-circle-icon slot="icon" class="w-5 h-5 text-red-500"/>
                Fail
              </t-badge>
              <t-badge :radius="8" color="light-red">Cancel</t-badge>
              <t-badge :radius="8" color="light-yellow">Empty</t-badge>
              <t-badge :radius="8" color="solid-green">
                <t-check-circle-icon slot="icon" class="w-5 h-5 text-white"/>
                Yes
              </t-badge>
              <t-badge :radius="8" color="solid-white">
                <t-check-circle-icon slot="icon" class="w-5 h-5 text-green-500"/>
                Pass
              </t-badge>
              <t-badge :radius="8" color="solid-gray">1.250,01 TRY</t-badge>
              <t-badge :radius="8" color="solid-yellow" value="15 pcs.">Cart</t-badge>
              <t-badge :radius="8" color="gradient-purple-to-pink" value="03.09.2025">Delivery</t-badge>
              <t-badge :radius="8" color="gradient-yellow-to-gray" value="+25%">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" slot="icon">
                  <path
                      d="M 12 2 C 6.477 2 2 6.477 2 12 C 2 17.523 6.477 22 12 22 C 17.523 22 22 17.523 22 12 C 22 6.477 17.523 2 12 2 z M 12 4 C 16.418 4 20 7.582 20 12 C 20 16.418 16.418 20 12 20 C 7.582 20 4 16.418 4 12 C 4 7.582 7.582 4 12 4 z M 11.392578 5.1269531 L 11.392578 7.0234375 L 9.3007812 7.0234375 L 9.3007812 16.976562 L 11.392578 16.976562 L 11.392578 18.822266 L 12.691406 18.822266 L 12.691406 16.970703 C 13.648406 16.954703 14.390297 16.714281 14.904297 16.238281 C 15.434297 15.746281 15.699219 15.016781 15.699219 14.050781 C 15.699219 13.809781 15.675 13.57275 15.625 13.34375 C 15.574 13.11375 15.493766 12.899125 15.384766 12.703125 C 15.275766 12.507125 15.131125 12.3365 14.953125 12.1875 C 14.775125 12.0405 14.558687 11.928469 14.304688 11.855469 C 14.523687 11.759469 14.711188 11.638234 14.867188 11.490234 C 15.025187 11.343234 15.155766 11.177141 15.259766 10.994141 C 15.361766 10.811141 15.437375 10.61625 15.484375 10.40625 C 15.533375 10.19625 15.556641 9.9789531 15.556641 9.7519531 C 15.556641 9.2869531 15.484797 8.8830156 15.341797 8.5410156 C 15.196797 8.1990156 14.987844 7.9164531 14.714844 7.6894531 C 14.441844 7.4644531 14.108844 7.2965 13.714844 7.1875 C 13.407844 7.1025 13.059406 7.0600156 12.691406 7.0410156 L 12.691406 5.1269531 L 11.392578 5.1269531 z M 11.310547 8.6972656 L 12.376953 8.6972656 C 12.786953 8.6972656 13.082625 8.7961875 13.265625 8.9921875 C 13.448625 9.1881875 13.539063 9.5118906 13.539062 9.9628906 C 13.539062 10.363891 13.441047 10.668 13.248047 10.875 C 13.054047 11.083 12.757469 11.1875 12.355469 11.1875 L 11.310547 11.1875 L 11.310547 8.6972656 z M 11.310547 12.650391 L 12.664062 12.650391 C 13.038063 12.650391 13.304938 12.773531 13.460938 13.019531 C 13.618937 13.265531 13.697266 13.599438 13.697266 14.023438 C 13.696266 14.209438 13.675766 14.380156 13.634766 14.535156 C 13.593766 14.690156 13.529406 14.826359 13.441406 14.943359 C 13.351406 15.058359 13.238609 15.148891 13.099609 15.212891 C 12.959609 15.275891 12.791703 15.308594 12.595703 15.308594 L 11.310547 15.308594 L 11.310547 12.650391 z"/>
                </svg>
                BTC
              </t-badge>
              <t-badge :radius="8" color="gradient-gray-to-gray">
                <t-star-solid-icon class="w-5 h-5 text-yellow-500"/>
                <t-star-solid-icon class="w-5 h-5 text-yellow-500"/>
                <t-star-solid-icon class="w-5 h-5 text-yellow-500"/>
              </t-badge>
            </div>
          </template>
        </t-content-card>
        <!--With Collapsible-->
        <t-content-card :width="1">
          <template #title>Collapsible Badges</template>
          <template #subTitle>Click them</template>
          <template #content>
            <div class="flex flex-wrap space-x-4">
              <t-badge :collapsible="true" :radius="1" color="solid-indigo">
                <t-shield-check-icon slot="icon"/>
                Super Admin
              </t-badge>
              <t-badge :collapsible="true" :radius="8" color="solid-red">
                <t-ban-icon slot="icon"/>
                Restricted Area
              </t-badge>
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
import TContentCard from "@/Components/Card/TContentCard";
import TTable from "@/Components/Table/TTable";
import TBadge from "@/Components/Badge/TBadge";
/*Codehighlighter*/
import SshPre from "simple-syntax-highlighter";
import "simple-syntax-highlighter/dist/sshpre.css";
import TXCircleIcon from "@/Components/Icon/TXCircleIcon";
import TCheckCircleIcon from "@/Components/Icon/TCheckCircleIcon";
import TStarSolidIcon from "@/Components/Icon/TStarSolidIcon";
import TShieldCheckIcon from "@/Components/Icon/TShieldCheckIcon";
import TBanIcon from "@/Components/Icon/TBanIcon";


export default {
  name: "Badge",
  components: {
    TBanIcon,
    TShieldCheckIcon,
    TStarSolidIcon,
    TCheckCircleIcon, TXCircleIcon, AppLayout, GridSection, SshPre, TBadge, TContentCard, TTable},
  data() {
    return {
      colors: ['solid-red', 'solid-blue', 'solid-green', 'solid-yellow', 'solid-indigo', 'solid-pink', 'solid-purple', 'solid-gray', 'solid-black', 'solid-white', 'light-red', 'light-blue', 'light-green', 'light-yellow', 'light-indigo', 'light-pink', 'light-purple', 'light-gray'],
      sampleCode: {
        html:
            '<t-badge :radius="8" color="solid-blue" :collapsible="true" value="6.40TL">\n' +
            '    <font-awesome-icon icon="info" slot="icon" />\n' +
            "    Mathematical Signs\n" +
            "</t-badge>",
        js:
            'import TBadge from "@/Components/Badge/TBadge";' +
            "\n" +
            "export default {\n" +
            '  name: "Badge",\n' +
            "  components: {TBadge},\n" +
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
              details: "Your badge color theme.<br><b>Options Solid:</b> solid-red, solid-blue, solid-green, solid-yellow, solid-indigo, solid-pink, solid-purple, solid-gray, solid-black, solid-white,<br>" +
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
              variable: "value",
              type: "String",
              details: "Everything you want"
            },
            {
              variable: ":collapsible",
              type: "Boolean",
              details:
                  "You should with an icon element or font-awesome-icon component. <br>Your icon element or component must contain slot=\"icon\" variable"
            }
          ]
        }
      }
    };
  }
};
</script>

<style scoped></style>
