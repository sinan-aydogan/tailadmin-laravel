<template>
  <div class="w-full">
    <form :enctype="enctype" @submit.prevent="$emit('submitted')">
      <!--Form Body-->
      <t-content-card :radius="conf.app.leftMenu.radius">
        <div class="flex flex-col w-full">
          <slot></slot>
          <!--Form Buttons Container-->
          <transition duration="500" name="status">
            <div v-if="submitButton || resetButton || $slots.status || $slots.button+'-area'"
                 class="flex flex-wrap col-span-12 justify-center md:justify-end space-x-2 mr-4 py-4">
              <!--Extra Form Buttons Area-->
              <slot name="button-area" />
              <!--Status Area-->
              <slot v-if="$slots.status" name="status" />
              <!--Default Form Buttons-->
              <div v-else class="flex flex-wrap w-full justify-center md:justify-end items-center space-x-2">
                <!--Reset Button-->
                <t-button
                  v-if="resetButton"
                  :radius="3"
                  design="filled"
                  color="yellow"
                  type="button"
                  @click.native="reset"
                >
                  Reset
                </t-button>
                <!--Save Button-->
                <t-button
                  v-if="submitButton"
                  :disabled="disabled"
                  :radius="3"
                  design="filled"
                  color="green"
                  icon="plus"
                  type="submit"
                >
                  Save
                </t-button>
              </div>
            </div>
          </transition>

          <div v-if="hasSlot('hasActions')" class="flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6">
            <slot name="actions"></slot>
          </div>
        </div>
      </t-content-card>
    </form>
  </div>
</template>

<script>
import { defineComponent, inject } from "vue";

import TButton from "@/Components/Button/TButton";
import TContentCard from "@/Components/Card/TContentCard";

export default defineComponent({
  props: {
    enctype: String,
    disabled: Boolean,
    resetButton: {
      type: Boolean,
      default: true
    },
    submitButton: {
      type: Boolean,
      default: true
    }
  },
  components: {
    TContentCard,
    TButton
  },
  emits: ["reset"],

  setup(props, { emit, slots }) {
    /*Definitions*/
    const conf = inject("conf");

    /*Reset*/
    const reset = () => {
      emit("reset");
    };

    /*Slot Check*/
    const hasSlot = name => !!slots[name];
    return { conf, hasSlot, reset };
  }
});
</script>


<style>
/*Status Change Effect*/
.status-enter-active, .status-leave-active {
  transition: all 1s;
}

.status-enter, .status-leave-to {
  opacity: 0;
}

.status-enter-to, .status-leave {
  opacity: 1;
}
</style>
