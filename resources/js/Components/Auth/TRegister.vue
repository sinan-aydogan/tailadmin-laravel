<template>
  <full-screen-layout :bg-image="bgImage" :color="bgColor" :gradient-direction="bgGradientDirection">
    <div
      :class="[
                'relative',
                deviceType === 'phone' && 'w-full'
                ]"
    >
      <!--Container-->
      <div :class="[
            'auth-container',
            deviceType !== 'phone' && radiusStyle
            ]">
        <!--Header-->
        <div :class="[
                'auth-header',
                calculatedRegisterStyle
                ]">
          <!--Logo-->
          <div class="auth-logo">
            <slot name="logo" />
          </div>
          <!--Greeting-->
          <div class="auth-greeting">
            <!--Status-->
            <div v-if="status" class="auth-status">
              {{ status }}
            </div>
            <slot v-else name="greeting" />
          </div>
        </div>

        <!--Form-->
        <div class="auth-form">
          <form @submit.prevent="submit">
            <!--Name-->
            <div>
              <t-input-group label="Name" label-for="name">
                <t-input-text
                  id="name"
                  v-model="form.name"
                  :radius="3"
                  autocomplete="name"
                  autofocus
                  required
                  type="text"
                />
              </t-input-group>
            </div>
            <!--Email-->
            <div class="mt-4">
              <t-input-group label="Email" label-for="email">
                <t-input-text
                  id="email"
                  v-model="form.email"
                  :radius="3"
                  required
                  type="email"
                />
              </t-input-group>
            </div>
            <!--Password-->
            <div class="mt-4">
              <t-input-group label="Password" label-for="password">
                <t-input-text
                  id="password"
                  v-model="form.password"
                  :radius="3"
                  autocomplete="new-password"
                  required
                  type="password"
                />
              </t-input-group>
            </div>
            <!--Confirm Password-->
            <div class="mt-4">
              <t-input-group label="Confirm Password" label-for="password_confirmation">
                <t-input-text
                  id="password_confirmation"
                  v-model="form.password_confirmation"
                  :radius="3"
                  autocomplete="new-password"
                  required
                  type="password"
                />
              </t-input-group>
            </div>
            <!--Terms-->
            <div v-if="$page.props.jetstream.hasTermsAndPrivacyPolicyFeature" class="mt-4">
              <t-input-group label-for="terms">
                <div class="flex items-center">
                  <input
                    id="terms"
                    v-model="form.terms"
                    name="terms"
                    type="checkbox"
                  />

                  <div class="ml-2">
                    I agree to the
                    <Link
                      :href="route('terms.show')"
                      class="underline text-sm text-gray-600 hover:text-gray-900"
                      target="_blank"
                    >
                      Terms of Service
                    </Link>
                    and
                    <Link
                      :href="route('policy.show')"
                      class="underline text-sm text-gray-600 hover:text-gray-900"
                      target="_blank"
                    >
                      Privacy Policy
                    </Link>
                  </div>
                </div>
              </t-input-group>
            </div>

            <div class="flex items-center justify-end mt-4">
              <Link
                :href="route('login')"
                class="underline text-sm text-gray-600 hover:text-gray-900"
              >
                Already registered?
              </Link>

              <t-button
                :class="{ 'opacity-25': form.processing }"
                :disabled="form.processing"
                :radius="3"
                class="ml-4"
                :color="buttonColor"
                :design="buttonDesign"
              >
                Register
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
import { registerStyleMixin } from "@/Mixins/Styles/registerStyleMixin";
import TAlert from "@/Components/Alert/TAlert";
import TBellIcon from "@/Components/Icon/TBellIcon";
import TButton from "@/Components/Button/TButton";
import FullScreenLayout from "@/Layouts/FullScreenLayout";
import TInputGroup from "@/Components/Form/TInputGroup";
import TInputText from "@/Components/Form/Inputs/TInputText";
import { Link } from "@inertiajs/inertia-vue3";
import windowSizeCalculator from "@/Functions/windowSizeCalculator";

export default defineComponent({
  name: "TRegister",
  components: {
    TAlert,
    TBellIcon,
    TButton,
    FullScreenLayout,
    TInputGroup,
    TInputText,
    Link
  },
  mixins: [registerStyleMixin],
  props: {
    bgColor: {
      type: String,
      default: "solid-gray"
    },
    bgGradientDirection: {
      type: String
    },
    bgImage: {
      type: String
    },
    buttonDesign: {
      type: String,
      default: "filled"
    },
    buttonColor: {
      type: String,
      default: "green"
    },
    status: {
      type: String
    },
    privacyPolicyFeature: Boolean,
    termsLink: String,
    policyLink: String
  },
  setup() {
    const { deviceType } = windowSizeCalculator();

    return { deviceType };
  },
  data() {
    return {
      form: this.$inertia.form({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        terms: false
      }),
    };
  },

  methods: {
    submit() {
      this.form.post(this.route("register"), {
        onFinish: () => this.form.reset("password", "password_confirmation")
      });
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
