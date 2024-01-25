<script setup>
/*Main functions*/
import { computed, onBeforeMount, ref, watch } from "vue";
import { Link, useForm } from "@inertiajs/vue3";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

/*Components*/
import TAlert from "@/Components/Alert/TAlert.vue";
import TButton from "@/Components/Button/TButton.vue";
import FullScreenLayout from "@/Layouts/FullScreenLayout.vue";
import TInputGroup from "@/Components/Form/TInputGroup.vue";
import TInputText from "@/Components/Form/Inputs/TInputText.vue";
import TDropdown from "@/Components/Dropdown/TDropdown.vue";
import TTooltip from "@/Components/Tooltip/TTooltip.vue";
import TInputCheckBox from "@/Components/Form/Inputs/TInputCheckBox.vue";

/*Validation*/
import useVuelidate from "@vuelidate/core";
import { email, helpers, required } from "@vuelidate/validators";

/* Multi language */
import { $i18n } from "@/app.js";
import { useLanguage } from "@/Stores/useLanguage.js";
import { languages } from "@/Lang";

/*Dark mode*/
import { useDarkMode } from "@/Stores/useDarkMode.js";

/*Sources*/
import { appConf, authScreenConf } from "@/config";

/*Styles*/
import { useTheme } from "@/Stores/useTheme.js";

/*Icons*/
import { IconMoon, IconSun, IconPalette, IconReload, IconKey, IconBell } from "@tabler/icons-vue";
import { storeToRefs } from "pinia";

defineProps({
    canResetPassword: Boolean,
    status: {
        type: String,
        default: ""
    }
});

/* Multi language */
const languageStore = useLanguage();
const { changeLang, locale } = languageStore;

/* Dark Mode */
const darkModeStore = useDarkMode();
const { changeMode } = darkModeStore;
const { darkMode, appearingMode } = storeToRefs(darkModeStore);

/* Login */
const form = useForm({
    email: "",
    password: "",
    remember: false
});

/* Client-side validation */
const rules = ref({
    email: {
        required: helpers.withMessage($i18n.t("auth.validationMessage.email.required"), required),
        email: helpers.withMessage($i18n.t("auth.validationMessage.email.email"), email)
    },
    password: {
        required: helpers.withMessage($i18n.t("auth.validationMessage.password.required"), required)
    }
});
const v = useVuelidate(rules, form, { $lazy: true });

/*Submit*/
const submit = async () => {
    if (!(await v.value.$validate())) {
        return;
    }
    form
        .transform((data) => ({
            ...data,
            remember: form.remember ? "on" : ""
        }))
        .post(route("login"), {
            onFinish: () => form.reset("password")
        });
};

/*Page size calculator*/
const breakpoints = useBreakpoints(breakpointsTailwind);
const smallerThanLg = breakpoints.smaller("lg");

/*Design Template Changer*/
const themeStore = useTheme();
const { changeTheme, currentTheme } = themeStore;
const { selectedTheme, themes } = storeToRefs(themeStore);

const RadiusStyles = ref(null);
const LoginStyles = ref(null);

/*Temporary Definitions*/
const temporaryLogo = computed(() => {
    let logo;


    if (appearingMode.value === "dark") {
        if (LoginStyles.value?.logo.dark) {
            logo = LoginStyles?.value.logo.dark;
        } else if (authScreenConf.logo.dark) {
            logo = authScreenConf.logo.dark;
        } else {
            logo = appConf.logo.dark;
        }
    } else {
        if (LoginStyles.value?.logo.light) {
            logo = LoginStyles?.value.logo.light;
        } else if (authScreenConf.logo.light) {
            logo = authScreenConf.logo.light;
        } else {
            logo = appConf.logo.light;
        }
    }

    return logo;
});

const beforeStyle = (event) => {
    event.style.opacity = 0;
};

const enterStyle = (event) => {
    event.style.opacity = 1;
    event.style.transition = `all 1s linear`;
};

onBeforeMount(async () => {
    RadiusStyles.value = await currentTheme("Misc/Radius");
    LoginStyles.value = await currentTheme("Auth/Login");
});

watch(selectedTheme, async () => {
    RadiusStyles.value = await currentTheme("Misc/Radius");
    LoginStyles.value = await currentTheme("Auth/Login");
});
</script>

