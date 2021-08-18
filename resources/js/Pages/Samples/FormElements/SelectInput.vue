<template>
  <app-layout :actionButtons="true">
    <template #header>
      Select Input Component
    </template>
    <template #action-buttons>
      <TButton :radius="3" color="solid-yellow">
        <font-awesome-icon icon="angle-left"/>
        Back to Home
      </TButton>
      <TButton :radius="3" color="solid-green">
        <font-awesome-icon icon="plus-circle"/>
        Add New
      </TButton>
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
          <!-- Status -->
          <t-input-group class="col-span-12 md:col-span-6" label="Status" labelFor="status">
            <t-input-select
                v-model="form.status"
                :clear-button="true"
                :options="status"
                optionsLabelKey="name"
                optionsValueKey="value"
                place-holder="Select a status"
            >
              <template #label="{ props }">
                <span v-if="props.value===1" class="flex flex-row items-center gap-1">
                  <t-check-circle-icon  class="w-5 h-5 text-green-500 "/> {{ props.name }}
                </span>
                <span v-if="props.value===0" class="flex flex-row items-center gap-1">
                  <t-x-circle-icon class="w-5 h-5 text-red-500 items-center"/> {{ props.name }}
                </span>
              </template>
            </t-input-select>
          </t-input-group>
        </t-form-section>
      </t-form-content> <!--Sample Codes-->
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
              <span class="whitespace-nowrap tablet:whitespace-normal" v-html="props.details">
              </span>
        </template>
      </t-table>
    </template>
  </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import TButton from "@/Components/Button/TButton";
import TFormSection from "@/Components/Form/TFormSection";
import TFormContent from "@/Components/Form/TFormContent";
import SshPre from 'simple-syntax-highlighter'
import 'simple-syntax-highlighter/dist/sshpre.css'
import TInputGroup from "@/Components/Form/TInputGroup";
import TInputSelect from "@/Components/Form/Inputs/TInputSelect";
import TTable from "@/Components/Table/TTable";
import TCheckCircleIcon from "@/Components/Icon/TCheckCircleIcon";
import TXCircleIcon from "@/Components/Icon/TXCircleIcon";

export default {
  name: "SelectInput",
  components: {
    TXCircleIcon,
    TCheckCircleIcon,
    TTable,
    TInputSelect,
    AppLayout,
    TButton,
    TFormSection,
    TFormContent,
    TInputGroup,
    SshPre
  },
  props: ['users'],
  data() {
    return {
      loading: false,
      form: this.$inertia.form({
        _method: 'POST',
        user_id: null,
        status: 1,
      }),
      status: [
        {name: 'Passive', value: 0, icon: 'XIcon', class: 'w-5 h-5 text-red-500 mr-2'},
        {name: 'Active', value: 1, icon: 'Checked', class: 'w-5 h-5 text-green-500 mr-2'}
      ],
      sampleCode: {
        html:
            '<t-input-group label="Manager - Searchable" labelFor="user_id">\n' +
            '    <t-input-select\n' +
            '        :options="users"\n' +
            '        optionsLabelKey="name"\n' +
            '        optionsValueKey="id"\n' +
            '        v-model="form.user_id"\n' +
            '        :clear-button="true"\n' +
            '        :search="true"\n' +
            '        :disabled="false"\n' +
            '        :radius="3"\n' +
            '        align="left"\n' +
            '        place-holder="Select"\n' +
            '        search-place-holder="Search..."\n' +
            '    >\n' +
            '        <!--If you want to rich styled options, you can use to this template. You can use any data key after props attribute between the template tags.-->\n' +
            '        <template #label="{ props }">\n' +
            '            <span v-if="props.value===1" class="flex flex-row items-center gap-1">\n' +
            '              <t-check-circle-icon  class="w-5 h-5 text-green-500 "/> {{ props.name }}\n' +
            '            </span>\n' +
            '            <span v-if="props.value===0" class="flex flex-row items-center gap-1">\n' +
            '              <t-x-circle-icon class="w-5 h-5 text-red-500 items-center"/> {{ props.name }}\n' +
            '            </span>\n' +
            '        </template>\n' +
            '    </t-input-select>\n' +
            '</t-input-group>',
        js: 'import TInputGroup from "@/Components/Form/TInputGroup";\n' +
            'import TInputSelect from "@/Components/Form/Inputs/TInputSelect";\n' +
            'export default {\n' +
            '    name: "FormStructure",\n' +
            '    components: {TInputGroup, TInputSelect},\n' +
            '    data() {\n' +
            '        return {\n' +
            '            loading: false,\n' +
            '            /*Select Options List*/\n' +
            '            status: [\n' +
            '                    {name: \'Passive\', value: 0, icon: \'XIcon\', class: \'w-5 h-5 text-red-500 mr-2\'},\n' +
            '                    {name: \'Active\', value: 1, icon: \'Checked\', class: \'w-5 h-5 text-green-500 mr-2\'}\n' +
            '                  ],\n' +
            '            form: this.$inertia.form({\n' +
            '                _method: \'POST\',\n' +
            '                user_id : null,\n' +
            '                status : null, /*You can set the default value here*/\n' +
            '            }),\n' +
            '        };\n' +
            '    },\n' +
            '    methods: {\n' +
            '        reset: function () {\n' +
            '            this.form.user_id = null;\n' +
            '        },\n' +
            '        save() {\n' +
            '            this.form.post(route(\'user.store\'), {\n' +
            '                errorBag: \'user\',\n' +
            '                preserveScroll: true,\n' +
            '            });\n' +
            '            this.loading = true;\n' +
            '        }\n' +
            '    },\n' +
            '}\n',
        table: {
          header: [
            {
              key: "variable",
              label: "Variable"
            },
            {
              key: "type",
              label: "Value Type"
            },
            {
              key: "details",
              label: "Details"
            }
          ],
          content: [
            {
              variable: ":options",
              type: "Object or Array",
              details: "Your select options data must be defined like a object or an array"
            },
            {
              variable: "optionsLabelKey",
              type: "String",
              details: "This is the showing label your users for selecting, You should enter a key from your options data."
            },
            {
              variable: "optionsValueKey",
              type: "String",
              details: "This is the value key of the option for the unique selection. You should enter a key from your options data, like: id, value"
            },
            {
              variable: ":clear-button",
              type: "Boolean",
              details: "It shows a clear button at the end <br><b>Options:</b> true, false <br><b>Default:</b> false"
            },
            {
              variable: ":search",
              type: "Boolean",
              details: "It shows a search box <br><b>Options:</b> true, false <br><b>Default:</b> false"
            },
            {
              variable: ":disabled",
              type: "Boolean",
              details: "It makes disabled-inactive the input <br><b>Options:</b> true, false <br><b>Default:</b> false"
            },
            {
              variable: ":radius",
              type: "Number",
              details: "<b>Options:</b> none, 1, 2, 3, 4, 5, 6, 7, 8"
            },
            {
              variable: "align",
              type: "String",
              details: "Content direction <br><b>Options:</b> left, center, right<br><b>Default:</b> left"
            },
            {
              variable: "place-holder",
              type: "String",
              details: "The placeholder text for input"
            },
            {
              variable: "search-place-holder",
              type: "String",
              details: "The placeholder text for search input"
            },
            {
              variable: "value",
              type: "String",
              details: "Everything you want, this is your unique output value"
            },
          ]
        }
      },

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



























