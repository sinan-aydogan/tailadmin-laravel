/* Flags */
import flagBg from "@/Lang/Flags/flagBg.vue";
import flagDe from "@/Lang/Flags/flagDe.vue";
import flagEn from "@/Lang/Flags/flagEn.vue";
import flagFr from "@/Lang/Flags/flagFr.vue";
import flagRu from "@/Lang/Flags/flagRu.vue";
import flagTr from "@/Lang/Flags/flagTr.vue";
import flagZh from "@/Lang/Flags/flagZh.vue";

import TR from "@/Lang/tr";
import EN from "@/Lang/en";
import BG from "@/Lang/bg";
import DE from "@/Lang/de";
import FR from "@/Lang/fr";
import RU from "@/Lang/ru";
import ZH from "@/Lang/zh/index.js";


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
    { id: "en", name: "English", flag: "flagEn" , translates: EN},
    { id: "tr", name: "Türkçe", flag: "flagTr" , translates: TR},
    { id: "bg", name: "български", flag: "flagBg" , translates: BG},
    { id: "de", name: "Deutsch", flag: "flagDe" , translates: DE},
    { id: "fr", name: "Français", flag: "flagFr" , translates: FR},
    { id: "ru", name: "Pусский", flag: "flagRu" , translates: RU},
    { id: "zh_CN", name: "自从", flag: "flagZh" , translates: ZH},
];

export {
    languages,
    flags,
};
