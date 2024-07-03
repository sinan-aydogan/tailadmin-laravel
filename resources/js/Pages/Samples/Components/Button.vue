<template>
    <app-layout title="Buttons">
        <template #header>Buttons</template>
        <template #subHeader>For all use (1.296 variations)</template>
        <template #default>
            <grid-section :col-tablet="1">
                <t-content-card :width="1">
                    <template #title>Sample Buttons</template>
                    <template
                        #subTitle
                    >Color, radius, icon, size, disabled, loading, extended and group options</template>
                    <template #content>
                        <grid-section :col-laptop="2">
                            <!--Styles-->
                            <div
                                class="flex flex-wrap justify-center md:justify-start items-center"
                            >
                                <h2 class="font-semibold mr-4">Styles</h2>
                                <div
                                    class="flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2"
                                >
                                    <!--Filled-->
                                    <t-button :radius="0" class="mt-2" color="green">Filled</t-button>
                                    <!--Light-->
                                    <t-button :radius="2" design="light" color="pink">
                                        <svg
                                            class="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                            />
                                        </svg>
                                        Light
                                    </t-button>
                                    <!--Light with Border-->
                                    <t-button :radius="1" design="light" border color="indigo">
                                        <svg
                                            class="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                            />
                                        </svg>
                                        Light with border
                                    </t-button>
                                    <!--Outline-->
                                    <t-button :radius="3" design="outline" color="yellow">Outline</t-button>
                                    <!--Link-->
                                    <t-button design="link" color="blue">Link</t-button>
                                    <!--Link Plus-->
                                    <t-button design="link-plus" color="gray">
                                        <svg
                                            class="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                            />
                                        </svg>
                                        Link Plus
                                    </t-button>
                                </div>
                            </div>

                            <!--Disabled-->
                            <div
                                class="flex flex-wrap justify-center md:justify-start items-center"
                            >
                                <h2 class="font-semibold mr-4">Disabled</h2>
                                <div
                                    class="flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2"
                                >
                                    <!--Filled-->
                                    <t-button :radius="0" class="mt-2" color="green" disabled>Filled</t-button>
                                    <!--Light-->
                                    <t-button :radius="2" design="light" color="pink" disabled>
                                        <svg
                                            class="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                            />
                                        </svg>
                                        Light
                                    </t-button>
                                    <!--Light with Border-->
                                    <t-button
                                        :radius="1"
                                        design="light"
                                        border
                                        color="indigo"
                                        disabled
                                    >
                                        <svg
                                            class="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                            />
                                        </svg>
                                        Light with border
                                    </t-button>
                                    <!--Outline-->
                                    <t-button
                                        :radius="3"
                                        design="outline"
                                        color="yellow"
                                        disabled
                                    >Outline</t-button>
                                    <!--Link-->
                                    <t-button design="link" color="blue" disabled>Link</t-button>
                                    <!--Link Plus-->
                                    <t-button design="link-plus" color="gray" disabled>
                                        <svg
                                            class="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                            />
                                        </svg>
                                        Link Plus
                                    </t-button>
                                </div>
                            </div>

                            <!--Loading-->
                            <div
                                class="flex flex-wrap justify-center md:justify-start items-center"
                            >
                                <h2 class="font-semibold mr-4">Loading</h2>
                                <div
                                    class="flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2"
                                >
                                    <!--Filled-->
                                    <t-button
                                        :radius="2"
                                        design="filled"
                                        color="pink"
                                        loading-with-content
                                        class="mt-2"
                                    >With Text</t-button>
                                    <!--Light-->
                                    <t-button :radius="2" design="light" color="pink" loading>
                                        <svg
                                            class="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                            />
                                        </svg>
                                        Light
                                    </t-button>
                                    <!--Outline-->
                                    <t-button
                                        :radius="3"
                                        design="outline"
                                        color="yellow"
                                        loading
                                        loading-design="three-dots"
                                    >Outline</t-button>
                                    <!--Link-->
                                    <t-button design="link" color="blue" loading>Link</t-button>
                                    <!--Link Plus-->
                                    <t-button
                                        design="link-plus"
                                        color="gray"
                                        loading
                                        loading-design="three-dots"
                                    >
                                        <svg
                                            class="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                            />
                                        </svg>
                                        Link Plus
                                    </t-button>
                                </div>
                            </div>

                            <!--Icon Buttons-->
                            <div
                                class="flex flex-wrap justify-center md:justify-start items-center"
                            >
                                <h2 class="font-semibold mr-4">Icon Buttons</h2>
                                <div
                                    class="flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2"
                                >
                                    <t-button :radius="0" color="pink" class="mt-2">
                                        <svg
                                            class="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                            />
                                        </svg>
                                    </t-button>
                                    <t-button :radius="3" design="light" color="indigo">
                                        <svg
                                            class="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                            />
                                        </svg>
                                    </t-button>
                                    <t-button :radius="5" design="link" color="yellow">
                                        <svg
                                            class="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                            />
                                        </svg>
                                    </t-button>
                                    <t-button :radius="8" design="link-plus" color="red">
                                        <svg
                                            class="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                            />
                                        </svg>
                                    </t-button>
                                </div>
                            </div>
                        </grid-section>
                    </template>
                </t-content-card>
                <!--Buton Sizes-->
                <t-contentCard :width="1">
                    <template #title>Buton Sizes</template>
                    <template #content>
                        <div class="flex flex-wrap gap-2 items-center justify-center w-full">
                            <t-button color="red" size="small">Small Button : small</t-button>
                            <t-button color="red" size="normal">Default : normal</t-button>
                            <t-button color="yellow" size="large">Large Button: large</t-button>
                            <t-button color="blue" size="full">Full Button : full</t-button>
                        </div>
                    </template>
                </t-contentCard>
            </grid-section>
        </template>
    </app-layout>
</template>

<script>
/*Layout*/
import AppLayout from "@/Layouts/AppLayout.vue";
/*Component*/
import GridSection from "@/Layouts/GridSection.vue";
import TButton from "@/Components/Button/TButton.vue";
import TContentCard from "@/Components/Card/TContentCard.vue";

export default {
    name: "Button",
    components: { AppLayout, GridSection, TButton, TContentCard },
    data() {
        return {
            colors: ["solid-red", "solid-blue", "solid-green", "solid-yellow", "solid-indigo", "solid-pink", "solid-purple", "solid-gray", "solid-black", "solid-white", "light-red", "light-blue", "light-green", "light-yellow", "light-indigo", "light-pink", "light-purple", "light-gray"],
        };
    }
};
</script>

<style scoped>
</style>
