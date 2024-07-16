<template>
    <app-layout title="Badges">
        <template #header>
            Badges
        </template>
        <template #subHeader>
            Useful badges like price indicator,tags and etc
        </template>
        <template #default>
            <grid-section :col="1">
                <!--General Samples-->
                <t-content-card :width="1">
                    <template #title>Custom Badges</template>
                    <template #subTitle>Color, radius, icon and value options</template>
                    <template #content>
                        <grid-section :col-laptop="2" class="dark:text-gray-100">
                            <!--Filled-->
                            <div class="flex flex-wrap justify-center md:justify-start items-center">
                                <h2 class="font-semibold mr-4">Filled</h2>
                                <div
                                    class="flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2 dark:border-gray-700">
                                    <t-badge :radius="0" class="mt-2" color="danger" design="filled">REJECTED</t-badge>
                                    <t-badge color="success" design="filled">ACTIVE</t-badge>
                                    <t-badge badge-value="2.825,90 TRY" color="light" design="filled">SALARY</t-badge>
                                    <t-badge :radius="8" badge-value="8" color="warning" design="filled">
                                        <template #icon>
                                            <iconify-icon icon="tabler:shield" />
                                        </template>
                                        Attacks
                                    </t-badge>
                                </div>
                            </div>

                            <!--Light-->
                            <div class="flex flex-wrap justify-center md:justify-start items-center">
                                <h2 class="font-semibold mr-4">Light</h2>
                                <div
                                    class="flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2 dark:border-gray-700">
                                    <t-badge :radius="0" class="mt-2" color="info" design="light">pending</t-badge>
                                    <t-badge badge-value="12" color="violet" design="light">open tasks</t-badge>
                                    <t-badge :radius="8" badge-value="125" color="pink" design="light">
                                        <template #icon>
                                            <iconify-icon icon="tabler:user-circle" />
                                        </template>
                                        Staff
                                    </t-badge>
                                </div>
                            </div>

                            <!--Inline-->
                            <div class="flex flex-wrap justify-center md:justify-start items-center">
                                <h2 class="font-semibold mr-4">Inline</h2>
                                <div
                                    class="flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2 dark:border-gray-700">
                                    <t-badge :radius="0" class="mt-2" color="green" design="inline">#tailwindcss
                                    </t-badge>
                                    <t-badge :radius="2" badge-value="1 Hr. 25 Min." color="pink" design="inline">
                                        London
                                    </t-badge>
                                    <t-badge :radius="2" badge-value="2" color="warning" design="inline">
                                        <template #icon>
                                            <iconify-icon icon="tabler:star" />
                                        </template>
                                        Awards
                                    </t-badge>
                                </div>
                            </div>

                            <!--Outline-->
                            <div class="flex flex-wrap justify-center md:justify-start items-center">
                                <h2 class="font-semibold mr-4">Outline</h2>
                                <div
                                    class="flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2 dark:border-gray-700">
                                    <t-badge :radius="0" class="mt-2" color="success" design="outline">Online</t-badge>
                                    <t-badge color="danger" design="outline">Offline</t-badge>
                                    <t-badge badge-value="12 minutes" color="warning" design="outline">Away</t-badge>
                                    <t-badge badge-value="+%2" color="success" design="outline">BTC</t-badge>
                                    <t-badge badge-value="-%1,8" color="danger" design="outline">ADA</t-badge>
                                </div>
                            </div>

                            <!--Elegant-->
                            <div class="flex flex-wrap justify-center md:justify-start items-center">
                                <h2 class="font-semibold mr-4">Elegant</h2>
                                <div
                                    class="flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2 dark:border-gray-700">
                                    <t-badge :radius="0" class="mt-2" color="success" design="elegant">Manager</t-badge>
                                    <t-badge badge-value="12" color="violet" design="elegant">Engineer</t-badge>
                                    <t-badge :radius="6" badge-value="8" color="warning" design="elegant">
                                        <template #icon>
                                            <iconify-icon icon="tabler:settings" />
                                        </template>
                                        Maintainer
                                    </t-badge>
                                </div>
                            </div>

                            <!--Block-->
                            <div class="flex flex-wrap justify-center md:justify-start items-center">
                                <h2 class="font-semibold mr-4">Block</h2>
                                <div
                                    class="flex flex-wrap justify-center md:justify-start items-center border rounded w-full p-2 space-x-2 space-y-2 dark:border-gray-700">
                                    <t-badge :radius="0" class="mt-2" color="success" design="block">PASSED</t-badge>
                                    <t-badge badge-value="-3K TRY" color="light" design="block">Prompt Cash</t-badge>
                                    <t-badge :radius="8" badge-value="8" color="danger" design="block">
                                        <template #icon>
                                            <iconify-icon icon="tabler:trash" size="sm" />
                                        </template>
                                        Trash
                                    </t-badge>
                                </div>
                            </div>
                        </grid-section>
                    </template>
                </t-content-card>
                <!--Selectable Badges-->
                <t-content-card :width="1">
                    <template #title>
                        Selectable Badges
                    </template>
                    <template #subTitle>
                        It works like tag
                    </template>
                    <template #content>
                        <grid-section :col-tablet="2">
                            <div class="flex flex-col border border-dashed p-2">
                                <h3 class="font-semibold dark:text-gray-100">Tags:</h3>
                                <div class="flex flex-wrap space-x-2 justify-start items-center mt-2">
                                    <div class="flex flex-wrap border space-x-2 p-2 mb-2 w-full min-h-10">
                                        <t-badge
                                            v-for="(tag,key) in activeTagList"
                                            :key="key"
                                            class="my-2 cursor-pointer"
                                            color="success"
                                            design="filled"
                                            @click="deleteTag(tag)"
                                        >
                                            {{ tag.label }}
                                        </t-badge>
                                    </div>
                                    <div class="flex flex-wrap">
                                        <t-badge
                                            v-for="(tag,key) in passiveTagList"
                                            :key="key"
                                            class="mb-2 mr-2 cursor-pointer"
                                            color="light"
                                            design="filled"
                                            @click="addTag(tag)"
                                        >
                                            {{ tag.label }}
                                        </t-badge>
                                    </div>
                                </div>
                            </div>
                            <!--Custom Select Color-->
                            <div class="flex flex-col border border-dashed p-2">
                                <h3 class="font-semibold dark:text-gray-100">Custom Selected:</h3>
                                <div class="flex flex-wrap justify-start items-center mt-2">
                                    <t-badge v-for="(tag,key) in tagBadgeCustomColor"
                                             :key="key"
                                             v-model="tag.status"
                                             :model-value="tag.status"
                                             :select-active-style="{color: 'success', design: 'filled'}"
                                             :select-passive-style="{color: 'light', design: 'elegant'}"
                                             class="mb-2 mr-2"
                                             select-indicator
                                             selectable
                                    >
                                        {{ tag.label }}
                                    </t-badge>
                                </div>
                            </div>
                        </grid-section>
                    </template>

                </t-content-card>
                <!--Closeable Badges-->
                <t-content-card :width="1">
                    <template #title>Collapsible Badges</template>
                    <template #subTitle>Click them</template>
                    <template #content>
                        <div class="flex flex-wrap space-x-4">
                            <t-badge :collapsible="true" :radius="1" color="pink" design="filled">
                                <template #icon>
                                    <iconify-icon icon="tabler:shield" />
                                </template>
                                Super Admin
                            </t-badge>
                            <t-badge :collapsible="true" :radius="8" color="danger" design="filled">
                                <template #icon>
                                    <iconify-icon icon="tabler:ban" />
                                </template>
                                Restricted Area
                            </t-badge>
                        </div>
                    </template>
                </t-content-card>
            </grid-section>
        </template>
    </app-layout>
