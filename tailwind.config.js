const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    darkMode: 'class',

    purge: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                '2xs': '.65rem',
            },
            minWidth: {
                '0': '0',
                '3': '0.75rem',
                '6': '1.5rem',
                '12': '3.0rem',
                '18': '4.5rem',
                '20': '10rem',
                '22': '15rem',
                '24': '20rem',
                '26': '25rem',
                '28': '30rem',
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
                'full': '100%',
                'screen': '100vw',
                'min': 'min-content',
                'max': 'max-content'
            },
            minHeight: {
                '0': '0px',
                '10': '2.5rem',
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
                'full': '100%',
                'screen': '100vh',
                'min': 'min-content',
                'max': 'max-content'
            },
            maxHeight: {
                '0': '0',
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
                'full': '100%',
                'screen': '100vh',
                'min': 'min-content',
                'max': 'max-content',
            },
            boxShadow: {
                'dark': '0 0 1px 1px rgba(255, 255, 255, 0.1)'
            }
        },
        screens: {
            'phone': '425',
            'tablet': {'min': '426px'},
            'laptop': {'min': '769px'},
            'desktop': {'min': '1025px'},
        },
    },

    variants: {
        extend: {
            opacity: ['disabled'],
            scale: ['active'],
            textColor: ['hover', 'active'],
            backgroundColor: ['active','odd','even'],
            fontWeight: ['hover', 'active', 'focus'],
            borderWidth: ['first', 'last', 'hover'],
            borderRadius: ['first', 'last'],
            boxShadow: ['dark'],
            padding: ['focus', 'hover'],
            zIndex: ['hover'],
            brightness: ['hover', 'focus']
        },
        scrollbar: ['dark']
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('tailwind-scrollbar')],
};
