<template>
    <section class="section container" id="projects">
        <h1 class="title">Projects</h1>
        <div class="is-flex is-flex-direction-column">
            <ProjectCardRow
                :key="project.name"
                v-for="project in projects"
                :project="project"
            />
        </div>
    </section>
</template>

<script lang="ts" setup>
import type { Project } from '~/models/project'

const projects: Project[] = [
    {
        name: 'Digital Situation Map (DigiMap)',
        description:
            'A digital situation map to support an overview emergency mission information, and web-based unit communication via MQTT and WebSocket.',
        image: {
            url: '/images/lagekarte.png',
            alt: 'Digitale Lagekarte Screenshots',
        },
        url: 'https://gitlab.opencode.de/smart-city-bamberg/innovativer-katastrophenschutz',
        tags: [
            'VueJS',
            'VitePWA',
            'SpringBoot',
            'Kotlin',
            'MongoDB',
            'EventStoreDB',
            'Mosquitto',
            'Docker',
            'Kubernetes',
            'GCP',
        ],
    },
    {
        name: 'Jourly',
        description:
            'Native mobile app for mood tracking and journaling based on daily questions for inspiration. Created in a university group project at Blekinge Institute of Technology.',
        tags: ['Android', 'Kotlin'],
        image: {
            url: '/images/jourly.png',
            alt: 'Jourly Screenshots',
        },
        url: 'https://github.com/nagychris/jourly-app',
    },
    {
        name: 'UniGrade',
        description:
            'Grade tracking and course tracking app for university students, automatically calculates relevant metrics like GPA and total credits.',
        tags: ['Angular', 'TypeScript', 'Ionic'],
        image: {
            url: '/images/unigrade.png',
            alt: 'UniGrade Screenshots',
        },
        url: 'https://github.com/nagychris/unigrade-app',
    },
    {
        name: 'Portfolio v2',
        description:
            'Second version of my personal portfolio website built with Nuxt and Vue 3.',
        tags: ['VueJS', 'TypeScript', 'Nuxt 3', 'Bulma'],
        image: {
            url: '/images/portfolio-v2.png',
            alt: 'Portfolio v2 Screenshots',
        },
        url: 'https://github.com/nagychris/portfolio-v2',
    },
]
</script>
