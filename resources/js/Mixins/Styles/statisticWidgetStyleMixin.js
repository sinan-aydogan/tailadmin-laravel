export const statisticWidgetStyleMixin = {
    props: {
        color: {
            required: false
        },
        gradientDirection: {
            type: String,
            default: 'r'
        },
        diffDirection: {
            required: false
        }
    },
    data() {
        return {
            iconColors: {
                'solid-red': 'bg-red-500 text-red-500 border-red-500',
                'solid-blue': 'bg-blue-500 text-blue-500 border-blue-500',
                'solid-green': 'bg-green-500 text-green-500 border-green-500',
                'solid-yellow': 'bg-yellow-500 text-yellow-500 border-yellow-500',
                'solid-indigo': 'bg-indigo-500 text-indigo-500 border-indigo-500',
                'solid-pink': 'bg-pink-500 text-pink-500 border-pink-500',
                'solid-purple': 'bg-purple-500 text-purple-500 border-purple-500',
                'solid-gray': 'bg-gray-500 text-gray-500 border-gray-500',
                'solid-black': 'bg-black-500 text-black-500 border-black-500',
                'solid-white': 'bg-white-500 text-white-500 border-white-500',
                'light-red': 'bg-red-500 text-red-500 border-red-500',
                'light-blue': 'bg-blue-500 text-blue-500 border-blue-500',
                'light-green': 'bg-green-500 text-green-500 border-green-500',
                'light-yellow': 'bg-yellow-500 text-yellow-500 border-yellow-500',
                'light-indigo': 'bg-indigo-500 text-indigo-500 border-indigo-500',
                'light-pink': 'bg-pink-500 text-pink-500 border-pink-500',
                'light-purple': 'bg-purple-500 text-purple-500 border-purple-500',
                'light-gray': 'bg-gray-500 text-gray-500 border-gray-500'
            },
            diffStyles: {
                'up': 'text-white bg-green-500 px-3 py-1 rounded-md bg-opacity-70',
                'up-green': 'text-green-700 border bg-green-100 px-3 py-1 rounded-md bg-opacity-70',
                'down': 'text-white bg-red-500 px-3 py-1 rounded-md bg-opacity-70',
                'down-red': 'text-red-700 border bg-red-100 px-3 py-1 rounded-md bg-opacity-70',
                'default': 'text-gray-600 bg-white px-3 py-1 rounded-md bg-opacity-70 font-semibold'
            }
        }
    },
    computed: {
        calculatedIconStyle() {
            let style;
            if (this.color.includes('gradient')) {
                style = 'border-white '+ this.textColorStyle
            } else {
                style = this.iconColors[this.color]
            }

            return style;
        },
        calculatedDiffStyle() {
            let style;
            if (this.diffDirection === ('up') || this.diffDirection === ('positive-down')) {
                if (this.color === 'solid-green') {
                    style = this.diffStyles['up-green']
                } else {
                    style = this.diffStyles['up']
                }
            } else if (this.diffDirection === ('down') || this.diffDirection === ('negative-up')) {
                if (this.color === 'solid-red') {
                    style = this.diffStyles['down-red']
                } else {
                    style = this.diffStyles['down']
                }
            }

            return style;
        }
    }
}