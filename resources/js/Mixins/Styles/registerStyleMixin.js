import {bgColorStyles} from "@/Mixins/Styles/bgColorStyles";
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";

export const registerStyleMixin = {
    mixins: [bgColorStyles,radiusSizeMixin],
    computed: {
        calculatedRegisterStyle() {
            let style;
            style = this.bgColorStyle + ' '
            style += this.textColorStyle

            return style
        }
    }
}