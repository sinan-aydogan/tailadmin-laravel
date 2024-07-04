<template>
  <transition name="modal">
    <!--Container-->
    <div v-if="modelValue" :class="tStyle['container'] ">
      <!--Countdown Line-->
      <div v-if="timer" class="modal-countdown">
        <div id="countdown" :style="{width: countDownCounter+'%'}"></div>
      </div>
      <!--Modal Content Box-->
      <div
        :class="tStyle['box'] "
        ref="modalItem"
      >
        <!--Header-->
        <div class="modal-header">
          <!--Titles-->
          <div v-if="design==='elegant' && (title || subTitle)" id="title-container">
            <span v-if="design==='elegant'" id="top-title" v-text="title" />
            <span v-if="design==='elegant'" id="top-sub-title" v-text="subTitle" />
          </div>
          <!--Buttons-->
          <div :class="tStyle['actionsContainer']">
            <!--Action-->
            <div v-if="hasSlot('action-buttons')" class="modal-action-buttons">
              <slot name="action-buttons" />
            </div>
            <!--Close-->
            <div
              v-if="closeButton"
              class="modal-close-button"
              @click="close()"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
        </div>
        <!--Header Separator-->
        <div v-if="design==='elegant'" id="header-separator" />
        <!--Content-->
        <div :class="tStyle['content']">
          <!--Icon-->
          <div v-if="icon || hasSlot('icon')" class="modal-icon">
            <svg v-if="icon" v-html="iconList.find(i=>i.key === icon).content" :class="tStyle['icon'] " />
            <slot v-else name="icon" />
          </div>
          <!--Titles-->
          <div v-if="design!=='elegant' && (title || subTitle)" id="content-title-container">
            <span v-if="design!=='elegant' && title" id="content-title" v-text="title" />
            <span v-if="design!=='elegant' && subTitle" id="content-sub-title" v-text="subTitle" />
          </div>
          <!--Content-->
          <div v-if="content || hasSlot('content')" class="modal-content">
            <span v-if="content" v-html="content" class="modal-content-default"/>
            <slot name="content" />
          </div>
        </div>
        <!--Footer-->
        <div
          v-if="hasSlot('footer-left') || hasSlot('footer-center') || hasSlot('footer-right')"
          class="modal-footer-container"
        >
          <!--Left-->
          <div class="modal-footer-left">
            <span class="modal-footer-item" v-show="hasSlot('footer-left')">
              <slot name="footer-left" />
            </span>
          </div>
          <!--Center-->
          <div class="modal-footer-center">
            <span class="modal-footer-item" v-show="hasSlot('footer-center')">
              <slot name="footer-center" />
            </span>
          </div>
          <!--Right-->
          <div class="modal-footer-right">
            <span class="modal-footer-item" v-show="hasSlot('footer-right')">
              <slot name="footer-right" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { computed, defineComponent, reactive, toRefs, watch, useSlots } from "vue";
import { ref } from "vue";
import { useKeypress } from "vue3-keypress";
import { onClickOutside } from "@vueuse/core";

