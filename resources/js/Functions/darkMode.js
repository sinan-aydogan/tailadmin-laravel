import { watch, ref, onBeforeMount } from "vue";

export default function () {
    /*Dark Mode*/
    const darkMode = ref("auto");
    const appearingMode = ref("auto")

    /*Dark Mode: Check Local Variables*/
    onBeforeMount(() => {
        if (localStorage.theme === "dark") {
            makeDark();
            darkMode.value = "dark";
        } else if (localStorage.theme === "light") {
            makeLight();
            darkMode.value = "light";
        } else {
            makeAuto();
            darkMode.value = "auto";
        }
    });

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
        appearingMode.value = "light"
    };

    const makeAuto = () => {
        let darkMedia = window.matchMedia("(prefers-color-scheme: dark)");
        const changeAutoTheme = () => {
            if (darkMedia.matches) {
                makeDark();
                appearingMode.value = "dark";
            } else {
                makeLight();
                appearingMode.value = "light"
            }
        };
        changeAutoTheme();
        darkMedia.onchange = () => {
            changeAutoTheme();
        };
    };
    const darkModeStorage = () => {
        localStorage.setItem("theme", darkMode.value);
    };
    /*Dark Mode: Watch*/
    watch(darkMode, () => {
        if (darkMode.value === "dark") {
            makeDark();
            darkModeStorage();
        } else if (darkMode.value === "light") {
            makeLight();
            darkModeStorage();
        } else {
            makeAuto();
            localStorage.setItem("theme", "auto");
        }
    });

    /* Change Dark Mode */
    const changeTheme = () => {
                if (darkMode .value=== 'light') {
                  darkMode.value = 'dark';
                } else if (darkMode.value === 'dark') {
                  darkMode .value= 'auto';
                } else {
                  darkMode.value = 'light';
                }
              }

    return { darkMode, appearingMode, changeTheme };
}
