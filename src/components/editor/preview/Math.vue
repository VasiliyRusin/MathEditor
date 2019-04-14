<template>
    <span v-katex="expression">
        <slot></slot>
    </span>
</template>

<script>
    import 'katex/dist/katex.min.css';

    export default {
        name: "Math",

        computed: {
            expression: function () {
                return this.$slots.default.length !== 0 ? this.$slots.default[0].text : null;
            }
        }
    }
</script>