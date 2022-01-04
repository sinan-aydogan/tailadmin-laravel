<template>
    <app-layout :actionButtons="true">
        <template #header>
            Form Structure
        </template>
        <template #action-buttons>
            <t-button :radius="3" color="yellow">
                <font-awesome-icon icon="angle-left"/>
                Back to Home
            </t-button>
            <t-button :radius="3" color="green">
                <font-awesome-icon icon="plus-circle"/>
                Add New
            </t-button>
        </template>
        <template #default>
            <t-form-content :reset-button="false" :submit-button="false" @reset="reset" @submitted="save">
                <!--Form Content Area Indicator-->
                <div class="p-2">
                    <t-badge color="green">Form Content Area</t-badge>
                </div>

                <t-form-section
                    description="This information is subject to personal data protection law. - (Description)"
                    title="Personal Infos - (Title)">
                    <!--Form Section Area Indicator-->
                    <div class="col-span-full">
                        <t-badge color="blue">Form Section Area</t-badge>
                    </div>

                    <!-- Name -->
                    <t-input-group
                        class="col-span-12 md:col-span-6"
                        label="Name"
                        labelFor="name"
                    >
                        <t-input-text id="name" v-model="form.name" placeholder="Business mail address"/>
                    </t-input-group>
                    <!-- Tax ID -->
                    <t-input-group
                        class="col-span-12 md:col-span-6"
                        label="Tax ID"
                        labelFor="tax_id"
                    >
                        <t-input-text id="tax_id" v-model="form.tax_id"/>
                    </t-input-group>
                    <!-- Address -->
                    <t-input-group class="col-span-12" label="Address" labelFor="address">
                        <t-input-text-area
                            id="address"
                            v-model="form.address"
                            :clear-button="true"
                            :counter="true"
                            :rows="3"
                            placeholder="Full address"
                        />
                    </t-input-group>
                </t-form-section>
                <!--Status Area Indicator-->
                <template #button-area>
                    <div class="flex flex-wrap col-span-12 justify-center md:justify-end space-x-2 mr-4 py-4">
                        <t-badge color="pink">Form Extra Button Area</t-badge>
                    </div>
                    <div class="border p-2 gap-2 inline-flex items-center">
                        <div class="flex flex-wrap gap-1 justify-center md:justify-end">
                            <t-badge color="gray">Form Status Area</t-badge>
                            or
                            <t-badge color="indigo">Default Form Buttons Area</t-badge>
                        </div>
                    </div>
                </template>
            </t-form-content>
            <ssh-pre :copy-button="true" label="Code" language="html">{{ sampleCode.html }}</ssh-pre>
            <ssh-pre :copy-button="true" label="JS" language="js">{{ sampleCode.js }}</ssh-pre>
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
import TBadge from "@/Components/Badge/TBadge";

