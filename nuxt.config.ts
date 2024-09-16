import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

app: {
  head: {
    title: 'DannUI',
    meta: [
      { name: 'description', content: 'DannUI is a UI library for Vue 3 and Tailwind CSS' },
      { name: 'keywords', content: 'vue, vue3, tailwind, tailwindcss, ui, library, component' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow' },
      { charset: 'utf-8' },
    ],
  },
},
});