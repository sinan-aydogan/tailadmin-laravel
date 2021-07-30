<template>
  <t-forgot
      color="solid-gray"
      bg-color="gradient-gray-to"
      :radius="5"
      button-color="light-gray"
      :status="status"
  >
    <!--Logo-->
    <template #logo>
      <inertia-link href="/">
        <div class="flex flex-col justify-center items-center w-full">
          <t-logo class="w-12 h-12"/>
          <span class="text-3xl">TailAdmin</span>
        </div>
      </inertia-link>
    </template>
    <!--Greeting-->
    <template #greeting>
      <b>Forgot your password? No problem.</b>
    </template>
    <!--Greeting Sub-->
    <template #subGreeting>
      Write your email address and we will email you a password reset link
    </template>
  </t-forgot>
</template>

<script>
import TForgot from "@/Components/Auth/TForgot";
import TLogo from "@/Components/Icon/TLogo";
export default{
  components: {TLogo, TForgot},
  props: {
    status: String
  }
}
</script>