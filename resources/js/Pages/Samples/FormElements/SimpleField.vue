<template>
    <app-layout>
        <template #header>Simple Form Fields</template>
        <template #subHeader>Text, text area, select and a few things</template>
        <template #default>
            <t-form-content @reset="reset" @submitted="save">

                <t-form-section
                    description="Please look at the menu for Select, Date and Repeatable Fields"
                    title="Form Inputs">

                    <!-- Text -->
                    <t-input-group class="col-span-12 lg:col-span-6" label="Text" labelFor="text">
                        <t-input-text id="text" v-model="form.text" placeholder="Text Input"/>
                    </t-input-group>
                    <!-- Password-->
                    <t-input-group class="col-span-12 lg:col-span-6" label="Password" labelFor="password">
                        <t-input-text id="password" v-model="form.password" placeholder="Password" type="password"/>
                    </t-input-group>
                    <!-- Number-->
                    <t-input-group class="col-span-12 lg:col-span-6" label="Number" labelFor="number">
                        <t-input-text id="number" v-model="form.number" placeholder="Number" type="number"/>
                    </t-input-group>
                    <!--Month-Browser Calendar-->
                    <t-input-group class="col-span-12 lg:col-span-6" label="Date-HTML5" labelFor="date">
                        <t-input-text id="date" v-model="form.date" placeholder="10.11.1938" type="date"/>
                    </t-input-group>
                    <!--Month-Browser Calendar-->
                    <t-input-group class="col-span-12 lg:col-span-6" label="Month-HTML5" labelFor="month">
                        <t-input-text id="month" v-model="form.month" placeholder="August 2021" type="month"/>
                    </t-input-group>
                    <!--Time-Browser Calendar-->
                    <t-input-group class="col-span-12 lg:col-span-6" label="Time-HTML5" labelFor="time">
                        <t-input-text id="time" v-model="form.time" placeholder="9:05" type="time"/>
                    </t-input-group>
                    <!--Color-Browser Picker-->
                    <t-input-group class="col-span-12 lg:col-span-6" label="Color-HTML5" labelFor="color">
                        <t-input-text id="color" v-model="form.color" type="color"/>
                    </t-input-group>
                    <!--File-->
                    <t-input-group class="col-span-12 lg:col-span-6" label="File" labelFor="file">
                        <t-input-file id="file" v-model="form.file" type="file"/>
                    </t-input-group>
                    <!--Check Box-->
                    <t-input-group class="col-span-12 lg:col-span-6" label="CheckBox" labelFor="checkbox">
                        <div class="inline-flex flex-wrap items-center gap-2">
                            <t-input-check-box
                                v-model="form.checkbox"
                                :disabled="true"
                                :radius="0"
                                color="white"
                                input-value="disabled"
                                label="Disabled"
                            />
                            <t-input-check-box
                                v-model="form.checkbox"
                                :radius="0"
                                color="white"
                                input-value="default1"
                                label="Default"
                            />


                            <t-input-check-box
                                v-model="form.checkbox"
                                :checked="true"
                                :radius="8"
                                color="gray"
                                input-value="default2"
                                label="Default"
                            />

                            <t-input-check-box
                                v-model="form.checkbox"
                                :radius="3"
                                color="green"
                                input-value="yes"
                                label="Yes"
                            >
                                <template #icon>
                                    <t-check-icon class="w-5 h-5"/>
                                </template>
                            </t-input-check-box>

                            <t-input-check-box
                                v-model="form.checkbox"
                                :radius="3"
                                color="red"
                                input-value="no"
                                label="No"
                            >
                                <template #icon>
                                    <t-x-icon class="w-5 h-5"/>
                                </template>
                            </t-input-check-box>

                            <t-input-check-box
                                v-model="form.checkbox"
                                :radius="5"
                                color="blue"
                                input-value="maybe"
                                label="Maybe"
                            >
                                <template #icon>
                                    ?
                                </template>
                            </t-input-check-box>
                        </div>
                    </t-input-group>
                    <!--Radio Button-->
                    <t-input-group class="col-span-12 lg:col-span-6" label="Radio Button" labelFor="radio">
                        <div class="inline-flex flex-wrap items-center gap-2">
                            <t-input-radio-button
                                v-model="form.radio"
                                :disabled="true"
                                :radius="0"
                                color="white"
                                input-value="disabled"
                                label="Disabled"
                            />
                            <t-input-radio-button
                                v-model="form.radio"
                                :radius="0"
                                color="white"
                                input-value="default1"
                                label="Default"
                            />


                            <t-input-radio-button
                                v-model="form.radio"
                                :checked="true"
                                :radius="8"
                                color="gray"
                                input-value="default2"
                                label="Default"
                            />

                            <t-input-radio-button
                                v-model="form.radio"
                                :radius="3"
                                color="green"
                                input-value="yes"
                                label="Yes"
                            >
                                <template #icon>
                                    <t-check-icon class="w-5 h-5"/>
                                </template>
                            </t-input-radio-button>

                            <t-input-radio-button
                                v-model="form.radio"
                                :radius="3"
                                color="red"
                                input-value="no"
                                label="No"
                            >
                                <template #icon>
                                    <t-x-icon class="w-5 h-5"/>
                                </template>
                            </t-input-radio-button>

                            <t-input-radio-button
                                v-model="form.radio"
                                :radius="5"
                                color="blue"
                                input-value="maybe"
                                label="Maybe"
                            >
                                <template #icon>
                                    ?
                                </template>
                            </t-input-radio-button>
                        </div>
                    </t-input-group>
                    <!-- Address -->
                    <t-input-group class="col-span-12" label="Text Area" labelFor="address">
                        <t-input-text-area
                            id="address"
                            v-model="form.textArea"
                            :clear-button="true"
                            :counter="true"
                            :rows="3"
                            placeholder="Full address"/>
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
import TInputTextArea from "@/Components/Form/Inputs/TInputTextArea";
import TInputCheckBox from "@/Components/Form/Inputs/TInputCheckBox";
import TInputFile from "@/Components/Form/Inputs/TInputFile";
import TInputRadioButton from "@/Components/Form/Inputs/TInputRadioButton";
import TCheckIcon from "@/Components/Icon/TCheckIcon";
import TXIcon from "@/Components/Icon/TXIcon";
import TBanIcon from "@/Components/Icon/TBanIcon";

export default {
    name: "SimpleField",
    components: {
        TBanIcon,
        TXIcon,
        TCheckIcon,
        TInputRadioButton,
        TInputFile,
        TInputCheckBox, TInputTextArea, TInputText, TInputGroup, TFormSection, TFormContent, AppLayout, SshPre
    },
    data() {
        return {
            loading: false,
            form: this.$inertia.form({
                _method: 'POST',
                text: null,
                password: null,
                number: null,
                date: null,
                month: null,
                time: null,
                color: null,
                file: null,
                checkbox: [],
                radio: null,
                textArea: null,
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
            this.form.text = null;
            this.form.password = null;
            this.form.number = null;
            this.form.date = null;
            this.form.month = null;
            this.form.time = null;
            this.form.color = null;
            this.form.file = null;
            this.form.checkbox = [];
            this.form.radio = null;
            this.form.textArea = null;
        },
        save() {
            this.form.post(route('user.store'), {
                errorBag: 'user',
                preserveScroll: true,
            });
            this.loading = true;
        }
    }
}
</script>

<style scoped>

</style>
