export default {
    auth: {
        email: "Електронна поща",
        password: "парола",
        rememberMe: "Помни ме",
        forgotPassword: "Забравена парола?",
        login: "вход",
        logout: "Изход",
        register: "Регистрирай се",
        validationMessage: {
            email: {
                required: "Полето за имейл е задължително",
                email: "Имейлът трябва да е валиден имейл адрес"
            },
            password: {
                required: "Полето за парола е задължително"
            }
        }
    },
    general: {
        brandName: "LaraQuality",
        /* Theme */
        darkMode: "Тъмна тема",
        lightMode: "Светеща тема",
        auto: "Автоматично",
        /* Error */
        somethingWentWrong: "Опа, нещо се обърка",
        /* Simple Terms */
        save: "Запазете",
        reset: "Нулиране",
        cancel: "Отмяна",
        delete: "Изтрий",
        edit: "редактиране",
        view: "Преглед"
    },
    mainMenu: {
        authPages: "Страници за удостоверяване",
        authLogin: "Вход",
        authRegister: "Регистрация",
        authForgotPassword: "Забравена парола",
        authLockScreen: "Заключен екран",
        authProfile: "Профил",
        components: "Компоненти",
        componentAlert: "Сигнал",
        componentAvatar: "Аватар",
        componentBadge: "Значка",
        componentBreadcrumb: "Breadcrumb",
        componentButton: "Бутон",
        componentCollapsible: "Сгъваем",
        componentContentBox: "Кутия за съдържание",
        componentDropdown: "Падащо меню",
        componentList: "Списък",
        componentLoading: "Зареждане",
        componentModal: "Modal",
        componentPagination: "Пагинация",
        componentProgressBar: "Лента на напредъка",
        componentStatisticWidget: "Статистическа витрина",
        componentTab: "Tab",
        componentTable: "Таблица",
        componentTableJson: "Таблица(JSON)",
        componentTableBackend: "Таблица(BackEnd)",
        componentTooltip: "Балон с информация",
        layoutElements: "Елементи на оформление",
        layoutStructure: "Структура на оформлението",
        layoutGrid: "Решетка",
        formElements: "Елементи на формуляр",
        formStructure: "Структура на формата",
        formInputGroup: "Група за въвеждане",
        formSimpleInputs: "Прости входове",
        formRepeatableInput: "Повтаряем вход",
        formDateTimeInput: "Въвеждане на дата/час",
        formSelectInput: "Избор на въвеждане",
        externalSources: "Външни източници",
        externalGitHubRepo: "Github Repo",
        externalTailwindcssDocument: "Документ TailwindCSS",
        externalVuejsDocument: "Документ Vuejs",
        externalInertiaDocument: "Документ Inertiajs",
        externalLaravelDocument: "Документ Laravel",
        footerHelp: "Помощ",
        footerSettings: "Настройки"
    },
    userMenu: {
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
    notification: {
        pendingWorks: "Предстоящи работи",
        unfinishedTodos: "Текущи задачи",
        unreadMessages: "Непрочетени съобщения"
    },

    component: {
        table: {
            searchPlaceHolder: "Търсене",
            optionsModalTitle: "Опции на таблицата",
            optionsModalColumnOrder: "Ред на колони и видимост",
            anyContentMessage: "Има всякакво съдържание за вашите критерии за търсене",
            advancedSearch: "подробно търсене",
            itemsCountPerPage: "Брой елементи в страница",
            actionView: "изглед",
            actionEdit: "редактиране",
            actionDelete: "Изтрий",
            missing: "Липсва",
            contentKeyError: "Липсва ключ за съдържание, моля, добавете ключ за съдържание. Идва от контролера. <br>Пример: '<b><i>users</i></b>'=>Users::all()",
            searchRouteError: "Липсва маршрут за търсене, моля, добавете маршрут за търсене. Маршрутът за търсене е мястото, където параметрите за търсене публикуват маршрут (маршрут на същата страница) като <b><i>потребител. Индекс</i></b>.",
            contentError: "Липсва съдържание, моля, добавете набор от данни за съдържание. Идва от контролера. <br>Пример: '<b><i>users</i></b>'=>Users::all()",
            headerError: "Липсва заглавка, моля, добавете набор от данни за заглавка. Таблицата се нуждае от него за показване на колони с данни."
        },
        pagination: {
            detailText: "{totalPage} страници - {totalRecord} записа",
            previous: "Бивш",
            next: "Следващия"
        }
    }
};
