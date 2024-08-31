<template>
    <section class="container">
        <div class="section" id="work">
            <h1 class="title">Work Experience</h1>
            <div>
                <WorkStationCard>
                    <template #title>
                        Software Engineer @
                        <a href="https://lion5.io" target="_blank"> Lion5</a>,
                        Bamberg
                    </template>
                    <template #year> 2022 – 2024 </template>
                    <template #icon>
                        <img
                            src="https://media.licdn.com/dms/image/C4D0BAQHfDuy7bBBpYg/company-logo_200_200/0/1627397753995?e=2147483647&v=beta&t=quT6lVgjLaAJVed8Sf4W7nWdX3_GCgNGxKS0zt1pfCw"
                            alt="Lion5 Logo"
                    /></template>
                    <template #experience>
                        <ul>
                            <li>
                                Maintained and enhanced the web-based digital
                                voucher platform Bamberg Gutschein, working both
                                in frontend (VueJS, JS), backend (SpringBoot,
                                Java, Kotlin).
                            </li>
                            <li>
                                Created a prototypical digital situation map to
                                support web-based unit communication in a
                                startup-like project, considering
                                domain-specific requirements and iterative
                                customer feedback (c.f. Projects).
                            </li>
                            <li>
                                Applied CI/CD and DevOps principles by
                                continuously and automatically testing and
                                deploying microservices using GitHub Actions,
                                Docker, Kubernetes, and GCP.
                            </li>
                            <li>
                                Designed and optimized UI screens and workflows
                                based on user feedback and requirements to
                                increase the adoption of web or mobile tools
                                using Figma.
                            </li>
                        </ul>
                    </template>
                </WorkStationCard>
                <WorkStationCard>
                    <template #title>
                        Frontend Developer @
                        <a href="https://perbility.de" target="_blank">
                            Perbility</a
                        >, Bamberg
                    </template>
                    <template #year> 2021 – 2022 </template>
                    <template #icon>
                        <img
                            src="https://assets.kununu.com/media/prod/profiles/logos/64379300-2cec-4842-9558-6f96b54d5c16_1_5f6ce0b421d41.gif"
                            alt="Perbility Logo"
                    /></template>
                    <template #experience>
                        <ul>
                            <li>
                                Extended and verified the large-scale HR
                                application HELIX using the JavaScript framework
                                Sencha Ext JS.
                            </li>
                            <li>
                                Developed a mobile application of HELIX using
                                bridging tools like Capacitor to reuse parts of
                                the application code, while optimizing the
                                experience for mobile devices using user
                                feedback.
                            </li>
                        </ul>
                    </template>
                </WorkStationCard>
                <WorkStationCard>
                    <template #title>
                        Automated Testing Engineer @
                        <a href="https://perbility.de" target="_blank">
                            Perbility</a
                        >, Bamberg
                    </template>
                    <template #year> 2020 - 2021 </template>
                    <template #icon>
                        <img
                            src="https://assets.kununu.com/media/prod/profiles/logos/64379300-2cec-4842-9558-6f96b54d5c16_1_5f6ce0b421d41.gif"
                            alt="Perbility Logo"
                    /></template>
                    <template #experience>
                        <ul>
                            <li>
                                Increased the stability of web applications by
                                writing automated end-to-end/GUI-Tests, using
                                the JavaScript framework Bryntum Siesta.
                            </li>
                        </ul>
                    </template>
                </WorkStationCard>
            </div>
        </div>
    </section>
</template>
