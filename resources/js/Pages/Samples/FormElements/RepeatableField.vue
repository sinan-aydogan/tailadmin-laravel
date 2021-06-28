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
                        <t-input-repeatable value1name="Hobby" id="hobbies" v-model="form.hobbies"/>
                    </t-input-group>
                    <!-- Education Info -->
                    <t-input-group class="col-span-12" label="Education Info (2 fields)" labelFor="tax_id">
                        <t-input-repeatable value1name="School" value2name="Degree" id="education" v-model="form.education"/>
                    </t-input-group>
                </t-form-section>
            </t-form-content>
            <ssh-pre :copy-button="true" label="Code" language="html">{{ sampleCode.html }}</ssh-pre>
            <ssh-pre :copy-button="true" label="JS" language="js">{{ sampleCode.js }}</ssh-pre>
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


export default {
    name: "RepeatableField",
    components: {TInputRepeatable, TInputText, TInputGroup, TFormSection, TFormContent, AppLayout, SshPre},
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
                    '<t-input-group label="Text Label" label-for="name4" sub-label="Cash only" sub-label-color="yellow" error="Please enter numerical value">\n' +
                    '    <t-input-text id="name4" placeholder="I\'m a placeholder text" value="Hi, I\'m a prefilled text"/>\n' +
                    '</t-input-group>',
                js:
                    'import TInputGroup from "@/Components/Form/TInputGroup";\n' +
                    'import TInputText from "@/Components/Form/Inputs/TInputText";\n' +
                    '\n' +
                    'export default {\n' +
                    '  name: "InputGroup",\n' +
                    '  components: {SshPre,GridSection, TInputText, TInputGroup, ContentCard, AppLayout},\n' +
                    '  }',
                table: {
                    header: [
                        {key: 'variable', label: 'Variable'},
                        {key: 'type', label: 'Value Type'},
                        {key: 'details', label: 'Details'},
                    ],
                    content: [
                        {variable: 'label', type: 'String', details: 'Your input label'},
                        {
                            variable: 'label-for',
                            type: 'String',
                            details: 'Label identity indicator, you should enter input\'s id'
                        },
                        {
                            variable: 'sub-label',
                            type: 'String',
                            details: 'If you want to show a second and small label, you can use'
                        },
                        {
                            variable: 'sub-label-color',
                            type: 'String',
                            details: 'You can change sub label color <br><b>Options:</b> red, blue, green, yellow, indigo, pink, gray'
                        },
                        {
                            variable: 'error',
                            type: 'String',
                            details: 'Every time it\'s text color is red, If It has a value, it shows'
                        }
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
