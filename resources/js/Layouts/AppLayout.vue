<template>
    <!--Browser Title-->
    <Head :title="title" />
    <!--TODO: Convert to Announcement Bar Component(TA-23)-->
    <jet-banner />
    <!--Main Container-->
    <div class="main-container">
        <!--Main Menu -->
        <main-menu/>
        <!--Content Container-->
        <div class="content-wrapper">
            <!--Top Menu-->
            <top-menu/>
            <!--TODO: Sync with Popup Menu-->
            <!--Content-->
            <div class="content-container">
                <!--Content Header-->
                <div class="container-header">
                    <!--Page Header-->
                    <header class="page-header">
                        <!--Page Title-->
                        <h1 v-if="hasSlot('header') || header" class="page-title">
                            <slot v-if="hasSlot('header')" name="header" />
                            <span v-else v-text="header" />
                        </h1>
                        <!--Page SubTitle-->
                        <h2 v-if="hasSlot('subHeader') || subHeader" class="page-subtitle">
                            <slot v-if="hasSlot('subHeader')" name="subHeader"></slot>
                            <span v-else v-text="subHeader" />
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
                        <t-alert :color="$page.props.flash.message.type" :timer="5000" class="my-2">
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
            </div>
            <footer v-if="footerConf.visible" class="footer">
                <span class="mt-1 space-x-1 select-none" v-html="footerConf.content" />
            </footer>
        </div>
    </div>
    <!--Modals-->
    <teleport to="body"></teleport>
</template>

<script>
/*Main Functions*/
import { defineComponent, provide, ref, useSlots } from "vue";
import {Head} from "@inertiajs/vue3";
import {breakpointsTailwind, useBreakpoints} from '@vueuse/core'

/*Components*/
import JetBanner from "@/Jetstream/Banner.vue";
import MainMenu from "@/Layouts/MainMenu.vue";
import TAlert from "@/Components/Alert/TAlert.vue";
import TToastr from "@/Components/Toastr/TToastr.vue";
import TopMenu from "@/Layouts/TopMenu/TopMenu.vue";

/*Sources*/
import {appConf, footerConf} from "@/config";
import windowSizeCalculator from "@/Functions/windowSizeCalculator";

/*Multi Language*/
import { useI18n } from "vue-i18n";
import { useDarkModeStore } from "@/Stores/darkMode";
import { storeToRefs } from "pinia";

export default defineComponent({
    components: {
        TopMenu,
        Head,
        TToastr,
        MainMenu,
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
    setup(props, { slots }) {
        /*Definitions*/
        const { deviceType } = windowSizeCalculator();

        /*Dark Mode*/
        const darkModeStore= useDarkModeStore();
        const { changeThemeUser} = storeToRefs(darkModeStore);

        /*Multi Language*/
        const { t } = useI18n();

        /*Providers*/
        provide("breakpoints", ref(useBreakpoints(breakpointsTailwind)));
        provide("appearingMode", ref(darkModeStore.appearingMode));
        provide("appConf", ref(appConf));


        /*Slot Check*/
        const hasSlot = name => !!useSlots()[name];

        return {
            footerConf,
            deviceType,
            t,
            hasSlot
        };
    }
});
</script>
