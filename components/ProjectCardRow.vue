<template>
    <Card @click="clickLink" class="background-primary clickable">
        <div class="card-content columns">
            <div class="column">
                <div class="content">
                    <h5 class="has-text-weight-medium">
                        <a
                            v-if="project.url"
                            :href="project.url"
                            target="_blank"
                            ref="link"
                        >
                            {{ project.name }}
                            <Icon name="mdi:external-link" />
                        </a>
                        <span v-else>{{ project.name }}</span>
                    </h5>

                    <p>{{ project.description }}</p>
                    <div class="tags">
                        <span
                            class="tag"
                            v-for="tag in project.tags"
                            :key="tag"
                        >
                            {{ tag }}
                        </span>
                    </div>
                </div>
            </div>
            <div
                class="card-image column is-narrow-tablet is-one-third is-align-content-center"
                v-if="project.image"
            >
                <figure class="image is-3by2">
                    <img :src="project.image.src" :alt="project.image.alt" />
                </figure>
            </div>
        </div>
    </Card>
</template>

<script lang="ts" setup>
import type { Project } from '~/models/project'

const props = defineProps<{
    project: Project
}>()

const link = ref<HTMLAnchorElement | null>(null)
const clickLink = () => {
    if (link.value) {
        link.value.click()
    }
}
</script>

<style scoped lang="scss">
.card {
    cursor: pointer;
}

.tag {
    background: var(--bulma-primary-90);

    &[data-theme='dark'],
    .theme-dark {
        background: var(--bulma-primary);
    }
}

@media (prefers-color-scheme: dark) {
    .tag {
        background: var(--bulma-primary-20);
    }
}

.image.is-3by2 img {
    width: auto;
}
.card-image:last-child img {
    border-radius: 0;
}
</style>
