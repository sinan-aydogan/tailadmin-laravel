const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
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
            }
        },
        minWidth: {
            '0': '0',
            '3': '0.75rem',
            '6': '1.5rem',
            '12': '3.0rem',
            '18': '4.5rem',
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            'full': '100%',
        }
    },

    variants: {
        extend: {
            opacity: ['disabled'],
            textColor: ['hover'],
            fontWeight: ['hover', 'active' ,'focus'],
            borderWidth: ['first','last','hover'],
            borderRadius: ['first','last']
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'),require('tailwind-scrollbar')],
};
