<template>
  <div class="tab ">
    <!--Title Container-->
    <div
        :class="[
            'tab-title-container',
            tabStyle === 2 && calculatedTitle2ContainerStyle,
            ]">
      <!--Title-->
      <div
          v-for="(item,index) in tabs"
          :key="index"
          :class="[
              'tab-title',
              tabStyle === 1 ? 'tab-title-1' : 'tab-title-2 '+ radiusStyles[radius].title2,
              item.isActive ? calculatedActiveTitleStyle : calculatedTitleStyle,
              index === 0 & tabStyle === 1 && radiusStyles[radius].title1left,
              index === tabs.length-1 & tabStyle === 1 && radiusStyles[radius].title1right
          ]"
          @click="selectedTab(index)"
      >
        {{ item.title }}
      </div>
    </div>
      <div :class="[
        'tab-content',
        calculatedContentStyle
        ]">
        <slot/>
      </div>
  </div>
</template>

<script>
import {tabStyleMixin} from "@/Mixins/Styles/tabStyleMixin";

export default {
  name: 'TTab',
  props: {
    active: {
      type: Number,
      default: 1
    }
  },
  mixins: [tabStyleMixin],
  data() {
    return {
      activeID: null,
      tabs: [],
      isActive: false,
    }
  },
  created() {
    this.tabs = this.$children
  },
  mounted() {
    this.selectedTab(this.active - 1)
  },
  methods: {
    selectedTab(ID) {
      this.activeID = ID;
      this.tabs.forEach((tab, index) => {
        tab.isActive = (index === ID)
      })
    }
  },
}
</script>

