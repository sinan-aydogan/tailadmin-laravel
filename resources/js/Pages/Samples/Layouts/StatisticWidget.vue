<template>
    <app-layout>
        <template #header>Statistic Widget</template>
        <template #subHeader>Preview area for your data</template>
        <template #default>
            <grid-section col="4" gap="4">
                <!--With Icon, Down Direction-->
                <t-statistic-widget
                    color="black"
                    diff-direction="down"
                    diff-value="15%"
                    widget-value="254"
                    :width="1">
                    <template #title>
                        Incomes
                    </template>
                    <template #icon>
                        <t-cash-icon class="w-15 h-15"/>
                    </template>
                </t-statistic-widget>
                <!--With Icon, Up Direction-->
                <t-statistic-widget
                    color="green"
                    diff-direction="up"
                    diff-value="8"
                    radius="5"
                    widget-value="30"
                    :width="1">
                    <template #title>
                        Daily Done Charts
                    </template>
                    <template #icon>
                        <t-shopping-bag-icon class="w-15 h-15"/>
                    </template>
                </t-statistic-widget>
                <t-statistic-widget
                    color="red"
                    diff-direction="up"
                    diff-value="8%"
                    radius="5"
                    widget-value="12.254,05 TL"
                    :width="1">
                    <template #title>
                        Refunds
                    </template>
                </t-statistic-widget>
                <!--With Picture, Down Direction-->
                <t-statistic-widget
                    color="white"
                    diff-direction="down"
                    diff-value="15%"
                    :radius="5"
                    widget-value="254 USD"
                    :width="1">
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
            <ssh-pre :copy-button="true" label="Code" language="html">{{ sampleCode.html }}</ssh-pre>
            <ssh-pre :copy-button="true" label="JS" language="js">{{ sampleCode.js }}</ssh-pre>
            <!--Variables Table-->
            <t-table :content="sampleCode.table.content"  :header="sampleCode.table.header" :searchable="['variable','details']" class="mt-5" color="blue"/>
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
import TTable from "@/Components/Table/TTable";
/*Codehighlighter*/
import "simple-syntax-highlighter/dist/sshpre.css";
import SshPre from "simple-syntax-highlighter";

export default {
    name: "StatisticWidget",
    components: {AppLayout, GridSection, SshPre, TCashIcon, TShoppingBagIcon, TStatisticWidget, TTable},
    data() {
        return {
            sampleCode: {
                html:
                    '<t-statistic-widget\n' +
                    '    :width="1"\n' +
                    '    color="green"\n' +
                    '    radius="5"\n' +
                    '    widget-value="30"\n' +
                    '    diff-value="8"\n' +
                    '    diff-direction="up"\n' +
                    '>\n' +
                    '    <template #title>\n' +
                    '        Daily Done Charts\n' +
                    '    </template>\n' +
                    '    <!--If you want to show a icon, you shold this template -->\n' +
                    '    <template #icon>\n' +
                    '        <t-shopping-bag-icon class="w-15 h-15"/>\n' +
                    '    </template>\n' +
                    '    <!--If you want to show a picture with img element, you shold this template -->\n' +
                    '    <template #picture>\n' +
                    '        <img src="/img/samples/imgMelBaylon-6WLcOFn4HKE-unsplash.jpg">\n' +
                    '    </template>\n' +
                    '</t-statistic-widget>',
                js:
                    'import TStatisticWidget from "@/Components/Card/TStatisticWidget";\n' +
                    'import TShoppingBagIcon from "@/Components/Icon/TShoppingBagIcon";\n\n' +
                    "export default {\n" +
                    '  name: "Notification",\n' +
                    "  components: {TStatisticWidget, TShoppingBagIcon},\n" +
                    "  }",
                table: {
                    header: [
                        {
                            key: "variable",
                            label: "Variable"
                        },
                        {
                            key: "type",
                            label: "Value Type"
                        },
                        {
                            key: "details",
                            label: "Details"
                        }
                    ],
                    content: [
                        {
                            variable: ":width",
                            type: "Number",
                            details: "The widget\'s horizontal size. It linked with main area width. If you main area 3 col, you can set 1,2 or 3 (It\'s main is full width at the moment)."
                        },
                        {
                            variable: "color",
                            type: "String",
                            details: "Your alert box color theme.<br><b>Options:</b> red,blue,green,yellow,indigo,pink,purple,gray,black,white"
                        },
                        {
                            variable: ":radius",
                            type: "Number",
                            details: "<b>Options:</b> none, 1, 2, 3, 4, 5, 6, 7, 8"
                        },
                        {
                            variable: "widget-value",
                            type: "String",
                            details: "It\'s main value"
                        },
                        {
                            variable: "diff-value",
                            type: "String",
                            details: "It\'s different value"
                        },
                        {
                            variable: "diff-direction",
                            type: "String",
                            details: "It determines which arrow icons and color theme  or  <b>Options:</b> up (for + character, green background and up icon), down (for - character, red background and down icon)"
                        }
                    ]
                }
            }
        }
    }
}
</script>

<style scoped>

</style>
