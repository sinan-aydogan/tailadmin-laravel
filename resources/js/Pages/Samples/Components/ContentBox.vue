<template>
  <app-layout>
    <template #header>Content Card</template>
    <template #subHeader>It is a shell for your content</template>
    <template #default>
      <!--Icon Options-->
      <grid-section :col="2" :gap="4">
        <!--Users-->
        <t-content-card>
          <template #title>Users</template>
          <template #icon>
            <t-user-group-icon class="w-12 h-12"/>
          </template>
          <template #content>
            255 user/s
          </template>
        </t-content-card>
        <!--Team Member-->
        <t-content-card color="gradient-gray-to-pink">
          <template #title>Sinan AYDOĞAN</template>
          <template #icon>
            <t-avatar slot="icon" :radius="8" :size="4" src="https://i.pravatar.cc/300"/>
          </template>
          <template #content>
            Developer
          </template>
        </t-content-card>
      </grid-section>
      <!--Simple-->
      <grid-section :col="3" :gap="4">
        <t-content-card
            :border="true"
            :line="true"
            :radius="0"
            :width="1"
        >
          <template #title>
            Content Card Component Title
          </template>
          <template #subTitle>
            Solid, Light and Gradient Color Options
          </template>
          <template #content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            dapibus metus enim. In vestibulum sit amet felis vitae ornare. Sed
            posuere, mauris et dapibus tincidunt.
            <div class="flex flex-col justify-center w-full mt-6 gap-4">

            </div>
          </template>
        </t-content-card>
        <t-content-card
            :border="true"
            :line="true"
            :radius="3"
            :width="1"
            color="solid-red"
        >
          <template #title>
            Adaptive Height: False
          </template>
          <template #content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            dapibus metus enim. In vestibulum sit amet felis vitae ornare.
            <div class="flex flex-col justify-center w-full mt-6 gap-4">

            </div>
          </template>
        </t-content-card>
        <t-content-card
            :adaptive-height="true"
            :border="true"
            :line="false"
            :radius="6"
            :width="1"
            color="light-indigo"
        >
          <template #title>
            Adaptive Height: True
          </template>
          <template #content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            dapibus metus enim. In vestibulum sit amet felis vitae ornare. Sed
            posuere, mauris et dapibus tincidunt.
            <div class="flex flex-col justify-center w-full mt-6 gap-4">

            </div>
          </template>
        </t-content-card>
      </grid-section>
    </template>
  </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";
import GridSection from "@/Layouts/GridSection.vue";
import TContentCard from "@/Components/Card/TContentCard.vue";
import TUserGroupIcon from "@/Components/Icon/TUserGroupIcon.vue";
import TAvatar from "@/Components/Avatar/TAvatar.vue";

export default {
  name: "ContentBox",
  components: {
    TAvatar,
    TUserGroupIcon,
    TContentCard,
    GridSection,
    AppLayout,
  }
}
</script>

<style scoped>

</style>
