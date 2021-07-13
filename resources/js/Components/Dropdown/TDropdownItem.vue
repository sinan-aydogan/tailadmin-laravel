<template>
    <div class="justify-start p-2 hover:bg-gray-600 hover:text-white cursor-pointer">
        <inertia-link
        :href="link"
        v-if="link"
        class="flex flex-row items-center justify-start"
        >

            <div v-if="$slots.icon" class="flex justify-center items-center w-5 h-5 mr-1">
                <slot name="icon"></slot>
            </div>
            <div class="flex">
                <slot></slot>
            </div>
        </inertia-link>
        <slot v-else></slot>

    </div>
</template>

<script>
export default {
    name: "TDropdownItem",
    props: {
        link: {
            type: String
        }
    }
}
</script>

<style scoped>

</style>
