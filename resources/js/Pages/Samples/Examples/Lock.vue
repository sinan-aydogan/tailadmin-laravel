<template>
    <app-layout :title="t('pageTitle')">
        <template #header>{{ t('pageTitle') }}</template>
        <template #subHeader>{{ t('pageSubTitle') }}</template>
        <template #default>
            <grid-section :col-tablet="3">
                <!--Demo-->
                <div class="flex flex-col gap-2">
                    <img :src="'/img/demo/lock_1_gradient.jpg'" class="rounded-md" alt="Lock Screen Photo">
                    <t-button type="link" :link="route('lock-app-demo')" :radius="3" color="pink" size="full">
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
            pageTitle: 'Екран за Заключване',
            pageSubTitle: 'Само примерен екран, това не е активен модул',
            goToDemo: 'Вижте Демо Заключване',
        },
        de: {
            pageTitle: 'Sperrbildschirm',
            pageSubTitle: 'Nur Beispielbildschirm, es ist kein aktives Modul',
            goToDemo: 'Demo-Sperre anzeigen',
        },
        en: {
            pageTitle: 'Lock Screen',
            pageSubTitle: 'Only sample screen, it\'s not active module',
            goToDemo: 'See Demo Lock',
        },
        fr: {
            pageTitle: 'Écran de verrouillage',
            pageSubTitle: 'Seulement un écran d\'exemple, ce n\'est pas un module actif',
            goToDemo: 'Voir la démo de verrouillage',
        },
        ru: {
            pageTitle: 'Экран Блокировки',
            pageSubTitle: 'Только пример экрана, это не активный модуль',
            goToDemo: 'Посмотреть демо Блокировки',
        },
        tr: {
            pageTitle: 'Kilit Ekranı',
            pageSubTitle: 'Sadece örnek ekran, bu aktif bir modül değil',
            goToDemo: 'Demo Kilitleme Ekranını Gör',
        },
        zh: {
            pageTitle: '锁屏',
            pageSubTitle: '仅示例屏幕，未激活模块',
            goToDemo: '查看锁屏演示',
        },
    },
});
</script>
