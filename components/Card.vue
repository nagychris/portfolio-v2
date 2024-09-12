<template>
    <div class="card">
        <slot />
    </div>
</template>

<style scoped lang="scss">
.card {
    --bulma-card-shadow: unset;

    &.background-primary {
        --bulma-card-background-color: var(--bulma-background);
    }
    &.clickable:hover {
        --bulma-card-background-color: var(--bulma-background-hover);
    }
}
</style>
