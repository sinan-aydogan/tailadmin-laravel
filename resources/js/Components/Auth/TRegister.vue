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
                registerStyle
                ]">
                    <!--Logo-->
                    <div class="inline-flex px-32 py-4">
                        <slot name="logo"/>
                    </div>
                    <!--Greeting-->
                    <div class="inline-flex justify-center w-full bg-gray-200 py-1 bg-opacity-20 w-full">
                        <!--Status-->
                        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
                            {{ status }}
                        </div>
                        <slot v-else name="greeting"/>
                    </div>
                </div>

                <!--Form-->
                <div class="flex flex-col gap-4 bg-white p-8 w-full">
                    <form @submit.prevent="submit">
                        <!--Name-->
                        <div>
                            <t-input-group label="Name" label-for="name">
                                <t-input-text
                                    id="name"
                                    autofocus
                                    autocomplete="name"
                                    v-model="form.name"
                                    required
                                    type="text"
                                    :radius="3"
                                />
                            </t-input-group>
                        </div>
                        <!--Email-->
                        <div class="mt-4">
                            <t-input-group label="Email" label-for="email">
                                <t-input-text
                                    id="email"
                                    v-model="form.email"
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
                                    autocomplete="new-password"
                                    required
                                    type="password"
                                    :radius="3"
                                />
                            </t-input-group>
                        </div>
                        <!--Confirm Password-->
                        <div class="mt-4">
                            <t-input-group label="Confirm Password" label-for="password_confirmation">
                                <t-input-text
                                    id="password_confirmation"
                                    v-model="form.password_confirmation"
                                    autocomplete="new-password"
                                    required
                                    type="password"
                                    :radius="3"
                                />
                            </t-input-group>
                        </div>
                        <!--Terms-->
                        <div v-if="privacyPolicyFeature" class="mt-4">
                            <t-input-group label-for="terms">
                                <div class="flex items-center">
                                    <input
                                        id="terms"
                                        v-model="form.terms"
                                        name="terms"
                                        type="checkbox"
                                    />

                                    <div class="ml-2">
                                        I agree to the
                                        <inertia-link
                                            :href="termsLink"
                                            target="_blank"
                                            class="underline text-sm text-gray-600 hover:text-gray-900"
                                        >
                                        Terms of Service
                                        </inertia-link>
                                        and
                                        <inertia-link
                                            :href="policyLink"
                                            target="_blank"
                                            class="underline text-sm text-gray-600 hover:text-gray-900"
                                        >
                                            Privacy Policy
                                        </inertia-link>
                                    </div>
                                </div>
                            </t-input-group>
                        </div>

                        <div class="flex items-center justify-end mt-4">
                            <inertia-link
                                :href="route('login')"
                                class="underline text-sm text-gray-600 hover:text-gray-900"
                            >
                                Already registered?
                            </inertia-link>

                            <t-button
                                :radius="3"
                                :class="{ 'opacity-25': form.processing }"
                                :disabled="form.processing"
                                class="ml-4"
                                color="green"
                            >
                                Register
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
    name: "TRegister",
    components: {TAlert, TBellIcon, TButton, TFullScreenCard, TInputGroup, TInputText},
    mixins: [radiusSizeMixin],
    props: {
        color: {
            type: String,
            default: 'gradient-red-to-pink'
        },
        bgColor: {
            type: String,
            default: 'gray'
        },
        bgImage: {
            type: String
        },
        status: {
            type: String
        },
        privacyPolicyFeature : Boolean,
        termsLink: String,
        policyLink: String
    },
    data() {
        return {
            form: this.$inertia.form({
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
                terms: false,
            })
        }
    },

    methods: {
        submit() {
            this.form.post(this.route('register'), {
                onFinish: () => this.form.reset('password', 'password_confirmation'),
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
        registerStyle() {
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
