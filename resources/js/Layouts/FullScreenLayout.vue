<script setup>
defineProps({
    bgImageUrl: {
        type: String,
        default: null
    },
    bgColor: {
        type: String,
        default: null
    }
});
</script>

<template>
    <div class="full-screen-card">
        <div
            :class="[
        'full-screen-card-container',
        bgColor
        ]"
            :style="[bgImageUrl && {backgroundImage: 'url('+bgImageUrl+')'}]"
        >
        </div>
        <div class="full-screen-card-content">
            <slot></slot>
        </div>
    </div>
</template>
