<template>
  <div class="home-page">
    <HeroSection />
    <PainPointSection />
    <ServicesSection />
    <AboutSection />
    <TestimonialsSection />
    <ResidentialServicesSection />
    <BeforeAfterSection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '~/components/sections/HeroSection.vue'
import PainPointSection from '~/components/sections/PainPointSection.vue'
import ServicesSection from '~/components/sections/ServicesSection.vue'
import ResidentialServicesSection from '~/components/sections/ResidentialServicesSection.vue'
import BeforeAfterSection from '~/components/sections/BeforeAfterSection.vue'
import AboutSection from '~/components/sections/AboutSection.vue'
import TestimonialsSection from '~/components/sections/TestimonialsSection.vue'
import ContactSection from '~/components/sections/ContactSection.vue'

useSeoMeta({
  title: 'HydroGlow — Guardião de Piscina no Rio de Janeiro',
  description: 'Serviço profissional de Guardião de Piscina no Rio de Janeiro. Segurança aquática, conformidade com normas e treinamento certificado para condomínios, clubes e hotéis.',
  ogTitle: 'HydroGlow — Guardião de Piscina no Rio de Janeiro',
  ogDescription: 'Serviço profissional de Guardião de Piscina no Rio de Janeiro. Segurança aquática para condomínios e clubes.',
  ogType: 'website',
  ogImage: '/images/hero/hero_bg.png'
})
</script>

<style scoped>
/* O layout global está sendo herdado via variables e main.css, esta página age como root view */
</style>
