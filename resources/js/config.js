/*Default Settings*/
const appConf = {
    appName: 'TailAdmin',
    logo: {
      dark: '/img/dark-logo.svg',
      light: '/img/light-logo.svg'
    },
    logoAreaClasses: null,
    appNameClasses: null,
    logoClasses: null,
    radius: 3,
};

/*Layout Settings*/
const authScreenConf = {
    appName: null,
    logo: {
        dark: null,
        light: null,
    },
    logoAreaClasses: ['flex', 'flex-col', 'justify-center', 'items-center', 'space-x-2', 'min-w-[25rem]'],
    appNameClasses: ['text-3xl', 'font-semibold'],
    logoClasses: ['w-12', 'text-white', 'h-auto'],
    showDesignChanger: true,
    showDarkModeSelector: true,
    showLanguageSelector: true,
};

const mainMenuConf = {
    /*Logo Area*/
    appName: null,
    logo: {
        dark: '/img/dark-logo.svg',
        light: '/img/dark-logo.svg',
    },
    logoAreaRadius: null,
    logoAreaClasses: ['flex', 'flex-col', 'justify-center', 'items-center', 'space-x-6', 'bg-violet-500'],
    appNameClasses: ['text-6xl', 'font-semibold', 'text-white'],
    logoClasses: ['w-10', 'text-white', 'h-auto'],
    /*Menu*/
    menuRadius: 5,
    rootLinkClasses: {
        activeBg: ['border', 'bg-slate-500/20', 'border-slate-500/50', 'rounded'],
        normal: ['hover:bg-violet-200', 'hover:text-violet-800'],
        active: ['text-white', 'bg-violet-500', 'hover:bg-violet-600', 'rounded-2xl'],
    },
    secondLinkClasses: {
        activeBg: [],
        normal: ['hover:bg-emerald-200', 'hover:text-emerald-800'],
        active: ['text-white', 'bg-emerald-500', 'hover:bg-emerald-600', 'rounded'],
    },
    thirdLinkClasses: {
        activeBg: ['border', 'bg-emerald-500/20', 'border-slate-500/50', 'rounded'],
        normal: ['hover:bg-emerald-200', 'hover:text-emerald-800'],
        active: ['text-white', 'bg-emerald-500', 'hover:bg-emerald-600', 'rounded'],
    },
};

const topBarConf = {
    radius: null,
    languageSelector: true,
    darkModeSelector: true,
    searchPlaceHolderText: 'type and search'
};

const footerConf = {
    visible: true,
    content: "<a\n" +
        "              class=\"text-blue-600 hover:underline\"\n" +
        "              href=\"https://tailadmin.dev/\"\n" +
        "              target=\"_blank\"\n" +
        "            >\n" +
        "              TailAdmin v2\n" +
        "              </a>\n" +
        "            <span>by</span>\n" +
        "            <a\n" +
        "              class=\"text-teal-400 hover:underline\"\n" +
        "              href=\"https://github.com/sinan-aydogan\"\n" +
        "              target=\"_blank\"\n" +
        "            >\n" +
        "              Sinan AYDOĞAN\n" +
        "            </a>"
};

/*Module Settings*/
const alertConf = {
    design: 'filled',
    color: 'light',
    radius: null,
    closeable: false,
    timer: 4000
};

const avatarConf = {
    defaultPhotoSrc: '/img/samples/dummyAvatar.svg',
    size: 3,
    radius: null,
};

const badgeConf = {
    color: 'light',
    design: 'filled',
    radius: 5,
};

const formContentConf = {
    radius: null
};

const inputDateConf = {
    radius: null
};

export {
    appConf,
    /*Layout*/
    authScreenConf,
    mainMenuConf,
    topBarConf,
    footerConf,
    /*Component*/
    alertConf,
    avatarConf,
    badgeConf,
    formContentConf,
    inputDateConf
}

