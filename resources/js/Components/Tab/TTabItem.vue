<template>
    <div v-show="isActive" class="whitespace-normal">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'TTabItem',
    props: {
        title: {
            default: 'Tab'
        }
    },
    data() {
        return {
            isActive: true
        }
    }
}
</script>
