<template>
    <span>
        <slot></slot>
    </span>
</template>

<script>
    export default {
        name: "B"
    }
</script>

<style scoped>
    span {
        font-weight: bold;
    }
</style>