<template>
  <app-layout>
    <template #header>Simple Form Fields</template>
    <template #subHeader>Text, text area, select and a few things</template>
    <template #default>
      <t-form-content @reset="reset" @submitted="save">

        <t-form-section
            description="This information is subject to personal data protection law. - (Description)"
            title="Personal Infos - (Title)">

          <!-- Text -->
          <t-input-group class="col-span-12 md:col-span-6" label="Text" labelFor="text">
            <t-input-text id="text" v-model="form.text" placeholder="Text Input"/>
          </t-input-group>
          <!-- Password-->
          <t-input-group class="col-span-12 md:col-span-6" label="Password" labelFor="password">
            <t-input-text type="password" id="password" v-model="form.password" placeholder="Password"/>
          </t-input-group>
          <!-- Number-->
          <t-input-group class="col-span-12 md:col-span-6" label="Number" labelFor="number">
            <t-input-text type="number" id="number" v-model="form.password" placeholder="Number"/>
          </t-input-group>
          <!--Month-Browser Calendar-->
          <t-input-group class="col-span-12 md:col-span-6" label="Number" labelFor="month">
            <t-input-text type="month" id="month" v-model="form.month" placeholder="August 2021"/>
          </t-input-group>
          <!--Time-Browser Calendar-->
          <t-input-group class="col-span-12 md:col-span-6" label="Number" labelFor="time">
            <t-input-text type="time" id="time" v-model="form.time" placeholder="9:05"/>
          </t-input-group>
          <!--Check Box-->
          <t-input-group class="col-span-12 md:col-span-6" label="CheckBox" labelFor="checkbox">
            <div class="inline-flex h-10 items-center gap-2">
              <t-input-check-box input-value="1" label="Yes" color="white" :radius="0"/>
              <t-input-check-box input-value="2" label="No" color="blue" :radius="3"/>
              <t-input-check-box input-value="3" label="Maybe" color="red" :radius="5"/>
              <t-input-check-box input-value="4" color="indigo" :radius="8" :checked="true"/>
            </div>
          </t-input-group>
          <!-- Address -->
          <t-input-group class="col-span-12" label="Text Area" labelFor="address">
            <t-input-text-area
                id="address"
                v-model="form.address"
                :clear-button="true"
                :counter="true"
                :rows="3"
                placeholder="Full address"/>
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
import SshPre from 'simple-syntax-highlighter'
import 'simple-syntax-highlighter/dist/sshpre.css'
import TFormContent from "@/Components/Form/TFormContent";
import TFormSection from "@/Components/Form/TFormSection";
import TInputGroup from "@/Components/Form/TInputGroup";
import TInputText from "@/Components/Form/Inputs/TInputText";
import TInputTextArea from "@/Components/Form/Inputs/TInputTextArea";
import TInputCheckBox from "@/Components/Form/Inputs/TInputCheckBox";

export default {
  name: "SimpleField",
  components: {TInputCheckBox, TInputTextArea, TInputText, TInputGroup, TFormSection, TFormContent, AppLayout, SshPre},
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
            {variable: 'label-for', type: 'String', details: 'Label identity indicator, you should enter input\'s id'},
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
