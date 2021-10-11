x
<template>
    <t-register
        color="gradient-purple-to-pink"
        :radius="5"
        bg-image="/img/samples/bgFakurianDesign-nY14Fs8pxT8-unsplash.jpg"
        button-color="pink"
        :status="status"
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
import {Link} from "@inertiajs/inertia-vue3";
import TLogo from "@/Components/Icon/TLogo";
import TRegister from "@/Components/Auth/TRegister";

export default {
    components: {
        TLogo,
        TRegister,
        Link
    },
    props: {
        status: String
    }
}
</script>