export default defineComponent({
  name: "TModal",
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: function() {
        return "modal-" + Number(new Date());
      }
    },
    bgColor: {
      type: String,
      default: "gray"
    },
    darkMode: {
      type: Boolean,
      default: false
    },
    design: {
      type: String,
      default: "filled"
    },
    color: {
      type: String,
      default: "white"
    },
    radius: {
      type: Number,
      default: 3
    },
    esc: {
      type: Boolean,
      default: false
    },
    outSideClick: {
      type: Boolean,
      default: false
    },
    closeButton: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: null,
      require: false
    },
    subTitle: {
      type: String,
      default: null,
      require: false
    },
    content: {
      type: String,
      default: null,
      require: false
    },
    icon: {
      type: String,
      default: null,
      require: false
    },
    timer: {
      type: Number,
      default: null,
      require: false
    }
  },
  emits: ['destroy', 'update:modelValue'],
  setup(props, { slots, emit }) {
    /*Definitions*/
    const {
      modelValue,
      id,
      darkMode,
      design,
      color,
      radius,
      bgColor,
      esc,
      outSideClick,
      icon,
      timer,
      content,
      title,
      subTitle
    } = toRefs(props);
    const modalItem = ref(null);
    const iconList = [
      {
        key: "success",
        content: "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-6 w-6\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n" +
          "  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\" />\n" +
          "</svg>",
        color: "text-green-500"
      },
      {
        key: "warning",
        content: "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-6 w-6\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n" +
          "  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\" />\n" +
          "</svg>",
        color: "text-yellow-500"
      },
      {
        key: "error",
        content: "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-6 w-6\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n" +
          "  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z\" />\n" +
          "</svg>",
        color: "text-red-500"
      },
      {
        key: "info",
        content: "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-6 w-6\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n" +
          "  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z\" />\n" +
          "</svg>",
        color: "bg-blue-500"
      },
      {
        key: "question",
        content: "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-6 w-6\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n" +
          "  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z\" />\n" +
          "</svg>",
        color: "text-indigo-500"
      }
    ];

    /*ESC Key Action*/
    if (esc.value) {
      const someSuccessCallback = () => {
        close();
      };

      useKeypress({
        keyEvent: "keydown",
        keyBinds: [
          {
            keyCode: "esc", // or keyCode as integer, e.g. 40
            success: someSuccessCallback
          }
        ]
      });
    }

    /*Outside Click Action*/
    if (outSideClick.value) {
      onClickOutside(modalItem, () => close());
    }

    /*Close Action*/
    const close = () => {
      emit("destroy", id.value);
      emit("update:modelValue", false);
    };

    /*Timer*/
    watch(modelValue, (value) => {
      if (value && timer.value) {
        autoClose();
      }
    });
    const timerCounter = ref(0);
    const countDownCounter = ref(0);
    const autoClose = () => {
      /*Timer Function*/
      setTimeout(() => {
        close();
      }, timer.value);

      /*Count Down Function*/
      const countDownFn = setInterval(() => {
        if (timer.value >= timerCounter.value) {
          countDownCounter.value = (timerCounter.value / timer.value) * 100;
          timerCounter.value += 4;
        } else {
          timerCounter.value = 0;
          countDownCounter.value = 0;
          clearInterval(countDownFn);
        }
      }, 1);
    };

    /*Generating Style Classes*/
    const tStyle = reactive({})
    tStyle['container'] = computed(() => {
      return "modal-container" + " " +
        "modal-container-" + bgColor.value;
    });
    tStyle['actionsContainer'] = computed(() => {
      return "modal-actions-container" + " " +
        (design.value!=='elegant' ? 'w-full justify-end' : '');
    });
    tStyle['content'] = computed(() => {
      let style
      if((content.value || title.value || subTitle.value) && !hasSlot('content') ){
        style='modal-content-container'
      }
      if(hasSlot('content')){
        style='modal-custom-content-container'
      }
      if(content.value && hasSlot('content')){
        style='modal-content-container'
      }

      if(!hasSlot('footer-left') && !hasSlot('footer-center') && !hasSlot('footer-right')){
        style = style + ' ' + 'pb-8'
      }
      return style
    });
    tStyle['box']  = computed(() => {
      return "modal-box" + " " +
        "modal-" + design.value + (darkMode.value ? "-dark" : "-light") + " " +
        "modal-" + design.value + "-base" + " " +
        "modal-" + design.value + "-" + color.value + " " +
        "radius-" + radius.value;
    });
    tStyle['icon']  = computed(() => {
      return "modal-icon-default" + " " +
        iconList.find(i => i.key === icon.value).color;
    });

    /*Icon*/

    /*Slot Check*/
    const hasSlot = name => !!useSlots()[name];

    return { hasSlot, close, tStyle, iconList, countDownCounter, modalItem };
  }
});
</script>

<style scoped>
.modal-enter-active, .modal-leave-active {
  transition: all 500ms;
}

.modal-enter-from, .modal-leave-to {
  opacity: 0;
}

.modal-leave-from, .modal-enter-to {
  opacity: 1;
}
</style>
