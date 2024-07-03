<template>
    <app-layout :title="tm('pageTitle')">
        <template #header>
            {{tm('pageTitle')}}
        </template>
        <template #subHeader>
            {{tm('pageSubTitle')}}
        </template>
        <template #default>
            <grid-section :col-phone="1" :col-desktop="2">

                <!--Simple Avatar-->
                <t-code-showcase
                    :tabs="showcaseTabs"
                >
                    <div class="flex flex-wrap gap-4 bg-slate-400/50 dark:bg-slate-800 rounded p-4">
                        <t-avatar :radius="0" src="https://i.pravatar.cc/300?img=0"/>
                        <t-avatar
                            v-for="i in 8"
                            :key="i"
                            :radius="i"
                            :src="'https://i.pravatar.cc/300?img='+i"
                        />
                    </div>
                     <template #js>{{ docSamples.simple.js }}</template>
                        <template #template>{{ docSamples.simple.template }}</template>
                </t-code-showcase>


                <!--Avatar Group-->
                <t-code-showcase
                    :tabs="showcaseTabs"
                >
                    <div class="flex flex-wrap gap-4 bg-slate-400/50 dark:bg-slate-800 rounded p-4">
                        <t-avatar-group>
                            <t-avatar
                                v-for="i in 8"
                                :key="i"
                                :radius="8"
                                :src="'https://i.pravatar.cc/300?img='+i"
                            />
                        </t-avatar-group>
                    </div>
                     <template #js>{{ docSamples.group.js }}</template>
                        <template #template>{{ docSamples.group.template }}</template>
                </t-code-showcase>

                <!--Different Sizes-->
                <t-code-showcase
                    :tabs="showcaseTabs"
                >
                    <div class="flex flex-wrap place-items-end gap-4 bg-slate-400/50 dark:bg-slate-800 rounded p-4">
                        <t-avatar
                            v-for="i in 8"
                            :key="i"
                            :radius="3"
                            :size="9-i"
                            :src="'https://i.pravatar.cc/300?img='+i"
                        />
                    </div>
                     <template #js>{{ docSamples.size.js }}</template>
                        <template #template>{{ docSamples.size.template }}</template>
                </t-code-showcase>


                <!--Avatar Indicators-->
                <t-code-showcase
                    :tabs="showcaseTabs"
                >
                    <div class="flex flex-wrap place-items-end gap-4 bg-slate-400/50 dark:bg-slate-800 rounded p-4">

                        <t-avatar
                            :indicator="{
                            color: 'pink',
                            label: 2,
                            position: 'rb'
                        }"
                            :radius="8"
                            :size="8"
                            src="https://i.pravatar.cc/300?img=8"
                        />

                        <t-avatar
                            :indicator="{
                            color: 'light',
                            label: 12,
                            position: 'lb'
                        }"
                            :radius="7"
                            :size="7"
                            src="https://i.pravatar.cc/300?img=5"
                        />

                        <t-avatar
                            :indicator="{
                            color: 'danger',
                            label: 85,
                            position: 'rt'
                        }"
                            :radius="6"
                            :size="6"
                            src="https://i.pravatar.cc/300?img=4"
                        />

                        <t-avatar
                            :indicator="{
                            color: 'purple',
                            label: 7,
                            position: 'rt'
                        }"
                            :radius="5"
                            :size="5"
                            src="https://i.pravatar.cc/300?img=3"
                        />

                        <t-avatar
                            :indicator="{
                            color: 'warning',
                            label: 14,
                            position: 'lb'
                        }"
                            :radius="4"
                            :size="4"
                            src="https://i.pravatar.cc/300?img=2"
                        />
                        <t-avatar
                            :indicator="{
                            color: 'success',
                            position: 'rb'
                        }"
                            :radius="3"
                            :size="3"
                            src="https://i.pravatar.cc/300?img=1"
                        />
                        <t-avatar
                            :indicator="{
                            color: 'info',
                            label: 2,
                            position: 'lt'
                        }"
                            :radius="2"
                            :size="2"
                            src="https://i.pravatar.cc/300?img=0"
                        />
                        <t-avatar
                            :indicator="{
                                color: 'danger',
                                label: 2,
                                position: 'lb'
                            }"
                            :radius="1"
                            :size="1"
                        />

                    </div>
                     <template #js>{{ docSamples.indicator.js }}</template>
                        <template #template>{{ docSamples.indicator.template }}</template>
                </t-code-showcase>
            </grid-section>
        </template>
    </app-layout>
</template>

<script>
/*Main Functions*/
import {defineComponent} from "vue";

/*Component*/
import AppLayout from "@/Layouts/AppLayout.vue";
import GridSection from "@/Layouts/GridSection.vue";
import TAvatar from "@/Components/Avatar/TAvatar.vue";
import TAvatarGroup from "@/Components/Avatar/TAvatarGroup.vue";
import TCodeShowcase from "@/Components/Code/TCodeShowcase.vue";
import {useI18n} from "vue-i18n/dist/vue-i18n.esm-bundler";

