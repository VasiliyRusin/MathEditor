<template>
    <div>
        <label>
            <textarea v-model="selectedElement"></textarea>
        </label>
        <button @click.self="remove()"></button>
    </div>
</template>

<script>
    export default {
        name: "Message",
        props: {
            index: {
                type: Number,
                required: true
            }
        },

        computed: {
            selectedElement: {
                get () {
                    return this.$store.getters.selectedData[this.index];
                },

                set (value) {
                    let index = this.index;
                    this.$store.commit('UPDATE_SELECTED_DATA_MESSAGE', {index, value});
                }
            }
        },

        methods: {
            remove: function () {
                this.$store.commit('REMOVE_SELECTED_DATA_MESSAGE', this.index)
            }
        }
    }
</script>

<style scoped lang="scss">
    div {
        display: flex;
        margin-bottom: 4px;
        align-items: stretch;

        label {
            width: 100%;

            textarea {
                width: 100%;
                padding: 10px;
                color: inherit;
                display: block;
                min-height: 58px;
                resize: vertical;
                font-size: 1.2rem;
                box-sizing: border-box;
                background-color: transparent;
            }
        }

        button {
            $size: 58px;

            width: $size;
            display: block;
            position: relative;

            &:before, &:after {
                $size: $size / 5;

                content: '';
                top: 50%;
                left: 50%;
                width: $size;
                height: $size;
                display: block;
                position: absolute;
                border-top: 2px solid;
                border-left: 2px solid;
                transform-origin: top left;
                transform: translateX(-1.5px) rotate(-45deg);
            }

            &:before {
                transform: translateX(1.5px) rotate(135deg);
            }
        }
    }
</style>