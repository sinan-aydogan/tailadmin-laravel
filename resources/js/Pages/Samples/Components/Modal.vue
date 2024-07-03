<template>
  <app-layout>
    <template #header>Modals</template>
    <template #subHeader>Pretty and sweet windows</template>
    <template #default>
      <t-content-card>
        <template #title>Click to the buttons for show modal windows</template>
        <template #subTitle>10 solid, 8 light and limitless gradient color options with radius</template>
        <grid-section :col-tablet="2" :col-laptop="4">

          <!--Simple Modal-->
          <t-button
              color="white"
              type="button"
              @click="showModal1 = !showModal1"
          >
            Show Simple Modal
          </t-button>
          <!--With Timer-->
          <t-button
              design="light"
              color="blue"
              type="button"
              @click="showModal2 = !showModal2"
          >
            With Timer
          </t-button>
          <!--With ESC & Out-Side Click-->

          <t-button
              color="red"
              type="button"
              @click="showModal3 = !showModal3"
          >
            With ESC & Out-Side Click
          </t-button>

          <!--With Predefined Icons-->

          <t-button
              color="indigo"
              type="button"
              @click="showModal4 = !showModal4"
          >
            With Predefined Icons
          </t-button>

        </grid-section>
        <!--Simple-->
        <teleport to="body">
          <t-modal
              title="Registration"
              sub-title="Your register success"
              content="User infos registered to database<br> Please check your mailbox for apply message"
              :dark-mode="selectedDarkMode"
              :bg-color="selectedBgColor"
              :design="selectedDesign"
              :color="selectedColor"
              icon="success"
              :radius="3"
              v-model="showModal1"
          >
            <template #action-buttons>

              <!--Show-->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
              <!--Edit-->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
              </svg>
              <!--Settings-->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>

            </template>
            <template #header>Modal Header</template>
            <template #content>
              <grid-section :col="2">
                <t-input-group label="Box Design">
                  <t-input-select :options="designOptions" v-model="selectedDesign"/>
                </t-input-group>
                <t-input-group label="Box Color">
                  <t-input-select :options="colorOptions" v-model="selectedColor"/>
                </t-input-group>
                <t-input-group label="Dark Mode">
                  <t-input-select :options="darkModeOptions" v-model="selectedDarkMode"/>
                </t-input-group>
                <t-input-group label="Background Color">
                  <t-input-select :options="colorOptions" v-model="selectedBgColor"/>
                </t-input-group>
              </grid-section>
            </template>
            <template #footer-right>
              <t-button :radius="3" color="white" @click.native="showModal1 = false">
                Close
              </t-button>
              <t-button :radius="3" color="green">
                <icon icon="save"/>
                Save
              </t-button>
            </template>
          </t-modal>
        </teleport>
        <!--With Timer-->
        <teleport to="body">
          <t-modal
              title="Timed Modal"
              sub-title="Countdown: 3 seconds"
              content="This modal will close after 3 seconds"
              :timer="3000"
              :radius="3"
              out-side-click
              v-model="showModal2"
              bg-color="blue"
          >
          </t-modal>
        </teleport>
        <!--With ESC & Out-Side Click-->
        <teleport to="body">
          <t-modal
              v-model="showModal3"
              :radius="3"
              design="elegant"
              color="red"
              title="ESC + Outside Click"
              sub-title="Different ways for close"
              content="You can click to outside of this modal or <br>press to ESC key on the keyboard"
              out-side-click
              esc
          >
            <template #footer-left>
              <t-button :radius="3" color="white" @click.native="showModal3 = false">
                Cancel
              </t-button>
            </template>
            <template #footer-right>
              <t-button :radius="3" design="light" color="red">
                <icon icon="trash"/>
                Delete it
              </t-button>
            </template>
          </t-modal>
        </teleport>
        <!--With Predefined Icon-->
        <teleport to="body">
          <t-modal
              v-model="showModal4"
              color="white"
              bg-color="yellow"
              :radius="3"
              title="Please wait"
              sub-title="Your test will be ready after 30 minutes"
          >
            <template #icon>
              <svg class="w-20 h-20 text-yellow-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 120.88 122.88">
                <title>30-seconds</title>
                <path
                    d="M60.22,113.81a4.54,4.54,0,0,1,0,9.07A60.23,60.23,0,1,1,89.71,10.16l-1.26-3.3a5.06,5.06,0,1,1,9.45-3.6l5,13.15a5,5,0,0,1,.32,1.55,5,5,0,0,1-3.51,5.64L86.27,27.72a5,5,0,0,1-2.92-9.65l1.28-.39a50.55,50.55,0,0,0-10.19-4.19A51.17,51.17,0,1,0,60.22,113.81ZM42.78,91.21c-.6,0-1.18,0-1.75-.06s-1.12-.09-1.67-.16-1.08-.15-1.58-.24-1-.2-1.46-.33V86.26c.61,0,1.27.1,2,.14l2.17.08,2,0A6.82,6.82,0,0,0,44,86.37a1.89,1.89,0,0,0,.9-.43,1.13,1.13,0,0,0,.29-.81V84.8a1,1,0,0,0-.42-.89,1.61,1.61,0,0,0-1-.3H42.35a7.17,7.17,0,0,1-4.76-1.38Q36,80.85,36,77.61v-.89a5.45,5.45,0,0,1,1.78-4.45,7.89,7.89,0,0,1,5.14-1.47,22.61,22.61,0,0,1,2.39.12c.75.08,1.45.18,2.11.3s1.24.24,1.77.36v4.17c-.83-.08-1.76-.13-2.8-.18s-2-.07-2.82-.07a7.88,7.88,0,0,0-1.36.11,1.76,1.76,0,0,0-.92.43,1.31,1.31,0,0,0-.32.95v.27a1.25,1.25,0,0,0,.43,1,2.11,2.11,0,0,0,1.33.35h1.78a6.38,6.38,0,0,1,3.15.71,4.67,4.67,0,0,1,1.89,2,6,6,0,0,1,.64,2.8V85a7.08,7.08,0,0,1-.9,3.92,4.34,4.34,0,0,1-2.54,1.82,14.15,14.15,0,0,1-3.94.48Zm16.15,0a10.92,10.92,0,0,1-1.56-.14,5.41,5.41,0,0,1-1.75-.59,3.72,3.72,0,0,1-1.42-1.42,5.17,5.17,0,0,1-.57-2.64V75.93a5.63,5.63,0,0,1,.46-2.43A4,4,0,0,1,55.28,72a4.7,4.7,0,0,1,1.62-.79A7,7,0,0,1,58.63,71c1.51,0,2.82,0,3.91.07s2,.09,2.83.15,1.51.12,2.13.19V75.8H60.25a1.51,1.51,0,0,0-1,.3,1.08,1.08,0,0,0-.36.89v1.68l7.27.27V83.1l-7.27.27v1.51a1.84,1.84,0,0,0,.15.8,1,1,0,0,0,.42.46,1.21,1.21,0,0,0,.6.15H67.5v4.43c-.78.11-1.66.2-2.65.27s-2,.13-3,.16-2,.06-2.89.06Zm18.9,0a10.62,10.62,0,0,1-3-.41,5.06,5.06,0,0,1-2.33-1.49A7.29,7.29,0,0,1,71,86.21a22.24,22.24,0,0,1-.52-5.27A20.22,20.22,0,0,1,71,75.8a7.51,7.51,0,0,1,1.53-3.09,5.2,5.2,0,0,1,2.34-1.52,10,10,0,0,1,3-.42,21.46,21.46,0,0,1,3,.18,18.67,18.67,0,0,1,2.19.42,9.78,9.78,0,0,1,1.45.48v4.08c-.35-.07-.79-.14-1.33-.21s-1.15-.13-1.85-.18-1.44-.06-2.26-.06a5.74,5.74,0,0,0-1.55.18,1.82,1.82,0,0,0-1,.76,4.17,4.17,0,0,0-.56,1.66A20.28,20.28,0,0,0,75.7,81a22.52,22.52,0,0,0,.13,2.7,4.41,4.41,0,0,0,.49,1.69,1.92,1.92,0,0,0,1,.87,4.89,4.89,0,0,0,1.72.25c1.37,0,2.48,0,3.34-.06s1.53-.11,2-.18v4.08a10,10,0,0,1-1.58.46,17.32,17.32,0,0,1-2.13.3c-.81.07-1.77.11-2.89.11Zm-30.32-26c-2.32,0-4.56-.1-6.74-.3s-4.18-.5-6-.87V57.28h9.48a14.79,14.79,0,0,0,2.63-.18,2.22,2.22,0,0,0,1.28-.56,1.6,1.6,0,0,0,.35-1.09v-.82a1.87,1.87,0,0,0-.4-1.26A2.32,2.32,0,0,0,47,52.65a7,7,0,0,0-1.83-.28L37.38,52V45.5L44.73,45a7.5,7.5,0,0,0,2.56-.52,1.41,1.41,0,0,0,.83-1.39v-.39a1.9,1.9,0,0,0-.87-1.78A6.83,6.83,0,0,0,44,40.42H35.17V33.64c1.88-.32,3.87-.62,5.95-.89a39.39,39.39,0,0,1,6.35-.33,12.44,12.44,0,0,1,4.8.93,6.74,6.74,0,0,1,3.11,2.7,8.8,8.8,0,0,1,1.08,4.58v2.18a10,10,0,0,1-.19,2,5.79,5.79,0,0,1-.63,1.69,4.79,4.79,0,0,1-1.13,1.33,5.72,5.72,0,0,1-1.7.91,4.61,4.61,0,0,1,1.81,1,5.86,5.86,0,0,1,1.25,1.58,7.93,7.93,0,0,1,.77,2.07,11.29,11.29,0,0,1,.26,2.45V57.1a7.43,7.43,0,0,1-2.5,6,10.44,10.44,0,0,1-6.89,2.09Zm21.29,0a10.55,10.55,0,0,1-4.93-1,6.54,6.54,0,0,1-2.93-3,10.71,10.71,0,0,1-1-4.72V41.63a11.2,11.2,0,0,1,1-5,7,7,0,0,1,3-3.11,10.16,10.16,0,0,1,4.83-1.06h7a9.35,9.35,0,0,1,4.63,1.06,6.91,6.91,0,0,1,2.86,3.11,11.64,11.64,0,0,1,1,5V56.45a9,9,0,0,1-2.19,6.43,8.25,8.25,0,0,1-6.33,2.35Zm2.09-7.56H73.5a2.17,2.17,0,0,0,2.43-2.52V42.5a2.55,2.55,0,0,0-.61-2,2.26,2.26,0,0,0-1.48-.5H70.59a2.06,2.06,0,0,0-1.66.61,2.94,2.94,0,0,0-.52,1.91V55.1a2.65,2.65,0,0,0,.61,2,2.62,2.62,0,0,0,1.87.59Zm40.33-27.91c-3.52-5.29-11.65-.65-8.57,5.21l.14.22A50,50,0,0,1,107,43.27a5,5,0,1,0,9.28-3.83,61.08,61.08,0,0,0-5.07-9.68ZM77.27,110.47a5,5,0,1,0,3.36,9.46,60.29,60.29,0,0,0,9.94-4.55,5,5,0,0,0-5-8.7,55.52,55.52,0,0,1-8.3,3.79ZM99.4,95c-3.66,4.44,2.09,10.86,7.08,7a5.37,5.37,0,0,0,.71-.72,64.19,64.19,0,0,0,6.11-9.06,5,5,0,0,0-8.48-5.34A77.5,77.5,0,0,1,99.4,95Zm10.88-24.81a5,5,0,0,0,9.63,2.58,4.83,4.83,0,0,0,.3-1.13,60.28,60.28,0,0,0,.64-10.9c-.28-6.19-9.41-6.63-10-.12v.82a52.28,52.28,0,0,1-.55,8.75Z"></path>
              </svg>
            </template>
            <template #footer-left>
              <t-button :radius="3" color="white" @click.native="showModal4 = false">
                Cancel
              </t-button>
            </template>
            <template #footer-right>
              <t-button loading :radius="3" design="light" color="green">
                Wait
              </t-button>
            </template>
          </t-modal>
        </teleport>
      </t-content-card>
    </template>
  </app-layout>
