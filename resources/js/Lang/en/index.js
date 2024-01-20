export default {
    auth:{
        email: "Email",
        password: "Password",
        rememberMe: "Remember me",
        forgotPassword: "Forgot your password?",
        login: "Login",
        logout: "Logout",
        register: "Register",
        validationMessage: {
            email: {
                required: "The email filed is required",
                email: "The email must be a valid email address"
            },
            password: {
                required: "The password filed is required"
            }
        }
    },
    general:{
        brandName: "LaraQuality",
        /* Theme */
        darkMode: "Dark Mode",
        lightMode: "Light Mode",
        auto: "Auto",
        /* Error */
        somethingWentWrong: "Oops, Something went wrong",
        /* Simple Terms */
        save: 'Save',
        reset: 'Reset',
        cancel: 'Cancel',
        delete: 'Delete',
        edit: 'Edit',
        view: 'View'
    },
    mainMenu:{
        authPages: "Auth Pages",
        authLogin: "Login",
        authRegister: "Register",
        authForgotPassword: "Forgot Password",
        authLockScreen: "Lock Screen",
        authProfile: "Profile",
        components: "Components",
        componentAlert: "Alert",
        componentAvatar: "Avatar",
        componentBadge: "Badge",
        componentBreadcrumb: "Breadcrumb",
        componentButton: "Button",
        componentCollapsible: "Collapsible",
        componentContentBox: "Content Box",
        componentDropdown: "Dropdown",
        componentList: "List",
        componentLoading: "Loading",
        componentModal: "Modal",
        componentPagination: "Pagination",
        componentProgressBar: "Progress Bar",
        componentStatisticWidget: "Statistic Widget",
        componentTab: "Tab",
        componentTable: "Table",
        componentTableJson: "Table(JSON)",
        componentTableBackend: "Table(BackEnd)",
        componentTooltip: "Tooltip",
        layoutElements: "Layout Elements",
        layoutStructure: "Layout Structure",
        layoutGrid: "Grid",
        formElements: "Form Elements",
        formStructure: "Form Structure",
        formInputGroup: "Input Group",
        formSimpleInputs: "Simple Inputs",
        formRepeatableInput: "Repeatable Input",
        formDateTimeInput: "Date/Time Input",
        formSelectInput: "Select Input",
        externalSources: "External Sources",
        externalGitHubRepo: 'Github Repo',
        externalTailwindcssDocument: "TailwindCSS Document",
        externalVuejsDocument: "Vuejs Document",
        externalInertiaDocument: "Inertiajs Document",
        externalLaravelDocument: "Laravel Document",
        footerHelp: "Help",
        footerSettings: "Settings"
    },
    userMenu:{
        manageAccount: "Manage Account",
        manageTeam: "Manage Team",
        switchTeams: "Switch Team",
        language: "Language",
        darkMode: "Dark Mode",
        profile: "Profile",
        api: "API Tokens",
        teamSettings: "Team Settings",
        createNewTeam: "Create New Team",
        auto: "Auto",
        dark: "Dark",
        light: "Light",
        logout: "Logout"
    },
    notification:{
        pendingWorks: 'Pending Works',
        unfinishedTodos: 'Unfinished Todos',
        unreadMessages: 'Unread Messages'
    },
    component: {
        table: {
            searchPlaceHolder: "search",
            optionsModalTitle: "Table Options",
            optionsModalColumnOrder: "Column Order and Visibility",
            anyContentMessage: "There is any content for your search criteria",
            advancedSearch: "Advanced Search",
            itemsCountPerPage: "Items Count in a page",
            actionView: "View",
            actionEdit: "Edit",
            actionDelete: "Delete",
            missing: "Missing",
            contentKeyError: "Content Key is missing, please add a content key. It comes from controller. <br>Example: '<b><i>users</i></b>'=>Users::all()",
            searchRouteError: "Search route is missing, please add a search route. The search route is where the search parameters posted route (same page route) like <b><i>user.index</i></b>.",
            contentError: "Content is missing, please add a content dataset. It comes from controller. <br>Example: '<b><i>users</i></b>'=>Users::all()",
            headerError: "Header is missing, please add a header dataset. The table needs it for showing data columns."
        },
        pagination: {
            detailText: "{totalPage} pages - {totalRecord} records",
            previous: "Previous",
            next: "Next"
        }
    }
}
