import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";

export const paginateStyleMixin = {
    props: {
        color: {
            type: String,
            default: 'solid-blue'
        }
    },
    mixins: [radiusSizeMixin],
    data() {
        return {
            paginateColors: {
                'solid-red': 'bg-red-300 text-gray-100',
                'solid-blue': 'bg-blue-300 text-gray-100',
                'solid-green': 'bg-green-300 text-gray-100',
                'solid-yellow': 'bg-yellow-300 text-gray-100',
                'solid-indigo': 'bg-indigo-300 text-gray-100',
                'solid-pink': 'bg-pink-300 text-gray-100',
                'solid-purple': 'bg-purple-300 text-gray-100',
                'solid-gray': 'bg-gray-300 text-gray-100',
                'solid-black': 'bg-black text-gray-100',
                'solid-white': 'bg-white border border-gray-300 text-gray-700',
                'light-red': 'bg-red-50 border border-red-500 text-red-600',
                'light-blue': 'bg-blue-50 border border-blue-500 text-blue-600',
                'light-green': 'bg-green-50 border border-green-500 text-green-600',
                'light-yellow': 'bg-yellow-50 border border-yellow-500 text-yellow-600',
                'light-indigo': 'bg-indigo-50 border border-indigo-500 text-indigo-600',
                'light-pink': 'bg-pink-50 border border-pink-500 text-pink-600',
                'light-purple': 'bg-purple-50 border border-purple-500 text-purple-600',
                'light-gray': 'bg-gray-50 border border-gray-500 text-gray-600',
            },
            paginateActiveColors: {
                'solid-red': 'bg-red-500 text-gray-100',
                'solid-blue': 'bg-blue-500 text-gray-100',
                'solid-green': 'bg-green-500 text-gray-100',
                'solid-yellow': 'bg-yellow-500 text-gray-100',
                'solid-indigo': 'bg-indigo-500 text-gray-100',
                'solid-pink': 'bg-pink-500 text-gray-100',
                'solid-purple': 'bg-purple-500 text-gray-100',
                'solid-gray': 'bg-gray-500 text-gray-100',
                'solid-black': 'bg-gray-300 text-gray-100 border border-gray-700',
                'solid-white': 'bg-gray-500 text-gray-100 border border-gray-500',
                'light-red': 'bg-red-500 border border-red-500 text-gray-100',
                'light-blue': 'bg-blue-500 border border-blue-500 text-gray-100',
                'light-green': 'bg-green-500 border border-green-500 text-gray-100',
                'light-yellow': 'bg-yellow-500 border border-yellow-500 text-gray-100',
                'light-indigo': 'bg-indigo-500 border border-indigo-500 text-gray-100',
                'light-pink': 'bg-pink-500 border border-pink-500 text-gray-100',
                'light-purple': 'bg-purple-500 border border-purple-500 text-gray-100',
                'light-gray': 'bg-gray-500 border border-gray-500 text-gray-100',
            },
            arrowColors: {
                'solid-red': 'bg-red-500 text-red-300 hover:text-red-500',
                'solid-blue': 'bg-blue-500 text-blue-300 hover:text-blue-500',
                'solid-green': 'bg-green-500 text-green-300 hover:text-green-500',
                'solid-yellow': 'bg-yellow-500 text-yellow-300 hover:text-yellow-500',
                'solid-indigo': 'bg-indigo-500 text-indigo-300 hover:text-indigo-500',
                'solid-pink': 'bg-pink-500 text-pink-300 hover:text-pink-500',
                'solid-purple': 'bg-purple-500 text-purple-300 hover:text-purple-500',
                'solid-gray': 'bg-gray-500 text-gray-300 hover:text-gray-500',
                'solid-black': 'bg-gray-500 text-gray-300 hover:text-gray-500',
                'solid-white': 'bg-gray-500 text-gray-300 hover:text-gray-500',
                'light-red': 'bg-red-500 text-red-300 hover:text-red-500',
                'light-blue': 'bg-blue-500 text-blue-300 hover:text-blue-500',
                'light-green': 'bg-green-500 text-green-300 hover:text-green-500',
                'light-yellow': 'bg-yellow-500 text-yellow-300 hover:text-yellow-500',
                'light-indigo': 'bg-indigo-500 text-indigo-300 hover:text-indigo-500',
                'light-pink': 'bg-pink-500 text-pink-300 hover:text-pink-500',
                'light-purple': 'bg-purple-500 text-purple-300 hover:text-purple-500',
                'light-gray': 'bg-gray-500 text-gray-300 hover:text-gray-500',
            }
        }
    },
    computed: {
        calculatedPaginateStyle(){
            let style;
            style = this.radiusStyle + ' ' + this.paginateColors[this.color];

            return style
        },
        calculatedActivePaginateStyle(){
            let style;
            style = this.radiusStyle + ' ' + this.paginateActiveColors[this.color];

            return style
        },
        calculatedArrowStyle() {
            let style;
            style = this.radiusStyle + ' ' + this.arrowColors[this.color];

            return style
        }
    }


}