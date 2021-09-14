<template>
    <app-layout>
        <template #header>
            Profile
        </template>
        <template #default>
            <div v-if="$page.props.jetstream.canUpdateProfileInformation">
                <update-profile-information-form :user="$page.props.user"/>

                <jet-section-border/>
            </div>

            <div v-if="$page.props.jetstream.canUpdatePassword">
                <update-password-form class="mt-10 sm:mt-0"/>

                <jet-section-border/>
            </div>

          <t-alert :closeable="true" class="mt-10 -mb-4 sm:mt-0" radius="1" color="solid-yellow">
            <t-information-icon class="w-8 h-8" slot="icon"/>
            Two Factor Authentication disabled at the demo, you can activate in the <code><pre class="bg-gray-500 rounded px-2 max-w-min inline-block bg-opacity-75">config/fortify.php</pre></code>
          </t-alert>

            <div v-if="$page.props.jetstream.canManageTwoFactorAuthentication">
                <two-factor-authentication-form class="mt-10 sm:mt-0"/>

                <jet-section-border/>
            </div>

            <logout-other-browser-sessions-form :sessions="sessions" class="mt-10 sm:mt-0"/>

            <template v-if="$page.props.jetstream.hasAccountDeletionFeatures">
                <jet-section-border/>

                <delete-user-form class="mt-10 sm:mt-0"/>
            </template>
        </template>
    </app-layout>
</template>

<script>
import AppLayout from '@/Layouts/AppLayout'
import DeleteUserForm from './DeleteUserForm'
import JetSectionBorder from '@/Jetstream/SectionBorder'
import LogoutOtherBrowserSessionsForm from './LogoutOtherBrowserSessionsForm'
import TwoFactorAuthenticationForm from './TwoFactorAuthenticationForm'
import UpdatePasswordForm from './UpdatePasswordForm'
import UpdateProfileInformationForm from './UpdateProfileInformationForm'
import TAlert from "@/Components/Alert/TAlert";
import TInformationIcon from "@/Components/Icon/TInformationIcon";

export default {
    props: ['sessions'],

    components: {
      TInformationIcon,
      TAlert,
        AppLayout,
        DeleteUserForm,
        JetSectionBorder,
        LogoutOtherBrowserSessionsForm,
        TwoFactorAuthenticationForm,
        UpdatePasswordForm,
        UpdateProfileInformationForm,
    },
}
</script>
