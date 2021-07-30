<template>
  <app-layout>
    <template #header>
      Settings
    </template>
    <template #subHeader>
      User and features management
    </template>
    <grid-section :gap="2" :col-tablet="2" :col-desktop="4">
      <!--Users-->
      <inertia-link :href="route('settings-user.index')">
        <t-content-card color="light-indigo" class="hover:bg-white">
          <template #title>Users</template>
          <template #icon>
            <t-user-group-icon class="w-12 h-12"/>
          </template>
          <template #content>
            {{ users_count }} user/s
          </template>
        </t-content-card>
      </inertia-link>
      <!--Roles-->
      <inertia-link :href="route('settings-role')">
        <t-content-card color="light-purple" class="hover:bg-white">
          <template #title>Roles</template>
          <template #icon>
            <t-chevron-double-down-icon class="w-12 h-12"/>
          </template>
          <template #content>
            {{ roles_count }} role/s
          </template>
        </t-content-card>
      </inertia-link>
      <!--Permissions-->
      <inertia-link :href="route('settings-permission')">
        <t-content-card color="light-pink" class="hover:bg-white">
          <template #title>Permissions</template>
          <template #icon>
            <t-adjustments-icon class="w-12 h-12"/>
          </template>
          <template #content>
            {{ permissions_count }} permission/s
          </template>
        </t-content-card>
      </inertia-link>
      <!--Settings-->
      <inertia-link :href="route('settings-system')">
        <t-content-card color="light-blue" class="hover:bg-white">
          <template #title>Settings</template>
          <template #icon>
            <t-cog-icon class="w-12 h-12"/>
          </template>
          <template #content>
            Definitions of System
          </template>
        </t-content-card>
      </inertia-link>
    </grid-section>
  </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import GridSection from "@/Layouts/GridSection";
import TContentCard from "@/Components/Card/TContentCard";
import TStatisticWidget from "@/Components/Card/TStatisticWidget";
import TCogIcon from "@/Components/Icon/TCogIcon";
import TAdjustmentsIcon from "@/Components/Icon/TAdjustmentsIcon";
import TChevronDoubleDownIcon from "@/Components/Icon/TChevronDoubleDownIcon";
import TUserGroupIcon from "@/Components/Icon/TUserGroupIcon";

export default {
  name: "Index",
  components: {
    TUserGroupIcon,
    TChevronDoubleDownIcon,
    TAdjustmentsIcon, TCogIcon, TStatisticWidget, TContentCard, GridSection, AppLayout
  },
  props: ['users_count', 'roles_count','permissions_count']
}
</script>