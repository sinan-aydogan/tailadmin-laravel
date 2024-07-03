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
                            :timer-status="content.timerStatus"
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
                        <template #js>{{ docSamples[content.design].js }}</template>
                        <template #template>{{ docSamples[content.design].template }}</template>
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
import { Head } from "@inertiajs/vue3";

/*Component*/
import AppLayout from "@/Layouts/AppLayout.vue";
import GridSection from "@/Layouts/GridSection.vue";
import TAlert from "@/Components/Alert/TAlert.vue";
import TAvatar from "@/Components/Avatar/TAvatar.vue";
import TCodeShowcase from '@/Components/Code/TCodeShowcase.vue'

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
                    reviveMessage: 'Don\'t worry, it\'ll come back in 4 seconds',
                    docDefault: 'Default Value',
                    docDescription: 'Description',
                    docType: 'Value Type',
                    docIdDesc: 'It is unique id for your alert. You set it to different value for each alert.',
                    docDesignDesc: 'The theme of the alert component.',
                    docColorDesc: 'The color of the alert component. Important: If you use the gradient design, you can not default color options. If you use the gradient design, your color options are rose, sky, fuchsia, violet, cloud, turquoise, caterpillar, dream and biscuit',
                    docRadiusDesc: 'It shapes the corners of the alert.',
                    docTitleDesc: 'If you would like to display a title using the alert component, pass/set any value through this prop.',
                    docCloseableDesc: 'If you would like to make your alert component closeable, you can use this prop.',
                    docTimerStatusDesc: 'If you would like to make your alert component to close automatically, you can set this prop.',
                    docTimerDesc: 'If you set prop of the timer-status to true, You should set the timer by milliseconds',
                    docTypeDesc: 'If you don not want to deal with design and color, you can use this prop beacause it sets automatically design and color values to your choose.',
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
                    reviveMessage: 'Endişelenme 4 saniye sonra geri gelecek',
                    docDefault: 'Varsayılan Değer',
                    docDescription: 'Detay',
                    docType: 'Değer Türü',
                    docIdDesc: 'Her uyarı kutusu için benzersiz olması gereken değer. Her uyarı için benzersiz olacak şekilde ayarlamalısın.',
                    docDesignDesc: 'Uyarı kutusunun genel görünümünü belirler.',
                    docColorDesc: 'Uyarı kutusunun rengini belirlemenize yarar. Eğer gradient tasarımı kullanıyorsanız lütfen default renkler yerine bu renklerden birini kullanınız: rose, sky, fuchsia, violet, cloud, turquoise, caterpillar, dream ve biscuit',
                    docRadiusDesc: 'Uyarı kutusunun köşelerinin ovalliğini kontrol etmenizi sağlar.',
                    docTitleDesc: 'Uyarı kutusu içinde istediğiniz başlığı gösterebilmenizi sağlar.',
                    docCloseableDesc: 'Uyarı kutusuna gizleme düğmesi eklemenizi sağlar.',
                    docTimerStatusDesc: 'Uyarı kutusunun belirlediğiniz zaman sonunda kapanmasını sağlar.',
                    docTimerDesc: 'Otomatik kapanma süresini belirlemenizi sağlar, timer-status probunun true olarak tanımlanmış olması gereklidir.',
                    docTypeDesc: 'Tasarım ve renk ile uğraşmadan direk başarılı(success-yeşil) veya dikkat(danger-kırmızı) hissiyatı yaratacak hazır tasarımları kullanmanızı sağlar. Type değerini verdiğinizde design ve color değeri girmeniz gerekmez. ',
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
                timerStatus: false
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
                timerStatus: false
            },
            "inline": {
                id: 1,
                design: "inline",
                content: "inlineContent",
                color: "warning",
                radius: 3,
                icon: "ban",
                timerStatus: false
            },
            "outline": {
                id: 1,
                design: "outline",
                content: "outlineContent",
                color: "info",
                radius: 2,
                icon: "retweet",
                timerStatus: false
            },
            "gradient": {
                id: 1,
                design: "gradient",
                content: "gradientContent",
                color: "dream",
                radius: 3,
                media: true,
                closeable: true,
                timerStatus: false
            },
            "elegant": {
                id: 1,
                design: "elegant",
                content: "elegantContent",
                color: "violet",
                radius: 8,
                title: "elegantTitle",
                closeable: true,
                timerStatus: false
            },
            "block": {
                id: 1,
                design: "block",
                content: "blockContent",
                color: "info",
                radius: 1,
                icon: "info",
                closeable: true,
                timerStatus: false
            }
        });
        const activeShowcase = ref()
        const startTimer = () => {
            demoContents[activeShowcase.value].timerStatus = true
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

        /* Documentation */
        /* Props Definitions */
        const docProps = {
            headers: [
                { id: 'prop', label: 'Prop' },
                { id: 'type', label: tm('docType') },
                { id: 'options', label: 'Options', colorfulBg: true },
                { id: 'default', label: tm('docDefault') },
                { id: 'description', label: tm('docDescription') },

            ],
            content: [
                {
                    id: 'id',
                    prop: 'id',
                    type: 'String, Number, Array, Object and Date',
                    default: 'unique',
                    description: tm('docIdDesc'),
                },
                {
                    id: 'design',
                    prop: 'design',
                    type: 'String',
                    options: ['filled', 'light', 'inline', 'outline', 'gradient', 'elegant', 'block'],
                    default: 'filled',
                    description: tm('docDesignDesc')
                },
                {
                    id: 'color',
                    prop: 'color',
                    type: 'String',
                    options: ['success', 'danger', 'warning', 'info', 'purple', 'light', 'dark'],
                    default: 'light',
                    description: tm('docColorDesc')
                },
                {
                    id: 'radius',
                    prop: 'radius',
                    type: 'Number',
                    options: ['0', '1', '2', '3', '4', '5', '6', '7', '8'],
                    default: '3',
                    description: tm('docRadiusDesc')
                },
                {
                    id: 'title',
                    prop: 'title',
                    type: 'String',
                    description: tm('docTitleDesc')
                },
                {
                    id: 'closeable',
                    prop: 'closeable',
                    type: 'Boolean',
                    options: ['true', 'false'],
                    default: 'false',
                    description: tm('docCloseableDesc')
                },
                {
                    id: 'timer-status',
                    prop: 'timer-status',
                    type: 'Boolean',
                    description: tm('docTimerStatusDesc')
                },
                {
                    id: 'timer',
                    prop: 'timer',
                    type: 'Number',
                    description: tm('docTimerDesc')
                },
                {
                    id: 'type',
                    prop: 'type',
                    type: 'String',
                    options: ['success', 'danger', 'warning', 'info'],
                    description: tm('docTypeDesc')
                },
            ]
        };

        /* Sample Codes */
        const docSamples = {
            filled: {
                js: '/* FontAwesomeIcon Import */\n'+
                    'import { library } from "@fortawesome/fontawesome-svg-core";\n'+
                    'import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";\n'+
                    'library.add( faCheckCircle )\n\n/* Alert Component Import */\n'+
                    'import TAlert from \'@/Components/Alert/TAlert.vue\'\n'+
                    '\n' +
                    'export default {\n'+
                    '    components: { TAlert },\n'+
                    '    setup() {\n'+
                    '    },\n' +
                    '}',
                template: '<t-alert\n' +
                    '    id="success"\n' +
                    '    design="filled"\n' +
                    '    color="success"\n' +
                    '    title="Success"\n' +
                    '    :radius=1\n' +
                    '    :closeable="true"\n' +
                    '    >\n' +
                    '    <template #icon>\n' +
                    '        <icon icon="check-circle" size="lg" />\n' +
                    '    </template>\n' +
                    '    The post added successfully (filled)\n' +
                    '</t-alert>',
            },
            light: {
                js: '/* FontAwesomeIcon Import */\n' +
                    'import { library } from "@fortawesome/fontawesome-svg-core";\n' +
                    'import { faTrash } from "@fortawesome/free-solid-svg-icons";\n' +
                    'library.add( faTrash  )\n' +
                    '\n' +
                    '/* Alert Component Import */\n' +
                    'import TAlert from \'@/Components/Alert/TAlert.vue\'\n' +
                    '\n' +
                    'export default {\n' +
                    '    components: { TAlert },\n' +
                    '    setup() {\n' +
                    '    },\n' +
                    '}',
                template: '<t-alert\n' +
                    '    id="danger"\n' +
                    '    design="light"\n' +
                    '    color="danger"\n' +
                    '    title="Danger"\n' +
                    '    :closeable="true"\n' +
                    '    >\n' +
                    '    <template #icon>\n' +
                    '        <icon icon="trash" size="lg" />\n' +
                    '    </template>\n' +
                    '    The user deleted successfully (light)\n' +
                    '</t-alert>',
            },
            inline: {
                js: '/* FontAwesomeIcon Import */\n' +
                    'import { library } from "@fortawesome/fontawesome-svg-core";\n' +
                    'import { faBan } from "@fortawesome/free-solid-svg-icons";\n' +
                    'library.add( faBan )\n' +
                    '\n' +
                    '/* Alert Component Import */\n' +
                    'import TAlert from \'@/Components/Alert/TAlert.vue\'\n' +
                    '\n' +
                    'export default {\n' +
                    '    components: { TAlert },\n' +
                    '    setup() {\n' +
                    '    },\n' +
                    '}',
                template: '<t-alert\n' +
                    '    id="blocked"\n' +
                    '    design="inline"\n' +
                    '    color="warning"\n' +
                    '    :closeable="false"\n    >\n' +
                    '    <template #icon>\n' +
                    '        <icon icon="ban" size="lg" />\n' +
                    '    </template>\n' +
                    '    The user deleted successfully (light)\n' +
                    '</t-alert>',
            },
            outline: {
                js: '/* FontAwesomeIcon Import */\n' +
                    'import { library } from "@fortawesome/fontawesome-svg-core";\n' +
                    'import { faRetweet } from "@fortawesome/free-solid-svg-icons";\n' +
                    'library.add( faRetweet )\n' +
                    '\n' +
                    '/* Alert Component Import */\n' +
                    'import TAlert from \'@/Components/Alert/TAlert.vue\'\n' +
                    '\n' +
                    'export default {\n' +
                    '    components: { TAlert },\n' +
                    '    setup() {\n' +
                    '    },\n' +
                    '}',
                template: '<t-alert\n' +
                    '    id="updateSettings"\n' +
                    '    design="outline"\n' +
                    '    color="info"\n' +
                    '    :closeable="false"\n' +
                    '    >\n' +
                    '    <template #icon>\n' +
                    '        <icon icon="retweet" size="lg" />\n' +
                    '    </template>\n' +
                    '    You entered a new configuration, the settings will refresh 24hr after (outline)\n' +
                    '</t-alert>',
            },
            gradient: {
                js: '/* Alert Component Import */\n' +
                    'import TAlert from \'@/Components/Alert/TAlert.vue\'\n' +
                    '\n' +
                    '/* Avatar Component Import */\n' +
                    'import TAvatar from "@/Components/Avatar/TAvatar.vue";\n' +
                    '\n' +
                    'export default {\n' +
                    '    components: {\n' +
                    '        TAlert,\n' +
                    '        TAvatar\n' +
                    '    },\n' +
                    '    setup() {\n' +
                    '    },\n' +
                    '}',
                template: '<t-alert\n' +
                    '    id="createSuccess"\n' +
                    '    design="gradient"\n' +
                    '    color="dream"\n' +
                    '    :closeable="true"\n' +
                    '    >\n' +
                    '    <t-avatar\n' +
                    '        :radius="8"\n' +
                    '        :size="3"\n' +
                    '        src="https://i.pravatar.cc/300"\n' +
                    '        />\n' +
                    '    The new user is successfully added.<br>\n' +
                    '    User: Hamdi KAYA (gradient)\n' +
                    '</t-alert>',
            },
            elegant: {
                js: '/* Alert Component Import */\n' +
                    'import TAlert from \'@/Components/Alert/TAlert.vue\'\n' +
                    '\nexport default {\n' +
                    '    components: { TAlert },\n' +
                    '    setup() {\n' +
                    '    },\n' +
                    '}',
                template: '<t-alert\n' +
                    '    id="overwrite"\n' +
                    '    design="elegant"\n' +
                    '    color="violet"\n' +
                    '    title="Attention"\n' +
                    '    :closeable="true"\n' +
                    '    :radius=8\n' +
                    '    >\n' +
                    '    The all of changes overwrite to themself (elegant)\n' +
                    '</t-alert>',
            },
            block: {
                js: '/* FontAwesomeIcon Import */\n' +
                    'import { library } from "@fortawesome/fontawesome-svg-core";\n' +
                    'import { faInfo } from "@fortawesome/free-solid-svg-icons";\nlibrary.add( faInfo )\n' +
                    '\n' +
                    '/* Alert Component Import */\n' +
                    'import TAlert from \'@/Components/Alert/TAlert.vue\'\n' +
                    '\n' +
                    'export default {\n' +
                    '    components: { TAlert },\n' +
                    '    setup() {\n' +
                    '    },\n' +
                    '}',
                template: '<t-alert\n' +
                    '    id="blocked"\n' +
                    '    design="block"\n' +
                    '    color="info"\n' +
                    '    :closeable="true"\n' +
                    '    >\n' +
                    '    <template #icon>\n' +
                    '        <icon icon="info" size="lg" />\n' +
                    '    </template>\n' +
                    '    Please, check your task list (block)\n' +
                    '</t-alert>',
            }
        };
        const showcaseTabs = [
            { id: 'js', label: 'JS', type: 'code', codeLang: 'javascript' },
            { id: 'template', label: 'Template', type: 'code', codeLang: 'html' },
            { id: 'props', label: 'Props', type: 'table', table: docProps },
            {
                id: 'timer', label: tm('activateTimer'), command: () => startTimer()
            }
        ];

        return {
            activeShowcase,
            revive,
            reviveMessageStatus,
            showcaseTabs,
            demoContents,
            docSamples,
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
