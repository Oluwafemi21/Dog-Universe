<template>
    <main-header />
    <home-view></home-view>
</template>

<script>
import MainHeader from "./components/MainHeader.vue";
import HomeView from "./views/HomeView.vue";
export default {
    components: { HomeView, MainHeader },
};
</script>

<style>
body {
    background-color: hsl(0, 0%, 98%);
    min-height: 100vh;
    width: 100vw;
    overflow-x: hidden;
}
</style>
