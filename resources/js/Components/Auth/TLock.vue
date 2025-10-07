<template>
    <full-screen-layout :bg-image-url="activeDesign.bgImage[appearingMode]" :bg-color="activeDesign.bgColor">
        <div :class="['relative']">
            <!--Avatar-->
            <div class="auth-avatar-container">
                <div class="auth-avatar">
                    <t-avatar :alt="$page.props.auth.user?.name" :radius="8" :size="7"
                        :src="$page.props.auth.user.profile_photo_url" />
                </div>
            </div>
            <!--Container-->
            <div :class="[
                deviceType !== 'phone' && radiusStyle
            ]">
                <form @submit.prevent="submit">
                    <!--Form-->
                    <div :class="[
                        'auth-lock-form',
                        calculatedLockStyle,
                        deviceType !== 'phone' && radiusStyle
                    ]">
                        <!--Name-->
                        <div class="auth-name">
                            {{ $page.props.auth.user.name }}
                        </div>
                        <!--Password-->
                        <t-input-group :radius="5" class="relative" label-for="password">
                            <t-input-text
                                id="password"
                                v-model="form.password"
                                :radius="3"
                                :placeholder="tm('password')"
                            >
                                <template #icon>
                                    <t-user-circle-icon class="w-5 h-5" />
                                </template>
                            </t-input-text>
                        </t-input-group>

                        <!--Submit Button-->
                        <t-button
                            :class="{ 'opacity-25': form.processing }"
                            :color="activeDesign.lock.reLoginButton[appearingMode].color"
                            :design="activeDesign.lock.reLoginButton[appearingMode].design"
                            :disabled="form.processing"
                            :radius="3"
                            size="full"
                        >{{ t('reLogin') }}
                        </t-button>
                    </div>
                </form>
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
import { lockStyleMixin } from "@/Mixins/Styles/lockStyleMixin";
import windowSizeCalculator from "@/Functions/windowSizeCalculator";
import useVuelidate from "@vuelidate/core";
import {helpers, required} from "@vuelidate/validators";
import {useDarkModeStore} from "@/Stores/darkMode.js";

/*Components*/
import FullScreenLayout from "@/Layouts/FullScreenLayout.vue";
import TAlert from "@/Components/Alert/TAlert.vue";
import TBellIcon from "@/Components/Icon/TBellIcon.vue";
import TInputGroup from "@/Components/Form/TInputGroup.vue";
import TInputText from "@/Components/Form/Inputs/TInputText.vue";
import TUserCircleIcon from "@/Components/Icon/TUserCircleIcon.vue";
import TAvatar from "@/Components/Avatar/TAvatar.vue";
import TButton from "@/Components/Button/TButton.vue";
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
    name: "TLock",
    components: { TButton, TAvatar, TUserCircleIcon, TInputText, TInputGroup, TBellIcon, TAlert, FullScreenLayout, TTooltip },
    mixins: [lockStyleMixin],
    props: {
        buttonColor: {
            type: String,
            default: "solid-green"
        },
        buttonDesign: {
            type: String,
            default: "filled"
        },
        bgColor: {
            type: String,
            default: "gray"
        },
        bgGradientDirection: {
            type: String
        },
        bgImage: {
            type: String
        },
        buttonText: {
            type: String,
            default: "Re-Login"
        }
    },
    setup() {
        /*Device type*/
        const { deviceType } = windowSizeCalculator();

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
            password: "",
        });

        /* Client-side Validation */
        const rules = ref({
            password: {
                required: helpers.withMessage(tm('validationMessage.password.required'), required)
            },
        });
        const v = useVuelidate(rules, form, {$lazy: true});

        /*Submit*/
        const submit = async () => {
            if (!(await v.value.$validate())) {
                return;
            }
            form.post(route("unlock"), {
                onFinish: () => form.reset("password"),
            });
        };

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
