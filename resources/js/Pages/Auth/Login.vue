<template>
    <Head :title="tm('login')"/>
    <t-login
        design="{
        bgColor: '',
        headerColor: '',
        radius: 3,
        bgImage: {
        dark: '',
        light: ''
        },
        loginButton: {
        dark: '',
        light: ''
        },
        registerButton: {
        dark: '',
        light: ''
        },
        }"
        :bg-image="activeBg"
        color="solid-purple"
        :radius="authScreenConf.radius ? authScreenConf.radius : appConf.radius"
    >
        <template #logo>
            <div :class="authScreenConf.logoAreaClasses">
                <img
                    :src="[
                        appearingMode === 'dark' ? authScreenConf.darkLogo ? authScreenConf.darkLogo : appConf.darkLogo :
                        authScreenConf.lightLogo ? authScreenConf.lightLogo : appConf.lightLogo
                    ]"
                    :class="authScreenConf.logoClasses"
                />
                <span v-text="authScreenConf.appName ? authScreenConf.appName : appConf.appName" :class="authScreenConf.appNameClasses"></span>
            </div>
        </template>
    </t-login>
    <div class="fixed bottom-0 flex z-50 w-full justify-center sm:justify-end space-x-6 p-6">
        <!--Dark Mode-->
        <div
            class="flex justify-center items-center bg-slate-100/50 hover:bg-slate-800/50 dark:text-slate-100 dark:bg-slate-800/75 dark:hover:bg-slate-100/75 dark:hover:text-slate-700 hover:text-slate-100 p-4 w-10 h-10 cursor-pointer overflow-hidden"
            :class="`radius-${authScreenConf.radius ? authScreenConf.radius : appConf.radius}`"
            @click="changeTheme"
        >

            <transition mode="out-in" name="darkModeTransition">
                <!-- Light -->
                <icon
                    v-if="darkMode === 'light'"
                    icon="sun"
                    size="lg"
                    key="light"
                    :alt="tm('lightMode')"
                    class="transform hover:scale-110 active:scale-90 transition-transform duration-300"
                />
                <!-- Auto -->
                <icon
                    v-else-if="darkMode === 'auto'"
                    icon="palette"
                    size="lg"
                    key="auto"
                    :alt="tm('auto')"
                    class="transform hover:scale-110 active:scale-90 transition-transform duration-300"
                />
                <!-- Dark -->
                <icon
                    v-else
                    icon="moon"
                    size="lg"
                    key="dark"
                    :alt="tm('darkMode')"
                    class="transform hover:scale-110 active:scale-90 transition-transform duration-300"
                />
            </transition>
        </div>
        <!--Change Background-->
        <div
            @click="changeBg"
            class="flex justify-center items-center group bg-slate-100/50 hover:bg-slate-800/50 dark:text-slate-100 dark:bg-slate-800/75 dark:hover:bg-slate-100/75 dark:hover:text-slate-700 hover:text-slate-100 p-4 w-10 h-10 cursor-pointer"
            :class="`radius-${authScreenConf.radius ? authScreenConf.radius : appConf.radius}`"
        >
            <icon icon="redo" class="transform group-hover:scale-110 group-active:scale-90 transition-transform duration-300"/>
        </div>
    </div>
</template>

<script>

/*Main functions*/
import {computed, defineComponent, ref} from "vue";
import { Head, useForm } from "@inertiajs/inertia-vue3";
import darkModeFn from "@/Functions/darkMode";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

/*Sources*/
import {appConf, authScreenConf} from "@/config";
import {authBgImages} from "@/Sources/bgImages";

/* Multi language */
import {useI18n} from "vue-i18n";
import langChooserFn from "@/Functions/langChooser"
import {languages, flags, authTranslates} from "@/Lang/languages";

/*Fontawesome icons*/
import {library} from "@fortawesome/fontawesome-svg-core";
import {faSun, faMoon, faPalette, faRedo} from "@fortawesome/free-solid-svg-icons";
import TLogin from "@/Components/Auth/TLogin";
library.add(faSun, faMoon, faPalette, faRedo)


export default defineComponent({
    components: {
        TLogin,
        Head,
        ...flags,
    },
    props: {
        canResetPassword: Boolean,
        status: String,
    },
    setup() {
        /* Dark Mode */
        const {darkMode, appearingMode, changeTheme} = darkModeFn();

        /* Multi-language */
        const {changeLang, locale, loadingTranslations} = langChooserFn();

        const {t, tm} = useI18n({
            inheritLocale: true,
            messages: authTranslates,
        });

        /* Login */
        const form = useForm({
            email: "",
            password: "",
            remember: false,
        });

        /* Client-side Validation */
        const rules = ref({
            email: {required, email},
            password: {required},
        });
        const v = useVuelidate(rules, form, {$lazy: true});

        const submit = async () => {
            if (!(await v.value.$validate())) {
                return;
            }
            form
                .transform((data) => ({
                    ...data,
                    remember: form.remember ? "on" : "",
                }))
                .post(route("login"), {
                    onFinish: () => form.reset("password"),
                });
        };


        const bgIndex = ref(0)
        const changeBg = ()=>{
            if(authBgImages[appearingMode.value].length-1>bgIndex.value){
                bgIndex.value++
            }else{
                bgIndex.value = 0
            }
        };
        const activeBg = computed(()=>{
            return authBgImages[appearingMode.value][bgIndex.value].url
        })


        return {
            appConf,
            authScreenConf,
            bgIndex,
            darkMode,
            authBgImages,
            appearingMode,
            changeBg,
            changeTheme,
            form,
            languages,
            locale,
            loadingTranslations,
            changeLang,
            activeBg,
            v,
            t,
            tm,
            submit,
        };
    }
})
</script>
<style scoped>
.darkModeTransition-enter-active,
.darkModeTransition-leave-active {
    transition: all 500ms ease-in-out;
}

.darkModeTransition-enter-from,.darkModeTransition-leave-to {
    opacity: 0;
    transform: scale(0) rotateZ(-360deg);
}

.darkModeTransition-enter-to,.darkModeTransition-leave-from  {
    opacity: 1;
    transform: scale(1);
}
</style>
