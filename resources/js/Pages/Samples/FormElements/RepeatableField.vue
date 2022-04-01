<template>
  <app-layout>
    <template #header>Repeatable Input Type</template>
    <template #subHeader>One field but every things is in there</template>
    <template #default>
      <t-form-content @reset="reset" @submitted="null">
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
/*Main Functions*/
import AppLayout from "@/Layouts/AppLayout";
import {useForm} from "@inertiajs/inertia-vue3";

/*Components*/
import TFormContent from "@/Components/Form/TFormContent";
import TFormSection from "@/Components/Form/TFormSection";
import TInputGroup from "@/Components/Form/TInputGroup";
import TInputText from "@/Components/Form/Inputs/TInputText";
import TInputRepeatable from "@/Components/Form/Inputs/TInputRepeatable";

export default {
  name: "RepeatableField",
  components: {TInputRepeatable, TInputText, TInputGroup, TFormSection, TFormContent, AppLayout},

    setup(){
      const form = useForm({
          name: null,
          education: [],
          hobbies: [],
      })

        const reset = () => {
          form.reset()
        }

        return {
          form,
            reset
        }
    },
}
</script>

<style scoped>

</style>
