<template>
    <!--Browser Title-->
    <Head :title="title" />
    <!--TODO: Convert to Announcement Bar Component(TA-23)-->
    <jet-banner />
    <!--Main Container-->
    <div class="main-container">
        <!--Main Menu -->
        <main-menu
            @updateMainMenuStatus="mainMenuTrigger"
            :class="[
                showMainMenu ? 'main-menu-show' : 'main-menu-hide',
                foldMainMenu ? 'main-menu-fold' : 'main-menu-expand'
            ]"
        >
            <template v-for="item in mainMenuLinks" :key="item">
                <main-menu-item
                    :item="item"
                    @updateMainMenuStatus="mainMenuTrigger"
                    @selected="selectedLink = $event"
                ></main-menu-item>
            </template>
        </main-menu>
        <!--Content Container-->
        <div class="content-wrapper">
            <!--Top Menu-->
            <top-menu @updateMainMenuStatus="mainMenuTrigger" />
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
import {Inertia} from "@inertiajs/inertia";
import { defineComponent, provide, ref, watch } from "vue";
import { Head } from "@inertiajs/inertia-vue3";

/*Components*/
import JetBanner from "@/Jetstream/Banner.vue";
import MainMenu from "@/Layouts/MainMenu";
import MainMenuItem from "@/Layouts/MainMenuItem";
import TAlert from "@/Components/Alert/TAlert";
import TToastr from "@/Components/Toastr/TToastr";
import TopMenu from "@/Layouts/TopMenu/TopMenu";

/*Sources*/
import {appConf, footerConf} from "@/config";
import MainMenuLinks from "@/Sources/mainMenuLinks";
import DarkMode from "@/Functions/darkMode";
import windowSizeCalculator from "@/Functions/windowSizeCalculator";

/*Multi Language*/
import { useI18n } from "vue-i18n";

export default defineComponent({
    components: {
        TopMenu,
        Head,
        TToastr,
        MainMenu,
        MainMenuItem,
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

        /*Multi Language*/
        const { t } = useI18n();

        /*Side Menu*/
        const {mainMenuLinks} = MainMenuLinks(Inertia.page.props)
        const selectedLink = ref([]);
        provide('selectedLink', ref(selectedLink));
        const showMainMenu = ref(Boolean(localStorage.showMainMenu));
        const foldMainMenu = ref(Boolean(localStorage.foldMainMenu));
        /*Main Menu: Check Local Variables*/

        /*Default Menu Position*/
        if (!localStorage.foldMainMenu || !localStorage.showMainMenu) {
            if (deviceType.value === "tablet" || deviceType.value === "phone") {
                foldMainMenu.value = false;
                showMainMenu.value = false;
            } else {
                showMainMenu.value = true;
                foldMainMenu.value = false;

            }
        }


        /*Main Menu Local Storage Variables Set*/
        const mainMenuStorage = () => {
            localStorage.setItem("showMainMenu", showMainMenu.value.toString());
            localStorage.setItem("foldMainMenu", foldMainMenu.value.toString());
        };
        /*Main Menu: Trigger Function*/
        const mainMenuTrigger = () => {
            if (deviceType.value === "tablet" || deviceType.value === "phone") {
                showMainMenu.value = !showMainMenu.value;
            } else {
                foldMainMenu.value = !foldMainMenu.value;
            }
            mainMenuStorage();
        };

        mainMenuStorage();
        /*Profile Menu Trigger Function*/
        watch(deviceType,
            () => {
                if (localStorage.showMainMenu && localStorage.foldMainMenu) {
                    if (deviceType.value === "tablet" || deviceType.value === "phone") {
                        foldMainMenu.value = false;
                        showMainMenu.value = false;
                    } else if (deviceType.value === "laptop") {
                        foldMainMenu.value = true;
                        showMainMenu.value = true;
                    } else {
                        foldMainMenu.value = false;
                        showMainMenu.value = true;
                    }
                }
                mainMenuStorage();
            });


        /*Providers*/
        provide("deviceType", ref(deviceType));
        provide("foldMainMenu", ref(foldMainMenu));
        provide("showMainMenu", ref(showMainMenu));
        provide("appearingMode", ref(DarkMode().appearingMode));
        provide("appearingMode", ref(DarkMode().appearingMode));
        provide("appConf", ref(appConf));


        /*Slot Check*/
        const hasSlot = name => !!slots[name];

        return {
            footerConf,
            deviceType,
            t,
            hasSlot,
            /*Main Menu*/
            mainMenuLinks,
            foldMainMenu,
            showMainMenu,
            mainMenuTrigger,
            selectedLink,
        };
    }
});
</script>
