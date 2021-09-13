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
                    <t-input-group class="col-span-12 lg:col-span-6" label="Disabled text input with icon" labelFor="text">
                        <t-input-text id="text" v-model="form.text" :disabled="true" placeholder="Text Input, This input disabled">
                            <template #icon>
                                <t-bell-icon class="w-6 h-6"/>
                            </template>
                        </t-input-text>
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
                    <!--Single File-->
                    <t-input-group class="col-span-12 lg:col-span-6" label="Singe File" labelFor="singleFile">
                        <t-input-file :preview="true" id="singleFile" v-model="form.singleFile"/>
                    </t-input-group>
                    <!--Multi File-->
                    <t-input-group class="col-span-12 lg:col-span-6" label="Multi File" labelFor="multiFile">
                        <t-input-file :preview="true" id="multiFile" v-model="form.multiFile" :multiple="true"/>
                    </t-input-group>
                    <!--Check Box-->
                    <t-input-group class="col-span-12 lg:col-span-6" label="CheckBox" labelFor="checkbox">
                        <div class="inline-flex flex-wrap items-center gap-2">
                            <t-input-check-box
                                v-model="form.checkbox"
                                :disabled="true"
                                :radius="0"
                                color="solid-white"
                                input-value="disabled"
                                label="Disabled"
                            />
                            <t-input-check-box
                                v-model="form.checkbox"
                                :radius="0"
                                color="solid-white"
                                input-value="default1"
                                label="Default"
                            />


                            <t-input-check-box
                                v-model="form.checkbox"
                                :checked="true"
                                :radius="8"
                                color="solid-gray"
                                input-value="default2"
                                label="Default"
                            />

                            <t-input-check-box
                                v-model="form.checkbox"
                                :radius="3"
                                color="solid-green"
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
                                color="solid-red"
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
                                color="solid-blue"
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
                                color="solid-white"
                                input-value="disabled"
                                label="Disabled"
                            />
                            <t-input-radio-button
                                v-model="form.radio"
                                :radius="0"
                                color="solid-white"
                                input-value="default1"
                                label="Default"
                            />


                            <t-input-radio-button
                                v-model="form.radio"
                                :checked="true"
                                :radius="8"
                                color="solid-gray"
                                input-value="default2"
                                label="Default"
                            />

                            <t-input-radio-button
                                v-model="form.radio"
                                :radius="3"
                                color="solid-green"
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
                                color="solid-red"
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
                                color="solid-blue"
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
            <!--Sample Codes-->
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
import SshPre from 'simple-syntax-highlighter'
import 'simple-syntax-highlighter/dist/sshpre.css'
import TFormContent from "@/Components/Form/TFormContent";
import TFormSection from "@/Components/Form/TFormSection";
import TInputGroup from "@/Components/Form/TInputGroup";
import TInputText from "@/Components/Form/Inputs/TInputText";
import TInputFile from "@/Components/Form/Inputs/TInputFile";
import TInputCheckBox from "@/Components/Form/Inputs/TInputCheckBox";
import TInputRadioButton from "@/Components/Form/Inputs/TInputRadioButton";
import TInputTextArea from "@/Components/Form/Inputs/TInputTextArea";
import TCheckIcon from "@/Components/Icon/TCheckIcon";
import TXIcon from "@/Components/Icon/TXIcon";
import TBanIcon from "@/Components/Icon/TBanIcon";
import TTable from "@/Components/Table/TTable";
import TBellIcon from "@/Components/Icon/TBellIcon";

