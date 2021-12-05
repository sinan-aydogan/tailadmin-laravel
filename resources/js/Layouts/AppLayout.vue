<template>
  <!--Browser Title-->
  <Head :title="title" />
  <!--TODO: Convert to Announcement Bar Component(TA-23)-->
  <jet-banner />
  <!--Main Container-->
  <div class="main-container">
    <!--Left Menu -->
    <left-menu
      @foldLeftMenu="leftMenuTrigger"
      :class="[
          showLeftMenu ? 'left-menu-show' : 'left-menu-hide',
          foldLeftMenu ? 'left-menu-fold' : 'left-menu-expand'
          ]"
    >
      <template
        v-for="(item, index) in leftMenuLinks"
        :key="index"
      >
        <left-menu-item
          :item="item"
          @foldLeftMenu="leftMenuTrigger"
        ></left-menu-item>
      </template>
    </left-menu>
    <!--Content Container-->
    <div class="content-wrapper">
      <!--Top Menu-->
      <top-menu
        @foldLeftMenu="leftMenuTrigger"
      />
      <!--TODO: Sync with Popup Menu-->
      <!--Content-->
      <div class="content-container">
        <!--Content Header-->
        <div class="container-header">
          <!--Page Header-->
          <header class="page-header">
            <!--Page Title-->
            <h1 v-if="hasSlot('header') || header" class="page-title">
              <slot v-if="hasSlot('header')" name="header"/>
              <span v-else v-text="header"/>
            </h1>
            <!--Page SubTitle-->
            <h2 v-if="hasSlot('subHeader') || subHeader" class="page-subtitle">
              <slot v-if="hasSlot('subHeader')" name="subHeader"></slot>
              <span v-else v-text="subHeader"/>
            </h2>
          </header>
          <!--Page Action Buttons-->
          <div v-if="hasSlot('action-buttons')" class="page-action-buttons">
            <slot name="action-buttons"></slot>
          </div>
        </div>
        <!--Breadcrumb-->
        <slot name="breadcrumb"></slot>
        <!--Content-->
        <main class="flex flex-col flex-grow">
          <!--Flash Messages-->
          <div v-if="$page.props.flash.message" class="alert">
            <t-alert
              :color="$page.props.flash.message.type"
              :timer="5000"
              class="my-2"
            >
              <span v-html="$page.props.flash.message.content"></span>
            </t-alert>
          </div>
          <slot></slot>
        </main>
        <!--Toastr Notifications-->
        <div v-if="$page.props.flash.toastr">
          <t-toastr
            :key="$page.props.flash.toastr.content"
            :closeable="true"
            :color="$page.props.flash.toastr.type"
            :position="$page.props.flash.toastr.position"
            :timer="3000"
          >
            <span v-html="$page.props.flash.toastr.content"></span>
          </t-toastr>
        </div>
      </div
      >
      <footer
        v-if="conf.app.footer.status"
        class="footer"
      >
        <span class="mt-1 space-x-1 select-none" v-html="conf.app.footer.text" />
      </footer>
    </div>
  </div>
  <!--Modals-->
  <teleport to="body">
  </teleport>
</template>

<script>
import { defineComponent, onBeforeMount, provide, reactive, ref, watch } from "vue";
import JetBanner from "@/Jetstream/Banner.vue";
import JetResponsiveNavLink from "@/Jetstream/ResponsiveNavLink.vue";
import LeftMenu from "@/Layouts/LeftMenu";
import LeftMenuItem from "@/Layouts/LeftMenuItem";
import TAlert from "@/Components/Alert/TAlert";
import TToastr from "@/Components/Toastr/TToastr";
import { Head, Link } from "@inertiajs/inertia-vue3";
import windowSizeCalculator from "@/Functions/windowSizeCalculator";
import config from "@/config";
import { leftMenu } from "@/leftMenu";
import { useI18n } from "vue-i18n";
import TopMenu from "@/Layouts/TopMenu";


export default defineComponent({
  components: {
    TopMenu,
    Head,
    TToastr,
    LeftMenuItem,
    LeftMenu,
    JetBanner,
    TAlert
  },
  props: {
    title: {
      type: String,
      default: null
    },
    header: {
      type: String,
      default: null
    },
    subHeader: {
      type: String,
      default: null
    }
  },
  mixins: [leftMenu],
  setup(props, { slots }) {
    /*Definitions*/
    const { t } = useI18n();
    const { deviceType } = windowSizeCalculator();
    const { conf } = config();

    /*Left Menu*/
    const showLeftMenu = ref(Boolean(localStorage.showLeftMenu));
    const foldLeftMenu = ref(Boolean(localStorage.foldLeftMenu));
    /*Left Menu: Check Local Variables*/
    onBeforeMount(() => {
      /*Default Menu Position*/
      if (!localStorage.foldLeftMenu || !localStorage.showLeftMenu) {
        if (deviceType.value === "tablet" || deviceType.value === "phone") {
          foldLeftMenu.value = false;
          showLeftMenu.value = false;
        } else {
          showLeftMenu.value = true;
          foldLeftMenu.value = false;
        }
      }
      leftMenuStorage();
    });
    /*Left Menu Local Storage Variables Set*/
    const leftMenuStorage = () => {
      localStorage.setItem("showLeftMenu", showLeftMenu.value.toString());
      localStorage.setItem("foldLeftMenu", foldLeftMenu.value.toString());
    };
    /*Left Menu: Trigger Function*/
    const leftMenuTrigger = () => {
      if (deviceType.value === "tablet" || deviceType.value === "phone") {
        showLeftMenu.value = !showLeftMenu.value;
      } else {
        foldLeftMenu.value = !foldLeftMenu.value;
      }
      leftMenuStorage();
    };
    console.log(deviceType.value)
    /*Profile Menu Trigger Function*/
    watch(deviceType,
      () => {
        if (localStorage.showLeftMenu && localStorage.foldLeftMenu) {
          if (deviceType.value === "tablet" || deviceType.value === "phone") {
            foldLeftMenu.value = false;
            showLeftMenu.value = false;
          } else if (deviceType.value === "laptop") {
            foldLeftMenu.value = true;
            showLeftMenu.value = true;
          } else {
            foldLeftMenu.value = false;
            showLeftMenu.value = true;
          }
        }
        leftMenuStorage();
      });


    /*Providers*/
    provide("deviceType", ref(deviceType));
    provide("foldLeftMenu", ref(foldLeftMenu));
    provide("showLeftMenu", ref(showLeftMenu));
    provide("conf", reactive(conf));

    /*Slot Check*/
    const hasSlot = name => !!slots[name];

    return {
      showLeftMenu,
      foldLeftMenu,
      deviceType,
      conf,
      t,
      leftMenuTrigger,
      leftMenuStorage,
      hasSlot
    };
  }
});
</script>
