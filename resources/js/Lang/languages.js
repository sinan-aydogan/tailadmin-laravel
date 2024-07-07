/* Flags */
import flagBg from "@/Lang/Flags/flagBg.vue";
import flagDe from "@/Lang/Flags/flagDe.vue";
import flagEn from "@/Lang/Flags/flagEn.vue";
import flagFr from "@/Lang/Flags/flagFr.vue";
import flagRu from "@/Lang/Flags/flagRu.vue";
import flagTr from "@/Lang/Flags/flagTr.vue";
import flagZh from "@/Lang/Flags/flagZh.vue";

/* Languages */
const languages = [
    { id: "en", name: "English", flag: flagEn },
    { id: "tr", name: "Türkçe", flag: flagTr },
    { id: "bg", name: "български", flag: flagBg },
    { id: "de", name: "Deutsch", flag: flagDe },
    { id: "fr", name: "Français", flag: flagFr },
    { id: "ru", name: "Pусский", flag: flagRu },
    { id: "zh", name: "自从", flag: flagZh },
];

/* Translates */

/* Auth Translates */
import authLangBg from "@/Lang/bg/auth_lang_bg";
import authLangDe from "@/Lang/de/auth_lang_de";
import authLangEn from "@/Lang/en/auth_lang_en";
import authLangFr from "@/Lang/fr/auth_lang_fr";
import authLangRu from "@/Lang/ru/auth_lang_ru";
import authLangTr from "@/Lang/tr/auth_lang_tr";
import authLangZh from "@/Lang/zh/auth_lang_zh";
const authTranslates = {
    bg: authLangBg,
    de: authLangDe,
    en: authLangEn,
    fr: authLangFr,
    ru: authLangRu,
    tr: authLangTr,
    zh: authLangZh,
};

/*Side Menu Translates*/
import mainMenuLangBg from "@/Lang/bg/main_menu_lang_bg";
import mainMenuLangDe from "@/Lang/de/main_menu_lang_de";
import mainMenuLangEn from "@/Lang/en/main_menu_lang_en";
import mainMenuLangFr from "@/Lang/fr/main_menu_lang_fr";
import mainMenuLangRu from "@/Lang/ru/main_menu_lang_ru";
import mainMenuLangTr from "@/Lang/tr/main_menu_lang_tr";
import mainMenuLangZh from "@/Lang/zh/main_menu_lang_zh";
const mainMenuTranslates = {
    bg: mainMenuLangBg,
    de: mainMenuLangDe,
    en: mainMenuLangEn,
    fr: mainMenuLangFr,
    ru: mainMenuLangRu,
    tr: mainMenuLangTr,
    zh: mainMenuLangZh,
};

/*User Menu Translates*/
import userMenuLangBg from "@/Lang/bg/user_menu_lang_bg";
import userMenuLangDe from "@/Lang/de/user_menu_lang_de";
import userMenuLangEn from "@/Lang/en/user_menu_lang_en";
import userMenuLangFr from "@/Lang/fr/user_menu_lang_fr";
import userMenuLangRu from "@/Lang/ru/user_menu_lang_ru";
import userMenuLangTr from "@/Lang/tr/user_menu_lang_tr";
import userMenuLangZh from "@/Lang/zh/user_menu_lang_zh";
const userMenuTranslates = {
    bg: userMenuLangBg,
    de: userMenuLangDe,
    en: userMenuLangEn,
    fr: userMenuLangFr,
    ru: userMenuLangRu,
    tr: userMenuLangTr,
    zh: userMenuLangZh,
};

/*Notification Translates*/
import notificationLangBg from "@/Lang/bg/notification_lang_bg";
import notificationLangDe from "@/Lang/de/notification_lang_de";
import notificationLangEn from "@/Lang/en/notification_lang_en";
import notificationLangFr from "@/Lang/fr/notification_lang_fr";
import notificationLangRu from "@/Lang/ru/notification_lang_ru";
import notificationLangTr from "@/Lang/tr/notification_lang_tr";
import notificationLangZh from "@/Lang/zh/notification_lang_zh";
const notificationTranslates = {
    bg: notificationLangBg,
    de: notificationLangDe,
    en: notificationLangEn,
    fr: notificationLangFr,
    ru: notificationLangRu,
    tr: notificationLangTr,
    zh: notificationLangZh,
};

export {
    languages,
    authTranslates,
    mainMenuTranslates,
    userMenuTranslates,
    notificationTranslates
};
