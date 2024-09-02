<template>
    <div class="card">
        <slot />
    </div>
</template>

<style scoped lang="scss">
.card {
    --bulma-card-shadow: unset;
    &:hover {
        --bulma-card-background-color: var(--bulma-background);
    }
}
</style>
