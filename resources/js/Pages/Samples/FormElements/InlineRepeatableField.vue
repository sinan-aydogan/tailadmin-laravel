<template>
  <app-layout>
    <template #header>Inline Editable and Repeatable Input Type</template>
    <template #subHeader>One field but every things is in there</template>
    <template #default>
      <t-form-content @reset="reset" @submitted="save">
        <t-form-section
            description="This information is subject to personal data protection law."
            title="Personal Infos">
          <!-- Name -->
          <t-input-group class="col-span-12" label="Name" labelFor="name">
            <t-input-text id="name" v-model="form.name" placeholder="Business mail address"/>
          </t-input-group>
          <!-- Job Requirements -->
          <t-input-group class="col-span-12" label="Job Requirements" labelFor="job_requirements">
            <t-input-inline-editable-repeatable
                id="job_requirements"
                v-model="form.job_requirements"
                place-holder-text="Requirement"
            />
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
import TInputInlineEditableRepeatable from "@/Components/Form/Inputs/TInputInlineEditableRepeatable.vue";


export default {
  name: "InlineRepeatableField",
  components: {
    TInputInlineEditableRepeatable, TInputText, TInputGroup, TFormSection, TFormContent, AppLayout
  },
  data() {
    return {
      form: this.$inertia.form({
        _method: 'POST',
        name: null,
        job_requirements: [],
      })
    }
  },
  methods: {
    reset: function () {
      this.form.name = null;
      this.form.job_requirements = [];
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
