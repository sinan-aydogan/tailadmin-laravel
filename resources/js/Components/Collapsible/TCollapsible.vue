<template>
    <div :class="['flex flex-col w-full border border-gray-400 overflow-hidden',radiusStyle]">
        <slot></slot>
    </div>
</template>

<script>
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";

export default {
    name: "Collapsible",
    mixins: [radiusSizeMixin]
}
</script>

<style>
/*
.collapsible-border:first-child{
  border-radius: 12px 12px 0 0;
  border-top: 1px solid #9CA3AF;
}*/
.collapsible-border {
    border-bottom: 1px solid #9CA3AF;
}

.collapsible-border:last-child {
    border-bottom: 0 solid #9CA3AF;
}
</style>
