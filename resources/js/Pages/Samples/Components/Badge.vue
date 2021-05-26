<template>
    <app-layout>
        <template #header>
            Badges
        </template>
        <template #subHeader>
            Useful badges like tags
        </template>
        <template #default>
            <grid-section col="2" gap="4">
                <!--With Radius-->
                <t-content-card width="2">
                    <template #title>
                        With Radius Options
                    </template>
                    <template #content>
                        <div class="flex flex-wrap gap-4">
                            <t-badge :radius="0">Radius - 0</t-badge>
                            <t-badge :radius="1">Radius - 1</t-badge>
                            <t-badge :radius="2">Radius - 2</t-badge>
                            <t-badge :radius="3">Radius - 3</t-badge>
                            <t-badge :radius="4">Radius - 4</t-badge>
                            <t-badge :radius="5">Radius - 5</t-badge>
                            <t-badge :radius="6">Radius - 6</t-badge>
                            <t-badge :radius="7">Radius - 7</t-badge>
                            <t-badge :radius="8">Radius - 8</t-badge>
                        </div>
                    </template>
                </t-content-card>
                <!--With Color-->
                <t-content-card width="2">
                    <template #title>
                        With Color Options
                    </template>
                    <template #content>
                        <div class="flex flex-wrap gap-4">
                            <t-badge :radius="8" color="indigo">Indigo</t-badge>
                            <t-badge :radius="8" color="red">Red</t-badge>
                            <t-badge :radius="8" color="pink">Pink</t-badge>
                            <t-badge :radius="8" color="yellow">Yellow</t-badge>
                            <t-badge :radius="8" color="purple">Purple</t-badge>
                            <t-badge :radius="8" color="white">White</t-badge>
                            <t-badge :radius="8" color="black">Black</t-badge>
                            <t-badge :radius="8" color="red">Red</t-badge>
                            <t-badge :radius="8" color="blue">Blue</t-badge>
                        </div>
                    </template>
                </t-content-card>
                <!--With Value-->
                <t-content-card width="2">
                    <template #title>
                        With Value Option
                    </template>
                    <template #content>
                        <div class="flex flex-wrap gap-4">
                            <t-badge :radius="8" color="indigo" value="123">Number</t-badge>
                            <t-badge :radius="8" color="red" value="12 TL">Currency</t-badge>
                            <t-badge :radius="8" color="pink" value="0,25">Double</t-badge>
                            <t-badge :radius="8" color="yellow" value="15 pcs.">Count</t-badge>
                            <t-badge :radius="8" color="purple" value="03.09.2025">Date</t-badge>
                            <t-badge :radius="8" color="white" value="®">Special Char.</t-badge>
                            <t-badge :radius="8" color="black" value="Plus">String</t-badge>
                            <t-badge :radius="8" color="red" value="+25%">Percent</t-badge>
                            <t-badge :radius="8" color="blue" value="-15px">Mathematical Signs</t-badge>
                        </div>
                    </template>
                </t-content-card>
              <!--With Collapsible-->
              <t-content-card width="2">
                <template #title>
                  With Icon and Value Option
                </template>
                <template #content>
                  <div class="flex flex-wrap gap-4">
                    <t-badge :radius="1" color="indigo" :collapsible="true"><font-awesome-icon icon="info" slot="icon"/>Number</t-badge>
                    <t-badge :radius="2" color="red" :collapsible="true"><font-awesome-icon icon="info" slot="icon"/>Currency</t-badge>
                    <t-badge :radius="3" color="pink" :collapsible="true"><font-awesome-icon icon="info" slot="icon"/>Double</t-badge>
                    <t-badge :radius="4" color="yellow" :collapsible="true" value="15 pcs."><font-awesome-icon icon="info" slot="icon"/>Count</t-badge>
                    <t-badge :radius="5" color="purple" :collapsible="true" value="03.09.2025"><font-awesome-icon icon="info" slot="icon"/>Date</t-badge>
                    <t-badge :radius="6" color="white" :collapsible="true" value="®"><font-awesome-icon icon="info" slot="icon"/>Special Char.</t-badge>
                    <t-badge :radius="7" color="black" :collapsible="true" value="Plus"><font-awesome-icon icon="info" slot="icon"/>String</t-badge>
                    <t-badge :radius="8" color="red" :collapsible="true" value="+25%"><font-awesome-icon icon="info" slot="icon"/>Percent</t-badge>
                    <t-badge :radius="8" color="blue" :collapsible="true" value="-15px"><font-awesome-icon icon="info" slot="icon"/>Mathematical Signs</t-badge>
                  </div>
                </template>
              </t-content-card>
            </grid-section>
        </template>
    </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import GridSection from "@/Layouts/GridSection";
import TContentCard from "@/Components/Card/TContentCard";
import TBadge from "@/Components/Badge/TBadge";
export default {
    name: "Badge",
    components: {AppLayout,GridSection,TContentCard,TBadge}
}
</script>

<style scoped>

</style>
