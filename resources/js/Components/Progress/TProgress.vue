<template>
  <div class="progress">
    <div class="progress-container">
      <div v-text="title"></div>
      <div>{{ tCounterText }}</div>
    </div>
    <transition name="progress">
      <div :class="tStyle['height']">
        <transition name="progress">
          <div
            :class="tStyle['line']"
            :style="'width:'+counter+'%'"
          />
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
import { defineComponent, toRefs, computed, reactive } from "vue";

export default defineComponent({
  name: "TProgress",
  props: {
    title: {
      type: String,
      default: null
    },
    modelValue: {
      type: Number,
      default: 10
    },
    color: {
      type: String,
      default: "green"
    },
    height: {
      type: Number,
      default: 3
    },
    counterText: {
      type: String,
      default: "$a%"
    },
    max: {
      type: Number,
      default: 100
    }
  },
  setup(props) {
    /*Definitions*/
    const { counterText, modelValue, color, height, max } = toRefs(props);

    /*Counter*/
    const counter = computed(() => {
      if (modelValue.value >= 0 && modelValue.value !== null && !isNaN(modelValue.value)) {
        if ((modelValue.value / max.value) * 100 > 100) {
          return 100;
        } else {
          return (modelValue.value / max.value) * 100;
        }
      } else {
        return 0;
      }
    });
    const tCounterText = computed(() => {
      let finalText;
      finalText = counterText.value.toString().replace("$a", max.value === 100 ? counter.value.toString() : modelValue.value);
      return finalText;
    });

    /*Generating Style Classes*/
    const tStyle = reactive({});
    tStyle["height"] = computed(() => {
      return "progress-value" + " " +
        "progress-height-" + height.value;
    });
    tStyle["line"] = computed(() => {
      return "progress-counter-line" + " " +
        "progress-" + color.value;
    });


    return { counter, tCounterText, tStyle };
  }
});
</script>
