<template>
    <div :class="['collapsible',calculatedCollapsibleStyle]">
        <slot></slot>
    </div>
</template>

<script>
import {collapsibleStyleMixin} from "@/Mixins/Styles/collapsibleStyleMixin";

export default {
    name: "Collapsible",
    mixins: [collapsibleStyleMixin]
}
</script>
