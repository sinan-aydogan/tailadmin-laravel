/* Flags */
import flagBg from "./Flags/flagBg.vue";
import flagDe from "./Flags/flagDe.vue";
import flagEn from "./Flags/flagEn.vue";
import flagFr from "./Flags/flagFr.vue";
import flagRu from "./Flags/flagRu.vue";
import flagTr from "./Flags/flagTr.vue";
import flagZh from "./Flags/flagZh.vue";

import TR from "./tr";
import EN from "./en";
import BG from "./bg";
import DE from "./de";
import FR from "./fr";
import RU from "./ru";
import ZH from "./zh";


const flags = {
    flagBg: flagBg,
    flagDe: flagDe,
    flagEn: flagEn,
    flagFr: flagFr,
    flagRu: flagRu,
    flagTr: flagTr,
    flagZh: flagZh
};

/* Languages */
const languages = [
    { id: "en", name: "English", flag: flagEn },
    { id: "tr", name: "Türkçe", flag: flagTr },
    { id: "bg", name: "български", flag: flagBg },
    { id: "de", name: "Deutsch", flag: flagDe },
    { id: "fr", name: "Français", flag: flagFr },
    { id: "ru", name: "Pусский", flag: flagRu },
    { id: "zh", name: "自从", flag: flagZh }
];

const messages = {
    en: EN,
    tr: TR,
    bg: BG,
    de: DE,
    fr: FR,
    ru: RU,
    zh: ZH
};

export {
    messages,
    languages,
    flags
};
