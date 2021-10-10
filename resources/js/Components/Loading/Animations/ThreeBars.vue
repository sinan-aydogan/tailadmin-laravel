<template>
    <div class="loading-three-bars">
        <div id="bar1" :class="styleClass"/>
        <div id="bar2" :class="styleClass"/>
        <div id="bar3" :class="styleClass"/>
    </div>
</template>

<script>
import {toRefs,ref} from "vue";

export default {
    name: "ThreeBars",
    props: {
        title: {
            type: String,
            default: 'loading'
        },
        color: {
            type: String,
            default: 'gray'
        }
    },
    setup(props){
        const {color} = toRefs(props)
        /*Design Check*/
        const styleClass = ref()

        styleClass.value = 'loading-'+color.value

        return {styleClass}
    }
}
</script>

<style scoped>
#bar1, #bar2, #bar3 {
    content: '&nbps';
    -webkit-animation: threeBars 1.2s infinite ease-in-out;
    animation: threeBars 1.2s infinite ease-in-out;
    width: .3em;
    height: 1em;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
}
#bar2 {
    -webkit-animation-delay: 50ms;
    animation-delay: 50ms;
}
#bar3 {
    -webkit-animation-delay: 150ms;
    animation-delay: 150ms;
}
@-webkit-keyframes threeBars {
    0% {
        opacity: .4;
        transform: scaleY(.5);
    }
    50% {
        opacity: 1;
        transform: scaleY(1);
    }
    100% {
        opacity: .4;
        transform: scaleY(.5);
    }
}
@keyframes threeBars {
    0% {
        opacity: .4;
        transform: scaleY(.5);
    }
    50% {
        opacity: 1;
        transform: scaleY(1);
    }
    100% {
        opacity: .4;
        transform: scaleY(.5);
    }
}
</style>
