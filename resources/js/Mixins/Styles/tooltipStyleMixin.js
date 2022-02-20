export const tooltipStyleMixin = {
    props:{
        position: {
            type: String,
            default: 'bottom'
        }
    },
    data(){
        return{
            positionStyle: {
                'left': {
                    arrow: 'absolute w-2 h-2 border-r border-t transform -right-1 top-4 rotate-45 z-10',
                    box: 'right-full -top-4'
                },
                'top': {
                    arrow: 'absolute w-2 h-2 bg-white border-b border-r transform left-4 -bottom-1 rotate-45 z-10',
                    box: 'left-0 bottom-6'
                },
                'bottom': {
                    arrow: 'absolute w-2 h-2 border-l border-t transform left-4 -top-1 rotate-45 z-10',
                    box: 'top-6'
                },
                'right': {
                    arrow: 'absolute w-2 h-2 border-l border-b transform -left-1 top-4 rotate-45 z-10',
                    box: 'left-full -top-4'
                }
            }
        }
    }
}