<template>
    <Head title="Alerts" />
    <app-layout>
        <template #header>{{ tm('pageTitle') }}</template>
        <template #subHeader>{{ tm('pageSubTitle') }}</template>
        <template #action-buttons>
            <t-button @click="addAlertBox">
                <icon icon="play" />
                <span v-text="tm('activateTimer')" />
            </t-button>
        </template>
        <template #default>
            <grid-section :col="1" :gap="4">
                <template v-for="(content,key) in demoContents" :key="key+newAlertID">
                    <t-alert
                        :id="key + newAlertID"
                        :design="content.design"
                        :color="content.color"
                        :radius="content.radius"
                        :title="content.title ? tm(content.title) : null"
                        :closeable="content.closeable"
                        :timer="content.timer"
                        @destroy="$event === key + newAlertID ? active = false : active = true"
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
                </template>
            </grid-section>
        </template>
    </app-layout>
</template>

<script>
/*Main Functions*/
import { defineComponent, ref, computed } from "vue";
import { Head } from "@inertiajs/inertia-vue3";

/*Component*/
import AppLayout from "@/Layouts/AppLayout";
import GridSection from "@/Layouts/GridSection";
import TAlert from "@/Components/Alert/TAlert";
import TButton from "@/Components/Button/TButton";
import TAvatar from "@/Components/Avatar/TAvatar";

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
        TButton,
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
                    activateTimer: 'Activate Timer to Close'
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
                    activateTimer: 'Kapatma Zamanlayıcısını Çalıştır'
                },
            },
        });

        const dynamicTimer = computed(() => {
            return active.value ? 5000 : null
        })

        /* Demo Contents */
        const demoContents = ref({
            "success": {
                design: "filled",
                content: "filledContent",
                color: "success",
                closeable: true,
                radius: 3,
                icon: "check-circle",
                title: "filledTitle",
                timer: dynamicTimer
            },
            "danger": {
                design: "light",
                content: "lightContent",
                color: "dark",
                radius: 3,
                icon: "trash",
                title: "lightTitle",
                closeable: true,
                timer: dynamicTimer
            },
            "warning": {
                design: "inline",
                content: "inlineContent",
                color: "warning",
                radius: 3,
                icon: "ban",
                timer: dynamicTimer
            },
            "info": {
                design: "outline",
                content: "outlineContent",
                color: "info",
                radius: 2,
                icon: "retweet",
                timer: dynamicTimer
            },
            "gradient": {
                design: "gradient",
                content: "gradientContent",
                color: "dream",
                radius: 3,
                media: true,
                closeable: true,
                timer: dynamicTimer
            },
            "elegant": {
                design: "elegant",
                content: "elegantContent",
                color: "violet",
                radius: 3,
                title: "elegantTitle",
                closeable: true,
                timer: dynamicTimer
            },
            "block": {
                design: "block",
                content: "blockContent",
                color: "danger",
                radius: 1,
                icon: "info",
                closeable: true,
                timer: dynamicTimer
            }
        });
        const demoDesigns = ["filled", "light", "gradient", "inline", "outline", "elegant", "block"];
        const active = ref(false)
        const newAlertID = ref(1)
        const selectedColor = ref('red')
        const colors = ["red", "blue", "green", "yellow", "indigo", "pink", "purple", "gray", "black", "white"]



        const addAlertBox = () => {
            if (active.value === false) {
                active.value = true;
                setTimeout(() => {
                    newAlertID.value++
                }, 6000)
            }
        }

        return {
            active,
            newAlertID,
            selectedColor,
            colors,
            demoContents,
            demoDesigns,
            addAlertBox,
            t, tm,
        };
    }
});
</script>
