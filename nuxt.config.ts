// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  colorMode: {
    preference: 'light'
  },
  app: {
    head: {
      title: 'Nuxt Gojo',
      meta: [
        { name: 'description', content: 'Everything about Nuxt 3.'}
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ]
    }
  }
});
