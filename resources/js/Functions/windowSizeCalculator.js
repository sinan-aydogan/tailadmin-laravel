import {computed, onBeforeMount, onUnmounted, ref, watch} from "vue";

export default function() {
  /*Definitions*/
  const windowWidth = ref(window.innerWidth);

  const onResize = () => {
    windowWidth.value = window.innerWidth;
  };

    const deviceType = computed(()=>{
        if (windowWidth.value <= 425) {
            return "phone";
        } else if (windowWidth.value <= 768) {
            return "tablet";
        } else if (windowWidth.value <= 1024) {
            return "laptop";
        } else {
            return "desktop";
        }
    })

  /*Register Event Listener*/
  onBeforeMount(() => {
    window.addEventListener("resize", onResize);
    onResize();
  });
  /*Destroy Event Listener*/
  onUnmounted(() => {
    window.removeEventListener("resize", onResize);
  });

  return { deviceType };
}
