<template>
    <app-layout title="Dropdowns">
        <template #header>
            Dropdowns
        </template>
        <template #subHeader>
            Menu or multi functional buttons
        </template>
        <template #default>
            <grid-section :col="1">
                <t-content-card :width="1">
                    <template #button-trigger>Simple</template>
                    <template #subTitle>Link (Blank, Internal, External and Route) and Icons</template>
                    <template #content>
                        <div class="flex flex-wrap items-center justify-center space-x-4">
                            <!--Indigo-->
                            <t-dropdown color="solid-white" size="fit">
                                <template #trigger>
                                    Fit Links
                                </template>
                                <t-dropdown-item>Menu 1</t-dropdown-item>
                                <t-dropdown-item>Menu 2</t-dropdown-item>
                                <t-dropdown-item>Menu 3</t-dropdown-item>
                            </t-dropdown>

                            <!--With Icon-->
                            <t-dropdown button-color="purple" button-design="outline" align="right" size="fit">
                                <template #trigger>
                                    Wide Links
                                </template>
                                <t-dropdown-item :link="route('alert')">
                                    <template #icon>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                        </svg>
                                    </template>
                                    Alert Component
                                </t-dropdown-item>
                                <t-dropdown-item :link="route('badge')">
                                    <template #icon>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                        </svg>
                                    </template>
                                    Badge Component
                                </t-dropdown-item>
                                <t-dropdown-item :link="route('list')">
                                    <template #icon>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>
                                    </template>
                                    List Component
                                </t-dropdown-item>
                            </t-dropdown>

                            <!--Rich Trigger-->
                            <t-dropdown size="fit" align="right" trigger-type="rich">
                                <div class="bg-white rounded-md border mt-1 overflow-hidden w-32">
                                    <t-dropdown-item>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Profile
                                    </t-dropdown-item>
                                    <t-dropdown-item>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        Wallet
                                    </t-dropdown-item>
                                    <span
                                        class="inline-flex px-2 pb-2 pt-1 -mb-1 border-t border-red-500 w-full gap-1 h-full items-center text-red-500 bg-gray-100 hover:bg-red-500 hover:text-white">
                      <t-log-out-icon class="w-5 h-5"/>
                    Logout
                  </span>
                                </div>
                                <template #trigger>
                                    <t-avatar src="https://i.pravatar.cc"
                                              :indicator="{color:'solid-green',position:'rb'}"/>
                                </template>
                            </t-dropdown>

                            <!--Table Action Trigger-->
                            <t-dropdown align="right" size="fit" trigger-type="rich">
                                <template #trigger>
                                    <div class="flex justify-center items-center h-10 w-10 hover:bg-gray-200 rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                                        </svg>
                                    </div>
                                </template>
                                <t-list :radius="3">
                                    <t-list-item class="hover:bg-red-100 hover:text-red-500 cursor-pointer text-sm">
                                        <div class="flex items-center h-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none"
                                                 viewBox="0 0 24 24"
                                                 stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      stroke-width="2"
                                                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                            </svg>
                                            Delete
                                        </div>
                                    </t-list-item>
                                    <t-list-item class="hover:bg-blue-100 hover:text-blue-500 cursor-pointer text-sm">
                                        <div class="flex items-center h-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none"
                                                 viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      stroke-width="2"
                                                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                                            </svg>
                                            Edit
                                        </div>
                                    </t-list-item>
                                    <t-list-item class="hover:bg-blue-100 hover:text-blue-500 cursor-pointer text-sm">
                                        <div class="flex items-center h-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none"
                                                 viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      stroke-width="2"
                                                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      stroke-width="2"
                                                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                                            </svg>
                                            View
                                        </div>
                                    </t-list-item>
                                </t-list>
                            </t-dropdown>
                        </div>
                    </template>
                </t-content-card>
            </grid-section>
        </template>
    </app-layout>
</template>

<script>
/*Layout*/
import AppLayout from "@/Layouts/AppLayout.vue";
/*Component*/
import GridSection from "@/Layouts/GridSection.vue";
import TDropdown from "@/Components/Dropdown/TDropdown.vue";
import TDropdownItem from "@/Components/Dropdown/TDropdownItem.vue";
import TContentCard from "@/Components/Card/TContentCard.vue";
import TList from "@/Components/List/TList.vue";
import TListItem from "@/Components/List/TListItem.vue";
import TAvatar from "@/Components/Avatar/TAvatar.vue";
import TLogOutIcon from "@/Components/Icon/TLogOutIcon.vue";

export default {
    name: "Dropdown",
    components: {
        TListItem,
        TList,
        TLogOutIcon, TAvatar, TContentCard, GridSection, AppLayout, TDropdown, TDropdownItem
    }
}
</script>
