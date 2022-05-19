<script setup>
/*Functions*/
import {inject, provide, ref, watch} from "vue";
import {Link, usePage} from "@inertiajs/inertia-vue3";
import {menuStatus, updateMenuStatus} from "@/Functions/menuTrigger";

/*Sources*/
import MainMenuLinks from "@/Sources/mainMenuLinks";
import {appConf, mainMenuConf} from "@/config";
import MainMenuItem from "@/Layouts/MainMenu/Umay/MainMenuItem";
import {cloneDeep} from "lodash";

const {mainMenuLinks, mainMenuFooterLinks} = MainMenuLinks({
    roles: usePage().props.value.roles,
    permissions: usePage().props.value.permissions
});

/*Menu - Variables*/
const selectedLink = ref([]);
provide('selectedLink', selectedLink);
const appearingMode = inject("appearingMode");

/*Watch Window Size*/
const breakpoints = inject('breakpoints');
watch(() => cloneDeep(breakpoints), (newValue) => {

    if (newValue.value.smaller('md').value) {
        menuStatus.value = 'hidden'
    }

    if (newValue.value.greater('md').value) {
        menuStatus.value = 'opened'
    }
})

</script>

<template>
    <aside
        class="umay-main-menu"
        :class="{
        'umay-main-menu-show' : menuStatus === 'opened',
        'umay-main-menu-hide' : menuStatus === 'hidden',
        'umay-main-menu-fold' : menuStatus === 'closed',
        }"
    >
        <!--Logo-->
        <div
            class="header"
            :class="[
        mainMenuConf.umay.logoAreaClasses ? mainMenuConf.umay.logoAreaClasses : appConf.logoAreaClasses,
        `radius-${mainMenuConf.umay.logoAreaRadius ? mainMenuConf.umay.logoAreaRadius : appConf.radius}`
        ]"
        >
            <Link
                :href="route('/')"
                class="logo-out-container"
            >
                <div
                    class="logo-inside-container"
                    :class="menuStatus === 'closed' && 'ml-1'"
                >
                    <!--TODO: Title and Logo will come from DB-->
                    <!--Logo-->
                    <img
                        :src="[
                        appearingMode === 'dark' ? mainMenuConf.umay.logo.dark ? mainMenuConf.umay.logo.dark : appConf.logo.dark :
                        mainMenuConf.umay.logo.light ? mainMenuConf.umay.logo.light : appConf.logo.light
                    ]"
                        :class="mainMenuConf.umay.logoClasses"
                    />
                    <!--Title-->
                    <div
                        id="logo-title"
                        v-html="mainMenuConf.appName ? mainMenuConf.appName : appConf.appName"
                        :class="[
                            menuStatus !== 'closed' ? 'umay-main-menu-title-show' : 'umay-main-menu-title-hide',
                            mainMenuConf.umay.appNameClasses
                            ]"
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
            <transition name="fade" mode="out-in">
                <!--Settings-->
                <div
                    key="mainMenuFooterLinks"
                    id="footer-links-wrapper"
                    v-if="mainMenuFooterLinks.length>0 && menuStatus !== 'closed'"
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
                            :class="mainMenuFooterLinks.length>2 ? 'justify-start' : 'justify-center'"
                            :href="route(link.link)"
                            :key="link.id"
                        >
                            <icon v-if="link.icon" :icon="link.icon"/>
                            <span v-text="link.label ? link.label : link.label"/>
                        </Link>
                        <!--External Link-->
                        <a
                            v-else
                            id="footer-link"
                            :class="mainMenuFooterLinks.length>2 ? 'justify-start' : 'justify-center'"
                            :href="link.link"
                            target="_blank"
                            :key="link.id"
                        >
                            <icon v-if="link.icon" :icon="link.icon"/>
                            <span v-text="link.label ? link.label : link.label"/>
                        </a>
                    </template>
                </div>
                <!--Open Menu Arrow-->
                <div
                    key="mainMenuOpenArrow"
                    v-else
                    id="footer-trigger"
                    @click="updateMenuStatus"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="umay-main-menu-trigger-icon" fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M13 5l7 7-7 7M5 5l7 7-7 7"/>
                    </svg>
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

