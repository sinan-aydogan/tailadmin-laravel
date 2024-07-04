<template>
    <app-layout>
        <template #header>Date Input Field</template>
        <template #subHeader>Starting, birth, fired, register date or time</template>
        <template #default>
            <t-form-content @reset="reset" @submitted="save">
                <t-form-section
                    description="This information is subject to personal data protection law."
                    title="Personal Infos"
                >
                    <!-- Name -->
                    <t-input-group class="col-span-12" label="Name" labelFor="name">
                        <t-input-text
                            id="name"
                            v-model="form.name"
                            placeholder="Business mail address"
                        />
                    </t-input-group>
                    <!-- Birthday -->
                    <t-input-group
                        class="col-span-12"
                        label="Birthday (Only Date)"
                        labelFor="tax_id"
                    >
                        <t-input-date v-model="form.birth_date" />
                    </t-input-group>
                    <!-- Flying Date-Time -->
                    <t-input-group
                        class="col-span-12"
                        label="Flying Date-Time"
                        labelFor="flying_time"
                    >
                        <t-input-date v-model="form.flying_time" mode="dateTime" />
                    </t-input-group>
                    <!-- Meeting Time A-->
                    <t-input-group
                        class="col-span-12"
                        label="Meeting Time (Hour:Minute A)"
                        labelFor="meeting_time"
                    >
                        <t-input-date v-model="form.meeting_time" mode="time" />
                    </t-input-group>
                    <!-- Meeting Time 24Hr-->
                    <t-input-group
                        class="col-span-12"
                        label="Meeting Time (Hour:Minute 24Hr)"
                        labelFor="meeting_time"
                    >
                        <t-input-date v-model="form.meeting_time" :is24hr="true" mode="time" />
                    </t-input-group>
                    <!-- Meeting Duration-->
                    <t-input-group
                        class="col-span-12"
                        label="Meeting Duration (Date Range)"
                        labelFor="meeting_time"
                    >
                        <t-input-date v-model="form.meeting_duration" :is-range="true" />
                    </t-input-group>
                </t-form-section>
            </t-form-content>
        </template>
    </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";
import TFormContent from "@/Components/Form/TFormContent.vue";
import TFormSection from "@/Components/Form/TFormSection.vue";
import TInputGroup from "@/Components/Form/TInputGroup.vue";
import TInputText from "@/Components/Form/Inputs/TInputText.vue";
import TInputDate from "@/Components/Form/Inputs/TInputDate.vue";

export default {
    name: "DateField",
    components: { TInputDate, TInputText, TInputGroup, TFormSection, TFormContent, AppLayout },
    data() {
        return {
            form: this.$inertia.form({
                _method: 'POST',
                name: null,
                birth_date: null,
                flying_time: null,
                meeting_time: null,
                meeting_duration: null
            })
        }
    },
    methods: {
        reset: function () {
            this.form.name = null;
            this.form.birth_date = null;
            this.form.flying_time = null;
            this.form.meeting_time = null;
            this.form.meeting_duration = null;
        },
        save() {
            this.form.post(route('user.store'), {
                errorBag: 'user',
                preserveScroll: true,
            });
            this.loading = true;
        }
    },
}
</script>

<style scoped>
</style>
