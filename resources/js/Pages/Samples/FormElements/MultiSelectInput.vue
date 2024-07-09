<template>
    <app-layout title="Multi Select Input Component">
        <template #header>
            Multi Select Input Component
        </template>
        <template #action-buttons>
            <t-button :radius="3" color="yellow">
                <icon icon="angle-left"/>
                Back to Home
            </t-button>
            <t-button :radius="3" color="green">
                <icon icon="plus-circle"/>
                Add New
            </t-button>
        </template>
        <template #default>
            <t-form-content @reset="reset">
                <t-form-section
                    description="This information is subject to personal data protection law."
                    title="Personal Infos">
                    <!-- Manager - Simple -->
                    <t-input-group
                        class="col-span-12 md:col-span-6"
                        label="Managers - Simple"
                        labelFor="manager"
                    >
                        <t-input-multi-select
                            id="managers"
                            v-model="form.managers"
                            :options="users"
                            options-label-key="name"
                            options-value-key="id"
                        />
                    </t-input-group>
                    <!-- Facilities - Rich Options Content -->
                    <t-input-group
                        class="col-span-12 md:col-span-6"
                        label="Facilities - Rich Options Content"
                        label-for="facilities"
                    >
                        <t-input-multi-select
                            id="facilities"
                            v-model="form.facilities"
                            :search="false"
                            :options="facilities"
                            options-label-key="name"
                            options-value-key="value"
                        >
                            <template #label="{ props }">
                                <div class="flex items-center space-x-1">
                                    <!--Computer-->
                                    <svg v-if="props.value === 'computer'" class="w-4 h-4" fill="none"
                                         stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                    <!--Phone-->
                                    <svg v-if="props.value === 'phone'" class="w-4 h-4" fill="none"
                                         stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                                    </svg>
                                    <!--Lodge-->
                                    <svg v-if="props.value === 'lodge'" class="w-4 h-4" fill="none"
                                         stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                    </svg>
                                    <!--Personal Office-->
                                    <svg v-if="props.value === 'personal-office'" class="w-4 h-4" fill="none"
                                         stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                    </svg>
                                    <!--Shared Office-->
                                    <svg v-if="props.value === 'shared-office'" class="w-4 h-4" fill="none"
                                         stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                    <span v-text="props.name"/>
                                </div>
                            </template>
                        </t-input-multi-select>
                    </t-input-group>
                    <!--Disabled-->
                    <t-input-group
                        class="col-span-12 md:col-span-6"
                        label="Disabled"
                        label-for="disabled"
                    >
                        <t-input-multi-select
                            id="disabled"
                            :options="users"
                            disabled
                        />
                    </t-input-group>
                    <!--Read Only-->
                    <t-input-group
                        class="col-span-12 md:col-span-6"
                        label="Read Only"
                        label-for="readOnly"
                    >
                        <t-input-multi-select
                            id="readOnly"
                            :options="users"
                            options-value-key="id"
                            options-label-key="name"
                            :model-value="[1,2,3]"
                            read-only
                        />
                    </t-input-group>
                </t-form-section>
            </t-form-content>
        </template>
    </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";
import TButton from "@/Components/Button/TButton.vue";
import TFormSection from "@/Components/Form/TFormSection.vue";
import TFormContent from "@/Components/Form/TFormContent.vue";
import TInputGroup from "@/Components/Form/TInputGroup.vue";
import TInputMultiSelect from "@/Components/Form/Inputs/TInputMultiSelect.vue";
import {ref, defineComponent} from "vue";

export default defineComponent({
    name: "MultiSelectInput",
    components: {
        TInputMultiSelect,
        AppLayout,
        TButton,
        TFormSection,
        TFormContent,
        TInputGroup,
    },
    props: {
        users: {
            type: Array,
            default() {
                return []
            }
        }
    },
    setup() {
        const form = ref({
            managers: [],
            facilities: []
        })
        const facilities = [
            {name: 'Computer', value: 'computer'},
            {name: 'Phone', value: 'phone'},
            {name: 'Lodge', value: 'lodge'},
            {name: 'Personal Office', value: 'personal-office'},
            {name: 'Shared Office', value: 'shared-office'},
        ]

        const reset = () => {
            form.value.managers = [];
            form.value.facilities = [];
        }

        return {form, facilities, reset}
    }
})
</script>

<style scoped>

</style>



























