<template>
    <t-full-screen-card :bg-image="bgImage" :color="bgColor">
        <div class="relative">
            <!--Container-->
            <div :class="[
            'flex flex-col border items-center justify-center shadow border-none overflow-hidden',
            radiusStyle
            ]">
                <!--Header-->
                <div :class="[
                'flex flex-col w-full',
                loginStyle
                ]">
                    <!--Logo-->
                    <div class="inline-flex px-32 py-4">
                        <slot name="logo"/>
                    </div>
                    <!--Greeting-->
                    <div class="inline-flex justify-center w-full bg-gray-200 py-1 bg-opacity-20 w-full">
                        <div class="text-sm">
                            <!--Status-->
                            <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
                                {{ status }}
                            </div>
                            <slot v-else name="greeting"/>
                        </div>
                    </div>
                </div>

                <!--Form-->
                <div class="flex flex-col gap-4 bg-white p-8 w-full">
                    <form @submit.prevent="submit">
                        <!--Email-->
                        <div>
                            <t-input-group label="Email" label-for="email">
                                <t-input-text
                                    id="email"
                                    v-model="form.email"
                                    autofocus
                                    required
                                    type="email"
                                    :radius="3"
                                />
                            </t-input-group>
                        </div>
                        <!--Password-->
                        <div class="mt-4">
                            <t-input-group label="Password" label-for="password">
                                <t-input-text
                                    id="password"
                                    v-model="form.password"
                                    autocomplete="current-password"
                                    required
                                    type="password"
                                    :radius="3"
                                />
                            </t-input-group>
                        </div>
                        <!--Password Confirm-->
                        <div class="block mt-4">
                            <label class="flex items-center">
                                <input
                                    v-model="form.remember"
                                    name="remember"
                                    type="checkbox"
                                />
                                <span class="ml-2 text-sm text-gray-600">Remember me</span>
                            </label>
                        </div>
                        <!--Submit Area-->
                        <div class="flex items-center justify-end mt-4">
                            <!--Forgot Password-->
                            <inertia-link
                                v-if="canResetPassword"
                                :href="route('password.request')"
                                class="underline text-sm text-gray-600 hover:text-gray-900"
                            >
                                Forgot your password?
                            </inertia-link>
                            <!--Submit Button-->
                            <t-button :class="{ 'opacity-25': form.processing }"
                                      :color="buttonColor"
                                      :disabled="form.processing"
                                      :radius="3" class="ml-4"
                            >
                                Login
                            </t-button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="absolute w-full translate-y-1/2 mt-4 text-white">
                <!--Errors-->
                <transition @before-enter="beforeStyle" @after-enter="enterStyle">
                    <t-alert v-if="hasErrors" :radius="5" color="red">
                        <template #icon>
                            <t-bell-icon class="w-8 h-8"/>
                        </template>
                        <ul class="list-inside text-sm text-red-600">
                            <li v-for="(error, key) in errors" :key="key">{{ error }}</li>
                        </ul>
                    </t-alert>
                </transition>
            </div>
        </div>
    </t-full-screen-card>
</template>

<script>
import TAlert from "@/Components/Alert/TAlert";
import TBellIcon from "@/Components/Icon/TBellIcon";
import TButton from "@/Components/Button/TButton";
import TFullScreenCard from "@/Components/Card/TFullScreenCard";
import TInputGroup from "@/Components/Form/TInputGroup";
import TInputText from "@/Components/Form/Inputs/TInputText";
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";

export default {
    name: "TLogin",
    components: {TAlert, TBellIcon, TButton, TFullScreenCard, TInputGroup, TInputText},
    mixins: [radiusSizeMixin],
    props: {
        canResetPassword: Boolean,
        status: String,
        color: {
            type: String,
            default: 'gradient-red-to-pink'
        },
        buttonColor: {
            type: String,
            default: 'green'
        },
        bgColor: {
            type: String,
            default: 'gray'
        },
        bgImage: {
            type: String
        },
    },

    data() {
        return {
            form: this.$inertia.form({
                email: '',
                password: '',
                remember: false
            })
        }
    },

    methods: {
        submit() {
            this.form
                .transform(data => ({
                    ...data,
                    remember: this.form.remember ? 'on' : ''
                }))
                .post(this.route('login'), {
                    onFinish: () => this.form.reset('password'),
                })
        },
        beforeStyle(event) {
            event.style.opacity = 0
        },
        enterStyle(event) {
            event.style.opacity = 1
            event.style.transition = `all 1s linear`
        }
    },
    computed: {
        loginStyle() {
            /*Color Styles*/
            /*Solid*/
            if (!this.color.includes('-') && this.color !== 'black' && this.color !== 'white') {
                return 'bg-' + this.color + '-500 text-white';
            } else if (this.color === 'black') {
                return 'bg-black text-white'
            } else if (this.color === 'white') {
                return 'bg-white border border-gray-300 text-gray-700'
            }
            /*Light*/
            if (this.color.includes('light')) {
                return 'bg-' + this.color.split('-')[1] + '-50 border border-' + this.color.split('-')[1] + '-500 text-' + this.color.split('-')[1] + '-600';
            }
            /*Gradient*/
            if (this.color.includes('gradient')) {
                return 'bg-gradient-to-r from-' + this.color.split('-')[1] + '-500 to-' + this.color.split('-')[3] + '-700 text-white';
            }
        },
        errors() {
            return this.$page.props.errors
        },

        hasErrors() {
            return Object.keys(this.errors).length > 0;
        },
    }
}
</script>

<style scoped>

</style>
