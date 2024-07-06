import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';

/* FontAwesome */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "@/Sources/icons";

/* Multi-language */
import { createI18n } from "vue-i18n";
import generalLangBg from "@/Lang/bg/general_lang_bg";
import generalLangDe from "@/Lang/de/general_lang_de";
import generalLangEn from "@/Lang/en/general_lang_en";
import generalLangFr from "@/Lang/fr/general_lang_fr";
import generalLangRu from "@/Lang/ru/general_lang_ru";
import generalLangTr from "@/Lang/tr/general_lang_tr";
import generalLangZh from "@/Lang/zh/general_lang_zh";

const i18n = createI18n({
    legacy: false,
    locale: "en",
    fallbackLocale: "en",
    fallbackRoot: "en",
    messages: {
        bg: generalLangBg,
        de: generalLangDe,
        en: generalLangEn,
        fr: generalLangFr,
        ru: generalLangRu,
        tr: generalLangTr,
        zh: generalLangZh,
    },
});

/* Highlighter */
import VueHighlightJS from 'vue3-highlightjs'

/* Pinia */
import setupPinia from './Stores';

const appName = import.meta.env.VITE_APP_NAME || 'TailAdmin';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(i18n)
            .use(setupPinia())
            .use(VueHighlightJS)
            .component("icon", FontAwesomeIcon)
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
