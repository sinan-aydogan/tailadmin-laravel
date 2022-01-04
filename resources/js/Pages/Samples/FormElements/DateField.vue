<template>
  <app-layout>
    <template #header>Date Input Field</template>
    <template #subHeader>Starting, birth, fired, register date or time</template>
    <template #default>
      <t-form-content @reset="reset" @submitted="save">
        <t-form-section
            description="This information is subject to personal data protection law."
            title="Personal Infos">
          <!-- Name -->
          <t-input-group class="col-span-12" label="Name" labelFor="name">
            <t-input-text id="name" v-model="form.name" placeholder="Business mail address"/>
          </t-input-group>
          <!-- Birthday -->
          <t-input-group class="col-span-12" label="Birthday (Only Date)" labelFor="tax_id">
            <t-input-date v-model="form.birth_date"/>
          </t-input-group>
          <!-- Flying Date-Time -->
          <t-input-group class="col-span-12" label="Flying Date-Time" labelFor="flying_time">
            <t-input-date v-model="form.flying_time" mode="dateTime"/>
          </t-input-group>
          <!-- Meeting Time A-->
          <t-input-group class="col-span-12" label="Meeting Time (Hour:Minute A)" labelFor="meeting_time">
            <t-input-date v-model="form.meeting_time" mode="time"/>
          </t-input-group>
          <!-- Meeting Time 24Hr-->
          <t-input-group class="col-span-12" label="Meeting Time (Hour:Minute 24Hr)" labelFor="meeting_time">
            <t-input-date v-model="form.meeting_time" :is24hr="true" mode="time"/>
          </t-input-group>
          <!-- Meeting Duration-->
          <t-input-group class="col-span-12" label="Meeting Duration (Date Range)" labelFor="meeting_time">
            <t-input-date v-model="form.meeting_duration" :is-range="true"/>
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
import TInputDate from "@/Components/Form/Inputs/TInputDate";
import TTable from "@/Components/Table/TTable";

export default {
  name: "DateField",
  components: {TTable, TInputDate, TInputText, TInputGroup, TFormSection, TFormContent, AppLayout, SshPre},
  data() {
    return {
      form: this.$inertia.form({
        _method: 'POST',
        name: null,
        birth_date: null,
        flying_time: null,
        meeting_time: null,
        meeting_duration: null
      }),
      sampleCode: {
        html:
            '<t-input-group\n' +
            '    class="col-span-12"\n' +
            '    label="Meeting Duration (Date Range)"\n' +
            '    labelFor="meeting_time"\n' +
            '>\n' +
            '    <t-input-date\n' +
            '        v-model="form.meeting_duration"\n' +
            '        mode="dateTime"\n' +
            '        mask="YYYY-MM-DD h:mm A"\n' +
            '        :is24hr="true"\n' +
            '        :is-range="true"\n' +
            '    />\n' +
            '</t-input-group>',
        js:
            'import TInputDate from "@/Components/Form/Inputs/TInputDate";\n' +
            '\n' +
            'export default {\n' +
            '    name: "DateInput",\n' +
            '    components: {TInputDate},\n' +
            '    data() {\n' +
            '        return {\n' +
            '            form: this.$inertia.form({\n' +
            '                _method: \'POST\',\n' +
            '                meeting_duration: null\n' +
            '    }),\n' +
            '    methods: {\n' +
            '        reset: function () {\n' +
            '            this.form.meeting_duration = null;\n' +
            '        },\n' +
            '        save() {\n' +
            '            this.form.post(route(\'user.store\'), {\n' +
            '                errorBag: \'user\',\n' +
            '                preserveScroll: true,\n' +
            '            });\n' +
            '            this.loading = true;\n' +
            '        }\n' +
            '    },\n' +
            '}',
        table: {
          header: [
            {key: 'variable', label: 'Variable'},
            {key: 'type', label: 'Value Type'},
            {key: 'details', label: 'Details'},
          ],
          content: [
            {
              variable: 'mode',
              type: 'String',
              details: '<b>Options:</b> date, dateTime, time <br><b>Default:</b> date'
            },
            {
              variable: 'mask',
              type: 'String',
              details: 'It\'s showing format. You can look for all formats at <a href="https://vcalendar.io/format-parse-dates.html" target="_blank">https://vcalendar.io/format-parse-dates</a><br><b>Default:</b> DD-MM-YYYY'
            },
            {
              variable: ':is24hr',
              type: 'Boolean',
              details: 'It\'s time format. If it\'s true, the time format will be 24hr. <br><b>Options:</b> true, false<br><b>Default:</b> false'
            },
            {
              variable: ':is-range',
              type: 'Boolean',
              details: 'If you want to show a picker between two different date, you should set to true this.<br>The output is object like that <br>{<br>start:\'Fri Jul 23 2021 17:25:56\',<br>end:\'Fri Jul 28 2021 17:25:56\'<br>}<br><b>Options:</b> true, false<br><b>Default:</b> false'
            }
          ]
        }
      }
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
