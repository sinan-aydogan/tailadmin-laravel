<template>
    <app-layout :title="t('pageTitle')">
    <template #header>{{ t('pageTitle') }}</template>
    <template #subHeader>{{ t('pageSubTitle') }}</template>
    <template #default>
        <grid-section :col-tablet="3">
                <!--Demo-->
                <div class="flex flex-col gap-2">
                <img :src="'/img/demo/login_1_gradient.jpg'" class="rounded-md" alt="Login Screen">
                <t-button type="link" :link="route('login-app-demo')" :radius="3" color="pink" size="full">
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
            pageTitle: 'Екран за Вход',
            pageSubTitle: 'Трябва да направите промени в Resources/Js/Pages/Auth/Login.vue',
            goToDemo: 'Вижте Демо Вход',
        },
        de: {
            pageTitle: 'Anmeldebildschirm',
            pageSubTitle: 'Sie sollten Änderungen in Resources/Js/Pages/Auth/Login.vue vornehmen',
            goToDemo: 'Demo-Anmeldung anzeigen',
        },
        en: {
            pageTitle: 'Login Screen',
            pageSubTitle: 'You should make to changes in the Resources/Js/Pages/Auth/Login.vue',
            goToDemo: 'See Demo Login',
        },
        fr: {
            pageTitle: "Écran d'authentification",
            pageSubTitle: "Vous devez apporter des modifications dans Resources/Js/Pages/Auth/Login.vue",
            goToDemo: "Voir la démo de connexion",
        },
        ru: {
            pageTitle: 'Экран Входа',
            pageSubTitle: 'Вы должны внести изменения в Resources/Js/Pages/Auth/Login.vue',
            goToDemo: 'Посмотреть демо Вход',
        },
        tr: {
            pageTitle: 'Giriş Ekranı',
            pageSubTitle: 'Resources/Js/Pages/Auth/Login.vue dosyasında değişiklik yapmalısınız',
            goToDemo: 'Demo Giriş Ekranını Gör',
        },
        zh: {
            pageTitle: '登录界面',
            pageSubTitle: '您应该在 Resources/Js/Pages/Auth/Login.vue 中进行更改',
            goToDemo: '查看演示登录',
        },
    },
});
</script>
