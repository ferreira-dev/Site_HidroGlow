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
                <img :src="slotProps.data.avatar" :alt="slotProps.data.name" class="avatar-img" />
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
        <Carousel :value="clients" :numVisible="4" :numScroll="1" :circular="true" :responsiveOptions="clientsResponsiveOptions" class="clients-carousel" :autoplayInterval="3000">
          <template #item="slotProps">
            <div class="marquee-item">
              <div class="marquee-image-wrapper" @click="openModal(slotProps.data)" title="Ver foto ampliada">
                <img :src="slotProps.data.image" :alt="slotProps.data.name" class="marquee-image" />
                <div class="zoom-overlay"><i class="pi pi-search-plus"></i></div>
              </div>
              <span class="marquee-name">{{ slotProps.data.name }}</span>
            </div>
          </template>
        </Carousel>
      </div>

      <Dialog v-model:visible="displayModal" :modal="true" :header="selectedClient?.name" :dismissableMask="true" :style="{ width: '90vw', maxWidth: '900px' }">
        <div class="modal-image-container" v-if="selectedClient">
          <Carousel v-if="selectedClient.gallery && selectedClient.gallery.length > 1" :value="selectedClient.gallery" :numVisible="1" :numScroll="1" :circular="true" class="modal-carousel">
            <template #item="slotProps">
              <img :src="slotProps.data" :alt="selectedClient.name" class="expanded-image" />
            </template>
          </Carousel>
          <img v-else :src="selectedClient.image" :alt="selectedClient.name" class="expanded-image" />
        </div>
      </Dialog>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import imgNovaBarra from '~/assets/images/clientes/nova_barra.jpg'
import imgNovaBarra2 from '~/assets/images/clientes/nova-barra-2.jpg'
import imgParqueSonhos from '~/assets/images/clientes/parque-dos-sonhos.jpg'
import imgRioJazz from '~/assets/images/clientes/rio-jazz.jpg'
import imgRioJazz2 from '~/assets/images/clientes/rio-jazz-2.jpg'
import imgRioJazz3 from '~/assets/images/clientes/rio-jazz-3.jpg'
import imgVilleBlanche from '~/assets/images/clientes/ville-blanche.png'
import imgVilleBlanche2 from '~/assets/images/clientes/ville-blanche-2.jpg'
import imgBaiaco1 from '~/assets/images/clientes/baiaco-1.jpg'
import imgBaiaco2 from '~/assets/images/clientes/baiaco-2.jpg'

const baseClients = [
  { name: 'Nova Barra', image: imgNovaBarra, gallery: [imgNovaBarra, imgNovaBarra2] },
  { name: 'Parque dos Sonhos', image: imgParqueSonhos },
  { name: 'Rio Jazz', image: imgRioJazz, gallery: [imgRioJazz, imgRioJazz2, imgRioJazz3] },
  { name: 'Ville Blanche', image: imgVilleBlanche, gallery: [imgVilleBlanche, imgVilleBlanche2] },
  { name: 'Sítio do Baiaco', image: imgBaiaco1, gallery: [imgBaiaco1, imgBaiaco2] }
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

const clientsResponsiveOptions = ref([
  {
    breakpoint: '1200px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '992px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '576px',
    numVisible: 1,
    numScroll: 1
  }
])

const testimonials = ref([
  {
    id: 1,
    content: "Antes da HydroGlow, a gestão dos guardiões era uma dor de cabeça constante. Faltas, processos trabalhistas... Hoje a responsabilidade é deles e o serviço é impecável. Nunca ficamos na mão.",
    name: "Carlos Eduardo",
    role: "Síndico (Condomínio Nova Barra)",
    avatar: "https://api.iconify.design/ph:user-circle-fill.svg?color=%2394a3b8"
  },
  {
    id: 2,
    content: "A qualidade da água também melhorou absurdamente desde que assumiram. O guardião não só fiscaliza a segurança, mas garante o protocolo rigoroso de Cloro e PH. Recomendo fortemente.",
    name: "Roberto Nunes",
    role: "Gestor (Residencial Parque dos Sonhos)",
    avatar: "https://api.iconify.design/ph:user-circle-fill.svg?color=%2394a3b8"
  },
  {
    id: 3,
    content: "Atendimento 100%. A substituição cobrindo folgas, feriados e imprevistos funciona de verdade. Trouxeram muita paz para nossa gestão do Condomínio.",
    name: "Fernanda Costa",
    role: "Preposta (Condomínio Rio Jazz)",
    avatar: "https://api.iconify.design/ph:user-circle-fill.svg?color=%2394a3b8"
  },
  {
    id: 4,
    content: "Desde que contratamos a HydroGlow, a gestão da piscina mudou completamente. A água está sempre cristalina, os processos são bem controlados e a equipe demonstra muito profissionalismo no dia a dia. Hoje temos mais tranquilidade e segurança, sabendo que tudo está sendo cuidado com rigor. Recomendo sem hesitar.",
    name: "Debora Lima",
    role: "Síndica (Condomínio Ville Blanche)",
    avatar: "https://api.iconify.design/ph:user-circle-fill.svg?color=%2394a3b8"
  },
  {
    id: 5,
    content: "Sempre que temos problemas com a água eles nos salvam, conseguem transformar um pântano verde em uma água cristalina de um dia pro outro, parece mágica. Não sei o que seria do nosso sitio sem a HidroGlow.",
    name: "Baiaco",
    role: "Sitio do Baiaco",
    avatar: "https://api.iconify.design/ph:user-circle-fill.svg?color=%2394a3b8"
  }
])

const displayModal = ref(false)
const selectedClient = ref<any>(null)

const openModal = (client: any) => {
  selectedClient.value = client
  displayModal.value = true
}
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
  background-color: var(--color-white);
  border-radius: var(--border-radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
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

.clients-carousel {
  padding: var(--spacing-4) 0;
}

.marquee-item {
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  border: 1px solid var(--color-border-light);
  border-radius: var(--border-radius-xl);
  overflow: hidden;
  margin: 0 var(--spacing-3);
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
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
  position: relative;
  cursor: pointer;
}

.zoom-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.zoom-overlay i {
  color: var(--color-white);
  font-size: 2.5rem;
  transform: scale(0.5);
  transition: transform 0.3s ease;
}

.marquee-image-wrapper:hover .zoom-overlay {
  opacity: 1;
}

.marquee-image-wrapper:hover .zoom-overlay i {
  transform: scale(1);
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

.expanded-image {
  width: 100%;
  height: auto;
  max-height: 80vh;
  object-fit: contain;
  border-radius: var(--border-radius-lg);
  display: block;
  margin: 0 auto;
}
</style>
