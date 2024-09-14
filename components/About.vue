<template>
    <section class="section container" id="about">
        <h1 class="title">About Me</h1>
        <div class="content">
            <div class="level is-align-items-flex-start">
                <div>
                    <figure class="image is-128x128">
                        <img
                            loading="lazy"
                            class="is-rounded"
                            src="public/images/me.jpg"
                        />
                    </figure>
                </div>
                <div>
                    <p class="mb-3">
                        Hi, I'm Chris, a passionate software engineer who loves
                        building user-friendly applications that solve
                        real-world problems. Since my first contact with
                        professional software engineering as a testing working
                        student in 2020, I have been fascinated by the
                        possibilities of creating applications to support people
                        in their daily lives. Since then, I have pro-actively
                        grown my skillset from testing, to frontend engineering
                        roles, and being a full-stack developer. I have been
                        collecting valuable experiences in designing,
                        developing, and testing robust and efficient web
                        applications, either during my M.Sc. Applied Computer
                        Science degree, my working student jobs at different
                        companies, or my projects. I love to work in small and
                        agile teams, where I can have a direct impact on the
                        product's adoption and the customer's satisfaction.
                    </p>
                    <p class="mb-3">
                        If I'm not currently being productive on my laptop, I
                        like to play team sports 🏀, do yoga 🧘, or read books
                        📚. I also love to listen to all kinds of music or
                        produce my own tracks.
                    </p>
                    <p>
                        I am most proficient with modern technologies like
                        <i
                            >VueJS, TypeScript, HTML/CSS, Kotlin, Java, Spring
                            Boot, Docker, Kubernetes, GCP,</i
                        >
                        etc.
                    </p>
                    <p>
                        However, I do not limit myself to a specific stack or
                        language. My open-mindedness and my ability to transfer
                        my knowledge to new technologies and concepts have
                        always determined my professional success.
                    </p>
                </div>
            </div>
            <SkillList :skills="skills" />
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Skill } from '~/models/skill'

const skills = [
    new Skill(
        'Full-Stack Web Development',
        'mdi:web',
        'Designing distributed architectures and implementing customer-oriented web applications with modern technologies like VueJS, TypeScript, SpringBoot, Java, Kotlin, and Kubernetes.'
    ),
    new Skill(
        'Passionate about UX/UI Design',
        'mdi:palette',
        'Creating user-centered UIs and workflows with VueJS, TypeScript. Proficient in Figma for designing and prototyping. Using modern design systems like Material Design or Bulma.'
    ),
    new Skill(
        'Mobile-First, Native Apps & PWA',
        'mdi:cellphone',
        'Focus on mobile-first web apps, cross-platform and native mobile apps, using Flutter, Ionic, or Android with Kotlin. Implementing PWAs as a web-based alternative, e.g., using VueJS and VitePWA.'
    ),
]
</script>
