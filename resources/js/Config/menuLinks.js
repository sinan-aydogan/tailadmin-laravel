/*Import FontAwesomeIcon*/
import { library } from "@fortawesome/fontawesome-svg-core";
import {
faTv,faPlug,faWindowRestore,faChartBar,faTable,faWindowMaximize,faLayerGroup, faGripHorizontal,faEdit, faRetweet, faClock, faCode, faQuestion, faCog
} from "@fortawesome/free-solid-svg-icons";
library.add(faTv,faPlug,faWindowRestore,faChartBar,faTable,faWindowMaximize,faLayerGroup, faGripHorizontal,faEdit, faRetweet, faClock, faCode, faQuestion, faCog)

/*Side Menu Links*/
const sideMenuLinks = [

    {
        label: "authPages",
        icon: "tv",
        link: "",
        type: "dropdown",
        items: [
            {
                label: "authLogin",
                icon: "",
                link: "login-app",
                type: "route"
            },
            {
                label: "authRegister",
                icon: "",
                link: "register-app",
                type: "route"
            }, {
                label: "authForgotPassword",
                icon: "",
                link: "forgot-password-app",
                type: "route"
            },
            {
                label: "authLockScreen",
                icon: "",
                link: "lock-app",
                type: "route"
            },
            {
                label: "authProfile",
                icon: "",
                link: "profile.show",
                type: "route"
            }
        ]
    },
    {
        label: "components",
        icon: "plug",
        link: "",
        type: "dropdown",
        items: [
            {
                label: "componentAlert",
                icon: "",
                link: "alert",
                type: "route"
            },
            {
                label: "componentAvatar",
                icon: "",
                link: "avatar",
                type: "route"
            },
            {
                label: "componentBadge",
                icon: "",
                link: "badge",
                type: "route"
            },
            {
                label: "componentBreadcrumb",
                icon: "",
                link: "breadcrumb",
                type: "route"
            },
            {
                label: "componentButton",
                icon: "",
                link: "button",
                type: "route"
            },
            {
                label: "componentCollapsible",
                icon: "",
                link: "collapsible",
                type: "route"
            },
            {
                label: "componentContentBox",
                icon: "window-restore",
                link: "content-box",
                type: "route"
            },
            {
                label: "componentDropdown",
                icon: "",
                link: "dropdown",
                type: "route"
            },
            {
                label: "componentList",
                icon: "",
                link: "list",
                type: "route"
            },
            {
                label: "componentLoading",
                icon: "",
                link: "loading",
                type: "route"
            },
            {
                label: "componentModal",
                icon: "",
                link: "modal",
                type: "route"
            },
            {
                label: "componentPagination",
                icon: "",
                link: "pagination",
                type: "route"
            },
            {
                label: "componentProgressBar",
                icon: "",
                link: "progress",
                type: "route"
            },
            {
                label: "componentStatisticWidget",
                icon: "chart-bar",
                link: "layout-statistic-widget",
                type: "route"
            },
            {
                label: "componentTab",
                icon: "",
                link: "tab",
                type: "route"
            },
            {
                label: "componentTableJson",
                icon: "table",
                link: "table",
                type: "route"
            },
            {
                label: "componentTableBackend",
                icon: "table",
                link: "back-end-table",
                type: "route"
            },
            {
                label: "componentTooltip",
                icon: "",
                link: "tooltip",
                type: "route"
            }
        ]
    },
    {
        label: "layoutElements",
        icon: "window-maximize",
        link: "",
        type: "dropdown",
        items: [
            {
                label: "layoutStructure",
                icon: "layer-group",
                link: "layout-structure",
                type: "route"
            },
            {
                label: "layoutGrid",
                icon: "grip-horizontal",
                link: "layout-grid",
                type: "route"
            },


        ]
    },
    {
        label: "formElements",
        icon: "edit",
        link: "",
        type: "dropdown",
        items: [
            {
                label: "formStructure",
                icon: "",
                link: "form-structure",
                type: "route"
            },
            {
                label: "formInputGroup",
                icon: "",
                link: "form-input-group",
                type: "route"
            },
            {
                label: "formSimpleInputs",
                icon: "",
                link: "form-simple-field",
                type: "route"
            },
            {
                label: "formRepeatableInput",
                icon: "retweet",
                link: "form-repeatable-field",
                type: "route"
            },
            {
                label: "formDateTimeInput",
                icon: "clock",
                link: "form-date-field",
                type: "route"
            },
            {
                label: "formSelectInput",
                icon: "",
                link: "form-select-input",
                type: "route"
            }
        ]
    },
    {
        label: "externalSources",
        icon: "code",
        type: "dropdown",
        items : [
            {
                label: "externalGitHubRepo",
                icon: "code",
                link: "https://github.com/sinan-aydogan/tailadmin-laravel",
                type: "external",
            },
            {
                label: "externalLaravelDocument",
                icon: "",
                link: "https://laravel.com/docs",
                type: "external"
            },
            {
                label: "externalInertiaDocument",
                icon: "",
                link: "https://inertiajs.com/",
                type: "external"
            },
            {
                label: "externalVuejsDocument",
                icon: "",
                link: "https://v3.vuejs.org/",
                type: "external"
            },
            {
                label: "externalTailwindcssDocument",
                icon: "",
                link: "https://tailwindcss.com/docs",
                type: "external"
            }
        ]
    },
];

/*Side Menu Footer*/
const sideMenuFooterLinks = [
    {
        label: "footerHelp",
        linkType: "external",
        link: "https://github.com/sinan-aydogan",
        icon: "question"
    },
    {
        showWhenFolded: true,
        label: "footerSettings",
        linkType: "route",
        link: "settings",
        icon: "cog"
    }
];

/*Top Bar User Menu*/
const topBarUserMenuLinks = [];

export {sideMenuLinks, sideMenuFooterLinks}
