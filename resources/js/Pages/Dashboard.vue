<template>
  <app-layout title="Dashboard" :header="t('title')">
    <template #breadcrumb>
      <t-breadcrumb :breadcrumb-style="1" :breadcrumbs="breadcrumbs" color="white" />
    </template>
    <template #default>
      <!--Statistical Widgets-->
      <grid-section :col="2">
        <!--With Icon, Down Direction-->
        <t-statistic-widget
          color="solid-black"
          diff-direction="down"
          diff-value="15%"
          widget-value="254">
          <template #title>
            <span v-t="'incomes'" />
          </template>
          <template #icon>
            <t-cash-icon class="w-16 h-16" />
          </template>
        </t-statistic-widget>
        <!--With Icon, Up Direction-->
        <t-statistic-widget
          :radius="5"
          color="solid-green"
          diff-direction="up"
          diff-value="8"
          widget-value="30">
          <template #title>
            <span v-t="'dailyDoneCharts'" />
          </template>
          <template #icon>
            <t-shopping-bag-icon class="w-16 h-16" />
          </template>
        </t-statistic-widget>
        <!--Simple-->
        <t-statistic-widget
          :radius="5"
          color="solid-red"
          diff-direction="down"
          diff-value="8%"
          widget-value="12.254,05 TL">
          <template #title>
            <span v-t="'refunds'" />
          </template>
        </t-statistic-widget>
        <!--With Picture, Down Direction-->
        <t-statistic-widget
          :radius="5"
          color="solid-white"
          diff-direction="down"
          diff-value="15%"
          widget-value="254 USD">
          <template #title>
            <span v-t="'stationeryCost'" />
          </template>
          <template #picture>
            <img :src="'/img/samples/imgMelBaylon-6WLcOFn4HKE-unsplash.jpg'">
          </template>
        </t-statistic-widget>
      </grid-section>
      <!--Content Box-->
      <grid-section :col="3">
        <!--List-->
        <t-content-card :width="1">
          <template #title>
            <span v-t="'userList'" />
          </template>
          <template #content>
            <t-list :radius="3" class="w-full" design="light" color="white" border>
              <t-list-item>
                <template #icon>
                  <t-avatar :radius="8" :size="2" src="https://i.pravatar.cc/150?u=1"></t-avatar>
                </template>
                <template #default>Sinem Aydoğan</template>
              </t-list-item>
              <t-list-item>
                <template #icon>
                  <t-avatar :radius="8" :size="2" src="https://i.pravatar.cc/150?u=2"></t-avatar>
                </template>
                <template #default>Zuhal Taşçı</template>
              </t-list-item>
              <t-list-item>
                <template #icon>
                  <t-avatar :radius="8" :size="2" src="https://i.pravatar.cc/150?u=3"></t-avatar>
                </template>
                <template #default>Ayşe Gürel</template>
              </t-list-item>
              <t-list-item>
                <template #icon>
                  <t-avatar :radius="8" :size="2" src="https://i.pravatar.cc/150?u=4"></t-avatar>
                </template>
                <template #default>Günel Deren</template>
              </t-list-item>
            </t-list>
          </template>
        </t-content-card>
        <t-content-card :width="2">
          <template #title>
            <span v-t="'activeProjects'" />
          </template>
          <template #content>
            <!--Table-->
            <t-table
              :content="tableContent"
              :header="tableHeader"
              :features="tableFeatures"
            >
              <template #status="{props}">
                <div class="flex justify-center">
                  <t-progress :model-value="props.status" color="green" />
                </div>
              </template>
            </t-table>
          </template>
        </t-content-card>
      </grid-section>
      <!--Alerts-->
      <grid-section :col-tablet="3">
        <!--Red-Deleted-->
        <t-alert design="filled" :closeable="true" color="danger">
          <template #icon>
            <t-trash-icon slot="icon" class="w-6 h-6" />
          </template>
          <span v-t="'alertDeleted'" />
        </t-alert>
        <!--Blue-Info-->
        <t-alert design="inline" color="info">
          <template #icon>
            <t-information-circle-icon class="w-6 h-6" />
          </template>
          <span v-t="'alertOverwrite'" />
        </t-alert>
        <!--Green Success-->
        <t-alert design="outline" color="success">
          <template #icon>
            <t-check-circle-icon class="w-6 h-6" />
          </template>
          <span v-t="'alertSaved'" />
        </t-alert>
      </grid-section>
      <!--Rich Alerts-->
      <grid-section :col-tablet="2">
        <t-alert :radius="3" design="gradient" color="fuchsia" :closeable="true">
          <template #icon>
            <t-avatar :radius="8" :size="3" src="https://i.pravatar.cc/300" />
          </template>
          <span v-html="t('alertNewUser')" />
        </t-alert>
        <t-alert
          :radius="3"
          design="elegant"
          :title="t('alertDeletedUserTitle')"
          color="warning"
          :closeable="true"
        >
          <span v-html="t('alertDeletedUser')" />
        </t-alert>
      </grid-section>
    </template>
  </app-layout>
</template>

