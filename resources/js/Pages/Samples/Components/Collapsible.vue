<template>
    <app-layout title="Collapsible Content">
        <template #header>
            Collapsible Content
        </template>
        <template #subHeader>
            Same color or different colors, collapsible or accordion
        </template>
        <template #default>
            <div class="flex flex-wrap">
                <grid-section :col-laptop="3" :col-tablet="2">
                    <!--Filled-->
                    <t-content-card>
                        <template #title>
                            Filled
                        </template>
                        <template #subTitle>
                            Click + Chevron + Collapsible + Align
                        </template>
                        <t-collapsible
                            v-model="collapsibleActive"
                            :accordion="false"
                            opening-type="click"
                            trigger-type="chevron"
                            design="filled"
                            :radius="3"
                            color="indigo"
                            :separated="false"
                        >
                            <t-collapsible-item
                                @active="collapsibleActive = $event"
                                item-key="TailAdmin"
                                color="red"
                            >
                                <template #title>
                                    <t-logo class="w-5 h-5 mr-2"/>
                                    TailAdmin
                                </template>
                                <template #content>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula
                                    imperdiet.
                                </template>
                            </t-collapsible-item>
                            <t-collapsible-item
                                @active="collapsibleActive = $event"
                                item-key="LaraQuality"
                                color="blue"
                                trigger-align="left"
                                title-align="right"
                            >
                                <template #title>
                                    <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:osb="http://www.openswatchbook.org/uri/2009/osb" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" fill="currentColor" version="1.1" viewBox="0 0 215 215" stroke="none">
                                        <path transform="matrix(1.28 0 0 1.28 13.057 10.462)" d="m121.65 15.95-11.2 11.2q-5.9-4.75-12.8-7.3-5.7-2.35-10.05-3.15v-16.7h-22.8v16.35l-6.9 1.75q-8.1 2.55-16.15 7.5l-11.6-11.65-15.95 15.75 11.8 11.65q-6.1 8.85-8.85 19.65l-0.8 4.55h-16.35v21.65h16.75l2.15 7.45q2.35 7.9 7.3 14.4l-12 11.6 15.35 15.35 12-11.8 6.5 3.95q8.85 4.3 16.75 5.7v16.15h22.8v-16.55q8.05-1.8 15.75-5.7l5.55-3.35 11.4 11.4 16.15-16.15-11.25-11.4q5.1-7.85 7.5-16.9l1.2-4.15h16.1v-21.65h-15.75q-1.55-8.5-4.5-15.35l-3.55-5.9 12-12.05-16.55-16.3m-7.65 58.85q-0.05 15.9-11.25 27.55-11.6 11-27.55 11-16.15 0-27.55-11.4-11.2-10.85-11.2-27.15 0-15.95 11.2-27.55 11.8-11.25 27.55-11.25 15.75 0 27.55 11.25 11.2 11.8 11.25 27.55" stroke-linecap="square" stroke-width="1"/>
                                        <path transform="matrix(.34872 0 0 .34872 83.818 78.7)" d="m144.75 65.137-94.088 94.088-50.662-50.663v-65.138l50.662 50.663 94.088-94.088v65.137" stroke-linecap="square" stroke-width="6"/>
                                    </svg>
                                    LaraQuality
                                </template>
                                <template #content>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula
                                    imperdiet.
                                </template>
                            </t-collapsible-item>
                            <t-collapsible-item
                                @active="collapsibleActive = $event"
                                item-key="LaraCoin"
                                color="indigo"
                                title-align="right"
                            >
                                <template #title>
                                    <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    LaraCoin
                                </template>
                                <template #content>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula
                                    imperdiet.
                                </template>
                            </t-collapsible-item>
                        </t-collapsible>
                    </t-content-card>
                    <!--Light-->
                    <t-content-card>
                        <template #title>
                            Light
                        </template>
                        <template #subTitle>
                            Hover + Separated + Cross + Accordion
                        </template>
                        <t-collapsible
                            v-model="collapsibleActive2"
                            :accordion="true"
                            opening-type="hover"
                            trigger-type="cross"
                            design="light"
                            :radius="0"
                            :separated="true"
                        >
                            <t-collapsible-item
                                @active="collapsibleActive2 = $event"
                                item-key="TailAdmin"
                                color="red"
                            >
                                <template #title>
                                    <t-logo class="w-5 h-5 mr-2"/>
                                    TailAdmin
                                </template>
                                <template #content>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula
                                    imperdiet.
                                </template>
                            </t-collapsible-item>
                            <t-collapsible-item
                                @active="collapsibleActive2 = $event"
                                item-key="LaraQuality"
                                color="blue"
                            >
                                <template #title>
                                    <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:osb="http://www.openswatchbook.org/uri/2009/osb" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" fill="currentColor" version="1.1" viewBox="0 0 215 215" stroke="none">
                                        <path transform="matrix(1.28 0 0 1.28 13.057 10.462)" d="m121.65 15.95-11.2 11.2q-5.9-4.75-12.8-7.3-5.7-2.35-10.05-3.15v-16.7h-22.8v16.35l-6.9 1.75q-8.1 2.55-16.15 7.5l-11.6-11.65-15.95 15.75 11.8 11.65q-6.1 8.85-8.85 19.65l-0.8 4.55h-16.35v21.65h16.75l2.15 7.45q2.35 7.9 7.3 14.4l-12 11.6 15.35 15.35 12-11.8 6.5 3.95q8.85 4.3 16.75 5.7v16.15h22.8v-16.55q8.05-1.8 15.75-5.7l5.55-3.35 11.4 11.4 16.15-16.15-11.25-11.4q5.1-7.85 7.5-16.9l1.2-4.15h16.1v-21.65h-15.75q-1.55-8.5-4.5-15.35l-3.55-5.9 12-12.05-16.55-16.3m-7.65 58.85q-0.05 15.9-11.25 27.55-11.6 11-27.55 11-16.15 0-27.55-11.4-11.2-10.85-11.2-27.15 0-15.95 11.2-27.55 11.8-11.25 27.55-11.25 15.75 0 27.55 11.25 11.2 11.8 11.25 27.55" stroke-linecap="square" stroke-width="1"/>
                                        <path transform="matrix(.34872 0 0 .34872 83.818 78.7)" d="m144.75 65.137-94.088 94.088-50.662-50.663v-65.138l50.662 50.663 94.088-94.088v65.137" stroke-linecap="square" stroke-width="6"/>
                                    </svg>
                                    LaraQuality
                                </template>
                                <template #content>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula
                                    imperdiet.
                                </template>
                            </t-collapsible-item>
                            <t-collapsible-item
                                @active="collapsibleActive2 = $event"
                                item-key="LaraCoin"
                                color="indigo"
                            >
                                <template #title>
                                    <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    LaraCoin
                                </template>
                                <template #content>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula
                                    imperdiet.
                                </template>
                            </t-collapsible-item>
                        </t-collapsible>
                    </t-content-card>
                    <!--Inline-->
                    <t-content-card>
                        <template #title>
                            Inline
                        </template>
                        <template #subTitle>
                            Hover + Separated + Cross + Accordion
                        </template>
                        <t-collapsible
                            v-model="collapsibleActive3"
                            :accordion="true"
                            opening-type="hover"
                            trigger-type="cross"
                            design="inline"
                            :radius="0"
                            :separated="false"
                        >
                            <t-collapsible-item
                                @active="collapsibleActive3 = $event"
                                item-key="TailAdmin"
                                color="red"
                            >
                                <template #title>
                                    <t-logo class="w-5 h-5 mr-2"/>
                                    TailAdmin
                                </template>
                                <template #content>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula
                                    imperdiet.
                                </template>
                            </t-collapsible-item>
                            <t-collapsible-item
                                @active="collapsibleActive3 = $event"
                                item-key="LaraQuality"
                                color="blue"
                            >
                                <template #title>
                                    <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:osb="http://www.openswatchbook.org/uri/2009/osb" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" fill="currentColor" version="1.1" viewBox="0 0 215 215" stroke="none">
                                        <path transform="matrix(1.28 0 0 1.28 13.057 10.462)" d="m121.65 15.95-11.2 11.2q-5.9-4.75-12.8-7.3-5.7-2.35-10.05-3.15v-16.7h-22.8v16.35l-6.9 1.75q-8.1 2.55-16.15 7.5l-11.6-11.65-15.95 15.75 11.8 11.65q-6.1 8.85-8.85 19.65l-0.8 4.55h-16.35v21.65h16.75l2.15 7.45q2.35 7.9 7.3 14.4l-12 11.6 15.35 15.35 12-11.8 6.5 3.95q8.85 4.3 16.75 5.7v16.15h22.8v-16.55q8.05-1.8 15.75-5.7l5.55-3.35 11.4 11.4 16.15-16.15-11.25-11.4q5.1-7.85 7.5-16.9l1.2-4.15h16.1v-21.65h-15.75q-1.55-8.5-4.5-15.35l-3.55-5.9 12-12.05-16.55-16.3m-7.65 58.85q-0.05 15.9-11.25 27.55-11.6 11-27.55 11-16.15 0-27.55-11.4-11.2-10.85-11.2-27.15 0-15.95 11.2-27.55 11.8-11.25 27.55-11.25 15.75 0 27.55 11.25 11.2 11.8 11.25 27.55" stroke-linecap="square" stroke-width="1"/>
                                        <path transform="matrix(.34872 0 0 .34872 83.818 78.7)" d="m144.75 65.137-94.088 94.088-50.662-50.663v-65.138l50.662 50.663 94.088-94.088v65.137" stroke-linecap="square" stroke-width="6"/>
                                    </svg>
                                    LaraQuality
                                </template>
                                <template #content>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula
                                    imperdiet.
                                </template>
                            </t-collapsible-item>
                            <t-collapsible-item
                                @active="collapsibleActive3 = $event"
                                item-key="LaraCoin"
                                color="indigo"
                            >
                                <template #title>
                                    <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    LaraCoin
                                </template>
                                <template #content>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue vehicula
                                    imperdiet.
                                </template>
                            </t-collapsible-item>
                        </t-collapsible>
                    </t-content-card>
                </grid-section>
            </div>
            <!--Sample Codes-->
            <ssh-pre :copy-button="true" label="Code" language="html">{{ sampleCode.html }}</ssh-pre>
            <ssh-pre :copy-button="true" label="JS" language="js">{{ sampleCode.js }}</ssh-pre>
            <!--Variables Table-->
            <t-table
                :content="sampleCode.table.content"
                :header="sampleCode.table.header"
                :searchable="['variable','details']"
                class="mt-5"
                color="solid-blue"
            >
                <template #details="{props}">
              <span class="whitespace-nowrap md:whitespace-normal" v-html="props.details">
              </span>
                </template>
            </t-table>
        </template>
    </app-layout>
