<template>
    <div class="col-span-full w-full">
        <div
            :class="['grid w-full grid-flow-row lg:grid-cols-'+col,' gap-'+gap]">
            <slot></slot>
        </div>
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
