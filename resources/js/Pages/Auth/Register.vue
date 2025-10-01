<template>
    <Head :title="tm('register')" />
    <t-register
        :privacyPolicyFeature="$page.props.jetstream.hasTermsAndPrivacyPolicyFeature"
        :termsLink="'/terms'"
        :policyLink="'/privacy-policy'"
    />
</template>

<script setup>

/*Main functions*/
import {defineComponent} from "vue";
import { Head, Link, useForm } from '@inertiajs/vue3';


/*Components*/
import TRegister from "@/Components/Auth/TRegister.vue";

/* Multi language */
import {useI18n} from "vue-i18n";
import {authTranslates} from "@/Lang/languages";

const {t,tm} = useI18n({
    inheritLocale: true,
    messages: authTranslates
})
</script>
