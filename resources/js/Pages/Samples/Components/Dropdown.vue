<template>
    <app-layout>
        <template #header>
            Dropdowns
        </template>
        <template #subHeader>
            Menu or multi functional buttons
        </template>
        <template #default>
            <grid-section col="3" gap="4">
                <t-content-card width="2">
                    <template #title>
                        Simple
                    </template>
                    <template #content>
                        <div class="flex flex-wrap gap-4">
                            <!--Simple Dropdown 1-->
                            <t-dropdown color="red">
                                <template #title>
                                    Title
                                </template>
                                <t-dropdown-item>Menu 1</t-dropdown-item>
                                <t-dropdown-item>Menu 2</t-dropdown-item>
                                <t-dropdown-item>Menu 3</t-dropdown-item>
                            </t-dropdown>
                            <!--Indigo-->
                            <t-dropdown color="indigo">
                                <template #title>
                                    Title
                                </template>
                                <t-dropdown-item>Menu 1</t-dropdown-item>
                                <t-dropdown-item>Menu 2</t-dropdown-item>
                                <t-dropdown-item>Menu 3</t-dropdown-item>
                            </t-dropdown>
                            <!--White-->
                            <t-dropdown>
                                <template #title>
                                    Title
                                </template>
                                <t-dropdown-item>Menu 1</t-dropdown-item>
                                <t-dropdown-item>Menu 2</t-dropdown-item>
                                <t-dropdown-item>Menu 3</t-dropdown-item>
                            </t-dropdown>
                            <!--Black-->
                            <t-dropdown color="black">
                                <template #title>
                                    Title
                                </template>
                                <t-dropdown-item>Menu 1</t-dropdown-item>
                                <t-dropdown-item>Menu 2</t-dropdown-item>
                                <t-dropdown-item>Menu 3</t-dropdown-item>
                            </t-dropdown>
                        </div>
                    </template>
                </t-content-card>
            </grid-section>
        </template>
    </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import GridSection from "@/Layouts/GridSection";
import TDropdown from "@/Components/Dropdown/TDropdown";
import TDropdownItem from "@/Components/Dropdown/TDropdownItem";
import TContentCard from "@/Components/Card/TContentCard";
export default {
    name: "Dropdown",
    components: {TContentCard, GridSection, AppLayout, TDropdown,TDropdownItem}
}
</script>

<style scoped>

</style>
