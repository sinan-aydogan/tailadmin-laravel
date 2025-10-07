export const bgColorStyles = {
    props:{
        color: {
            type: String,
            default: 'solid-white'
        },
        gradientDirection: {
            type: String,
            default: 'r'
        }
    },
    data(){
        return {
            solidColors: {
                'solid-red': 'bg-red-500 border-red-500',
                'solid-blue': 'bg-blue-500 border-blue-500',
                'solid-green': 'bg-green-500 border-green-500',
                'solid-yellow': 'bg-yellow-500 border-yellow-500',
                'solid-indigo': 'bg-indigo-500 border-indigo-500',
                'solid-pink': 'bg-pink-500 border-pink-500',
                'solid-purple': 'bg-purple-500 border-purple-500',
                'solid-gray': 'bg-gray-500 border-gray-500',
                'solid-black': 'bg-black border-black',
                'solid-white': 'bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600',
            },
            lightColors: {
                'light-red': 'bg-red-200 border border-red-500',
                'light-blue': 'bg-blue-200 border border-blue-500',
                'light-green': 'bg-green-200 border border-green-500',
                'light-yellow': 'bg-yellow-200 border border-yellow-500',
                'light-indigo': 'bg-indigo-200 border border-indigo-500',
                'light-pink': 'bg-pink-200 border border-pink-500',
                'light-purple': 'bg-purple-200 border border-purple-500',
                'light-gray': 'bg-gray-200 border border-gray-500',
            },
            gradientDirections : {
                t : 'bg-gradient-to-t',
                b : 'bg-gradient-to-b',
                l : 'bg-gradient-to-l',
                r : 'bg-gradient-to-r',
                tl : 'bg-gradient-to-tl',
                bl : 'bg-gradient-to-bl',
                tr : 'bg-gradient-to-tr',
                br : 'bg-gradient-to-br',
            },
            gradientFirstColors: {
                red: 'from-red-500',
                blue: 'from-blue-500',
                green: 'from-green-500',
                yellow: 'from-yellow-500',
                indigo: 'from-indigo-500',
                pink: 'from-pink-500',
                purple: 'from-purple-500 to-pink-700 text-gray-100',
                gray: 'from-gray-500',
                black: 'from-black',
                white: 'from-white'
            },
            gradientSecondColors: {
                red: 'to-red-700 text-gray-100',
                blue: 'to-blue-700 text-gray-100',
                green: 'to-green-700 text-gray-100',
                yellow: 'to-yellow-700 text-gray-100',
                indigo: 'to-indigo-700 text-gray-100',
                pink: 'to-pink-700 text-gray-100',
                purple: 'to-purple-700 text-gray-100',
                gray: 'to-gray-700 text-gray-100',
                black: 'to-black text-gray-100',
                white: 'to-white text-gray-700'
            },
            solidTextColors: {
                'solid-red': 'text-gray-100',
                'solid-blue': 'text-gray-100',
                'solid-green': 'text-gray-100',
                'solid-yellow': 'text-gray-100',
                'solid-indigo': 'text-gray-100',
                'solid-pink': 'text-gray-100',
                'solid-purple': 'text-gray-100',
                'solid-gray': 'text-gray-100',
                'solid-black': 'text-gray-300',
                'solid-white': 'text-gray-700 dark:text-gray-300'
            },
            lightTextColors: {
                'light-red': 'text-red-700',
                'light-blue': 'text-blue-700',
                'light-green': 'text-green-700',
                'light-yellow': 'text-yellow-700',
                'light-indigo': 'text-indigo-700',
                'light-pink': 'text-pink-700',
                'light-purple': 'text-purple-700',
                'light-gray': 'text-gray-700',
                'light-black': 'text-gray-700',
                'light-white': 'text-gray-700'
            },
            solidHoverColors: {
                'solid-red': 'hover:bg-red-100 hover:text-red-700',
                'solid-blue': 'hover:bg-blue-100 hover:text-blue-700',
                'solid-green': 'hover:bg-green-100 hover:text-green-700',
                'solid-yellow': 'hover:bg-yellow-100 hover:text-yellow-700',
                'solid-indigo': 'hover:bg-indigo-100 hover:text-indigo-700',
                'solid-pink': 'hover:bg-pink-100 hover:text-pink-700',
                'solid-purple': 'hover:bg-purple-100 hover:text-purple-700',
                'solid-gray': 'hover:bg-gray-100 hover:text-gray-700',
                'solid-black': 'hover:bg-gray-500',
                'solid-white': 'hover:bg-gray-100 border border-gray-300'
            },
            lightHoverColors: {
                'light-red': 'hover:bg-red-50 hover:text-red-700',
                'light-blue': 'hover:bg-blue-50 hover:text-blue-700',
                'light-green': 'hover:bg-green-50 hover:text-green-700',
                'light-yellow': 'hover:bg-yellow-50 hover:text-yellow-700',
                'light-indigo': 'hover:bg-indigo-50 hover:text-indigo-700',
                'light-pink': 'hover:bg-pink-50 hover:text-pink-700',
                'light-purple': 'hover:bg-purple-50 hover:text-purple-700',
                'light-gray': 'hover:bg-gray-50 hover:text-gray-700',
                'light-black': 'hover:bg-gray-500',
                'light-white': 'hover:bg-gray-100 border border-gray-300'
            },
        }
    },
    computed: {
        bgColorStyle(){
            if(this.color.includes('solid')){
                /*Solid Colors*/
                return this.solidColors[this.color]
            }else if(this.color.includes('light')){
                /*Light Colors*/
                return this.lightColors[this.color]
            }else if(this.color.includes('gradient')){
                /*Gradient Colors*/
                return this.gradientDirections[this.gradientDirection]+' '+
                    this.gradientFirstColors[this.color.split('-')[1]]+' '+
                    this.gradientSecondColors[this.color.split('-')[3]]
            }
        },
        bgHoverColorStyle(){
            if(this.color.includes('solid')){
                /*Solid Colors*/
                return this.solidHoverColors[this.color]
            }else if(this.color.includes('light')){
                /*Light Colors*/
                return this.lightHoverColors[this.color]
            }else if(this.color.includes('gradient')){
                /*Gradient Colors*/
                return 'filter hover:brightness-125'
            }
        },
        textColorStyle(){
            if(this.color.includes('solid')){
                /*Solid Colors*/
                return this.solidTextColors[this.color]
            }else if(this.color.includes('light')){
                /*Light Colors*/
                return this.lightTextColors[this.color]
            }else if(this.color.includes('gradient')){
                return this.solidTextColors['solid-'+this.color.split('-')[1]]
            }
        }
    }
}
