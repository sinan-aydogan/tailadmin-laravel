export default {
    container: "flex flex-col border items-center justify-center shadow border-none",
    bgColor: ["bg-blue-500", "dark:bg-blue-800"],
    bgImage: {
        dark: "https://unsplash.com/photos/JgOeRuGD_Y4/download?force=true&w=1920",
        light: "https://unsplash.com/photos/CSpjU6hYo_0/download?force=true&w=1920"
    },
    logo: {
        dark: null,
        light: "/img/brown-logo.svg"
    },
    header: ["bg-sky-100/75", "dark:bg-red-800/20", "text-yellow-800", "dark:text-violet-100"],
    body: ["bg-slate-100/75", "dark:bg-slate-800/50"],
    radius: "regular",
    loginButton: {
        dark: {
            design: "filled",
            color: "red"
        },
        light: {
            design: "filled",
            color: "yellow"
        }
    },
    registerButton: {
        dark: {
            design: "link",
            color: "light"
        },
        light: {
            design: "link",
            color: "yellow"
        }
    }
};
