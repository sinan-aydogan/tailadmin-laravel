import {bgColorStyles} from "@/Mixins/Styles/bgColorStyles";
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";
export const alertStyleMixin = {
    mixins: [bgColorStyles, radiusSizeMixin],
    computed: {
        calculatedAlertStyle() {
            let style = '';
            /*Style Migrating*/
            style = this.bgColorStyle + ' ' + this.radiusStyle + ' ' + this.textColorStyle
            return style
        }
    }
}