/* Multi-language */
import {useI18n} from "vue-i18n";
import {mainMenuTranslates} from "@/Lang/languages";
import {computed} from "vue";

export default function ({roles,permissions}) {

    const {tm} = useI18n({
        inheritLocale: true,
        messages: mainMenuTranslates
    })

    /*Main Menu Links*/
    const mainMenuLinks = computed(()=>{
        return [
            {
                id: "externalGitHubRepo",
                label:  tm("externalGitHubRepo"),
                icon: "star",
                link: "https://github.com/sinan-aydogan/anemon-laravel",
                type: "simple-link",
                target: "_blank",
                visibleFor: roles.includes('Super Admin'),
            },
            {
                id: "authPages",
                label:  tm("authPages"),
                icon: "tv",
                link: null,
                type: "dropdown",
                links: [
                    {
                        id:"authLogin",
                        label:  tm("authLogin"),
                        icon: null,
                        link: "login-app",
                        type: "route"
                    },
                    {
                        id: "authRegister",
                        label:  tm("authRegister"),
                        icon: null,
                        link: "register-app",
                        type: "route"
                    },
                    {
                        id: "authForgotPassword",
                        label:  tm("authForgotPassword"),
                        icon: null,
                        link: "forgot-password-app",
                        type: "route"
                    },
                    {
                        id: "authLockScreen",
                        label:  tm("authLockScreen"),
                        icon: null,
                        link: "lock-app",
                        type: "route"
                    },
                    {
                        id: "authProfile",
                        label:  tm("authProfile"),
                        icon: null,
                        link: "profile.show",
                        type: "route"
                    }
                ]
            },
            {
                id: "components",
                label:  tm("components"),
                icon: "plug",
                link: null,
                type: "dropdown",
                links: [
                    {
                        id: "componentAlert",
                        label:  tm("componentAlert"),
                        icon: null,
                        link: "alert",
                        type: "route"
                    },
                    {
                        id: "componentAvatar",
                        label:  tm("componentAvatar"),
                        icon: null,
                        link: "avatar",
                        type: "route"
                    },
                    {
                        id: "componentBadge",
                        label:  tm("componentBadge"),
                        icon: null,
                        link: "badge",
                        type: "route"
                    },
                    {
                        id: "componentBreadcrumb",
                        label:  tm("componentBreadcrumb"),
                        icon: null,
                        link: "breadcrumb",
                        type: "route"
                    },
                    {
                        id: "componentButton",
                        label:  tm("componentButton"),
                        icon: null,
                        link: "button",
                        type: "route"
                    },
                    {
                        id: "componentCollapsible",
                        label:  tm("componentCollapsible"),
                        icon: null,
                        link: "collapsible",
                        type: "route"
                    },
                    {
                        id: "componentDropdown",
                        label:  tm("componentDropdown"),
                        icon: null,
                        link: "dropdown",
                        type: "route"
                    },
                    {
                        id: "componentList",
                        label:  tm("componentList"),
                        icon: null,
                        link: "list",
                        type: "route"
                    },
                    {
                        id: "componentLoading",
                        label:  tm("componentLoading"),
                        icon: null,
                        link: "loading",
                        type: "route"
                    },
                    {
                        id: "componentModal",
                        label:  tm("componentModal"),
                        icon: null,
                        link: "modal",
                        type: "route"
                    },
                    {
                        id: "componentProgressBar",
                        label:  tm("componentProgressBar"),
                        icon: null,
                        link: "progress",
                        type: "route"
                    },
                    {
                        id: "componentStatisticWidget",
                        label:  tm("componentStatisticWidget"),
                        icon: "chart-bar",
                        link: "layout-statistic-widget",
                        type: "route"
                    },
                    {
                        id: "componentTab",
                        label:  tm("componentTab"),
                        icon: null,
                        link: "tab",
                        type: "route"
                    },
                    {
                        id: "componentTable",
                        label:  tm("componentTable"),
                        icon: "table",
                        link: null,
                        type: "dropdown",
                        links: [
                            {
                                id: "componentTableJson",
                                label:  tm("componentTableJson"),
                                icon: null,
                                link: "table",
                                type: "route"
                            },
                            {
                                id: "componentTableBackend",
                                label:  tm("componentTableBackend"),
                                icon: null,
                                link: "back-end-table",
                                type: "route"
                            },
                            {
                                id: "componentPagination",
                                label:  tm("componentPagination"),
                                icon: null,
                                link: "pagination",
                                type: "route"
                            }
                        ]
                    },
                    {
                        id: "componentTooltip",
                        label:  tm("componentTooltip"),
                        icon: null,
                        link: "tooltip",
                        type: "route"
                    },
                    {
                        id: "layoutElements",
                        label:  tm("layoutElements"),
                        icon: "window-maximize",
                        link: null,
                        type: "dropdown",
                        links: [
                            {
                                id: "layoutStructure",
                                label:  tm("layoutStructure"),
                                icon: "layer-group",
                                link: "layout-structure",
                                type: "route"
                            },
                            {
                                id: "layoutGrid",
                                label:  tm("layoutGrid"),
                                icon: "grip-horizontal",
                                link: "layout-grid",
                                type: "route"
                            },
                            {
                                id: "componentContentBox",
                                label:  tm("componentContentBox"),
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
                label:  tm("formElements"),
                icon: "edit",
                link: null,
                type: "dropdown",
                links: [
                    {
                        id: "formStructure",
                        label:  tm("formStructure"),
                        icon: null,
                        link: "form-structure",
                        type: "route"
                    },
                    {
                        id: "formInputGroup",
                        label:  tm("formInputGroup"),
                        icon: null,
                        link: "form-input-group",
                        type: "route"
                    },
                    {
                        id: "formSimpleInputs",
                        label:  tm("formSimpleInputs"),
                        icon: null,
                        link: "form-simple-field",
                        type: "route"
                    },
                    {
                        id: "formRepeatableInput",
                        label:  tm("formRepeatableInput"),
                        icon: "retweet",
                        link: "form-repeatable-field",
                        type: "route"
                    },
                    {
                        id: "formDateTimeInput",
                        label:  tm("formDateTimeInput"),
                        icon: "clock",
                        link: "form-date-field",
                        type: "route"
                    },
                    {
                        id: "formSelectInput",
                        label:  tm("formSelectInput"),
                        icon: null,
                        link: "form-select-input",
                        type: "route"
                    }
                ]
            },
            {
                id: "externalSources",
                label:  tm("externalSources"),
                icon: "code",
                type: "dropdown",
                links: [
                    {
                        id: "externalLaravelDocument",
                        label:  tm("externalLaravelDocument"),
                        icon: null,
                        link: "https://laravel.com/docs",
                        type: "simple-link",
                        target: "_blank"
                    },
                    {
                        id: "externalInertiaDocument",
                        label:  tm("externalInertiaDocument"),
                        icon: null,
                        link: "https://inertiajs.com/",
                        type: "simple-link",
                        target: "_blank"
                    },
                    {
                        id: "externalVuejsDocument",
                        label:  tm("externalVuejsDocument"),
                        icon: null,
                        link: "https://v3.vuejs.org/",
                        type: "simple-link",
                        target: "_blank"
                    },
                    {
                        id: "externalTailwindcssDocument",
                        label:  tm("externalTailwindcssDocument"),
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
                label:  tm("footerHelp"),
                linkType: "simple-link",
                link: "https://github.com/sinan-aydogan",
                icon: "question",
                target: "_blank"
            },
            {
                id: "footerSettings",
                label:  tm("footerSettings"),
                showWhenFolded: true,
                linkType: "route",
                link: "settings",
                icon: "cog"
            }
        ]
    });

    return {mainMenuLinks, mainMenuFooterLinks}

};
