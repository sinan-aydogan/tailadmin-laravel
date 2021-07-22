import {bgColorStyles} from "@/Mixins/Styles/bgColorStyles";
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";

export const badgeStyleMixin = {
    mixins: [radiusSizeMixin,bgColorStyles],
    computed: {
        calculatedBadgeStyle(){
            let style = this.radiusStyle;
            style += ' '+ this.textColorStyle;
            style += ' '+ this.bgColorStyle;

            return style
        }
    }
}