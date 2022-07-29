<template>
    <section class="home">
        <div class="container">
            <div class="search">
                <form>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-gray-600"
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
                        type="text"
                        placeholder="Search for a dog by breed..."
                    />
                </form>

                <div class="dropdown-menu relative">
                    <button
                        @click="showDropDown"
                        class="text-darkBlue bg-white focus:ring-2 focus:outline-none focus:ring-black font-medium shadow rounded-lg text-sm px-3.5 py-3 text-center inline-flex items-center"
                        type="button"
                    >
                        Dropdown button
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
            <section class="cards">
                <div
                    v-for="(i, index) in 12"
                    :key="index"
                    class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
                >
                    <a href="#">
                        <img
                            class="rounded-t-lg w-full"
                            src="https://via.placeholder.com/400x200"
                            alt=""
                        />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5
                                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                            >
                                Noteworthy technology acquisitions 2021
                            </h5>
                        </a>
                        <p
                            class="mb-3 font-normal text-gray-700 dark:text-gray-400"
                        >
                            Here are the biggest enterprise technology
                            acquisitions of 2021 so far, in reverse
                            chronological order.
                        </p>
                        <a
                            href="#"
                            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Read more
                            <svg
                                aria-hidden="true"
                                class="ml-2 -mr-1 w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>

<script>
// @ is an alias to /src

export default {
    name: "HomeView",
    components: {},
    data() {
        return {
            dropdown: false,
        };
    },
    methods: {
        showDropDown() {
            this.dropdown = !this.dropdown;
        },
    },
};
</script>
