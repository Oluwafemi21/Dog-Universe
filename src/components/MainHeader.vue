<template>
    <header>
        <div class="container">
            <nav>
                <router-link :to="{ name: 'home' }">
                    <h1
                        class="font-bold text-darkBlue dark:text-white md:text-2xl text-xl"
                    >
                        Find a dog for your home
                    </h1>
                </router-link>
                <theme-toggler />
            </nav>
        </div>
    </header>
</template>

<script>
import ThemeToggler from "./ThemeToggler.vue";
// @ is an alias to /src

export default {
    components: { ThemeToggler },
};
</script>
