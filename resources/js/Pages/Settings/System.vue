<template>
  <app-layout>
    <template #header>System Settings</template>
    <template #subHeader>Management of System's Variables</template>
    <initial-vertical-menu :menu="menuList"/>
  </app-layout>

</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import InitialVerticalMenu from "@/Layouts/InitialVerticalMenu";
import {settingsMenuMixin} from "@/Mixins/settingsMenuMixin";

export default {
  name: "SettingsSystem",
  components: {InitialVerticalMenu, AppLayout},
  mixins: [settingsMenuMixin]
}
</script>

<style scoped>

</style>