import { defineStore } from "pinia";
import { onBeforeMount, ref } from "vue";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import { mainMenuConf } from "@/config.js";

export const useMainMenu = defineStore("mainMenu", () => {
    const status = ref("closed");
    const breakpoints = useBreakpoints(breakpointsTailwind);

    const updateStatus = () => {
        if (breakpoints.smaller("sm")) {
            /*Set status in mobile devices*/
            if (status.value === "hidden" || status.value === "closed") {
                status.value = "opened";
                localStorage.setItem("mainMenu", "opened");
            } else {
                status.value = "hidden";
                localStorage.setItem("mainMenu", "hidden");
            }
        } else {
            /*Set status in pc*/
            if (status.value === "opened" || status.value === "hidden") {
                status.value = "closed";
                localStorage.setItem("mainMenu", "closed");
            } else {
                status.value = "opened";
                localStorage.setItem("mainMenu", "opened");
            }
        }
    };

    onBeforeMount(() => {
        if ("menuStatus" in localStorage) {
            status.value = localStorage.menuStatus;
            updateStatus();
        } else {
            if (breakpoints.smaller("sm")) {
                status.value = mainMenuConf.defaultStatus.smallScreens;
            } else {
                status.value = mainMenuConf.defaultStatus.largeScreens;
            }
            updateStatus();
        }
    });

    return { status, updateStatus };
});
