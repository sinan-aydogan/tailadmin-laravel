import {bgColorStyles} from "@/Mixins/Styles/bgColorStyles";
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";
export const modalStyleMixin = {
    mixins: [bgColorStyles,radiusSizeMixin],
    computed: {
        calculatedModalStyle() {
            let style;
            style = this.radiusStyle + ' ' + this.bgColorStyle;

            return style
        }
    }
}