</template>

<script>
import {defineComponent, ref} from "vue";
/*Layout*/
import AppLayout from "@/Layouts/AppLayout";
/*Component*/
import GridSection from "@/Layouts/GridSection";
import TCollapsible from "@/Components/Collapsible/TCollapsible";
import TCollapsibleItem from "@/Components/Collapsible/TCollapsibleItem";
import TContentCard from "@/Components/Card/TContentCard";
import TTable from "@/Components/Table/TTable";
/*Codehighlighter*/
import "simple-syntax-highlighter/dist/sshpre.css";
import SshPre from "simple-syntax-highlighter";
import TInformationCircleIcon from "@/Components/Icon/TInformationCircleIcon";
import TLogo from "@/Components/Icon/TLogo";

export default defineComponent({
    name: "Collapsible",
    components: {
        TLogo,
        TInformationCircleIcon,
        GridSection, AppLayout, TContentCard, TCollapsible, TCollapsibleItem, SshPre, TTable},
    setup() {
        const collapsibleActive = ref([])
        const collapsibleActive2 = ref([])
        const collapsibleActive3 = ref([])
        const test = ref(false)
        const sampleCode = {
            html:
                '<t-collapsible :radius="3">\n' +
                '    <!--First Item-->\n' +
                '    <t-collapsible-item align="right" color="solid-red">\n' +
                '        <template #title>\n' +
                '            <!--You can use any component in this area-->\n' +
                '            <font-awesome-icon icon="chart-bar"/>\n' +
                '            Default, non-added align indicator\n' +
                '        </template>\n' +
                '        <template #content>\n' +
                '            <!--You can use any component in this area-->\n' +
                '            Content\n' +
                '        </template>\n' +
                '    </t-collapsible-item>\n' +
                '    <!--Second Item-->\n' +
                '    <t-collapsible-item align="left" color="solid-blue">\n' +
                '        <template #title>\n' +
                '            <!--You can use any component in this area-->\n' +
                '            <font-awesome-icon icon="shopping-bag"/>\n' +
                '            Left\n' +
                '        </template>\n' +
                '        <template #content>\n' +
                '            <!--You can use any component in this area-->\n' +
                '            Content\n' +
                '        </template>\n' +
                '    </t-collapsible-item>\n' +
                '</t-collapsible>',
            js:
                'import TCollapsible from "@/Components/Collapsible/TCollapsible";\n' +
                'import TCollapsibleItem from "@/Components/Collapsible/TCollapsibleItem";' +
                '\n' +
                'export default {\n' +
                '  name: "InputGroup",\n' +
                '  components: {TCollapsible, TCollapsibleItem},\n' +
                '  }',
            table: {
                header: [
                    {key: 'variable', label: 'Variable'},
                    {key: 'type', label: 'Value Type'},
                    {key: 'details', label: 'Details'},
                ],
                content: [
                    {
                        variable: 'color',
                        type: 'String',
                        details: "Your collapsible item color theme.<br><b>Options Solid:</b> solid-red, solid-blue, solid-green, solid-yellow, solid-indigo, solid-pink, solid-purple, solid-gray, solid-black, solid-white,<br>" +
                            "<b>Options Light:</b> light-red, light-blue, light-green, light-yellow, light-indigo, light-pink, light-purple, light-gray<br" +
                            "><b>Options Gradient:</b> gradient-red-to-pink. Red is first color and Pink is second color. You change red end pink with red, blue, green, yellow, indigo, pink, purple and gray)"
                    },
                    {
                        variable: 'gradient-direction',
                        type: 'String',
                        details: "If you use to the gradient color, you can select gradient's direction. <br><b>Options:</b> r, l, b, t, tl, bl, tr, br<br>" +
                            "<b>Default:</b> r<br>(Means: l: left, r: right, b: bottom, t: top)"
                    },
                    {
                        variable: ":radius",
                        type: "Number",
                        details: "<b>Options:</b> none, 1, 2, 3, 4, 5, 6, 7, 8"
                    },
                    {
                        variable: 'align',
                        type: 'String',
                        details: '<b>Options:</b> left, center and right'
                    }
                ]
            }
        }

        return {collapsibleActive, collapsibleActive2, collapsibleActive3,sampleCode, test}
    }
})
</script>

<style scoped>

</style>
