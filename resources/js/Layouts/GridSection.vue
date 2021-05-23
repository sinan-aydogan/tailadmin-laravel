<template>
    <div
        :class="['grid grid-flow-row lg:grid-cols-'+col,'gap-'+gap]">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "GridSection",
    props: ['gap', 'col']
}
</script>

<style scoped>

</style>
