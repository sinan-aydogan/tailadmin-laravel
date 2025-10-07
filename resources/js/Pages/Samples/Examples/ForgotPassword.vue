<template>
    <app-layout :title="t('pageTitle')">
        <template #header>{{ t('pageTitle') }}</template>
        <template #subHeader>{{ t('pageSubTitle') }}</template>
        <template #default>
        <grid-section :col-tablet="3">
            <!--Demo-->
            <div class="flex flex-col gap-2">
                <img :src="'/img/demo/forgot_1_gradient.jpg'" class="rounded-md" alt="Forgot Password Screen">
                <t-button type="link" :link="route('forgot-password-app-demo')" :radius="3" color="pink" size="full">
                    {{ t('goToDemo') }}
                </t-button>
            </div>
        </grid-section>
        </template>
    </app-layout>
</template>

<script setup>
/*Layout*/
import AppLayout from "@/Layouts/AppLayout.vue";
/*Component*/
import GridSection from "@/Layouts/GridSection.vue";
import TButton from "@/Components/Button/TButton.vue";

/* Multi-language */
import { useI18n } from "vue-i18n";

/* Multi-language */
const { t } = useI18n({
    inheritLocale: true,
    messages: {
        bg: {
            pageTitle: 'Екран за Забравена Парола',
            pageSubTitle: 'Трябва да направите промени в Resources/Js/Pages/Auth/ForgotPassword.vue',
            goToDemo: 'Вижте Демо Забравена Парола',
        },
        de: {
            pageTitle: 'Passwort vergessen Bildschirm',
            pageSubTitle: 'Sie sollten Änderungen an Resources/Js/Pages/Auth/ForgotPassword.vue vornehmen',
            goToDemo: 'Demo Passwort vergessen anzeigen',
        },
        en: {
            pageTitle: 'Forgot Password Screen',
            pageSubTitle: 'You should make to changes in the Resources/Js/Pages/Auth/ForgotPassword.vue',
            goToDemo: 'See Demo Forgot Password',
        },
        fr: {
            pageTitle: 'Écran Mot de passe oublié',
            pageSubTitle: "Vous devez apporter des modifications dans Resources/Js/Pages/Auth/ForgotPassword.vue",
            goToDemo: "Voir la démo Mot de passe oublié",
        },
        ru: {
            pageTitle: 'Экран Забытого Пароля',
            pageSubTitle: 'Вы должны внести изменения в Resources/Js/Pages/Auth/ForgotPassword.vue',
            goToDemo: 'Посмотреть демо Забытого Пароля',
        },
        tr: {
            pageTitle: 'Şifreyi Unuttum Ekranı',
            pageSubTitle: 'Resources/Js/Pages/Auth/ForgotPassword.vue dosyasında değişiklik yapmalısınız',
            goToDemo: 'Şifreyi Unuttum Demoyu Gör',
        },
        zh: {
            pageTitle: '忘记密码屏幕',
            pageSubTitle: '您应该在Resources/Js/Pages/Auth/ForgotPassword.vue中进行更改',
            goToDemo: '查看忘记密码演示',
        },
    },
});
</script>