</template>

<script>
/*Layout*/
import {ref, reactive, defineComponent} from "vue";
import AppLayout from "@/Layouts/AppLayout.vue";
/*Component*/
import GridSection from "@/Layouts/GridSection.vue";
import TContentCard from "@/Components/Card/TContentCard.vue";
import TModal from "@/Components/Modal/TModal.vue";
import TButton from "@/Components/Button/TButton.vue";
import TInputGroup from "@/Components/Form/TInputGroup.vue";
import TInputSelect from "@/Components/Form/Inputs/TInputSelect.vue";

export default defineComponent({
  name: "Modal",
  components: {
    TInputSelect,
    AppLayout, GridSection,  TButton, TContentCard, TModal,  TInputGroup
  },
  setup() {
    /*Definitions*/
    const selectedDarkMode = ref(false)
    const selectedDesign = ref('elegant')
    const selectedBgColor = ref('black')
    const selectedColor = ref('white')
    const darkModeOptions = reactive([
      {key: true, label: 'Dark: true'},
      {key: false, label: 'Dark: false'}
    ])
    const colorOptions = reactive([
      {key: 'red', label: 'Red'},
      {key: 'blue', label: 'Blue'},
      {key: 'green', label: 'Green'},
      {key: 'yellow', label: 'Yellow'},
      {key: 'indigo', label: 'Indigo'},
      {key: 'purple', label: 'Purple'},
      {key: 'pink', label: 'Pink'},
      {key: 'gray', label: 'Gray'},
      {key: 'white', label: 'White'},
      {key: 'black', label: 'Black'}
    ])
    const designOptions = reactive([
      {key: 'filled', label: 'Filled'},
      {key: 'elegant', label: 'Elegant'}
    ])

    return {
      darkModeOptions,
      colorOptions,
      designOptions,
      selectedDarkMode,
      selectedColor,
      selectedBgColor,
      selectedDesign
    }
  },
  data() {
    return {
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
    testMetodu() {
      alert('kedi')
    }
  }
})
</script>

<style scoped>

</style>
