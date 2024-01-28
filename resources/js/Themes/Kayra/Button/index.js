export default {
    buttonWrapper: "flex justify-center items-center whitespace-nowrap font-semibold flex-shrink-0 px-2 py-1.5 min-h-[2.5rem] select-none transition duration-100 ease-in-out focus:ring-2 focus:ring-opacity-50 focus:outline-none",
    content: "flex justify-center items-center whitespace-nowrap flex-shrink-0 gap-1 space-x-1 mx-1.5",
    disabled: "filter opacity-50 cursor-not-allowed pointer-events-none",
    stacked: "flex flex-col space-y-0.5",
    icon: "w-5 h-5 items-center justify-center",
    designs: {
        solid: {
            defaults: {
                wrapper: "",
                content: "",
                border: "border",
                icon: ""
            },
            primary: {
                wrapper: "bg-sky-500 hover:bg-sky-600 active:bg-sky-400 focus:ring-sky-400",
                content: "text-white",
                border: "border-sky-500",
                icon: "text-white"
            },
            secondary: {
                wrapper: "bg-slate-500 hover:bg-slate-600 active:bg-slate-400 focus:ring-slate-400",
                content: "text-white",
                border: "border-slate-500",
                icon: "text-white"
            },
            success: {
                wrapper: "bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-400 focus:ring-emerald-400",
                content: "text-white",
                border: "border-emerald-500",
                icon: "text-white"
            },
            danger: {
                wrapper: "bg-rose-500 hover:bg-rose-600 active:bg-rose-400 focus:ring-rose-400",
                content: "text-white",
                border: "border-rose-500",
                icon: "text-white"
            },
            warning: {
                wrapper: "bg-amber-500 hover:bg-amber-600 active:bg-amber-400 focus:ring-amber-400",
                content: "text-slate-700",
                border: "border-amber-500",
                icon: "text-slate-700"
            },
            info: {
                wrapper: "bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-400 focus:ring-cyan-400",
                content: "text-white",
                border: "border-cyan-500",
                icon: "text-white"
            },
            light: {
                wrapper: "bg-slate-100 hover:bg-slate-200 active:bg-slate-50 focus:ring-slate-50",
                content: "text-slate-700",
                border: "border-slate-100",
                icon: "text-slate-700",
                loading: "bg-slate-700 w-1.5 h-4"
            },
            dark: {
                wrapper: "bg-slate-800 hover:bg-slate-900 active:bg-slate-700 focus:ring-slate-700",
                content: "text-white",
                border: "border-slate-800",
                icon: "text-white"
            }
        },
        light: {
            defaults: {
                wrapper: "group",
                content: "",
                border: "border",
                icon: ""
            },
            primary: {
                wrapper: "bg-sky-200 hover:bg-sky-600 active:bg-sky-400 focus:ring-sky-100",
                content: "text-sky-700 group-hover:text-white",
                border: "border-sky-500",
                icon: "text-sky-700 group-hover:text-white",
                loading: "bg-sky-700 w-1.5 h-4"
            },
            secondary: {
                wrapper: "bg-slate-200 hover:bg-slate-600 active:bg-slate-400 focus:ring-slate-100",
                content: "text-slate-700 group-hover:text-white",
                border: "border-slate-500",
                icon: "text-slate-700 group-hover:text-white",
                loading: "bg-slate-700 w-1.5 h-4"
            },
            success: {
                wrapper: "bg-emerald-200 hover:bg-emerald-600 active:bg-emerald-400 focus:ring-emerald-100",
                content: "text-emerald-700 group-hover:text-white",
                border: "border-emerald-500",
                icon: "text-emerald-700 group-hover:text-white",
                loading: "bg-emerald-700 w-1.5 h-4"
            },
            danger: {
                wrapper: "bg-rose-200 hover:bg-rose-600 active:bg-rose-400 focus:ring-rose-100",
                content: "text-rose-700 group-hover:text-white",
                border: "border-rose-500",
                icon: "text-rose-700 group-hover:text-white",
                loading: "bg-rose-700 w-1.5 h-4"
            },
            warning: {
                wrapper: "bg-amber-200 hover:bg-amber-600 active:bg-amber-400 focus:ring-amber-100",
                content: "text-amber-700 group-hover:text-white",
                border: "border-amber-500",
                icon: "text-amber-700 group-hover:text-white",
                loading: "bg-amber-700 w-1.5 h-4"
            },
            info: {
                wrapper: "bg-cyan-200 hover:bg-cyan-600 active:bg-cyan-400 focus:ring-cyan-100",
                content: "text-cyan-700 group-hover:text-white",
                border: "border-cyan-500",
                icon: "text-cyan-700 group-hover:text-white",
                loading: "bg-cyan-700 w-1.5 h-4"
            },
            light: {
                wrapper: "bg-slate-100 hover:bg-slate-400 active:bg-slate-50 focus:ring-slate-50",
                content: "text-black group-hover:text-white",
                border: "border-slate-500",
                icon: "text-slate-700 group-hover:text-white",
                loading: "bg-slate-700 w-1.5 h-4"
            },
            dark: {
                wrapper: "bg-slate-400 hover:bg-slate-900 active:bg-slate-700 focus:ring-slate-700",
                content: "text-white",
                border: "border-slate-500",
                icon: "text-white"
            }
        },
        ghost: {
            defaults: {
                wrapper: "group",
                content: "",
                border: "border",
                icon: ""
            },
            primary: {
                wrapper: "hover:bg-sky-200 active:bg-sky-100 focus:ring-sky-100",
                content: "text-sky-700",
                border: "border-sky-700",
                icon: "text-sky-700",
                loading: "bg-sky-700 w-1.5 h-4"
            },
            secondary: {
                wrapper: "hover:bg-slate-200 active:bg-slate-100 focus:ring-slate-100",
                content: "text-slate-700",
                border: "border-slate-700",
                icon: "text-slate-700",
                loading: "bg-slate-700 w-1.5 h-4"
            },
            success: {
                wrapper: "hover:bg-emerald-200 active:bg-emerald-100 focus:ring-emerald-100",
                content: "text-emerald-700",
                border: "border-emerald-700",
                icon: "text-emerald-700",
                loading: "bg-emerald-700 w-1.5 h-4"
            },
            danger: {
                wrapper: "hover:bg-rose-200 active:bg-rose-100 focus:ring-rose-100",
                content: "text-rose-700",
                border: "border-rose-700",
                icon: "text-rose-700",
                loading: "bg-rose-700 w-1.5 h-4"
            },
            warning: {
                wrapper: "hover:bg-amber-200 active:bg-amber-100 focus:ring-amber-100",
                content: "text-amber-700",
                border: "border-amber-700",
                icon: "text-amber-700",
                loading: "bg-amber-700 w-1.5 h-4"
            },
            info: {
                wrapper: "hover:bg-cyan-200 active:bg-cyan-100 focus:ring-cyan-100",
                content: "text-cyan-700",
                border: "border-cyan-700",
                icon: "text-cyan-700",
                loading: "bg-cyan-700 w-1.5 h-4"
            },
            light: {
                wrapper: "hover:bg-slate-200 active:bg-slate-100 focus:ring-slate-100",
                content: "text-slate-700",
                border: "border-slate-700",
                icon: "text-slate-700",
                loading: "bg-slate-700 w-1.5 h-4"
            },
            dark: {
                wrapper: "hover:bg-slate-900 active:bg-slate-700 focus:ring-slate-100",
                content: "text-slate-700 group-hover:text-white",
                border: "border-slate-700",
                icon: "text-slate-700 group-hover:text-white",
                loading: "bg-slate-800 group-hover:bg-slate-200 w-1.5 h-4"
            }
        },
        link: {
            defaults: {
                wrapper: "group",
                content: "",
                border: "border",
                icon: ""
            },
            primary: {
                wrapper: "hover:bg-sky-200 active:bg-sky-100 focus:ring-sky-100",
                content: "text-sky-700",
                border: "border-transparent",
                icon: "text-sky-700",
                loading: "bg-sky-700 w-1.5 h-4"
            },
            secondary: {
                wrapper: "hover:bg-slate-200 active:bg-slate-100 focus:ring-slate-100",
                content: "text-slate-700",
                border: "border-transparent",
                icon: "text-slate-700",
                loading: "bg-slate-700 w-1.5 h-4"
            },
            success: {
                wrapper: "hover:bg-emerald-200 active:bg-emerald-100 focus:ring-emerald-100",
                content: "text-emerald-700",
                border: "border-transparent",
                icon: "text-emerald-700",
                loading: "bg-emerald-700 w-1.5 h-4"
            },
            danger: {
                wrapper: "hover:bg-rose-200 active:bg-rose-100 focus:ring-rose-100",
                content: "text-rose-700",
                border: "border-transparent",
                icon: "text-rose-700",
                loading: "bg-rose-700 w-1.5 h-4"
            },
            warning: {
                wrapper: "hover:bg-amber-200 active:bg-amber-100 focus:ring-amber-100",
                content: "text-amber-700",
                border: "border-transparent",
                icon: "text-amber-700",
                loading: "bg-amber-700 w-1.5 h-4"
            },
            info: {
                wrapper: "hover:bg-cyan-200 active:bg-cyan-100 focus:ring-cyan-100",
                content: "text-cyan-700",
                border: "border-transparent",
                icon: "text-cyan-700",
                loading: "bg-cyan-700 w-1.5 h-4"
            },
            light: {
                wrapper: "hover:bg-slate-200 active:bg-slate-100 focus:ring-slate-100",
                content: "text-slate-700",
                border: "border-transparent",
                icon: "text-slate-700",
                loading: "bg-slate-500 w-1.5 h-4"
            },
            dark: {
                wrapper: "hover:bg-slate-900 active:bg-slate-700 focus:ring-slate-100",
                content: "text-slate-700 group-hover:text-white",
                border: "border-transparent",
                icon: "text-slate-800 group-hover:text-white",
                loading: "bg-slate-800 group-hover:bg-slate-200 w-1.5 h-4"
            }
        }
    }
};

