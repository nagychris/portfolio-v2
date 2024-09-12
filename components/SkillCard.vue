<template>
    <Card class="background-primary mb-0">
        <div
            class="card-content is-flex is-flex-direction-column is-align-items-center has-text-centered"
        >
            <h5>{{ skill.title }}</h5>
            <Icon :size="64" :name="skill.iconName" />
            <p>{{ skill.description }}</p>
        </div>
    </Card>
</template>

<script lang="ts" setup>
import type { Skill } from '~/models/skill'

const props = defineProps<{
    skill: Skill
}>()
</script>

<style scoped lang="scss">
.iconify {
    color: var(--bulma-primary);
    margin-bottom: var(--bulma-block-spacing);
}
</style>
