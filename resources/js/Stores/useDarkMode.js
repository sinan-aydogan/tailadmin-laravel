import { defineStore } from "pinia";
import { onMounted, ref, watch } from "vue";
import { appConf } from "@/config.js";

export const useDarkMode = defineStore("darkMode", () => {
    /*Dark Mode*/
    const darkMode = ref("auto");
    const appearingMode = ref("dark");
    let darkMedia = window.matchMedia("(prefers-color-scheme: dark)");

    /*Dark Mode: Set Functions*/
    const makeDark = () => {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
        document.documentElement.classList.remove("auto");
        appearingMode.value = "dark";
    };
    const makeLight = () => {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.remove("auto");
        appearingMode.value = "light";
    };

    const makeAuto = () => {
        if (darkMedia.matches) {
            makeDark();
        } else {
            makeLight();
        }
    };

    /* Change Dark Mode */
    const changeMode = (mode) => {
        switch (mode) {
            case "dark":
                makeDark();
                darkMode.value = "dark";
                localStorage.setItem("darkMode", "dark");
                break;
            case "light":
                makeLight();
                darkMode.value = "light";
                localStorage.setItem("darkMode", "light");
                break;
            default:
                makeAuto();
                darkMode.value = "auto";
                localStorage.setItem("darkMode", "auto");
                break;
        }
    };

    onMounted(() => {
        /*Set default theme on startup*/
        if ("darkMode" in localStorage) {
            changeMode(localStorage.theme);
        } else {
            changeMode(appConf.darkMode);
        }

        darkMedia.onchange = () => {
            if (darkMode.value === "auto" && darkMedia.matches) {
                makeAuto();
            }
        };
    });

    watch(darkMode, () => changeMode(darkMode.value));

    return {
        darkMode,
        appearingMode,
        changeMode
    };
});
