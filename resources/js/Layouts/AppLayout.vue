<template>
    <div class="overflow-hidden">
        <jet-banner/>
        <div class="flex h-screen bg-gray-100">
            <!--Left Area / Left Menu -->
          <transition name="app-left-menu">
            <left-menu
                :showingLeftMenu="showingLeftMenu"
                v-if="hiddenLeftMenu === 'false'"
                class="bg-gray-800 relative">
                <div
                    v-for="(item, index) in menuList"
                    :key="index"
                    class="flex flex-col px-2 py-1"
                >
                    <left-menu-item
                        :key="index"
                        :item="item"
                        :showingLeftMenu="showingLeftMenu"
                        @showLeftMenuEmit="showingLeftMenu = 'true'"
                    ></left-menu-item>
                </div>
            </left-menu>

          </transition>
            <!--Main Area-->
            <div class="main-area relative">
                <!--Top Menu-->
                <div class="top-menu">
                    <!--Left Menu Trigger-->
                    <div class="trigger" @click="leftMenuTrigger">
                        <svg
                            class="w-8 h-8"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </div>
                    <!--Search Box-->
                    <div class="search-box">
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <input
                            type="text"
                            role="search"
                            placeholder="Search..."
                        />
                    </div>
                    <!--User Menu-->
                    <div class="user-menu">
                        <jet-dropdown align="right" width="48">
                            <template #trigger>
                                <button v-if="$page.props.jetstream.managesProfilePhotos" class="trigger-button">
                                    <!--User Info-->
                                    <div class="staff-info">
                                        <span class="staff-name">
                                            {{ $page.props.user.name }}
                                        </span>
                                        <span class="staff-title">
                                            {{ $page.props.user.title }}
                                        </span>
                                    </div>
                                    <!--User Photo-->
                                    <span class="staff-photo">
                                        <img class="h-8 w-8 rounded-full object-cover" :src="$page.props.user.profile_photo_url" :alt="$page.props.user.name" />
                                    </span>
                                    <!--Right arrow-->
                                    <svg
                                        aria-hidden="true"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        class="hidden w-6 h-6 text-gray-300 sm:block"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </button>

                                <span v-else class="inline-flex rounded-md">
                                    <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150">
                                        {{ $page.props.user.name }}

                                        <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                </span>
                            </template>

                            <template #content>
                                <!-- Account Management -->
                                <div class="block px-4 py-2 text-xs text-gray-400">
                                    Manage Account
                                </div>

                                <jet-dropdown-link :href="route('profile.show')">
                                    Profile
                                </jet-dropdown-link>

                                <jet-dropdown-link :href="route('api-tokens.index')" v-if="$page.props.jetstream.hasApiFeatures">
                                    API Tokens
                                </jet-dropdown-link>

                                <div class="border-t border-gray-100"></div>
                                <!-- Team Management -->
                                <template v-if="$page.props.jetstream.hasTeamFeatures">
                                    <div class="block px-4 py-2 text-xs text-gray-400">
                                        Manage Team
                                    </div>

                                    <!-- Team Settings -->
                                    <jet-dropdown-link :href="route('teams.show', $page.props.user.current_team)">
                                        Team Settings
                                    </jet-dropdown-link>

                                    <jet-dropdown-link :href="route('teams.create')" v-if="$page.props.jetstream.canCreateTeams">
                                        Create New Team
                                    </jet-dropdown-link>

                                    <div class="border-t border-gray-100"></div>

                                    <!-- Team Switcher -->
                                    <div class="block px-4 py-2 text-xs text-gray-400">
                                        Switch Teams
                                    </div>

                                    <template v-for="team in $page.props.user.all_teams">
                                        <form @submit.prevent="switchToTeam(team)" :key="team.id">
                                            <jet-dropdown-link as="button">
                                                <div class="flex items-center">
                                                    <svg v-if="team.id == $page.props.user.current_team_id" class="mr-2 h-5 w-5 text-green-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                    <div>{{ team.name }}</div>
                                                </div>
                                            </jet-dropdown-link>
                                        </form>
                                    </template>
                                </template>

                                <!-- Authentication -->
                                <form @submit.prevent="logout">
                                    <jet-dropdown-link as="button">
                                        Logout
                                    </jet-dropdown-link>
                                </form>
                            </template>
                        </jet-dropdown>
                        <!-- Hamburger -->
                        <div class="-mr-2 flex items-center sm:hidden">
                            <button @click="showingNavigationDropdown = ! showingNavigationDropdown"
                                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        :class="{'hidden': showingNavigationDropdown, 'inline-flex': ! showingNavigationDropdown }"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16"/>
                                    <path
                                        :class="{'hidden': ! showingNavigationDropdown, 'inline-flex': showingNavigationDropdown }"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>

                        <!--Notification and Logout Buttons-->
                        <div class="action-section">
                            <!--Notifications-->
                            <jet-dropdown align="right" width="48">
                                <template #trigger>
                                    <button class="trigger-button">
                                        <span class="absolute top-0 right-0 w-2 h-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
                                        <span class="absolute top-0 right-0 w-2 h-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
                                        <svg
                                            aria-hidden="true"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            class="w-6 h-6"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                            />
                                        </svg>
                                    </button>
                                </template>
                                <template #content>
                                    <!--Pending Works-->
                                    <div class="dropdown-header">
                                        Pending Works
                                    </div>
                                    <div class="dropdown-list-container">
                                        <!--To-Do-->
                                        <button href="test" class="dropdown-item">2 To-Do's</button>
                                        <!--Calibration-->
                                        <button href="test" class="dropdown-item">5 Calibration Task's</button>
                                        <!--Messages-->
                                        <div class="border-t border-gray-100"></div>
                                        <button href="test" class="dropdown-item">9 Messages</button>
                                    </div>
                                </template>
                            </jet-dropdown>
                            <!--Logout-->
                            <form @submit.prevent="logout">
                                <button class="logout-button">
                                    <svg
                                        aria-hidden="true"
                                        fill="none"
                                        viewBox="0 0 20 24"
                                        stroke="currentColor"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                        />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- Responsive Navigation Menu -->
                <div :class="{'block': showingNavigationDropdown, 'hidden': ! showingNavigationDropdown}"
                     class="sm:hidden">
                    <div class="pt-2 pb-3 space-y-1">
                        <jet-responsive-nav-link :href="route('dashboard')" :active="route().current('dashboard')">
                            Dashboard
                        </jet-responsive-nav-link>
                    </div>

                    <!-- Responsive Settings Options -->
                    <div class="pt-4 pb-1 border-t border-gray-200">
                        <div class="flex items-center px-4">
                            <div v-if="$page.props.jetstream.managesProfilePhotos" class="flex-shrink-0 mr-3">
                                <img class="h-10 w-10 rounded-full object-cover"
                                     :src="$page.props.user.profile_photo_url" :alt="$page.props.user.name"/>
                            </div>

                            <div>
                                <div class="font-medium text-base text-gray-800">{{ $page.props.user.name }}</div>
                                <div class="font-medium text-sm text-gray-500">{{ $page.props.user.email }}</div>
                            </div>
                        </div>

                        <div class="mt-3 space-y-1">
                            <jet-responsive-nav-link :href="route('profile.show')"
                                                     :active="route().current('profile.show')">
                                Profile
                            </jet-responsive-nav-link>

                            <jet-responsive-nav-link :href="route('api-tokens.index')"
                                                     :active="route().current('api-tokens.index')"
                                                     v-if="$page.props.jetstream.hasApiFeatures">
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
                                <jet-responsive-nav-link :href="route('teams.show', $page.props.user.current_team)"
                                                         :active="route().current('teams.show')">
                                    Team Settings
                                </jet-responsive-nav-link>

                                <jet-responsive-nav-link :href="route('teams.create')"
                                                         :active="route().current('teams.create')">
                                    Create New Team
                                </jet-responsive-nav-link>

                                <div class="border-t border-gray-200"></div>

                                <!-- Team Switcher -->
                                <div class="block px-4 py-2 text-xs text-gray-400">
                                    Switch Teams
                                </div>

                                <template v-for="team in $page.props.user.all_teams">
                                    <form @submit.prevent="switchToTeam(team)" :key="team.id">
                                        <jet-responsive-nav-link as="button">
                                            <div class="flex items-center">
                                                <svg v-if="team.id == $page.props.user.current_team_id"
                                                     class="mr-2 h-5 w-5 text-green-400" fill="none"
                                                     stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                     stroke="currentColor" viewBox="0 0 24 24">
                                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <div>{{ team.name }}</div>
                                            </div>
                                        </jet-responsive-nav-link>
                                    </form>
                                </template>
                            </template>
                        </div>
                    </div>
                </div>
                <!--Content-->
                <div class="content-container">
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
                        <div v-if="actionButtons === true" class="page-action-buttons">
                            <slot name="action-buttons"></slot>
                        </div>
                    </div>
                    <!--Breadcrumb-->
                    <slot name="breadcrumb"></slot>
                    <!--Content-->
                    <main class="flex flex-col">
                        <!--Flash Messages-->
                        <div v-if="$page.props.flash.message" class="alert">
                          <t-alert
                            :color="$page.props.flash.message.type"
                            :timer="10000"
                            >
                              {{ $page.props.flash.message.content }}
                          </t-alert>
                        </div>

                        <slot></slot>
                    </main>
                    <!-- Modal Portal -->
                    <portal-target name="modal" multiple>
                    </portal-target>
                    <!--Toastr Notifications-->
                    <div>
                        <t-toastr v-if="$page.props.flash.toastr">

                        </t-toastr>
                    </div>
                    <footer
                        class="flex items-center justify-end space-x-1 font-semibold text-right text-gray-500"
                    >
                        <a
                            href="https://laraquality.dev/"
                            class="text-blue-600 hover:underline"
                        >TailAdmin Laravel v-beta.0.0.1</a
                        >
                        <span>by</span>
                        <a
                            href="https://sinanaydogan.com.tr"
                            class="text-teal-400 hover:underline"
                        >Sinan AYDOĞAN</a
                        >
                        <a
                            href="https://github.com/sinan-aydogan/tailadmin-laravel"
                            class="flex items-center text-blue-600 hover:underline"
                            target="_blank"
                        >
                            <t-github-icon class="w-5 h-5"
                            />
                        </a>
                    </footer>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import JetApplicationMark from '@/Jetstream/ApplicationMark'
