<template>
  <app-layout title="Register Screen">
    <template #header>Register Screen</template>
    <template #subHeader>You should make to changes in the Resources/Js/Pages/Auth/Register.vue</template>
    <template #default>
      <grid-section :col-tablet="3">
        <!--Demo 1-->
        <div class="flex flex-col gap-2">
          <img :src="'/img/demo/register_1_gradient.jpg'" class="rounded-md" alt="Register Screen">
          <t-button type="link" :link="route('register-app-1')" :radius="3" color="pink" size="full">See Demo
            Register 1
          </t-button>
        </div>
        <!--Demo 2-->
        <div class="flex flex-col gap-2">
          <img :src="'/img/demo/register_2_gray.jpg'" class="rounded-md" alt="Register Screen">
          <t-button type="link" :link="route('register-app-2')" :radius="3" color="gray" size="full">See Demo Register 2
          </t-button>
        </div>
        <!--Demo 3-->
        <div class="flex flex-col gap-2">
          <img :src="'/img/demo/register_3_blue.jpg'" class="rounded-md" alt="Register Screen">
          <t-button type="link" :link="route('register-app-3')" :radius="3" color="blue" size="full">See Demo Register 3
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
  name: "RegisterApp",
  components: {TButton, GridSection, AppLayout},
}
</script>

<style scoped>

</style>