export default {
    name: "FormStructure",
    components: {
        TBadge,
        TInputSelect,
        AppLayout,
        TButton,
        TFormSection,
        TFormContent,
        TInputGroup,
        TInputText,
        TInputTextArea,
        SshPre
    },
    data() {
        return {
            loading: false,
            form: this.$inertia.form({
                _method: 'POST',
                name: null,
                tax_id: null,
                email: null,
                phone: null,
                status: null,
                address: null,
            }),
            status: [
                {name: 'Passive', value: 0, icon: 'XIcon', class: 'w-5 h-5 text-red-500 mr-2'},
                {name: 'Active', value: 1, icon: 'Checked', class: 'w-5 h-5 text-green-500 mr-2'}
            ],
            sampleCode: {
                html:
                    '<!--Main container for your forms, don\'t forget 1 form 1 form content. : https://inertiajs.com/forms (processing)-->\n' +
                    '<t-form-content\n' +
                    '    @submitted="save" <!--Form Submit Method, It\'s releated with submit button-->\n' +
                    '    @reset="reset" <!--Form Inputs Reset method-->\n' +
                    '    :disabled="form.processing"  <!--The submit button will be disable while the submiting moment-->\n' +
                    '    :submit-button="true" <!--Show/Hide Submit Button-->\n' +
                    '    :reset-button="true" <!--Show/Hide Reset Button-->\n' +
                    '>\n' +
                    '    <!--Form sections: You can create a lot of form sections in a form content-->\n' +
                    '    <t-form-section\n' +
                    '        title="Personal Info"\n' +
                    '        description="This information is subject to personal data protection law.">\n' +
                    '        <!-- You should place all of the form inputs here-->\n' +
                    '        <!-- You can set the with with col-span-xx class: https://tailwindcss.com/docs/grid-column -->\n' +
                    '        <t-input-group label="Name" labelFor="name" class="col-span-12 md:col-span-6">\n' +
                    '            <t-input-text id="name"  v-model="form.name" placeholder="Business mail address"/>\n' +
                    '        </t-input-group>\n' +
                    '        <!-- Mobile: Full Width PC: Half Width-->\n' +
                    '        <t-input-group label="Tax ID" labelFor="tax_id" class="col-span-12 md:col-span-6">\n' +
                    '            <t-input-text id="tax_id"  v-model="form.tax_id"/>\n' +
                    '        </t-input-group>\n' +
                    '        <!-- Mobile: Full Width PC: Full Width -->\n' +
                    '        <t-input-group label="Address" labelFor="address" class="col-span-12">\n' +
                    '            <t-input-text-area id="address" v-model="form.address" :rows="3" :clear-button="true" :counter="true" placeholder="Full address"/>\n' +
                    '        </t-input-group>\n' +
                    '    </t-form-section>\n\n' +
                    '    <!--Optional | Form Extra Button Area: If you want to add the new buttons-->\n' +
                    '    <template #button-area>\n' +
                    '        <!--Button will be here-->\n' +
                    '        <t-button>\n' +
                    '            Button\n' +
                    '        </t-button>\n' +
                    '    </template>\n\n' +
                    '    <!--Optional | Form Status Area: For form submit success or loading messages. When this area active, the form default buttons will be hidden until form submit action finished: https://inertiajs.com/forms (recentlySuccessful)-->\n' +
                    '    <template #status>\n' +
                    '        <t-button v-if="form.recentlySuccessful" :radius="3" color="gray" disabled="disabled">\n' +
                    '            <t-check-icon class="w-5 h-5"/>\n' +
                    '            Saved\n' +
                    '        </t-button>\n' +
                    '    </template>\n\n' +
                    '</t-form-content>',
                js: 'import TFormSection from "@/Components/Form/TFormSection";\n' +
                    'import TFormContent from "@/Components/Form/TFormContent";\n' +
                    'import TInputGroup from "@/Components/Form/TInputGroup";\n' +
                    'import TInputText from "@/Components/Form/Inputs/TInputText";\n' +
                    'import TInputTextArea from "@/Components/Form/Inputs/TInputTextArea";\n' +
                    'export default {\n' +
                    '    name: "FormStructure",\n' +
                    '    components: {TFormSection,TFormContent,TInputGroup,TInputText,TInputTextArea},\n' +
                    '    data() {\n' +
                    '        return {\n' +
                    '            loading: false,\n' +
                    '            form: this.$inertia.form({\n' +
                    '                _method: \'POST\',\n' +
                    '                name : null,\n' +
                    '                tax_id : null,\n' +
                    '                address : null,\n' +
                    '            }),\n' +
                    '        };\n' +
                    '    },\n' +
                    '    methods: {\n' +
                    '        /*This is form fields reset method: https://inertiajs.com/forms*/\n' +
                    '        reset: function () {\n' +
                    '            this.form.name = null;\n' +
                    '            this.form.tax_id = null;\n' +
                    '            this.form.address = null;\n' +
                    '        },\n' +
                    '        /*This is form submit method: https://inertiajs.com/forms*/\n' +
                    '        save() {\n' +
                    '            this.form.post(route(\'user.store\'), {\n' +
                    '                errorBag: \'user\',\n' +
                    '                preserveScroll: true,\n' +
                    '            });\n' +
                    '            /*It is for form status area, you can show a form submit success or loading message when it is true*/\n' +
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
    }
}
</script>

<style scoped>

</style>



























