<template>
    <t-forgot
        color="solid-blue"
        bg-color="light-gray"
        :radius="5"
        button-color="blue"
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
import {Link} from "@inertiajs/vue3";
import TForgot from "@/Components/Auth/TForgot.vue";
import TLogo from "@/Components/Icon/TLogo.vue";

export default {
    components: {TLogo, TForgot, Link},
    props: {
        status: String
    }
}
</script>
