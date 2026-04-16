// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@primevue/nuxt-module',
    '@nuxt/fonts',
    '@nuxtjs/seo',
  ],

  // PrimeVue com tema Aura customizado
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: false,
          cssLayer: {
            name: 'primevue',
            order: 'primevue, app',
          },
        },
      },
      ripple: true,
    },
  },

  // Fonte Inter via Google Fonts (otimizado)
  fonts: {
    families: [
      {
        name: 'Inter',
        provider: 'google',
        weights: [300, 400, 500, 600, 700],
      },
    ],
  },

  // SEO global
  site: {
    url: 'https://hydroglow.com.br',
    name: 'HydroGlow - Guardião de Piscina',
    description: 'Serviço profissional de Guardião de Piscina no Rio de Janeiro. Segurança aquática, conformidade com normas e treinamento certificado para condomínios, clubes e hotéis.',
    defaultLocale: 'pt-BR',
  },

  // CSS global
  css: [
    '~/assets/css/variables.css',
    '~/assets/css/main.css',
  ],

  // OG Image — modo estático (sem renderização dinâmica)
  ogImage: {
    enabled: false,
  },

  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    },
  },
})
