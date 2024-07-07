<template>
    <div
        class="flex p-2 w-10 h-10 justify-center items-center cursor-pointer hover:bg-slate-500/10 dark:hover:bg-slate-500/50 overflow-hidden text-white  transform transition-all duration-300"
        :class="`radius-${topBarConf.radius ? topBarConf.radius : appConf.radius}`"
        @click="updateDarkModePreference()"
    >
        <transition-group name="darkTransition">
            <!-- Light -->
            <icon
                v-if="darkMode === 'light'"
                icon="sun"
                size="lg"
                key="light"
                :alt="t('lightMode')"
                class="text-yellow-500 transform hover:scale-110 active:scale-90 transition-all duration-300"
            />
            <!-- Auto -->
            <icon
                v-if="darkMode === 'auto'"
                icon="palette"
                size="lg"
                key="auto"
                :alt="t('auto')"
                class="transform hover:scale-110 active:scale-90 transition-all duration-300"
                :class="{
                    'text-gray-500' : appearingMode === 'light',
                    'text-slate-50' : appearingMode === 'dark',
                }"
            />
            <!-- Dark -->
            <icon
                v-if="darkMode === 'dark'"
                icon="moon"
                size="lg"
                key="dark"
                :alt="t('darkMode')"
                class="transform hover:scale-110 active:scale-90 transition-all duration-300"
            />
        </transition-group>
    </div>
</template>

<script setup>
/* Main Functions */
import { inject } from "vue";
import { usePage } from "@inertiajs/vue3";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useDarkModeStore } from "@/Stores/darkMode";

/*Components*/
import { faSun, faMoon, faPalette } from "@fortawesome/free-solid-svg-icons";

library.add(faSun, faMoon, faPalette);

/*Multi Language*/
import { useI18n } from "vue-i18n";
import { useForm } from "@inertiajs/vue3";
import { storeToRefs } from "pinia";

/*Injections*/
const appConf = inject("appConf");
const topBarConf = inject("topBarConf");

/* Dark Mode */
const darkModeStore = useDarkModeStore();
const { changeTheme } = darkModeStore;
const { darkMode, appearingMode } = storeToRefs(darkModeStore);

/*Multi Language*/
const { t } = useI18n();

const form = useForm({
    dark_mode: usePage().props?.auth?.user?.dark_mode ?? "auto"
});

const updateDarkModePreference = () => {
    form.dark_mode = darkMode;
    form.put(route("user.dark-mode-preference.update"), {
        errorBag: "updateDarkModePreference",
        preserveScroll: true,
        onSuccess: () => {
            changeTheme();
        }
    });
};
</script>

<style scoped>
.darkTransition-enter-active,
.darkTransition-leave-active {
    transition: all 500ms ease-in-out;
}

.darkTransition-enter-from {
    opacity: 0;
    transform: translateX(5rem) translateZ(5rem) scale(0) rotateZ(-360deg);
}

.darkTransition-leave-to {
    opacity: 0;
    transform: translateX(-5rem) translateZ(-5rem) scale(0) rotateZ(360deg);
}

.darkTransition-leave-from {
    opacity: 1;
    transform: translateX(0);
}

.darkTransition-enter-to {
    opacity: 1;
    transform: translateX(0);
}
</style>
