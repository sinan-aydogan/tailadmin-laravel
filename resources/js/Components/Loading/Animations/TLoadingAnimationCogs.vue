<template>
    <div class="loading-cogs-container">
        <!--Cog1-->
        <div id="cog1">
            <svg
                :class="tStyle['cog1']"
                style="background-color: rgba(0,0,0,0)"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                />
                <path
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                />
            </svg>
        </div>
        <!--Cog2-->
        <div id="cog2" class="loading-cogs-second">
            <svg
                :class="tStyle['cog2']"
                style="background-color: rgba(0,0,0,0)"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                />
                <path
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                />
            </svg>
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
