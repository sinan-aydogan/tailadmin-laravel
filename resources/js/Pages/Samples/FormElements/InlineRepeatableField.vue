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
import TInputInlineEditableRepeatable from "@/Components/Form/Inputs/TInputInlineEditableRepeatable";
import TTable from "@/Components/Table/TTable";


export default {
  name: "InlineRepeatableField",
  components: {
    TTable,
    TInputInlineEditableRepeatable, TInputText, TInputGroup, TFormSection, TFormContent, AppLayout, SshPre
  },
  data() {
    return {
      form: this.$inertia.form({
        _method: 'POST',
        name: null,
        job_requirements: [],
      }),
      sampleCode: {
        html:
            '<t-input-group label="Job Requirements" labelFor="job_requirements">\n' +
            '    <!--It\'s output is a array-->    ' +
            '    <t-input-inline-editable-repeatable\n' +
            '        id="job_requirements"\n' +
            '        v-model="form.job_requirements"\n' +
            '        place-holder-text="Requirement"\n' +
            '    />\n' +
            '</t-input-group>',
        js:
            'import TInputGroup from "@/Components/Form/TInputGroup";\n' +
            'import TInputInlineEditableRepeatable from "@/Components/Form/Inputs/TInputInlineEditableRepeatable";\n' +
            '\n' +
            'export default {\n' +
            '  name: "InputGroup",\n' +
            '  components: {TInputGroup, TInputInlineEditableRepeatable},\n' +
            '  }',
        table: {
          header: [
            {key: 'variable', label: 'Variable'},
            {key: 'type', label: 'Value Type'},
            {key: 'details', label: 'Details'},
          ],
          content: [
            {
              variable: 'place-holder-text',
              type: 'String',
              details: 'It\'s placeholder text for input.'
            },
          ]
        }
      }
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
