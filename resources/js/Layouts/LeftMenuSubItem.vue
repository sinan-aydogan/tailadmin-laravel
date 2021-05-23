<template>
    <!-- Item Container-->
    <div v-show="showingLeftMenu">
        <inertia-link
            :href="item.link"
            tag="div">
            <div class="left-menu-sub-item">
                <div class="flex items-center justify-start">
                    <!-- Label -->
                    <div v-if="showingLeftMenu === 'true'" class="ml-3 py-1">{{ item.label }}</div>
                    <!-- Icon -->
                    <div class="pr-4">
                        <font-awesome-icon v-if="item.icon" :icon="item.icon"/>
                    </div>
                </div>
            </div>
        </inertia-link>
    </div>
</template>

<script>
export default {
    name: "LeftMenuSubItem",
    props: ["item", "showingLeftMenu"]
}
</script>

<style scoped>

</style>
