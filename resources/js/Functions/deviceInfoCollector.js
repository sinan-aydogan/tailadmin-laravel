import {defineAsyncComponent} from "vue";


const breakpoints = useBreakpoints(breakpointsTailwind)

function width() {
    defineAsyncComponent(() => import('@vueuse/core'))
}

export {breakpoints}
