export default {
    auth: {
        email: "Email",
        password: "Mot de passe",
        rememberMe: "Souviens-toi de moi",
        forgotPassword: "Mot de passe oublié?",
        login: "Connexion",
        logout: "Se déconnecter",
        register: "Registre",
        validationMessage: {
            email: {
                required: "Le champ email est obligatoire",
                email: "L'e-mail doit être une adresse e-mail valide"
            },
            password: {
                required: "Le champ mot de passe est obligatoire"
            }
        }
    },
    general: {
        brandName: "LaraQuality",
        /* Theme */
        darkMode: "Thème sombre",
        lightMode: "Thème de la lumière",
        auto: "Auto",
        /* Error */
        somethingWentWrong: "Oups, quelque chose s'est mal passé",
        /* Simple Terms */
        save: "Sauvegarder",
        reset: "Réinitialiser",
        cancel: "Annuler",
        delete: "Supprimer",
        edit: "Éditer",
        view: "Voir"
    },
    mainMenu: {
        authPages: "Pages d'authentification",
        authLogin: "Connexion",
        authRegister: "S'inscrire",
        authForgotPassword: "Mot de passe oublié",
        authLockScreen: "Écran verrouillé",
        authProfile: "Profil",
        components: "Composants",
        componentAlert: "Alerte",
        componentAvatar: "Avatar",
        componentBadge: "Badge",
        componentBreadcrumb: "Breadcrumb",
        componentButton: "Bouton",
        componentCollapsible: "Pliant",
        componentContentBox: "Boîte de contenu",
        componentDropdown: "Menu déroulant",
        componentList: "Lister",
        componentLoading: "Chargement",
        componentModal: "Modal",
        componentPagination: "Pagination",
        componentProgressBar: "Barre de progression",
        componentStatisticWidget: "Widget statistique",
        componentTab: "Languette",
        componentTable: "Table",
        componentTableJson: "Tableau(JSON)",
        componentTableBackend: "Tableau(BackEnd)",
        componentTooltip: "Info-bulle",
        layoutElements: "Éléments de mise en page",
        layoutStructure: "Structure de mise en page",
        layoutGrid: "Grille",
        formElements: "Éléments de formulaire",
        formStructure: "Structure du formulaire",
        formInputGroup: "Groupe d'entrée",
        formSimpleInputs: "Entrées simples",
        formRepeatableInput: "Entrée répétable",
        formDateTimeInput: "Entrée date/heure",
        formSelectInput: "Sélectionnez l'entrée",
        externalSources: "Sources externes",
        externalGitHubRepo: "Dépôt Github",
        externalTailwindcssDocument: "TailwindCSS Document",
        externalVuejsDocument: "Vuejs Document",
        externalInertiaDocument: "Inertiajs Document",
        externalLaravelDocument: "Laravel Document",
        footerHelp: "Aider",
        footerSettings: "Réglages"
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
        pendingWorks: "Travaux en attente",
        unfinishedTodos: "Tâches en cours",
        unreadMessages: "Messages non lus"
    },
    component: {
        table: {
            searchPlaceHolder: "recherche",
            optionsModalTitle: "Options des tableaux",
            optionsModalColumnOrder: "Ordre des colonnes et visibilité",
            anyContentMessage: "Il y a du contenu correspondant à vos critères de recherche",
            advancedSearch: "Recherche Avancée",
            itemsCountPerPage: "Nombre d'éléments dans une page",
            actionView: "voir",
            actionEdit: "Modifier",
            actionDelete: "Supprimer",
            missing: "Manquant",
            contentKeyError: "La clé de contenu est manquante, veuillez ajouter une clé de contenu. Cela vient du contrôleur. <br>Exemple : '<b><i>utilisateurs</i></b>'=>Utilisateurs::all()",
            searchRouteError: "L'itinéraire de recherche est manquant, veuillez ajouter un itinéraire de recherche. L'itinéraire de recherche est l'endroit où les paramètres de recherche ont affiché l'itinéraire (même itinéraire de page) comme <b><i>utilisateur. Index</i></b>.",
            contentError: "Le contenu est manquant, veuillez ajouter un ensemble de données de contenu. Cela vient du contrôleur. <br>Exemple : '<b><i>utilisateurs</i></b>'=>Utilisateurs::all()",
            headerError: "L'en-tête est manquant, veuillez ajouter un ensemble de données d'en-tête. Le tableau en a besoin pour afficher les colonnes de données."
        },
        pagination: {
            detailText: "{totalPage} pages - {totalRecord} enregistrements",
            previous: "Ancien",
            next: "Suivant"
        }
    }
};
