import './bootstrap';
import '../css/app.css';
import '../sass/app.sass';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

/* Multi-language */
import { createI18n } from "vue-i18n";
import {languages} from "./Lang";
const i18n = createI18n({
    legacy: false,
    locale: "en",
    fallbackLocale: "en",
    fallbackRoot: "en",
    messages: languages.map(lang => ({[lang.id]: lang.translates})).reduce((a, b) => ({...a, ...b}), {}),
});

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(i18n)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
