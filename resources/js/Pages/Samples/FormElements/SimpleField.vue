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
          <t-input-group
            class="col-span-12 lg:col-span-6"
            label-for="text"
          >
            <t-input-text
              id="text"
              placeholder="Disabled Text Input Placeholder"
              disabled
            >
            </t-input-text>
          </t-input-group>
          <!-- Text & Icon -->
          <t-input-group
            class="col-span-12 lg:col-span-6"
            label="Input field with icon slot"
            label-for="text"
          >
            <t-input-text
              id="text-icon"
              placeholder="Text Input"
            >
              <template #icon>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
              </template>
            </t-input-text>
          </t-input-group>
          <!-- Text & Prepend and Append Feature -->
          <t-input-group
            class="col-span-12 lg:col-span-6"
            label="Prepend and append feature"
            label-for="text"
          >
            <t-input-text
              id="text-prepend-append"
              placeholder="Text Input"
              prepend="Expense"
            >
              <!--Depend-->
              <template #append>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </template>
            </t-input-text>
          </t-input-group>
          <!-- Text & Icon & Prepend and Append -->
          <t-input-group
            class="col-span-12 lg:col-span-6"
            label="Icon, prepend and append feature"
            label-for="text-icon-prepend-append"
          >
            <t-input-text
              id="text"
              v-model="form.text"
              placeholder="Text Input"
              prepend="Sallary"
              append="TRY"
            >
              <!--Icon-->
              <template #icon>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
              </template>
            </t-input-text>
          </t-input-group>
          <!-- Text input with select feature by outside -->
          <t-input-group
            class="col-span-12 lg:col-span-6"
            label="Text input with select feature by outside"
            label-for="text"
          >
            <t-input-text
              id="text-select"
              type="text"
              select-position="right"
              placeholder="Simple Text Input Placeholder"
              v-model:selectValue="selectTextInput.framework.select"
              v-model="selectTextInput.framework.text"
              :options="selectTextInput.framework.options"
            >
            </t-input-text>
          </t-input-group>
            <!-- Text input with start select feature and append by inside -->
            <t-input-group
                class="col-span-12 lg:col-span-6"
                label="Text input with start select feature and append by inside"
                label-for="text-icon-prepend-append"
            >
                <t-input-text
                    id="text"
                    placeholder="Version"
                    select-type="inside"
                    prepend="Framework"
                    select-position="left"
                    v-model:selectValue="selectTextInput.framework.select"
                    v-model="selectTextInput.framework.text"
                    :options="selectTextInput.framework.options"
                />
            </t-input-group>
          <!-- Text input with select feature by inside -->
          <t-input-group
            class="col-span-12 lg:col-span-6"
            label="Text input with select feature by inside"
            label-for="text"
          >
            <t-input-text
              id="text-select"
              type="text"
              select-type="inside"
              select-position="right"
              placeholder="tailadmin.dev"
              prepend="https://"
              v-model:selectValue="selectTextInput.link.select"
              v-model="selectTextInput.link.text"
              :options="selectTextInput.link.options"
            >
            </t-input-text>
          </t-input-group>
          <!-- Disabled Combined Text Input -->
          <t-input-group
            class="col-span-12 lg:col-span-6"
            label="Text input with select feature by inside"
            label-for="text"
          >
            <t-input-text
              id="text-select"
              type="text"
              select-type="inside"
              select-position="right"
              placeholder="tailadmin.dev"
              prepend="https://"
              v-model:selectValue="selectTextInput.link.select"
              v-model="selectTextInput.link.text"
              :options="selectTextInput.link.options"
              disableds
            >
            </t-input-text>
          </t-input-group>
          <!-- Password-->
          <t-input-group class="col-span-12 lg:col-span-6" label="Password" label-for="password">
            <t-input-text id="password" v-model="form.password" placeholder="Password" type="password" />
          </t-input-group>
          <!-- Number-->
          <t-input-group class="col-span-12 lg:col-span-6" label="Number" label-for="number">
            <t-input-text id="number" v-model="form.number" placeholder="Number" type="number" />
          </t-input-group>
          <!--Month-Browser Calendar-->
          <t-input-group class="col-span-12 lg:col-span-6" label="Date-HTML5" label-for="date">
            <t-input-text id="date" v-model="form.date" placeholder="10.11.1938" type="date" />
          </t-input-group>
          <!--Month-Browser Calendar-->
          <t-input-group class="col-span-12 lg:col-span-6" label="Month-HTML5" label-for="month">
            <t-input-text id="month" v-model="form.month" placeholder="August 2021" type="month" />
          </t-input-group>
          <!--Time-Browser Calendar-->
          <t-input-group class="col-span-12 lg:col-span-6" label="Time-HTML5" label-for="time">
            <t-input-text id="time" v-model="form.time" placeholder="9:05" type="time" />
          </t-input-group>
          <!--Color-Browser Picker-->
          <t-input-group class="col-span-12 lg:col-span-6" label="Color-HTML5" label-for="color">
            <t-input-text id="color" v-model="form.color" type="color" />
          </t-input-group>
          <!--Single File-->
          <t-input-group class="col-span-12 lg:col-span-6" label="Singe File" label-for="singleFile">
            <t-input-file :preview="true" id="singleFile" v-model="form.singleFile" />
          </t-input-group>
          <!--Multi File-->
          <t-input-group class="col-span-12 lg:col-span-6" label="Multi File" label-for="multiFile">
            <t-input-file :preview="true" id="multiFile" v-model="form.multiFile" :multiple="true" />
          </t-input-group>
          <!--Check Box-->
          <t-input-group class="col-span-12 lg:col-span-6" label="CheckBox" label-for="checkbox">
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
                  <t-check-icon class="w-5 h-5" />
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
                  <t-x-icon class="w-5 h-5" />
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
          <t-input-group class="col-span-12 lg:col-span-6" label="Radio Button" label-for="radio">
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
                  <t-check-icon class="w-5 h-5" />
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
                  <t-x-icon class="w-5 h-5" />
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
          <t-input-group class="col-span-12" label="Text Area" label-for="address">
            <t-input-text-area
              id="address"
              v-model="form.textArea"
              :clear-button="true"
              :counter="true"
              :rows="3"
              placeholder="Full address" />
          </t-input-group>
        </t-form-section>
      </t-form-content>
    </template>
  </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
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
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "SimpleField",
  components: {
    TXIcon,
    TCheckIcon,
    TInputRadioButton,
    TInputFile,
    TInputCheckBox, TInputTextArea, TInputText, TInputGroup, TFormSection, TFormContent, AppLayout
  },
  setup() {
    const selectTextInput = ref({
      framework: {
        select: 'laravel',
        text: "",
        options:
          [
            { key: "laravel", label: "Laravel" },
            { key: "tailwind", label: "Taildwindcss" },
            { key: "vuejs", label: "VueJS" }
          ]
      },
      link: {
        select: 'dev',
        text: "",
        options:
          [
            { key: "dev", label: ".dev" },
            { key: "com", label: ".com" },
            { key: "net", label: ".net" }
          ]
      }
    });

    return { selectTextInput };
  },
  data() {
    return {
      loading: false,
      form: this.$inertia.form({
        _method: "POST",
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
        textArea: null
      })
    };
  },
  methods: {
    reset: function() {
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
      this.form.post(route("user.store"), {
        errorBag: "user",
        preserveScroll: true
      });
      this.loading = true;
    }
  }
});
</script>

<style scoped>

</style>
