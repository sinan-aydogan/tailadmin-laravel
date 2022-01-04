import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";
import {bgColorStyles} from "@/Mixins/Styles/bgColorStyles";
export const contentCardStyleMixin = {
    props: {
        width: {
            type: Number,
            default: 1
        },
        adaptiveHeight: {
            type: Boolean,
            default: false
        }
    },
    mixins: [radiusSizeMixin,bgColorStyles],
    data(){
        return {
            widthStyle: {
                '1': 'md:col-span-1',
                '2': 'md:col-span-2',
                '3': 'md:col-span-3',
                '4': 'md:col-span-4',
                '5': 'md:col-span-5',
                '6': 'md:col-span-6',
                '7': 'md:col-span-7',
                '8': 'md:col-span-8',
                '9': 'md:col-span-9',
                '10': 'md:col-span-10',
                '11': 'md:col-span-11',
                '12': 'md:col-span-12'
            },
            defaultStyle: {
                '0': 'col-span-full'
            }
        }
    },
    computed: {
        calculatedCardStyle() {
            let style = '';
            /*Style Migrating*/
            if(this.adaptiveHeight){
                style = 'place-self-start '
            }
            style += this.bgColorStyle + ' ' + this.radiusStyle +' ' + this.textColorStyle + ' ' + this.widthStyle[this.width] + ' ' + this.defaultStyle[0]
            return style
        }
    }
}
