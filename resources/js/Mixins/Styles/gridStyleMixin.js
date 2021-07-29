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
            gridPhoneStyle: {
                '0': 'phone:grid-cols-none',
                '1': 'phone:grid-cols-1',
                '2': 'phone:grid-cols-2',
                '3': 'phone:grid-cols-3',
                '4': 'phone:grid-cols-4',
                '5': 'phone:grid-cols-5',
                '6': 'phone:grid-cols-6',
                '7': 'phone:grid-cols-7',
                '8': 'phone:grid-cols-8',
                '9': 'phone:grid-cols-9',
                '10': 'phone:grid-cols-10',
                '11': 'phone:grid-cols-11',
                '12': 'phone:grid-cols-12',
            },
            gridTabletStyle: {
                '0': 'tablet:grid-cols-none',
                '1': 'tablet:grid-cols-1',
                '2': 'tablet:grid-cols-2',
                '3': 'tablet:grid-cols-3',
                '4': 'tablet:grid-cols-4',
                '5': 'tablet:grid-cols-5',
                '6': 'tablet:grid-cols-6',
                '7': 'tablet:grid-cols-7',
                '8': 'tablet:grid-cols-8',
                '9': 'tablet:grid-cols-9',
                '10': 'tablet:grid-cols-10',
                '11': 'tablet:grid-cols-11',
                '12': 'tablet:grid-cols-12',
            },
            gridLaptopStyle: {
                '0': 'laptop:grid-cols-none',
                '1': 'laptop:grid-cols-1',
                '2': 'laptop:grid-cols-2',
                '3': 'laptop:grid-cols-3',
                '4': 'laptop:grid-cols-4',
                '5': 'laptop:grid-cols-5',
                '6': 'laptop:grid-cols-6',
                '7': 'laptop:grid-cols-7',
                '8': 'laptop:grid-cols-8',
                '9': 'laptop:grid-cols-9',
                '10': 'laptop:grid-cols-10',
                '11': 'laptop:grid-cols-11',
                '12': 'laptop:grid-cols-12',
            },
            gridDesktopStyle: {
                '0': 'desktop:grid-cols-none',
                '1': 'desktop:grid-cols-1',
                '2': 'desktop:grid-cols-2',
                '3': 'desktop:grid-cols-3',
                '4': 'desktop:grid-cols-4',
                '5': 'desktop:grid-cols-5',
                '6': 'desktop:grid-cols-6',
                '7': 'desktop:grid-cols-7',
                '8': 'desktop:grid-cols-8',
                '9': 'desktop:grid-cols-9',
                '10': 'desktop:grid-cols-10',
                '11': 'desktop:grid-cols-11',
                '12': 'desktop:grid-cols-12',
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
                style = this.gridStyle[1] + ' '
            }
            if (this.colPhone) {
                style = this.gridPhoneStyle[this.colPhone] + ' '
            }
            if (this.colTablet) {
                style = style + this.gridTabletStyle[this.colTablet] + ' '
            }
            if (this.colLaptop) {
                style = style + this.gridLaptopStyle[this.colLaptop] + ' '
            }
            if (this.colDesktop) {
                style = style + this.gridDesktopStyle[this.colDesktop]
            }

            return style + ' ' + this.defaultStyle[0]
        }
    }
}