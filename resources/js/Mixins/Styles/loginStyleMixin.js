import {bgColorStyles} from "@/Mixins/Styles/bgColorStyles";
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";

export const loginStyleMixin = {
    mixins: [bgColorStyles,radiusSizeMixin],
    computed: {
        calculatedLoginStyle() {
            let style;
            style = this.bgColorStyle + ' '
            style += this.textColorStyle

            return style
        }
    }
}