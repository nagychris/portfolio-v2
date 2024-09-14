<template>
    <div class="level">
        <SkillCard v-for="skill in skills" :key="skill.title" :skill="skill" />
    </div>
</template>

<script lang="ts" setup>
import type { Skill } from '~/models/skill'

defineProps<{
    skills: Skill[]
}>()
</script>

<style>
.level {
    align-items: unset;
}
</style>
