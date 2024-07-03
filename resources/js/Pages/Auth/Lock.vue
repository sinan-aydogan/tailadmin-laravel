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
import TLock from "@/Components/Auth/TLock.vue";
export default {
    name: "Lock",
    components: {TLock}
}
</script>
