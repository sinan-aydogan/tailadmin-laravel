import {bgColorStyles} from "@/Mixins/Styles/bgColorStyles";
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";

export const buttonStyleMixin = {
    props: {
        color: {
            type: String,
            default: 'solid-green'
        },
    },
    mixins: [bgColorStyles, radiusSizeMixin],
    computed:{
        calculatedButtonStyle() {
            let style;
            style = this.bgColorStyle +
                ' ' + this.bgHoverColorStyle +
                ' ' + this.textColorStyle +
                ' ' + this.bgHoverColorStyle +
                ' ' + this.radiusStyle
            return style
        }
    }
}