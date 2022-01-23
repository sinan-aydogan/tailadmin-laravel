export const settingsMenuMixin = {
    data(){
        return {
            menuList: [
                {
                    label: "Settings",
                    icon: "cog",
                    link: "settings",
                    linkType: "route",
                    type: "standard",
                    activeKey: ["settings-user"],
                },
                {
                    label: "Users",
                    icon: "",
                    link: "settings-user.index",
                    linkType: "route",
                    type: "standard",
                    activeKey: ["settings-user"],
                },
                {
                    label: "Roles",
                    icon: "",
                    link: "settings-role.index",
                    linkType: "route",
                    type: "standard",
                    activeKey: ["settings-role"],
                },
                {
                    label: "Permissions",
                    icon: "",
                    link: "settings-permission.index",
                    linkType: "route",
                    type: "standard",
                    activeKey: ["settings-permission"],
                },
                {
                    label: "System",
                    icon: "",
                    link: "settings-system",
                    linkType: "route",
                    type: "standard",
                    activeKey: ["settings-system"],
                }
            ]
        }
    }
}
