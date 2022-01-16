const authDesigns = [
    {
        id: 'violetDream',
        bgColor: ['bg-violet-500', 'dark:bg-violet-800'],
        bgImage: {
            dark: 'https://unsplash.com/photos/e3OSaoc7EuE/download?force=true&w=1920',
            light: 'https://unsplash.com/photos/cGzEvoZGnyY/download?force=true&w=1920'
        },
        header: ['bg-violet-200', 'dark:bg-violet-800', 'text-violet-700', 'dark:text-violet-100'],
        radius: 3,
        loginButton: {
            dark: {
                design: 'filled',
                color: 'purple'
            },
            light: {
                design: 'light',
                color: 'purple'
            }
        },
        registerButton: {
            dark: {
                design: 'link',
                color: 'light'
            },
            light: {
                design: 'link',
                color: 'purple'
            }
        },
    }
]

export {authDesigns}
