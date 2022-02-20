import {bgColorStyles} from "@/Mixins/Styles/bgColorStyles";

export const tabStyleMixin = {
    props: {
        radius: {
            required: false,
            default: 0
        },
        color: {
            required: false,
            default: 'solid-white'
        },
        tabStyle: {
            required: false,
            default: 1
        },
    },
    mixins: [bgColorStyles],
    data() {
        return {
            tab1Colors: {
                'solid-red': 'bg-red-200 border-red-300 text-red-600 mt-1 -mb-1',
                'solid-blue': 'bg-blue-200 border-blue-300 text-blue-600 mt-1 -mb-1',
                'solid-green': 'bg-green-200 border-green-300 text-green-600 mt-1 -mb-1',
                'solid-yellow': 'bg-yellow-200 border-yellow-300 text-yellow-600 mt-1 -mb-1',
                'solid-indigo': 'bg-indigo-200 border-indigo-300 text-indigo-600 mt-1 -mb-1',
                'solid-pink': 'bg-pink-200 border-pink-300 text-pink-600 mt-1 -mb-1',
                'solid-purple': 'bg-purple-200 border-purple-300 text-purple-600 mt-1 -mb-1',
                'solid-gray': 'bg-gray-200 border-gray-300 text-gray-600 mt-1 -mb-1',
                'solid-black': 'bg-gray-400 mt-1 -mb-1',
                'solid-white': 'bg-white text-gray-600 mt-1 -mb-1',
                'light-red': 'bg-red-100 border-red-300 text-red-600 mt-1 -mb-1',
                'light-blue': 'bg-blue-100 border-blue-300 text-blue-600 mt-1 -mb-1',
                'light-green': 'bg-green-100 border-green-300 text-green-600 mt-1 -mb-1',
                'light-yellow': 'bg-yellow-100 border-yellow-300 text-yellow-600 mt-1 -mb-1',
                'light-indigo': 'bg-indigo-100 border-indigo-300 text-indigo-600 mt-1 -mb-1',
                'light-pink': 'bg-pink-100 border-pink-300 text-pink-600 mt-1 -mb-1',
                'light-purple': 'bg-purple-100 border-purple-300 text-purple-600 mt-1 -mb-1',
                'light-gray': 'bg-gray-50 border-gray-300 text-gray-600 mt-1 -mb-1',
            },
            tab2Colors: {
                'solid-red': 'bg-red-500 text-gray-100',
                'solid-blue': 'bg-blue-500 text-gray-100',
                'solid-green': 'bg-green-500 text-gray-100',
                'solid-yellow': 'bg-yellow-500 text-gray-100',
                'solid-indigo': 'bg-indigo-500 text-gray-100',
                'solid-pink': 'bg-pink-500 text-gray-100',
                'solid-purple': 'bg-purple-500 text-gray-100',
                'solid-gray': 'bg-gray-500 text-gray-100',
                'solid-black': 'bg-black ',
                'solid-white': 'bg-gray-200 text-gray-800',
                'light-red': 'bg-red-200 border border-red-500',
                'light-blue': 'bg-blue-200 border border-blue-500',
                'light-green': 'bg-green-200 border border-green-500',
                'light-yellow': 'bg-yellow-200 border border-yellow-500',
                'light-indigo': 'bg-indigo-200 border border-indigo-500',
                'light-pink': 'bg-pink-200 border border-pink-500',
                'light-purple': 'bg-purple-200 border border-purple-500',
                'light-gray': 'bg-gray-200 border border-gray-500',
            },
            tab1ActiveColors: {
                'solid-red': 'bg-red-500 text-gray-100',
                'solid-blue': 'bg-blue-500 text-gray-100',
                'solid-green': 'bg-green-500 text-gray-100',
                'solid-yellow': 'bg-yellow-500 text-gray-100',
                'solid-indigo': 'bg-indigo-500 text-gray-100',
                'solid-pink': 'bg-pink-500 text-gray-100',
                'solid-purple': 'bg-purple-500 text-gray-100',
                'solid-gray': 'bg-gray-500 text-gray-100',
                'solid-black': 'bg-black text-gray-100',
                'solid-white': 'bg-gray-300 text-gray-600',
                'light-red': 'bg-red-200 border border-b-0 border-red-500 text-red-600',
                'light-blue': 'bg-blue-200 border border-b-0 border-blue-500 text-blue-600',
                'light-green': 'bg-green-200 border border-b-0 border-green-500 text-green-600',
                'light-yellow': 'bg-yellow-200 border border-b-0 border-yellow-500 text-yellow-600',
                'light-indigo': 'bg-indigo-200 border border-b-0 border-indigo-500 text-indigo-600',
                'light-pink': 'bg-pink-200 border border-b-0 border-pink-500 text-pink-600',
                'light-purple': 'bg-purple-200 border border-b-0 border-purple-500 text-purple-600',
                'light-gray': 'bg-gray-200 border border-b-0 border-gray-500 text-gray-600',
            },
            tabContentColors: {
                'solid-red': 'bg-gray-100 border-red-500 text-gray-600',
                'solid-blue': 'bg-gray-100 border-blue-500 text-gray-600',
                'solid-green': 'bg-gray-100 border-green-500 text-gray-600',
                'solid-yellow': 'bg-gray-100 border-yellow-500 text-gray-600',
                'solid-indigo': 'bg-gray-100 border-indigo-500 text-gray-600',
                'solid-pink': 'bg-gray-100 border-pink-500 text-gray-600',
                'solid-purple': 'bg-gray-100 border-purple-500 text-gray-600',
                'solid-gray': 'bg-gray-100 border-gray-500 text-gray-600',
                'solid-black': 'bg-gray-100 border-black',
                'solid-white': 'bg-white border-gray-300 text-gray-600',
                'light-red': 'bg-gray-100 border border-red-500',
                'light-blue': 'bg-gray-100 border border-blue-500',
                'light-green': 'bg-gray-100 border border-green-500',
                'light-yellow': 'bg-gray-100 border border-yellow-500',
                'light-indigo': 'bg-gray-100 border border-indigo-500',
                'light-pink': 'bg-gray-100 border border-pink-500',
                'light-purple': 'bg-gray-100 border border-purple-500',
                'light-gray': 'bg-gray-100 border border-gray-500',
            },
            tab2ActiveColors: {
                'solid-red': 'bg-red-100 text-red-600',
                'solid-blue': 'bg-blue-100 text-blue-600',
                'solid-green': 'bg-green-100 text-green-600',
                'solid-yellow': 'bg-yellow-100 text-yellow-600',
                'solid-indigo': 'bg-indigo-100 text-indigo-600',
                'solid-pink': 'bg-pink-100 text-pink-600',
                'solid-purple': 'bg-purple-100 text-purple-600',
                'solid-gray': 'bg-gray-100 text-gray-600',
                'solid-black': 'bg-gray-500 text-gray-100',
                'solid-white': 'bg-gray-500 text-gray-100',
                'light-red': 'bg-red-500 text-gray-100 border border-red-500',
                'light-blue': 'bg-blue-500 text-gray-100 border border-blue-500',
                'light-green': 'bg-green-500 text-gray-100 border border-green-500',
                'light-yellow': 'bg-yellow-500 text-gray-100 border border-yellow-500',
                'light-indigo': 'bg-indigo-500 text-gray-100 border border-indigo-500',
                'light-pink': 'bg-pink-500 text-gray-100 border border-pink-500',
                'light-purple': 'bg-purple-500 text-gray-100 border border-purple-500',
                'light-gray': 'bg-gray-500 text-gray-100 border border-gray-500',
            },
            radiusStyles: {
                '0': {
                    content: null,
                    title2container: null,
                    title2: null,
                    title1left: null,
                    title1right: null
                },
                '1': {
                    content: 'rounded-r-sm rounded-bl-sm',
                    title2container: 'rounded-b-0 rounded-t-sm',
                    title2: 'rounded-sm',
                    title1left: 'rounded-tl-sm',
                    title1right: 'rounded-tr-sm'
                },
                '2': {
                    content: 'rounded-r rounded-bl',
                    title2container: 'rounded-b-0 rounded-t',
                    title2: 'rounded',
                    title1left: 'rounded-tl',
                    title1right: 'rounded-tr'
                },
                '3': {
                    content: 'rounded-r-md rounded-bl-md',
                    title2container: 'rounded-b-0 rounded-t-md',
                    title2: 'rounded-md',
                    title1left: 'rounded-tl-md',
                    title1right: 'rounded-tr-md'
                },
                '4': {
                    content: 'rounded-r-lg rounded-bl-lg',
                    title2container: 'rounded-b-0 rounded-t-lg',
                    title2: 'rounded-lg',
                    title1left: 'rounded-tl-lg',
                    title1right: 'rounded-tr-lg'
                },
                '5': {
                    content: 'rounded-r-xl rounded-bl-xl',
                    title2container: 'rounded-b-0 rounded-t-xl',
                    title2: 'rounded-xl',
                    title1left: 'rounded-tl-xl',
                    title1right: 'rounded-tr-xl'
                },
                '6': {
                    content: 'rounded-r-2xl rounded-bl-2xl',
                    title2container: 'rounded-b-0 rounded-t-2xl',
                    title2: 'rounded-2xl',
                    title1left: 'rounded-tl-2xl',
                    title1right: 'rounded-tr-2xl'
                },
                '7': {
                    content: 'rounded-r-3xl rounded-bl-3xl',
                    title2container: 'rounded-b-0 rounded-t-3xl',
                    title2: 'rounded-3xl',
                    title1left: 'rounded-tl-3xl',
                    title1right: 'rounded-tr-3xl'
                },
                '8': {
                    content: 'rounded-r-full rounded-bl-full',
                    title2container: 'rounded-b-0 rounded-t-full',
                    title2: 'rounded-full',
                    title1left: 'rounded-tl-full',
                    title1right: 'rounded-tr-full'
                }
            }
        }
    },
    computed: {
        calculatedTitleStyle() {
            let style;

            if(this.tabStyle === 1){
                style = this.tab1Colors[this.color]+ ' first:border-l last:border-r border-t';
            }else{
                style = this.tab2Colors[this.color] ;
            }

            return style
        },
        calculatedActiveTitleStyle() {
            let style;

            if(this.tabStyle === 1){
                style = this.tab1ActiveColors[this.color];
            }else{
                style = this.tab2ActiveColors[this.color];
            }

            return style
        },
        calculatedTitle2ContainerStyle() {
            let style = 'p-2 gap-2 border-b-0 ';
            style += this.radiusStyles[this.radius].title2container + ' '
            style += this.bgColorStyle + ' '
            style += this.textColorStyle

            return style
        },
        calculatedContentStyle() {
            let style = this.radiusStyles[this.radius].content + ' ';
            style += this.tabContentColors[this.color]

            return style
        },
    }
}