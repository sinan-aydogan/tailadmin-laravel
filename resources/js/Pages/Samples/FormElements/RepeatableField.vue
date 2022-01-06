<template>
  <app-layout>
    <template #header>Repeatable Input Type</template>
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
          <!-- Hobbies -->
          <t-input-group class="col-span-12" label="Hobbies (1 field)" labelFor="tax_id">
            <t-input-repeatable id="hobbies" v-model="form.hobbies" value1name="Hobby"/>
          </t-input-group>
          <!-- Education Info -->
          <t-input-group class="col-span-12" label="Education Info (2 fields)" labelFor="tax_id">
            <t-input-repeatable id="education" v-model="form.education" value1name="School" value2name="Degree"/>
          </t-input-group>
        </t-form-section>
      </t-form-content>
    </template>
  </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import TFormContent from "@/Components/Form/TFormContent";
import TFormSection from "@/Components/Form/TFormSection";
import TInputGroup from "@/Components/Form/TInputGroup";
import TInputText from "@/Components/Form/Inputs/TInputText";
import TInputRepeatable from "@/Components/Form/Inputs/TInputRepeatable";


export default {
  name: "RepeatableField",
  components: {TInputRepeatable, TInputText, TInputGroup, TFormSection, TFormContent, AppLayout},
  data() {
    return {
      form: this.$inertia.form({
        _method: 'POST',
        name: null,
        education: [],
        hobbies: [],
      })
    }
  },
  methods: {
    reset: function () {
      this.form.name = null;
      this.form.education = [];
      this.form.hobbies = [];
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
