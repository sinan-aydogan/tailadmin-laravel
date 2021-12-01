<template>
  <transition name="alert">
    <!--Alert Container-->
    <div
      v-if="showAlertBox"
      :class="tStyle['container']"
    >
      <!--Inline Line-->
      <div v-if="design.includes('line')"
           id="line"
           :class="tStyle['line']"
      />

      <!--Alert Icon-->
      <div v-if="hasSlot('icon') && design !== 'elegant'"
           class="alert-icon"
      >
        <slot name="icon"></slot>
      </div>


      <!--Alert Content-->
      <div class="alert-content-container">
        <!--Elegant Title-->
        <div v-if="title && design === 'elegant'" id="elegant-title">
          {{ title }}
        </div>
        <div class="alert-content">
          <!--General Title (except elegant style)-->
          <span v-if="title && design !== 'elegant'" class="alert-title">
            {{ title }}
          </span>
          <!--Content Slot-->
          <div>
            <slot></slot>
          </div>
        </div>
      </div>

      <!--Close Icon-->
      <span v-if="closeable" class="alert-close" @click="close">
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </span>

      <!--Countdown Line-->
      <div v-if="timer" class="alert-countdown">
        <div id="countdown" :style="{width: countDownCounter+'%'}"></div>
      </div>
    </div>
  </transition>
</template>
<script>
import { defineComponent, ref, toRefs, computed, reactive } from "vue";

export default defineComponent({
  name: "TAlert",
  props: {
    id: {
      type: String,
      default: function() {
        return "alert-" + Number(new Date());
      }
    },
    closeable: {
      type: Boolean,
      default: false
    },
    timer: {
      type: Number,
      default: null,
      required: false
    },
    title: {
      type: String,
      default: null
    },
    radius: {
      type: Number,
      default: 3
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
  emits: ["destroy"],

  setup(props, { slots, emit }) {
    /*Definitions*/
    const { design, color, radius, timer, id } = toRefs(props);
    const showAlertBox = ref(true);

    /*Generating Style Classes*/
    const tStyle = reactive({});
    tStyle["container"] = computed(() => {
      return "alert " +
        "alert-" + design.value + "-" + color.value + " " +
        "alert-" + design.value + "-base" + " " +
        "radius-" + radius.value;
    });
    tStyle["line"] = computed(() => {
      return (design.value === "inline" ? "alert-inline-line" : "alert-outline-line");
    });

    /*Close Function*/
    const close = () => {
      showAlertBox.value = false;
      emit("destroy", id.value);
    };

    /*Timer*/
    const timerCounter = ref(0);
    const countDownCounter = ref(0);

    if (timer.value) {
      /*Timer Function*/
      setTimeout(() => {
        showAlertBox.value = false;
        emit("destroy", id.value);
      }, timer.value);

      /*Count Down Function*/
      let countDownFn = setInterval(() => {
        if (timer.value >= timerCounter.value) {
          countDownCounter.value = 100 - (timerCounter.value / timer.value) * 100;
          timerCounter.value += 4;
        } else {
          clearInterval(countDownFn);
        }
      }, 1);
    }

    /*Slot Check*/
    const hasSlot = name => !!slots[name];

    return { showAlertBox, tStyle, countDownCounter, timerCounter, hasSlot, close };
  }
});
</script>

<style scoped>
/* eslint-disable no-alert */
.alert-enter-active, .alert-leave-active {
  transition: opacity ease-out .75s;
}

.alert-enter, .alert-leave-to {
  opacity: 0;
  height: revert;
}

.alert-enter-to, .alert-leave {
  opacity: 1;
  height: revert;
}

/* eslint-disable no-alert */
</style>
