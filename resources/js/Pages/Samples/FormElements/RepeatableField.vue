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
      <ssh-pre :copy-button="true" label="Code" language="html">{{ sampleCode.html }}</ssh-pre>
      <ssh-pre :copy-button="true" label="JS" language="js">{{ sampleCode.js }}</ssh-pre>
      <!--Variables Table-->
      <t-table
          :content="sampleCode.table.content"
          :header="sampleCode.table.header"
          :searchable="['variable','details']"
          class="mt-5"
          color="solid-blue">
        <template #details="{props}">
              <span class="whitespace-nowrap md:whitespace-normal" v-html="props.details">
              </span>
        </template>
      </t-table>
    </template>
  </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import SshPre from 'simple-syntax-highlighter'
import 'simple-syntax-highlighter/dist/sshpre.css'
import TFormContent from "@/Components/Form/TFormContent";
import TFormSection from "@/Components/Form/TFormSection";
import TInputGroup from "@/Components/Form/TInputGroup";
import TInputText from "@/Components/Form/Inputs/TInputText";
import TInputRepeatable from "@/Components/Form/Inputs/TInputRepeatable";
import TTable from "@/Components/Table/TTable";


export default {
  name: "RepeatableField",
  components: {TTable, TInputRepeatable, TInputText, TInputGroup, TFormSection, TFormContent, AppLayout, SshPre},
  data() {
    return {
      form: this.$inertia.form({
        _method: 'POST',
        name: null,
        education: [],
        hobbies: [],
      }),
      sampleCode: {
        html:
            '<t-input-group label="Label" labelFor="education">\n' +
            '    <!--It\'s output is objects in a array-->\n' +
            '    <t-input-repeatable\n' +
            '        value1name="School"\n' +
            '        value2name="Degree"\n' +
            '        id="education"\n' +
            '        v-model="form.education"\n' +
            '    />\n' +
            '</t-input-group>',
        js:
            'import TInputGroup from "@/Components/Form/TInputGroup";\n' +
            'import TInputRepeatable from "@/Components/Form/Inputs/TInputRepeatable";\n' +
            '\n' +
            'export default {\n' +
            '  name: "InputGroup",\n' +
            '  components: {TInputGroup, TInputRepeatable},\n' +
            '  }',
        table: {
          header: [
            {key: 'variable', label: 'Variable'},
            {key: 'type', label: 'Value Type'},
            {key: 'details', label: 'Details'},
          ],
          content: [
            {
              variable: 'value1name <br> value2name',
              type: 'String',
              details: 'You can set two different field type. For example value1name="School" and value2name="Graduation Year". It\'s output is objects in a array'
            },
          ]
        }
      }
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
