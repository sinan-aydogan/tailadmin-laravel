<template>
    <t-dropdown align="right" trigger-type="rich">
        <template #trigger>
            <div
                class="notification-box"
                :class="`radius-${topBarConf.radius ? topBarConf.radius : appConf.radius}`"
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
            <div class="top-menu-dropdown-content-wrapper-transparent">
                <!--Pending Works-->
                <div class="top-menu-dropdown-header-transparent" v-text="tm('pendingWorks')" />
                <!--To-Do-->
                <button class="top-menu-dropdown-item-transparent">
                    <span v-text="tm('unfinishedTodos')"></span>
                    <t-badge color="light" design="elegant">5</t-badge>
                </button>
                <!--Messages-->
                <div class="dropdown-item-separator" />
                <button class="top-menu-dropdown-item-transparent">
                    <span v-text="tm('unreadMessages')"></span>
                    <t-badge>2</t-badge>
                </button>
            </div>
        </template>
    </t-dropdown>
</template>

<script>
/*Main functions*/
import { defineComponent, inject } from "vue";

/*Components*/
import TDropdown from "@/Components/Dropdown/TDropdown";
import TBadge from "@/Components/Badge/TBadge.vue";

/* Multi-language */
import { useI18n } from "vue-i18n";
import { notificationTranslates } from "@/Lang/languages";

export default defineComponent({
    name: "TopMenuNotification",
    components: { TDropdown, TBadge },
    setup() {
        /* Multi-language */
        const { tm } = useI18n({
            inheritLocale: true,
            messages: notificationTranslates
        })
        /*Injections*/
        const appConf = inject("appConf");
        const topBarConf = inject("topBarConf");

        return {
            appConf,
            topBarConf,
            tm
        }
    }
});
</script>

<style scoped>
</style>
