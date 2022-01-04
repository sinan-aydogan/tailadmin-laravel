/* Flags */
import flagBg from "@/Lang/Flags/flagBg";
import flagDe from "@/Lang/Flags/flagDe";
import flagEn from "@/Lang/Flags/flagEn";
import flagFr from "@/Lang/Flags/flagFr";
import flagRu from "@/Lang/Flags/flagRu";
import flagTr from "@/Lang/Flags/flagTr";
import flagZh from "@/Lang/Flags/flagZh";

const flags = {
    flagBg: flagBg,
    flagDe: flagDe,
    flagEn: flagEn,
    flagFr: flagFr,
    flagRu: flagRu,
    flagTr: flagTr,
    flagZh: flagZh,
};

/* Languages */
const languages = [
    {id: "en", name: "English", flag: "flagEn"},
    {id: "tr", name: "Türkçe", flag: "flagTr"},
    {id: "bg", name: "български", flag: "flagBg"},
    {id: "de", name: "Deutsch", flag: "flagDe"},
    {id: "fr", name: "Français", flag: "flagFr"},
    {id: "ru", name: "Pусский", flag: "flagRu"},
    {id: "zh", name: "自从", flag: "flagZh"},
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
import sideMenuLangBg from "@/Lang/bg/side_menu_lang_bg";
import sideMenuLangDe from "@/Lang/de/side_menu_lang_de";
import sideMenuLangEn from "@/Lang/en/side_menu_lang_en";
import sideMenuLangFr from "@/Lang/fr/side_menu_lang_fr";
import sideMenuLangRu from "@/Lang/ru/side_menu_lang_ru";
import sideMenuLangTr from "@/Lang/tr/side_menu_lang_tr";
import sideMenuLangZh from "@/Lang/zh/side_menu_lang_zh";
const sideMenuTranslates = {
    bg: sideMenuLangBg,
    de: sideMenuLangDe,
    en: sideMenuLangEn,
    fr: sideMenuLangFr,
    ru: sideMenuLangRu,
    tr: sideMenuLangTr,
    zh: sideMenuLangZh,
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

export {
    languages,
    flags,
    authTranslates,
    sideMenuTranslates,
    userMenuTranslates
};
