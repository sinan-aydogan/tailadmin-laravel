<template>
    <app-layout :actionButtons="true">
        <template #header>
            Select Input Component
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
            <t-form-content @reset="reset" @submitted="save">
                <t-form-section
                    description="This information is subject to personal data protection law."
                    title="Personal Infos">
                    <!-- Manager -->
                    <t-input-group class="col-span-12 md:col-span-6" label="Manager - Searchable" labelFor="user_id">
                        <t-input-select
                            v-model="form.user_id"
                            :clear-button="true"
                            :options="users"
                            :search="true"
                            optionsLabelKey="name"
                            optionsValueKey="id"
                            place-holder="Select a manager"
                            search-place-holder="Search a manager..."
                        />
                    </t-input-group>
                    <!-- Rich Options Content -->
                    <t-input-group class="col-span-12 md:col-span-6" label="Rich Options Content" labelFor="status">
                        <t-input-select
                            v-model="form.status"
                            :clear-button="true"
                            :options="status"
                            optionsLabelKey="name"
                            optionsValueKey="value"
                            place-holder="Select a status"
                        >
                            <template #label="{ props }">
                                <span v-if="props.value===true" class="flex flex-row items-center gap-1">
                  <t-check-circle-icon class="w-5 h-5 text-green-500 "/> {{ props.name }}
                </span>
                                <span v-if="props.value===false" class="flex flex-row items-center gap-1">
                                    <t-x-circle-icon class="w-5 h-5 text-red-500 items-center"/> {{ props.name }}
                                </span>
                            </template>
                        </t-input-select>
                    </t-input-group>
                    <!--Disabled-->
                    <t-input-group label="Disabled" class="col-span-12 md:col-span-6">
                        <t-input-select disabled/>
                    </t-input-group>
                    <!--Read Only-->
                    <t-input-group label="Read Only" class="col-span-12 md:col-span-6">
                        <t-input-select
                            :model-value="true"
                            :options="status"
                            options-value-key="value"
                            options-label-key="name"
                            read-only
                        >
                            <template #label="{ props }">
                                <span v-if="props.value===true" class="flex flex-row items-center gap-1">
                                    <t-check-circle-icon class="w-5 h-5 text-green-500 "/> {{ props.name }}
                                </span>
                                <span v-if="props.value===false" class="flex flex-row items-center gap-1">
                                    <t-x-circle-icon class="w-5 h-5 text-red-500 items-center"/> {{ props.name }}
                                </span>
                            </template>
                        </t-input-select>
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
import 'simple-syntax-highlighter/dist/sshpre.css'
import TInputGroup from "@/Components/Form/TInputGroup.vue";
import TInputSelect from "@/Components/Form/Inputs/TInputSelect.vue";
import TCheckCircleIcon from "@/Components/Icon/TCheckCircleIcon.vue";
import TXCircleIcon from "@/Components/Icon/TXCircleIcon.vue";

export default {
    name: "SelectInput",
    components: {
        TXCircleIcon,
        TCheckCircleIcon,
        TInputSelect,
        AppLayout,
        TButton,
        TFormSection,
        TFormContent,
        TInputGroup,
    },
    props: ['users'],
    data() {
        return {
            loading: false,
            form: this.$inertia.form({
                _method: 'POST',
                user_id: null,
                status: false
            }),
            status: [
                {name: 'Passive', value: false, icon: 'XIcon', class: 'w-5 h-5 text-red-500 mr-2'},
                {name: 'Active', value: true, icon: 'Checked', class: 'w-5 h-5 text-green-500 mr-2'}
            ]
        };
    },
    methods: {
        reset: function () {
            this.form.name = null;
            this.form.user_id = null;
            this.form.tax_id = null;
            this.form.email = null;
            this.form.phone = null;
            this.form.status = null;
            this.form.address = null;
        },
        save() {
            this.form.post(route('customer.store'), {
                errorBag: 'customer',
                preserveScroll: true,
            });
            this.loading = true;
        }
    },
}
</script>

<style scoped>

</style>



























