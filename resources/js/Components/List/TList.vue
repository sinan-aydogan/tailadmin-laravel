<template>
    <div class="flex flex-col">
            <slot></slot>
    </div>
</template>

<script>
export default {
    name: "TList",
    props: {
        color: {
            type: String,
            default: 'white'
        },
        radius: {
            required: false,
        },
        type: {
            required: false
        }
    }
}
</script>

<style scoped>

</style>
