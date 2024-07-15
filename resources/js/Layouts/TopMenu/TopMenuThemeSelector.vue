<template>
    <div
        :class="`radius-${topBarConf.radius ? topBarConf.radius : appConf.radius}`"
        class="flex p-2 w-10 h-10 justify-center items-center cursor-pointer hover:bg-slate-500/10 dark:hover:bg-slate-500/50 overflow-hidden text-white  transform transition-all duration-300"
        @click="updateDarkModePreference()"
    >
        <transition-group name="darkTransition">
            <!-- Light -->
            <div v-if="darkMode === 'light'" key="light">
                <iconify-icon
                    :alt="t('lightMode')"
                    class="w-6 h-6 text-yellow-500 transform hover:scale-110 active:scale-90 transition-all duration-300"
                    icon="tabler:sun"
                />
            </div>

            <!-- Auto -->
            <div v-if="darkMode === 'auto'" key="auto">
                <iconify-icon
                    :alt="t('auto')"
                    :class="{
                    'text-gray-500' : appearingMode === 'light',
                    'text-slate-50' : appearingMode === 'dark',
                }"
                    class="w-6 h-6 transform hover:scale-110 active:scale-90 transition-all duration-300"
                    icon="tabler:palette"
                />
            </div>

            <!-- Dark -->
            <div v-if="darkMode === 'dark'" key="dark">
                <iconify-icon
                    :alt="t('darkMode')"
                    class="w-6 h-6 transform hover:scale-110 active:scale-90 transition-all duration-300"
                    icon="tabler:moon-stars"
                />
            </div>

        </transition-group>
    </div>
</template>

<script setup>
/* Main Functions */
import { inject } from "vue";
import { usePage } from "@inertiajs/vue3";
import { useDarkModeStore } from "@/Stores/darkMode";

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
