<template>
  <t-full-screen-card :bg-image="bgImage" :color="bgColor" :gradient-direction="bgGradientDirection">
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
                calculatedLoginStyle
                ]">
          <!--Logo-->
          <div class="auth-logo">
            <slot name="logo"/>
          </div>
          <!--Greeting-->
          <div class="auth-greeting">
            <div class="text-sm">
              <!--Status-->
              <div v-if="status" class="auth-status">
                {{ status }}
              </div>
              <slot v-else name="greeting"/>
            </div>
          </div>
        </div>

        <!--Form-->
        <div class="auth-form">
          <form @submit.prevent="submit">
            <!--Email-->
            <div>
              <t-input-group label="Email" label-for="email">
                <t-input-text
                    id="email"
                    v-model="form.email"
                    :radius="3"
                    autofocus
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
                    autocomplete="current-password"
                    required
                    type="password"
                />
              </t-input-group>
            </div>
            <div class="auth-remember">
              <!--Remember Me-->
              <label class="flex items-center">
                <input
                    v-model="form.remember"
                    name="remember"
                    type="checkbox"
                />
                <span class="auth-remember-text">Remember me</span>
              </label>
              <!--Forgot Password-->
              <inertia-link
                  v-if="canResetPassword"
                  :href="route('password.request')"
                  class="auth-forgot-password"
              >
                Forgot your password?
              </inertia-link>
            </div>
            <!--Submit Area-->
            <div class="auth-submit-area">
              <!--Register Button-->
              <t-button
                  v-if="registerButton"
                  :class="{ 'opacity-25': form.processing }"
                  :color="registerButtonColor"
                  :link="route('register')"
                  :radius="3"
                  type="button"
              >
                Register
              </t-button>

              <!--Submit Button-->
              <t-button :class="{ 'opacity-25': form.processing }"
                        :color="loginButtonColor"
                        :disabled="form.processing"
                        :radius="3" class="ml-4"
              >
                Login
              </t-button>
            </div>
          </form>
        </div>
      </div>
      <div class="auth-error">
        <!--Errors-->
        <transition @before-enter="beforeStyle" @after-enter="enterStyle">
          <t-alert v-if="hasErrors" :radius="deviceType !== 'phone' && 5" color="solid-red">
            <template #icon>
              <t-bell-icon class="w-8 h-8"/>
            </template>
            <ul class="list-inside text-sm">
              <li v-for="(error, key) in errors" :key="key">{{ error }}</li>
            </ul>
          </t-alert>
        </transition>
      </div>
    </div>
  </t-full-screen-card>
</template>

<script>
import {loginStyleMixin} from "@/Mixins/Styles/loginStyleMixin";
import TAlert from "@/Components/Alert/TAlert";
import TBellIcon from "@/Components/Icon/TBellIcon";
import TButton from "@/Components/Button/TButton";
import TFullScreenCard from "@/Components/Card/TFullScreenCard";
import TInputGroup from "@/Components/Form/TInputGroup";
import TInputText from "@/Components/Form/Inputs/TInputText";
import {windowSizeMixin} from "@/Mixins/windowSizeMixin";

export default {
  name: "TLogin",
  components: {TAlert, TBellIcon, TButton, TFullScreenCard, TInputGroup, TInputText},
  mixins: [ windowSizeMixin,loginStyleMixin],
  props: {
    canResetPassword: Boolean,
    status: String,
    registerButtonColor: {
      type: String,
      default: 'solid-white'
    },
    loginButtonColor: {
      type: String,
      default: 'solid-green'
    },
    bgColor: {
      type: String,
      default: 'solid-gray'
    },
    bgGradientDirection: {
      type: String,
    },
    bgImage: {
      type: String
    },
    registerButton: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      form: this.$inertia.form({
        email: '',
        password: '',
        remember: false
      })
    }
  },

  methods: {
    submit() {
      this.form
          .transform(data => ({
            ...data,
            remember: this.form.remember ? 'on' : ''
          }))
          .post(this.route('login'), {
            onFinish: () => this.form.reset('password'),
          })
    },
    beforeStyle(event) {
      event.style.opacity = 0
    },
    enterStyle(event) {
      event.style.opacity = 1
      event.style.transition = `all 1s linear`
    }
  },
  computed: {
    errors() {
      return this.$page.props.errors
    },

    hasErrors() {
      return Object.keys(this.errors).length > 0;
    },
  }
}
</script>

<style scoped>

</style>
