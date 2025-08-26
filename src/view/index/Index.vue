<template>
    <NavigationBar />
    <Main></Main>
</template>

<script setup>
import NavigationBar from './NavigationBar.vue';
import Main from './Main.vue';
</script>
<style>
/* 去除页面两侧的留白 */
body{
    background-color: rgba(14, 1, 1, 0.632);
    margin: 0;
    padding: 0;
}
</style>