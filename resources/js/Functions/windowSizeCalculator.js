import { computed, onBeforeMount, onUnmounted, ref, watch } from "vue";

export default function () {
    /*Definitions*/
    const windowWidth = ref();
    const deviceType = ref();
    const onResize = () => {
        windowWidth.value = window.innerWidth;
    };

    /*Register Event Listener*/
    onBeforeMount(() => {
        deviceTypeCalculate();
        window.addEventListener("resize", onResize);
        onResize();
    });


    const deviceTypeCalculate = () => {
        if (windowWidth.value <= 640) {
            deviceType.value = "phone";
        } else if (windowWidth.value <= 768) {
            deviceType.value = "tablet";
        } else if (windowWidth.value <= 1024) {
            deviceType.value = "laptop";
        } else {
            deviceType.value = "desktop";
        }
    }


    /*Destroy Event Listener*/
    onUnmounted(() => {
        window.removeEventListener("resize", onResize);
    });

    watch(windowWidth,
        () => {
            deviceTypeCalculate();
        });

    return { deviceType };
}
