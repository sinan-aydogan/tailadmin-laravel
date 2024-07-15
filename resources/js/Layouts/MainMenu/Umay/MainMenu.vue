<script setup>
/*Functions*/
import { inject, provide, ref, watch } from "vue";
import { Link, usePage } from "@inertiajs/vue3";
import { menuStatus, updateMenuStatus } from "@/Functions/menuTrigger";

/*Sources*/
import MainMenuLinks from "@/Sources/mainMenuLinks";
import { appConf, mainMenuConf } from "@/config";
import MainMenuItem from "@/Layouts/MainMenu/Umay/MainMenuItem.vue";
import { cloneDeep } from "lodash";

const { mainMenuLinks, mainMenuFooterLinks } = MainMenuLinks({
    roles: usePage().props.roles,
    permissions: usePage().props.permissions
});

/*Menu - Variables*/
const selectedLink = ref([]);
provide("selectedLink", selectedLink);
const appearingMode = inject("appearingMode");

/*Watch Window Size*/
const breakpoints = inject("breakpoints");
watch(() => cloneDeep(breakpoints), (newValue) => {

    if (newValue.value.smaller("md").value) {
        menuStatus.value = "hidden";
    }

    if (newValue.value.greater("md").value) {
        menuStatus.value = "opened";
    }
});

</script>

<template>
    <aside
        :class="{
        'umay-main-menu-show' : menuStatus === 'opened',
        'umay-main-menu-hide' : menuStatus === 'hidden',
        'umay-main-menu-fold' : menuStatus === 'closed',
        }"
        class="umay-main-menu"
    >
        <!--Logo-->
        <div
            :class="[
        mainMenuConf.umay.logoAreaClasses ? mainMenuConf.umay.logoAreaClasses : appConf.logoAreaClasses,
        `radius-${mainMenuConf.umay.logoAreaRadius ? mainMenuConf.umay.logoAreaRadius : appConf.radius}`
        ]"
            class="header"
        >
            <Link
                :href="route('/')"
                class="logo-out-container"
            >
                <div
                    :class="menuStatus === 'closed' && 'ml-1'"
                    class="logo-inside-container"
                >
                    <!--TODO: Title and Logo will come from DB-->
                    <!--Logo-->
                    <img
                        :class="mainMenuConf.umay.logoClasses"
                        :src="[
                        appearingMode === 'dark' ? mainMenuConf.umay.logo.dark ? mainMenuConf.umay.logo.dark : appConf.logo.dark :
                        mainMenuConf.umay.logo.light ? mainMenuConf.umay.logo.light : appConf.logo.light
                    ]"
                    />
                    <!--Title-->
                    <div
                        id="logo-title"
                        :class="[
                            menuStatus !== 'closed' ? 'umay-main-menu-title-show' : 'umay-main-menu-title-hide',
                            mainMenuConf.umay.appNameClasses
                            ]"
                        v-html="mainMenuConf.appName ? mainMenuConf.appName : appConf.appName"
                    />
                </div>
            </Link>
        </div>

        <!--Menu Items-->
        <nav id="links-wrapper">
            <template v-for="link in mainMenuLinks" :key="link.id">
                <main-menu-item
                    :link="link"
                    @selected="selectedLink = $event"
                />
            </template>
        </nav>
        <!--Menu Footer-->
        <div id="footer">
            <transition mode="out-in" name="fade">
                <!--Settings-->
                <div
                    v-if="mainMenuFooterLinks.length>0 && menuStatus !== 'closed'"
                    id="footer-links-wrapper"
                    key="mainMenuFooterLinks"
                    :class="[
            mainMenuFooterLinks.length>1 ? 'grid-cols-2' : '',
            `radius-${mainMenuConf.umay.radius ? mainMenuConf.umay.radius : appConf.radius}`
            ]"
                >
                    <!--Footer Links-->
                    <template v-for="link in mainMenuFooterLinks">
                        <!--Internal Route Link-->
                        <Link
                            v-if="link.linkType === 'route'"
                            id="footer-link"
                            :key="link.id"
                            :class="mainMenuFooterLinks.length>2 ? 'justify-start' : 'justify-center'"
                            :href="route(link.link)"
                        >
                            <iconify-icon v-if="link.icon" :icon="link.icon" />
                            <span v-text="link.label ? link.label : link.label" />
                        </Link>
                        <!--External Link-->
                        <a
                            v-else
                            id="footer-link"
                            :key="link.id"
                            :class="mainMenuFooterLinks.length>2 ? 'justify-start' : 'justify-center'"
                            :href="link.link"
                            target="_blank"
                        >
                            <iconify-icon v-if="link.icon" :icon="link.icon" />
                            <span v-text="link.label ? link.label : link.label" />
                        </a>
                    </template>
                </div>
                <!--Open Menu Arrow-->
                <div
                    v-else
                    id="footer-trigger"
                    key="mainMenuOpenArrow"
                    @click="updateMenuStatus"
                >
                    <iconify-icon class="umay-main-menu-trigger-icon" icon="tabler:chevrons-right"></iconify-icon>
                </div>
            </transition>
        </div>
    </aside>
</template>
<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: all 300ms;
}

.fade-enter-from, .fade-leave-to {
    opacity: 0;
    transform: scale(0);
}

.fade-enter-to, .fade-leave-from {
    opacity: 1;
    transform: scale(1);
}
</style>

