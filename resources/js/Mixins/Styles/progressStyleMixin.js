import {bgColorStyles} from "@/Mixins/Styles/bgColorStyles";

export const progressStyleMixin = {
    props:{
        color: {
            type: String,
            default: 'solid-green'
        },
        height: {
            type: Number,
            default: 3
        },
    },
    mixins: [bgColorStyles],
    data() {
        return {
            progressColors: {
                'solid-red': 'bg-red-500',
                'solid-blue': 'bg-blue-500',
                'solid-green': 'bg-green-500',
                'solid-yellow': 'bg-yellow-500',
                'solid-indigo': 'bg-indigo-500',
                'solid-pink': 'bg-pink-500',
                'solid-purple': 'bg-purple-500',
                'solid-gray': 'bg-gray-500',
                'solid-black': 'bg-black',
                'solid-white': 'bg-white border border-gray-300'
            },
            heightStyles: {
                '1':'h-1',
                '2':'h-2',
                '3':'h-3',
                '4':'h-4',
                '5':'h-5',
            }
        }
    },
    computed: {
        calculatedProgressStyle() {
            let style;

            if(this.color.includes('gradient')){
                /*Gradient Colors*/
                style = this.gradientDirections[this.gradientDirection]+' '+
                    this.gradientFirstColors[this.color.split('-')[1]]+' '+
                    this.gradientSecondColors[this.color.split('-')[3]]
            }else{
                style = this.progressColors[this.color];
            }

            style += ' ' + this.heightStyles[this.height]

            return style
        }
    }
}