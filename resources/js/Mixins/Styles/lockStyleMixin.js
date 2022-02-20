import {bgColorStyles} from "@/Mixins/Styles/bgColorStyles";
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";

export const lockStyleMixin = {
    mixins: [bgColorStyles,radiusSizeMixin],
    computed: {
        calculatedLockStyle() {
            let style;
            style = this.bgColorStyle + ' '
            style += this.textColorStyle

            return style
        }
    }
}