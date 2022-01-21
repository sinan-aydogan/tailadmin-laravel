<template>
    <div
        class="top-menu"
        :class="`radius-${topBarConf.radius ? topBarConf.radius : appConf.radius}`"
    >
        <!--Left Menu Trigger-->
        <div
            @click="$emit('updateMainMenuStatus', $event)"
            class="trigger"
            :class="`radius-${topBarConf.radius ? topBarConf.radius : appConf.radius}`"
        >
            <!--Fold & Close Icon-->
            <svg
                class="trigger-icon"
                :class="[
                (showMainMenu && !foldMainMenu) || ((deviceType === 'phone' || deviceType==='tablet')&&showMainMenu) ?
                'trigger-icon-show' : 'trigger-icon-hide'
                ]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
            <!--Open Icon-->
            <svg
                class="trigger-icon"
                :class="[
                (showMainMenu && foldMainMenu) || !showMainMenu ?
                'trigger-icon-show' : 'trigger-icon-hide'
                ]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
        </div>
        <!--Search Box-->
        <div class="search-box">
            <div
                @click="searchBar=true"
                class="search-box-wrapper"
                :class="`radius-${topBarConf.radius ? topBarConf.radius : appConf.radius}`"
            >
                <svg
                    class="search-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
            </div>
        </div>
        <!--Active Team-->
        <div class="active-team">
            <div
                v-if="$page.props.jetstream.hasTeamFeatures"
                :title="$page.props.user.current_team.name"
                class="active-team-wrapper">
                <svg
                    class="main-menu-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
                <span
                    class="active-team-label"
                    v-text="$page.props.user.current_team.name"
                />
            </div>
        </div>
        <!--Notifications-->
        <top-menu-notification/>
        <!--Theme Selector-->
        <top-menu-theme-selector/>
        <!--Language Selector-->
        <top-menu-language-selector/>
        <!--User Menu-->
        <top-menu-user-menu/>
    </div>
    <teleport to="body">
        <!--Search Bar-->
        <t-loading v-model="searchBar" color="gray" title="Search" closeable>
            <div
                class="search-modal"
                :class="`radius-${topBarConf.radius ? topBarConf.radius : appConf.radius}`"
            >
                <input type="text" id="search" :placeholder="topBarConf.searchPlaceHolderText"/>
            </div>
        </t-loading>
    </teleport>
</template>

<script>
/*Main functions*/
import TopMenuNotification from "@/Layouts/TopMenu/TopMenuNotification";
import TopMenuUserMenu from "@/Layouts/TopMenu/TopMenuUserMenu";
import {defineComponent, inject, provide, ref} from "vue";
import TLoading from "@/Components/Loading/TLoading";
import TopMenuThemeSelector from "@/Layouts/TopMenu/TopMenuThemeSelector";
import TopMenuLanguageSelector from "@/Layouts/TopMenu/TopMenuLanguageSelector";

/*Sources*/
import {appConf, topBarConf} from "@/config";

export default defineComponent({
    name: "TopMenu",
    components: {TopMenuLanguageSelector, TopMenuThemeSelector, TLoading, TopMenuUserMenu, TopMenuNotification},
    emits: ["updateMainMenuStatus"],
    setup() {
        /*Definitions*/
        const searchBar = ref(false);
        /*Injections*/
        const deviceType = inject("deviceType");
        const foldMainMenu = inject("foldMainMenu");
        const showMainMenu = inject("showMainMenu");

        /*Provider*/
        provide('appConf', appConf);
        provide('topBarConf', topBarConf);

        return {appConf, topBarConf, deviceType, foldMainMenu, showMainMenu, searchBar};
    }
});
</script>

<style scoped>

</style>
