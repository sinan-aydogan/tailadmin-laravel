<template>
    <Head title="Register"/>

    <t-register
        :radius="5"
        :status="status"
        bg-image="/img/samples/bgFakurianDesign-nY14Fs8pxT8-unsplash.jpg"
        button-color="solid-pink"
        color="gradient-purple-to-pink"
        :privacyPolicyFeature="true"
        termsLink="terms"
        policyLink="privacy-policy"
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
            Sign up for new account
        </template>
    </t-register>
</template>

<script>
import {defineComponent} from 'vue'
import TLogo from "@/Components/Icon/TLogo";
import TRegister from "@/Components/Auth/TRegister";
import {Head, Link} from '@inertiajs/inertia-vue3';

export default defineComponent({
    components: {
        Head,
        TLogo,
        TRegister,
        Link
    },
    props: {
        status: String
    }
})
</script>
