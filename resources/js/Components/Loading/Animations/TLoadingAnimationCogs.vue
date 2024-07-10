<template>
    <div class="loading-cogs-container">
        <!--Cog1-->
        <div id="cog1">
            <iconify-icon icon="mdi:cog" :class="tStyle['cog1']"></iconify-icon>
        </div>
        <!--Cog2-->
        <div id="cog2" class="loading-cogs-second">
            <iconify-icon icon="mdi:cog" :class="tStyle['cog2']"></iconify-icon>
        </div>
    </div>
</template>

<script>
import { computed, defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
    name: "TLoadingAnimationCogs",
    props: {
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
        const tStyle = reactive({})
        tStyle['cog1'] = computed(() => {
            return "loading-" + color.value + ' ' +
                (target.value === "button" ? "w-1.5 h-4" : "w-20 h-20 xl:w-26 xl:h-26");
        });
        tStyle['cog2'] = computed(() => {
            return "loading-" + color.value + ' ' +
                (target.value === "button" ? "w-1.5 h-4" : "w-12 h-12 xl:w-16 xl:h-16");
        });

        return { tStyle };
    }
});
</script>

<style scoped>
#cog1 {
    -webkit-animation: cog 2s infinite linear;
    animation: cog 2s infinite linear;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
}

#cog2 {
    -webkit-animation: cog 1.5s infinite linear reverse;
    animation: cog 1.5s infinite linear reverse;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
}

@-webkit-keyframes cog {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes cog {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
