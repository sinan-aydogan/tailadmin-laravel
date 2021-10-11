<template>
    <t-login
        color="gradient-purple-to-pink"
        :radius="5"
        bg-image="/img/samples/bgFakurianDesign-nY14Fs8pxT8-unsplash.jpg"
        login-button-color="pink"
        register-button-color="white"
        register-button-design="outline"
        :canResetPassword="canResetPassword"
        :status="status"
    >
        <!--Logo-->
        <template #logo>
            <Link href="/">
                <div class="flex flex-col justify-center items-center w-full">
                    <t-logo class="w-12 h-12"/>
                    <span class="text-3xl">TailAdmin</span>
                </div>
            </Link>
        </template>
        <!--Greeting-->
        <template #greeting>
            Sign in to your account
        </template>
    </t-login>
</template>

<script>
import {Link} from "@inertiajs/inertia-vue3";
import TLogin from "@/Components/Auth/TLogin";
import TLogo from "@/Components/Icon/TLogo";

export default {
    components: {
        TLogo,
        TLogin,
        Link
    },

    props: {
        canResetPassword: Boolean,
        status: String
    },
}
</script>
