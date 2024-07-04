<template>
  <div>
    <div
      v-if="design==='filled'"
      :class="tStyle['filled']">
      <div id="breadcrumb-filled-container">
        <div
          v-for="(item,index) in breadcrumbs"
          :key="index"
          :class="filledContainerStyle(item)">
          <!--Icon-->
          <div v-if="hasSlot(item.key)">
            <slot :name="item.key" :props="item" />
          </div>
          <div>
            {{ item.label }}
          </div>
          <!--Separator Icon-->
          <svg v-if="breadcrumbs.length !== index+1" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
      <div v-if="hasSlot('subContent')" class="breadcrumb-sub-content">
        <slot name="subContent"></slot>
      </div>
    </div>

    <div
      v-if="design==='block'"
      :class="tStyle['block']">
      <div id="breadcrumb-block-container" :class="tStyle['blockSub']">
        <div
          v-for="(item,index) in breadcrumbs"
          :key="index"
          :class="blockContainerStyle(item)">
          <!--Icon-->
          <div v-if="hasSlot(item.key)">
            <slot :name="item.key" :props="item" />
          </div>
          <div>
            {{ item.label }}
          </div>
        </div>
      </div>
      <div v-if="hasSlot('subContent')" class="breadcrumb-sub-content">
        <slot name="subContent"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, toRefs, computed, reactive, useSlots } from "vue";

export default defineComponent({
  name: "TBreadcrumb",
  props: {
    breadcrumbs: {
      type: Array,
      default() {
        return [];
      },
      require: true
    },
    design: {
      type: String,
      default: "filled"
    },
    color: {
      type: String,
      default: "gray"
    },
    position: {
      type: String,
      require: true,
      default: "left"
    }
  },
  setup(props, { slots }) {
    /*Definitions*/
    const { design, color, position } = toRefs(props);

    /*Generating Style Classes*/
    const tStyle = reactive({});
    tStyle["filled"] = computed(() => {
      return "breadcrumb" + " " +
        "breadcrumb-" + design.value + "-" + color.value + " " +
        "breadcrumb-" + design.value + "-base" + " " +
        (position.value === "right" ? "flex-row-reverse" : "");
    });
    const filledContainerStyle = (item) => {
      return "breadcrumb-filled-item" + " " +
        (item.active ? "breadcrumb-item-active" : "");
    };
    tStyle["block"] = computed(() => {
      return "breadcrumb" + " " +
        "breadcrumb-" + design.value + "-base" + " " +
        (position.value === "right" ? "flex-row-reverse" : "");
    });
    tStyle["blockSub"] = computed(() => {
      return "breadcrumb-" + design.value + "-" + color.value + " ";
    });
    const blockContainerStyle = (item) => {
      return "breadcrumb-block-item" + " " +
        (item.active ? "breadcrumb-item-active" : "text-gray-700");
    };

    /*Slot Check*/
    const hasSlot = name => !!useSlots()[name];

    return {
      hasSlot,
      filledContainerStyle,
      tStyle,
      blockContainerStyle
    };
  }
});
</script>
