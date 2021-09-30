<template>
    <div v-show="isActive" class="whitespace-normal">
        <slot></slot>
    </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
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
})
</script>
