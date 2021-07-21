import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";
import {bgColorStyles} from "@/Mixins/Styles/bgColorStyles";

export const avatarStyleMixin = {
    props: {
        size: {
            type: Number,
            require: false,
            default: 3
        },
        indicator: {
            type: Object,
            require: false,
        }
    },
    mixins: [radiusSizeMixin, bgColorStyles],
    data() {
        return {
            sizeStyles: {
                '1': 'w-5 h-5',
                '2': 'w-8 h-8',
                '3': 'w-10 h-10',
                '4': 'w-12 h-12',
                '5': 'w-16 h-16',
                '6': 'w-20 h-20',
                '7': 'w-24 h-24',
                '8': 'w-36 h-36',
            },
            indicatorPositionStyles: {
                'lb': "-left-0.5 -bottom-0.5",
                'rb': "-right-0.5 -bottom-0.5",
                'lt': "-left-0.5 -top-0.5",
                'rt': "-right-0.5 -top-0.5"
            },
        }
    },
    computed: {
        calculatedIndicatorStyle() {
            let style;
            /*Position Style*/
            style = this.indicatorPositionStyles[this.indicator.position]

            /*Color Style*/
            if (this.indicator.color.includes('solid')) {
                /*Solid Colors*/
                style += ' ' + this.solidColors[this.indicator.color]
            } else if (this.indicator.color.includes('light')) {
                /*Light Colors*/
                style += ' ' + this.lightColors[this.indicator.color]
            } else if (this.indicator.color.includes('gradient')) {
                /*Gradient Colors*/
                style += ' ' + this.gradientDirections[this.indicator.gradientDirection] + ' ' +
                    this.gradientFirstColors[this.indicator.color.split('-')[1]] + ' ' +
                    this.gradientSecondColors[this.indicator.color.split('-')[3]]
            }

            /*Text Color Styles*/
            if (this.indicator.color.includes('solid')) {
                /*Solid Colors*/
                style += ' ' + this.solidTextColors[this.indicator.color]
            } else if (this.indicator.color.includes('light')) {
                /*Light Colors*/
                style += ' ' + this.lightTextColors[this.indicator.color]
            } else if (this.indicator.color.includes('gradient')) {
                style += ' ' + this.solidTextColors[this.indicator.color]
            }

            return style
        }
    }
}
