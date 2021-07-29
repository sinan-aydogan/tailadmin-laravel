x
<template>
    <t-register
        color="gradient-purple-to-pink"
        :radius="5"
        bg-image="/img/samples/bgFakurianDesign-nY14Fs8pxT8-unsplash.jpg"
        button-color="solid-pink"
        :status="status"
        :privacyPolicyFeature="true"
        termsLink="terms"
        policyLink="privacy-policy"
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
            Sign up for new account
        </template>
    </t-register>
</template>

<script>
import TLogo from "@/Components/Icon/TLogo";
import TRegister from "@/Components/Auth/TRegister";

export default {
    components: {
        TLogo,
        TRegister,
    },
    props: {
        status: String
    }
}
</script>
