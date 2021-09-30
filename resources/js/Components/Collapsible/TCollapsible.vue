<template>
    <div :class="['collapsible',calculatedCollapsibleStyle]">
        <slot></slot>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import {collapsibleStyleMixin} from "@/Mixins/Styles/collapsibleStyleMixin";

export default defineComponent({
    name: "Collapsible",
    mixins: [collapsibleStyleMixin]
})
</script>
