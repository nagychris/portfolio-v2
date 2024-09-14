<template>
    <Card>
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img
                            :src="workStation.icon.src"
                            :alt="workStation.icon.alt"
                        />
                    </figure>
                </div>

                <div class="media-content content">
                    <h5 class="has-text-weight-medium mb-2">
                        {{ workStation.position }} @
                        <a :href="workStation.companyUrl"
                            >{{ workStation.company }}
                        </a>
                    </h5>
                    <p class="is-family-monospace subtitle is-6">
                        {{ workStation.period }}
                    </p>
                </div>
            </div>
            <div class="content">
                <ul>
                    <li
                        v-for="experience in workStation.experience"
                        :key="experience"
                    >
                        {{ experience }}
                    </li>
                </ul>
            </div>
        </div>
    </Card>
</template>
<script lang="ts" setup>
import type { WorkStation } from '~/models/workStation'

const props = defineProps<{
    workStation: WorkStation
}>()
</script>
