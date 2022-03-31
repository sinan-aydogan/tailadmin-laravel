<template>
    <aside
        class="main-menu">
        <!--Logo-->
        <div
            class="header"
            :class="[
        mainMenuConf.logoAreaClasses ? mainMenuConf.logoAreaClasses : appConf.logoAreaClasses,
        `radius-${mainMenuConf.logoAreaRadius ? mainMenuConf.logoAreaRadius : appConf.radius}`
        ]"
        >
            <Link
                :href="route('/')"
                class="logo-out-container"
            >
                <div
                    class="logo-inside-container"
                    :class="foldMainMenu && 'ml-1'"
                >
                    <!--TODO: Title and Logo will come from DB-->
                    <!--Logo-->
                    <img
                        :src="[
                        appearingMode === 'dark' ? mainMenuConf.logo.dark ? mainMenuConf.logo.dark : appConf.logo.dark :
                        mainMenuConf.logo.light ? mainMenuConf.logo.light : appConf.logo.light
                    ]"
                        :class="mainMenuConf.logoClasses"
                    />
                    <!--Title-->
                    <div
                        id="logo-title"
                        v-html="mainMenuConf.appName ? mainMenuConf.appName : appConf.appName"
                        :class="[
                            !foldMainMenu ? 'main-menu-title-show' : 'main-menu-title-hide',
                            mainMenuConf.appNameClasses
                            ]"
                    />
                </div>
            </Link>
        </div>
        <!--Menu Items-->
        <nav id="links-wrapper">
            <slot/>
        </nav>
        <!--Menu Footer-->
        <div id="footer">
            <transition name="fade" mode="out-in">
                <!--Settings-->
                <div
                    key="mainMenuFooterLinks"
                    id="footer-links-wrapper"
                    v-if="mainMenuFooterLinks.length>0 && !foldMainMenu"
                    :class="[
            mainMenuFooterLinks.length>1 ? 'grid-cols-2' : '',
            `radius-${mainMenuConf.radius ? mainMenuConf.radius : appConf.radius}`
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
                    @click="$emit('updateMainMenuStatus', true)"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="main-menu-trigger-icon" fill="none"
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

<script>
/*Main Functions*/
import {defineComponent, inject, provide} from "vue";
import {Link} from "@inertiajs/inertia-vue3";

/*Sources*/
import MainMenuLinks from "@/Sources/mainMenuLinks";
import {appConf, mainMenuConf} from "@/config";

/*Multi Language*/
import {Inertia} from "@inertiajs/inertia";

export default defineComponent({
    name: "MainMenu",
    components: {
        Link
    },
    emits: ["updateMainMenuStatus"],
    setup() {
        /*Menu*/
        const {mainMenuFooterLinks} = MainMenuLinks(Inertia.page.props)


        /*Injection*/
        const foldMainMenu = inject("foldMainMenu");
        const appearingMode = inject("appearingMode");

        return {
            appConf,
            appearingMode,
            mainMenuConf,
            foldMainMenu,
            mainMenuFooterLinks,
        };
    }
});
</script>

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
