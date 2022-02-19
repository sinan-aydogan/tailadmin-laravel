<template>
    <app-layout :actionButtons="true">
        <template #header>Form Structure</template>
        <template #action-buttons>
            <t-button :radius="3" color="yellow">
                <icon icon="angle-left" />Back to Home
            </t-button>
            <t-button :radius="3" color="green">
                <icon icon="plus-circle" />Add New
            </t-button>
        </template>
        <template #default>
            <!-- Native -->
            <t-form-content
                :reset-button="false"
                :submit-button="false"
                @reset="reset"
                @submitted="save"
            >
                <!--Form Content Area Indicator-->
                <t-badge color="success">Form Content Area</t-badge>

                <t-form-section
                    description="This information is subject to personal data protection law. - (Description)"
                    title="Personal Infos - (Title)"
                >
                    <!--Form Section Area Indicator-->
                    <div class="col-span-full">
                        <t-badge color="info">Form Section Area</t-badge>
                    </div>

                    <!-- Name -->
                    <t-input-group label="Name" labelFor="name">
                        <t-input-text
                            id="name"
                            v-model="form.name"
                            placeholder="Business mail address"
                        />
                    </t-input-group>
                    <!-- Tax ID -->
                    <t-input-group label="Tax ID" labelFor="tax_id">
                        <t-input-text id="tax_id" v-model="form.tax_id" />
                    </t-input-group>
                    <!-- Address -->
                    <t-input-group :laptop-width="12" label="Address" labelFor="address">
                        <t-input-text-area
                            id="address"
                            v-model="form.address"
                            :clear-button="true"
                            :counter="true"
                            :rows="3"
                            placeholder="Full address"
                        />
                    </t-input-group>
                </t-form-section>
                <!--Status Area Indicator-->
                <template #button-area>
                    <div
                        class="flex flex-wrap col-span-12 justify-center md:justify-end space-x-2 mr-4 py-4"
                    >
                        <t-badge color="pink">Form Extra Button Area</t-badge>
                    </div>
                    <div class="border p-2 gap-2 inline-flex items-center">
                        <div class="flex flex-wrap gap-1 justify-center md:justify-end">
                            <t-badge color="light">Form Status Area</t-badge>or
                            <t-badge color="purple">Default Form Buttons Area</t-badge>
                        </div>
                    </div>
                </template>
            </t-form-content>

            <!-- Smart -->
            <t-form-content
                :reset-button="true"
                :submit-button="true"
                sectionLayout="smart"
                @reset="reset"
                @submitted="save"
                class="mt-4"
            >
                <t-form-section
                    description="This information is subject to personal data protection law. - (Description)"
                    title="Personal Infos - (Title)"
                >
                    <!-- Name -->
                    <t-input-group label="Name" labelFor="name">
                        <t-input-text
                            id="name"
                            v-model="form.name"
                            placeholder="Business mail address"
                        />
                    </t-input-group>
                    <!-- Tax ID -->
                    <t-input-group label="Tax ID" labelFor="tax_id">
                        <t-input-text id="tax_id" v-model="form.tax_id" />
                    </t-input-group>
                    <!-- Address -->
                    <t-input-group :desktop-width="12" label="Address" labelFor="address">
                        <t-input-text-area
                            id="address"
                            v-model="form.address"
                            :clear-button="true"
                            :counter="true"
                            :rows="3"
                            placeholder="Full address"
                        />
                    </t-input-group>
                </t-form-section>

                <t-form-section
                    description="This information is subject to personal data protection law. - (Description)"
                    title="Personal Infos - (Title)"
                >
                    <!-- Name -->
                    <t-input-group label="Name" labelFor="name">
                        <t-input-text
                            id="name"
                            v-model="form.name"
                            placeholder="Business mail address"
                        />
                    </t-input-group>
                    <!-- Tax ID -->
                    <t-input-group label="Tax ID" labelFor="tax_id">
                        <t-input-text id="tax_id" v-model="form.tax_id" />
                    </t-input-group>
                    <!-- Address -->
                    <t-input-group :desktop-width="12" label="Address" labelFor="address">
                        <t-input-text-area
                            id="address"
                            v-model="form.address"
                            :clear-button="true"
                            :counter="true"
                            :rows="3"
                            placeholder="Full address"
                        />
                    </t-input-group>
                </t-form-section>

                <template #actions>Saved</template>
            </t-form-content>
        </template>
    </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import TButton from "@/Components/Button/TButton";
import TFormSection from "@/Components/Form/TFormSection";
import TFormContent from "@/Components/Form/TFormContent";
import TInputGroup from "@/Components/Form/TInputGroup";
import TInputText from "@/Components/Form/Inputs/TInputText";
import TInputTextArea from "@/Components/Form/Inputs/TInputTextArea";
import TBadge from "@/Components/Badge/TBadge";

export default {
    name: "FormStructure",
    components: {
        TBadge,
        AppLayout,
        TButton,
        TFormSection,
        TFormContent,
        TInputGroup,
        TInputText,
        TInputTextArea,
    },
    data() {
        return {
            loading: false,
            form: this.$inertia.form({
                _method: 'POST',
                name: null,
                tax_id: null,
                email: null,
                phone: null,
                status: null,
                address: null,
            }),
            status: [
                { name: 'Passive', value: 0, icon: 'XIcon', class: 'w-5 h-5 text-red-500 mr-2' },
                { name: 'Active', value: 1, icon: 'Checked', class: 'w-5 h-5 text-green-500 mr-2' }
            ],
        };
    },
    methods: {
        reset: function () {
            this.form.name = null;
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
    }
}
</script>

<style scoped>
</style>



























