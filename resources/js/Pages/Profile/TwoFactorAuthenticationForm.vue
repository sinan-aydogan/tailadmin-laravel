<template>
    <t-form-content :reset-button="false" :submit-button="false">
        <t-form-section
            description="Add additional security to your account using two factor authentication."
            title="Two Factor Authentication">
            <!--Two Factor Authentication Status-->
            <t-alert :border="true" :color="twoFactorEnabled ? 'green' : 'yellow'" class="col-span-12" :radius="3">
                <div class="inline-flex items-center gap-4" v-if="twoFactorEnabled">
                    <t-check-circle-solid-icon class="w-10 h-10"/>
                    You have enabled two factor authentication.
                </div>
                <div class="inline-flex items-center gap-4" v-else>
                    <t-information-circle-icon class="w-10 h-10"/>
                    You have not enabled two factor authentication.
                </div>
            </t-alert>
            <!--Info Box-->
            <div class="mt-3 col-span-full text-sm text-gray-600">
                <p>
                    When two factor authentication is enabled, you will be prompted for a secure, random token during
                    authentication. You may retrieve this token from your phone's Google Authenticator application.
                </p>
            </div>

            <div class="col-span-full" v-if="twoFactorEnabled">
                <div v-if="qrCode">
                    <div class="mt-4 col-span-full text-sm text-gray-600">
                        <p class="font-semibold">
                            Two factor authentication is now enabled. Scan the following QR code using your phone's
                            authenticator application.
                        </p>
                    </div>

                    <div class="mt-4 dark:p-4 dark:w-56 dark:bg-white" v-html="qrCode">
                    </div>
                </div>

                <div v-if="recoveryCodes.length > 0">
                    <div class="mt-4 col-span-full text-sm text-gray-600">
                        <p class="font-semibold">
                            Store these recovery codes in a secure password manager. They can be used to recover access
                            to your account if your two factor authentication device is lost.
                        </p>
                    </div>

                    <div class="grid gap-1 col-span-full mt-4 px-4 py-4 font-mono text-sm bg-gray-100 rounded-lg">
                        <div v-for="code in recoveryCodes" :key="code">
                            {{ code }}
                        </div>
                    </div>
                </div>
            </div>
        </t-form-section>
        <!--Buttons-->
        <div class="flex flex-warp p-4 justify-end">
            <!--Enable Button-->
            <div v-if="! twoFactorEnabled">
                <jet-confirms-password @confirmed="enableTwoFactorAuthentication">
                    <t-button color="green" :radius="3" :class="{ 'opacity-25': enabling }" :disabled="enabling" type="button">
                        Enable
                    </t-button>
                </jet-confirms-password>
            </div>
            <!--Other Buttons-->
            <div class="flex flex-wrap" v-else>
                <!--Regenerate Button for Recovery Codes-->
                <jet-confirms-password @confirmed="regenerateRecoveryCodes">
                    <t-button color="white" :radius="3" v-if="recoveryCodes.length > 0"
                              class="mr-3">
                        <t-refresh-icon class="w-5 h-5"/>
                        Regenerate Recovery Codes
                    </t-button>
                </jet-confirms-password>
                <!--Show Button of Recovery Codes-->
                <jet-confirms-password @confirmed="showRecoveryCodes">
                    <t-button color="white" :radius="3" v-if="recoveryCodes.length === 0" class="mr-3">
                        <t-eye-icon class="w-5 h-5"/>
                        Show Recovery Codes
                    </t-button>
                </jet-confirms-password>

                <!--Two Factor Authentication Disable Button-->
                <jet-confirms-password @confirmed="disableTwoFactorAuthentication">
                    <t-button color="red" :radius="3"
                              :class="{ 'opacity-25': disabling }"
                              :disabled="disabling">
                        Disable
                    </t-button>
                </jet-confirms-password>
            </div>
        </div>
    </t-form-content>
</template>

<script>
import JetActionSection from '@/Jetstream/ActionSection'
import JetButton from '@/Jetstream/Button'
import JetConfirmsPassword from '@/Jetstream/ConfirmsPassword'
import JetDangerButton from '@/Jetstream/DangerButton'
import JetSecondaryButton from '@/Jetstream/SecondaryButton'
import TFormContent from "@/Components/Form/TFormContent";
import TButton from "@/Components/Button/TButton";
import TFormSection from "@/Components/Form/TFormSection";
import TAlert from "@/Components/Alert/TAlert";
import TCheckIcon from "@/Components/Icon/TCheckIcon";
import TInformationCircleIcon from "@/Components/Icon/TInformationCircleIcon";
import TCheckCircleSolidIcon from "@/Components/Icon/TCheckCircleSolidIcon";
import TRefreshIcon from "@/Components/Icon/TRefreshIcon";
import TEyeIconIcon from "@/Components/Icon/TEyeIcon";
import TEyeIcon from "@/Components/Icon/TEyeIcon";

export default {
    components: {
        TEyeIcon,
        TEyeIconIcon,
        TRefreshIcon,
        TCheckCircleSolidIcon,
        TInformationCircleIcon,
        TCheckIcon,
        TAlert,
        TFormSection,
        TButton,
        TFormContent,
        JetActionSection,
        JetButton,
        JetConfirmsPassword,
        JetDangerButton,
        JetSecondaryButton,
    },

    data() {
        return {
            enabling: false,
            disabling: false,

            qrCode: null,
            recoveryCodes: [],
        }
    },

    methods: {
        enableTwoFactorAuthentication() {
            this.enabling = true

            this.$inertia.post('/user/two-factor-authentication', {}, {
                preserveScroll: true,
                onSuccess: () => Promise.all([
                    this.showQrCode(),
                    this.showRecoveryCodes(),
                ]),
                onFinish: () => (this.enabling = false),
            })
        },

        showQrCode() {
            return axios.get('/user/two-factor-qr-code')
                .then(response => {
                    this.qrCode = response.data.svg
                })
        },

        showRecoveryCodes() {
            return axios.get('/user/two-factor-recovery-codes')
                .then(response => {
                    this.recoveryCodes = response.data
                })
        },

        regenerateRecoveryCodes() {
            axios.post('/user/two-factor-recovery-codes')
                .then(response => {
                    this.showRecoveryCodes()
                })
        },

        disableTwoFactorAuthentication() {
            this.disabling = true

            this.$inertia.delete('/user/two-factor-authentication', {
                preserveScroll: true,
                onSuccess: () => (this.disabling = false),
            })
        },
    },

    computed: {
        twoFactorEnabled() {
            return !this.enabling && this.$page.props.user.two_factor_enabled
        }
    }
}
</script>
