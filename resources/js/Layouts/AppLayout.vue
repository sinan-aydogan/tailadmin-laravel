<template>
  <div class="overflow-hidden">
    <Head :title="title" />
    <jet-banner />
    <div class="flex h-screen bg-gray-100">
      <!--Left Area / Left Menu -->
      <transition name="appLeftMenu">
        <left-menu
          v-show="!hiddenLeftMenu"
          @showLeftMenuEmit="showingLeftMenu = $event"
        >
          <div
            v-for="(item, index) in menuList"
            :key="index"
            class="flex flex-col px-2 py-1"
          >
            <left-menu-item
              :key="index"
              :item="item"
              @showLeftMenuEmit="showingLeftMenu = $event"
            ></left-menu-item>
          </div>
        </left-menu>
      </transition>
      <!--Main Area-->
      <div class="main-area">
        <!--Top Menu-->
        <div :class="[
            'top-menu',
            deviceType === 'tablet' || deviceType === 'phone'  ? 'w-screen' : 'w-full'
            ]">
          <!--Left Menu Trigger-->
          <transition
            class="trigger"
            enter-active-class="transition duration-300"
            enter-from-class="transform opacity-50 scale-0"
            enter-to-class="transform opacity-100 "
            leave-active-class="transition duration-300 scale-100"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-90"
            @click="leftMenuTrigger"
            mode="out-in"

          >
            <t-hamburger-menu-trigger-icon
              v-if="showingLeftMenu === false"
              key="false"
              class="w-8"
            />
            <t-x-icon
              v-else
              key="true"
              class="w-8"
            />
          </transition>
          <!--Search Box-->
          <div class="search-box-container">
            <div class="search-box">
              <svg
                aria-hidden="true"
                class="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  clip-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  fill-rule="evenodd"
                />
              </svg>
              <input
                placeholder="Search..."
                type="search"
              />
            </div>
          </div>
          <!--User Menu-->
          <div class="user-menu">

            <!--Notification and Logout Buttons-->
            <div class="action-section">
              <!--Notifications-->
              <t-dropdown align="right" trigger-type="rich">
                <template #trigger>
                  <button class="trigger-button">
                                        <span
                                          class="absolute top-0 right-0 w-2 h-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
                    <span
                      class="absolute top-0 right-0 w-2 h-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
                    <svg
                      aria-hidden="true"
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                    </svg>
                  </button>
                </template>
                <template #default>
                  <div class="dropdown-list-container">
                    <!--Pending Works-->
                    <div class="dropdown-header">
                      Pending Works
                    </div>
                    <!--To-Do-->
                    <button class="dropdown-item">2 To-Do's</button>
                    <!--Calibration-->
                    <button class="dropdown-item">5 Calibration Task's</button>
                    <!--Messages-->
                    <div class="border-t border-gray-100"></div>
                    <button class="dropdown-item">9 Messages</button>
                  </div>
                </template>
              </t-dropdown>
            </div>
            <!--User Menu-->
            <t-dropdown
              align="right"
              trigger-type="rich"
            >
              <template #trigger>
                <!--If The user has a avatar-->
                <button
                  v-if="$page.props.jetstream.managesProfilePhotos"
                  class="trigger-button tablet:gap-2"
                  @click="hamburgerMenuTrigger"
                >
                  <!--User Info-->
                  <span class="staff-info">
                    <span class="staff-name">
                      {{ $page.props.user.name }}
                    </span>
                    <span class="staff-title">
                      {{ $page.props.user.title }}
                    </span>
                  </span>
                  <!--User Photo-->
                  <t-avatar
                    :alt="$page.props.user.name"
                    :indicator="{
                          color:'green',
                          label : '',
                          position: 'rb'
                        }"
                    :radius="8"
                    :size="3"
                    :src="$page.props.user.profile_photo_url"
                  />
                </button>
                <!--If The user has not a avatar-->
                <span v-else class="inline-flex rounded-md">
                  <button
                    class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                    type="button">
                    {{ $page.props.user.name }}
                    <svg class="ml-2 -mr-0.5 h-4 w-4" fill="currentColor"
                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path clip-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            fill-rule="evenodd" />
                    </svg>
                  </button>
                </span>
              </template>
              <template #default>
                <div v-show="deviceType !== 'phone'" class="dropdown-list-container">
                  <!-- Account Management -->
                  <div class="dropdown-header">
                    Manage Account
                  </div>

                  <!--Profile-->
                  <Link :href="route('profile.show')">
                    <div class="dropdown-item">
                      Profile
                    </div>
                  </Link>

                  <!--API Tokens-->
                  <Link v-if="$page.props.jetstream.hasApiFeatures"
                        :href="route('api-tokens.index')">
                    <div class="dropdown-item">
                      Profile
                    </div>
                  </Link>

                  <!-- Team Management -->
                  <div class="border-t border-gray-100"></div>
                  <template v-if="$page.props.jetstream.hasTeamFeatures">
                    <div class="dropdown-header">
                      Manage Team
                    </div>

                    <!-- Team Settings -->
                    <Link :href="route('teams.show', $page.props.user.current_team)">
                      <div class="dropdown-item">
                        Team Settings
                      </div>
                    </Link>

                    <!--Create New Team-->
                    <Link v-if="$page.props.jetstream.canCreateTeams"
                          :href="route('teams.create')">
                      <div class="dropdown-item">
                        Create New Team
                      </div>
                    </Link>

                    <!-- Team Switcher -->
                    <div class="border-t border-gray-100"></div>
                    <div class="dropdown-header">
                      Switch Teams
                    </div>

                    <template v-for="team in $page.props.user.all_teams" :key="team.id">
                      <form @submit.prevent="switchToTeam(team)">
                        <button class="dropdown-item">
                          <span class="flex items-center">
                            <t-check-circle-icon
                              v-if="team.id === $page.props.user.current_team_id"
                              class="mr-2 h-5 w-5 text-green-400"
                            />
                            {{ team.name }}
                          </span>

                        </button>
                      </form>
                    </template>
                  </template>

                  <!-- Authentication -->
                  <form @submit.prevent="logout">
                    <button class="w-full border-red-500">
                      <span class="logout-button">
                        <t-log-out-icon class="w-5 h-5" /> Logout
                      </span>
                    </button>
                  </form>
                </div>
              </template>
            </t-dropdown>
          </div>
        </div>
        <!-- Responsive Navigation Menu -->
        <div v-if="deviceType === 'phone' && showingNavigationDropdown">
          <div class="pt-2 pb-3 space-y-1">
            <jet-responsive-nav-link :active="route().current('dashboard')" :href="route('dashboard')">
              Dashboard
            </jet-responsive-nav-link>
          </div>

          <!-- Responsive Settings Options -->
          <div class="pt-4 pb-1 border-t border-gray-200">
            <div class="flex items-center px-4">
              <div v-if="$page.props.jetstream.managesProfilePhotos" class="flex-shrink-0 mr-3">
                <img :alt="$page.props.user.name"
                     :src="$page.props.user.profile_photo_url"
                     class="h-10 w-10 rounded-full object-cover" />
              </div>

              <div>
                <div class="font-medium text-base text-gray-800">{{ $page.props.user.name }}</div>
                <div class="font-medium text-sm text-gray-500">{{ $page.props.user.email }}</div>
              </div>
            </div>

            <div class="mt-3 space-y-1">
              <jet-responsive-nav-link :active="route().current('profile.show')"
                                       :href="route('profile.show')">
                Profile
              </jet-responsive-nav-link>

              <jet-responsive-nav-link v-if="$page.props.jetstream.hasApiFeatures"
                                       :active="route().current('api-tokens.index')"
                                       :href="route('api-tokens.index')">
                API Tokens
              </jet-responsive-nav-link>

              <!-- Authentication -->
              <form method="POST" @submit.prevent="logout">
                <jet-responsive-nav-link as="button">
                  Logout
                </jet-responsive-nav-link>
              </form>

              <!-- Team Management -->
              <template v-if="$page.props.jetstream.hasTeamFeatures">
                <div class="border-t border-gray-200"></div>

                <div class="block px-4 py-2 text-xs text-gray-400">
                  Manage Team
                </div>

                <!-- Team Settings -->
                <jet-responsive-nav-link :active="route().current('teams.show')"
                                         :href="route('teams.show', $page.props.user.current_team)">
                  Team Settings
                </jet-responsive-nav-link>

                <jet-responsive-nav-link :active="route().current('teams.create')"
                                         :href="route('teams.create')">
                  Create New Team
                </jet-responsive-nav-link>

                <!-- Team Switcher -->
                <div class="border-t border-gray-200"></div>
                <div class="block px-4 py-2 text-xs text-gray-400">
                  Switch Teams
                </div>
                <template v-for="team in $page.props.user.all_teams" :key="team.id">
                  <form @submit.prevent="switchToTeam(team)">
                    <jet-responsive-nav-link as="button">
                      <div class="flex items-center">
                        <svg v-if="team.id === $page.props.user.current_team_id"
                             class="mr-2 h-5 w-5 text-green-400" fill="none"
                             stroke="currentColor" stroke-linecap="round"
                             stroke-linejoin="round"
                             stroke-width="2" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <div>{{ team.name }}</div>
                      </div>
                    </jet-responsive-nav-link>
                  </form>
                </template>
                <!--Dark Mode Selector-->
                <div class="theme-changer-container">
                  <div
                    v-for="mode in ['auto','dark','light']"
                    :key="mode"
                    :class="[
                    'theme-changer-button',
                    'theme-changer-button-'+mode,
                    mode === darkMode ? 'theme-changer-button-active':'',
                    ]"
                    @click="darkMode=mode"
                  >
                    <!--Mode Icons-->
                    <!--Auto-->
                    <svg v-if="mode==='auto'" key="auto" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    <!--Dark-->
                    <svg v-if="mode==='dark'" key="dark" xmlns="http://www.w3.org/2000/svg"
                         class="h-5 w-5" fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                    <!--Light-->
                    <svg v-if="mode==='light'" key="light" xmlns="http://www.w3.org/2000/svg"
                         class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <!--Mode Title-->
                    <span v-text="mode"/>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
        <!--Content-->
        <div :class="[
            'content-container',
            deviceType === 'tablet' || deviceType === 'phone'  ? 'w-screen' : 'w-full'
            ]">
          <!--Content Header-->
          <div class="container-header">
            <!--Page Header-->
            <header class="page-header">
              <!--Page Title-->
              <h1 class="page-title">
                <slot name="header"></slot>
              </h1>
              <!--Page SubTitle-->
              <h2 class="page-subtitle">
                <slot name="subHeader"></slot>
              </h2>
            </header>
            <!--Page Action Buttons-->
            <div v-if="hasSlot('action-buttons')" class="page-action-buttons">
              <slot name="action-buttons"></slot>
            </div>
          </div>
          <!--Breadcrumb-->
          <slot name="breadcrumb"></slot>
          <!--Content-->
          <main class="flex flex-col flex-grow">
            <!--Flash Messages-->
            <div v-if="$page.props.flash.message" class="alert">
              <t-alert
                :color="$page.props.flash.message.type"
                :timer="5000"
                class="my-2"
              >
                <span v-html="$page.props.flash.message.content"></span>
              </t-alert>
            </div>
            <slot></slot>
          </main>
          <!--Toastr Notifications-->
          <div v-if="$page.props.flash.toastr">
            <t-toastr
              :key="$page.props.flash.toastr.content"
              :closeable="true"
              :color="$page.props.flash.toastr.type"
              :position="$page.props.flash.toastr.position"
              :timer="3000"
            >
              <span v-html="$page.props.flash.toastr.content"></span>
            </t-toastr>
          </div>
        </div>
        <footer
          :class="[
            'footer',
            deviceType === 'tablet' || deviceType === 'phone'  ? 'w-screen' : 'w-full'
            ]"
        >
          <div class="bg-gray-100 text-red-500 dark:bg-blue-500 dark:text-white">Test</div>
          <span class="mt-1 space-x-1 select-none">
            <a
              class="text-blue-600 hover:underline"
              href="https://tailadmin.dev/"
              target="_blank"
            >
              TailAdmin v.2.0.0
              </a>
            <span>by</span>
            <a
              class="text-teal-400 hover:underline"
              href="https://github.com/sinan-aydogan"
              target="_blank"
            >
              Sinan AYDOĞAN
            </a>
            <a
              class="flex items-center text-blue-600 hover:underline"
              href="https://github.com/sinan-aydogan/tailadmin-laravel"
              target="_blank"
            >

            </a>
            </span>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onBeforeMount, provide, ref, watch } from "vue";
