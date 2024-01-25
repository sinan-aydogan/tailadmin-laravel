import { defineStore } from "pinia";
import { onBeforeMount, ref } from "vue";
import { appConf } from "@/config.js";

export const useTheme = defineStore("theme", () => {
    const selectedTheme = ref(appConf.defaultTheme);
    const themes = ref(appConf.themes);
    const changeTheme = ({ theme = "" }) => {
        if (theme) {
            selectedTheme.value = theme;
            localStorage.setItem("theme", theme);
        } else {
            selectedTheme.value = appConf.defaultTheme;
            localStorage.setItem("theme", appConf.defaultTheme);
        }
    };

    const currentTheme = async (component) => {
        try {
            const module = await import(`/resources/js/Themes/${selectedTheme.value}/${component}/index.js`);
            return module.default;
        } catch (e) {
            const module = await import((`/resources/js/Themes/${appConf.defaultTheme}/${component}/index.js`));
            return module.default;
        }
    };

    onBeforeMount(() => {
        /*Set default theme on startup*/
        if ("theme" in localStorage) {
            changeTheme({ theme: localStorage.theme });
        } else {
            changeTheme({ theme: appConf.defaultTheme });
        }
    });

    return {
        selectedTheme,
        themes,
        currentTheme,
        changeTheme
    };
});
