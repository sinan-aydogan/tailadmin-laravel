<template>
  <div
      :class="[
            'badge',
            collapsible && 'cursor-pointer',
            calculatedBadgeStyle
        ]"
      @click="toggle"
  >
    <!--Badge Icon-->
    <div
        v-if="$slots.icon"
        :class="[
            'badge-icon',
            collapsible ? 'mx-0.5' : 'ml-0.5'
            ]"
    >
      <slot name="icon" @click="toggle"></slot>
    </div>
    <!--Badge Content-->
    <transition name="fade">
      <div
          v-if="showTitle || !collapsible"
          :class="[
              'badge-container',
              $slots.icon ? 'pr-1.5' : 'px-2'
              ]">
        <!--Content-->
        <div :class="[
            'badge-content',
            $slots.icon && !collapsible && 'ml-0.5',
            ]">
          <slot></slot>
        </div>
        <!--Value-->
        <div v-if="value" :class="[
            'badge-value',
            $slots.icon ? '-mr-0.5' : '-mr-1.5'
            ]">
          {{ value }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import {badgeStyleMixin} from "@/Mixins/Styles/badgeStyleMixin";

export default {
  name: "TBadge",
  mixins: [badgeStyleMixin],
  props: {
    value: {
      type: String,
      required: false
    },
    collapsible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showTitle: false,
    };
  },
  methods: {
    toggle() {
      this.showTitle = !this.showTitle;
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  max-width: 0;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
  max-width: 250px;
}
</style>
