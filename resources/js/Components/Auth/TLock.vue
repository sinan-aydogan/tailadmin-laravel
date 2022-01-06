<template>
  <full-screen-layout :bg-image="bgImage" :color="bgColor" :gradient-direction="bgGradientDirection">
    <div :class="['relative']">
      <!--Avatar-->
      <div class="auth-avatar-container">
        <div class="auth-avatar">
          <t-avatar
            :alt="$page.props.user.name"
            :radius="8"
            :size="7"
            :src="$page.props.user.profile_photo_url"
          />
        </div>
      </div>
      <!--Container-->
      <div :class="[
            'auth-container',
            deviceType !== 'phone' && radiusStyle
            ]">
        <form @submit.prevent="submit">
          <!--Form-->
          <div :class="[
                        'auth-lock-form',
                        calculatedLockStyle,
                        deviceType !== 'phone' && radiusStyle
                        ]">
            <!--Name-->
            <div class="auth-name">
              {{ $page.props.user.name }}
            </div>
            <!--Password-->
            <t-input-group :radius="5" class="relative" label-for="password">
              <t-input-text id="password" v-model="form.password" :radius="3" placeholder="Password">
                <template #icon>
                  <t-user-circle-icon class="w-5 h-5" />
                </template>
              </t-input-text>
            </t-input-group>
            <!--Button-->
            <t-button
              :class="{ 'opacity-25': form.processing }"
              :color="buttonColor"
              :design="buttonDesign"
              :disabled="form.processing"
              :radius="3"
            >
              {{ buttonText }}
            </t-button>
          </div>
        </form>
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
import { lockStyleMixin } from "@/Mixins/Styles/lockStyleMixin";
import FullScreenLayout from "@/Layouts/FullScreenLayout";
import TAlert from "@/Components/Alert/TAlert";
import TBellIcon from "@/Components/Icon/TBellIcon";
import TInputGroup from "@/Components/Form/TInputGroup";
import TInputText from "@/Components/Form/Inputs/TInputText";
import TUserCircleIcon from "@/Components/Icon/TUserCircleIcon";
import TAvatar from "@/Components/Avatar/TAvatar";
import TButton from "@/Components/Button/TButton";
import windowSizeCalculator from "@/Functions/windowSizeCalculator";

export default defineComponent({
  name: "TLock",
  components: { TButton, TAvatar, TUserCircleIcon, TInputText, TInputGroup, TBellIcon, TAlert, FullScreenLayout },
  mixins: [lockStyleMixin],
  props: {
    buttonColor: {
      type: String,
      default: "solid-green"
    },
    buttonDesign: {
      type: String,
      default: "filled"
    },
    bgColor: {
      type: String,
      default: "gray"
    },
    bgGradientDirection: {
      type: String
    },
    bgImage: {
      type: String
    },
    buttonText: {
      type: String,
      default: "Re-Login"
    }
  },
  setup() {
    const { deviceType } = windowSizeCalculator();

    return { deviceType };
  },
  data() {
    return {
      form: this.$inertia.form({
        password: ""
      })
    };
  },
  methods: {
    submit() {
      this.form
        .transform(data => ({
          ...data
        }))
        .post(this.route("unlock"), {
          onFinish: () => this.form.reset("password")
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
