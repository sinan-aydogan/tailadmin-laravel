<template>
    <div
        class="
              flex
              w-8
              h-8
              justify-center
              items-center
              rounded-full
              cursor-pointer
              overflow-hidden
              text-white
              hover:scale-110
              active:scale-90
              transform
              transition-all
              duration-300
            "
        @click="
              () => {
                if (darkMode === 'light') {
                  darkMode = 'dark';
                } else if (darkMode === 'dark') {
                  darkMode = 'auto';
                } else {
                  darkMode = 'light';
                }
              }
            "
    >
        <transition-group name="darkTransition">
            <!-- Light -->
            <icon v-if="darkMode === 'light'" icon="sun" size="lg" key="light" :alt="t('lightMode')" class="text-yellow-500"/>
            <!-- Auto -->
            <icon v-if="darkMode === 'auto'" icon="palette" size="lg" key="auto" :alt="t('auto')" class="text-slate-500"/>
            <!-- Dark -->
            <icon v-if="darkMode === 'dark'" icon="moon" size="lg" key="dark" :alt="t('darkMode')"/>
        </transition-group>
    </div>
</template>

<script>
/* Main Functions */
import {defineComponent} from "vue";
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
        /* Dark Mode */
        const {darkMode} = darkModeFn();

        /*Multi Language*/
        const {t} = useI18n();

        return {darkMode, t}
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
    transform: translateX(0.5rem) scale(0) rotateZ(-360deg);
}

.darkTransition-leave-to {
    opacity: 0;
    transform: translateX(-0.5rem) scale(0) rotateZ(360deg);
}

.darkTransition-leave-from {
    opacity: 1;
    transform: translateX(0.5rem);
}

.darkTransition-enter-to {
    opacity: 1;
    transform: translateX(-0.5rem);
}
</style>
