<template>
  <Head title="Alerts" />
  <app-layout>
    <template #header>Alerts</template>
    <template #subHeader>Notifications and alert boxes (2.880 variations)</template>
    <template #default>
      <grid-section :col="1" :gap="4">
        <t-alert
          v-for="(content,key) in demoContents"
          :design="content.design"
          :color="content.color"
          :radius="content.radius"
          :title="content.title"
          :closeable="content.closeable"
          :key="key"
        >
          <template #icon v-if="content.icon || content.media">
            <component
              v-if="content.icon"
              :is="content.icon"
              :class="content.design === 'block' ? 'w-7' : 'w-6'"
            />
            <t-avatar
              v-if="content.media"
              :radius="8"
              :size="3"
              src="https://i.pravatar.cc/300"
            />
          </template>
          <span v-html="content.content"></span>
        </t-alert>
      </grid-section>


      <grid-section :col="1">
        <t-alert id="test"
                 :timer="4000"
                 design="inline"
                 title="timed alert"
                 color="pink"
        >
          <template #icon>
            <t-clock-icon class="w-8" />
          </template>
          Closer timer activated, alert box. (<b>4 seconds</b>)
        </t-alert>
        <component
          :is="'t-alert'"
          v-if="newAlertID>0"
          id="alertTimer"
          :key="newAlertID"
          :timer="4000"
          design="inline"
          title="timed alert"
          color="pink"
          @destroy="$event === 'alertTimer' ? active = false : active = true"
        >
          <template #icon>
            <t-clock-icon class="w-8" />
          </template>
          Closer timer activated, alert box. (<b>4 seconds</b>)
        </component>
        <t-button color="pink" size="full" @click="addAlertBox">
          Recall Closed Alert Box
        </t-button>
      </grid-section>
      <!--Sample Codes-->
      <ssh-pre :copy-button="true" label="Code" language="html">{{ sampleCode.html }}</ssh-pre>
      <ssh-pre :copy-button="true" label="JS" language="js">{{ sampleCode.js }}</ssh-pre>
      <!--Variables Table-->
      <t-table :content="sampleCode.table.content"
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
import { defineComponent } from "vue";
import AppLayout from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/inertia-vue3";
/*Component*/
import GridSection from "@/Layouts/GridSection";
import TAlert from "@/Components/Alert/TAlert";
import TButton from "@/Components/Button/TButton";
import TContentCard from "@/Components/Card/TContentCard";
import TTable from "@/Components/Table/TTable";
import TAvatar from "@/Components/Avatar/TAvatar";
import TCheckCircleSolidIcon from "@/Components/Icon/TCheckCircleSolidIcon";
import TTrashIcon from "@/Components/Icon/TTrashIcon";
import TChevronLeftIcon from "@/Components/Icon/TChevronLeftIcon";
import TRefreshIcon from "@/Components/Icon/TRefreshIcon";
import TTooltip from "@/Components/Tooltip/TTooltip";
import TInformationCircleIcon from "@/Components/Icon/TInformationCircleIcon";
import TBanIcon from "@/Components/Icon/TBanIcon";
import TClockIcon from "@/Components/Icon/TClockIcon";
/*Codehighlighter*/
import "simple-syntax-highlighter/dist/sshpre.css";
import SshPre from "simple-syntax-highlighter";


export default defineComponent({
  name: "Alert",
  components: {
    Head,
    TBanIcon,
    TInformationCircleIcon,
    TTooltip,
    TRefreshIcon,
    TChevronLeftIcon,
    TTrashIcon,
    TCheckCircleSolidIcon,
    TAvatar,
    AppLayout,
    GridSection,
    SshPre,
    TAlert,
    TButton,
    TContentCard,
    TTable,
    TClockIcon
  },
  setup() {
    const demoContents = {
      "success": {
        design: "filled",
        content: "The post added successfully <b>(filled)</b>",
        color: "green",
        radius: 3,
        icon: "TCheckCircleSolidIcon",
        title: "Success",
        timer: 10000
      },
      "danger": {
        design: "light",
        content: "The user deleted successfully <b>(light)</b>",
        color: "red", radius: 3,
        icon: "TTrashIcon",
        title: "Danger",
        closeable: true,
        timer: 9000
      },
      "warning": {
        design: "inline",
        content: "Your account was blocked, please connect with IT <b>(inline)</b>",
        color: "yellow",
        radius: 3,
        icon: "TBanIcon",
        timer: 8000
      },
      "info": {
        design: "outline",
        content: "You entered a new configuration, the settings will refresh 24hr after <b>(outline)</b>",
        color: "indigo",
        radius: 2,
        icon: "TRefreshIcon",
        timer: 7000
      },
      "gradient": {
        design: "gradient",
        content: "The new user is successfully added.<br>\n<b>User:</b> Hamdi KAYA <b>(gradient)</b>",
        color: "dream",
        radius: 3,
        media: true,
        closeable: true,
        timer: 6000
      },
      "elegant": {
        design: "elegant",
        content: "The all of changes overwrite to themself <b>(elegant)</b>",
        color: "purple",
        radius: 3,
        title: "Attention",
        closeable: true,
        timer: 5000
      },
      "block": {
        design: "block",
        content: "Please, check your task list <b>(block)</b>",
        color: "blue",
        radius: 1,
        icon: "TInformationCircleIcon",
        closeable: true,
        timer: 4000
      }
    };
    const demoDesigns = ["filled", "light", "gradient", "inline", "outline", "elegant", "block"];

    return { demoContents, demoDesigns };
  },
  data() {
    return {
      active: false,
      newAlertID: 0,
      selectedColor: "red",
      colors: ["red", "blue", "green", "yellow", "indigo", "pink", "purple", "gray", "black", "white"],
      toasterPosition: null,
      newToasterID: 1,
      sampleCode: {
        html:
          "<t-alert color=\"solid-indigo\" :closeable=\"true\" :radius=\"5\" :timer=\"500\">\n" +
          "    <b>Colorful toaster / notification</b>\n" +
          "</t-alert>",
        js:
          "import TAlert from \"@/Components/Alert/TAlert\";\";\n\n" +
          "export default {\n" +
          "  name: \"Alert\",\n" +
          "  components: {TAlert},\n" +
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
              details: "Your alert box color theme.<br><b>Options Solid:</b> solid-red, solid-blue, solid-green, solid-yellow, solid-indigo, solid-pink, solid-purple, solid-gray, solid-black, solid-white,<br>" +
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
              variable: ":closeable",
              type: "Boolean",
              details: "Show a close button on the top right"
            },
            {
              variable: ":timer",
              type: "Number",
              details:
                "This value is milisecond, you can enter 1000"
            },
            {
              variable: "position",
              type: "String",
              details: "If you use the toaster notification, you can use. It's toaster notification position <br><b>Options:</b> lb, rb, lt, rt <small><br>(Means: l: left, r: right, b: bottom, t: top)</small>"
            }
          ]
        }
      }
    };
  },
  methods: {
    addAlertBox() {
      if (this.active === false) {
        this.newAlertID++;
        this.active = true;
      }
    },
    toastAlert() {
      this.newToasterID++;
    }
  }
});
</script>

<style scoped></style>
