import { onBeforeMount, onUnmounted, ref, watch } from "vue";

export default function() {
  /*Definitions*/
  const windowWidth = ref(window.innerWidth);
  const deviceType = ref(null);


  const onResize = () => {
    windowWidth.value = window.innerWidth;
  };

  const deviceTypeCalculate = () => {
    if (windowWidth.value <= 425) {
      deviceType.value = "phone";
    } else if (windowWidth.value <= 768) {
      deviceType.value = "tablet";
    } else if (windowWidth.value <= 1024) {
      deviceType.value = "laptop";
    } else {
      deviceType.value = "desktop";
    }
  };

  /*Register Event Listener*/
  onBeforeMount(() => {
    deviceTypeCalculate();
    window.addEventListener("resize", onResize);
    onResize();
  });
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
