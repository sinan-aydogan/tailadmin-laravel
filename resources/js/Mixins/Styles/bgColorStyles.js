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
                'solid-red': 'bg-red-500 text-gray-100',
                'solid-blue': 'bg-blue-500 text-gray-100',
                'solid-green': 'bg-green-500 text-gray-100',
                'solid-yellow': 'bg-yellow-500 text-gray-100',
                'solid-indigo': 'bg-indigo-500 text-gray-100',
                'solid-pink': 'bg-pink-500 text-gray-100',
                'solid-purple': 'bg-purple-500 text-gray-100',
                'solid-gray': 'bg-gray-500 text-gray-100',
                'solid-black': 'bg-black text-gray-300',
                'solid-white': 'bg-white border border-gray-300'
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
                purple: 'from-purple-500',
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
                'solid-black': 'text-gray-100',
                'solid-white': 'text-gray-700'
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
            }
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
        textColorStyle(){
            if(this.color.includes('solid')){
                /*Solid Colors*/
                return this.solidTextColors[this.color]
            }else if(this.color.includes('light')){
                /*Light Colors*/
                return this.lightTextColors[this.color]
            }else if(this.color.includes('gradient')){
                return this.solidTextColors[this.color]
            }
        }
    }
}