import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";
import {bgColorStyles} from "@/Mixins/Styles/bgColorStyles";

export const collapsibleStyleMixin = {
    props: {
        align: {
            type: String,
            default: 'left'
        }
    },
    mixins: [radiusSizeMixin,bgColorStyles],
    data(){
        return {

        }
    },
    computed: {
        /*Container*/
        calculatedCollapsibleStyle(){
            let style = this.radiusStyle
            return style
        },
        /*Title*/
        calculatedCollapsibleTitleStyle(){
            let style = this.bgColorStyle
            style += ' '+this.textColorStyle
            return style
        },
        /*Content*/
        calculatedCollapsibleItemContentStyle(){
            let style = 'bg-opacity-10 border-none text-gray-600';
            if(this.color.includes('gradient')){
                style += ' ' + this.solidColors['solid-'+this.color.split('-')[1]]
            }else{
                style += ' ' + this.bgColorStyle
            }
            return style
        }
    }
}