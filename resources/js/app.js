import "./bootstrap";
import "../css/app.css";
import "../sass/app.sass";

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";

/* Multi-language */
import { createI18n } from "vue-i18n";
import { messages } from "./Lang";

const i18n = createI18n({
    legacy: false,
    locale: "en",
    fallbackLocale: "en",
    fallbackRoot: "en",
    messages: messages
});

/* Highlighter */
import VueHighlightJS from "vue3-highlightjs";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

/*Pinia*/
import { createPinia } from "pinia";

const pinia = createPinia();

const mountPoint = document.querySelector('#app');

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob("./Pages/**/*.vue")),
    setup({ el, App, props, plugin }) {
        if (mountPoint.__vue_app__) {
            return mountPoint.__vue_app__._instance.proxy;
        } else {
            return createApp({ render: () => h(App, props) })
                .use(plugin)
                .use(ZiggyVue)
                .use(i18n)
                .use(VueHighlightJS)
                .use(pinia)
                .mount(el);
        }
    },
    progress: {
        color: "#4B5563"
    }
});

export const $i18n = i18n.global;

