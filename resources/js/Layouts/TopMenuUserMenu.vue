<template>
    <t-dropdown
        align="right"
        trigger-type="rich"
    >
        <template #trigger>
            <!--If The user has a avatar-->
            <div class="user-menu-trigger">
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
            <div class="dropdown-container">
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
                <template v-if="$page.props.jetstream.hasTeamFeatures">
                    <div class="dropdown-item-separator"/>
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
                    <div class="dropdown-item-separator"/>
                    <div class="dropdown-header" v-t="'topMenu.userMenu.switchTeams'"/>

                    <template v-for="team in $page.props.user.all_teams" :key="team.id">
                        <form @submit.prevent="switchToTeam(team)">
                            <button class="dropdown-item">
                          <span class="flex items-center">
                            <svg
                                v-if="team.id === $page.props.user.current_team_id"
                                class="mr-2 h-5 w-5 text-green-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                              <path
                                  fill-rule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clip-rule="evenodd"
                              />
                            </svg>
                            {{ team.name }}
                          </span>

                            </button>
                        </form>
                    </template>
                </template>

                <!--Language Selector-->
                <div class="dropdown-item-separator"/>
                <div
                    v-if="conf.app.topMenu.languageSelector"
                    class="lang-selector-container"
                >
                    <template v-for="item in conf.app.languages" :key="item.key">
                    <span
                        :class="item.key !== locale ? ' opacity-25': ''"
                        class="lang-selector-item"
                    >
                      <svg v-html="item.icon" class="lang-icon" @click="changeLang(item.key)"/>
                    </span>
                    </template>

                </div>

                <!--Dark Mode Selector-->
                <div class="dropdown-item-separator"/>
                <div
                    v-if="conf.app.topMenu.darkModeSelector"
                    class="theme-changer-container"
                >
                    <div
                        v-for="mode in ['auto','dark','light']"
                        :key="mode"
                        class="theme-changer-button"
                        :class="'theme-changer-button-'+ mode + (darkMode === mode ? '-active' : '')"
                        @click="darkMode=mode"
                        @mouseenter="showDarkModeTitle=mode"
                        @mouseleave="showDarkModeTitle=''"
                    >
                        <!--Mode Icons-->
                        <!--Auto-->
                        <svg v-if="mode==='auto'"
                             key="auto"
                             xmlns="http://www.w3.org/2000/svg"
                             class="theme-icon"
                             fill="none"
                             viewBox="0 0 24 24"
                             stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                            />
                        </svg>
                        <!--Dark-->
                        <svg
                            v-if="mode==='dark'"
                            key="dark"
                            xmlns="http://www.w3.org/2000/svg"
                            class="theme-icon"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            />
                        </svg>
                        <!--Light-->
                        <svg
                            v-if="mode==='light'"
                            key="light"
                            xmlns="http://www.w3.org/2000/svg"
                            class="theme-icon"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <!--Mode Title-->
                        <transition name="darkModeTitle">
              <span
                  v-show="showDarkModeTitle===mode"
                  v-t="'topMenu.userMenu.'+ mode"
                  class="theme-changer-button-text"
              />
                        </transition>
                    </div>
                </div>

                <!-- Authentication -->
                <div class="dropdown-item-separator"/>
                <span class="logout-button" @click="logout">
                        <!--Logout Text-->
                        <span v-t="'topMenu.userMenu.logout'"/>
                    <!--Logout Icon-->
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                          <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          />
                        </svg>
                      </span>
            </div>
        </template>
    </t-dropdown>

    <teleport to="body">
        <t-loading v-model="showLoadingScreen" title="Please wait" message="Your changes applying"/>
    </teleport>
</template>

<script>
import {defineComponent, inject, onBeforeMount, ref, watch} from "vue";
import {Link} from "@inertiajs/inertia-vue3";
import TDropdown from "@/Components/Dropdown/TDropdown";
import TAvatar from "@/Components/Avatar/TAvatar";
import {Inertia} from "@inertiajs/inertia";
import {useI18n} from "vue-i18n";
import {useDebounce} from "@vueuse/core";
import TLoading from "@/Components/Loading/TLoading";

export default defineComponent({
    name: "TopMenuUserMenu",
    components: {TLoading, TAvatar, TDropdown, Link},
    setup() {
        /*Definitions*/
        const conf = inject("conf");
        const showLoadingScreen = ref(false);

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

        /*Language Selector*/
        const {locale} = useI18n({
            useScope: "global",
            missingWarn: false,
            warnHtmlMessage: false,
            fallbackWarn: false
        });
        onBeforeMount(() => {
            if (localStorage.lang) {
                locale.value = localStorage.lang;
            }
        });
        const changeLang = (key) => {
            locale.value = key;
            localStorage.setItem("lang", key);
            Inertia.visit(route().current(), {
                onStart: () => showLoadingScreen.value = true,
                preserveScroll: true
            });
        };

        /*Dark Mode*/
        const darkMode = ref("auto");
        const showDarkModeTitle = ref(darkMode.value);
        /*Dark Mode: Check Local Variables*/
        onBeforeMount(() => {
            if (localStorage.theme === "dark") {
                makeDark();
                darkMode.value = 'dark'
            } else if (localStorage.theme === "light") {
                makeLight();
                darkMode.value = 'light'
            } else {
                makeAuto();
                darkMode.value = 'auto'
            }
        });
        /*Dark Mode: Set Functions*/
        const makeDark = () => {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
            document.documentElement.classList.remove("auto");
        };
        const makeLight = () => {
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.remove("auto");
        };
        const makeAuto = () => {
            let darkMedia = window.matchMedia("(prefers-color-scheme: dark)");
            const changeAutoTheme = () => {
                if (darkMedia.matches) {
                    makeDark();
                } else {
                    makeLight();
                }
            }
            changeAutoTheme()
            darkMedia.onchange = () => {
                changeAutoTheme()
            };
        };
        const darkModeStorage = () => {
            localStorage.setItem("theme", darkMode.value);
        };

        /*Dark Mode: Watch*/
        watch(darkMode, () => {
            if (darkMode.value === "dark") {
                makeDark();
                darkModeStorage();
            } else if (darkMode.value === "light") {
                makeLight();
                darkModeStorage();
            } else {
                makeAuto();
                localStorage.setItem("theme", 'auto');
            }
        });

        /*Logout Function*/
        const logout = () => {
            Inertia.post(
                route("logout")
            );
        };

        return {
            conf,
            showTeamSelector,
            locale,
            darkMode,
            showDarkModeTitle,
            showLoadingScreen,
            changeLang,
            switchToTeam,
            logout
        };
    }
});
</script>

<style scoped>
.darkModeTitle-enter-active, .darkModeTitle-leave-active {
    transition: 500ms ease-in-out;
}

.darkModeTitle-enter-from, .darkModeTitle-leave-to {
    opacity: 0;
    max-width: 0;
}

.darkModeTitle-enter-to, .darkModeTitle-leave-from {
    opacity: 1;
    max-width: 5rem;
}
</style>
