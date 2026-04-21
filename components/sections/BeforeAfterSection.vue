<template>
  <section id="antes-depois" class="section">
    <div class="container text-center">
      <span class="badge badge--pill">Transformação Real</span>
      <h2 class="section__title">Magia ou Tratamento Profissional?</h2>
      <p class="section__subtitle mx-auto" style="max-width: 700px">
        Veja na prática como resgatamos piscinas residenciais que estavam com a água turva ou verde. O tratamento adequado aliado ao compromisso HydroGlow transforma completamente o seu ambiente de lazer.
      </p>

      <div class="mt-12 carousel-wrapper">
        <Carousel :value="transformations" :numVisible="1" :numScroll="1" circular :autoplayInterval="4000">
          <template #item="slotProps">
            <div class="compare-grid">
              <!-- Antes -->
              <div class="compare-card">
                <div class="compare-card__header before-header">
                  <i class="pi pi-times-circle"></i>
                  <span>ANTES</span>
                </div>
                <div class="compare-card__image" @click="openGallery(slotProps.data.antes, slotProps.data.depois, 0)" role="button" tabindex="0">
                  <img :src="slotProps.data.antes" alt="Piscina antes do tratamento" />
                  <div class="zoom-overlay"><i class="pi pi-search-plus"></i></div>
                </div>
              </div>

              <div class="compare-arrow">
                <i class="pi pi-arrow-right desktop-arrow"></i>
                <i class="pi pi-arrow-down mobile-arrow"></i>
              </div>

              <!-- Depois -->
              <div class="compare-card after-card">
                <div class="compare-card__header after-header">
                  <i class="pi pi-check-circle"></i>
                  <span>DEPOIS</span>
                </div>
                <div class="compare-card__image" @click="openGallery(slotProps.data.antes, slotProps.data.depois, 1)" role="button" tabindex="0">
                  <img :src="slotProps.data.depois" alt="Piscina depois do tratamento" />
                  <div class="zoom-overlay"><i class="pi pi-search-plus"></i></div>
                </div>
              </div>
            </div>
          </template>
        </Carousel>
      </div>
    </div>

    <Dialog v-model:visible="isModalVisible" modal dismissableMask :style="{ width: '90vw', maxWidth: '800px' }" class="image-modal">
      <div class="modal-gallery" v-if="activeGallery.length > 0">
        <button class="gallery-nav prev" @click="prevImage"><i class="pi pi-chevron-left"></i></button>
        <img :src="activeGallery[activeIndex]" alt="Imagem Expandida" class="expanded-image" />
        <button class="gallery-nav next" @click="nextImage"><i class="pi pi-chevron-right"></i></button>
        
        <div class="modal-badge" :class="activeIndex === 0 ? 'badge-antes' : 'badge-depois'">
          {{ activeIndex === 0 ? 'ANTES' : 'DEPOIS' }}
        </div>
      </div>
    </Dialog>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isModalVisible = ref(false)
const activeGallery = ref<string[]>([])
const activeIndex = ref(0)

const openGallery = (antes: string, depois: string, startIndex: number) => {
  activeGallery.value = [antes, depois]
  activeIndex.value = startIndex
  isModalVisible.value = true
}

const nextImage = () => {
  if (activeIndex.value < activeGallery.value.length - 1) {
    activeIndex.value++
  } else {
    activeIndex.value = 0
  }
}

const prevImage = () => {
  if (activeIndex.value > 0) {
    activeIndex.value--
  } else {
    activeIndex.value = activeGallery.value.length - 1
  }
}

import imgAntes1 from '~/assets/images/residencial/antes-v2.jpg'
import imgDepois1 from '~/assets/images/residencial/depois-v2.jpg'
import imgAntes2 from '~/assets/images/residencial/antes-2.jpg'
import imgDepois2 from '~/assets/images/residencial/depois-2.jpg'
import imgAntes3 from '~/assets/images/residencial/antes-3.jpg'
import imgDepois3 from '~/assets/images/residencial/depois-3.jpg'
import imgAntes4 from '~/assets/images/residencial/antes-4.jpg'
import imgDepois4 from '~/assets/images/residencial/depois-4.jpg'
import imgAntes6 from '~/assets/images/residencial/antes-6.jpg'
import imgDepois6 from '~/assets/images/residencial/depois-6.jpg'

const transformations = [
  { antes: imgAntes6, depois: imgDepois6 },
  { antes: imgAntes4, depois: imgDepois4 },
  { antes: imgAntes1, depois: imgDepois1 },
  { antes: imgAntes2, depois: imgDepois2 },
  { antes: imgAntes3, depois: imgDepois3 }
]
</script>

<style scoped>
.text-center {
  text-align: center;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.mt-12 {
  margin-top: var(--spacing-12);
}

.carousel-wrapper {
  padding: 0 var(--spacing-4);
}

.compare-grid {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-6);
}

.compare-card {
  flex: 1;
  background: var(--color-white);
  border-radius: var(--border-radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-border-light);
  max-width: 500px;
}

.after-card {
  border: 2px solid #20BA5A;
  box-shadow: 0 10px 30px rgba(32, 186, 90, 0.2);
}

.compare-card__header {
  padding: var(--spacing-3) var(--spacing-4);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  font-weight: 900;
  font-size: var(--font-size-lg);
  letter-spacing: 2px;
}

.before-header {
  background-color: #ffeaea;
  color: #dc2626;
}

.after-header {
  background-color: #20BA5A;
  color: var(--color-white);
}

.compare-card__image {
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}

.compare-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.compare-card:hover .compare-card__image img {
  transform: scale(1.05);
}

.zoom-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(10, 22, 41, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: var(--color-white);
  font-size: 3rem;
}

.compare-card__image:hover .zoom-overlay {
  opacity: 1;
}

.expanded-image {
  width: 100%;
  max-height: 85vh;
  object-fit: contain;
  display: block;
  border-radius: var(--border-radius-lg);
  background-color: var(--color-background-dark, #0f172a);
}

:deep(.image-modal .p-dialog-content) {
  padding: 0;
  overflow: hidden;
  border-radius: var(--border-radius-lg);
}

:deep(.image-modal .p-dialog-header) {
  padding: var(--spacing-2);
  background-color: transparent;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  border: none;
}

.modal-gallery {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: var(--shadow-md);
  z-index: 5;
  transition: all 0.2s ease;
}

.gallery-nav:hover {
  background-color: white;
  transform: translateY(-50%) scale(1.1);
}

.gallery-nav i {
  font-size: 1.5rem;
  color: var(--color-primary-dark);
}

.gallery-nav.prev {
  left: 16px;
}

.gallery-nav.next {
  right: 16px;
}

.modal-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 900;
  letter-spacing: 2px;
  color: white;
  z-index: 5;
  box-shadow: var(--shadow-sm);
}

.badge-antes {
  background-color: #dc2626;
}

.badge-depois {
  background-color: #20BA5A;
}

.compare-arrow {
  color: var(--color-primary-light);
  font-size: 3rem;
}

.mobile-arrow {
  display: none;
}

@media (max-width: 768px) {
  .compare-grid {
    flex-direction: column;
  }
  
  .compare-arrow {
    padding: var(--spacing-4) 0;
  }
  
  .desktop-arrow {
    display: none;
  }
  
  .mobile-arrow {
    display: block;
  }
}
</style>
