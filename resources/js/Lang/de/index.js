export default {
    auth: {
        email: "Email",
        password: "Passwort",
        rememberMe: "Behalte mich in Erinnerung",
        forgotPassword: "Passwort vergessen?",
        login: "Anmeldung",
        logout: "Abmeldung",
        register: "Registrierkasse",
        validationMessage: {
            email: {
                required: "Das E-Mail-Feld ist erforderlich",
                email: "Die E-Mail muss eine gültige E-Mail-Adresse sein"
            },
            password: {
                required: "Das Passwortfeld ist erforderlich"
            }
        }
    },
    general: {
        brandName: "LaraQuality",
        /* Theme */
        darkMode: "Dunkles Thema",
        lightMode: "Leuchtendes Thema",
        auto: "Automatisch",
        /* Error */
        somethingWentWrong: "Ups! Irgendwas lief schief",
        /* Simple Terms */
        save: "Speichern",
        reset: "Zurücksetzen",
        cancel: "Abbrechen",
        delete: "Löschen",
        edit: "Bearbeiten",
        view: "Aussicht"
    },
    mainMenu: {
        authPages: "Auth-Seiten",
        authLogin: "Anmeldung",
        authRegister: "Registrieren",
        authForgotPassword: "Passwort vergessen",
        authLockScreen: "Bildschirm sperren",
        authProfile: "Profile",
        components: "Komponenten",
        componentAlert: "Alarm",
        componentAvatar: "Benutzerbild",
        componentBadge: "Abzeichen",
        componentBreadcrumb: "Breadcrumb",
        componentButton: "Taste",
        componentCollapsible: "Zusammenklappbar",
        componentContentBox: "Inhaltsfeld",
        componentDropdown: "Dropdown-Liste",
        componentList: "Liste",
        componentLoading: "Wird geladen",
        componentModal: "Modal",
        componentPagination: "Seitennummerierung",
        componentProgressBar: "Fortschrittsanzeige",
        componentStatisticWidget: "Statistik-Widget",
        componentTab: "Tab",
        componentTable: "Tabelle",
        componentTableJson: "Tabelle(JSON)",
        componentTableBackend: "Tabelle(BackEnd)",
        componentTooltip: "Kurzinfo",
        layoutElements: "Layout-Elemente",
        layoutStructure: "Layoutstruktur",
        layoutGrid: "Netz",
        formElements: "Formularelemente",
        formStructure: "Formularstruktur",
        formInputGroup: "Eingangsgruppe",
        formSimpleInputs: "Einfache Eingaben",
        formRepeatableInput: "Wiederholbare Eingabe",
        formDateTimeInput: "Datum/Uhrzeit-Eingabe",
        formSelectInput: "Wählen Sie Eingang",
        externalSources: "Externe Quellen",
        externalGitHubRepo: "Github-Repo",
        externalTailwindcssDocument: "TailwindCSS-Dokument",
        externalVuejsDocument: "Vuejs-Dokument",
        externalInertiaDocument: "Inertiajs-Dokument",
        externalLaravelDocument: "Laravel-Dokument",
        footerHelp: "Hilfe",
        footerSettings: "Einstellungen"
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
        pendingWorks: "Ausstehende Arbeiten",
        unfinishedTodos: "Laufende Aufgaben",
        unreadMessages: "ungelesene Nachrichten"
    },
    component: {
        table: {
            searchPlaceHolder: "suchen",
            optionsModalTitle: "Tischoptionen",
            optionsModalColumnOrder: "Spaltenreihenfolge und Sichtbarkeit",
            anyContentMessage: "Es gibt Inhalte für Ihre Suchkriterien",
            advancedSearch: "Erweiterte Suche",
            itemsCountPerPage: "Anzahl der Elemente auf einer Seite",
            actionView: "Sicht",
            actionEdit: "Bearbeiten",
            actionDelete: "Löschen",
            missing: "Fehlen",
            contentKeyError: "Der Inhaltsschlüssel fehlt. Bitte fügen Sie einen Inhaltsschlüssel hinzu. Es kommt vom Controller. <br>Beispiel: '<b><i>users</i></b>'=>Users::all()",
            searchRouteError: "Die Suchroute fehlt. Bitte fügen Sie eine Suchroute hinzu. Die Suchroute ist dort, wo die Suchparameter der Route (dieselbe Seitenroute) wie <b><i>Benutzer gepostet werden. Index</i></b>.",
            contentError: "Der Inhalt fehlt. Bitte fügen Sie einen Inhaltsdatensatz hinzu. Es kommt vom Controller. <br>Beispiel: '<b><i>users</i></b>'=>Users::all()",
            headerError: "Der Header fehlt. Bitte fügen Sie einen Header-Datensatz hinzu. Die Tabelle benötigt es zum Anzeigen von Datenspalten."
        },
        pagination: {
            detailText: "{totalPage} Seiten - {totalRecord} Schallplatten",
            previous: "Ehemalig",
            next: "Nächste"
        }
    }
};
