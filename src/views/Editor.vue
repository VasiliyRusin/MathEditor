<template>
    <table class="editor">
        <tr>
            <td colspan="3">
                <router-link to="/" tag="button">Меню</router-link>
            </td>
        </tr>
        <tr>
            <td>
                <div>
                    <button @click.self="addIdentificator()"></button>
                    <Identificator v-for="identificator in identificators" :identificator="identificator"
                                   :key="identificator"></Identificator>
                </div>
            </td>
            <td v-if="selectedId">
                <Preview></Preview>
            </td>
            <td v-if="selectedId">
                <div>
                    <button @click.self="addMessage()"></button>
                    <Message v-for="(_, index) in selectedData" :key="index" :index="index"></Message>
                </div>
            </td>
            <td v-if="!selectedId" class="not-selected">
                <div>
                    Выберите значение из списка справа
                </div>
            </td>
        </tr>
    </table>
</template>

<script>
    // @ is an alias to /src
    import {mapToObject} from "@/utils";
    import Preview from "@/components/Preview";
    import Identificator from "@/components/editor/Identificator";
    import Message from "@/components/editor/Message";

    export default {
        name: "editor",
        components: {
            Preview,
            Message,
            Identificator
        },

        created: function () {
            this.$store.commit('UPDATE_DATA', mapToObject(JSON.parse(`[
                    ["id1", [
                        "Test message <b>1</b>",
                        "Test message <b>2</b>"
                    ]],
                    ["id2", [
                        "Test message <i>1</i> with math <math>x</math>",
                        "Test message <i>2</i> with math <math>x+y</math>"
                    ]],
                    ["id3", [
                        "Test message <i>1</i> with math <math>x</math>",
                        "Test message <i>2</i> with math <math>x+y</math>"
                    ]],
                    ["id4", [
                        "Test message <i>1</i> with math <math>x</math>",
                        "Test message <i>2</i> with math <math>x+y</math>"
                    ]],
                    ["id5", [
                        "Test message <i>1</i> with math <math>x</math>",
                        "Test message <i>2</i> with math <math>x+y</math>"
                    ]],
                    ["id6", [
                        "Test message <i>1</i> with math <math>x</math>",
                        "Test message <i>2</i> with math <math>x+y</math>"
                    ]],
                    ["id7", [
                        "Test message <i>1</i> with math <math>x</math>",
                        "Test message <i>2</i> with math <math>x+y</math>"
                    ]],
                    ["id8", [
                        "Test message <i>1</i> with math <math>x</math>",
                        "Test message <i>2</i> with math <math>x+y</math>"
                    ]],
                    ["id9", [
                        "Test message <i>1</i> with math <math>x</math>",
                        "Test message <i>2</i> with math <math>x+y</math>"
                    ]],
                    ["id10", [
                        "Test message <i>1</i> with math <math>x</math>",
                        "Test message <i>2</i> with math <math>x+y</math>"
                    ]],
                    ["id11", [
                        "Test message <i>1</i> with math <math>x</math>",
                        "Test message <i>2</i> with math <math>x+y</math>"
                    ]],
                    ["id12", [
                        "Test message <i>1</i> with math <math>x</math>",
                        "Test message <i>2</i> with math <math>x+y</math>"
                    ]],
                    ["id13", [
                        "Test message <i>1</i> with math <math>x</math>",
                        "Test message <i>2</i> with math <math>x+y</math>"
                    ]],
                    ["id14", [
                        "Test message <i>1</i> with math <math>x</math>",
                        "Test message <i>2</i> with math <math>x+y</math>"
                    ]],
                    ["id15", [
                        "Test message <i>1</i> with math <math>x</math>",
                        "Test message <i>2</i> with math <math>x+y</math>"
                    ]],
                    ["id16", [
                        "Test message <i>1</i> with math <math>x</math>",
                        "Test message <i>2</i> with math <math>x+y</math>"
                    ]],
                    ["id17", [
                        "Test message <i>1</i> with math <math>x</math>",
                        "Test message <i>2</i> with math <math>x+y</math>"
                    ]],
                    ["id18", [
                        "Test message <i>1</i> with math <math>x</math>",
                        "Test message <i>2</i> with math <math>x+y</math>"
                    ]],
                    ["id19", [
                        "Test message <i>1</i> with math <math>x</math>",
                        "Test message <i>2</i> with math <math>x+y</math>"
                    ]],
                    ["id20", [
                        "Test message <i>1</i> with math <math>x</math>",
                        "Test message <i>2</i> with math <math>x+y</math>"
                    ]]
                ]`)))
        },

        computed: {
            identificators: function () {
                return Object.keys(this.data);
            },

            data: function () {
                return this.$store.getters.data;
            },

            selectedId: function () {
                return this.$store.getters.selectedId;
            },

            selectedData: function () {
                return this.$store.getters.selectedData;
            },
        },

        methods: {
            addMessage: function () {
                this.$store.commit('ADD_SELECTED_DATA_MESSAGE');
            },

            addIdentificator: function () {
                this.$store.dispatch('addData');
            }
        }
    };
</script>

<style scoped lang="scss">
    $grid: 20, 40, 40;
    table {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: fixed;
        border-collapse: collapse;

        tr:nth-child(1) {
            height: 30px;

            td {
                padding: 0;
            }

            button {
                width: 100%;
                padding: 1px;
                display: block;
                font-size: larger;
                text-align: center;
            }
        }

        tr:nth-child(2) {
            td {
                color: black;

                & > div {
                    height: 100%;
                    overflow: auto;
                }

                &.not-selected {
                    position: relative;
                    width: 80% !important;

                    div {
                        top: 50%;
                        left: 50%;
                        height: auto;
                        max-width: 60%;
                        position: absolute;
                        display: inline-block;
                        transform: translate(-50%, -50%);
                    }
                }
            }

            @for $i from 1 through length($grid) {
                td:nth-child(#{$i}) {
                    vertical-align: top;
                    width: nth($grid, $i) + 0%;
                }
            }

            td:nth-child(1), td:nth-child(3) {
                button {
                    $size: 58px;

                    width: 100%;
                    height: $size;
                    display: block;
                    position: relative;
                    margin-bottom: 4px;

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
                        transform: translate(-1px, -1px);
                    }

                    &:before {
                        transform: translate(1px, 1px) rotate(180deg);
                    }
                }
            }

            td:nth-child(1) {
                background-color: lighten(dimgray, 50);

                div > div {
                    &:last-child /deep/ label {
                        border-bottom: none;
                    }
                }
            }

            td:nth-child(2) {
                padding: 0 10px;
                background-color: whitesmoke;
            }

            td:nth-child(3) {
                background-color: #E6E6E6;
            }
        }
    }
</style>