<template>
  <app-layout>
    <template #header>
      Input Group
    </template>
    <template #default>
      <grid-section :col-tablet="2" :col-desktop="4">
        <content-card :radius="3" :width="1">
          <template #title>
            With Label Prop
          </template>
          <template #content>
            <t-input-group label="Text Label" label-for="name1">
              <t-input-text id="name1" placeholder="I'm a placeholder text"/>
            </t-input-group>
          </template>
        </content-card>

        <content-card :radius="3" :width="1">
          <template #title>
            With Label Slot
          </template>
          <template #content>
            <t-input-group label-for="name2" sub-label="Cash only">
              <template slot="label">
                <t-cash-icon class="w-5 h-5 mr-1"/> Label Slot
              </template>
              <t-input-text id="name2" placeholder="I'm a placeholder text"/>
            </t-input-group>
          </template>
        </content-card>

        <content-card :radius="3" :width="1">
          <template #title>
            With Colorful Sub Label
          </template>
          <template #content>
            <t-input-group label="Text Label" label-for="name3" sub-label="Cash only" sub-label-color="solid-green">
              <t-input-text id="name3" placeholder="I'm a placeholder text"/>
            </t-input-group>
          </template>
        </content-card>

        <content-card :radius="3" :width="1">
          <template #title>
            With Error Message
          </template>
          <template #content>
            <t-input-group error="Please enter numerical value" label="Text Label" label-for="name4" sub-label="Cash only"
                           sub-label-color="solid-yellow">
              <t-input-text id="name4" placeholder="I'm a placeholder text" value="Hi, I'm a prefilled text"/>
            </t-input-group>
          </template>
        </content-card>
      </grid-section>
    </template>
  </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";
import ContentCard from "@/Components/Card/TContentCard.vue";
import TInputGroup from "@/Components/Form/TInputGroup.vue";
import TInputText from "@/Components/Form/Inputs/TInputText.vue";
import GridSection from "@/Layouts/GridSection.vue";
import TCashIcon from "@/Components/Icon/TCashIcon.vue";

export default {
  name: "InputGroup",
  components: {TCashIcon, AppLayout, ContentCard, GridSection, TInputGroup, TInputText},
}
</script>

<style scoped>

</style>
