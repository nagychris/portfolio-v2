<template>
    <header>
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
                    <a class="navbar-item" href="#" @click="toggleNavBar">
                        Home
                    </a>
                    <a class="navbar-item" href="#about" @click="toggleNavBar">
                        About
                    </a>
                    <a class="navbar-item" href="#work" @click="toggleNavBar">
                        Work
                    </a>
                    <a
                        class="navbar-item"
                        href="#contact"
                        @click="toggleNavBar"
                    >
                        Contact
                    </a>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a
                                class="button is-primary"
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
const isActive = ref(false)

const toggleNavBar = () => {
    isActive.value = !isActive.value
}
</script>
