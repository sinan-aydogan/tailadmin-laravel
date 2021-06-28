export const radiusSizeMixin = {
    props: {
        radius: {
            type: Number,
            require: false,
            default: 3
        }
    },
    data() {
        return {
            radiusSizes: [
                'rounded-sm',
                'rounded',
                'rounded-md',
                'rounded-lg',
                'rounded-xl',
                'rounded-2xl',
                'rounded-3xl',
                'rounded-full'
            ]
        }
    },
    computed: {
        radiusStyle() {
            let i, radiusStyle;
            for (i = 0; i < this.radiusSizes.length; i++) {
                if (i === this.radius - 1) {
                    radiusStyle = this.radiusSizes[i];
                }
            }
            return radiusStyle
        }
    }
}
