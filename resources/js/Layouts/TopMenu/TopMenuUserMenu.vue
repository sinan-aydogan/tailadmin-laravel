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
            <div class="top-menu-dropdown-content-wrapper-transparent min-w-[13rem]">
                <!-- Account Management -->
                <div class="top-menu-dropdown-header border-t rounded-t" v-text="tm('manageAccount')"/>

                <!--Profile-->
                <Link :href="route('profile.show')">
                    <div class="top-menu-dropdown-item" v-text="tm('profile')"/>
                </Link>

                <!--API Tokens-->
                <Link v-if="$page.props.jetstream.hasApiFeatures"
                      :href="route('api-tokens.index')">
                    <div class="top-menu-dropdown-item" v-text="tm('api')"/>
                </Link>

                <!-- Team Management -->
                <template v-if="$page.props.jetstream.hasTeamFeatures">
                    <div class="dropdown-item-separator"/>
                    <div class="top-menu-dropdown-header" v-text="tm('manageTeam')"/>

                    <!-- Team Settings -->
                    <Link :href="route('teams.show', $page.props.user.current_team)">
                        <div class="top-menu-dropdown-item" v-text="tm('teamSettings')"/>
                    </Link>

                    <!--Create New Team-->
                    <Link v-if="$page.props.jetstream.canCreateTeams"
                          :href="route('teams.create')">
                        <div class="top-menu-dropdown-item" v-text="tm('createNewTeam')"/>
                    </Link>

                    <!-- Team Switcher -->
                    <div class="dropdown-item-separator"/>
                    <div class="top-menu-dropdown-header" v-text="tm('switchTeams')"/>
                    <div class="top-menu-dropdown-item">
                        <template v-for="team in $page.props.user.all_teams" :key="team.id">
                            <form @submit.prevent="switchToTeam(team)">
                                <button>
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
                    </div>

                </template>

                <!-- Authentication -->
                <div class="dropdown-item-separator"/>
                <span class="logout-button border-b rounded-b" @click="logout">
                        <!--Logout Text-->
                        <span v-text="tm('logout')"/>
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
</template>

<script>
/*Main Functions*/
import {defineComponent, inject, ref} from "vue";
import {Link} from "@inertiajs/inertia-vue3";
import {Inertia} from "@inertiajs/inertia";

/*Components*/
import TDropdown from "@/Components/Dropdown/TDropdown";
import TAvatar from "@/Components/Avatar/TAvatar";

/*Multi Language*/
import {useI18n} from "vue-i18n";
import {userMenuTranslates} from "@/Lang/languages";

export default defineComponent({
    name: "TopMenuUserMenu",
    components: {TAvatar, TDropdown, Link},
    setup() {
        /*Multi Language*/
        const {tm} = useI18n({
            inheritLocale: true,
            messages: userMenuTranslates,
        });

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

        /*Logout Function*/
        const logout = () => {
            Inertia.post(
                route("logout")
            );
        };

        return {
            logout,
            switchToTeam,
            showTeamSelector,
            tm,
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
