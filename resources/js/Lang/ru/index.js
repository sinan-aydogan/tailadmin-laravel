export default {
    auth: {
        email: "Электронное письмо",
        password: "Пароль",
        rememberMe: "Запомните меня",
        forgotPassword: "Забыли Ваш пароль?",
        login: "Входить",
        logout: "Выйти",
        register: "Pегистр",
        validationMessage: {
            email: {
                required: "Поле электронной почты обязательно",
                email: "Электронная почта должна быть действительным адресом электронной почты"
            },
            password: {
                required: "Поле пароля обязательно"
            }
        }
    },
    general: {
        brandName: "LaraQuality",
        /* Theme */
        darkMode: "Темная тема",
        lightMode: "Светлая тема",
        auto: "Автоматический",
        /* Error */
        somethingWentWrong: "Упс! Что-то пошло не так",
        /* Simple Terms */
        save: "Сохранять",
        reset: "Перезагрузить",
        cancel: "Отмена",
        delete: "Удалить",
        edit: "Редактировать",
        view: "Вид"
    },
    mainMenu: {
        authPages: "Страницы авторизации",
        authLogin: "Авторизоваться",
        authRegister: "регистр",
        authForgotPassword: "Забыл пароль",
        authLockScreen: "Экран блокировки",
        authProfile: "Профиль",
        components: "Компоненты",
        componentAlert: "Тревога",
        componentAvatar: "Аватар",
        componentBadge: "Значок",
        componentBreadcrumb: "хлебные крошки",
        componentButton: "Кнопка",
        componentCollapsible: "Складной",
        componentContentBox: "Коробка содержимого",
        componentDropdown: "падать",
        componentList: "Список",
        componentLoading: "Загрузка",
        componentModal: "Модальный",
        componentPagination: "Пагинация",
        componentProgressBar: "Индикатор",
        componentStatisticWidget: "Статистический виджет",
        componentTab: "Вкладка",
        componentTable: "Таблица",
        componentTableJson: "Таблица(JSON)",
        componentTableBackend: "Таблица(BackEnd)",
        componentTooltip: "Подсказка",
        layoutElements: "Элементы макета",
        layoutStructure: "Структура макета",
        layoutGrid: "Сетка",
        formElements: "Элементы формы",
        formStructure: "Структура формы",
        formInputGroup: "Входная группа",
        formSimpleInputs: "Простые входы",
        formRepeatableInput: "Повторяемый ввод",
        formDateTimeInput: "Ввод даты/времени",
        formSelectInput: "Выберите ввод",
        externalSources: "Внешние источники",
        externalGitHubRepo: "Репозиторий Github",
        externalTailwindcssDocument: "Документ TailwindCSS",
        externalVuejsDocument: "Документ Vuejs",
        externalInertiaDocument: "Документ Inertiajs",
        externalLaravelDocument: "Документ Laravel",
        footerHelp: "Помощь",
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
        pendingWorks: "Ожидающие работы",
        unfinishedTodos: "Текущие дела",
        unreadMessages: "Непрочитанные сообщения"
    },
    component: {
        table: {
            searchPlaceHolder: "поиск",
            optionsModalTitle: "Опции таблицы",
            optionsModalColumnOrder: "Порядок столбцов и видимость",
            anyContentMessage: "Есть любой контент по вашим критериям поиска",
            advancedSearch: "Расширенный поиск",
            itemsCountPerPage: "Количество элементов на странице",
            actionView: "вид",
            actionEdit: "Редактировать",
            actionDelete: "Удалить",
            missing: "Отсутствующий",
            contentKeyError: "Ключ контента отсутствует. Добавьте ключ контента. Это исходит от контроллера. <br>Пример: '<b><i>пользователи</i></b>'=>Пользователи::all()",
            searchRouteError: "Маршрут поиска отсутствует, добавьте маршрут поиска. Маршрут поиска – это путь, по которому в параметрах поиска указан маршрут (маршрут той же страницы), например <b><i>user. Индекс</i></b>.",
            contentError: "Контент отсутствует. Добавьте набор данных контента. Это исходит от контроллера. <br>Пример: '<b><i>пользователи</i></b>'=>Пользователи::all()",
            headerError: "Заголовок отсутствует. Добавьте набор данных заголовка. Таблице это необходимо для отображения столбцов данных."
        },
        pagination: {
            detailText: "{totalPage} страницы - {totalRecord} записи",
            previous: "Бывший",
            next: "Следующий"
        }
    }
};
