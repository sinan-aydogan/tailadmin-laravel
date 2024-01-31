export default {
    container: "flex flex-col w-full backdrop-filter backdrop-blur border items-center justify-center shadow border-none",
    bgColor: "bg-gradient-to-tl from-violet-300 via-pink-400 to-amber-300 dark:bg-violet-400",
    bgImage: {
        dark: "https://unsplash.com/photos/DKDFBtmZSz8/download?force=true&w=1920",
        light: "https://unsplash.com/photos/nY14Fs8pxT8/download?force=true&w=1920"
    },
    logo: "inline-flex py-4 w-full justify-center items-center",
    logoSrc: {
        dark: "/img/light-logo.svg",
        light: "/img/light-logo.svg"
    },
    greeting: "inline-flex justify-center w-full bg-gray-200 py-1 bg-opacity-20 w-full text-sm",
    status: "mb-4 font-medium text-sm text-green-600",
    header: "bg-gradient-to-tl from-pink-200 to-pink-600 border-b-2 border-purple-800/50 dark:border-rose-700 dark:from-yellow-700/75 dark:via-rose-800/75 dark:to-violet-800/50 text-slate-100 dark:text-violet-100",
    body: ["bg-white/50", "dark:bg-slate-800/50"],
    formWrapper: "flex flex-col gap-4 bg-white dark:text-slate-100 dark:bg-slate-800 backdrop-filter backdrop-blur p-6 w-full",
    extraActionsWrapper: "flex justify-between items-center mt-4 space-x-4",
    rememberMe: "flex items-center",
    forgotPassword: "underline text-sm",
    formFooter: "flex items-center justify-between mt-4",
    processing: "opacity-25",
    errorsWrapper: "absolute w-full translate-y-1/2 mt-4 text-white",
    errorsListWrapper: "list-inside text-sm",
    selectorsWrapper: "fixed bottom-0 flex z-50 w-full justify-center sm:justify-end space-x-6 p-6",
    radius: "regular",
    loginButton: {
        dark: {
            design: "solid",
            color: "success"
        },
        light: {
            design: "light",
            color: "success"
        }
    },
    registerButton: {
        dark: {
            design: "link",
            color: "light"
        },
        light: {
            design: "link",
            color: "dark"
        }
    }
};
