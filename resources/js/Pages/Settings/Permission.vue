<template>
  <app-layout>
    <template #header>Permissions</template>
    <template #subHeader>Management of Permissions</template>
    <initial-vertical-menu :menu="menuList"/>
  </app-layout>

</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import InitialVerticalMenu from "@/Layouts/InitialVerticalMenu";
import {settingsMenuMixin} from "@/Mixins/settingsMenuMixin";

export default {
  name: "SettingsPermission",
  components: {InitialVerticalMenu, AppLayout},
  mixins: [settingsMenuMixin]
}
</script>

<style scoped>

</style>