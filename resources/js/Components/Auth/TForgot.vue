<template>
  <full-screen-layout :bg-image="bgImage" :color="bgColor" :gradient-direction="bgGradientDirection">
    <div class="relative max-w-min">
      <!--Container-->
      <div :class="[
            'auth-container',
            deviceType !== 'phone' && radiusStyle
            ]">
        <!--Header-->
        <div :class="[
                'auth-header',
                calculatedForgotPasswordStyle
                ]">
          <!--Logo-->
          <div class="auth-logo">
            <slot name="logo" />
          </div>
          <!--Greeting-->
          <div class="auth-greeting">
            <div class="text-sm">
              <!--Status-->
              <div v-if="status" class="auth-status">
                {{ status }}
              </div>
              <slot v-else name="greeting" />
            </div>
          </div>
        </div>

        <div class="text-sm shadow p-2 bg-white bg-opacity-75 text-center font-semibold">
          <slot name="subGreeting" />
        </div>
        <!--Form-->
        <div class="auth-form">
          <form @submit.prevent="submit">
            <!--Email-->
            <div class="mt-2">
              <t-input-group label="Email" label-for="email">
                <t-input-text :radius="3" id="email" v-model="form.email" autofocus required type="email" />
              </t-input-group>
            </div>
            <!--Submit Button-->
            <div class="auth-submit-area">
              <t-button
                size="full"
                :design="buttonDesign"
                :class="{ 'opacity-25': form.processing }"
                :color="buttonColor"
                :disabled="form.processing"
                :radius="3"
              >
                Email Password Reset Link
              </t-button>
            </div>
          </form>
        </div>
      </div>
      <div class="auth-error">
        <!--Errors-->
        <transition @before-enter="beforeStyle" @after-enter="enterStyle">
          <t-alert v-if="hasErrors" :radius="deviceType !== 'phone' && 5" color="red">
            <template #icon>
              <t-bell-icon class="w-8 h-8" />
            </template>
            <ul class="list-inside text-sm">
              <li v-for="(error, key) in errors" :key="key">{{ error }}</li>
            </ul>
          </t-alert>
        </transition>
      </div>

    </div>
  </full-screen-layout>
</template>

<script>
import { defineComponent } from "vue";
import { forgotPasswordStyleMixin } from "@/Mixins/Styles/forgotPasswordStyleMixin";
import FullScreenLayout from "@/Layouts/FullScreenLayout";
import TInputGroup from "@/Components/Form/TInputGroup";
import TInputText from "@/Components/Form/Inputs/TInputText";
import TButton from "@/Components/Button/TButton";
import TAlert from "@/Components/Alert/TAlert";
import TBellIcon from "@/Components/Icon/TBellIcon";
import windowSizeCalculator from "@/Functions/windowSizeCalculator";

export default defineComponent({
  name: "TForgot",
  components: {
    TBellIcon,
    TAlert, TButton, TInputText, TInputGroup, FullScreenLayout
  },
  mixins: [forgotPasswordStyleMixin],
  props: {
    status: String,
    color: {
      type: String,
      default: "gradient-red-to-pink"
    },
    buttonDesign: {
      type: String,
      default: "filled"
    },
    buttonColor: {
      type: String,
      default: "green"
    },
    bgColor: {
      type: String,
      default: "solid-gray"
    },
    bgGradientDirection: {
      type: String
    },
    bgImage: {
      type: String
    }
  },
  setup() {
    const { deviceType } = windowSizeCalculator();

    return { deviceType };
  },
  data() {
    return {
      form: this.$inertia.form({
        email: ""
      })
    };
  },

  methods: {
    submit() {
      this.form.post(this.route("password.email"));
    },
    beforeStyle(event) {
      event.style.opacity = 0;
    },
    enterStyle(event) {
      event.style.opacity = 1;
      event.style.transition = `all 1s linear`;
    }
  },
  computed: {
    errors() {
      return this.$page.props.errors;
    },

    hasErrors() {
      return Object.keys(this.errors).length > 0;
    }
  }
});
</script>
