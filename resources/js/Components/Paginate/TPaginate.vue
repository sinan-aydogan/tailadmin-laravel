<template>
  <div :class="tStyle['container']">
    <div v-if="detail || jump" class="pagination-detail-container">
      <div class="pagination-detail-text">
        {{ detailGeneratedText }}
      </div>
      <div v-if="jump" class="pagination-detail-jump-container">
        <span>-</span>
        <input type="text"
               :maxlength="total.toString().length"
               v-model="jumpPage"
               @keypress.enter="selectPage(Number(jumpPage))"
               class="pagination-detail-jump-input"
               :style="{width:Math.floor(total.toString().length)-(.25*total.toString().length-.5)+'rem'}"
        />
        <span @click="selectPage(Number(jumpPage))" class="pagination-detail-jump-button">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clip-rule="evenodd" />
          </svg>
        </span>
      </div>
    </div>
    <div class="flex flex-grow"></div>
    <div :class="tStyle['counter']">
      <div
        :class="tStyle['previous']"
        @click="previousPage"
      >
        <svg xmlns="http://www.w3.org/2000/svg" :class="['h-6 w-6', arrowText ? '-mx-1 tablet:-ml-2 tablet:-mr-1' : '']"
             fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        <span v-if="arrowText" v-text="previousText" class="pagination-arrow-text" />
      </div>
      <template v-for="item in dynamicRange" :key="item">
        <div
          :class="itemStyle(item)"
          @click="selectPage(item)">
          {{ item }}
        </div>
      </template>
      <div
        :class="tStyle['next']"
        @click="nextPage"
      >
        <span v-if="arrowText" v-text="nextText" class="pagination-arrow-text" />
        <svg xmlns="http://www.w3.org/2000/svg" :class="['h-6 w-6', arrowText ? '-mx-1 tablet:-mr-2 tablet:-ml-1' : '']"
             fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, reactive, ref, toRefs } from "vue";

export default defineComponent({
  name: "TPaginate",
  props: {
    modelValue: {
      type: Number,
      default: 1
    },
    design: {
      type: String,
      default: "filled"
    },
    color: {
      type: String,
      default: "gray"
    },
    reverse: {
      type: Boolean,
      default: false
    },
    radius: {
      type: Number,
      default: 3
    },
    detail: {
      type: Boolean,
      default: true
    },
    jump: {
      type: Boolean,
      default: false
    },
    total: {
      type: Number,
      default: 1
    },
    range: {
      type: Number,
      default: 5
    },
    arrowText: {
      type: Boolean,
      default: true
    },

    detailText: {
      type: String,
      default: "Page $a of $b"
    },
    nextText: {
      type: String,
      default: "Next"
    },
    previousText: {
      type: String,
      default: "Previous"
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    /*Definitions*/
    const { total, radius, design, color, modelValue, range, reverse, detailText } = toRefs(props);
    const jumpPage = ref(null);

    /*Select, Next and Previous Page Change Action*/
    const nextPage = () => {
      if (Math.ceil(total.value / range.value) > Math.ceil(modelValue.value / range.value)) {
        let newPage = (Math.ceil(modelValue.value / range.value)) * range.value + 1;
        emit("update:modelValue", newPage);
      }
    };
    const previousPage = () => {
      if (modelValue.value > range.value) {
        let newPage = Math.floor(modelValue.value / range.value) * range.value;
        if (modelValue.value === newPage) {
          newPage = newPage - range.value;
        }
        emit("update:modelValue", newPage);
      }
    };
    const selectPage = (item) => {
      let newPage;
      if (isNaN(item)) {
        newPage = 1;
      } else {
        if (item > total.value) {
          newPage = total.value;
        } else if (1 > item) {
          newPage = 1;
        } else {
          newPage = item;
        }
      }

      emit("update:modelValue", newPage);
    };
    const dynamicRange = computed(() => {
      let newRange = [];
      let start;
      start = (Math.floor(modelValue.value / range.value)) * range.value;
      /*Fixing zero*/
      if (start < 0) {
        start = 1;
      } else if (modelValue.value % range.value !== 0) {
        start = start + 1;
        for (let i = start; (start + range.value) > i; i++) {
          if (total.value >= i) {
            newRange.push(i);
          }
        }
      } else if (modelValue.value % range.value === 0) {
        start = start - (range.value - 1);
        for (let i = start; (start + range.value) > i; i++) {
          if (total.value >= i) {
            newRange.push(i);
          }
        }
      }
      return newRange;
    });

    /*Generate Detail Text*/
    const detailGeneratedText = computed(() => {
      let finalText;
      finalText = detailText.value.replace("$a", modelValue.value.toString());
      finalText = finalText.replace("$b", total.value.toString());

      return finalText;
    });

    /*Generating Style Classes*/
    const tStyle = reactive({});
    tStyle["container"] = computed(() => {
      return "pagination-container" + " " +
        "pagination-" + design.value + "-base" + " " +
        "pagination-" + design.value + "-" + color.value + " " +
        (reverse.value ? "flex-row-reverse" : "");
    });
    tStyle["counter"] = computed(() => {
      return "pagination-counters" + " " +
        "radius-" + radius.value;
    });
    const itemStyle = (item) => {
      return (modelValue.value === item ? "pagination-active-item" : "pagination-item");
    };
    tStyle["previous"] = computed(() => {
      return (range.value >= modelValue.value ? "pagination-passive-arrow" : "pagination-arrow");
    });
    tStyle["next"] = computed(() => {
      return (Math.ceil(modelValue.value / range.value) === Math.ceil(total.value / range.value) ? "pagination-passive-arrow" : "pagination-arrow");
    });

    return {
      nextPage,
      previousPage,
      tStyle,
      itemStyle,
      selectPage,
      detailGeneratedText,
      dynamicRange,
      jumpPage
    };
  }
});
</script>
