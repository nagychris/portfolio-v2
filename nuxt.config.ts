// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: false },
    css: ['~/assets/styles/main.scss'],

    router: {
        options: {
            scrollBehaviorType: 'smooth',
        },
    },
    modules: ['@nuxt/icon'],
});
