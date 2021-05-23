export const windowSizeMixin = {
    data() {
        return {
            windowWidth: window.innerWidth,
        }
    },
    created() {
        window.addEventListener('resize', this.onResize);
        this.onResize();
    },

    unmounted() {
        window.removeEventListener('resize', this.onResize);
    },

    methods: {
        onResize() {
            this.windowWidth = window.innerWidth
        }
    }
}
