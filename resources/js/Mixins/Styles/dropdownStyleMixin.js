import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";
import {bgColorStyles} from "@/Mixins/Styles/bgColorStyles";
export const dropdownStyleMixin = {
    props: {
        align: {
            type: String,
            default: 'left'
        },
        size: {
            type: String,
            default: 'wide'
        }
    },
    mixins: [radiusSizeMixin,bgColorStyles],
    data(){
        return {

            alignStyles:{
                'left': 'origin-top-left left-0',
                'right': 'origin-top-right right-0',
                'center': 'origin-top'
            },
            sizeStyles: {
                'wide': 'min-w-22',
                'fit': 'min-w-min'
            }
        }
    },
    computed: {
        calculatedTriggerStyle(){
            let style;
            style = this.bgColorStyle +
                ' ' + this.bgHoverColorStyle +
                ' ' + this.textColorStyle +
                ' ' + this.bgHoverColorStyle +
                ' ' + this.radiusStyle
            return style
        },
        calculatedContentStyle(){
            let style;
            style += ' ' + this.alignStyles[this.align],
            style += ' ' + this.sizeStyles[this.size]

            return style
        }
    }

}