import JetBanner from '@/Jetstream/Banner'
import JetDropdown from '@/Jetstream/Dropdown'
import JetDropdownLink from '@/Jetstream/DropdownLink'
import JetNavLink from '@/Jetstream/NavLink'
import JetResponsiveNavLink from '@/Jetstream/ResponsiveNavLink'
import LeftMenu from "@/Layouts/LeftMenu";
import LeftMenuItem from "@/Layouts/LeftMenuItem";
import {leftMenuItemsMixin} from "@/Mixins/leftMenuItemsMixin";
import {windowSizeMixin} from "@/Mixins/windowSizeMixin";
import TGithubIcon from "@/Components/Icon/TGitHubIcon"
import TButton from "@/Components/Button/TButton";
import TAlert from "@/Components/Alert/TAlert";
import TToastr from "@/Components/Toastr/TToastr";

export default {
    components: {
        TToastr,
        LeftMenuItem,
        LeftMenu,
        JetApplicationMark,
        JetBanner,
        JetDropdown,
        JetDropdownLink,
        JetNavLink,
        JetResponsiveNavLink,
        TButton,
        TGithubIcon,
        TAlert
    },

    mixins: [leftMenuItemsMixin, windowSizeMixin],

    props: {
        actionButtons: {
            require: false,
            default: false
        }
    },

    data() {
        return {
            showingLeftMenu: localStorage.showingLeftMenu,
            hiddenLeftMenu: localStorage.hiddenLeftMenu,
            showingNavigationDropdown: false,
        }
    },

    methods: {
        switchToTeam(team) {
            this.$inertia.put(route('current-team.update'), {
                'team_id': team.id
            }, {
                preserveState: false
            })
        },

        leftMenuTrigger() {
            if (this.windowWidth < 1024) {
                if (this.hiddenLeftMenu === 'true') {
                    this.hiddenLeftMenu = 'false';
                    this.showingLeftMenu = 'true';
                } else {
                    this.hiddenLeftMenu = 'true';
                    this.showingLeftMenu = 'false';
                }
            } else {
                if (this.showingLeftMenu === 'true') {
                    this.showingLeftMenu = 'false'
                } else {
                    this.showingLeftMenu = 'true'
                }
                this.hiddenLeftMenu = 'false';
            }
            this.leftMenuStorage();
        },
        leftMenuStorage() {
            localStorage.setItem('showingLeftMenu', this.showingLeftMenu)
            localStorage.setItem('hiddenLeftMenu', this.hiddenLeftMenu)
        },

        logout() {
            this.$inertia.post(route('logout'));
        },
    },

    created() {
        if (this.windowWidth < 1024) {
            if (!localStorage.hiddenLeftMenu) {
                this.hiddenLeftMenu = 'true';
                this.showingLeftMenu = 'false';
            }
        } else {
            if (!localStorage.showingLeftMenu) {
                this.showingLeftMenu = 'true';
                this.hiddenLeftMenu = 'false';
            }
        }
        this.leftMenuStorage();
    },
  watch:{
    windowWidth(){
      if (this.windowWidth < 1024) {
        this.hiddenLeftMenu = 'true';
        this.showingLeftMenu = 'false';
      }else{
        this.hiddenLeftMenu = 'false';
      }
    }
  }
}
</script>
<style>
.app-left-menu-enter-active, .app-left-menu-leave-active {
  transition: all .75s;
}

.app-left-menu-enter, .app-left-menu-leave-to {
  opacity: 0;
  max-width: 0;
}

.app-left-menu-enter-to, .app-left-menu-leave {
  opacity: 1;
  max-width: 250px;
}
</style>
