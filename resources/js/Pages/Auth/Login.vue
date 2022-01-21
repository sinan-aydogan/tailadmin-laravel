<template>
    <Head :title="tm('login')"/>
    <t-login
        :bg-image="activeBg"
        color="solid-purple"
        :status="status"
        :can-reset-password="canResetPassword"
    >
    </t-login>
</template>

<script>

/*Main functions*/
import {defineComponent} from "vue";
import { Head } from "@inertiajs/inertia-vue3";

/*Components*/
import TLogin from "@/Components/Auth/TLogin";

/* Multi language */
import {useI18n} from "vue-i18n";
import {authTranslates} from "@/Lang/languages";

export default defineComponent({
    props: {
        canResetPassword: Boolean,
        status: String,
    },
    components: {
        TLogin,
        Head
    },
    setup(){
        const {t,tm} = useI18n({
            inheritLocale: true,
            messages: authTranslates
        })

        return {t, tm}
    }
})
</script>
