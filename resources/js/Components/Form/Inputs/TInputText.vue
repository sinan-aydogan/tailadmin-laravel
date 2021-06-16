<template>
        <input class="form-input h-10" type="text" :id="id" :placeholder="placeholder" :value="value" @input="$emit('input', $event.target.value)" ref="input">
</template>

<script>
export default {
    name: "TInputText",
    props: ['value','id', 'placeholder']
}
</script>

<style scoped>

</style>
