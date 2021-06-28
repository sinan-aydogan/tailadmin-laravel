<template>
    <t-form-content :reset-button="false" :submit-button="false">
        <template #status>
            <t-button v-if="form.recentlySuccessful" :radius="3" color="gray" disabled="disabled">
                <t-check-icon class="w-5 h-5"/>
                Done
            </t-button>
        </template>
        <t-form-section
            description="Manage and logout your active sessions on other browsers and devices."
            title="Browser Sessions">
            <!--Info Box-->
            <div class="col-span-full text-sm text-gray-600">
                If necessary, you may logout of all of your other browser sessions across all of your devices. Some of
                your recent sessions are listed below; however, this list may not be exhaustive. If you feel your
                account has been compromised, you should also update your password.
            </div>

            <!-- Other Browser Sessions -->
            <div v-if="sessions.length > 0" class="mt-5 col-span-full space-y-6">
                <div v-for="(session, i) in sessions" :key="i" class="flex items-center">
                    <div>
                        <svg v-if="session.agent.is_desktop" class="w-8 h-8 text-gray-500" fill="none" stroke="currentColor"
                             stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                             viewBox="0 0 24 24">
                            <path
                                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>

                        <svg v-else class="w-8 h-8 text-gray-500" fill="none"
                             stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" stroke="none"></path>
                            <rect height="16" rx="1" width="10" x="7" y="4"></rect>
                            <path d="M11 5h2M12 17v.01"></path>
                        </svg>
                    </div>

                    <div class="ml-3">
                        <div class="text-sm text-gray-600">
                            {{ session.agent.platform }} - {{ session.agent.browser }}
                        </div>

                        <div>
                            <div class="text-xs text-gray-500">
                                {{ session.ip_address }},

                                <span v-if="session.is_current_device"
                                      class="text-green-500 font-semibold">This device</span>
                                <span v-else>Last active {{ session.last_active }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Logout Other Devices Confirmation Modal -->
            <t-modal :radius="3" :show="confirmingLogout" @close="closeModal">
                <template #header>
                    Logout Other Browser Sessions
                </template>
                <template #content>
                    Please enter your password to confirm you would like to logout of your other browser sessions across
                    all of your devices.
                    <t-input-group :error="form.errors.password">
                        <t-input-text
                            :radius="3"
                            ref="password"
                            v-model="form.password"
                            class="mt-1 block w-3/4"
                            placeholder="Password"
                            type="password"
                            @keyup.enter.native="logoutOtherBrowserSessions"
                        />
                    </t-input-group>
                </template>
                <template #footer-left>
                    <t-button :radius="3" color="white" @click.native="closeModal">
                        Cancel
                    </t-button>
                </template>
                <template #footer-right>
                    <t-button :class="{ 'opacity-25': form.processing }" :disabled="form.processing" :radius="3"
                              color="yellow" @click.native="logoutOtherBrowserSessions">
                        Logout Other Browser Sessions
                    </t-button>
                </template>
            </t-modal>
        </t-form-section>
        <!--Buttons-->
        <div class="flex flex-warp p-4 justify-end">
            <div class="flex flex-wrap">
                <!--Regenerate Button for Recovery Codes-->
                <t-button :radius="3" class="mr-3" color="yellow"
                          @click.native="confirmLogout">
                    <t-log-out-icon class="w-5 h-5"/>
                    Logout Other Browser Sessions
                </t-button>
            </div>
        </div>
    </t-form-content>
</template>

<script>
import JetActionMessage from '@/Jetstream/ActionMessage'
import JetActionSection from '@/Jetstream/ActionSection'
import JetButton from '@/Jetstream/Button'
import JetDialogModal from '@/Jetstream/DialogModal'
import JetInput from '@/Jetstream/Input'
import JetInputError from '@/Jetstream/InputError'
import JetSecondaryButton from '@/Jetstream/SecondaryButton'
import TFormContent from "@/Components/Form/TFormContent";
import TFormSection from "@/Components/Form/TFormSection";
import TButton from "@/Components/Button/TButton";
import TCheckIcon from "@/Components/Icon/TCheckIcon";
import TLogOutIcon from "@/Components/Icon/TLogOutIcon";
import TModal from "@/Components/Modal/TModal";
import TInputGroup from "@/Components/Form/TInputGroup";
import TInputText from "@/Components/Form/Inputs/TInputText";

export default {
    props: ['sessions'],

    components: {
        TInputText,
        TInputGroup,
        TModal,
        TLogOutIcon,
        TCheckIcon,
        TButton,
        TFormSection,
        TFormContent,
        JetActionMessage,
        JetActionSection,
        JetButton,
        JetDialogModal,
        JetInput,
        JetInputError,
        JetSecondaryButton,
    },

    data() {
        return {
            confirmingLogout: false,

            form: this.$inertia.form({
                password: '',
            })
        }
    },

    methods: {
        confirmLogout() {
            this.confirmingLogout = true

            setTimeout(() => this.$refs.password.focus(), 250)
        },

        logoutOtherBrowserSessions() {
            this.form.delete(route('other-browser-sessions.destroy'), {
                preserveScroll: true,
                onSuccess: () => this.closeModal(),
                onError: () => this.$refs.password.focus(),
                onFinish: () => this.form.reset(),
            })
        },

        closeModal() {
            this.confirmingLogout = false

            this.form.reset()
        },
    },
}
</script>
