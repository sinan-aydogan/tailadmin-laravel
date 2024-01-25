<script setup>
/*Main functions*/
import { Head } from '@inertiajs/vue3';


/*Components*/
import TLogin from "@/Components/Auth/TLogin.vue";

defineProps({
    canResetPassword: Boolean,
    status: {
        type: String,
        default: '',
    },
});
</script>

<template>
    <Head :title="$t('auth.login')"/>
    <t-login
        color="solid-purple"
        :status="status"
        :can-reset-password="canResetPassword"
    >
    </t-login>
</template>