<script>
import { computed, defineComponent, reactive } from "vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import GridSection from "@/Layouts/GridSection";
import TStatisticWidget from "@/Components/Card/TStatisticWidget";
import TCashIcon from "@/Components/Icon/TCashIcon";
import TShoppingBagIcon from "@/Components/Icon/TShoppingBagIcon";
import TContentCard from "@/Components/Card/TContentCard";
import TList from "@/Components/List/TList";
import TListItem from "@/Components/List/TListItem";
import TAvatar from "@/Components/Avatar/TAvatar";
import TTable from "@/Components/Table/TTable";
import TBreadcrumb from "@/Components/Breadcrumb/TBreadcrumb";
import TProgress from "@/Components/Progress/TProgress";
import TAlert from "@/Components/Alert/TAlert";
import TInformationCircleIcon from "@/Components/Icon/TInformationCircleIcon";
import TTrashIcon from "@/Components/Icon/TTrashIcon";
import TCheckCircleIcon from "@/Components/Icon/TCheckCircleIcon";
import { useI18n } from "vue-i18n";

export default defineComponent({
  components: {
    AppLayout,
    TCheckCircleIcon,
    TTrashIcon,
    TInformationCircleIcon,
    TAlert,
    TProgress,
    TBreadcrumb,
    TTable,
    TAvatar,
    TListItem,
    TList,
    TContentCard,
    TShoppingBagIcon,
    TCashIcon,
    TStatisticWidget,
    GridSection
  },
  setup() {
    const { t } = useI18n({
      messages: {
        local: "en",
        en: {
          title: "Welcome to Anemon",
          home: "Home",
          dashboard: "Dashboard",
          incomes: "Incomes",
          dailyDoneCharts: "Daily Done Charts",
          refunds: "Refunds",
          stationeryCost: "Refunds",
          userList: "Users List",
          activeProjects: "Active Projects",
          name: "Name",
          startDate: "Start Date",
          endDate: "End Date",
          status: "Status",
          simpleSearch: "Simple Search",
          alertDeleted: "The user deleted successfully,click me",
          alertOverwrite: "The all of changes overwrite to themself",
          alertSaved: "New item saved successfully",
          alertNewUser: "The new user is successfully added." +
            "<br/><b>User:</b> Sinan AYDOĞAN",
          alertDeletedUserTitle: "warning",
          alertDeletedUser: "The user deleted successfully" +
            "<br/><b>User:</b> Zuhal TAŞÇI"
        },
        tr: {
          title: "Anemon'a Hoşgeldiniz",
          home: "Ana Sayfa",
          dashboard: "Panel",
          incomes: "Gelirler",
          dailyDoneCharts: "Günlük Tamamlanan",
          refunds: "Geri İadeler",
          stationeryCost: "Kırtasiye Gideri",
          userList: "Kullanıcılar",
          activeProjects: "Aktif Projeler",
          name: "İsim",
          startDate: "Başlangıç",
          endDate: "Bitiş",
          status: "Durum",
          simpleSearch: "Arama",
          alertDeleted: "Kullanıcı başarıyla silindi",
          alertOverwrite: "Tüm değişikler var olan kayıdın üzerine yazılacak",
          alertSaved: "Yeni içerik başarıyla eklendi",
          alertNewUser: "Yeni kullanıcı başarıyla eklendi\n" +
            "<b>Kullanıcı:</b> Sinan AYDOĞAN",
          alertDeletedUserTitle: "uyarı",
          alertDeletedUser: "Kullanıcı başarıyla silindi\n" +
            "<b>Kullanıcı:</b> Zuhal TAŞÇI"
        }
      }
    });
    const breadcrumbs = reactive([
      { label: t("home"), link: "/", active: false },
      { label: t("dashboard"), link: "", active: true, activeColor: "blue" }
    ]);
    const tableHeader = reactive([
      { key: "id", label: "ID", align: "center" },
      { key: "name", label: "Name", align: "left", searchable: true, status: true },
      { key: "start", label: "Start Date", align: "left", status: true },
      { key: "end", label: "End Date", align: "left", status: true },
      { key: "status", label: "Status", align: "center", status: true }
    ])
    const tableContent = reactive([
      { id: 1, name: "VueJS Components", start: "01.03.2021", end: "14.09.2021", status: 10 },
      { id: 2, name: "Custom Style Optimize", start: "02.05.2021", end: "25.08.2021", status: 20 },
      { id: 3, name: "Error Management", start: "25.04.2021", end: "30.12.2021", status: 70 }
    ])
    const tableFeatures = reactive({
      table: {
        design: 'elegant',
        rowBorder: true,
        zebraRow: true,
        radius: 3,
        perPage:5
      },
      pagination: {
        status: true,
        radius: 3,
        range: 5,
        jump: true,
        nextText: "Sonraki",
        previousText: "Önceki",
        detailText: "Sayfa: $a - $b"
      },
      actions: {
        status: true,
        headerText: "Aksiyonlar"
      },
      deleteModal: {
        headerText: "Item's deleting",
        contentText: "You are going to delete <br><b></b><br>Are you sure ?",
        icon: "warning"
      }
    });
    return { t, breadcrumbs, tableHeader, tableContent, tableFeatures };
  }
});
</script>
