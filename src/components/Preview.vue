<template>
    <div>
        <Rendered v-for="(value, index) in selectedData" :template="value" :key="index"></Rendered>
    </div>
</template>

<script>
    import Rendered from "@/components/preview/Rendered";

    export default {
        name: "Preview",
        components: {
            Rendered
        },

        computed: {
            selectedData: function () {
                return this.$store.getters.selectedData.map((template) => {
                    return `<p>${template}</p>`
                });
            }
        }
    }
</script>