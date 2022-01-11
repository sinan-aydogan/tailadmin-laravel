<template>
    <Head title="Alerts" />
    <app-layout>
        <template #header>{{ tm('pageTitle') }}</template>
        <template #subHeader>{{ tm('pageSubTitle') }}</template>
        <template #default>
            <grid-section :col="1" :gap="4">
                <template v-for="content in demoContents" :key="content.id">
                    <t-code-showcase
                        :tabs="showcaseTabs"
                        @click.capture="activeShowcase = content.design"
                    >
                        <t-alert
                            :id="content.id"
                            :design="content.design"
                            :color="content.color"
                            :radius="content.radius"
                            :title="content.title ? tm(content.title) : null"
                            :closeable="content.closeable"
                            :timer="content.timer"
                            @destroy="revive(demoContents[content.design])"
                        >
                            <template #icon v-if="content.icon || content.media">
                                <icon v-if="content.icon" :icon="content.icon" size="lg" />
                                <t-avatar
                                    v-if="content.media"
                                    :radius="8"
                                    :size="3"
                                    src="https://i.pravatar.cc/300"
                                    class="my-2"
                                />
                            </template>
                            <span v-text="tm(content.content)"></span>
                        </t-alert>
                        <!-- Revive Message -->
                        <div
                            v-if="reviveMessageStatus[content.design]"
                            class="flex justify-center items-center space-x-4 font-semibold text-yellow-600 dark:text-white bg-yellow-300/10 dark:bg-yellow-700/20 border border-yellow-600 rounded p-4 pulse"
                        >
                            <icon icon="info" size="lg" />
                            <span v-text="tm('reviveMessage')"></span>
                        </div>
                        <template #js>{{ demoContent[content.design].js }}</template>
                        <template #template>{{ demoContent[content.design].template }}</template>
                        <template #label="slotProps">
                            <icon v-if="slotProps.tab.id === 'timer'" icon="play" size="sm" />
                            <span v-text="slotProps.tab.label" />
                        </template>
                    </t-code-showcase>
                </template>
            </grid-section>,
        </template>
    </app-layout>
</template>

<script>
/*Main Functions*/
import { defineComponent, ref, reactive } from "vue";
import { Head } from "@inertiajs/inertia-vue3";

/*Component*/
import AppLayout from "@/Layouts/AppLayout";
import GridSection from "@/Layouts/GridSection";
import TAlert from "@/Components/Alert/TAlert";
import TAvatar from "@/Components/Avatar/TAvatar";
import TCodeShowcase from '@/Components/Code/TCodeShowcase'

/* Demo */
import { samples } from "@/Components/Alert/TAlertDoc";

/*Import FontAwesomeIcon*/
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckCircle, faTrash, faChevronLeft, faRetweet, faBan, faClock, faInfo, faHistory, faPlay } from "@fortawesome/free-solid-svg-icons";
library.add(faCheckCircle, faTrash, faChevronLeft, faRetweet, faBan, faClock, faInfo, faHistory, faPlay)

/* Multi-language */
import { useI18n } from "vue-i18n";

