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
                        <t-input-inline-editable-repeatable id="job_requirements" v-model="form.job_requirements"
                                                            value1name="Hobby"/>
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
import TInputInlineEditableRepeatable from "@/Components/Form/Inputs/TInputInlineEditableRepeatable";


export default {
    name: "InlineRepeatableField",
    components: {
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