export default {
    name: "SimpleField",
    components: {
        TBellIcon,
        TTable,
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
                singleFile: null,
                multiFile: [],
                checkbox: [],
                radio: null,
                textArea: null,
            }),
            sampleCode: {
                html:
                    '<!-- Text -->\n' +
                    '<t-input-group class="col-span-12 lg:col-span-6" label="Text - with icon" labelFor="text">\n' +
                    '  <t-input-text id="text" v-model="form.text" placeholder="Text Input">\n' +
                    '    <!--You can use the icon with text input-->\n' +
                    '    <template #icon>\n' +
                    '      <t-bell-icon class="w-6 h-6"/>\n' +
                    '    </template>\n' +
                    '  </t-input-text>\n' +
                    '</t-input-group>\n\n' +
                    '<!-- Password-->\n' +
                    '<t-input-group class="col-span-12 lg:col-span-6" label="Password" labelFor="password">\n' +
                    '    <t-input-text id="password" v-model="form.password" placeholder="Password" type="password"/>\n' +
                    '</t-input-group>\n\n' +
                    '<!-- Number: Output is Number-->\n' +
                    '<t-input-group class="col-span-12 lg:col-span-6" label="Number" labelFor="number">\n' +
                    '    <t-input-text id="number" v-model="form.number" placeholder="Number" type="number"/>\n' +
                    '</t-input-group>\n\n' +
                    '<!--Month-Browser Calendar-->\n' +
                    '<t-input-group class="col-span-12 lg:col-span-6" label="Date-HTML5" labelFor="date">\n' +
                    '    <t-input-text id="date" v-model="form.date" placeholder="10.11.1938" type="date"/>\n' +
                    '</t-input-group>\n\n' +
                    '<!--Month-Browser Calendar-->\n' +
                    '<t-input-group class="col-span-12 lg:col-span-6" label="Month-HTML5" labelFor="month">\n' +
                    '    <t-input-text id="month" v-model="form.month" placeholder="August 2021" type="month"/>\n' +
                    '</t-input-group>\n\n' +
                    '<!--Time-Browser Calendar-->\n' +
                    '<t-input-group class="col-span-12 lg:col-span-6" label="Time-HTML5" labelFor="time">\n' +
                    '    <t-input-text id="time" v-model="form.time" placeholder="9:05" type="time"/>\n' +
                    '</t-input-group>\n\n' +
                    '<!--Color-Browser Picker: Output is like #571e1e-->\n' +
                    '<t-input-group class="col-span-12 lg:col-span-6" label="Color-HTML5" labelFor="color">\n' +
                    '    <t-input-text id="color" v-model="form.color" type="color"/>\n' +
                    '</t-input-group>\n' +
                    '<!--Single File-->\n' +
                    '<t-input-group class="col-span-12 lg:col-span-6" label="File" labelFor="singleFile">\n' +
                    '    <t-input-file :preview="true" id="singleFile" v-model="form.singeFile"/>\n' +
                    '</t-input-group>\n\n' +
                    '<!--Multi File-->\n' +
                    '<t-input-group class="col-span-12 lg:col-span-6" label="File" labelFor="multiFile">\n' +
                    '    <t-input-file :preview="true" :multiple="true" id="multiFile" v-model="form.multiFile"/>\n' +
                    '</t-input-group>\n\n' +
                    '<!--Check Box: Output is Array, You should create a array state for this field. All of them\'s v-model should be same -->\n' +
                    '<t-input-group class="col-span-12 lg:col-span-6" label="CheckBox" labelFor="checkbox">\n' +
                    '    <div class="inline-flex flex-wrap items-center gap-2">\n' +
                    '        <t-input-check-box\n' +
                    '            v-model="form.checkbox"\n' +
                    '            :disabled="true"\n' +
                    '            :radius="0"\n' +
                    '            color="solid-white"\n' +
                    '            input-value="disabled"\n' +
                    '            label="Disabled"\n' +
                    '        />\n' +
                    '        <t-input-check-box\n' +
                    '            v-model="form.checkbox"\n' +
                    '            :radius="0"\n' +
                    '            color="solid-white"\n' +
                    '            input-value="default1"\n' +
                    '            label="Default"\n' +
                    '        />\n' +
                    '\n' +
                    '\n' +
                    '        <t-input-check-box\n' +
                    '            v-model="form.checkbox"\n' +
                    '            :checked="true"\n' +
                    '            :radius="8"\n' +
                    '            color="solid-gray"\n' +
                    '            input-value="default2"\n' +
                    '            label="Default"\n' +
                    '        />\n' +
                    '\n' +
                    '        <t-input-check-box\n' +
                    '            v-model="form.checkbox"\n' +
                    '            :radius="3"\n' +
                    '            color="solid-green"\n' +
                    '            input-value="yes"\n' +
                    '            label="Yes"\n' +
                    '        >\n' +
                    '            <!--You can use your icon component or Font Awesome Icon-->\n' +
                    '            <template #icon>\n' +
                    '                <t-check-icon class="w-5 h-5"/>\n' +
                    '            </template>\n' +
                    '        </t-input-check-box>\n' +
                    '\n' +
                    '        <t-input-check-box\n' +
                    '            v-model="form.checkbox"\n' +
                    '            :radius="3"\n' +
                    '            color="solid-red"\n' +
                    '            input-value="no"\n' +
                    '            label="No"\n' +
                    '        >\n' +
                    '            <!--You can use your icon component or Font Awesome Icon-->\n' +
                    '            <template #icon>\n' +
                    '                <t-x-icon class="w-5 h-5"/>\n' +
                    '            </template>\n' +
                    '        </t-input-check-box>\n' +
                    '\n' +
                    '        <t-input-check-box\n' +
                    '            v-model="form.checkbox"\n' +
                    '            :radius="5"\n' +
                    '            color="solid-blue"\n' +
                    '            input-value="maybe"\n' +
                    '            label="Maybe"\n' +
                    '        >\n' +
                    '            <!--You can use single character instead of icon-->\n' +
                    '            <template #icon>\n' +
                    '                ?\n' +
                    '            </template>\n' +
                    '        </t-input-check-box>\n' +
                    '    </div>\n' +
                    '</t-input-group>\n\n' +
                    '<!--Radio Button: Output is string. All of them\'s v-model should be same-->\n' +
                    '<t-input-group class="col-span-12 lg:col-span-6" label="Radio Button" labelFor="radio">\n' +
                    '    <div class="inline-flex flex-wrap items-center gap-2">\n' +
                    '        <t-input-radio-button\n' +
                    '            v-model="form.radio"\n' +
                    '            :disabled="true"\n' +
                    '            :radius="0"\n' +
                    '            color="solid-white"\n' +
                    '            input-value="disabled"\n' +
                    '            label="Disabled"\n' +
                    '        />\n' +
                    '        <t-input-radio-button\n' +
                    '            v-model="form.radio"\n' +
                    '            :radius="0"\n' +
                    '            color="solid-white"\n' +
                    '            input-value="default1"\n' +
                    '            label="Default"\n' +
                    '        />\n' +
                    '\n' +
                    '\n' +
                    '        <t-input-radio-button\n' +
                    '            v-model="form.radio"\n' +
                    '            :checked="true"\n' +
                    '            :radius="8"\n' +
                    '            color="solid-gray"\n' +
                    '            input-value="default2"\n' +
                    '            label="Default"\n' +
                    '        />\n' +
                    '\n' +
                    '        <t-input-radio-button\n' +
                    '            v-model="form.radio"\n' +
                    '            :radius="3"\n' +
                    '            color="solid-green"\n' +
                    '            input-value="yes"\n' +
                    '            label="Yes"\n' +
                    '        >\n' +
                    '            <!--You can use your icon component or Font Awesome Icon-->\n' +
                    '            <template #icon>\n' +
                    '                <t-check-icon class="w-5 h-5"/>\n' +
                    '            </template>\n' +
                    '        </t-input-radio-button>\n' +
                    '\n' +
                    '        <t-input-radio-button\n' +
                    '            v-model="form.radio"\n' +
                    '            :radius="3"\n' +
                    '            color="solid-red"\n' +
                    '            input-value="no"\n' +
                    '            label="No"\n' +
                    '        >\n' +
                    '            <!--You can use your icon component or Font Awesome Icon-->\n' +
                    '            <template #icon>\n' +
                    '                <t-x-icon class="w-5 h-5"/>\n' +
                    '            </template>\n' +
                    '        </t-input-radio-button>\n' +
                    '\n' +
                    '        <t-input-radio-button\n' +
                    '            v-model="form.radio"\n' +
                    '            :radius="5"\n' +
                    '            color="solid-blue"\n' +
                    '            input-value="maybe"\n' +
                    '            label="Maybe"\n' +
                    '        >\n' +
                    '            <!--You can use single character instead of icon-->\n' +
                    '            <template #icon>\n' +
                    '                ?\n' +
                    '            </template>\n' +
                    '        </t-input-radio-button>\n' +
                    '    </div>\n' +
                    '</t-input-group>\n\n' +
                    '<!-- Address -->\n' +
                    '<t-input-group class="col-span-12" label="Text Area" labelFor="address">\n' +
                    '    <t-input-text-area\n' +
                    '        id="address"\n' +
                    '        v-model="form.textArea"\n' +
                    '        :clear-button="true"\n' +
                    '        :counter="true"\n' +
                    '        :rows="3"\n' +
                    '        placeholder="Full address"/>\n' +
                    '</t-input-group>',
                js:
                    'import TInputGroup from "@/Components/Form/TInputGroup";\n' +
                    'import TInputText from "@/Components/Form/Inputs/TInputText";\n' +
                    'import TInputFile from "@/Components/Form/Inputs/TInputFile";\n' +
                    'import TInputCheckBox from "@/Components/Form/Inputs/TInputCheckBox";\n' +
                    'import TInputRadioButton from "@/Components/Form/Inputs/TInputRadioButton";\n' +
                    'import TInputTextArea from "@/Components/Form/Inputs/TInputTextArea";\n' +
                    'import TBellIcon from "@/Components/Icon/TBellIcon";\n' +
                    '\n' +
                    'export default {\n' +
                    '  name: "InputGroup",\n' +
                    '  components: {TInputGroup, TInputText, TInputFile, TInputCheckBox, TInputRadioButton, TInputTextArea, TBellIcon},\n' +
                    '  },' +
                    '  data() {\n' +
                    '    return {\n' +
                    '      loading: false,\n' +
                    '      form: this.$inertia.form({\n' +
                    '        _method: \'POST\',\n' +
                    '        text: null,\n' +
                    '        password: null,\n' +
                    '        number: null,\n' +
                    '        date: null,\n' +
                    '        month: null,\n' +
                    '        time: null,\n' +
                    '        color: null,\n' +
                    '        file: null,\n' +
                    '        checkbox: [],\n' +
                    '        radio: null,\n' +
                    '        textArea: null,\n' +
                    '      }),\n' +
                    '    }\n' +
                    '  }\n',
                table: {
                    header: [
                        {key: 'variable', label: 'Variable'},
                        {key: 'type', label: 'Value Type'},
                        {key: 'input', label: 'Input'},
                        {key: 'details', label: 'Details'},
                    ],
                    content: [
                        {
                            variable: ":radius",
                            type: "Number",
                            input: '<span class="whitespace-nowrap">All Inputs</span>',
                            details: "<b>Options:</b> none, 1, 2, 3, 4, 5, 6, 7, 8"
                        },
                        {
                            variable: "place-holder",
                            type: "String",
                            input: '<span class="whitespace-nowrap">All Inputs</span>',
                            details: "It\'s placeholder. Be careful with HTML5 inputs"
                        },
                        {
                            variable: ":disabled",
                            type: "Boolean",
                            input: '<span class="whitespace-nowrap">All Inputs</span>',
                            details: "It makes disabled-inactive the input <br><b>Options:</b> true, false <br><b>Default:</b> false"
                        },
                        {
                            variable: 'type',
                            type: 'String',
                            input: '<span class="whitespace-nowrap">t-input-text</span>',
                            details: '<b>Options:</b> <a href="https://www.w3schools.com/html/html_form_input_types.asp" target="_blank">https://www.w3schools.com/html/html_form_input_types.asp</a><br><b>Default:</b> text'
                        },
                        {
                            variable: "color",
                            type: "String",
                            input: '<span class="whitespace-nowrap">t-input-check-box<br>t-input-radio-button</span>',
                            details: "Your input color theme.<br><b>Options:</b> red, blue, green, yellow, indigo, pink, purple, gray, black, white"
                        },
                        {
                            variable: "input-value",
                            type: "String",
                            input: '<span class="whitespace-nowrap">t-input-check-box<br>t-input-radio-button</span>',
                            details: "It\'s your input\'s output value."
                        },
                        {
                            variable: "label",
                            type: "String",
                            input: '<span class="whitespace-nowrap">t-input-check-box<br>t-input-radio-button</span>',
                            details: "It\'s your input\'s label for end-user."
                        },

                        {
                            variable: ':clear-button',
                            type: 'Boolean',
                            input: '<span class="whitespace-nowrap">t-input-text-area</span>',
                            details: 'It shows a clear button for delete the input content<br><b>Options: true, false</a><br><b>Default:</b> false'
                        },

                        {
                            variable: ':counter',
                            type: 'Boolean',
                            input: '<span class="whitespace-nowrap">t-input-text-area</span>',
                            details: 'It shows a character counter<br><b>Options: true, false</a><br><b>Default:</b> false'
                        },

                        {
                            variable: ':rows',
                            type: 'Number',
                            input: '<span class="whitespace-nowrap">t-input-text-area</span>',
                            details: 'The input\'s rows count<b>Options: from 1 to 10</a><br><b>Default:</b> 3'
                        },

                        {
                            variable: ':preview',
                            type: 'Boolean',
                            input: '<span class="whitespace-nowrap">t-input-file</span>',
                            details: 'It shows the file preview. If you use to multiple options, it shows both icon and preview<b>Options: true, false</a><br><b>Default:</b> false'
                        },

                        {
                            variable: ':multiple',
                            type: 'Boolean',
                            input: '<span class="whitespace-nowrap">t-input-file</span>',
                            details: 'Adds multi-file selection feature, v-model state had been a array like that "multiFile: []" <b>Options: true, false</a><br><b>Default:</b> false'
                        },
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
