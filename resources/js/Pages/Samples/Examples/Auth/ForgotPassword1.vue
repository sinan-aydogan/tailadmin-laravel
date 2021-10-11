<template>
    <t-forgot
        color="gradient-purple-to-pink"
        :radius="5"
        bg-image="/img/samples/bgFakurianDesign-nY14Fs8pxT8-unsplash.jpg"
        button-color="pink"
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
            <b>Forgot your password? No problem.</b>
        </template>
        <!--Greeting Sub-->
        <template #subGreeting>
            Write your email address and we will email you a password reset link
        </template>
    </t-forgot>
</template>

<script>
import {Link} from "@inertiajs/inertia-vue3";
import TForgot from "@/Components/Auth/TForgot";
import TLogo from "@/Components/Icon/TLogo";

export default {
    components: {TLogo, TForgot, Link},
    props: {
        status: String
    }
}
</script>
