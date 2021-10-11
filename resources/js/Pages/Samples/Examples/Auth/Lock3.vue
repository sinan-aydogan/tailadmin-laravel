<template>
    <t-lock
        color="light-gray"
        bg-color="gradient-blue-to-white"
        bg-gradient-direction="br"
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
