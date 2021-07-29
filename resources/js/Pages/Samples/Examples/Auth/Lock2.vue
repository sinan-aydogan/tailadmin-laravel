<template>
    <t-lock
        color="solid-gray"
        bg-color="gradient-gray-to"
        bg-gradient-direction="br"
        :radius="5"
        button-color="light-gray"
    >
    </t-lock>
</template>

<script>
import TLock from "@/Components/Auth/TLock";
export default {
    components: {TLock}
}
</script>