</template>

<script>
/*Main Functions*/
import { reactive } from "vue";

/*Components*/
import AppLayout from "@/Layouts/AppLayout.vue";
import GridSection from "@/Layouts/GridSection.vue";
import TContentCard from "@/Components/Card/TContentCard.vue";
import TBadge from "@/Components/Badge/TBadge.vue";

export default {
    name: "Badge",
    components: {
        AppLayout,
        GridSection,
        TBadge,
        TContentCard
    },
    setup() {
        const tagBadge = reactive([
            { id: 1, label: "VueJS" },
            { id: 2, label: "Tailawindcss" },
            { id: 3, label: "Laravel" },
            { id: 4, label: "Javascript" },
            { id: 5, label: "CSS" }
        ]);
        const activeTagList = reactive([]);
        const passiveTagList = reactive([...tagBadge]);

        const tagBadgeCustomColor = reactive([
            { id: 1, label: "Urgent", status: true },
            { id: 2, label: "Low", status: true },
            { id: 3, label: "High", status: true },
            { id: 4, label: "Modarete", status: false },
            { id: 5, label: "Insignificant", status: false }
        ]);

        const addTag = (tag) => {
            activeTagList.push(tag);
            passiveTagList.splice(passiveTagList.findIndex(pt => pt.id === tag.id), 1);
        };

        const deleteTag = (tag) => {
            passiveTagList.push(tag);
            activeTagList.splice(activeTagList.findIndex(pt => pt.id === tag.id), 1);
        };

        return { tagBadge, tagBadgeCustomColor, activeTagList, addTag, deleteTag, passiveTagList };
    }
};
</script>
