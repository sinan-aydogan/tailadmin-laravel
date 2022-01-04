import { onBeforeMount, ref } from "vue";
import { useI18n } from "vue-i18n";
import { Inertia } from "@inertiajs/inertia";

export default function () {
    /*Language Selector*/
    const loadingTranslations = ref(false);
    const { locale } = useI18n({
        useScope: "global",
        missingWarn: false,
        warnHtmlMessage: false,
        fallbackWarn: false,
    });
    onBeforeMount(() => {
        if (localStorage.lang) {
            locale.value = localStorage.lang;
        }
    });
    const changeLang = (key) => {
        locale.value = key;
        localStorage.setItem("lang", key);
        Inertia.visit(route("lang", key), {
            onStart: () => (loadingTranslations.value = true),
            onSuccess: () => (loadingTranslations.value = false),
            preserveScroll: true,
        });
    };

    return { locale, loadingTranslations, changeLang };
}
