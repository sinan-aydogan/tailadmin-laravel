<template>
  <app-layout title="Forgot Password Screen">
    <template #header>Forgot Password Screen</template>
    <template #subHeader>You should make to changes in the Resources/Js/Pages/Auth/ForgotPassword.vue</template>
    <template #default>
      <grid-section :col-tablet="3">
        <!--Demo 1-->
        <div class="flex flex-col gap-2">
          <img :src="'/img/demo/forgot_1_gradient.jpg'" class="rounded-md" alt="Forgot Password Screen">
          <t-button type="link" :link="route('forgot-password-app-1')" :radius="3" color="pink" size="full">See Demo Login
            1
          </t-button>
        </div>
        <!--Demo 2-->
        <div class="flex flex-col gap-2">
          <img :src="'/img/demo/forgot_2_gray.jpg'" class="rounded-md" alt="Forgot Password Screen">
          <t-button type="link" :link="route('forgot-password-app-2')" :radius="3" color="gray" size="full">See Demo Login 2</t-button>
        </div>
        <!--Demo 3-->
        <div class="flex flex-col gap-2">
          <img :src="'/img/demo/forgot_3_blue.jpg'" class="rounded-md" alt="Forgot Password Screen">
          <t-button type="link" :link="route('forgot-password-app-3')" :radius="3" color="blue" size="full">See Demo Login 3</t-button>
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
import TContentCard from "@/Components/Card/TContentCard";
import TButton from "@/Components/Button/TButton";

export default {
  name: "ForgotPasswordApp",
  components: {TButton, GridSection, AppLayout},
}
</script>
