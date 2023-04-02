// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
      strict: false
    },
    modules: [
      "@nuxtjs/google-fonts", '@nuxtjs/tailwindcss', 'nuxt-icon', '@pinia/nuxt', 'nuxt-swiper'
    ],
    googleFonts: {
        download: true,
        base64: true,
        overwriting: false,
        families: {
          Roboto: true,
          'Josefin+Sans': true,
          Lato: [100, 300, 400],
          Poppins: {
            wght: [100,400, 500, 600, 700, 800],
            ital: [100]
          },
        }
    },
    runtimeConfig: {
      API_URL: process.env.API_URL
    },
});