<template>
    <header class="sticky top-0 z-50">
        <nav
            class="navbar is-fixed-top"
            role="navigation"
            aria-label="main navigation"
        >
            <div class="navbar-brand">
                <a
                    role="button"
                    class="navbar-burger"
                    :class="{ 'is-active': isActive }"
                    @click="toggleNavBar"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbar"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div class="navbar-menu" :class="{ 'is-active': isActive }">
                <div class="navbar-start">
                    <NuxtLink class="navbar-item" to="/" @click="toggleNavBar">
                        Home
                    </NuxtLink>
                    <NuxtLink
                        class="navbar-item"
                        :to="{ hash: '#about' }"
                        @click="toggleNavBar"
                    >
                        About
                    </NuxtLink>
                    <NuxtLink
                        class="navbar-item"
                        :to="{ hash: '#work' }"
                        @click="toggleNavBar"
                    >
                        Work
                    </NuxtLink>
                    <NuxtLink
                        class="navbar-item"
                        :to="{ hash: '#contact' }"
                        @click="toggleNavBar"
                    >
                        Contact
                    </NuxtLink>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a
                                class="button is-light"
                                href="/resume-christopher-nagy.pdf"
                                target="_blank"
                            >
                                <span>Resume</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
const isActive = ref(false);

const toggleNavBar = () => {
    isActive.value = !isActive.value;
};
</script>
