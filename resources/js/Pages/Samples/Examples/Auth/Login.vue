<template>
    <t-login
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
            {{ t('loginGreeting') }}
        </template>
    </t-login>
</template>

<script setup>
import {Link} from "@inertiajs/vue3";
import TLogin from "@/Components/Auth/TLogin.vue";
import TLogo from "@/Components/Icon/TLogo.vue";

defineProps({
    canResetPassword: Boolean,
    status: String
});

/* Multi-language */
import { useI18n } from "vue-i18n";
import {authTranslates} from "@/Lang/languages";
const { t } = useI18n({
    inheritLocale: true,
    messages: authTranslates,
});
</script>
