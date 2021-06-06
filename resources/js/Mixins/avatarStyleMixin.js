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
            sizes: {
                1: 'w-5 h-5',
                2: 'w-8 h-8',
                3: 'w-10 h-10',
                4: 'w-12 h-12',
                5: 'w-16 h-16',
                6: 'w-20 h-20',
                7: 'w-24 h-24',
                8: 'w-36 h-36',
            },
            positions: {
                lb: {
                    positionStyle: "-left-0.5 -bottom-0.5"
                },
                rb: {
                    positionStyle: "-right-0.5 -bottom-0.5"
                },
                lt: {
                    positionStyle: "-left-0.5 -top-0.5"
                },
                rt: {
                    positionStyle: "-right-0.5 -top-0.5"
                }
            }
        }
    }
}
