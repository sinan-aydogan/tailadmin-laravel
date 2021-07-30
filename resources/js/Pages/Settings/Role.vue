<template>
  <app-layout>
    <template #header>Roles</template>
    <template #subHeader>Management of Roles</template>
    <initial-vertical-menu :menu="menuList"/>
  </app-layout>

</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import InitialVerticalMenu from "@/Layouts/InitialVerticalMenu";
import {settingsMenuMixin} from "@/Mixins/settingsMenuMixin";

export default {
  name: "SettingsRole",
  components: {InitialVerticalMenu, AppLayout},
  mixins: [settingsMenuMixin]
}
</script>

<style scoped>

</style>