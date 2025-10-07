<template>
    <full-screen-layout
        :bg-image-url="activeDesign.bgImage[appearingMode]"
        :bg-color="activeDesign.bgColor"
    >
        <!--Container-->
        <div :class="[
                'auth-container',
                {'w-full' : deviceType === 'phone'},
            ]">
            <!--Header-->
            <div
                class="auth-header"
                :class="[
                        activeDesign.header,
                        deviceType !== 'phone' && `radius-t-${activeDesign.radius ? activeDesign.radius : appConf.radius}`,
                    ]"
            >
                <!--Logo-->
                <div class="auth-logo">
                    <slot v-if="$slots.logo" name="logo"/>
                    <div v-else :class="authScreenConf.logoAreaClasses">
                        <img
                            :src="temporaryLogo"
                            :class="authScreenConf.logoClasses"
                        />
                        <span
                            v-text="authScreenConf.appName ? authScreenConf.appName : appConf.appName"
                            :class="authScreenConf.appNameClasses"
                        ></span>
                    </div>
                </div>
                <!--Greeting-->
                <div class="auth-greeting" v-if="status || $slots.greeting">
                    <div class="text-sm">
                        <!--Status-->
                        <div v-if="status" class="auth-status">{{ status }}</div>
                        <slot v-else name="greeting"/>
                    </div>
                </div>
            </div>

            <!--Sub Greeting-->
            <div v-if="$slots.subGreeting" class="text-sm shadow p-2 bg-white bg-opacity-75 text-center font-semibold">
                <slot name="subGreeting" />
            </div>

            <!--Form-->
            <div
                class="auth-form"
                :class="[
                    deviceType !== 'phone' && `radius-b-${activeDesign.radius ? activeDesign.radius : appConf.radius}`,
                    activeDesign.body,
                ]"
            >
                <form @submit.prevent="submit">
                    <!--Email-->
                    <div class="mt-2">
                        <t-input-group
                            :label="t('email')"
                            label-for="email"
                            :errors="v.email.$errors"
                        >
                            <t-input-text
                                id="email"
                                v-model="form.email"
                                @blur="v.email.$touch"
                                :radius="3"
                                autofocus
                                autocomplete="username"
                                required
                                type="email"
                            />
                        </t-input-group>
                    </div>

                    <!--Submit Button-->
                    <div class="auth-submit-area flex-col ">
                        <!--Submit Button-->
                        <t-button
                            :class="{ 'opacity-25': form.processing }"
                            :color="activeDesign.forgotPassword.sendButton[appearingMode].color"
                            :design="activeDesign.forgotPassword.sendButton[appearingMode].design"
                            :disabled="form.processing"
                            :radius="3"
                            class="ml-4"
                            size="full"
                        >
                            {{ tm('emailPasswordResetLink') }}
                        </t-button>

                        <!--Back Button-->
                        <t-button
                            :color="activeDesign.forgotPassword.backButton[appearingMode].color"
                            :design="activeDesign.forgotPassword.backButton[appearingMode].design"
                            :link="route('login')"
                            :radius="3"
                            class="mr-4"
                            type="link"
                        >
                            {{ tm('backToLogin') }}
                        </t-button>
                    </div>
                </form>
            </div>
        </div>

        <!--Errors-->
        <div class="auth-error">
            <transition @before-enter="beforeStyle" @after-enter="enterStyle">
                <t-alert v-if="hasErrors" :radius="deviceType !== 'phone' && 5" color="red">
                    <template #icon>
                        <t-bell-icon class="w-8 h-8" />
                    </template>
                    <ul class="list-inside text-sm">
                        <li v-for="(error, key) in errors" :key="key">{{ error }}</li>
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
                                @click="changeLang(lang.id)"
                                class="top-menu-dropdown-item-transparent"
                            >
                                <component :is="lang.flag" class="w-6 aspect-auto drop-shadow"/>
                                <span v-text="lang.name"></span>
                            </div>
                        </template>
                    </div>
                </template>
            </t-tooltip>
            <!--Dark Mode-->
            <div
                v-if="authScreenConf.showDarkModeSelector"
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
                v-if="authScreenConf.showDesignChanger && authDesigns.length > 1"
                @click="changeBg"
                class="flex justify-center items-center group bg-slate-100/50 hover:bg-slate-800/50 dark:text-slate-100 dark:bg-slate-800/75 dark:hover:bg-slate-100/75 dark:hover:text-slate-700 hover:text-slate-100 p-4 w-10 h-10 cursor-pointer"
                :class="`radius-${authScreenConf.radius ? authScreenConf.radius : appConf.radius}`"
            >
                <icon
                    icon="redo"
                    class="transform group-hover:scale-110 group-active:scale-90 transition-transform duration-300"
                />
            </div>
        </div>
    </full-screen-layout>
</template>

