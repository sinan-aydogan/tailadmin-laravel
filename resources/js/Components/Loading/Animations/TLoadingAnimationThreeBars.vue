<template>
    <div class="loading-three-bars">
        <div id="bar1" :class="tStyle" />
        <div id="bar2" :class="tStyle" />
        <div id="bar3" :class="tStyle" />
    </div>
</template>

<script>
import { toRefs, computed } from "vue";

export default {
    name: "TLoadingAnimationThreeBars",
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

            return "loading-" + color.value + (target.value === "button" ? " w-1.5 h-4" : " w-4 h-16 xl:w-6 xl:h-24");
        });

        return { tStyle };
    }
};
</script>

<style scoped>
#bar1,
#bar2,
#bar3 {
    content: "&nbps";
    -webkit-animation: threeBars 1.2s infinite ease-in-out;
    animation: threeBars 1.2s infinite ease-in-out;
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
        opacity: 0.4;
        transform: scaleY(0.5);
    }
    50% {
        opacity: 1;
        transform: scaleY(1);
    }
    100% {
        opacity: 0.4;
        transform: scaleY(0.5);
    }
}

@keyframes threeBars {
    0% {
        opacity: 0.4;
        transform: scaleY(0.5);
    }
    50% {
        opacity: 1;
        transform: scaleY(1);
    }
    100% {
        opacity: 0.4;
        transform: scaleY(0.5);
    }
}
</style>
