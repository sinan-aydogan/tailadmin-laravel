<template>
    <t-login
        color="solid-gray"
        bg-color="gradient-gray-to"
        :radius="5"
        login-button-color="light-gray"
        :canResetPassword="canResetPassword"
        :status="status"
    >
        <!--Logo-->
        <template #logo>
            <inertia-link href="/">
                <div class="flex flex-col justify-center items-center w-full">
                    <t-logo class="w-12 h-12"/>
                    <span class="text-3xl">TailAdmin</span>
                </div>
            </inertia-link>
        </template>
        <!--Greeting-->
        <template #greeting>
            Sign in to your account
        </template>
    </t-login>
</template>

<script>
import TLogin from "@/Components/Auth/TLogin";
import TLogo from "@/Components/Icon/TLogo";

export default {
    components: {
        TLogo,
        TLogin,
    },

    props: {
        canResetPassword: Boolean,
        status: String
    },
}
</script>
