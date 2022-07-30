<template>
    <section class="my-8">
        <div class="container">
            <div class="flex items-center justify-between my-9 flex-wrap gap-6">
                <form
                    class="flex flex-wrap items-center gap-6"
                    @submit.prevent="searchDog"
                >
                    <div class="search">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 text-gray-600 dark:text-lightGrey"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                        <input
                            v-model="breed"
                            type="text"
                            placeholder="Search for a dog by breed..."
                        />
                    </div>
                    <button
                        type="submit"
                        class="py-2 px-6 rounded bg-blue-900 text-white"
                    >
                        Search
                    </button>
                </form>

                <div class="dropdown-menu relative">
                    <button
                        @click="showDropDown"
                        class="text-darkBlue bg-white focus:ring-2 focus:outline-none focus:ring-black font-medium shadow rounded-lg text-sm px-3.5 py-2.5 text-center inline-flex items-center dark:bg-darkElement dark:text-white dark:focus-within:ring-white hover:ring-white hover:ring-2"
                        type="button"
                    >
                        Filter by Breed
                        <svg
                            class="ml-2 w-4 h-4"
                            aria-hidden="true"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                            ></path>
                        </svg>
                    </button>
                    <!-- Dropdown menu -->
                    <div
                        v-if="dropdown"
                        class="absolute mt-3 top-auto bottom-auto right-auto left-0 z-10 w-40 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                    >
                        <ul
                            class="py-1 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownDefault"
                        >
                            <li>
                                <a
                                    href="#"
                                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >Dashboard</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >Settings</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >Earnings</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >Sign out</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p v-show="searchResult">{{ searchResult }}</p>
            <dog-card :dogs="getDogs" />
        </div>
    </section>
</template>

<script>
import DogCard from "@/components/DogCard.vue";
import { mapGetters, mapActions } from "vuex";
// @ is an alias to /src

export default {
    name: "HomeView",
    components: { DogCard },
    data() {
        return {
            dropdown: false,
            breed: "",
            searchResult: "",
        };
    },
    methods: {
        ...mapActions(["fetchDogs", "searchDogs"]),
        showDropDown() {
            this.dropdown = !this.dropdown;
        },
        searchDog() {
            this.searchDogs(this.breed);
            this.searchResult = `Search results for "${this.breed}"`;
        },
    },
    computed: {
        ...mapGetters(["getDogs"]),
    },
    created() {
        this.fetchDogs();
    },
};
</script>
