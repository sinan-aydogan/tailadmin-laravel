<template>
    <t-dropdown align="right" trigger-type="rich">
        <template #trigger>
            <div
                :class="`radius-${topBarConf.radius ? topBarConf.radius : appConf.radius}`"
                class="notification-box"
            >
                <!--Notification Ping-->
                <div>
                    <span class="notification-ping animate-ping" />
                    <span class="notification-ping" />
                </div>
                <!--Notification Icon-->
                <iconify-icon class="notification-icon" icon="tabler:bell"></iconify-icon>
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
import TDropdown from "@/Components/Dropdown/TDropdown.vue";
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
        });
        /*Injections*/
        const appConf = inject("appConf");
        const topBarConf = inject("topBarConf");

        return {
            appConf,
            topBarConf,
            tm
        };
    }
});
</script>

<style scoped>
</style>
