<script setup>
/*Functions*/
import { defineComponent, inject, provide, ref } from "vue";
import TopMenuNotification from "@/Layouts/TopMenu/TopMenuNotification.vue";
import TopMenuUserMenu from "@/Layouts/TopMenu/TopMenuUserMenu.vue";
import TLoading from "@/Components/Loading/TLoading.vue";
import TopMenuThemeSelector from "@/Layouts/TopMenu/TopMenuThemeSelector.vue";
import TopMenuLanguageSelector from "@/Layouts/TopMenu/TopMenuLanguageSelector.vue";
import { menuStatus, updateMenuStatus } from "@/Functions/menuTrigger";

/*Sources*/
import { appConf, topBarConf } from "@/config";

/*Definitions*/
const searchBar = ref(false);
/*Injections*/
const breakpoints = inject("breakpoints");
const updateMainMenuStatus = updateMenuStatus;

/*Provider*/
provide("appConf", appConf);
provide("topBarConf", topBarConf);
</script>

<template>
    <div
        :class="`radius-${topBarConf.radius ? topBarConf.radius : appConf.radius}`"
        class="top-menu"
    >
        <!--Left Menu Trigger-->
        <div
            v-if="appConf.mainMenuDesign === 'umay' || (breakpoints.smaller('md') && appConf.mainMenuDesign === 'abay')"
            :class="`radius-${topBarConf.radius ? topBarConf.radius : appConf.radius}`"
            class="trigger"
            @click="updateMainMenuStatus"
        >
            <!--Fold & Close Icon-->
            <iconify-icon :class="[
                    (breakpoints.smaller('md') && menuStatus === 'hidden') || menuStatus === 'closed' ? 'trigger-icon-show' : 'trigger-icon-hide'
                ]" class="trigger-icon"
                          icon="tabler:x"></iconify-icon>
            <!--Open Icon-->
            <iconify-icon
                :class="[
                    menuStatus === 'opened' ? 'trigger-icon-show' : 'trigger-icon-hide'
                ]"
                class="trigger-icon"
                icon="tabler:menu-2"></iconify-icon>
        </div>
        <!--Search Box-->
        <div class="search-box">
            <div
                :class="`radius-${topBarConf.radius ? topBarConf.radius : appConf.radius}`"
                class="search-box-wrapper"
                @click="searchBar=true"
            >
                <iconify-icon class="search-icon" icon="tabler:zoom" />
            </div>
        </div>
        <!--Active Team-->
        <div class="active-team">
            <div
                v-if="$page.props.jetstream.hasTeamFeatures"
                :title="$page.props.auth.user.current_team.name"
                class="active-team-wrapper">
                <iconify-icon class="umay-main-menu-icon" icon="tabler:users-group"></iconify-icon>

                <span
                    class="active-team-label"
                    v-text="$page.props.auth.user.current_team.name"
                />
            </div>
        </div>
        <!--Notifications-->
        <top-menu-notification />
        <!--Theme Selector-->
        <top-menu-theme-selector />
        <!--Language Selector-->
        <top-menu-language-selector />
        <!--User Menu-->
        <top-menu-user-menu />
    </div>
    <teleport to="body">
        <!--Search Bar-->
        <t-loading v-model="searchBar" closeable color="gray" title="Search">
            <div
                :class="`radius-${topBarConf.radius ? topBarConf.radius : appConf.radius}`"
                class="search-modal"
            >
                <input id="search" :placeholder="topBarConf.searchPlaceHolderText" type="text" />
            </div>
        </t-loading>
    </teleport>
</template>
