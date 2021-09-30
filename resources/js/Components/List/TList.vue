<template>
    <div class="flex flex-col">
            <slot></slot>
    </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
    name: "TList",
    props: {
        color: {
            type: String,
            default: 'solid-white'
        },
        radius: {
            required: false,
        },
        type: {
            required: false
        }
    }
})
</script>
