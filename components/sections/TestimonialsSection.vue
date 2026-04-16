<template>
  <section id="depoimentos" class="section">
    <div class="container overflow-hidden">
      <div class="section__header">
        <span class="badge badge--pill">Prova Social</span>
        <h2 class="section__title">O que dizem nossos clientes</h2>
        <p class="section__subtitle">A confiança de síndicos e gestores que escolheram dormir tranquilos sabendo que suas piscinas estão seguras e legais.</p>
      </div>

      <Carousel :value="testimonials" :numVisible="3" :numScroll="1" :circular="true" :responsiveOptions="responsiveOptions" class="testimonials-carousel" :autoplayInterval="5000">
        <template #item="slotProps">
          <div class="testimonial-card">
            <div class="quote-icon">
              <i class="pi pi-quote-left"></i>
            </div>
            <p class="testimonial-content">"{{ slotProps.data.content }}"</p>
            <div class="testimonial-author">
              <div class="author-avatar">
                <i class="pi pi-user"></i>
              </div>
              <div class="author-info">
                <strong>{{ slotProps.data.name }}</strong>
                <span>{{ slotProps.data.role }}</span>
              </div>
            </div>
          </div>
        </template>
      </Carousel>

      <div class="clients-marquee-section">
        <h3 class="clients-title">Nossos Clientes</h3>
        <div class="marquee-container">
          <div class="marquee-track">
            <div v-for="client in clients" :key="client.id" class="marquee-item">
              <div class="marquee-image-wrapper">
                <img :src="client.image" :alt="client.name" class="marquee-image" />
              </div>
              <span class="marquee-name">{{ client.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import imgNovaBarra from '~/assets/images/clientes/nova_barra.jpg'
import imgParqueSonhos from '~/assets/images/clientes/parque-dos-sonhos.jpg'
import imgRioJazz from '~/assets/images/clientes/rio-jazz.jpg'
import imgVilleBlanche from '~/assets/images/clientes/ville-blanche.png'

const baseClients = [
  { name: 'Nova Barra', image: imgNovaBarra },
  { name: 'Parque dos Sonhos', image: imgParqueSonhos },
  { name: 'Rio Jazz', image: imgRioJazz },
  { name: 'Ville Blanche', image: imgVilleBlanche }
]

const clients = ref([
  ...baseClients.map((c, i) => ({ ...c, id: `a-${i}` })),
  ...baseClients.map((c, i) => ({ ...c, id: `b-${i}` })),
  ...baseClients.map((c, i) => ({ ...c, id: `c-${i}` })),
  ...baseClients.map((c, i) => ({ ...c, id: `d-${i}` }))
])

const responsiveOptions = ref([
  {
    breakpoint: '1024px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '768px',
    numVisible: 1,
    numScroll: 1
  }
])

const testimonials = ref([
  {
    id: 1,
    content: "Antes da HydroGlow, a gestão dos guardiões era uma dor de cabeça constante. Faltas, processos trabalhistas... Hoje a responsabilidade é deles e o serviço é impecável. Nunca ficamos na mão.",
    name: "Carlos Eduardo",
    role: "Síndico (Cond. Barra Classic)"
  },
  {
    id: 2,
    content: "Tivemos uma fiscalização surpresa do CBMERJ e graças à documentação e ao treinamento da equipe da HydroGlow no local, fomos elogiados. Profissionalismo que vale cada centavo.",
    name: "Mariana Silva",
    role: "Gestora Operacional (Hotel Leblon)"
  },
  {
    id: 3,
    content: "A qualidade da água também melhorou absurdamente desde que assumiram. O guardião não só fiscaliza a segurança, mas garante o protocolo rigoroso de PH. Recomendo fortemente.",
    name: "Roberto Nunes",
    role: "Síndico Profissional"
  },
  {
    id: 4,
    content: "Atendimento 100%. A substituição cobrindo feriados e imprevistos funciona de verdade. Trouxeram muita paz para nossa gestão.",
    name: "Fernanda Costa",
    role: "Diretora de Clube"
  }
])
</script>

<style scoped>
.badge--pill {
  display: inline-block;
  background-color: var(--color-primary-100);
  color: var(--color-primary);
  padding: var(--spacing-1) var(--spacing-4);
  border-radius: var(--border-radius-full);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-4);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.testimonials-carousel {
  margin-top: var(--spacing-10);
  padding-bottom: var(--spacing-8);
}

.testimonial-card {
  background-color: var(--color-white);
  border: 1px solid var(--color-border-light);
  border-radius: var(--border-radius-xl);
  padding: var(--spacing-8);
  margin: 0 var(--spacing-3);
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: box-shadow var(--transition);
}

.testimonial-card:hover {
  box-shadow: var(--shadow-lg);
}

.quote-icon {
  margin-bottom: var(--spacing-4);
}

.quote-icon i {
  font-size: 2rem;
  color: var(--color-primary-200);
}

.testimonial-content {
  font-size: var(--font-size-base);
  color: var(--color-text);
  font-style: italic;
  flex: 1;
  margin-bottom: var(--spacing-8);
  line-height: var(--line-height-relaxed);
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
}

.author-avatar {
  width: 50px;
  height: 50px;
  background-color: var(--color-primary-50);
  border-radius: var(--border-radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
}

.author-avatar i {
  font-size: 1.5rem;
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author-info strong {
  color: var(--color-primary-dark);
  font-size: var(--font-size-base);
}

.author-info span {
  color: var(--color-text-light);
  font-size: var(--font-size-sm);
}

:deep(.p-carousel-indicator.p-highlight button) {
  background-color: var(--color-accent) !important;
}

.clients-marquee-section {
  margin-top: var(--spacing-16);
  border-top: 1px solid var(--color-border-light);
  padding-top: var(--spacing-10);
}

.clients-title {
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--color-text-light);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--spacing-8);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.marquee-container {
  overflow: hidden;
  position: relative;
  width: 100%;
  padding: var(--spacing-4) 0;
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.marquee-container::before,
.marquee-container::after {
  content: "";
  position: absolute;
  top: 0;
  width: 10%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
}
.marquee-container::before {
  left: 0;
  background: linear-gradient(to right, var(--color-background) 0%, transparent 100%);
}
.marquee-container::after {
  right: 0;
  background: linear-gradient(to left, var(--color-background) 0%, transparent 100%);
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: scroll-marquee 25s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}

@keyframes scroll-marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-25%); }
}

.marquee-item {
  display: flex;
  flex-direction: column;
  width: 280px;
  background-color: var(--color-white);
  border: 1px solid var(--color-border-light);
  border-radius: var(--border-radius-xl);
  overflow: hidden;
  margin-right: var(--spacing-8);
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.marquee-item:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.marquee-image-wrapper {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background-color: var(--color-background-alt);
}

.marquee-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.marquee-name {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary-dark);
  padding: var(--spacing-4) var(--spacing-5);
  text-align: left;
}
</style>
