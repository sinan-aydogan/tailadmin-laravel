<template>
    <div>
        <div @click="setActiveID">
            {{title}} {{activeID}}
        </div>
        <div v-show="isActive" v-if="tabID === activeID">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import {getCurrentInstance} from "vue";

export default {
  props: {
    title: {
      type: String,
      default: 'Tab'
    }
  },
    data() {
    return {
      isActive: true,
        tabID: getCurrentInstance().uid,
    }
  },
    methods: {
      setActiveID(){
          this.$parent.selectedTab(this.tabID)
      }
    }
}
</script>
