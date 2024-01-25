<template>
  <div :class="tStyle['container']">
    <!--Inline Line-->
    <div v-if="activeDesign === 'inline'"
         id="line"
         class="collapsible-inline-line"
    />
    <div class="w-full">
      <!--Header-->
      <div
        :class="tStyle['header']"
        @click="updateStatus"
        @mouseenter.passive="openingType.includes('hover') ? updateStatus('open') :''"
      >
        <!--Title-->
        <div :class="tStyle['title']">
          <slot name="title" />
        </div>
        <!--DropDown Icons-->
        <!--Chevron-->
        <svg v-if="activeTriggerType==='chevron'" :class="tStyle['trigger']" xmlns="http://www.w3.org/2000/svg"
             fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
        <!--Cross-->
        <svg v-else :class="tStyle['trigger']" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <!--Content-->
      <transition name="content">
        <div v-show="isVisibleContent">
          <div :class="tStyle['content']">
            <slot name="content"></slot>
          </div>
        </div>

      </transition>
    </div>
  </div>
</template>

<script>
import { defineComponent, inject, toRefs, reactive, computed } from "vue";
import { uniqueId } from "lodash";

export default defineComponent({
  name: "CollapsibleItem",
  props: {
    itemKey: {
      type: [String, Number],
      default: uniqueId()
    },
    titleAlign: {
      type: String,
      default: "left"
    },
    triggerAlign: {
      type: String,
      default: "right"
    },
    triggerType: {
      type: String,
      default: null,
      require: false
    },
    design: {
      type: String,
      default: "filled"
    },
    color: {
      type: String,
      default: "white"
    }
  },
  emits: ["active"],
  setup(props, { emit }) {
    /*Definitions*/
    const { itemKey, titleAlign, triggerAlign, triggerType, design, color } = toRefs(props);

    /*Injections*/
    const activeItems = inject("activeItems");
    const openingType = inject("openingType");
    const accordion = inject("accordion");
    const radius = inject("radius");
    const separated = inject("separated");
    const rootColor = inject("rootColor");
    const rootDesign = inject("rootDesign");
    const rootTitleAlign = inject("rootTitleAlign");
    const rootTriggerAlign = inject("rootTriggerAlign");
    const rootTriggerType = inject("rootTriggerType");

    /*Taken Over Definitions from Root */
    const activeColor = computed(() => {
      return rootColor.value ? rootColor.value : color.value;
    });
    const activeDesign = computed(() => {
      return rootDesign.value ? rootDesign.value : design.value;
    });
    const activeTitleAlign = computed(() => {
      return rootTitleAlign.value ? rootTitleAlign.value : titleAlign.value;
    });
    const activeTriggerAlign = computed(() => {
      return rootTriggerAlign.value ? rootTriggerAlign.value : triggerAlign.value;
    });
    const activeTriggerType = computed(() => {
      return rootTriggerType.value ? rootTriggerType.value : triggerType.value;
    });

    /*Detection of Active Items*/
    const isVisibleContent = computed(() => {
      return activeItems.value.includes(itemKey.value);
    });


    /*Open-Close Actions*/
    const updateStatus = (rule) => {
      /*Open Function*/
      const openItem = () => {
        if (accordion.value && !activeItems.value.includes(itemKey.value)) {
          activeItems.value = [itemKey.value];
        } else if (!accordion.value && !activeItems.value.includes(itemKey.value)) {
          activeItems.value.push(itemKey.value);
        }
        emit("active", activeItems.value);
      };
      /*Close Function*/
      const closeItem = () => {
        if (activeItems.value.includes(itemKey.value)) {
          activeItems.value.splice(activeItems.value.indexOf(item => item === itemKey.value), 1);
        }
        emit("active", activeItems.value);
      };
      /*Open/Close Action Controller*/
      if (rule === "open") {
        openItem();
      } else if (rule === "close") {
        closeItem();
      } else {
        if (isVisibleContent.value) {
          closeItem();
        } else {
          openItem();
        }
      }
    };

    /*Generating Style Classes*/
    const tStyle = reactive({});
    tStyle["container"] = computed(() => {
      return "collapsible-container " +
        "collapsible-" + activeDesign.value + "-base " +
        "collapsible-" + activeDesign.value + "-" + activeColor.value + " " +
        (separated.value ? "radius-" + radius.value + " border-0" : "") + " " +
        (activeDesign.value.valueOf().includes("line") ? "justify-between" : "flex-col");
    });
    tStyle["header"] = computed(() => {
      let triggerAlignStyle;
      /*Trigger Position*/
      if (activeTriggerAlign.value === "left") {
        triggerAlignStyle = "flex-row-reverse";
      } else {
        triggerAlignStyle = "justify-start";
      }

      return "collapsible-header " +
        triggerAlignStyle;
    });
    tStyle["trigger"] = computed(() => {
      let triggerAnimationStyle;
      if (isVisibleContent.value && activeTriggerType.value === "chevron" || activeTriggerType.value === "cross") {
        triggerAnimationStyle = "rotate-0";
      }

      if (!isVisibleContent.value && activeTriggerType.value === "chevron") {
        if (activeTriggerAlign.value === "right") {
          triggerAnimationStyle = "rotate-90";
        } else {
          triggerAnimationStyle = "-rotate-90";
        }
      }

      if (!isVisibleContent.value && activeTriggerType.value === "cross") {
        triggerAnimationStyle = "rotate-45";
      }

      return "collapsible-trigger-icon " +
        triggerAnimationStyle;
    });
    tStyle["title"] = computed(() => {
      let titleAlignStyle;
      if (activeTitleAlign.value === "left") {
        titleAlignStyle = "text-left";
      } else if (activeTitleAlign.value === "center") {
        titleAlignStyle = "justify-center";
      } else {
        titleAlignStyle = "flex-row-reverse";
      }

      return "collapsible-title " + titleAlignStyle;
    });
    tStyle["content"] = computed(() => {
      return "collapsible-content ";
    });

    return {
      isVisibleContent,
      openingType,
      updateStatus,
      tStyle,
      activeTriggerType,
      activeDesign
    };
  }
});
</script>

<style>
.content-enter-active, .content-leave-active {
  transition: all 300ms ease-in-out;
}

.content-enter-from, .content-leave-to {
  max-height: 0;
}

.content-enter-to, .content-leave-from {
  max-height: 100vmax;
}
</style>
