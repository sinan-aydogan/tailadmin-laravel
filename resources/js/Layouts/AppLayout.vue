<template>
  <!--Browser Title-->
  <Head :title="title" />
  <!--TODO: Convert to Announcement Bar Component(TA-23)-->
  <jet-banner />
  <!--Main Container-->
  <div class="main-container">
    <!--Left Menu -->
    <left-menu
      @foldLeftMenu="leftMenuTrigger"
      :class="[
          showLeftMenu ? 'left-menu-show' : 'left-menu-hide',
          foldLeftMenu ? 'left-menu-fold' : 'left-menu-expand'
          ]"
    >
      <template
        v-for="(item, index) in leftMenuLinks"
        :key="index"
      >
        <left-menu-item
          :item="item"
          @foldLeftMenu="leftMenuTrigger"
        ></left-menu-item>
      </template>
    </left-menu>
    <!--Content Container-->
    <div class="content-wrapper">
      <!--Top Menu-->
      <div
        class="top-menu"
        :class="'radius-' + conf.app.topMenu.radius"
      >
        <!--Left Menu Trigger-->
        <div
          @click="leftMenuTrigger"
          class="trigger"
          :class="'radius-' + conf.app.topMenu.radius"
        >
          <!--Fold & Close Icon-->
          <svg
            class="trigger-icon"
            :class="[
                (showLeftMenu && !foldLeftMenu) || ((deviceType === 'phone' || deviceType==='tablet')&&showLeftMenu) ?
                'trigger-icon-show' : 'trigger-icon-hide'
                ]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <!--Open Icon-->
          <svg
            class="trigger-icon"
            :class="[
                (showLeftMenu && foldLeftMenu) || !showLeftMenu ?
                'trigger-icon-show' : 'trigger-icon-hide'
                ]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
        <!--Search Box-->
        <div class="search-box">
          <div
            @click="searchBar=true"
            class="search-box-wrapper"
            :class="'radius-' + conf.app.topMenu.radius"
          >
            <svg
              class="search-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        <!--Active Team-->
        <div class="active-team">
          <div
            v-if="$page.props.jetstream.hasTeamFeatures"
            :title="$page.props.user.current_team.name"
            class="active-team-wrapper">
            <svg
              class="left-menu-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span
              class="active-team-label"
              v-text="$page.props.user.current_team.name"
            />
          </div>
        </div>
        <!--Notifications-->
        <t-dropdown align="right" trigger-type="rich">
          <template #trigger>
            <div
              class="notification-box"
              :class="'radius-' + conf.app.topMenu.radius"
            >
              <!--Notification Ping-->
              <div>
                <span class="notification-ping animate-ping" />
                <span class="notification-ping" />
              </div>
              <!--Notification Icon-->
              <svg
                class="notification-icon"
                aria-hidden="true"
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
            </div>
          </template>
          <template #default>
            <div class="dropdown-container">
              <!--Pending Works-->
              <div class="dropdown-header">
                Pending Works
              </div>
              <!--To-Do-->
              <button class="dropdown-item">2 To-Do's</button>
              <!--Calibration-->
              <button class="dropdown-item">5 Calibration Task's</button>
              <!--Messages-->
              <div class="dropdown-item-separator" />
              <button class="dropdown-item">9 Messages</button>
            </div>
          </template>
        </t-dropdown>
        <!--User Menu-->
        <t-dropdown
          align="right"
          trigger-type="rich"
        >
          <template #trigger>
            <!--If The user has a avatar-->
            <div
              @click="hamburgerMenuTrigger"
              class="user-menu-trigger"
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
                v-if="$page.props.jetstream.managesProfilePhotos"
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
            </div>
          </template>
          <template #default>
            <div
              v-show="deviceType !== 'phone'"
              class="dropdown-container"
            >
              <!-- Account Management -->
              <div class="dropdown-header" v-t="'topMenu.userMenu.manageAccount'"/>

              <!--Profile-->
              <Link :href="route('profile.show')">
                <div class="dropdown-item" v-t="'topMenu.userMenu.profile'"/>
              </Link>

              <!--API Tokens-->
              <Link v-if="$page.props.jetstream.hasApiFeatures"
                    :href="route('api-tokens.index')">
                <div class="dropdown-item" v-t="'topMenu.userMenu.api'"/>
              </Link>

              <!-- Team Management -->
              <div class="border-t border-gray-100 dark:border-gray-600"></div>
              <template v-if="$page.props.jetstream.hasTeamFeatures">
                <div class="dropdown-header" v-t="'topMenu.userMenu.manageTeam'"/>

                <!-- Team Settings -->
                <Link :href="route('teams.show', $page.props.user.current_team)">
                  <div class="dropdown-item" v-t="'topMenu.userMenu.teamSettings'"/>
                </Link>

                <!--Create New Team-->
                <Link v-if="$page.props.jetstream.canCreateTeams"
                      :href="route('teams.create')">
                  <div class="dropdown-item" v-t="'topMenu.userMenu.createNewTeam'"/>
                </Link>

                <!-- Team Switcher -->
                <div class="dropdown-item-separator" />
                <div class="dropdown-header" v-t="'topMenu.userMenu.switchTeams'"/>

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
              <!--Language Selector-->
              <div v-if="conf.app.topMenu.languageSelector"
                   class="dropdown-header border-t border-gray-100 dark:border-gray-600" v-t="'topMenu.userMenu.language'"/>
              <div v-if="conf.app.topMenu.languageSelector" class="inline-flex px-4 space-x-2">
                <template v-for="item in conf.app.languages" :key="item.key">
                    <span class="transform hover:scale-110" :class="item.key !== locale ? 'opacity-40': ''">
                      <svg v-html="item.icon" class="w-6 h-6 cursor-pointer" @click="changeLang(item.key)" />
                    </span>
                </template>
              </div>

              <!--Dark Mode Selector-->
              <div v-if="conf.app.topMenu.darkModeSelector"
                   class="dropdown-header border-t border-gray-100 dark:border-gray-600" v-t="'topMenu.userMenu.darkMode'"/>
              <div v-if="conf.app.topMenu.darkModeSelector"
                   class="theme-changer-container border-b border-t border-gray-200">
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
                  <svg v-if="mode==='auto'" key="auto" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"
                       fill="none"
                       viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
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
                  <span v-t="'topMenu.userMenu.'+ mode" />
                </div>
              </div>

              <!-- Authentication -->
              <form @submit.prevent="logout">
                <button class="w-full border-red-500">
                      <span class="logout-button">
                        <t-log-out-icon class="w-5 h-5" />
                        <span v-t="'topMenu.userMenu.logout'"/>
                      </span>
                </button>
              </form>
            </div>
          </template>
        </t-dropdown>
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
              <!--Language Selector-->
              <div v-if="conf.app.topMenu.languageSelector"
                   class="block px-4 py-2 text-xs text-gray-400 border-t border-gray-100 dark:border-gray-600">
                Language
              </div>
              <div v-if="conf.app.topMenu.languageSelector" class="inline-flex px-4 space-x-2">
                <template v-for="item in conf.app.languages" :key="item.key">
                    <span class="transform hover:scale-110" :class="item.key !== locale ? 'opacity-40': ''">
                      <svg v-html="item.icon" class="w-6 h-6 cursor-pointer" @click="locale =changeLang(item.key)" />
                    </span>
                </template>
              </div>
              <!--Dark Mode Selector-->
              <div v-if="conf.app.topMenu.darkModeSelector" class="border-t border-gray-200"></div>
              <div v-if="conf.app.topMenu.darkModeSelector" class="theme-changer-container">
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
                  <svg v-if="mode==='auto'" key="auto" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
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
                  <span v-text="mode" />
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
      <!--Content-->
      <div
        :class="[
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
      </div
      >
      <footer
        v-if="conf.app.footer.status"
        :class="[
            'footer',
            deviceType === 'tablet' || deviceType === 'phone'  ? 'w-screen' : 'w-full'
            ]"
      >
        <span class="mt-1 space-x-1 select-none" v-html="conf.app.footer.text" />
      </footer>
    </div>
  </div>
  <!--Modals-->
  <teleport to="body">
    <!--Search Bar-->
    <t-loading v-model="searchBar" color="gray" title="Search" closeable>
      <div
        class="search-modal"
        :class="'radius-' + conf.app.topMenu.radius"
      >
        <input type="text" id="search" :placeholder="conf.app.topMenu.searchPlaceHolderText"/>
      </div>
    </t-loading>
  </teleport>
