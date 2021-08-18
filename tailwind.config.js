const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: {
        content: [
            './vendor/laravel/jetstream/**/*.blade.php',
            './storage/framework/views/*.php',
            './resources/views/**/*.blade.php',
            './resources/js/**/*.vue',
            './resources/js/**/*.js'
        ],
    },

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
            textColor: ['hover', 'active'],
            backgroundColor: ['active'],
            fontWeight: ['hover', 'active', 'focus'],
            borderWidth: ['first', 'last', 'hover'],
            borderRadius: ['first', 'last'],
            padding: ['focus'],
            zIndex: ['hover'],
            brightness: ['hover', 'focus'],
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('tailwind-scrollbar')],
};
