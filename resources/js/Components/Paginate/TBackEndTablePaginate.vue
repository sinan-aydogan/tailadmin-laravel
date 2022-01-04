<template>
  <div :class="tStyle['container']">
    <div v-if="detail || jump" class="bet-pagination-detail-container">
      <div class="bet-pagination-detail-text">
        {{ detailGeneratedText }}
      </div>
      <div v-if="jump" class="bet-pagination-detail-jump-container">
        <span>-</span>
        <input type="text"
               v-model="jumpPage"
               @keypress.enter="selectPage(Number(jumpPage))"
               :class="tStyle['jumpInput']"
               :style="{width:Math.floor(pageCount.toString().length)-(.25*pageCount.toString().length-.8)+'rem'}"
               :maxlength="pageCount.toString().length"
        />
        <span :class="tStyle['jumpButton']" @click="selectPage(Number(jumpPage))">
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
        <svg xmlns="http://www.w3.org/2000/svg" :class="['h-6 w-6', arrowText ? '-mx-1 md:-ml-2 md:-mr-1' : '']"
             fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        <span v-if="arrowText" v-text="previousText" class="bet-pagination-arrow-text" />
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
        <span v-if="arrowText" v-text="nextText" class="bet-pagination-arrow-text" />
        <svg xmlns="http://www.w3.org/2000/svg" :class="['h-6 w-6', arrowText ? '-mx-1 md:-mr-2 md:-ml-1' : '']"
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
  name: "TBackEndTablePaginate",
  props: {
    modelValue: {
      type: Number,
      default: 1
    },
    darkMode:{
      type: Boolean,
      default: false
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
    perPageItem: {
      type: Number,
      default:1
    },
    arrow: {
      type: Boolean,
      default: true
    },
    arrowText: {
      type: Boolean,
      default: true
    },
    detailText: {
      type: String,
      default: "detailText"
    },
    nextText: {
      type: String,
      default: "next"
    },
    previousText: {
      type: String,
      default: "previous"
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    /*Definitions*/
    const { total, radius, darkMode, modelValue, range, perPageItem,reverse, detailText } = toRefs(props);
    const jumpPage = ref(null);

    /*Select, Next and Previous Page Change Action*/
    const nextPage = () => {
      if (Math.ceil(pageCount.value / range.value) > Math.ceil(modelValue.value / range.value)) {
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
        if (item > pageCount.value) {
          newPage = pageCount.value;
        } else if (1 > item) {
          newPage = 1;
        } else {
          newPage = item;
        }
      }

      emit("update:modelValue", newPage);
    };
    const pageCount = computed(()=>{
      return Math.ceil(total.value/perPageItem.value)
    })
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
          if (pageCount.value >= i) {
            newRange.push(i);
          }
        }
      } else if (modelValue.value % range.value === 0) {
        start = start - (range.value - 1);
        for (let i = start; (start + range.value) > i; i++) {
          if (pageCount.value >= i) {
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
      finalText = finalText.replace("$b", pageCount.value.toString());

      return finalText;
    });

    /*Generating Style Classes*/
    const tStyle = reactive({});
    tStyle["container"] = computed(() => {
      return "bet-pagination-container" + " " +
        "bet-pagination-" + (darkMode.value ? 'dark' : 'light')+ " " +
        (reverse.value ? "flex-row-reverse" : "");
    });
    tStyle["counter"] = computed(() => {
      return "bet-pagination-counters" + " " +
        "radius-" + radius.value;
    });
    tStyle["jumpInput"] = computed(() => {
      return "bet-pagination-detail-jump-input" + " " +
        "radius-tl-" + radius.value + " " + "radius-bl-" + radius.value;
    });
    tStyle["jumpButton"] = computed(() => {
      return "bet-pagination-detail-jump-button" + " " +
        "radius-tr-" + radius.value + " " + "radius-br-" + radius.value;
    });
    const itemStyle = (item) => {
      return (modelValue.value === item ? "bet-pagination-active-item" : "bet-pagination-item");
    };
    tStyle["previous"] = computed(() => {
      return (range.value >= modelValue.value ? "bet-pagination-passive-arrow" : "bet-pagination-arrow");
    });
    tStyle["next"] = computed(() => {
      return (Math.ceil(modelValue.value / range.value) === Math.ceil(pageCount.value / range.value) ? "bet-pagination-passive-arrow" : "bet-pagination-arrow");
    });

    return {
      nextPage,
      previousPage,
      tStyle,
      itemStyle,
      selectPage,
      detailGeneratedText,
      dynamicRange,
      jumpPage,
      pageCount
    };
  }
});
</script>