import JetBanner from "@/Jetstream/Banner.vue";
import JetResponsiveNavLink from "@/Jetstream/ResponsiveNavLink.vue";
import LeftMenu from "@/Layouts/LeftMenu";
import LeftMenuItem from "@/Layouts/LeftMenuItem";
import { leftMenuItemsMixin } from "@/Mixins/leftMenuItemsMixin";
import TAlert from "@/Components/Alert/TAlert";
import TToastr from "@/Components/Toastr/TToastr";
import TAvatar from "@/Components/Avatar/TAvatar";
import TDropdown from "@/Components/Dropdown/TDropdown";
import THamburgerMenuTriggerIcon from "@/Components/Icon/THamburgerMenuTriggerIcon";
import TXIcon from "@/Components/Icon/TXIcon";
import TLogOutIcon from "@/Components/Icon/TLogOutIcon";
import TCheckCircleIcon from "@/Components/Icon/TCheckCircleIcon";
import { Head, Link } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia";
import windowSizeCalculator from "@/Functions/windowSizeCalculator";

export default defineComponent({
  components: {
    Head,
    TCheckCircleIcon,
    TLogOutIcon,
    TXIcon,
    THamburgerMenuTriggerIcon,
    TDropdown,
    TAvatar,
    TToastr,
    LeftMenuItem,
    LeftMenu,
    JetBanner,
    JetResponsiveNavLink,
    TAlert,
    Link
  },

  mixins: [leftMenuItemsMixin],

  props: {
    title: {
      type: String,
      default: null
    }
  },

  setup(props, { slots }) {
    /*Definitions*/
    const showingLeftMenu = ref(Boolean(localStorage.showingLeftMenu));
    const hiddenLeftMenu = ref(Boolean(localStorage.hiddenLeftMenu));
    const showingNavigationDropdown = ref(false);
    const darkMode = ref("auto");
    const { deviceType } = windowSizeCalculator();

    /*Providers*/
    provide("showingLeftMenu", showingLeftMenu);
    provide("hiddenLeftMenu", hiddenLeftMenu);
    provide("deviceType", deviceType);


    onBeforeMount(() => {
      /*Default Menu Position*/
      if (deviceType.value === "tablet" || deviceType.value === "phone") {
        if (!localStorage.hiddenLeftMenu) {
          hiddenLeftMenu.value = true;
          showingLeftMenu.value = false;
        }
      } else {
        if (!localStorage.showingLeftMenu) {
          showingLeftMenu.value = true;
          hiddenLeftMenu.value = false;
        }
      }
      leftMenuStorage();
      /*Dark Mode Check*/


      if (localStorage.theme === "dark") {
        makeDark();
      } else if (localStorage.theme === "light") {
        makeLight();
      } else {
        makeAuto();
      }
    });

    /*Dark Mode Control*/
    const makeDark = () => {
      darkMode.value = "dark";
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      document.documentElement.classList.remove("auto");
    };
    const makeLight = () => {
      darkMode.value = "light";
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.remove("auto");
    };
    const makeAuto = () => {
      let darkMedia = window.matchMedia("(prefers-color-scheme: dark)");
      darkMedia.onchange = ()=> {
          if (darkMedia.matches) {
            makeDark();
          } else {
            makeLight();
          }
        }
    };
    watch(darkMode, () => {
      if (darkMode.value === "dark") {
        makeDark();
      } else if (darkMode.value === "light") {
        makeLight();
      } else {
        makeAuto();
      }
    });

    /*Switch Team Action*/
    const switchToTeam = (team) => {
      Inertia.put(
        route("current-team.update"),
        {
          "team_id": team.id
        }, {
          preserveState: false
        });
    };

    /*Left Menu Trigger Function*/
    const leftMenuTrigger = () => {
      if (deviceType.value === "tablet" || deviceType.value === "phone") {
        if (hiddenLeftMenu.value === true) {
          hiddenLeftMenu.value = false;
          showingLeftMenu.value = true;
        } else {
          hiddenLeftMenu.value = true;
          showingLeftMenu.value = false;
        }
      } else {
        showingLeftMenu.value = !showingLeftMenu.value;
        hiddenLeftMenu.value = false;
      }
      leftMenuStorage();
    };
    /*Left Menu Local Storage Variables Set*/
    const leftMenuStorage = () => {
      localStorage.setItem("showingLeftMenu", showingLeftMenu.value);
      localStorage.setItem("hiddenLeftMenu", hiddenLeftMenu.value);
    };
    /*Profile Menu Trigger Function*/
    const hamburgerMenuTrigger = () => {
      if (deviceType.value === "phone") {
        showingNavigationDropdown.value = !showingNavigationDropdown.value;
      }
    };
    watch(deviceType,
      () => {
        if (deviceType.value === "tablet" || deviceType.value === "phone") {
          hiddenLeftMenu.value = true;
          showingLeftMenu.value = false;
        } else {
          hiddenLeftMenu.value = false;
        }
      });


    /*Logout Function*/
    const logout = () => {
      Inertia.post(
        route("logout")
      );
    };

    /*Slot Check*/
    const hasSlot = name => !!slots[name];

    return {
      showingLeftMenu,
      hiddenLeftMenu,
      showingNavigationDropdown,
      deviceType,
      darkMode,
      switchToTeam,
      hamburgerMenuTrigger,
      leftMenuTrigger,
      leftMenuStorage,
      logout,
      hasSlot
    };
  }
});
</script>

<style scoped>
.appLeftMenu-enter-active, .appLeftMenu-leave-active {
  transition: all .75s;
}

.appLeftMenu-enter-from, .appLeftMenu-leave-to {
  opacity: 0;
  margin-left: -250px;
}

.appLeftMenu-enter-to, .appLeftMenu-leave-from {
  opacity: 1;
  margin-left: 0;
}
</style>