export default defineComponent({
    name: "Avatar",
    components: {
        AppLayout,
        GridSection,
        TAvatar,
        TAvatarGroup,
        TCodeShowcase
    },
    setup(){
        /* Multi-language */
        const { tm } = useI18n({
            inheritLocale: true,
            messages: {
                en: {
                    pageTitle: 'Avatar',
                    pageSubTitle: 'User avatars and team members avatar group',
                    docDefault: 'Default Value',
                    docDescription: 'Description',
                    docType: 'Value Type',
                    docOptions: 'Options',
                    docSrcDesc: 'The path of the photo.',
                    docSizeDesc: 'The size of the photo.',
                    docRadiusDesc: 'It shapes the corners of the avatar.',
                    docIndicatorDesc: 'It works to show a indicator point near the avatar. You should define the values of the options in this object. Sample: :indicator="{ color: \'success\', label: 2, position: \'lb\' }" ',
                    docLinkDesc: 'When the user clicks on the avatar, it directs them to the link you want." ',
                },
                tr: {
                    pageTitle: 'Profil Resmi',
                    pageSubTitle: 'Profil resmi ve ekip üyeleri resimlerinin gösterimi',
                    docDefault: 'Varsayılan Değer',
                    docDescription: 'Detay',
                    docType: 'Değer Türü',
                    docOptions: 'Alabileceği Değerler',
                    docSrcDesc: 'Profil fotoğrafının adresi.',
                    docSizeDesc: 'Profil fotoğrafının büyüklüğü.',
                    docRadiusDesc: 'Profil resminin köşelerinin ovalliğini kontrol etmenizi sağlar.',
                    docIndicatorDesc: 'Profil resminin kenarında bildirim simgesi göstermenizi sağlar. Alabileceği değerler listesindeki değerleri bu obje içinde tanımlamanız gereklidir. Örnek: :indicator="{ color: \'success\', label: 2, position: \'lb\' }"',
                    docLinkDesc: 'Kullanıcının profil resmini tıkladığında istediğin linke yönlenmesini sağlar."',
                },
            },
        });

        /* Documentation */
        /* Props Definitions */
        const docProps = {
            headers: [
                { id: 'prop', label: 'Prop' },
                { id: 'type', label: tm('docType') },
                { id: 'options', label: tm('docOptions'), colorfulBg: true },
                { id: 'default', label: tm('docDefault') },
                { id: 'description', label: tm('docDescription') },

            ],
            content: [
                {
                    id: 'src',
                    prop: 'src',
                    type: 'String',
                    description: tm('docSrcDesc')
                },
                {
                    id: 'size',
                    prop: 'size',
                    type: 'Number',
                    options: ['1', '2', '3', '4', '5', '6', '7', '8'],
                    default: '3',
                    description: tm('docSizeDesc')
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
                    id: 'indicator',
                    prop: 'indicator',
                    type: 'Object',
                    options: ['color (success, danger, info, warning, purple, light)', 'label (String)', 'position (lb, rb, lt, rt)'],
                    description: tm('docIndicatorDesc')
                },
                {
                    id: 'link',
                    prop: 'link',
                    type: 'String',
                    description: tm('docLinkDesc')
                },
            ]
        };

        /* Sample Codes */
        const docSamples = {
            simple: {
                js: 'import TAvatar from \'@/Components/Alert/TAvatar.vue\'\n'+
                    '\n' +
                    'export default {\n'+
                    '    components: { TAvatar },\n'+
                    '    setup() {\n'+
                    '    },\n' +
                    '}',
                template: '<t-avatar\n' +
                    '    :radius="3"\n' +
                    '    src="https://i.pravatar.cc/300?img=0"\n' +
                    '    >\n' +
                    '</t-avatar>',
            },
            group: {
                js: 'import TAvatar from \'@/Components/Alert/TAvatar.vue\'\n' +
                    'import TAvatarGroup from \'@/Components/Alert/TAvatarGroup.vue\'\n'+
                    '\n' +
                    'export default {\n'+
                    '    components: { TAvatar, TAvatarGroup },\n'+
                    '    setup() {\n'+
                    '    },\n' +
                    '}',
                template: '<t-avatar-group>\n\n' +
                    '    <t-avatar\n' +
                    '        :radius="8"\n' +
                    '        src="https://i.pravatar.cc/300?img=0"\n' +
                    '        link="https://test.com"\n' +
                    '        >\n' +
                    '    </t-avatar>\n\n' +
                    '    <t-avatar\n' +
                    '        :radius="8"\n' +
                    '        src="https://i.pravatar.cc/300?img=2"\n' +
                    '        :link="route(\'profile\')"\n' +
                    '        >\n' +
                    '    </t-avatar>\n\n' +
                    '</t-avatar-group>',
            },
            size: {
                js: 'import TAvatar from \'@/Components/Alert/TAvatar.vue\'\n'+
                    '\n' +
                    'export default {\n'+
                    '    components: { TAvatar },\n'+
                    '    setup() {\n'+
                    '    },\n' +
                    '}',
                template: '<t-avatar\n' +
                    '    :size="5"\n' +
                    '    src="https://i.pravatar.cc/300?img=0"\n' +
                    '    >\n' +
                    '</t-avatar>',
            },
            indicator: {
                js: 'import TAvatar from \'@/Components/Alert/TAvatar.vue\'\n'+
                    '\n' +
                    'export default {\n'+
                    '    components: { TAvatar },\n'+
                    '    setup() {\n'+
                    '    },\n' +
                    '}',
                template: '<t-avatar\n' +
                    '    :radius="3"\n' +
                    '    src="https://i.pravatar.cc/300?img=0"\n' +
                    '    :indicator="{\n' +
                    '            color: \'success\',\n' +
                    '            label: 7,\n' +
                    '            position: \'rt\'\n' +
                    '        }"\n' +
                    '    >\n' +
                    '</t-avatar>',
            }
        };
        const showcaseTabs = [
            { id: 'js', label: 'JS', type: 'code', codeLang: 'javascript' },
            { id: 'template', label: 'Template', type: 'code', codeLang: 'html' },
            { id: 'props', label: 'Props', type: 'table', table: docProps },
        ];

        return {tm, docSamples, docProps,showcaseTabs}
    }
});
</script>
