import {bgColorStyles} from "@/Mixins/Styles/bgColorStyles";
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";

export const alertStyleMixin = {
    mixins: [bgColorStyles, radiusSizeMixin],
    props: {
        type: {
            type: String,
            default: null
        },
        design: {
            type: String,
            default: null
        },
        color: {
            type: String,
            default: null
        },
    },
    data() {
        return {
            types: ['success', 'danger', 'warning', 'info'],
            designs: ['filled', 'light', 'gradient', 'inline', 'outline', 'elegant', 'block'],
            colors: ['black', 'blue', 'gray', 'green', 'indigo', 'pink', 'purple', 'red', 'white', 'yellow']
        }
    },
    computed: {
        alertStyle() {
            let style = '';
            /*Style Migrating*/
            style = this.bgColorStyle + ' ' + this.radiusStyle + ' ' + this.textColorStyle
            return style
        }
    }
}
