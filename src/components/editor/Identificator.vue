<template>
    <div>
        <label :class="{'active': identificator === selectedId }">
            {{ identificator }}
            <input type="radio" name="id" :value="identificator" v-model="selectedId">
        </label>
        <button @click.self="remove()"></button>
    </div>
</template>

<script>
    export default {
        name: "Identificator",
        props: {
            identificator: {
                type: String,
                required: true
            }
        },

        computed: {
            selectedId: {
                get () {
                    return this.$store.getters.selectedId;
                },

                set (value) {
                    this.$store.commit('UPDATE_SELECTED_ID', value);
                }
            },
        },

        methods: {
            remove: function () {
                this.$store.commit('REMOVE_DATA', this.identificator)
            }
        }
    }
</script>

<style scoped lang="scss">
    div {
        display: flex;

        label {
            width: 100%;
            padding: 18px;
            display: block;
            font-size: large;
            text-align: left;
            border-bottom: 1px solid rgba(0, 0, 0, 0.5);

            input[type="radio"] {
                display: none;
            }

            &.active {
                background-color: white;
            }
        }

        button {
            $size: 58px;

            width: $size;
            display: block;
            flex-shrink: 0;
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