<template>
    <span :value="value" class="hover:bg-gray-400 cursor-pointer hidden">
        <span v-if="label">{{label}}</span>
        <slot v-else></slot>
    </span>
</template>

<script>
export default {
    name: "TInputSelectItem",
    props: ['value','label'],
    data(){
        return {
        }
    },
    methods: {
        selectedOption(){
            this.$root.$data.selectedID= 5
        }
    }
}
</script>

<style scoped>

</style>
