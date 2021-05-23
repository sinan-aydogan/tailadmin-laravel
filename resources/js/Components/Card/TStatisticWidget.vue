<template>
  <!--Widget Main Container-->
  <ContentCard :color="color" :radius="radius" :width="width" border="true">
    <template #content>
    <!--Widget Content-->
      <div class="flex flex-row h-full w-full">
        <!--Widget Data Area-->
        <div :class="['flex flex-col',chartType && !icon ? 'w-5/12':'w-3/4']">
          <!--Widget Title-->
          <div class="text-lg font-semibold">
            <slot name="title"/>
          </div>
          <!--Widget Value-->
          <div class="text-xl md:text-2xl xl:text-3xl font-bold py-2">
            {{widgetValue}}
          </div>
          <!--Diff Value-->
          <div
              v-if="diffValue"
              :class="['flex items-center gap-1 max-w-min text-sm',diffClass]">
            <span v-if="diffDirection" v-text="diffDirection === 'up' ? '+' : '-'"></span>
            {{ diffValue }}
            <font-awesome-icon v-if="diffDirection" :icon="'angle-'+diffDirection" />
          </div>
        </div>
        <!--Widget Chart Area-->
        <div v-if="chartType && !icon" class="flex w-full justify-end h-28">
          <component
              :is="chartType"
              :chartdata="widget1.chartdata"
              :options="widget1.options"
              :styles="widget1.styles"/>
        </div>
        <!--Icon Area-->
        <div v-if="icon" class="flex justify-end items-center w-1/4">
          <span
              :class="['flex items-center justify-center p-4 border-2 w-20 rounded-full',iconStyle]">
            <font-awesome-icon v-if="icon" :icon="icon" size="3x"/>
          </span>
        </div>
      </div>
    </template>
  </ContentCard>
</template>

<script>
import ContentCard from "@/components/Card/ContentCard";
export default {
  name: "StaticWidget",
  components : {
    ContentCard,
    'bar-chart' : ()=>import('@/components/Chart/BarChart'),
    'line-chart' : ()=>import('@/components/Chart/LineChart'),
  },
  props : {
    radius: {
      required : false
    },
    width : {
      type: Number,
      required: false,
      default: 1
    },
    widgetValue :{
      required:true
    },
    color : {
      required: false
    },
    icon : {
      required: false
    },
    diffDirection : {
      required : false
    },
    diffValue : {
      required: false
    },
    chartType : {
      required : false,
      default : 'Bar'
    }
  },
  computed : {
    diffClass(){
      if(this.diffDirection === 'up'){
        return 'text-white bg-green-500 px-3 py-1 rounded-md bg-opacity-70';
      }else if(this.diffDirection === 'down'){
        return 'text-white bg-red-500 px-3 py-1 rounded-md bg-opacity-70'
      }else{
        return 'text-gray-600 bg-white px-3 py-1 rounded-md bg-opacity-70 font-semibold'
      }
    },
    iconStyle(){
        if (this.color === 'red') {
          return 'border-red-500 text-red-500';
        } else if (this.color === 'blue') {
          return 'bg-blue-200 text-blue-500 border-blue-500';
        } else if (this.color === 'indigo') {
          return 'bg-indigo-200 text-indigo-500 border-indigo-500';
        } else if (this.color === 'yellow') {
          return 'bg-yellow-200 text-yellow-500 border-yellow-500';
        } else if (this.color === 'green') {
          return 'bg-green-200 text-green-500 border-green-500';
        } else if (this.color === 'gray') {
          return 'bg-gray-200 text-gray-500 border-gray-500';
        } else if (this.color === 'black') {
          return 'bg-black bg-opacity-30 border-gray-300 text-gray-300';
        } else {
          return 'bg-white'
        }
    }
  },
  data(){
    return {
      widget1:{
        chartdata: {
          labels: ['January', 'February','April' , 'March' , 'June'],
          datasets: [
            {
              fill: false,
              tension: 0.1,
              borderColor : '#FFFE12',
              data: [40, 20, 15, 55, 41]
            },
            {
              label : '12',
              fill: false,
              tension: 0.1,
              borderColor : '#00FF',
              data: [5, 11, 52, 32, 15]
            },
          ]
        },
        options: {
          plugins : {
            legend : false,
          },
          elements : {
            point : {
              radius : 8,
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
            display : false,
            y: { // defining min and max so hiding the dataset does not change scale range
              min: 0,
              max: 100,
              labels: {
                display: false
              },
                ticks : {
                display: false
              }
            }
          }
        },
        styles : {
          height : '100%'
        }
      }
    }
  }
}
</script>

<style scoped>

</style>