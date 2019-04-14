<template>
    <ul>
        <li>
            <button @click.self="upload()"></button>
            <span>Загрузить</span>
        </li>
        <li>
            <button @click.self="editor()"></button>
            <span>Новый</span>
        </li>
        <li>
            <button @click.self="download()" :disabled="Object.keys(data).length === 0"></button>
            <span>Скачать</span>
        </li>
    </ul>
</template>

<script>
    // @ is an alias to /src
    import {download, mapToObject, upload} from "@/utils";

    export default {
        name: "menu-component",

        methods: {
            upload: function () {
                upload((file) => {
                    this.data = mapToObject(JSON.parse(file));
                    this.$router.push({name: 'editor'})
                });
            },

            editor: function () {
                this.data = {};
                this.$router.push({name: 'editor'})
            },

            download: function () {
                log(this.data);
                download.call(this, this.data, 'output.json')
            }
        },

        computed: {
            data: {
                get () {
                    return this.$store.getters.data;
                },

                set (value) {
                    this.$store.commit('UPDATE_DATA', value);
                }
            }
        }
    };
</script>

<style scoped lang="scss">
    ul {
        top: 50%;
        left: 50%;
        width: 60%;
        padding: 0;
        margin: auto;
        list-style: none;
        overflow: hidden;
        position: absolute;
        border-radius: 4px;
        transform: translate(-50%, -50%);

        li {
            position: relative;
            width: 33.33333333%;
            margin-bottom: -4px;
            display: inline-block;
            background-color: rebeccapurple;

            &:before, &:after {
                content: '';
                display: block;
            }

            &:after {
                padding-bottom: 100%;
            }

            &:before {
                top: 50%;
                left: 50%;
                z-index: 1;
                position: absolute;
                pointer-events: none;
                transform: translate(-50%, -70%);
            }

            &:nth-child(1), &:nth-child(3) {
                &:before {
                    $size: 40%;
                    $width: 13px;

                    width: $size;
                    height: $size;
                    border-top: $width solid;
                    border-left: $width solid;
                    transform: translate(-50%, -50%) rotate(45deg) translate(5%, 5%);
                }
            }

            &:nth-child(3) {
                &:before {
                    transform: translate(-50%, -50%) rotate(225deg) translate(40%, 40%);
                }
            }

            &:nth-child(2) {
                &:before {
                    content: '+';
                    font-size: 10rem;
                    text-align: center;
                }
            }

            button {
                width: 100%;
                height: 100%;
                position: absolute;

                & + span {
                    top: 50%;
                    left: 50%;
                    margin-top: 60px;
                    font-size: 1.6rem;
                    position: absolute;
                    pointer-events: none;
                    transform: translateX(-50%);
                }

                &:disabled + span {
                    color: dimgray;
                }
            }
        }
    }
</style>
