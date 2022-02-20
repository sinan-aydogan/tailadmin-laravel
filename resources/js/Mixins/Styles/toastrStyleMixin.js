import {bgColorStyles} from "@/Mixins/Styles/bgColorStyles";
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";

export const toastrStyleMixin = {
    props: {
        position: {
            type: String,
            default: 'rb'
        },
        border: {
            type: Boolean,
            default: false
        }
    },
    mixins: [bgColorStyles, radiusSizeMixin],
    data() {
        return {
            positionStyles: {
                'lb': "fixed left-4 bottom-4",
                'rb': "fixed right-6 bottom-4",
                'lt': "fixed left-4 top-4",
                'rt': "fixed right-6 top-4",
                '': 'relative w-full'
            },
            closeIconColors: {
                'solid-red': 'text-red-500 border-red-500',
                'solid-blue': 'text-blue-500 border-blue-500',
                'solid-green': 'text-green-500 border-green-500',
                'solid-yellow': 'text-yellow-500 border-yellow-500',
                'solid-indigo': 'text-indigo-500 border-indigo-500',
                'solid-pink': 'text-pink-500 border-pink-500',
                'solid-purple': 'text-purple-500 border-purple-500',
                'solid-gray': 'text-gray-500 border-gray-500',
                'solid-black': 'text-black-500 border-black-500',
                'solid-white': 'text-white-500 border-white-500',
                'light-red': 'text-red-500 border-red-500',
                'light-blue': 'text-blue-500 border-blue-500',
                'light-green': 'text-green-500 border-green-500',
                'light-yellow': 'text-yellow-500 border-yellow-500',
                'light-indigo': 'text-indigo-500 border-indigo-500',
                'light-pink': 'text-pink-500 border-pink-500',
                'light-purple': 'text-purple-500 border-purple-500',
                'light-gray': 'text-gray-500 border-gray-500'
            }
        }
    },
    computed: {
        calculatedToastrStyle() {
            let style;
            /*Style Migrating*/
            style = this.bgColorStyle +
                ' ' + this.radiusStyle +
                ' ' + this.textColorStyle +
                ' ' + this.positionStyles[this.position]
            if(this.border){
                style += ' border'
            }
            return style
        }
    }
}