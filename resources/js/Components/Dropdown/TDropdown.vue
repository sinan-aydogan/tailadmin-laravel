<template>
  <div class="dropdown" ref="dropDownItem">

    <!--Trigger as a Simple Trigger-->
    <div
      v-if="triggerType === 'button'"
      :class="tStyle['buttonTrigger']"
      @click="updateStatus"
    >
      <t-button type="button" :color="buttonColor" :design="buttonDesign" :size="buttonSize">
        <slot name="trigger" />
        <t-chevron-down-icon :class="tStyle['triggerIcon']" />
      </t-button>

    </div>

    <!--Trigger as a Rich Item-->
    <div
      class="dropdown-rich-trigger"
      v-if="triggerType === 'rich'"
      @click="updateStatus"
    >
      <slot name="trigger" />
    </div>

    <!--Content-->
    <transition name="dropDown">
      <div v-if="isVisible" class="dropdown-content-container">
        <!--Button Trigger Content-->
        <div
          v-if="triggerType === 'button'"
          :class="tStyle['buttonTriggerContent']">
          <slot />
        </div>
        <!--Rich Trigger Content-->
        <div
          v-if="triggerType === 'rich'"
          :class="tStyle['richTriggerContent']"
        >
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { computed, defineComponent, provide, reactive, ref, toRefs } from "vue";
import { onClickOutside } from "@vueuse/core";
import TChevronDownIcon from "@/Components/Icon/TChevronDownIcon";
import TButton from "@/Components/Button/TButton";

export default defineComponent({
  name: "TDropdown",
  components: { TButton, TChevronDownIcon },
  props: {
    align: {
      type: String,
      default: "left"
    },
    buttonColor: {
      type: String,
      default: "blue"
    },
    buttonDesign: {
      type: String,
      default: "filled"
    },
    buttonSize: {
      type: String,
      default: "normal"
    },
    size: {
      type: String,
      default: "wide"
    },
    triggerType: {
      type: String,
      default: "button"
    },
    radius: {
      type: Number,
      default: 3
    }
  },
  setup(props) {
    /*Definitions*/
    const { align, size, radius, triggerType } = toRefs(props);
    const isVisible = ref(false);
    const dropDownItem = ref(null);

    /*Provides*/
    provide("triggerType", ref(triggerType));

    /*Open-Close Actions*/
    const updateStatus = () => {
      isVisible.value = !isVisible.value;
    };
    onClickOutside(dropDownItem, () => isVisible.value = false);

    /*Generating Style Classes*/
    const tStyle = reactive({})
    tStyle['buttonTrigger'] = computed(() => {
      return "dropdown-button-trigger" + " " +
        "radius-" + radius.value;
    });
    tStyle['content'] = computed(() => {
      return "dropdown-content-" + align.value + " " +
        "dropdown-content-" + size.value;
    });
    tStyle['buttonTriggerContent'] = computed(() => {
      return "dropdown-button-trigger-content" + " " +
        tStyle['content'];
    });
    tStyle['richTriggerContent'] = computed(() => {
      return "dropdown-rich-trigger-content" + " " +
        tStyle['content'];
    });
    tStyle['triggerIcon'] = computed(() => {
      return "dropdown-trigger-icon " +
        (isVisible.value ? "rotate-90" : "rotate-0");
    });

    return {
      isVisible,
      updateStatus,
      dropDownItem,
      tStyle
    };
  }
});
</script>

<style scoped>
.dropDown-enter-active, .dropDown-leave-active {
  transition: all ease-in-out 300ms;
  z-index: 9999;
}

.dropDown-enter-from, .dropDown-leave-to {
  transform: scaleY(.75) scaleX(.75);
  opacity: 0;
}

.dropDown-enter-to, .dropDown-leave-from {
  transform: scaleY(1) scaleX(1);
  opacity: 1;
}
</style>
