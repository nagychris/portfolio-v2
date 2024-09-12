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
import { ImgData } from '~/models/imgData'
import { Project } from '~/models/project'

const projects: Project[] = [
    new Project(
        'Digital Situation Map (DigiMap)',
        'A digital situation map to support an overview emergency mission information, and web-based unit communication via MQTT and WebSocket.',
        [
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
        'https://gitlab.opencode.de/smart-city-bamberg/innovativer-katastrophenschutz',
        new ImgData('/images/lagekarte.png', 'Digitale Lagekarte Screenshots')
    ),
    new Project(
        'Jourly',
        'Native mobile app for mood tracking and journaling based on daily questions for inspiration. Created in a university group project at Blekinge Institute of Technology.',
        ['Android', 'Kotlin'],
        'https://github.com/nagychris/jourly-app',
        new ImgData('/images/jourly.png', 'Jourly Screenshots')
    ),
    new Project(
        'UniGrade',
        'Grade tracking and course tracking app for university students, automatically calculates relevant metrics like GPA and total credits.',
        ['Angular', 'TypeScript', 'Ionic'],
        'https://github.com/nagychris/unigrade-app',
        new ImgData('/images/unigrade.png', 'UniGrade Screenshots')
    ),
    new Project(
        'Portfolio v2',
        'Second version of my personal portfolio website built with Nuxt and Vue 3.',
        ['VueJS', 'TypeScript', 'Nuxt 3', 'Bulma'],
        'https://github.com/nagychris/portfolio-v2',
        new ImgData('/images/portfolio-v2.png', 'Portfolio v2 Screenshots')
    ),
]
</script>
