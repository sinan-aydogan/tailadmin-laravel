<template>
  <div class="w-full">
    <form :enctype="enctype" @submit.prevent="$emit('submitted')">
      <!--Form Body-->
      <div class="mt-5 md:mt-0 md:col-span-2 bg-white shadow sm:rounded-md">
        <slot></slot>
        <!--Form Buttons Container-->
        <transition duration="500" name="status">
          <div v-if="submitButton || resetButton || $slots.status || $slots.button+'-area'"
               class="flex flex-wrap col-span-12 justify-center tablet:justify-end space-x-2 mr-4 py-4">
            <!--Extra Form Buttons Area-->
            <slot name="button-area"/>
            <!--Status Area-->
            <slot v-if="$slots.status" name="status"/>
            <!--Default Form Buttons-->
            <div v-else class="flex flex-wrap w-full justify-center tablet:justify-end items-center space-x-2">
              <!--Reset Button-->
              <t-button
                  v-if="resetButton"
                  :radius="3"
                  color="solid-yellow"
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
                  color="solid-green"
                  icon="plus"
                  type="submit"
              >
                Save
              </t-button>
            </div>
          </div>
        </transition>

        <div v-if="hasActions" class="flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6">
          <slot name="actions"></slot>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import TButton from "@/Components/Button/TButton";

export default {
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
    TButton,
  },

  computed: {
    hasActions() {
      return !!this.$slots.actions
    }
  },

  methods: {
    reset() {
      this.$emit('reset')
    },
  }
}
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
