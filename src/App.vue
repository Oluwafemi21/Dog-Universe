<template>
    <main-header />
    <router-view />
    <p
        class="dark:text-white text-darkBlue font-bold text-center py-6 bg-transparent"
    >
        Copyright &copy; 2022. DogFinder
    </p>
</template>

<script>
import MainHeader from "./components/MainHeader.vue";

export default {
    components: { MainHeader },
};
</script>
