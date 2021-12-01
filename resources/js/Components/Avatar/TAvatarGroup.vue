<template>
  <div class="avatar-group-container">
    <slot />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TAvatarGroup"
});
</script>
