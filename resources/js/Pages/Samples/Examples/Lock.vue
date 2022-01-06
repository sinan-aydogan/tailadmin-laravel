<template>
  <app-layout title="Lock Screen">
    <template #header>Lock Screen</template>
    <template #subHeader>Only sample screen, it's not active module</template>
    <template #default>
      <grid-section :col-tablet="3">
        <!--Demo 1-->
        <div class="flex flex-col gap-2">
          <img :src="'/img/demo/lock_1_gradient.jpg'" class="rounded-md" alt="Lock Screen Photo">
          <t-button type="link" :link="route('lock-app-1')" :radius="3" color="pink" size="full">See Demo Lock 1
          </t-button>
        </div>
        <!--Demo 2-->
        <div class="flex flex-col gap-2">
          <img :src="'/img/demo/lock_2_gray.jpg'" class="rounded-md" alt="Lock Screen Photo">
          <t-button type="link" :link="route('lock-app-2')" :radius="3" color="gray" size="full">See Demo Lock 2
          </t-button>
        </div>
        <!--Demo 3-->
        <div class="flex flex-col gap-2">
          <img :src="'/img/demo/lock_3_blue.jpg'" class="rounded-md" alt="Lock Screen Photo">
          <t-button type="link" :link="route('lock-app-3')" :radius="3" color="blue" size="full">See Demo Lock 3
          </t-button>
        </div>
      </grid-section>
    </template>
  </app-layout>
</template>

<script>
/*Layout*/
import AppLayout from "@/Layouts/AppLayout";
/*Component*/
import GridSection from "@/Layouts/GridSection";
import TButton from "@/Components/Button/TButton";

export default {
  name: "Lock",
  components: {TButton, GridSection, AppLayout},
}
</script>

<style scoped>

</style>
