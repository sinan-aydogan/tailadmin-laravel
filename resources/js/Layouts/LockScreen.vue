<template>
    <t-lock
        color="gradient-purple-to-pink"
        :radius="5"
        bg-image="/img/samples/bgFakurianDesign-nY14Fs8pxT8-unsplash.jpg"
        button-color="pink"
    >
    </t-lock>
</template>

<script>
import {defineComponent} from "vue";
import TLock from "@/Components/Auth/TLock";

export default defineComponent({
    name: "LockScreen",
    components: {TLock}
})
</script>
