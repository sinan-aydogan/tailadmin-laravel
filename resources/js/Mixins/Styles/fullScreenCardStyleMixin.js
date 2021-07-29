import {bgColorStyles} from "@/Mixins/Styles/bgColorStyles";

export const fullScreenCardStyleMixin = {
    mixins: [bgColorStyles],
    computed: {
        calculatedFullscreenCardStyle() {
            let style = this.bgColorStyle + ' border-none';

            return style
        }
    }
}