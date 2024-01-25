<template>
  <!--Widget Main Container-->
  <t-content-card
      :border="true"
      :color="color"
      :gradient-direction="gradientDirection"
      :radius="radius"
      :width="width"
  >
    <template #content>
      <!--Widget Content-->
      <div class="statistic-widget">
        <!--Widget Data Area-->
        <div class="statistic-widget-data">
          <!--Widget Title-->
          <div class="statistic-widget-title">
            <slot name="title"/>
          </div>
          <!--Widget Value-->
          <div class="statistic-widget-value">
            {{ widgetValue }}
          </div>
          <!--Diff Value-->
          <div
              v-if="diffValue"
              :class="[
                  'statistic-widget-diff-value',
                  calculatedDiffStyle
                  ]"
          >
            <span
                v-if="diffDirection"
                v-text="diffDirection.includes('up') ? '+' :  '-'"
            ></span>
            {{ diffValue }}
            <t-chevron-up-icon v-if="diffDirection.includes('up')" class="w-4 h-4"/>
            <t-chevron-down-icon v-if="diffDirection.includes('down')" class="w-4 h-4"/>
          </div>
        </div>
        <!--Widget Chart Area-->
        <!--TODO: Chart feature-->
        <!--<div v-if="chartType && !icon" class="flex w-full justify-end h-28">
          <component
              :is="chartType"
              :chartdata="widget.chartdata"
              :options="widget.options"
              :styles="widget.styles"/>
        </div>-->
        <!--Icon Area-->
        <div v-if="$slots.icon" class="statistic-widget-icon-container">
                    <span
                        :class="['statistic-widget-icon',calculatedIconStyle]">
                        <slot name="icon"/>
                    </span>
        </div>
        <!--Picture Area-->
        <div v-if="$slots.picture" class="statistic-widget-picture-container">
                    <span
                        :class="['statistic-widget-picture',calculatedIconStyle]">
                        <slot name="picture"/>
                    </span>
        </div>
      </div>
    </template>
  </t-content-card>
</template>

<script>
import { defineComponent } from 'vue'
import {statisticWidgetStyleMixin} from "@/Mixins/Styles/statisticWidgetStyleMixin";
import TContentCard from "@/Components/Card/TContentCard";
import TChevronUpIcon from "@/Components/Icon/TChevronUpIcon";
import TChevronDownIcon from "@/Components/Icon/TChevronDownIcon";

export default defineComponent({
  name: "TStatisticWidget",
  components: {
    TChevronDownIcon,
    TChevronUpIcon,
    TContentCard,
    /*'bar-chart': () => import('@/Components/Chart/TBarChart'),
    'line-chart': () => import('@/Components/Chart/TLineChart'),
    'pie-chart': () => import('@/Components/Chart/TPieChart'),
    'polar-chart': () => import('@/Components/Chart/TPolarChart'),
    'radar-chart': () => import('@/Components/Chart/TRadarChart'),*/
  },
  mixins: [statisticWidgetStyleMixin],
  props: {
    radius: {
      required: false
    },
    width: {
      type: Number,
      required: false,
      default: 1
    },
    widgetValue: {
      required: true
    },
    diffValue: {
      required: false
    },
    /*chartType: {
      required: false,
      default: 'Bar'
    }*/
  },
  data() {
    return {
      /*TODO: Chart feature*/
      /*widget: {
          chartdata: {
              labels: ['January', 'February', 'April', 'March', 'June'],
              datasets: [
                  {
                      fill: false,
                      tension: 0.1,
                      borderColor: '#FFFE12',
                      data: [40, 20, 15, 55, 41]
                  },
                  {
                      label: '12',
                      fill: false,
                      tension: 0.1,
                      borderColor: '#00FF',
                      data: [5, 11, 52, 32, 15]
                  },
              ]
          },
          options: {
              plugins: {
                  legend: false,
              },
              elements: {
                  point: {
                      radius: 8,
                      pointStyle: 'circle'
                  },
              },
              responsive: true,
              maintainAspectRatio: false,
              animations: {
                  tension: {
                      duration: 1000,
                      easing: 'linear',
                      from: 1,
                      to: 0,
                      loop: true
                  }
              },
              scales: {
                  display: false,
                  y: { // defining min and max so hiding the dataset does not change scale range
                      min: 0,
                      max: 100,
                      labels: {
                          display: false
                      },
                      ticks: {
                          display: false
                      }
                  }
              }
          },
          styles: {
              height: '100%'
          }
      }*/
    }
  }
})
</script>

