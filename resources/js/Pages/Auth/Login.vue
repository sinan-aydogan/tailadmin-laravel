<template>
    <Head title="Log in"/>

    <t-login
        :canResetPassword="canResetPassword"
        :radius="5"
        :status="status"
        bg-image="/img/samples/bgFakurianDesign-nY14Fs8pxT8-unsplash-compressed.jpg"
        login-button-color="pink"
        register-button-design="link-plus"
        register-button-color="purple"
        color="gradient-purple-to-pink"
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
import {defineComponent} from 'vue'
import TLogin from "@/Components/Auth/TLogin";
import TLogo from "@/Components/Icon/TLogo";
import {Head, Link} from '@inertiajs/inertia-vue3';

export default defineComponent({
    components: {
        Head,
        TLogo,
        TLogin,
        Link
    },

    props: {
        canResetPassword: Boolean,
        status: String
    }
})
</script>
