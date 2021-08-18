<template>
  <app-layout :actionButtons="true">
    <template #header>
      Multi Select Input Component
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
            <t-input-multi-select
                v-model="form.managers"
                :clear-button="true"
                :search="true"
                place-holder="Select"
                search-place-holder="Search..."
                :options="users"
                options-label-key="name"
                options-value-key="id"
            />
          </t-input-group>
          <!-- T-Shirt Size -->
          <t-input-group class="col-span-12 md:col-span-6" label="T-Shirt Size" labelFor="size">
            <t-input-multi-select
                v-model="form.size"
                :clear-button="true"
                :options="sizes"
                options-label-key="name"
                options-value-key="value"
                place-holder="Select"
                search-place-holder="Search..."
            >
              <template #label="{ props }">
                  <span :class="[props.value === 'sm' ? 'text-red-500' : 'text-blue-500']">
                    <b>{{ props.name }}</b>
                  </span>
              </template>
            </t-input-multi-select>
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
import TInputMultiSelect from "@/Components/Form/Inputs/TInputMultiSelect";

export default {
  name: "MultiSelectInput",
  components: {
    TInputMultiSelect,
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
        managers: [],
        size: [],
      }),
      sizes: [
        {name: 'Small', value: 'sm'},
        {name: 'Medium', value: 'm'},
        {name: 'Large', value: 'lg'}
      ],
      sampleCode: {
        html:
            '<t-input-group label="Manager - Searchable" labelFor="user_id">\n' +
            '    <t-input-multi-select\n' +
            '        v-model="form.user_id"\n' +
            '        :clear-button="true"\n' +
            '        :search="true"\n' +
            '        :disabled="false"\n' +
            '        :radius="3"\n' +
            '        align="left"\n' +
            '        place-holder="Select"\n' +
            '        search-place-holder="Search..."\n' +
            '    >\n' +
            '        <!--If you work with static values, you can clone this component-->\n' +
            '        <t-input-select-item\n' +
            '            v-for="(item,index) in users"\n' +
            '            :key="index"\n' +
            '            :value="item.id"\n' +
            '        >\n' +
            '            <!--You are free here, you can use to image, bold, colorful, flag here-->\n' +
            '            <span>\n' +
            '                {{ item.name }}\n' +
            '            </span>\n' +
            '        </t-input-select-item>\n' +
            '    </t-input-multi-select>\n' +
            '</t-input-group>',
        js: 'import TInputGroup from "@/Components/Form/TInputGroup";\n' +
            'import TInputMultiSelect from "@/Components/Form/Inputs/TInputMultiSelect";\n' +
            'import TInputSelectItem from "@/Components/Form/Inputs/TInputSelectItem";\n\n' +
            'export default {\n' +
            '    name: "FormStructure",\n' +
            '    components: {TInputGroup, TInputSelect, TInputSelectItem},\n' +
            '    data() {\n' +
            '        return {\n' +
            '            loading: false,\n' +
            '            form: this.$inertia.form({\n' +
            '                _method: \'POST\',\n' +
            '                user_id : [],\n' +
            '            }),\n' +
            '        };\n' +
            '    },\n' +
            '    methods: {\n' +
            '        reset: function () {\n' +
            '            this.form.user_id = [];\n' +
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
      this.form.size = null;
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



























