import {breakpointsTailwind, useBreakpoints, useStorage} from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
const menuStatus = useStorage('menuStatus');

function updateMenuStatus(){
        if (breakpoints.smaller('sm')) {
            /*Set status in mobile devices*/
            if (menuStatus.value === 'hidden') {
                menuStatus.value = 'opened'
            } else {
                menuStatus.value = 'hidden'
            }
        } else {
            /*Set status in pc*/
            if (menuStatus.value === 'opened') {
                menuStatus.value = 'closed'
            } else {
                menuStatus.value = 'opened'
            }
        }
}

export {updateMenuStatus, menuStatus}
