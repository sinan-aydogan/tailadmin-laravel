const authDesigns = [
    {
        id: 'violetDream',
        bgColor: ['bg-pink-200', 'dark:bg-violet-800'],
        bgImage: {
            dark: 'https://unsplash.com/photos/e3OSaoc7EuE/download?force=true&w=1920',
            light: 'https://unsplash.com/photos/NjT4O7WYmwk/download?force=true&w=1920'
        },
        header: ['bg-pink-500/50', 'dark:bg-violet-800/75', 'text-white', 'dark:text-violet-100'],
        body: ['bg-white/50','dark:bg-slate-800/50'],
        radius: 3,
        loginButton: {
            dark: {
                design: 'filled',
                color: 'purple'
            },
            light: {
                design: 'light',
                color: 'pink'
            }
        },
        registerButton: {
            dark: {
                design: 'link',
                color: 'light'
            },
            light: {
                design: 'link',
                color: 'pink'
            }
        },
    },
    {
        id: 'mountains',
        bgColor: ['bg-blue-500', 'dark:bg-blue-800'],
        bgImage: {
            dark: 'https://unsplash.com/photos/JgOeRuGD_Y4/download?force=true&w=1920',
            light: 'https://unsplash.com/photos/CSpjU6hYo_0/download?force=true&w=1920'
        },
        header: ['bg-sky-100/75', 'dark:bg-red-800/20', 'text-yellow-800', 'dark:text-violet-100'],
        body: ['bg-slate-100/75','dark:bg-slate-800/50'],
        radius: 3,
        loginButton: {
            dark: {
                design: 'filled',
                color: 'red'
            },
            light: {
                design: 'filled',
                color: 'yellow'
            }
        },
        registerButton: {
            dark: {
                design: 'link',
                color: 'light'
            },
            light: {
                design: 'link',
                color: 'yellow'
            }
        },
    }
]

export {authDesigns}
