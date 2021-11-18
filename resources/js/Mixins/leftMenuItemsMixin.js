export const leftMenuItemsMixin = {
    data() {
        return {
            menuList: [
                {label: "Github Repo",
                    icon: "code",
                    link: "https://github.com/sinan-aydogan/tailadmin-laravel",
                    type: "external",
                    activeKey: ["githubrepo"]
                },
                {
                    label: "Examples",
                    icon: "tv",
                    link: "",
                    type: "dropdown",
                    activeKey: ["examples"],
                    items: [
                        {
                            label: "Login",
                            icon: "",
                            link: "login-app",
                            type: "route",
                            activeKey: ["login"],
                        },
                        {
                            label: "Register",
                            icon: "",
                            link: "register-app",
                            type: "route",
                            activeKey: ["register"],
                        },{
                            label: "Forgot Password",
                            icon: "",
                            link: "forgot-password-app",
                            type: "route",
                            activeKey: ["forgot-password-app"],
                        },
                        {
                            label: "Lock",
                            icon: "",
                            link: "lock-app",
                            type: "route",
                            activeKey: ["lock-app"],
                        },
                        {
                            label: "Profile",
                            icon: "",
                            link: "profile.show",
                            type: "route",
                            activeKey: ["profile"],
                        },
                        /*{
                            label: "Pricing",
                            icon: "",
                            link: "pricing",
                            type: "route",
                            activeKey: ["pricing"],
                        },
                        {
                            label: "Project App",
                            icon: "",
                            link: "project-management-app",
                            type: "route",
                            activeKey: ["project-management-app"],
                        },
                        {
                            label: "Todo App",
                            icon: "",
                            link: "todo-app",
                            type: "route",
                            activeKey: ["todo-app"],
                        },
                        {
                            label: "Email App",
                            icon: "",
                            link: "email-app",
                            type: "route",
                            activeKey: ["email-app"],
                        },
                        {
                            label: "Chat App",
                            icon: "",
                            link: "chat-app",
                            type: "route",
                            activeKey: ["chat-app"],
                        }*/
                    ]
                },
                {
                    label: "Components",
                    icon: "plug",
                    link: "",
                    type: "dropdown",
                    activeKey: ["buttons"],
                    items: [
                        {
                            label: "Alerts",
                            icon: "",
                            link: "alert",
                            type: "route",
                            activeKey: ["alert"],
                        },
                        {
                            label: "Avatar",
                            icon: "",
                            link: "avatar",
                            type: "route",
                            activeKey: ["avatar"],
                        },
                        {
                            label: "Badge",
                            icon: "",
                            link: "badge",
                            type: "route",
                            activeKey: ["badge"],
                        },
                        {
                            label: "Breadcrumb",
                            icon: "",
                            link: "breadcrumb",
                            type: "route",
                            activeKey: ["breadcrumb"],
                        },
                        {
                            label: "Buttons",
                            icon: "",
                            link: "button",
                            type: "route",
                            activeKey: ["button"],
                        },
                       /* {
                            label: "Chart",
                            icon: "chart-bar",
                            link: "chart",
                            type: "route",
                            activeKey: ["chart"],
                        },*/
                        {
                            label: "Collapsible",
                            icon: "",
                            link: "collapsible",
                            type: "route",
                            activeKey: ["collapsible"],
                        },
                        {
                            label: "Dropdowns",
                            icon: "",
                            link: "dropdown",
                            type: "route",
                            activeKey: ["dropdown"],
                        },
                        {
                            label: "Lists",
                            icon: "",
                            link: "list",
                            type: "route",
                            activeKey: ["list"],
                        },
                        {
                            label: "Loadings",
                            icon: "",
                            link: "loading",
                            type: "route",
                            activeKey: ["loading"],
                        },
                        {
                            label: "Modals",
                            icon: "",
                            link: "modal",
                            type: "route",
                            activeKey: ["modal"],
                        },
                        {
                            label: "Pagination",
                            icon: "",
                            link: "pagination",
                            type: "route",
                            activeKey: ["pagination"],
                        },
                        {
                            label: "Popovers",
                            icon: "",
                            link: "popover",
                            type: "route",
                            activeKey: ["popover"],
                        },
                        {
                            label: "Progress",
                            icon: "",
                            link: "progress",
                            type: "route",
                            activeKey: ["progress"],
                        },
                        {
                            label: "Tabs",
                            icon: "",
                            link: "tab",
                            type: "route",
                            activeKey: ["tab"],
                        },
                        {
                            label: "Table(JSON)",
                            icon: "table",
                            link: "table",
                            type: "route",
                            activeKey: ["table"],
                        },
                        {
                            label: "Table(BackEnd)",
                            icon: "table",
                            link: "back-end-table",
                            type: "route",
                            activeKey: ["back-end-table"],
                        },/* TODO: Toastr Feature
                        {
                            label: "Toastr",
                            icon: "",
                            link: "toastr",
                            type: "route",
                            activeKey: ["toastr"],
                        },*/
                        {
                            label: "Tooltips",
                            icon: "",
                            link: "tooltip",
                            type: "route",
                            activeKey: ["tooltip"],
                        }
                    ]
                },
                {
                    label: "Layout Items",
                    icon: "window-maximize",
                    link: "",
                    type: "dropdown",
                    activeKey: ["content-boxes"],
                    items: [
                        {
                            label: "Layout Structure",
                            icon: "layer-group",
                            link: "layout-structure",
                            type: "route",
                            activeKey: ["sections"]
                        },
                        {
                            label: "Grid",
                            icon: "grip-horizontal",
                            link: "layout-grid",
                            type: "route",
                            activeKey: ["sections"]
                        },
                        {
                            label: "Content Boxes",
                            icon: "window-restore",
                            link: "layout-content-box",
                            type: "route",
                            activeKey: ["sections"]
                        },
                        {
                            label: "Statistic Widgets",
                            icon: "chart-bar",
                            link: "layout-statistic-widget",
                            type: "route",
                            activeKey: ["statistic-widgets"],
                        },
                        {label: "TailwindCSS Document",
                            icon: "code",
                            link: "https://tailwindcss.com/docs",
                            type: "external",
                            activeKey: ["tailwindcss"]
                        },
                    ],
                },
                {
                    label: "Form Elements",
                    icon: "edit",
                    link: "",
                    type: "dropdown",
                    activeKey: ["forms"],
                    items: [
                        {
                            label: "Form Structure",
                            icon: "",
                            link: "form-structure",
                            type: "route",
                            activeKey: ["form-structure"],
                        },
                        {
                            label: "Input Group",
                            icon: "",
                            link: "form-input-group",
                            type: "route",
                            activeKey: ["input-group"],
                        },
                        {
                            label: "Simple Fields",
                            icon: "",
                            link: "form-simple-field",
                            type: "route",
                            activeKey: ["form-simple-input-fields"],
                        },
                        {
                            label: "Repeatable Fields",
                            icon: "retweet",
                            link: "form-repeatable-field",
                            type: "route",
                            activeKey: ["repeatable-input-field"],
                        },
                        {
                            label: "Inline Repeat. Fields",
                            icon: "retweet",
                            link: "form-inline-repeatable-field",
                            type: "route",
                            activeKey: ["inline-repeatable-input-field"],
                        },
                        {
                            label: "Date/Time Fields",
                            icon: "clock",
                            link: "form-date-field",
                            type: "route",
                            activeKey: ["date-input-field"],
                        },
                        {
                            label: "Select Input",
                            icon: "",
                            link: "form-select-input",
                            type: "route",
                            activeKey: ["select-input-field"],
                        },
                        {
                            label: "Multi Select Input",
                            icon: "",
                            link: "form-multi-select-input",
                            type: "route",
                            activeKey: ["multi-select-input-field"],
                        },/* TODO: Tag Input Feature
                        {
                            label: "Tags Input",
                            icon: "tags",
                            link: "form-tag-input",
                            type: "route",
                            activeKey: ["tag-input-field"],
                        },*/
                        /* TODO: Validation Feature
                        {
                            label: "Validation",
                            icon: "",
                            link: "form-validation",
                            type: "route",
                            activeKey: ["form-validation"],
                        },*/
                    ]
                },
            ],
        }
    }
}
