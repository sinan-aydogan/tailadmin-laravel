<template>
  <Head title="Alerts" />
  <app-layout>
    <template #header>Alerts</template>
    <template #subHeader>Closeable and timeable elite alert boxes</template>
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
              <icon v-if="content.icon" :icon="content.icon" size="lg"/>
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
            <icon icon="clock" size="lg"/>
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
            <icon icon="clock" size="lg"/>
          </template>
          Closer timer activated, alert box. (<b>4 seconds</b>)
        </component>
        <t-button color="pink" size="full" @click="addAlertBox">
          Recall Closed Alert Box
        </t-button>
      </grid-section>
    </template>
  </app-layout>
</template>

<script>
/*Main Functions*/
import { defineComponent, ref } from "vue";
import { Head } from "@inertiajs/inertia-vue3";

/*Component*/
import AppLayout from "@/Layouts/AppLayout";
import GridSection from "@/Layouts/GridSection";
import TAlert from "@/Components/Alert/TAlert";
import TButton from "@/Components/Button/TButton";
import TAvatar from "@/Components/Avatar/TAvatar";

/*Import FontAwesomeIcon*/
import { library } from "@fortawesome/fontawesome-svg-core";
import {faCheckCircle, faTrash, faChevronLeft, faRetweet, faBan, faClock, faInfo} from "@fortawesome/free-solid-svg-icons";
library.add(faCheckCircle, faTrash, faChevronLeft, faRetweet, faBan, faClock, faInfo)


export default defineComponent({
  name: "Alert",
  components: {
    Head,
    TAvatar,
    AppLayout,
    GridSection,
    TAlert,
    TButton,
  },
  setup() {
    const demoContents = {
      "success": {
        design: "filled",
        content: "The post added successfully <b>(filled)</b>",
        color: "green",
        radius: 3,
        icon: "check-circle",
        title: "Success",
        timer: 10000
      },
      "danger": {
        design: "light",
        content: "The user deleted successfully <b>(light)</b>",
        color: "red", radius: 3,
        icon: "trash",
        title: "Danger",
        closeable: true,
        timer: 9000
      },
      "warning": {
        design: "inline",
        content: "Your account was blocked, please connect with IT <b>(inline)</b>",
        color: "yellow",
        radius: 3,
        icon: "ban",
        timer: 8000
      },
      "info": {
        design: "outline",
        content: "You entered a new configuration, the settings will refresh 24hr after <b>(outline)</b>",
        color: "indigo",
        radius: 2,
        icon: "retweet",
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
        icon: "info",
        closeable: true,
        timer: 4000
      }
    };
    const demoDesigns = ["filled", "light", "gradient", "inline", "outline", "elegant", "block"];
    const active = ref(false)
    const newAlertID = ref(0)
    const selectedColor = ref('red')
    const colors = ["red", "blue", "green", "yellow", "indigo", "pink", "purple", "gray", "black", "white"]

    const addAlertBox = () => {
      if (active.value === false) {
        newAlertID.value++;
        active.value = true;
      }
    }

    return {
        active,
        newAlertID,
        selectedColor,
        colors,
        demoContents,
        demoDesigns,
        addAlertBox
        };
  }
});
</script>
