<template>
  <app-layout>
    <template #header>Progress Bars</template>
    <template #subHeader>Loading, graphical indicator and more than</template>
    <template #default>
      <grid-section :col="1">
        <t-content-card :width="1">
          <template #title>Simple and colorful</template>
          <template #subTitle>8 different color and 5 different height</template>
          <template #content>

            <div class="flex flex-col w-full gap-4">
              <div class="flex flex-col md:flex-row justify-center space-y-2 md:space-x-2 items-center w-full">
                <t-input-group class="w-full md:w-36" label="Target Value" label-for="target">
                  <t-input-text v-model.lazy.number="target" type="number" />
                </t-input-group>
                <t-progress :height="1" v-model="target" title="Performance" />
              </div>
              <t-progress :height="2" :model-value="10" counter-text="$a" color="indigo" title="Claim" />
              <t-progress :height="3" :model-value="50" counter-text="$a TRY" color="yellow" title="Cost" />
              <t-progress :height="4" :model-value="75" counter-text="$a Hour/Person" color="purple"
                          title="Working Costs" />
              <t-progress :height="5" :model-value="25040" :max="100000" counter-text="-$aK"
                          color="red"
                          title="Lost" />
            </div>
          </template>
        </t-content-card>
      </grid-section>
    </template>
  </app-layout>
</template>

<script>
/*Layout*/
import AppLayout from "@/Layouts/AppLayout.vue";
import { defineComponent, ref, watch } from "vue";
/*Component*/
import GridSection from "@/Layouts/GridSection.vue";
import TContentCard from "@/Components/Card/TContentCard.vue";
import TProgress from "@/Components/Progress/TProgress.vue";
import TInputGroup from "@/Components/Form/TInputGroup.vue";
import TInputText from "@/Components/Form/Inputs/TInputText.vue";

export default defineComponent({
  name: "Progress",
  components: { TInputText, TInputGroup, TProgress, TContentCard, GridSection, AppLayout },
  setup() {
    const target = ref(25);

    watch(target,
      (newValue) => {
        if (newValue.toString() === null || isNaN(newValue) || newValue.toString() === "") {
          target.value = 0;
        }
      });
    return { target };
  }
});
</script>
