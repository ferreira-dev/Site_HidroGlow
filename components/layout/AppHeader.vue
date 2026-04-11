<template>
  <header class="app-header" :class="{ 'app-header--scrolled': isScrolled }">
    <div class="container app-header__container">
      
      <!-- Brand / Logo -->
      <NuxtLink to="/" class="brand">
        <span class="brand__icon">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 12h4l3-9 5 18 3-9h5" />
          </svg>
        </span>
        <span class="brand__name">HydroGlow</span>
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav class="nav-desktop">
        <ul class="nav-list">
          <li><a href="#servicos" @click.prevent="scrollTo('servicos')" class="nav-link">Serviços</a></li>
          <li><a href="#sobre" @click.prevent="scrollTo('sobre')" class="nav-link">Quem Somos</a></li>
          <li><a href="#depoimentos" @click.prevent="scrollTo('depoimentos')" class="nav-link">Depoimentos</a></li>
        </ul>
        <Button 
          label="Orçamento Rápido" 
          icon="pi pi-whatsapp" 
          class="btn-quote p-button-warning"
          @click="scrollTo('contato')"
        />
      </nav>

      <!-- Mobile Nav Toggle (Simplified for template) -->
      <Button 
        icon="pi pi-bars" 
        class="nav-mobile-btn p-button-text p-button-secondary" 
        aria-label="Menu"
        @click="mobileMenuOpen = !mobileMenuOpen"
      />
    </div>

    <!-- Mobile Menu Overlay -->
    <div v-show="mobileMenuOpen" class="nav-mobile-overlay">
      <ul class="nav-mobile-list">
        <li><a href="#servicos" @click.prevent="scrollTo('servicos'); mobileMenuOpen = false" class="nav-mobile-link">Serviços</a></li>
        <li><a href="#sobre" @click.prevent="scrollTo('sobre'); mobileMenuOpen = false" class="nav-mobile-link">Quem Somos</a></li>
        <li><a href="#depoimentos" @click.prevent="scrollTo('depoimentos'); mobileMenuOpen = false" class="nav-mobile-link">Depoimentos</a></li>
        <li>
           <Button 
            label="Orçamento" 
            class="p-button-warning w-full mt-4"
            @click="scrollTo('contato'); mobileMenuOpen = false"
          />
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const { scrollTo } = useScrollTo()
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: var(--z-fixed);
  transition: all var(--transition);
  background: transparent;
  padding: var(--spacing-4) 0;
}

.app-header--scrolled {
  background: var(--color-white);
  box-shadow: var(--shadow-sm);
  padding: var(--spacing-3) 0;
}

.app-header--scrolled .brand__name,
.app-header--scrolled .nav-link,
.app-header--scrolled .nav-mobile-btn {
  color: var(--color-primary);
}

.app-header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  text-decoration: none;
  color: var(--color-white);
  transition: color var(--transition);
}

.brand__icon {
  color: var(--color-accent);
}

.brand__name {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
}

.nav-desktop {
  display: none;
  align-items: center;
  gap: var(--spacing-8);
}

.nav-list {
  display: flex;
  gap: var(--spacing-6);
  margin: 0;
  padding: 0;
}

.nav-link {
  color: var(--color-white);
  font-weight: var(--font-weight-medium);
  transition: color var(--transition);
}

.nav-link:hover {
  color: var(--color-accent) !important;
}

.nav-mobile-btn {
  display: flex;
  color: var(--color-white);
}

.nav-mobile-overlay {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: var(--color-white);
  box-shadow: var(--shadow-md);
  padding: var(--spacing-6);
  display: flex;
  flex-direction: column;
}

.nav-mobile-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}

.nav-mobile-link {
  color: var(--color-text);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  display: block;
}

/* Media Queries */
@media (min-width: 768px) {
  .nav-desktop {
    display: flex;
  }
  .nav-mobile-btn {
    display: none;
  }
  .nav-mobile-overlay {
    display: none;
  }
}

:deep(.btn-quote) {
  background-color: var(--color-accent) !important;
  border-color: var(--color-accent) !important;
  font-weight: var(--font-weight-bold);
}

:deep(.btn-quote:hover) {
  background-color: var(--color-accent-hover) !important;
  border-color: var(--color-accent-hover) !important;
}
</style>
