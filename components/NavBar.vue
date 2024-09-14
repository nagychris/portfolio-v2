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
                    <a
                        v-for="link in links"
                        :key="link.name"
                        :href="link.href"
                        class="navbar-item"
                        @click="toggleNavBar"
                    >
                        {{ link.name }}
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
                                <span class="icon-text">
                                    <span class="icon">
                                        <Icon name="mdi:external-link" />
                                    </span>
                                    <span>Resume</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
const links = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
]

const isActive = ref(false)

const toggleNavBar = () => {
    isActive.value = !isActive.value
}
</script>
