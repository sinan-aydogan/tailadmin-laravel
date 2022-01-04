<template>
    <aside
        class="left-menu">
        <!--Logo-->
        <div
            class="header"
            :class="[
        conf.app.leftMenu.headerBgColor,
        'radius-' + conf.app.leftMenu.radius
        ]"
        >
            <Link
                :href="route('/')"
                class="logo-out-container"
            >
                <div class="logo-inside-container">
                    <!--TODO: Title and Logo will come from DB-->
                    <!--Logo-->
                    <svg
                        id="logo"
                        v-html="conf.app.leftMenu.logo"
                    />
                    <!--Title-->
                    <div
                        id="logo-title"
                        :class="[!foldLeftMenu ? 'left-menu-title-show' : 'left-menu-title-hide']"
                        v-html="conf.app.leftMenu.title"
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
                    key="leftMenuFooterLinks"
                    id="footer-links-wrapper"
                    v-if="conf.app.leftMenu.footer.links.length>0 && !foldLeftMenu"
                    :class="[
            conf.app.leftMenu.footer.links.length>1 ? 'grid-cols-2' : '',
            'radius-' + conf.app.leftMenu.radius
            ]"
                >
                    <!--Footer Links-->
                    <template v-for="link in sideMenuFooterLinksGn">
                        <!--Internal Route Link-->
                        <Link
                            v-if="link.linkType === 'route'"
                            id="footer-link"
                            :class="sideMenuFooterLinksGn.length>2 ? 'justify-start' : 'justify-center'"
                            :href="route(link.link)"
                        >
                            <icon v-if="link.icon" :icon="link.icon"/>
                            <span v-text="tm(link.label ? link.label : link.label)"/>
                        </Link>
                        <!--External Link-->
                        <a
                            v-else
                            id="footer-link"
                            :class="sideMenuFooterLinksGn.length>2 ? 'justify-start' : 'justify-center'"
                            :href="link.link"
                            target="_blank"
                        >
                            <icon v-if="link.icon" :icon="link.icon"/>
                            <span v-text="tm(link.label ? link.label : link.label)"/>
                        </a>
                    </template>
                </div>
                <!--Open Menu Arrow-->
                <div
                    key="leftMenuOpenArrow"
                    v-else
                    id="footer-trigger"
                    @click="$emit('foldLeftMenu', true)"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="left-menu-trigger-icon" fill="none"
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

/*External Sources Functions*/
import {sideMenuFooterLinks} from "@/Config/menuLinks";

/*Multi Language*/
import {useI18n} from "vue-i18n";
import {sideMenuTranslates} from "@/Lang/languages";

export default defineComponent({
    name: "LeftMenu",
    components: {
        Link
    },
    emits: ["foldLeftMenu"],
    setup() {

        /*Footer Links*/
        const sideMenuFooterLinksGn = sideMenuFooterLinks;

        /*Multi Language*/
        const {tm} = useI18n({
            inheritLocale: true,
            messages: sideMenuTranslates,
        });

        /*Provider*/
        provide('tm', tm);

        /*Injection*/
        const foldLeftMenu = inject("foldLeftMenu");
        const conf = inject("conf");

        return {
            foldLeftMenu,
            conf,
            sideMenuFooterLinksGn,
            tm
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
