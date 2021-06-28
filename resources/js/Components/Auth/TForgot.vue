<template>
    <t-full-screen-card :bg-image="bgImage" :color="bgColor">
        <div class="relative max-w-min">
            <!--Container-->
            <div :class="[
            'flex flex-col border items-center justify-center shadow border-none overflow-hidden',
            radiusStyle
            ]">
                <!--Header-->
                <div :class="[
                'flex flex-col w-full',
                forgotPasswordStyle
                ]">
                    <!--Logo-->
                    <div class="inline-flex px-32 py-4">
                        <slot name="logo"/>
                    </div>
                    <!--Greeting-->
                    <div class="inline-flex whitespace-normal justify-center items-center text-center w-full bg-gray-200 py-1 bg-opacity-20 w-full">
                        <div class="text-sm">
                            <!--Status-->
                            <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
                                {{ status }}
                            </div>
                            <slot v-else name="greeting"/>
                        </div>
                    </div>
                </div>

                <div class="text-sm shadow p-2 bg-white bg-opacity-75 text-center font-semibold">
                    <slot name="subGreeting"/>
                </div>
                <!--Form-->
                <div class="flex flex-col gap-4 bg-white px-8 w-full">
                    <form @submit.prevent="submit">
                        <!--Email-->
                        <div class="mt-2">
                            <t-input-group label="Email" label-for="email">
                                <t-input-text :radius="3" id="email" v-model="form.email" autofocus required type="email"/>
                            </t-input-group>
                        </div>
                        <!--Submit Button-->
                        <div class="flex items-center my-4">
                            <t-button size="full" :class="{ 'opacity-25': form.processing }" :color="buttonColor" :disabled="form.processing"
                                      :radius="3">
                                Email Password Reset Link
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
import TFullScreenCard from "@/Components/Card/TFullScreenCard";
import TInputGroup from "@/Components/Form/TInputGroup";
import TInputText from "@/Components/Form/Inputs/TInputText";
import TButton from "@/Components/Button/TButton";
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";
import TAlert from "@/Components/Alert/TAlert";
import TBellIcon from "@/Components/Icon/TBellIcon";

export default {
    name: "TForgot",
    components: {
        TBellIcon,
        TAlert, TButton, TInputText, TInputGroup, TFullScreenCard
    },
    mixins: [radiusSizeMixin],
    props: {
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
            })
        }
    },

    methods: {
        submit() {
            this.form.post(this.route('password.email'))
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
        forgotPasswordStyle() {
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
