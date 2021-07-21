export const windowSizeMixin = {
    data() {
        return {
            windowWidth: window.innerWidth,
            deviceType: null,
        }
    },
    created() {
        this.deviceTypeCalculate();
        window.addEventListener('resize', this.onResize);
        this.onResize();
    },

    unmounted() {
        window.removeEventListener('resize', this.onResize);
    },

    methods: {
        onResize() {
            this.windowWidth = window.innerWidth
        },
        deviceTypeCalculate(){
            if(this.windowWidth <= 425){
                this.deviceType = 'phone'
            }else if(this.windowWidth <= 768){
                this.deviceType = 'tablet'
            }else if(this.windowWidth <= 1024){
                this.deviceType = 'laptop'
            }else{
                this.deviceType = 'desktop'
            }
        }
    },
    watch:{
        windowWidth(){
            this.deviceTypeCalculate()
        }
    }
}
