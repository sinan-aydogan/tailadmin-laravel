<template>
    <div class="loading-three-dots">
        <div id="dot1" :class="tStyle" />
        <div id="dot2" :class="tStyle" />
        <div id="dot3" :class="tStyle" />
    </div>
</template>

<script>
import { toRefs, computed } from "vue";

export default {
    name: "TLoadingAnimationThreeDots",
    props: {
        title: {
            type: String,
            default: "loading"
        },
        color: {
            type: String,
            default: "gray"
        },
        target: {
            type: String,
            default: "button"
        }
    },
    setup(props) {
        const { color, target } = toRefs(props);
        /*Design Check*/
        const tStyle = computed(() => {

            return "loading-" + color.value + ' ' +
                (target.value === "button" ? "w-2 h-2" : "w-8 h-8 xl:w-14 xl:h-14");
        });

        return { tStyle };
    }
};
</script>

<style scoped>
#dot1,
#dot2,
#dot3 {
    content: "&nbps";
    -webkit-animation: threeDots 1.2s infinite ease-in-out;
    animation: threeDots 1.2s infinite ease-in-out;
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
    30%,
    70% {
        transform: scale(0.9);
    }
    50% {
        transform: scale(1);
    }
    100% {
        transform: scale(0);
    }
}
</style>
