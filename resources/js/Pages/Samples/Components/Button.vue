<template>
    <app-layout>
        <template #header>
            Buttons
        </template>
        <template #subHeader>
            For all use
        </template>
        <template #default>
            <grid-section col="2" gap="2">
                <!--Simple Buttons : Code 1-->
                <t-contentCard width="1">
                    <template #title>
                        Simple Buttons
                    </template>
                    <template #content>
                        <div class="flex flex-row gap-2">
                            <t-button>Link</t-button>
                            <t-button color="green">Download</t-button>
                            <t-button color="yellow">Edit</t-button>
                            <t-button color="red">Delete</t-button>
                        </div>
                    </template>
                    <template #secondContent>
                        <pre v-highlightjs="sampleCodes.code1" class="w-full">
                            <code class="html">
                            </code>
                        </pre>
                        <span class="border bg-gray-100 p-2 flex my-2">
            You can add a attribute which "color" for button color.
            <em class="ml-2"> Color variations: <b>red, blue, indigo, yellow, green, gray, black, white</b></em>
          </span>
                    </template>
                </t-contentCard>
                <!--Icon Buttons : Code 2-->
                <t-contentCard width="1">
                    <template #title>
                        With Icon
                    </template>
                    <template #content>
                        <div class="flex flex-row gap-2">
                            <t-button>
                                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                </svg>
                                Link
                            </t-button>
                            <t-button color="green">
                                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                          stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                </svg>
                                Download
                            </t-button>
                            <t-button color="yellow">
                                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                </svg>
                                Edit
                            </t-button>
                            <t-button color="red">
                                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                </svg>
                                Delete
                            </t-button>
                            <t-button>
                                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                </svg>
                            </t-button>
                            <t-button color="green">
                                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                          stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                </svg>
                            </t-button>
                            <t-button color="yellow">
                                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                </svg>
                            </t-button>
                            <t-button color="red">
                                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                </svg>
                            </t-button>
                        </div>
                    </template>
                    <template #secondContent>
                        <pre v-highlightjs="sampleCodes.code2" class="whitespace-pre-wrap">
                            <code class="html">
                            </code>
                        </pre>
                    </template>
                </t-contentCard>
                <!--With radius : Code 3-->
                <t-contentCard width="1">
                    <template #title>
                        With radius
                    </template>
                    <template #content>
                        <div class="flex flex-row gap-2">
                            <t-button :radius="1">Link</t-button>
                            <t-button :radius="3" color="green">Download</t-button>
                            <t-button :radius="5" color="yellow">Edit</t-button>
                            <t-button :radius="8" color="red">Delete</t-button>
                        </div>
                    </template>
                    <template #secondContent>
                        <pre v-highlightjs="sampleCodes.code3" class="w-full">
                            <code class="html">
                            </code>
                        </pre>
                    </template>
                </t-contentCard>
                <!--With Size : Code 4-->
                <t-contentCard width="1">
                    <template #title>
                        With size
                    </template>
                    <template #content>
                        <div class="flex gap-2 w-full items-end">
                            <t-button color="yellow" size="xl">XL Button: xl </t-button>
                            <t-button color="green" size="full">Full Button : full</t-button>
                            <t-button color="red" size="sm">Small Button : sm</t-button>
                        </div>
                    </template>
                    <template #secondContent>
                        <pre v-highlightjs="sampleCodes.code4" class="w-full">
                            <code class="html">
                            </code>
                        </pre>
                    </template>
                </t-contentCard>
            </grid-section>
        </template>
    </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import GridSection from "@/Layouts/GridSection";
import TContentCard from "@/Components/Card/TContentCard";
import TButton from "@/Components/Button/TButton";

export default {
    name: "Button",
    components: {AppLayout, GridSection, TContentCard, TButton},
    data() {
        return {
            sampleCodes: {
                code1: '<t-button>Link</t-button>\n' +
                    '<t-button color="green">Download</t-button>\n' +
                    '<t-button color="yellow">Edit</t-button>\n' +
                    '<t-button color="red">Delete</t-button>',
                code2: '<t-button>\n' +
                    '  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n' +
                    '    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />\n' +
                    '  </svg>\n' +
                    '  Link\n' +
                    '</t-button>\n' +
                    '<t-button color="green">\n' +
                    '  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n' +
                    '    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />\n' +
                    '  </svg>\n' +
                    '  Download\n' +
                    '</t-button>\n' +
                    '<t-button color="yellow">\n' +
                    '  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n' +
                    '    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />\n' +
                    '  </svg>\n' +
                    '  Edit\n' +
                    '</t-button>\n' +
                    '<t-button color="red">\n' +
                    '  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n' +
                    '    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />\n' +
                    '  </svg>\n' +
                    '  Delete\n' +
                    '</t-button>\n' +
                    '<t-button>\n' +
                    '  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n' +
                    '    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />\n' +
                    '  </svg>\n' +
                    '</t-button>\n' +
                    '<t-button color="green">\n' +
                    '  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n' +
                    '    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />\n' +
                    '  </svg>\n' +
                    '</t-button>\n' +
                    '<t-button color="yellow">\n' +
                    '  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n' +
                    '    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />\n' +
                    '  </svg>\n' +
                    '</t-button>\n' +
                    '<t-button color="red">\n' +
                    '  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n' +
                    '    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />\n' +
                    '  </svg>\n' +
                    '</t-button>',
                code3: '<t-button :radius="1">Link</t-button>\n' +
                    '<t-button :radius="3" color="green">Download</t-button>\n' +
                    '<t-button :radius="5" color="yellow">Edit</t-button>\n' +
                    '<t-button :radius="8" color="red">Delete</t-button>',
                code4: '<t-button size="full" color="green">Full Button</t-button>\n' +
                    '<t-button size="xl" color="yellow">XL Button</t-button>\n' +
                    '<t-button size="sm" color="red">Small Button</t-button>',
            }
        }
    }
}
</script>

<style scoped>

</style>
