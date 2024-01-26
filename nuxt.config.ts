// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxtjs/device",
    "@nuxtjs/color-mode"
  ],

  css: ['~/assets/css/main.css'],

  device: {
    refreshOnResize: true
  }

})