<template>
    <full-screen-layout
        :bg-image-url="LoginStyles?.bgImage[appearingMode]"
        :bg-color="LoginStyles?.bgColor"
    >
        <!--Container-->
        <div
:class="[
                'auth-container',
                {'w-full' : smallerThanLg},
            ]">
            <!--Header-->
            <div
                class="auth-header"
                :class="[
                        LoginStyles?.header,
                        smallerThanLg && RadiusStyles.topRadiusSize[LoginStyles?.radius ? LoginStyles?.radius : appConf.radius],
                    ]"
            >
                <!--Logo-->
                <div class="auth-logo">
                    <slot v-if="$slots.logo" name="logo" />
                    <div v-else :class="authScreenConf.logoAreaClasses">
                        <img
                            :src="temporaryLogo"
                            :class="authScreenConf.logoClasses"
                        />
                        <span
                            :class="authScreenConf.appNameClasses"
                            v-text="authScreenConf.appName ? authScreenConf.appName : appConf.appName"
                        ></span>
                    </div>
                </div>
                <!--Greeting-->
                <div v-if="status || $slots.greeting" class="auth-greeting">
                    <div class="text-sm">
                        <!--Status-->
                        <div v-if="status" class="auth-status">{{ status }}</div>
                        <slot v-else name="greeting" />
                    </div>
                </div>
            </div>

            <!--Form-->
            <div
                class="auth-form"
                :class="[
                        smallerThanLg && `radius-b-${LoginStyles?.radius ? LoginStyles?.radius : appConf.radius}`,
                        LoginStyles?.body,
                    ]"
            >
                <form @submit.prevent="submit">
                    <!--Email-->
                    <div>
                        <t-input-group
                            :label="$t('auth.email')"
                            label-for="email"
                            :errors="v.email.$errors"
                        >
                            <t-input-text
                                id="email"
                                v-model="form.email"
                                autocomplete="username"
                                required
                                :radius="3"
                                autofocus
                                type="email"
                                @blur="v.email.$touch"
                            />
                        </t-input-group>
                    </div>
                    <!--Password-->
                    <div class="mt-4">
                        <t-input-group
                            :label="$t('auth.password')"
                            label-for="password"
                            :errors="v.password.$errors"
                        >
                            <t-input-text
                                id="password"
                                v-model="form.password"
                                :radius="3"
                                autocomplete="current-password"
                                required
                                type="password"
                                @blur="v.password.$touch"
                            />
                        </t-input-group>
                    </div>

                    <div class="auth-remember">
                        <!--Remember Me-->
                        <label class="flex items-center">
                            <t-input-check-box
                                id="remember"
                                v-model="form.remember"
                                :label="$t('auth.rememberMe')"
                            >
                                <template #icon>
                                    <IconKey :size="24" />
                                </template>
                            </t-input-check-box>
                        </label>

                        <!--Forgot Password-->
                        <Link
                            v-if="canResetPassword"
                            :href="route('password.request')"
                            class="auth-forgot-password"
                        >{{ $t("auth.forgotPassword") }}
                        </Link>
                    </div>
                    <!--Submit Area-->
                    <div class="auth-submit-area">
                        <!--Register Button-->
                        <t-button
                            :class="{ 'opacity-25': form.processing }"
                            :design="LoginStyles?.registerButton[appearingMode].design"
                            :color="LoginStyles?.registerButton[appearingMode].color"
                            :link="route('register')"
                            :radius="3"
                            type="link"
                        >{{ $t("auth.register") }}
                        </t-button>

                        <!--Submit Button-->
                        <t-button
                            :class="{ 'opacity-25': form.processing }"
                            :color="LoginStyles?.loginButton[appearingMode].color"
                            :design="LoginStyles?.loginButton[appearingMode].design"
                            :disabled="form.processing"
                            :radius="3"
                            class="ml-4"
                        >{{ $t("auth.login") }}
                        </t-button>
                    </div>
                </form>
            </div>
        </div>

        <!--Errors-->
        <div class="auth-error">
            <transition @before-enter="beforeStyle" @after-enter="enterStyle">
                <t-alert v-if="form.hasErrors" :radius="smallerThanLg && 5" color="danger">
                    <template #icon>
                        <IconBell :size="24" />
                    </template>
                    <ul class="list-inside text-sm">
                        <li v-for="(error, key) in form.errors" :key="key">{{ error }}</li>
                    </ul>
                </t-alert>
            </transition>
        </div>


        <!--Selectors-->
        <div class="fixed bottom-0 flex z-50 w-full justify-center sm:justify-end space-x-6 p-6">
            <!--Language Selector-->
            <t-tooltip
                v-if="authScreenConf.showLanguageSelector"
                position="top"
                :border="false"
                :custom-style="true"
            >
                <!--Selected Language-->
                <div
                    class="flex justify-center items-center group bg-slate-100/50 hover:bg-slate-800/50 dark:text-slate-100 dark:bg-slate-800/75 dark:hover:bg-slate-100/75 dark:hover:text-slate-700 hover:text-slate-100 p-4 w-10 h-10 cursor-pointer overflow-hidden bg-cover"
                    :class="`radius-${authScreenConf.radius ? authScreenConf.radius : appConf.radius}`"
                >
                    <component
                        :is="languages.find(i => i.id === locale).flag"
                        class="flex flex-shrink-0 w-14 aspect-auto drop-shadow transform hover:scale-110 active:scale-90 hover:-rotate-12 transition-all duration-300"
                        :alt="languages.find(i => i.id === locale).name"
                    />
                    <span
                        class="absolute text-sm -top-2 -right-2 bg-slate-100/10 dark:bg-slate-800/50 backdrop-filter backdrop-blur text-slate-100 px-1 rounded"
                        v-text="languages.find(i => i.id === locale).id"
                    ></span>
                </div>
                <template #boxContent>
                    <!--Language Lists-->
                    <div class="top-menu-dropdown-content-wrapper-transparent mb-3">
                        <template v-for="lang in languages" :key="lang.id">
                            <div
                                class="top-menu-dropdown-item-transparent"
                                @click="changeLang(lang.id)"
                            >
                                <component :is="lang.flag" class="w-6 aspect-auto drop-shadow" />
                                <span v-text="lang.name"></span>
                            </div>
                        </template>
                    </div>
                </template>
            </t-tooltip>

            <!--Dark Mode-->
            <div
                v-if="authScreenConf.showDarkModeSelector"
                ref="refLangChanger"
                :class="authScreenConf.radius ? authScreenConf.radius : appConf.radius"
            >
                <transition mode="out-in" name="darkModeTransition">
                    <!-- Light -->
                    <IconSun
                        v-if="darkMode === 'light'"
                        :size="24"
                        :alt="$t('general.lightMode')"
                        class="flex justify-center items-center bg-slate-100/50 hover:bg-slate-800/50 dark:text-slate-100 dark:bg-slate-800/75 dark:hover:bg-slate-100/75 dark:hover:text-slate-700 hover:text-slate-100 p-2 w-10 h-10 cursor-pointer overflow-hidden"
                        @click="changeMode('dark'); $refs.refLangChanger.click()"

                    />
                    <!-- Auto -->
                    <IconPalette
                        v-else-if="darkMode === 'auto'"
                        :size="24"
                        :alt="$t('general.auto')"
                        @click="changeMode('light'); $refs.refLangChanger.click()"
                    />
                    <!-- Dark -->
                    <IconMoon
                        v-else
                        :size="24"
                        :alt="$t('general.darkMode')"
                        class="transform hover:scale-110 active:scale-90 transition-transform duration-300"
                        @click="changeMode('auto'); $refs.refLangChanger.click()"
                    />
                </transition>
            </div>
            <!--Change Background-->
            <div
                v-if="authScreenConf.showDesignChanger && themes.length > 1"
                class="flex justify-center items-center group bg-slate-100/50 hover:bg-slate-800/50 dark:text-slate-100 dark:bg-slate-800/75 dark:hover:bg-slate-100/75 dark:hover:text-slate-700 hover:text-slate-100 p-2 w-10 h-10 cursor-pointer"
                :class="`radius-${authScreenConf.radius ? authScreenConf.radius : appConf.radius}`"
                @click="changeTheme({theme:selectedTheme === 'Umay' ? 'Abay' : 'Umay'})"
            >
                <IconReload
                    :size="24"
                    class="transform group-hover:scale-110 group-active:scale-90 transition-transform duration-300"
                />
            </div>
        </div>
    </full-screen-layout>
</template>
