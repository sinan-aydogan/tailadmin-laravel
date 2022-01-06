<template>
  <app-layout>
    <template #header>Statistic Widget</template>
    <template #subHeader>Preview area for your data</template>
    <template #default>
      <grid-section :col-tablet="2" :col-desktop="4">
        <!--With Icon, Down Direction-->
        <t-statistic-widget
            :width="1"
            color="gradient-purple-to-pink"
            diff-direction="down"
            diff-value="15%"
            widget-value="254">
          <template #title>
            Incomes
          </template>
          <template #icon>
            <t-cash-icon class="w-16 h-16"/>
          </template>
        </t-statistic-widget>
        <!--With Icon, Up Direction-->
        <t-statistic-widget
            :radius="5"
            :width="1"
            color="solid-green"
            diff-direction="up"
            diff-value="8"
            widget-value="30">
          <template #title>
            Daily Done Charts
          </template>
          <template #icon>
            <t-shopping-bag-icon class="w-15 h-15"/>
          </template>
        </t-statistic-widget>
        <t-statistic-widget
            :radius="5"
            :width="1"
            color="solid-red"
            diff-direction="positive-down"
            diff-value="8%"
            widget-value="12.254,05 TL">
          <template #title>
            Refunds
          </template>
        </t-statistic-widget>
        <!--With Picture, Down Direction-->
        <t-statistic-widget
            :radius="5"
            :width="1"
            color="solid-white"
            diff-direction="down"
            diff-value="15%"
            widget-value="254 USD">
          <template #title>
            Stationery Cost
          </template>
          <template #picture>
            <img :src="'/img/samples/imgMelBaylon-6WLcOFn4HKE-unsplash.jpg'">
          </template>
        </t-statistic-widget>
        <!-- &lt;!&ndash;With Line Chart, Without Diff Direction, Icon &ndash;&gt;
         <t-statistic-widget
             chart-type="line-chart"
             color="solid-yellow"
             diff-value="30%"
             radius="7"
             widget-value="254"
             :width="1">
             <template #title>
                 Customer Complaints
             </template>
         </t-statistic-widget>
         &lt;!&ndash;With Bar Chart, Without Diff Direction, Icon&ndash;&gt;
         <t-statistic-widget
             chart-type="bar-chart"
             color="solid-indigo"
             diff-direction="up"
             diff-value="30%"
             radius="1"
             widget-value="254"
             :width="2">
             <template #title>
                 New Customers
             </template>
         </t-statistic-widget>-->
      </grid-section>
    </template>
  </app-layout>
</template>

<script>
/*Layout*/
import AppLayout from "@/Layouts/AppLayout";
/*Component*/
import GridSection from "@/Layouts/GridSection";
import TStatisticWidget from "@/Components/Card/TStatisticWidget";
import TCashIcon from "@/Components/Icon/TCashIcon";
import TShoppingBagIcon from "@/Components/Icon/TShoppingBagIcon";

export default {
  name: "StatisticWidget",
  components: {AppLayout, GridSection, TCashIcon, TShoppingBagIcon, TStatisticWidget},
}
</script>

<style scoped>

</style>
