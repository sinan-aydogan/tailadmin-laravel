<template>
    <t-forgot
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
            <b>{{ t('forgotPasswordGreeting') }}</b>
        </template>
        <!--Greeting Sub-->
        <template #subGreeting>
            {{ t('forgotPasswordSubGreeting') }}
        </template>
    </t-forgot>
</template>

<script setup>
import {Link} from "@inertiajs/vue3";
import TForgot from "@/Components/Auth/TForgot.vue";
import TLogo from "@/Components/Icon/TLogo.vue";

/* Multi-language */
import { useI18n } from "vue-i18n";
import {authTranslates} from "@/Lang/languages";
const {t, tm} = useI18n({
    inheritLocale: true,
    messages: authTranslates,
});
</script>
