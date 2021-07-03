<template>
    <app-layout>
        <template #breadcrumb>
            <t-breadcrumb :breadcrumbStyle="1" :breadcrumbs="breadcrumbs"/>
        </template>
        <template #header>
            Welcome to TailAdmin
        </template>
        <template #subHeader>
        </template>
        <template #default>
            <grid-section col="1" gap="4">
                <!--Statistical Widgets-->
                <grid-section :col="4" :gap="4">
                    <!--With Icon, Down Direction-->
                    <t-statistic-widget
                        :width="1"
                        color="black"
                        diff-direction="down"
                        diff-value="15%"
                        widget-value="254">
                        <template #title>
                            Incomes
                        </template>
                        <template #icon>
                            <t-cash-icon class="w-15 h-15"/>
                        </template>
                    </t-statistic-widget>
                    <!--With Icon, Up Direction-->
                    <t-statistic-widget
                        :radius="5"
                        :width="1"
                        color="green"
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
                        color="red"
                        diff-direction="up"
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
                        color="white"
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
                         color="yellow"
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
                         color="indigo"
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
                <!--Content Box-->
                <grid-section :col="3" :gap="4">
                    <!--List-->
                    <t-content-card :width="1">
                        <template #title>
                            Users List
                        </template>
                        <template #content>
                            <t-list :radius="3" class="w-full" color="white">
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
                            Active Projects
                        </template>
                        <template #content>
                            <!--Table-->
                            <t-table :content="tableContent" :header="tableHeader" color="white" :radius="0" :shadow="false">
                                <template #status="{props}">
                                    <div class="flex justify-center">
                                        <t-progress :value="props.status" color="red"/>
                                    </div>
                                </template>
                            </t-table>
                        </template>
                    </t-content-card>
                </grid-section>
                <!--Alerts-->
                <grid-section :col="3" :gap="4">
                    <!--Red-Deleted-->
                    <t-alert color="red" :closeable="true">
                        <t-trash-icon slot="icon" class="w-6 h-6"/>
                        The user deleted successfully,click me
                    </t-alert>
                    <!--Blue-Info-->
                    <t-alert color="blue">
                        <t-information-circle-icon slot="icon" class="w-6 h-6"/>
                        The all of changes overwrite to themself
                    </t-alert>
                    <t-alert :radius="3" color="white">
                        <t-avatar slot="icon" :radius="8" :size="3" src="https://i.pravatar.cc/300"/>
                        The new user is successfully added.
                        <br/><b>User:</b> Hamdi KAYA
                    </t-alert>
                </grid-section>
            </grid-section>
        </template>
    </app-layout>
</template>

<script>
import AppLayout from '@/Layouts/AppLayout'
import Welcome from '@/Jetstream/Welcome'
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

export default {
    components: {
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
        GridSection,
        AppLayout,
        Welcome,
    },
    data() {
        return {
            tableHeader: [
                {key: 'id', label: 'ID', position: 'center'},
                {key: 'name', label: 'Name', position: 'left'},
                {key: 'start', label: 'Start Date', position: 'left'},
                {key: 'end', label: 'End Date', position: 'left'},
                {key: 'status', label: 'Status', position: 'center'}
            ],
            tableContent: [
                {id: 1, name: 'VueJS Components', start: '01.03.2021', end: '14.09.2021', status: 10},
                {id: 2, name: 'Custom Style Optimize', start: '02.05.2021', end: '25.08.2021', status: 20},
                {id: 3, name: 'Error Management', start: '25.04.2021', end: '30.12.2021', status: 70},
            ],
            breadcrumbs: [
                {label: 'Home', link: '/', active: false},
                {label: 'Dashboard', link: '', active: true, activeColor: 'blue'}
            ]
        }
    }
}
</script>
