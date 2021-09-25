<template>
    <app-layout>
        <template #header>Modals</template>
        <template #subHeader>Pretty and sweet windows</template>
        <template #default>
            <grid-section :col-tablet="3">
                <t-content-card :width="2">
                    <template #title>Click to the buttons for show modal windows</template>
                    <template #subTitle>10 solid, 8 light and limitless gradient color options with radius</template>
                    <template #content>
                        <div class="flex flex-wrap space-x-2 items-center justify-center">
                            <!--Simple Modal-->
                            <t-button color="solid-white" type="button" @click.native="showModal1 = !showModal1">Show Simple
                                Modal
                            </t-button>
                            <t-modal :radius="3" :show="showModal1" color="solid-white" @close="showModal1 = $event">
                                <template #header>Modal Header</template>
                                <template #content>
                                    Modal content area. This modal's color is "<b>solid-white</b>"
                                </template>
                                <template #footer-right>
                                    <t-button :radius="3" color="solid-white" @click.native="showModal1 = false">
                                        Close
                                    </t-button>
                                    <t-button :radius="3" color="solid-green">
                                        <font-awesome-icon icon="save"/>
                                        Save
                                    </t-button>
                                </template>
                            </t-modal>
                            <!--Footer Location-->
                            <t-button color="light-blue" type="button" @click.native="showModal2 = !showModal2">Footer
                                Buttons
                            </t-button>
                            <t-modal :radius="3" :show="showModal2" color="light-blue" @close="showModal2 = $event">
                                <template #header>Modal Header</template>
                                <template #content>
                                    Modal content area. This modal's color is "<b>light-blue</b>"
                                </template>
                                <template #footer-left>
                                    <t-button :radius="3" color="solid-red" size="sm" @click.native="showModal = false">Left
                                        Button
                                    </t-button>
                                </template>
                                <template #footer-center>
                                    <t-button :radius="3" color="solid-pink" size="sm" @click.native="showModal = false">
                                        Center Button
                                    </t-button>
                                </template>
                                <template #footer-right>
                                    <t-button :radius="3" color="solid-yellow" size="sm">Right Button</t-button>
                                </template>
                            </t-modal>
                            <!--Notification-->
                            <t-button color="solid-red" type="button" @click.native="showModal3 = !showModal3">Notification (Gradient)
                            </t-button>
                            <t-modal :radius="3" :show="showModal3" color="gradient-red-to-pink"
                                     @close="showModal3 = $event">
                                <template #content>
                                    <div class="flex flex-col justify-center items-center gap-2 whitespace-normal">
                                        <font-awesome-icon class="my-2" icon="trash" size="2x"/>
                                        <b>This item will be deleted</b>
                                        <span>Are you sure make it ?</span>
                                        <span>This modal's color is "<b>gradient-red-to-pink</b>"</span>
                                    </div>
                                </template>
                                <template #footer-left>
                                    <t-button :radius="3" color="solid-white" @click.native="showModal3 = false">
                                        Cancel
                                    </t-button>
                                </template>
                                <template #footer-right>
                                    <t-button :radius="3" color="light-red">
                                        <font-awesome-icon icon="trash"/>
                                        Delete it
                                    </t-button>
                                </template>
                            </t-modal>
                            <!--Form-->
                            <t-button color="solid-indigo" type="button" @click.native="showModal4 = !showModal4">Form Modal
                            </t-button>
                            <t-modal :radius="3" :show="showModal4" color="solid-white"
                                     @close="showModal4 = $event">
                                <template #header>User Registration</template>
                                <template #content>
                                    <!-- Name -->
                                    <t-input-group class="col-span-12 md:col-span-6 mb-2" label="Name" labelFor="name">
                                        <t-input-text id="name" v-model="form.name" placeholder="User name"/>
                                    </t-input-group>
                                    <t-input-group class="col-span-12 md:col-span-6" label="Email" labelFor="name">
                                        <t-input-text id="email" v-model="form.email" placeholder="Business mail address"/>
                                    </t-input-group>
                                </template>
                                <template #footer-left>
                                    <t-button :radius="3" color="solid-white" @click.native="showModal4 = false">
                                        Cancel
                                    </t-button>
                                </template>
                                <template #footer-right>
                                    <t-button :radius="3" color="light-green">
                                        <font-awesome-icon icon="check"/>
                                        Register
                                    </t-button>
                                </template>
                            </t-modal>
                        </div>
                    </template>
                </t-content-card>
                <t-content-card :width="1">
                    <template #title>Tips</template>
                    <template #content>
                        <t-list color="solid-white" :radius="3">
                            <t-list-item>
                                <template #default>Footer area has 3 location for buttons (left, center and right)</template>
                            </t-list-item>
                            <t-list-item>
                                <template #default>ESC key is close the modal</template>
                            </t-list-item>
                        </t-list>
                    </template>
                </t-content-card>
            </grid-section>
            <!--Sample Codes-->
            <ssh-pre :copy-button="true" label="Code" language="html">{{ sampleCode.html }}</ssh-pre>
            <ssh-pre :copy-button="true" label="JS" language="js">{{ sampleCode.js }}</ssh-pre>
            <!--Variables Table-->
            <t-table
                :content="sampleCode.table.content"
                :header="sampleCode.table.header"
                class="mt-5"
                color="solid-blue"
                :searchable="['variable','details']"
            >
              <template #details="{props}">
              <span class="whitespace-nowrap tablet:whitespace-normal" v-html="props.details">
              </span>
              </template>
            </t-table>
        </template>
    </app-layout>
</template>

