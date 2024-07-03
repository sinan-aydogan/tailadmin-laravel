<template>
  <app-layout title="Pagination">
    <template #header>Pagination</template>
    <template #subHeader>Tables, lists and all of lists</template>
    <template #default>
      <t-component-style-selector class="mb-4" v-model="selectedData"/>
      <grid-section :col-desktop="2" :gap="4">
        <content-card :width="1">
          <t-paginate
              reverse
              v-model="activePage1"
              :color="selectedData.color"
              :range="5"
              :total="54321"
              jump
          />
          <t-paginate
              v-model="activePage2"
              :color="selectedData.color"
              :radius="3"
              :range="3"
              :total="17"
              :jump="false"
              :arrow-text="false"
          />
        </content-card>
        <content-card :width="1">
          <t-paginate
              v-model="activePage3"
              :color="selectedData.color"
              :radius="5"
              :range="4"
              :total="17"
              :detail="false"
          />
          <t-paginate
              :jump="true"
              v-model="activePage4"
              :color="selectedData.color"
              :radius="8"
              :range="5"
              :total="17"
          />
        </content-card>
      </grid-section>
    </template>
  </app-layout>
</template>

<script>
/*Layout*/
import AppLayout from "@/Layouts/AppLayout.vue";
/*Component*/
import GridSection from "@/Layouts/GridSection.vue";
import ContentCard from "@/Components/Card/TContentCard.vue";
import TPaginate from "@/Components/Paginate/TPaginate.vue";
import TComponentStyleSelector from "@/Components/Misc/TComponentStyleSelector.vue";

export default {
  name: "Paginate",
  components: {ContentCard, GridSection, AppLayout, TPaginate, TComponentStyleSelector},
  data() {
    return {
      activePage1: 2,
      activePage2: 1,
      activePage3: 5,
      activePage4: 10,
      selectedData: {
        color: 'gray'
      },
    }
  }
}
</script>

<style scoped>

</style>
