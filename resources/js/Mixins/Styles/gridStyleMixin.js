export const gridStyleMixin = {
    props: {
        gap: {
            type: Number,
            default: 4
        },
        col: {
            type: Number,
        },
        colPhone: Number,
        colTablet: Number,
        colLaptop: Number,
        colDesktop: Number,
    },
    data() {
        return {
            gapStyle: {
                '0': 'gap-0',
                '1': 'gap-1 mb-1',
                '2': 'gap-2 mb-2',
                '3': 'gap-3 mb-3',
                '4': 'gap-4 mb-4',
                '5': 'gap-5 mb-5',
                '6': 'gap-6 mb-6',
                '7': 'gap-7 mb-7',
                '8': 'gap-8 mb-8',
                '9': 'gap-9 mb-9',
                '10': 'gap-10 mb-10'
            },
            gridStyle: {
                '0': 'grid-cols-none',
                '1': 'grid-cols-1',
                '2': 'grid-cols-2',
                '3': 'grid-cols-3',
                '4': 'grid-cols-4',
                '5': 'grid-cols-5',
                '6': 'grid-cols-6',
                '7': 'grid-cols-7',
                '8': 'grid-cols-8',
                '9': 'grid-cols-9',
                '10': 'grid-cols-10',
                '11': 'grid-cols-11',
                '12': 'grid-cols-12',
            },
            defaultStyle: {
                '0': 'justify-items-stretch'
            }
        }
    },
    computed: {
        calculatedGridStyle() {
            let style;
            if (this.col) {
                style = this.gridStyle[this.col]
            } else {
                if (this.colPhone) {
                    style = 'phone:' + this.gridStyle[this.colPhone]
                } else {
                    style = ''
                }
                if (this.colTablet) {
                    style = style + ' tablet:' + this.gridStyle[this.colTablet]
                }
                if (this.colLaptop) {
                    style = style + ' laptop:' + this.gridStyle[this.colLaptop]
                }
                if (this.colDesktop) {
                    style = style + ' desktop:' + this.gridStyle[this.colDesktop]
                }
            }

            return style + ' ' + this.defaultStyle
        }
    }
}