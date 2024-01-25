/* Multi-language */
import {computed} from "vue";
import {$i18n} from "@/app.js";

export default function ({roles,permissions}) {

    const t = $i18n.t;
    /*Main Menu Links*/
    const mainMenuLinks = computed(()=>{
        return [
            {
                id: "externalGitHubRepo",
                label:  t("mainMenu.externalGitHubRepo"),
                icon: "star",
                link: "https://github.com/sinan-aydogan/anemon-laravel",
                type: "simple-link",
                target: "_blank",
                visibleFor: roles.includes('Super Admin'),
            },
            {
                id: "authPages",
                label:  t("mainMenu.authPages"),
                icon: "tv",
                link: null,
                type: "dropdown",
                links: [
                    {
                        id:"authLogin",
                        label:  t("mainMenu.authLogin"),
                        icon: null,
                        link: "login-app",
                        type: "route"
                    },
                    {
                        id: "authRegister",
                        label:  t("mainMenu.authRegister"),
                        icon: null,
                        link: "register-app",
                        type: "route"
                    },
                    {
                        id: "authForgotPassword",
                        label:  t("mainMenu.authForgotPassword"),
                        icon: null,
                        link: "forgot-password-app",
                        type: "route"
                    },
                    {
                        id: "authLockScreen",
                        label:  t("mainMenu.authLockScreen"),
                        icon: null,
                        link: "lock-app",
                        type: "route"
                    },
                    {
                        id: "authProfile",
                        label:  t("mainMenu.authProfile"),
                        icon: null,
                        link: "profile.show",
                        type: "route"
                    }
                ]
            },
            {
                id: "components",
                label:  t("mainMenu.components"),
                icon: "plug",
                link: null,
                type: "dropdown",
                links: [
                    {
                        id: "componentAlert",
                        label:  t("mainMenu.componentAlert"),
                        icon: null,
                        link: "alert",
                        type: "route"
                    },
                    {
                        id: "componentAvatar",
                        label:  t("mainMenu.componentAvatar"),
                        icon: null,
                        link: "avatar",
                        type: "route"
                    },
                    {
                        id: "componentBadge",
                        label:  t("mainMenu.componentBadge"),
                        icon: null,
                        link: "badge",
                        type: "route"
                    },
                    {
                        id: "componentBreadcrumb",
                        label:  t("mainMenu.componentBreadcrumb"),
                        icon: null,
                        link: "breadcrumb",
                        type: "route"
                    },
                    {
                        id: "componentButton",
                        label:  t("mainMenu.componentButton"),
                        icon: null,
                        link: "button",
                        type: "route"
                    },
                    {
                        id: "componentCollapsible",
                        label:  t("mainMenu.componentCollapsible"),
                        icon: null,
                        link: "collapsible",
                        type: "route"
                    },
                    {
                        id: "componentDropdown",
                        label:  t("mainMenu.componentDropdown"),
                        icon: null,
                        link: "dropdown",
                        type: "route"
                    },
                    {
                        id: "componentList",
                        label:  t("mainMenu.componentList"),
                        icon: null,
                        link: "list",
                        type: "route"
                    },
                    {
                        id: "componentLoading",
                        label:  t("mainMenu.componentLoading"),
                        icon: null,
                        link: "loading",
                        type: "route"
                    },
                    {
                        id: "componentModal",
                        label:  t("mainMenu.componentModal"),
                        icon: null,
                        link: "modal",
                        type: "route"
                    },
                    {
                        id: "componentProgressBar",
                        label:  t("mainMenu.componentProgressBar"),
                        icon: null,
                        link: "progress",
                        type: "route"
                    },
                    {
                        id: "componentStatisticWidget",
                        label:  t("mainMenu.componentStatisticWidget"),
                        icon: "chart-bar",
                        link: "layout-statistic-widget",
                        type: "route"
                    },
                    {
                        id: "componentTab",
                        label:  t("mainMenu.componentTab"),
                        icon: null,
                        link: "tab",
                        type: "route"
                    },
                    {
                        id: "componentTable",
                        label:  t("mainMenu.componentTable"),
                        icon: "table",
                        link: null,
                        type: "dropdown",
                        links: [
                            {
                                id: "componentTableJson",
                                label:  t("mainMenu.componentTableJson"),
                                icon: null,
                                link: "table",
                                type: "route"
                            },
                            {
                                id: "componentTableBackend",
                                label:  t("mainMenu.componentTableBackend"),
                                icon: null,
                                link: "back-end-table",
                                type: "route"
                            },
                            {
                                id: "componentPagination",
                                label:  t("mainMenu.componentPagination"),
                                icon: null,
                                link: "pagination",
                                type: "route"
                            }
                        ]
                    },
                    {
                        id: "componentTooltip",
                        label:  t("mainMenu.componentTooltip"),
                        icon: null,
                        link: "tooltip",
                        type: "route"
                    },
                    {
                        id: "layoutElements",
                        label:  t("mainMenu.layoutElements"),
                        icon: "window-maximize",
                        link: null,
                        type: "dropdown",
                        links: [
                            {
                                id: "layoutStructure",
                                label:  t("mainMenu.layoutStructure"),
                                icon: "layer-group",
                                link: "layout-structure",
                                type: "route"
                            },
                            {
                                id: "layoutGrid",
                                label:  t("mainMenu.layoutGrid"),
                                icon: "grip-horizontal",
                                link: "layout-grid",
                                type: "route"
                            },
                            {
                                id: "componentContentBox",
                                label:  t("mainMenu.componentContentBox"),
                                icon: "window-restore",
                                link: "content-box",
                                type: "route"
                            },
                        ]
                    },
                ]
            },
            {
                id: "formElements",
                label:  t("mainMenu.formElements"),
                icon: "edit",
                link: null,
                type: "dropdown",
                links: [
                    {
                        id: "formStructure",
                        label:  t("mainMenu.formStructure"),
                        icon: null,
                        link: "form-structure",
                        type: "route"
                    },
                    {
                        id: "formInputGroup",
                        label:  t("mainMenu.formInputGroup"),
                        icon: null,
                        link: "form-input-group",
                        type: "route"
                    },
                    {
                        id: "formSimpleInputs",
                        label:  t("mainMenu.formSimpleInputs"),
                        icon: null,
                        link: "form-simple-field",
                        type: "route"
                    },
                    {
                        id: "formRepeatableInput",
                        label:  t("mainMenu.formRepeatableInput"),
                        icon: "retweet",
                        link: "form-repeatable-field",
                        type: "route"
                    },
                    {
                        id: "formDateTimeInput",
                        label:  t("mainMenu.formDateTimeInput"),
                        icon: "clock",
                        link: "form-date-field",
                        type: "route"
                    },
                    {
                        id: "formSelectInput",
                        label:  t("mainMenu.formSelectInput"),
                        icon: null,
                        link: "form-select-input",
                        type: "route"
                    }
                ]
            },
            {
                id: "externalSources",
                label:  t("mainMenu.externalSources"),
                icon: "code",
                type: "dropdown",
                links: [
                    {
                        id: "externalLaravelDocument",
                        label:  t("mainMenu.externalLaravelDocument"),
                        icon: null,
                        link: "https://laravel.com/docs",
                        type: "simple-link",
                        target: "_blank"
                    },
                    {
                        id: "externalInertiaDocument",
                        label:  t("mainMenu.externalInertiaDocument"),
                        icon: null,
                        link: "https://inertiajs.com/",
                        type: "simple-link",
                        target: "_blank"
                    },
                    {
                        id: "externalVuejsDocument",
                        label:  t("mainMenu.externalVuejsDocument"),
                        icon: null,
                        link: "https://v3.vuejs.org/",
                        type: "simple-link",
                        target: "_blank"
                    },
                    {
                        id: "externalTailwindcssDocument",
                        label:  t("mainMenu.externalTailwindcssDocument"),
                        icon: null,
                        link: "https://tailwindcss.com/docs",
                        type: "simple-link",
                        target: "_blank"
                    }
                ]
            }
        ]
    });

    /*Main Menu Footer*/
    const mainMenuFooterLinks = computed(()=>{
        return [
            {
                id: "footerHelp",
                label:  t("mainMenu.footerHelp"),
                linkType: "simple-link",
                link: "https://github.com/sinan-aydogan",
                icon: "question",
                target: "_blank"
            },
            {
                id: "footerSettings",
                label:  t("mainMenu.footerSettings"),
                showWhenFolded: true,
                linkType: "route",
                link: "settings",
                icon: "cog"
            }
        ]
    });

    return {mainMenuLinks, mainMenuFooterLinks}

};