export default defineComponent({
    name: "Alert",
    components: {
        Head,
        TAvatar,
        AppLayout,
        GridSection,
        TAlert,
        TCodeShowcase,
    },
    setup() {
        /* Multi-language */
        const { t, tm } = useI18n({
            inheritLocale: true,
            messages: {
                en: {
                    pageTitle: 'Alerts',
                    pageSubTitle: 'Closeable and timeable elite alert boxes',
                    filledTitle: 'Success',
                    filledContent: 'The post added successfully (filled)',
                    lightTitle: 'Danger',
                    lightContent: 'The user deleted successfully (light)',
                    inlineContent: 'Your account was blocked, please connect with IT (inline)',
                    outlineContent: 'You entered a new configuration, the settings will refresh 24hr after (outline)',
                    gradientContent: 'The new user is successfully added. \n User: Hamdi KAYA (gradient)',
                    elegantTitle: 'Attention',
                    elegantContent: 'The all of changes overwrite to themself (elegant)',
                    blockContent: 'Please, check your task list (block)',
                    activateTimer: 'Start timer',
                    reviveMessage: 'Don\'t worry, it\'ll come back in 4 seconds'
                },
                tr: {
                    pageTitle: 'Uyarı Kutusu',
                    pageSubTitle: 'Gizlenebilir ve zamanlanabilir şık uyarı kutuları',
                    filledTitle: 'İşlem Başarılı',
                    filledContent: 'Gönderiniz başarıyla yayınlandı (filled)',
                    lightTitle: 'Dikkat',
                    lightContent: 'Kullanıcı silindi (light)',
                    inlineContent: 'Hesabınız bloke oldu, lütfen IT ile iletişime geçiniz (inline)',
                    outlineContent: 'Yeni girdiğiniz ayarlar 24 saat içinde aktif olacaktır (outline)',
                    gradientContent: 'Yeni kullanıcı eklendi. \n Kullanıcı: Hamdi KAYA (gradient)',
                    elegantTitle: 'Uyarı',
                    elegantContent: 'Yapıtığınız değişiklikler, var olan kayıtların üzerine yazılacak (elegant)',
                    blockContent: 'Lütfen görev listenizi kontrol ediniz (block)',
                    activateTimer: 'Zamanlayıcıyı Çalıştır',
                    reviveMessage: 'Endişelenme 4 saniye sonra geri gelecek'
                },
            },
        });

        /* Demo Contents */
        const demoContents = reactive({
            "filled": {
                id: 1,
                design: "filled",
                content: "filledContent",
                color: "success",
                closeable: true,
                radius: 1,
                icon: "check-circle",
                title: "filledTitle",
                timer: null
            },
            "light": {
                id: 1,
                design: "light",
                content: "lightContent",
                color: "danger",
                radius: 3,
                icon: "trash",
                title: "lightTitle",
                closeable: true,
                timer: null
            },
            "inline": {
                id: 1,
                design: "inline",
                content: "inlineContent",
                color: "warning",
                radius: 3,
                icon: "ban",
                timer: null
            },
            "outline": {
                id: 1,
                design: "outline",
                content: "outlineContent",
                color: "info",
                radius: 2,
                icon: "retweet",
                timer: null
            },
            "gradient": {
                id: 1,
                design: "gradient",
                content: "gradientContent",
                color: "dream",
                radius: 3,
                media: true,
                closeable: true,
                timer: null
            },
            "elegant": {
                id: 1,
                design: "elegant",
                content: "elegantContent",
                color: "violet",
                radius: 8,
                title: "elegantTitle",
                closeable: true,
                timer: null
            },
            "block": {
                id: 1,
                design: "block",
                content: "blockContent",
                color: "info",
                radius: 1,
                icon: "info",
                closeable: true,
                timer: null
            }
        });
        const activeShowcase = ref()

        const startTimer = () => {
            demoContents[activeShowcase.value].timer = 4000
        }

        const reviveMessageStatus = ref({});
        const revive = (alert) => {
            setTimeout(() => {
                reviveMessageStatus.value[alert.design] = true
            }, 1000)

            setTimeout(() => {
                alert.id++
                alert.timer = null
                reviveMessageStatus.value[alert.design] = false
            }, 4000)
        }

        /* Demo */
        const demoContent = samples;
        const showcaseTabs = [
            { id: 'js', label: 'JS', type: 'code', codeLang: 'javascript' },
            { id: 'template', label: 'Template', type: 'code', codeLang: 'html' },
            { id: 'props', label: 'Props' },
            {
                id: 'timer', label: tm('activateTimer'), command: () => startTimer()
            }
        ];

        return {
            activeShowcase,
            revive,
            reviveMessageStatus,
            demoContent,
            showcaseTabs,
            demoContents,
            t, tm,
        };
    }
});
</script>

<style scoped>
.pulse {
    animation: pulse 1000ms ease-in-out infinite;
}
@keyframes pulse {
    0% {
        opacity: 0.5;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0.5;
    }
}
</style>
