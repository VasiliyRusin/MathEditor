<template>
    <div>
        <Rendered v-for="(value, index) in selectedData" :template="value" :key="index"></Rendered>
    </div>
</template>

<script>
    import SanitizeHtml from "sanitize-html";
    import Rendered from "@/components/editor/preview/Rendered";

    export default {
        name: "Preview",
        components: {
            Rendered
        },

        computed: {
            selectedData: function () {
                return this.$store.getters.selectedData.map((template) => {
                    return `<p>${SanitizeHtml(template, {
                        allowedTags: ['b', 'i', 'math'],
                    })}</p>`
                });
            }
        }
    }
</script>