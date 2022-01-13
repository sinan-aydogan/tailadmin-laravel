<template>
    <full-screen-layout :bg-image="bgImage" :color="bgColor" :gradient-direction="bgGradientDirection">
        <div
            :class="[
                'relative',
                deviceType === 'phone' && 'w-full'
                ]"
        >
            <!--Container-->
            <div :class="[
            'auth-container',
            deviceType !== 'phone' && radiusStyle
            ]">
                <!--Header-->
                <div class="bg-opacity-50 backdrop-filter backdrop-blur" :class="[
                'auth-header',
                calculatedLoginStyle
                ]">
                    <!--Logo-->
                    <div class="auth-logo">
                        <slot name="logo"/>
                    </div>
                    <!--Greeting-->
                    <div class="auth-greeting">
                        <div class="text-sm">
                            <!--Status-->
                            <div v-if="status" class="auth-status">
                                {{ status }}
                            </div>
                            <slot v-else name="greeting"/>
                        </div>
                    </div>
                </div>

                <!--Form-->
                <div class="auth-form">
                    <form @submit.prevent="submit">
                        <!--Email-->
                        <div>
                            <t-input-group label="Email" label-for="email">
                                <t-input-text
                                    id="email"
                                    v-model="form.email"
                                    :radius="3"
                                    autofocus
                                    autocomplete="username"
                                    required
                                    type="email"
                                />
                            </t-input-group>
                        </div>
                        <!--Password-->
                        <div class="mt-4">
                            <t-input-group label="Password" label-for="password">
                                <t-input-text
                                    id="password"
                                    v-model="form.password"
                                    :radius="3"
                                    autocomplete="current-password"
                                    required
                                    type="password"
                                />
                            </t-input-group>
                        </div>
                        <div class="auth-remember">
                            <!--Remember Me-->
                            <label class="flex items-center">
                                <input
                                    v-model="form.remember"
                                    name="remember"
                                    type="checkbox"
                                />
                                <span class="auth-remember-text">Remember me</span>
                            </label>
                            <!--Forgot Password-->
                            <Link
                                v-if="canResetPassword"
                                :href="route('password.request')"
                                class="auth-forgot-password"
                            >
                                Forgot your password?
                            </Link>
                        </div>
                        <!--Submit Area-->
                        <div class="auth-submit-area">
                            <!--Register Button-->
                            <t-button
                                v-if="registerButton"
                                :class="{ 'opacity-25': form.processing }"
                                :design="registerButtonDesign"
                                :color="registerButtonColor"
                                :link="route('register')"
                                :radius="3"
                                type="link"
                            >
                                Register
                            </t-button>

                            <!--Submit Button-->
                            <t-button
                                :class="{ 'opacity-25': form.processing }"
                                :color="loginButtonColor"
                                :design="loginButtonDesign"
                                :disabled="form.processing"
                                :radius="3" class="ml-4"
                            >
                                Login
                            </t-button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="auth-error">
                <!--Errors-->
                <transition @before-enter="beforeStyle" @after-enter="enterStyle">
                    <t-alert v-if="hasErrors" :radius="deviceType !== 'phone' && 5" color="red">
                        <template #icon>
                            <t-bell-icon class="w-8 h-8"/>
                        </template>
                        <ul class="list-inside text-sm">
                            <li v-for="(error, key) in errors" :key="key">{{ error }}</li>
                        </ul>
                    </t-alert>
                </transition>
            </div>
        </div>
    </full-screen-layout>
</template>

<script>
/*Main functions*/
import {defineComponent,computed, ref} from "vue";
import {loginStyleMixin} from "@/Mixins/Styles/loginStyleMixin";
import {Link, useForm} from "@inertiajs/inertia-vue3";
import windowSizeCalculator from "@/Functions/windowSizeCalculator";
import darkModeFn from "@/Functions/darkMode";
import useVuelidate from "@vuelidate/core";
import {email, required} from "@vuelidate/validators";


/*Components*/
import TAlert from "@/Components/Alert/TAlert";
import TBellIcon from "@/Components/Icon/TBellIcon";
import TButton from "@/Components/Button/TButton";
import FullScreenLayout from "@/Layouts/FullScreenLayout";
import TInputGroup from "@/Components/Form/TInputGroup";
import TInputText from "@/Components/Form/Inputs/TInputText";

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

library.add(faSun, faMoon, faPalette, faRedo)

export default defineComponent({
    name: "TLogin",
    components: {
        TAlert,
        TBellIcon,
        TButton,
        FullScreenLayout,
        TInputGroup,
        TInputText,
        Link,
        ...flags,
    },
    mixins: [loginStyleMixin],
    props: {
        canResetPassword: Boolean,
        status: String,
        registerButtonDesign: {
            type: String,
            default: "filled"
        },
        design: {
            type: Object,
            default: null,
        },
        registerButtonColor: {
            type: String,
            default: "white"
        },
        loginButtonDesign: {
            type: String,
            default: "filled"
        },
        loginButtonColor: {
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
        },
        registerButton: {
            type: Boolean,
            default: true
        }
    },
    setup() {
        /*Device type*/
        const {deviceType} = windowSizeCalculator();

        /* Dark Mode */
        const {darkMode, appearingMode, changeTheme} = darkModeFn();

        /* Multi-language */
        const {changeLang, locale} = langChooserFn();

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
            form,
            darkMode,
            appearingMode,
            changeLang,
            changeTheme,
            changeBg,
            activeBg,
            submit,
            languages,
            locale,
            deviceType,
            appConf,
            authScreenConf,
            t,
            tm
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
