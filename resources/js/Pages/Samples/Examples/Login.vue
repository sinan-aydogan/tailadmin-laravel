<template>
  <app-layout title="Login Screen">
    <template #header>Login Screen</template>
    <template #subHeader>You should make to changes in the Resources/Js/Pages/Auth/Login.vue</template>
    <template #default>
      <grid-section :col-tablet="3">
        <!--Demo 1-->
        <div class="flex flex-col gap-2">
          <img :src="'/img/demo/login_1_gradient.jpg'" class="rounded-md" alt="Login Screen">
          <t-button type="link" :link="route('login-app-1')" :radius="3" color="pink" size="full">See Demo Login
            1
          </t-button>
        </div>
        <!--Demo 2-->
        <div class="flex flex-col gap-2">
          <img :src="'/img/demo/login_2_gray.jpg'" class="rounded-md" alt="Login Screen">
          <t-button type="link" :link="route('login-app-2')" :radius="3" color="gray" size="full">See Demo Login 2</t-button>
        </div>
        <!--Demo 3-->
        <div class="flex flex-col gap-2">
          <img :src="'/img/demo/login_3_blue.jpg'" class="rounded-md" alt="Login Screen">
          <t-button type="link" :link="route('login-app-3')" :radius="3" color="blue" size="full">See Demo Login 3</t-button>
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
  name: "LoginApp",
  components: {TButton, GridSection, AppLayout},
}
</script>

<style scoped>

</style>
