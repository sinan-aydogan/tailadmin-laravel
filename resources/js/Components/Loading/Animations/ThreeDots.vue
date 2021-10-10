<template>
    <div class="loading-three-dots">
        <div id="dot1" :class="styleClass"/>
        <div id="dot2" :class="styleClass"/>
        <div id="dot3" :class="styleClass"/>
    </div>
</template>

<script>
import {toRefs, ref} from "vue";

export default {
    name: "ThreeDots",
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
    setup(props) {
        const {color} = toRefs(props)
        /*Design Check*/
        const styleClass = ref()

        styleClass.value = 'loading-' + color.value

        return {styleClass}
    }
}
</script>

<style scoped>
#dot1, #dot2, #dot3 {
    content: '&nbps';
    -webkit-animation: threeDots 1.2s infinite ease-in-out;
    animation: threeDots 1.2s infinite ease-in-out;
    width: .5em;
    height: .5em;
    border-radius: 999em;
    -moz-border-radius: 999em;
    -webkit-border-radius: 999em;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
}

#dot2 {
    -webkit-animation-delay: 150ms;
    animation-delay: 150ms;
}

#dot3 {
    -webkit-animation-delay: 300ms;
    animation-delay: 300ms;
}

@-webkit-keyframes threeDots {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1);
    }
    100% {
        transform: scale(0);
    }
}

@keyframes threeDots {
    0% {
        transform: scale(0);
    }
    30%, 70% {
        transform: scale(.9);
    }
    50% {
        transform: scale(1);
    }
    100% {
        transform: scale(0);
    }
}
</style>
