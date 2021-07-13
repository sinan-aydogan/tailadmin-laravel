<template>
    <t-full-screen-card :bg-image="bgImage" :color="bgColor">
        <div :class="['relative']">
            <!--Avatar-->
            <div class="absolute flex justify-center w-full -mt-12 z-20">
                <t-avatar :radius="8" :size="7" class="border-4 border-white rounded-full"/>
            </div>
            <!--Container-->
            <div :class="[
            'flex flex-col items-center justify-center shadow border-none overflow-hidden z-10',
            radiusStyle
            ]">
                <form @submit.prevent="submit">
                    <!--Form-->
                    <div :class="['flex flex-col gap-4 p-8 pt-16',lockStyle, radiusStyle]">


                        <!--Name-->
                        <div class="text-xl text-center font-semibold">
                          {{ $page.props.user.name }}
                        </div>
                        <!--Password-->
                        <t-input-group :radius="5" class="relative" label-for="password">
                            <t-input-text id="password" v-model="form.password" :radius="3" placeholder="Password">
                                <template #icon>
                                    <t-user-circle-icon class="w-5 h-5"/>
                                </template>
                            </t-input-text>
                        </t-input-group>
                        <!--Button-->
                        <t-button :class="{ 'opacity-25': form.processing }"
                                  :color="buttonColor"
                                  :disabled="form.processing"
                                  :radius="3">
                            {{ buttonText }}
                        </t-button>
                    </div>
                </form>
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
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";
import TAlert from "@/Components/Alert/TAlert";
import TBellIcon from "@/Components/Icon/TBellIcon";
import TInputGroup from "@/Components/Form/TInputGroup";
import TInputText from "@/Components/Form/Inputs/TInputText";
import TUserCircleIcon from "@/Components/Icon/TUserCircleIcon";
import TAvatar from "@/Components/Avatar/TAvatar";
import TButton from "@/Components/Button/TButton";

export default {
    name: "TLock",
    components: {TButton, TAvatar, TUserCircleIcon, TInputText, TInputGroup, TBellIcon, TAlert, TFullScreenCard},
    mixins: [radiusSizeMixin],
    props: {
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
        buttonText: {
            type: String,
            default: 'Re-Login'
        }
    },
    data() {
        return {
            form: this.$inertia.form({
                password: ''
            })
        }
    },
    methods: {
        submit() {
            this.form
                .transform(data => ({
                    ...data,
                }))
                .post(this.route('unlock'), {
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
        lockStyle() {
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
