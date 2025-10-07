<script setup>
/*Main functions*/
import { Head } from '@inertiajs/vue3';

/*Components*/
import TForgot from '@/Components/Auth/TForgot.vue';

/* Multi language */
import {useI18n} from "vue-i18n";
import {authTranslates} from "@/Lang/languages";

const {tm} = useI18n({
    inheritLocale: true,
    messages: authTranslates
})

defineProps({
    status: String,
});
</script>

<template>
    <Head :title="tm('forgotPassword')" />

    <t-forgot
        :status="status"
    >
        <template #greeting>
            {{ tm('forgotPassword') }}
        </template>

        <template #subGreeting>
            {{ tm('forgotPasswordSubGreeting') }}
        </template>
    </t-forgot>
</template>