<script>
/*Layout*/
import AppLayout from "@/Layouts/AppLayout";
/*Component*/
import GridSection from "@/Layouts/GridSection";
import TTable from "@/Components/Table/TTable";
import TContentCard from "@/Components/Card/TContentCard";
import TModal from "@/Components/Modal/TModal";
import TButton from "@/Components/Button/TButton";
import TInputGroup from "@/Components/Form/TInputGroup";
import TInputText from "@/Components/Form/Inputs/TInputText";
import TList from "@/Components/List/TList";
import TListItem from "@/Components/List/TListItem";
/*Codehighlighter*/
import SshPre from "simple-syntax-highlighter";
import "simple-syntax-highlighter/dist/sshpre.css";

export default {
    name: "Modal",
    components: {
        TListItem,
        TList,
        AppLayout, GridSection, SshPre, TButton, TContentCard, TModal, TTable, TInputGroup, TInputText
    },
    data() {
        return {
            sampleCode: {
                html:
                    '<t-modal :radius="3" :show="showModal" color="solid-white" @close="showModal = $event">\n\n' +
                    '    <!--Modal Header-->\n'+
                    '    <template #header>User Registration</template>\n\n' +
                    '    <!--Modal Content-->\n'+
                    '    <template #content>\n\n' +
                    '        <!--Everything is here: text, component, form, alert, icons-->\n' +
                    '        <!--Form Input: Name-->\n' +
                    '        <t-input-group class="col-span-12 md:col-span-6" label="Name" labelFor="name">\n' +
                    '            <t-input-text id="name" v-model="form.name" placeholder="User name"/>\n' +
                    '        </t-input-group>\n' +
                    '        <!--Form Input: Email-->\n' +
                    '        <t-input-group class="col-span-12 md:col-span-6" label="Email" labelFor="name">\n' +
                    '            <t-input-text id="email" v-model="form.email" placeholder="Business mail address"/>\n' +
                    '        </t-input-group>\n\n' +
                    '    </template>\n\n' +
                    '    <!--Footer Left Button Area-->\n' +
                    '    <template #footer-left>\n' +
                    '        <t-button :radius="3" color="solid-red" size="sm" @click.native="showModal = false">Left\n' +
                    '            Button\n' +
                    '        </t-button>\n' +
                    '    </template>\n\n' +
                    '    <!--Footer Center Button Area-->\n' +
                    '    <template #footer-center>\n' +
                    '        <t-button :radius="3" color="solid-pink" size="sm" @click.native="showModal = false">\n' +
                    '            Center Button\n' +
                    '        </t-button>\n' +
                    '    </template>\n\n' +
                    '    <!--Footer Right Button Area-->\n' +
                    '    <template #footer-right>\n' +
                    '        <t-button :radius="3" color="solid-yellow" size="sm">Right Button</t-button>\n' +
                    '    </template>\n\n' +
                    '</t-modal>',
                js:
                    'import TModal from "@/Components/Modal/TModal";\n' +
                    'import TButton from "@/Components/Button/TButton";\n' +
                    'import TInputGroup from "@/Components/Form/TInputGroup";\n' +
                    'import TInputText from "@/Components/Form/Inputs/TInputText";' +
                    '\n' +
                    'export default {\n' +
                    '  name: "Modal",\n' +
                    '  components: {TModal, TButton, TInputGroup, TInputText},\n' +
                    '  }',
                table: {
                    header: [
                        {key: 'variable', label: 'Variable'},
                        {key: 'type', label: 'Value Type'},
                        {key: 'details', label: 'Details'},
                    ],
                    content: [
                        {variable: 'show', type: 'Boolean', details: 'You should define a variable in the data and connect to this data'},
                      {
                        variable: 'color',
                        type: 'String',
                        details: "Your modal color theme.<br><b>Options Solid:</b> solid-red, solid-blue, solid-green, solid-yellow, solid-indigo, solid-pink, solid-purple, solid-gray, solid-black, solid-white,<br>" +
                            "<b>Options Light:</b> light-red, light-blue, light-green, light-yellow, light-indigo, light-pink, light-purple, light-gray<br" +
                            "><b>Options Gradient:</b> gradient-red-to-pink. Red is first color and Pink is second color. You change red end pink with red, blue, green, yellow, indigo, pink, purple and gray)"
                      },
                      {
                        variable: 'gradient-direction',
                        type: 'String',
                        details: "If you use to the gradient color, you can select gradient's direction. <br><b>Options:</b> r, l, b, t, tl, bl, tr, br<br>" +
                            "<b>Default:</b> r<br>(Means: l: left, r: right, b: bottom, t: top)"
                      },
                        {
                            variable: ":radius",
                            type: "Number",
                            details: "<b>Options:</b> none, 1, 2, 3, 4, 5, 6, 7, 8"
                        },
                        {
                            variable: '@close="showModal = $event"',
                            type: 'Connector',
                            details: 'You should change "showModal" with created new data variables for "show variable". You should add to t-modal element.'
                        },
                        {
                            variable: '@click.native="showModal = false"',
                            type: 'Connector',
                            details: 'You should change "showModal" with created new data variables for "show variable". This is for close button event. You can add any buttons and element.'
                        }
                    ]
                }
            },
            showModal1: false,
            showModal2: false,
            showModal3: false,
            showModal4: false,
            form: this.$inertia.form({
                _method: 'POST',
                name: null,
                email: null,
            }),
        }
    },
    methods: {
        reset: function () {
            this.form.name = null;
            this.form.email = null;
        },
    }
}
</script>

<style scoped>

</style>
