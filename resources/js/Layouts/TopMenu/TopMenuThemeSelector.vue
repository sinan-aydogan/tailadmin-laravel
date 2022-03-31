<template>
    <div
        class="flex p-2 w-10 h-10 justify-center items-center cursor-pointer hover:bg-slate-500/10 dark:hover:bg-slate-500/50 overflow-hidden text-white  transform transition-all duration-300"
        :class="`radius-${topBarConf.radius ? topBarConf.radius : appConf.radius}`"
        @click="changeTheme"
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

<script>
/* Main Functions */
import {defineComponent, inject} from "vue";
import {library} from "@fortawesome/fontawesome-svg-core";
import darkModeFn from "@/Functions/darkMode";

/*Components*/
import {faSun, faMoon, faPalette} from "@fortawesome/free-solid-svg-icons";

library.add(faSun, faMoon, faPalette)

/*Multi Language*/
import {useI18n} from "vue-i18n";

export default defineComponent({
    name: "TopMenuThemeSelector",
    setup() {
        /*Injections*/
        const appConf = inject("appConf");
        const topBarConf = inject("topBarConf");

        /* Dark Mode */
        const {darkMode, appearingMode, changeTheme} = darkModeFn();

        /*Multi Language*/
        const {t} = useI18n();

        return {appConf, topBarConf, darkMode, changeTheme, t ,appearingMode}
    }
})
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
