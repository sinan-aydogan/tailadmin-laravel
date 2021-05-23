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
    data() {
        return {
            avatarSizes: [
                'w-5 h-5',
                'w-8 h-8',
                'w-10 h-10',
                'w-12 h-12',
                'w-16 h-16',
                'w-20 h-20',
                'w-24 h-24',
                'w-36 h-36',
                'w-42 h-42',
            ],
            indicatorDirectionStyles: [
                {key: 'lb', class: '-left-0.5 -bottom-0.5'},
                {key: 'rb', class: '-right-0.5 -bottom-0.5'},
                {key: 'lt', class: '-left-0.5 -top-0.5'},
                {key: 'rt', class: '-right-0.5 -top-0.5'},
            ]
        }
    },
    computed: {
        sizeStyle() {
            let i, sizeStyle;
            for (i = 0; i < this.avatarSizes.length; i++) {
                if (i === this.size - 1) {
                    sizeStyle = this.avatarSizes[i];
                }
            }
            return sizeStyle
        },
        indicatorStyle() {
            let i, indicatorStyle;
            if (this.indicator) {
                for (i = 0; i < this.indicatorDirectionStyles.length; i++) {
                    if (this.indicator.position === this.indicatorDirectionStyles[i].key) {
                        indicatorStyle = this.indicatorDirectionStyles[i].class;
                        indicatorStyle = indicatorStyle + ' bg-' + this.indicator.color + '-500'
                    }
                }

            }
            return indicatorStyle
        }
    }
}
