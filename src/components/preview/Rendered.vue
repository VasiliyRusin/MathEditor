<template>
    <v-runtime-template :template="template"></v-runtime-template>
</template>

<script>
    import VRuntimeTemplate from "v-runtime-template";
    import Math from "@/components/editor/Math";

    export default {
        name: "Rendered",
        components: {
            Math,
            VRuntimeTemplate
        },
        props: {
            template: String
        },
    }
</script>