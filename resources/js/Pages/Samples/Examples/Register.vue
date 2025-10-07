<template>
    <app-layout :title="t('pageTitle')">
        <template #header>{{ t('pageTitle') }}</template>
        <template #subHeader>{{ t('pageSubTitle') }}</template>
        <template #default>
        <grid-section :col-tablet="3">
            <!--Demo-->
            <div class="flex flex-col gap-2">
                <img :src="'/img/demo/register_1_gradient.jpg'" class="rounded-md" alt="Register Screen">
                <t-button type="link" :link="route('register-app-demo')" :radius="3" color="pink" size="full">
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
            pageTitle: 'Екран за Регистрация',
            pageSubTitle: 'Трябва да направите промени в Resources/Js/Pages/Auth/Register.vue',
            goToDemo: 'Вижте Демо Регистрация',
        },
        de: {
            pageTitle: 'Registrierungsbildschirm',
            pageSubTitle: 'Sie sollten Änderungen an Resources/Js/Pages/Auth/Register.vue vornehmen',
            goToDemo: 'Demo-Registrierung anzeigen',
        },
        en: {
            pageTitle: 'Register Screen',
            pageSubTitle: 'You should make to changes in the Resources/Js/Pages/Auth/Register.vue',
            goToDemo: 'See Demo Register',
        },
        fr: {
            pageTitle: "Écran d'inscription",
            pageSubTitle: "Vous devez apporter des modifications dans Resources/Js/Pages/Auth/Register.vue",
            goToDemo: "Voir la démo d'inscription",
        },
        ru: {
            pageTitle: 'Экран Регистрации',
            pageSubTitle: 'Вы должны внести изменения в Resources/Js/Pages/Auth/Register.vue',
            goToDemo: 'Посмотреть демо Регистрация',
        },
        tr: {
            pageTitle: 'Kayıt Ekranı',
            pageSubTitle: 'Resources/Js/Pages/Auth/Register.vue dosyasında değişiklik yapmalısınız',
            goToDemo: 'Demo Kayıt Ekranını Gör',
        },
        zh: {
            pageTitle: '注册界面',
            pageSubTitle: '您应该在 Resources/Js/Pages/Auth/Register.vue 中进行更改',
            goToDemo: '查看演示注册',
        },
    },
});
</script>
