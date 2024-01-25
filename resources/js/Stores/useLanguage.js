import { defineStore } from "pinia";
import { onBeforeMount, ref } from "vue";
import { router } from "@inertiajs/vue3";
import {useI18n} from "vue-i18n";

export const useLanguage = defineStore("language", () => {
    const processing = ref(false);

    const {locale}= useI18n({
        useScope: "global",
        missingWarn: false,
        warnHtmlMessage: false,
        fallbackWarn: false
    })

    const changeLang = (key) => {
        locale.value = key;
        localStorage.setItem("lang", key);
        router.visit(route("lang", key), {
            onStart: () => (processing.value = true),
            onSuccess: () => (processing.value = false),
            preserveScroll: true
        });
    };

    onBeforeMount(() => {
        if ("lang" in localStorage) {
            changeLang(localStorage.lang);
        }
    });

    return { processing, locale, changeLang };
});
