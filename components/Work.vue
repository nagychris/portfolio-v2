<template>
    <section class="container">
        <div class="section" id="work">
            <h1 class="title">Work Experience</h1>
            <div>
                <WorkStationCard
                    v-for="workStation in workStations"
                    :key="workStation.position"
                    :workStation="workStation"
                />
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>
import { ImgData } from '~/models/imgData'
import { WorkStation } from '~/models/workStation'

const workStations = [
new WorkStation(
        'Junior Full-Stack Engineer',
        'mediaire',
        'https://mediaire.ai',
        'Berlin',
        '2024 – present',
        ['Building AI tools for MRI-based radiology, ensuring more efficient and reliable diagnoses.', 'Implementing an annotation viewer for medical 3D images using Cornerstone3D, TypeScript and React.'],
        new ImgData(
            'images/mediaire.png',
            'mediaire Logo'
        )
    ),
    new WorkStation(
        'Software Engineer',
        'Lion5',
        'https://lion5.io',
        'Bamberg',
        '2022 – 2024',
        [
            'Maintained and enhanced scalable, cloud-native web applications and their APIs, applying REST principles and using technologies like SpringBoot, Java, and Vue.js with TypeScript.',
            'Extended end-to-end and unit test suites to increase stability and reliability of web-based systems.',
            'Designed and implemented performant, user-centered UI screens and workflows using Figma and Vue.js.',
            'Continuously integrated and deployed microservice-based architectures in a Kubernetes cluster within GCP.',
        ],
        new ImgData(
            'https://media.licdn.com/dms/image/C4D0BAQHfDuy7bBBpYg/company-logo_200_200/0/1627397753995?e=2147483647&v=beta&t=quT6lVgjLaAJVed8Sf4W7nWdX3_GCgNGxKS0zt1pfCw',
            'Lion5 Logo'
        )
    ),
    new WorkStation(
        'Frontend Developer',
        'Perbility',
        'https://perbility.de',
        'Bamberg',
        '2021 – 2022',
        [
            'Verified and extended the low-code framework HELIX using JavaScript, ExtJS, and Bryntum Siesta.',
            'Supported development of a hybrid mobile app using Capacitor to re-use existing web application code.',
        ],
        new ImgData(
            'https://assets.kununu.com/media/prod/profiles/logos/64379300-2cec-4842-9558-6f96b54d5c16_1_5f6ce0b421d41.gif',
            'Perbility Logo'
        )
    ),
    new WorkStation(
        'Test Automation Engineer',
        'Perbility',
        'https://perbility.de',
        'Bamberg',
        '2020 - 2021',
        [
            'Created and curated automated GUI tests using JavaScript, increasing reliability of the HELIX platform.',
            'Switched to frontend developer role due to pro-active engagement and extensive motivation to learn.',
        ],
        new ImgData(
            'https://assets.kununu.com/media/prod/profiles/logos/64379300-2cec-4842-9558-6f96b54d5c16_1_5f6ce0b421d41.gif',
            'Perbility Logo'
        )
    ),
]
</script>
