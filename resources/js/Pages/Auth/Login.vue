<template>
    <t-login
        :canResetPassword="canResetPassword"
        :radius="5"
        :status="status"
        bg-image="/img/samples/bgFakurianDesign-nY14Fs8pxT8-unsplash-compressed.jpg"
        login-button-color="solid-pink"
        color="gradient-purple-to-pink"
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
