<template>
  <app-layout>
    <template #header>Charts</template>
    <template #subHeader>Change the tables to the show</template>
    <template #default>
      <grid-section>
        <t-content-card></t-content-card>
      </grid-section>
    </template>
  </app-layout>
</template>

<script>
/*Layout*/
import AppLayout from "@/Layouts/AppLayout.vue";
/*Component*/
import GridSection from "@/Layouts/GridSection.vue";
import TContentCard from "@/Components/Card/TContentCard.vue";

export default {
  name: "Chart",
  components: {
    AppLayout,
    GridSection,
    TContentCard,
  }
}
</script>

<style scoped>

</style>
