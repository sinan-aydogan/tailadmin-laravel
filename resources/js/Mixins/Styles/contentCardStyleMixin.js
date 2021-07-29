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
                '1': 'tablet:col-span-1',
                '2': 'tablet:col-span-2',
                '3': 'tablet:col-span-3',
                '4': 'tablet:col-span-4',
                '5': 'tablet:col-span-5',
                '6': 'tablet:col-span-6',
                '7': 'tablet:col-span-7',
                '8': 'tablet:col-span-8',
                '9': 'tablet:col-span-9',
                '10': 'tablet:col-span-10',
                '11': 'tablet:col-span-11',
                '12': 'tablet:col-span-12'
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