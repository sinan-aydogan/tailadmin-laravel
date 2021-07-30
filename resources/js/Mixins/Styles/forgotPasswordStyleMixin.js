import {bgColorStyles} from "@/Mixins/Styles/bgColorStyles";
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";

export const forgotPasswordStyleMixin = {
    mixins: [bgColorStyles,radiusSizeMixin],
    computed: {
        calculatedForgotPasswordStyle() {
            let style;
            style = this.bgColorStyle + ' '
            style += this.textColorStyle

            return style
        }
    }
}