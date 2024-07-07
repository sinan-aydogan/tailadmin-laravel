import { defineStore } from "pinia";
import { onBeforeMount, ref } from "vue";
import { useI18n } from "vue-i18n";
import { router } from "@inertiajs/vue3";

export const useDisplayLanguageStore = defineStore("displayLanguage", () => {
    /*Language Selector*/
    const loadingTranslations = ref(false);

    const { locale } = useI18n({
        useScope: "global",
        missingWarn: false,
        warnHtmlMessage: false,
        fallbackWarn: false
    });

    onBeforeMount(() => {
        if (localStorage.lang) {
            locale.value = localStorage.lang;
        }
    });
    const changeLang = (key) => {
        locale.value = key;
        localStorage.setItem("lang", key);
        router.visit(route("lang", key), {
            onStart: () => (loadingTranslations.value = true),
            onSuccess: () => (loadingTranslations.value = false),
            preserveScroll: true
        });
    };

    return { locale, loadingTranslations, changeLang };
})
