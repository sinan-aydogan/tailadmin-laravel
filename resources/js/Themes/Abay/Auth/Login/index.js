export default {
    container: "flex flex-col border items-center justify-center shadow border-none",
    bgColor: ["bg-gradient-to-tl", "from-violet-300", "via-pink-400", "to-amber-300", "dark:bg-violet-400"],
    bgImage: {
        dark: "https://unsplash.com/photos/DKDFBtmZSz8/download?force=true&w=1920",
        light: "https://unsplash.com/photos/nY14Fs8pxT8/download?force=true&w=1920"
    },
    logo: {
        dark: "/img/light-logo.svg",
        light: "/img/light-logo.svg"
    },
    header: ["bg-gradient-to-tl", "from-violet-500", "to-pink-600", "border-b-2", "border-purple-800/50", "dark:border-rose-700", "dark:from-yellow-700/75", "dark:via-rose-800/75", "dark:to-violet-800/50", "text-slate-100", "dark:text-violet-100"],
    body: ["bg-white/50", "dark:bg-slate-800/50"],
    radius: "regular",
    loginButton: {
        dark: {
            design: "filled",
            color: "pink"
        },
        light: {
            design: "light",
            color: "pink"
        }
    },
    registerButton: {
        dark: {
            design: "link",
            color: "light"
        },
        light: {
            design: "link",
            color: "pink"
        }
    }
};
