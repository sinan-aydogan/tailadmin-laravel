<template>
  <app-layout>
    <template #header>
      Tabs
    </template>
    <template #subHeader>
      Demo
    </template>
  </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";

export default {
  name: "Tab",
  components: { AppLayout},
  data(){
    return{
    }
  }
};
</script>

<style scoped>

</style>
