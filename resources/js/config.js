const appConf = {
    appName: 'Anemon',
    darkLogo: 'img/dark-logo.svg',
    lightLogo: 'img/light-logo.svg',
    logoAreaClasses: null,
    appNameClasses: null,
    logoClasses: null,
    color: 'violet',
    radius: 3,
}

const authScreenConf = {
    appName: null,
    darkLogo: null,
    lightLogo: null,
    transparent: false,
    logoAreaClasses: ['flex', 'flex-col', 'justify-center', 'items-center', 'space-x-4'],
    appNameClasses: ['text-5xl', 'font-semibold'],
    logoClasses: ['w-12', 'text-white', 'h-auto'],
    showDesignChanger: false,
    showDarkModeSelector: false,
    showLanguageSelector: false,
}

const leftMenuConf = {
    appName: null,
    darkLogo: null,
    lightLogo: null,
    logoAreaClasses: ['flex', 'flex-col', 'justify-center', 'items-center', 'space-x-4'],
    appNameClasses: ['text-5xl', 'font-semibold'],
    logoClasses: ['w-12', 'text-white', 'h-auto'],
    color: null,
    radius: null,
}

const topBarConf = {
    radius: null,
    languageSelector: true,
    darkModeSelector: true,
    searchPlaceHolderText: 'type and search'
}

const footerConf = {
    visible: true,
    content: "<a\n" +
        "              class=\"text-blue-600 hover:underline\"\n" +
        "              href=\"https://anemon.tailadmin.dev/\"\n" +
        "              target=\"_blank\"\n" +
        "            >\n" +
        "              Anemon v.0.0.1\n" +
        "              </a>\n" +
        "            <span>by</span>\n" +
        "            <a\n" +
        "              class=\"text-teal-400 hover:underline\"\n" +
        "              href=\"https://github.com/sinan-aydogan\"\n" +
        "              target=\"_blank\"\n" +
        "            >\n" +
        "              Sinan AYDOĞAN\n" +
        "            </a>"
}

export {appConf,authScreenConf,leftMenuConf,topBarConf,footerConf}

