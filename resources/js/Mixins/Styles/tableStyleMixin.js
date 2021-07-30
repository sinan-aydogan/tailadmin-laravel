import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";

export const tableStyleMixin = {
    props: {
        color: {
            type: String,
            default: 'solid-white'
        },
    },
    mixins: [radiusSizeMixin],
    data() {
        return {
            headerColors: {
                'solid-red': 'bg-red-500 text-gray-100',
                'solid-blue': 'bg-blue-500 text-gray-100',
                'solid-green': 'bg-green-500 text-gray-100',
                'solid-yellow': 'bg-yellow-500 text-gray-100',
                'solid-indigo': 'bg-indigo-500 text-gray-100',
                'solid-pink': 'bg-pink-500 text-gray-100',
                'solid-purple': 'bg-purple-500 text-gray-100',
                'solid-gray': 'bg-gray-500 text-gray-100',
                'solid-black': 'bg-black text-gray-100',
                'solid-white': 'bg-white text-gray-600',
                'light-red': 'bg-red-200 text-red-600',
                'light-blue': 'bg-blue-200 text-blue-600',
                'light-green': 'bg-green-200 text-green-600',
                'light-yellow': 'bg-yellow-200 text-yellow-600',
                'light-indigo': 'bg-indigo-200 text-indigo-600',
                'light-pink': 'bg-pink-200 text-pink-600',
                'light-purple': 'bg-purple-200 text-purple-600',
                'light-gray': 'bg-gray-200 text-gray-600'
            },
            contentColors: {
                'solid-red': 'bg-red-500 hover:bg-red-200 border-red-300',
                'solid-blue': 'bg-blue-500 hover:bg-blue-200 border-blue-300',
                'solid-green': 'bg-green-500 hover:bg-green-200 border-green-300',
                'solid-yellow': 'bg-yellow-500 hover:bg-yellow-200 border-yellow-300',
                'solid-indigo': 'bg-indigo-500 hover:bg-indigo-200 border-indigo-300',
                'solid-pink': 'bg-pink-500 hover:bg-pink-200 border-pink-300',
                'solid-purple': 'bg-purple-500 hover:bg-purple-200 border-purple-300',
                'solid-gray': 'bg-gray-500 hover:bg-gray-200 border-gray-300',
                'solid-black': 'bg-black hover:bg-gray-900 hover:text-white',
                'solid-white': 'bg-gray-400 border-gray-200 hover:bg-gray-200',
                'light-red': 'bg-red-200 hover:bg-red-300 border-red-300 text-red-600',
                'light-blue': 'bg-blue-200 hover:bg-blue-300 border-blue-300 text-blue-600',
                'light-green': 'bg-green-200 hover:bg-green-300 border-green-300 text-green-600',
                'light-yellow': 'bg-yellow-200 hover:bg-yellow-300 border-yellow-300 text-yellow-600',
                'light-indigo': 'bg-indigo-200 hover:bg-indigo-300 border-indigo-300 text-indigo-600',
                'light-pink': 'bg-pink-200 hover:bg-pink-300 border-pink-300 text-pink-600',
                'light-purple': 'bg-purple-200 hover:bg-purple-300 border-purple-300 text-purple-600',
                'light-gray': 'bg-gray-200 hover:bg-gray-300 border-gray-300 text-gray-600'
            },
            scrollColors: {
                'solid-red': 'scrollbar-thumb-red-500 scrollbar-track-red-300',
                'solid-blue': 'scrollbar-thumb-blue-500 scrollbar-track-blue-300',
                'solid-green': 'scrollbar-thumb-green-500 scrollbar-track-green-300',
                'solid-yellow': 'scrollbar-thumb-yellow-500 scrollbar-track-yellow-300',
                'solid-indigo': 'scrollbar-thumb-indigo-500 scrollbar-track-indigo-300',
                'solid-pink': 'scrollbar-thumb-pink-500 scrollbar-track-pink-300',
                'solid-purple': 'scrollbar-thumb-purple-500 scrollbar-track-purple-300',
                'solid-gray': 'scrollbar-thumb-gray-500 scrollbar-track-gray-300',
                'solid-black' :'scrollbar-thumb-gray-700 scrollbar-track-gray-300',
                'solid-white': 'scrollbar-thumb-gray-500 scrollbar-track-gray-300',
                'light-red': 'scrollbar-thumb-red-500 scrollbar-track-red-300',
                'light-blue': 'scrollbar-thumb-blue-500 scrollbar-track-blue-300',
                'light-green': 'scrollbar-thumb-green-500 scrollbar-track-green-300',
                'light-yellow': 'scrollbar-thumb-yellow-500 scrollbar-track-yellow-300',
                'light-indigo': 'scrollbar-thumb-indigo-500 scrollbar-track-indigo-300',
                'light-pink': 'scrollbar-thumb-pink-500 scrollbar-track-pink-300',
                'light-purple': 'scrollbar-thumb-purple-500 scrollbar-track-purple-300',
                'light-gray': 'scrollbar-thumb-gray-500 scrollbar-track-gray-300'
            },
            tableBorderColors: {
                'solid-red': 'border border-transparent',
                'solid-blue': 'border border-transparent',
                'solid-green': 'border border-transparent',
                'solid-yellow': 'border border-transparent',
                'solid-indigo': 'border border-transparent',
                'solid-pink': 'border border-transparent',
                'solid-purple': 'border border-transparent',
                'solid-gray': 'border border-transparent',
                'solid-black': 'border border-transparent',
                'solid-white': 'border border-transparent',
                'light-red': 'border border-red-500',
                'light-blue': 'border border-blue-500',
                'light-green': 'border border-green-500',
                'light-yellow': 'border border-yellow-500',
                'light-indigo': 'border border-indigo-500',
                'light-pink': 'border border-pink-500',
                'light-purple': 'border border-purple-500',
                'light-gray': 'border border-gray-500'
            }
        }
    },
    computed: {
        calculatedTableStyle() {
            let style
            /*Radius*/
            if(this.radius){
                style = this.radiusStyle + ' ';
            }else{
                style = ''
            }
            /*Shadow*/
            if(this.shadow){
                style += ' shadow-md '
            }
            /*Light Border*/
            if(this.color.includes('light')){
                style += this.tableBorderColors[this.color] + ' ';
            }
            /*Scroll*/
            style += this.scrollColors[this.color]

            return style
        }
    }
}