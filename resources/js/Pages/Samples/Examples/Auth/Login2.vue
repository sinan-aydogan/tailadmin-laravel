<template>
    <t-login
        color="solid-gray"
        bg-color="gradient-gray-to"
        :radius="5"
        login-button-color="gray"
        login-buttondesign="light"
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
