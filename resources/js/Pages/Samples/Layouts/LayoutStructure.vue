<template>
  <app-layout :action-buttons="true">
    <template #header><div class="bg-blue-200 w-full h-full">Header</div></template>
    <template #subHeader><div class="bg-gray-200 w-full h-full">SubHeader</div></template>
    <template #action-buttons>
      <div class="bg-green-200 w-full h-full flex justify-center items-center">Action Button Area</div>
    </template>
    <template #default>
      <div class="bg-yellow-200 w-full items-center justify-center flex text-center h-36">Content Area</div>
    </template>
  </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";

export default {
  name: "LayoutStructure",
  components: {AppLayout},
}
</script>

<style scoped>

</style>
