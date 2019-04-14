<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
    body {
        margin: 0;
        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;

        button {
            cursor: pointer;

            &:disabled {
                cursor: not-allowed;
            }
        }
    }
</style>
