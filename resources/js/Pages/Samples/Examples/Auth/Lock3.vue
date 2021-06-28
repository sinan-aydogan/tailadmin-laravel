<template>
    <t-lock
        color="white"
        bg-color="gradient-blue-to-white"
        button-color="blue"
        :radius="5"
    >
    </t-lock>
</template>

<script>
import TLock from "@/Components/Auth/TLock";
export default {
    components: {TLock}
}
</script>