</template>

<script>
import { defineComponent, onBeforeMount, provide, reactive, ref, watch } from "vue";
import JetBanner from "@/Jetstream/Banner.vue";
import JetResponsiveNavLink from "@/Jetstream/ResponsiveNavLink.vue";
import LeftMenu from "@/Layouts/LeftMenu";
import LeftMenuItem from "@/Layouts/LeftMenuItem";
import TAlert from "@/Components/Alert/TAlert";
import TToastr from "@/Components/Toastr/TToastr";
import TAvatar from "@/Components/Avatar/TAvatar";
import TDropdown from "@/Components/Dropdown/TDropdown";
import TLogOutIcon from "@/Components/Icon/TLogOutIcon";
import TCheckCircleIcon from "@/Components/Icon/TCheckCircleIcon";
import { Head, Link } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia";
import windowSizeCalculator from "@/Functions/windowSizeCalculator";
import config from "@/config";
import { leftMenu } from "@/leftMenu";
import TLoading from "@/Components/Loading/TLoading";
import { useI18n } from "vue-i18n";


export default defineComponent({
  components: {
    TLoading,
    Head,
    TCheckCircleIcon,
    TLogOutIcon,
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
  props: {
    title: {
      type: String,
      default: null
    }
  },
  mixins: [leftMenu],
  setup(props, { slots }) {
    /*Definitions*/
    const { t, locale } = useI18n({
      useScope: 'global',
      missingWarn: false,
      warnHtmlMessage: false,
      fallbackWarn: false
    })
    const { deviceType } = windowSizeCalculator();
    const { conf } = config();
    const searchBar = ref(false);

    /*Dark Mode*/
    const darkMode = ref("auto");
    /*Dark Mode: Check Local Variables*/
    onBeforeMount(() => {

      if (localStorage.theme === "dark") {
        makeDark();
      } else if (localStorage.theme === "light") {
        makeLight();
      } else {
        makeAuto();
      }
    });
    /*Dark Mode: Set Functions*/
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
      darkMedia.onchange = () => {
        if (darkMedia.matches) {
          makeDark();
        } else {
          makeLight();
        }
      };
    };
    /*Dark Mode: Watch*/
    watch(darkMode, () => {
      if (darkMode.value === "dark") {
        makeDark();
      } else if (darkMode.value === "light") {
        makeLight();
      } else {
        makeAuto();
      }
    });

    /*Language Selector*/
    /*Language: Change Language Function*/
    onBeforeMount(()=>{
      if (localStorage.lang) {
        locale.value = localStorage.lang
      }
    })
    const changeLang = (key) => {
      locale.value = key;
      localStorage.setItem("lang", key);
      Inertia.visit(route().current(), { preserveScroll: true })
    };

    /*Switch Team Action*/
    const showTeamSelector = ref(false);
    const switchToTeam = (team) => {
      Inertia.put(
        route("current-team.update"),
        {
          "team_id": team.id
        }, {
          preserveState: false
        });
    };

    /*Left Menu*/
    const showLeftMenu = ref(Boolean(localStorage.showLeftMenu));
    const foldLeftMenu = ref(Boolean(localStorage.foldLeftMenu));
    /*Left Menu: Check Local Variables*/
    onBeforeMount(() => {
      /*Default Menu Position*/
      if (!localStorage.foldLeftMenu || !localStorage.showLeftMenu) {
        if (deviceType.value === "tablet" || deviceType.value === "phone") {
          foldLeftMenu.value = false;
          showLeftMenu.value = false;
        } else {
          showLeftMenu.value = true;
          foldLeftMenu.value = false;
        }
      }
      leftMenuStorage();
    });
    /*Left Menu Local Storage Variables Set*/
    const leftMenuStorage = () => {
      localStorage.setItem("showLeftMenu", showLeftMenu.value.toString());
      localStorage.setItem("foldLeftMenu", foldLeftMenu.value.toString());
    };
    /*Left Menu: Trigger Function*/
    const leftMenuTrigger = () => {
      if (deviceType.value === "tablet" || deviceType.value === "phone") {
        showLeftMenu.value = !showLeftMenu.value;
      } else {
        foldLeftMenu.value = !foldLeftMenu.value;
      }
      leftMenuStorage();
    };
    /*Profile Menu Trigger Function*/
    watch(deviceType,
      () => {
        if (localStorage.showLeftMenu && localStorage.foldLeftMenu) {
          if (deviceType.value === "tablet" || deviceType.value === "phone") {
            foldLeftMenu.value = false;
            showLeftMenu.value = false;
          } else if (deviceType.value === "laptop") {
            foldLeftMenu.value = true;
            showLeftMenu.value = true;
          } else {
            foldLeftMenu.value = false;
            showLeftMenu.value = true;
          }
        }
        leftMenuStorage();
      });

    /*Profile Menu*/
    const showingNavigationDropdown = ref(false);
    /*Profile Menu: Trigger Function*/
    const hamburgerMenuTrigger = () => {
      if (deviceType.value === "phone") {
        showingNavigationDropdown.value = !showingNavigationDropdown.value;
      }
    };

    /*Logout Function*/
    const logout = () => {
      Inertia.post(
        route("logout")
      );
    };

    /*Providers*/
    provide("foldLeftMenu", ref(foldLeftMenu));
    provide("showLeftMenu", ref(showLeftMenu));
    provide("conf", reactive(conf));

    /*Slot Check*/
    const hasSlot = name => !!slots[name];

    return {
      searchBar,
      showLeftMenu,
      foldLeftMenu,
      showingNavigationDropdown,
      deviceType,
      darkMode,
      conf,
      showTeamSelector,
      t,
      locale,
      changeLang,
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
