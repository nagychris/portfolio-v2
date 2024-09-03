<template>
    <div>
        <NavBar />
        <main>
            <Hero />
            <About />
            <Work />
            <Projects />
            <Contact />
        </main>
        <FooterBar />
    </div>
</template>

<script lang="ts" setup>
useHead({
    title: "Christopher Nagy's Portfolio",
})
</script>
