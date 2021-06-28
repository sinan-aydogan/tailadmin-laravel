<template>
    <app-layout :actionButtons="true">
        <template #header>
            Form Structure
        </template>
        <template #action-buttons>
            <TButton color="yellow" :radius="3"><font-awesome-icon icon="angle-left"/>Back to Home</TButton>
            <TButton color="green" :radius="3"><font-awesome-icon icon="plus-circle"/>Add New</TButton>
        </template>
        <template #default>
            <t-form-content @submitted="save" @reset="reset">
                <t-form-section
                    title="Personal Infos"
                    description="This information is subject to personal data protection law.">
                    <!-- Name -->
                    <t-input-group label="Name" labelFor="name" class="col-span-12 md:col-span-6">
                        <t-input-text id="name"  v-model="form.name" placeholder="Business mail address"/>
                    </t-input-group>
                    <!-- Tax ID -->
                    <t-input-group label="Tax ID" labelFor="tax_id" class="col-span-12 md:col-span-6">
                        <t-input-text id="tax_id"  v-model="form.tax_id"/>
                    </t-input-group>
                    <!-- Phone -->
                    <t-input-group label="Phone" labelFor="phone" class="col-span-12 md:col-span-6">
                        <t-input-text id="phone" name="phone" v-model="form.phone"  mask="+99(999) 999-9999" />
                    </t-input-group>
                    <!-- Email -->
                    <t-input-group label="Email" labelFor="email" class="col-span-12 md:col-span-6">
                        <t-input-text id="email"  v-model="form.email"/>
                    </t-input-group>
                    <!-- Status -->
                    <t-input-group label="Status" labelFor="status" class="col-span-12 md:col-span-6">
                        <t-input-select v-model="form.status" :clear-button="true">
                            <t-input-select-item value="0"><font-awesome-icon icon="check" class="text-green-500 mr-2"/>Active</t-input-select-item>
                            <t-input-select-item value="1"><font-awesome-icon icon="minus-circle" class="text-red-500 mr-2"/>Passive</t-input-select-item>
                        </t-input-select>
                    </t-input-group>
                    <!-- Address -->
                    <t-input-group label="Address" labelFor="address" class="col-span-12">
                        <t-input-text-area id="address" v-model="form.address" :rows="3" :clear-button="true" :counter="true" placeholder="Full address"/>
                    </t-input-group>
                </t-form-section>
            </t-form-content>
          <ssh-pre :copy-button="true" language="html" label="Code">{{sampleCode.html}}</ssh-pre>
          <ssh-pre :copy-button="true" language="js" label="JS">{{sampleCode.js}}</ssh-pre>
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
import SshPre from 'simple-syntax-highlighter'
import 'simple-syntax-highlighter/dist/sshpre.css'
import TInputSelect from "@/Components/Form/Inputs/TInputSelect";
import TInputSelectItem from "@/Components/Form/Inputs/TInputSelectItem";
export default {
    name: "FormStructure",
    components: {
        TInputSelectItem,
        TInputSelect,
        AppLayout,TButton,TFormSection,TFormContent,TInputGroup,TInputText,TInputTextArea,SshPre},
    data() {
        return {
            loading: false,
            form: this.$inertia.form({
                _method: 'POST',
                name : null,
                tax_id : null,
                email : null,
                phone : null,
                status : null,
                address : null,
            }),
            status: [
                {name: 'Passive', value: 0, icon: 'XIcon',class: 'w-5 h-5 text-red-500 mr-2'},
                {name: 'Active', value: 1, icon: 'Checked',class: 'w-5 h-5 text-green-500 mr-2'}
            ],
          sampleCode: {
            html:'<t-form-content @submitted="save" @reset="reset">\n' +
                 '    <t-form-section\n' +
                '        title="Personal Infos"\n' +
                '        description="This information is subject to personal data protection law.">\n' +
                '        <!-- Name -->\n' +
                '        <t-input-group label="Name" labelFor="name" class="col-span-12 md:col-span-6">\n' +
                '            <t-input-text id="name"  v-model="form.name" placeholder="Business mail address"/>\n' +
                '        </t-input-group>\n' +
                '        <!-- Tax ID -->\n' +
                '        <t-input-group label="Tax ID" labelFor="tax_id" class="col-span-12 md:col-span-6">\n' +
                '            <t-input-text id="tax_id"  v-model="form.tax_id"/>\n' +
                '        </t-input-group>\n' +
                '        <!-- Phone -->\n' +
                '        <t-input-group label="Phone" labelFor="phone" class="col-span-12 md:col-span-6">\n' +
                '            <t-input-text id="phone" name="phone" v-model="form.phone"  mask="+99(999) 999-9999" />\n' +
                '        </t-input-group>\n' +
                '        <!-- Email -->\n' +
                '        <t-input-group label="Email" labelFor="email" class="col-span-12 md:col-span-6">\n' +
                '            <t-input-text id="email"  v-model="form.email"/>\n' +
                '        </t-input-group>\n' +
                '        <!-- Status -->\n' +
                '        <t-input-group label="Status" labelFor="status" class="col-span-12 md:col-span-6">\n' +
                '            <t-input-dropdown v-model="form.status" :clear-button="true">\n' +
                '                <t-input-dropdown-item value="0"><font-awesome-icon icon="check" class="text-green-500 mr-2"/>Active</t-input-dropdown-item>\n' +
                '                <t-input-dropdown-item value="1"><font-awesome-icon icon="minus-circle" class="text-red-500 mr-2"/>Passive</t-input-dropdown-item>\n' +
                '            </t-input-dropdown>\n' +
                '        </t-input-group>\n' +
                '        <!-- Address -->\n' +
                '        <t-input-group label="Address" labelFor="address" class="col-span-12">\n' +
                '            <t-input-text-area id="address" v-model="form.address" :rows="3" :clear-button="true" :counter="true" placeholder="Full address"/>\n' +
                '        </t-input-group>\n' +
                '    </t-form-section>\n' +
                '</t-form-content>',
            js: 'import TFormSection from "@/Components/Form/TFormSection";\n' +
                'import TFormContent from "@/Components/Form/TFormContent";\n' +
                'import TInputGroup from "@/Components/Form/TInputGroup";\n' +
                'import TInputText from "@/Components/Form/Inputs/TInputText";\n' +
                'import TInputDropdown from "@/Components/Form/Inputs/TInputDropdown";\n' +
                'import TInputDropdownItem from "@/Components/Form/Inputs/TInputDropdownItem";\n' +
                'import TInputTextArea from "@/Components/Form/Inputs/TInputTextArea";\n' +
                'export default {\n' +
                '    name: "FormStructure",\n' +
                '    components: {TFormSection,TFormContent,TInputGroup,TInputText,TInputDropdown,TInputDropdownItem,TInputTextArea},\n' +
                '    data() {\n' +
                '        return {\n' +
                '            loading: false,\n' +
                '            form: this.$inertia.form({\n' +
                '                _method: \'POST\',\n' +
                '                name : null,\n' +
                '                tax_id : null,\n' +
                '                email : null,\n' +
                '                phone : null,\n' +
                '                status : null,\n' +
                '                address : null,\n' +
                '            }),\n' +
                '            status: [\n' +
                '                {name: \'Passive\', value: 0, icon: \'XIcon\',class: \'w-5 h-5 text-red-500 mr-2\'},\n' +
                '                {name: \'Active\', value: 1, icon: \'Checked\',class: \'w-5 h-5 text-green-500 mr-2\'}\n' +
                '            ],\n' +
                '        };\n' +
                '    },\n' +
                '    methods: {\n' +
                '        reset: function () {\n' +
                '            this.form.name = null;\n' +
                '            this.form.tax_id = null;\n' +
                '            this.form.email = null;\n' +
                '            this.form.phone = null;\n' +
                '            this.form.status = null;\n' +
                '            this.form.address = null;\n' +
                '        },\n' +
                '        save() {\n' +
                '            this.form.post(route(\'customer.store\'), {\n' +
                '                errorBag: \'customer\',\n' +
                '                preserveScroll: true,\n' +
                '            });\n' +
                '            this.loading = true;\n' +
                '        }\n' +
                '    },\n' +
                '}\n'
          },
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
    },
}
</script>

<style scoped>

</style>



























