<template>
    <Head :title="tm('login')"/>
    <t-login
        :bg-image="activeBg"
        color="solid-purple"
        :status="status"
        :can-reset-password="canResetPassword"
    >
        <template #greeting>
            <div class="flex items-center justify-center space-x-2">
                <icon icon="circle-info" size="2x"/>
                <p v-text="tm('demoMessage')" class="text-center"></p>
            </div>
        </template>
    </t-login>
</template>

<script>

/*Main functions*/
import {defineComponent} from "vue";
import {Head} from "@inertiajs/inertia-vue3";

/*Components*/
import TLogin from "@/Components/Auth/TLogin";

/* Multi language */
import {useI18n} from "vue-i18n";
import {authTranslates} from "@/Lang/languages";
import TBadge from "@/Components/Badge/TBadge";

/*Icon*/
import {library} from "@fortawesome/fontawesome-svg-core";
import {faCircleInfo} from "@fortawesome/free-solid-svg-icons";

library.add(faCircleInfo)

export default defineComponent({
    props: {
        canResetPassword: Boolean,
        status: String,
    },
    components: {
        TBadge,
        TLogin,
        Head
    },
    setup() {

        /*Multi-language*/
        const {t, tm} = useI18n({
            inheritLocale: true,
            messages: {
                bg: {
                    ...authTranslates.bg,
                    demoMessage: 'Демонстрацията се нулира всеки ден и някои функции са ограничени за сигурност'
                },
                de: {
                    ...authTranslates.de,
                    demoMessage: 'Die Demo wird jeden Tag zurückgesetzt und einige Funktionen wurden aus Sicherheitsgründen eingeschränkt'
                },
                en: {
                    ...authTranslates.en,
                    demoMessage: 'The demo is reset in every day and some features have been restricted for security'
                },
                fr: {
                    ...authTranslates.fr,
                    demoMessage: 'La démo est réinitialisée tous les jours et certaines fonctionnalités ont été restreintes pour des raisons de sécurité'
                },
                ru: {
                    ...authTranslates.ru,
                    demoMessage: 'Демонстрация сбрасывается каждый день, и некоторые функции были ограничены в целях безопасности.'
                },
                tr: {
                    ...authTranslates.tr,
                    demoMessage: 'Demo her gün sıfırlanmaktadır ve güvenlik sebebiyle bazı özellikler kısıtlanmıştır'
                },
                zh: {
                    ...authTranslates.zh,
                    demoMessage: '该演示每天都会重置，并且出于安全考虑，某些功能已被限制'
                }
            }
        })

        return {t, tm}
    }
})
</script>
