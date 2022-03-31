require("./bootstrap");

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";

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

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}.vue`),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .use(i18n)
            .use(VueHighlightJS)
            .component("icon", FontAwesomeIcon)
            .mixin({ methods: { route } })
            .mount(el);
    },
});

InertiaProgress.init({ color: "#4B5563" });