<script>
/*Main functions*/
import { defineComponent, computed, ref } from "vue";
import {useForm} from "@inertiajs/vue3";
import { forgotPasswordStyleMixin } from "@/Mixins/Styles/forgotPasswordStyleMixin";
import windowSizeCalculator from "@/Functions/windowSizeCalculator";
import useVuelidate from "@vuelidate/core";
import {email, helpers, required} from "@vuelidate/validators";
import {useDarkModeStore} from "@/Stores/darkMode.js";

/*Components*/
import FullScreenLayout from "@/Layouts/FullScreenLayout.vue";
import TInputGroup from "@/Components/Form/TInputGroup.vue";
import TInputText from "@/Components/Form/Inputs/TInputText.vue";
import TButton from "@/Components/Button/TButton.vue";
import TAlert from "@/Components/Alert/TAlert.vue";
import TBellIcon from "@/Components/Icon/TBellIcon.vue";
import TTooltip from "@/Components/Tooltip/TTooltip.vue";

/*Sources*/
import {appConf, authScreenConf, badgeConf} from "@/config";
import {authDesigns} from "@/Sources/authScreenDesigns";

/* Multi language */
import {useI18n} from "vue-i18n";
import {useDisplayLanguageStore} from "@/Stores/displayLanguage.js";
import {languages, authTranslates} from "@/Lang/languages";

/*Fontawesome icons*/
import {library} from "@fortawesome/fontawesome-svg-core";
import {faSun, faMoon, faPalette, faRedo, faKey, faBell} from "@fortawesome/free-solid-svg-icons";
import { storeToRefs } from "pinia";

library.add(faSun, faMoon, faPalette, faRedo, faKey, faBell)

export default defineComponent({
    name: "TForgot",
    components: {
        TBellIcon,
        TAlert, TButton, TInputText, TInputGroup, FullScreenLayout, TTooltip
    },
    mixins: [forgotPasswordStyleMixin],
    props: {
        status: String,
        color: {
            type: String,
            default: "gradient-red-to-pink"
        },
        buttonDesign: {
            type: String,
            default: "filled"
        },
        buttonColor: {
            type: String,
            default: "green"
        },
        bgColor: {
            type: String,
            default: "solid-gray"
        },
        bgGradientDirection: {
            type: String
        },
        bgImage: {
            type: String
        }
    },
    setup() {
        /*Device type*/
        const {deviceType} = windowSizeCalculator();

        /* Dark Mode */
        const darkModeStore = useDarkModeStore()
        const {changeTheme} = darkModeStore;
        const {darkMode, appearingMode} = storeToRefs(darkModeStore);

        /* Multi-language */
        const displayLanguageStore = useDisplayLanguageStore()
        const {changeLang} = displayLanguageStore;
        const {locale} = storeToRefs(displayLanguageStore);

        const {t, tm} = useI18n({
            inheritLocale: true,
            messages: authTranslates,
        });

        /* Form */
        const form = useForm({
            email: "",
        });

        /* Client-side Validation */
        const rules = ref({
            email: {
                required: helpers.withMessage(tm('validationMessage.email.required'), required),
                email: helpers.withMessage(tm('validationMessage.email.email'), email)
            }
        });
        const v = useVuelidate(rules, form, {$lazy: true});

        /*Submit*/
        const submit = async () => {
            if (!(await v.value.$validate())) {
                return;
            }
            form.post(route("password.email"), {
                onFinish: () => form.reset("email"),
            });
        };

        /*Logo SRC*/
        /*Temporary Definitions*/
        const temporaryLogo = computed(()=>{
            let logo;


            if(appearingMode.value === 'dark'){
                if(activeDesign.value.logo.dark){
                    logo = activeDesign.value.logo.dark
                }else if(authScreenConf.logo.dark) {
                    logo = authScreenConf.darkLogo
                }else{
                    logo = appConf.logo.dark
                }
            } else {
                if(activeDesign.value.logo.light){
                    logo = activeDesign.value.logo.light
                }else if(authScreenConf.logo.light) {
                    logo = authScreenConf.logo.light
                }else{
                    logo = appConf.logo.light
                }
            }

            return logo;
        });

        /*Design Template Changer*/
        const activeDesignIndex = ref(0)
        const changeBg = () => {
            if (authDesigns.length - 1 > activeDesignIndex.value) {
                activeDesignIndex.value++
            } else {
                activeDesignIndex.value = 0
            }
        };
        const activeDesign = computed(() => {
            return authDesigns[activeDesignIndex.value]
        })


        return {
            authDesigns,
            form,
            darkMode,
            appearingMode,
            changeLang,
            changeTheme,
            changeBg,
            activeDesign,
            submit,
            languages,
            locale,
            deviceType,
            appConf,
            authScreenConf,
            temporaryLogo,
            t,
            tm,
            v
        };
    },

    methods: {

        beforeStyle(event) {
            event.style.opacity = 0;
        },
        enterStyle(event) {
            event.style.opacity = 1;
            event.style.transition = `all 1s linear`;
        }
    },
    computed: {
        errors() {
            return this.$page.props.errors;
        },

        hasErrors() {
            return Object.keys(this.errors).length > 0;
        }
    }
});
</script>
