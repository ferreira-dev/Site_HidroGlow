<template>
  <section id="hero" class="hero">
    <div class="hero__bg">
      <img src="~/assets/images/hero/hero_bg.png" alt="Guardião de Piscina Profissional" class="hero__img" />
      <div class="hero__overlay"></div>
    </div>
    
    <div class="container hero__container">
      <div class="hero__content">
        <div class="hero__logo">HydroGlow</div>
        <span class="badge">Proteção & Conformidade</span>
        <h1 class="hero__title">Guardião de Piscina no <span class="highlight">Rio de Janeiro</span></h1>
        <p class="hero__subtitle">
          Segurança aquática exigida por lei. Equipe altamente treinada e certificada para condomínios, clubes e academias. Protegemos o que mais importa.
        </p>
        <div class="hero__actions">
          <Button label="Solicitar Orçamento" icon="pi pi-shield" size="large" class="p-button-warning btn-cta" @click="scrollTo('contato')" />
          <Button label="Conheça os Serviços" icon="pi pi-arrow-down" size="large" class="btn-outline" @click="scrollTo('servicos')" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { scrollTo } = useScrollTo()
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: var(--spacing-20); /* Space for header */
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.hero__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
}

.hero__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to left, var(--color-primary-900) 0%, rgba(10, 22, 41, 0.7) 50%, rgba(10, 22, 41, 0.1) 100%);
}

.hero__container {
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.hero__content {
  max-width: 700px;
  color: var(--color-white);
  animation: fadeUp 1s ease-out;
}

.badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  padding: var(--spacing-1) var(--spacing-3);
  border-radius: var(--border-radius-full);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: var(--spacing-4);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
}

.hero__logo {
  font-size: clamp(3.5rem, 8vw, 5.5rem);
  font-weight: 900;
  color: var(--color-white);
  letter-spacing: -2px;
  margin-bottom: var(--spacing-8);
  position: relative;
  line-height: 1;
}

.hero__logo::after {
  content: '';
  position: absolute;
  bottom: -16px;
  left: 0;
  width: 80px;
  height: 6px;
  background-color: var(--color-accent);
  border-radius: 4px;
}

.hero__title {
  color: var(--color-white);
  margin-bottom: var(--spacing-6);
}

.highlight {
  color: var(--color-accent-light);
}

.hero__subtitle {
  font-size: var(--font-size-xl);
  color: var(--color-secondary-darker);
  margin-bottom: var(--spacing-10);
  max-width: 600px;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-4);
}

:deep(.btn-cta) {
  background-color: var(--color-accent) !important;
  border-color: var(--color-accent) !important;
  font-weight: var(--font-weight-bold);
  box-shadow: var(--shadow-lg);
}

:deep(.btn-cta:hover) {
  background-color: var(--color-accent-hover) !important;
  border-color: var(--color-accent-hover) !important;
  transform: translateY(-2px);
}

:deep(.btn-outline) {
  background-color: transparent !important;
  color: var(--color-white) !important;
  border: 2px solid var(--color-white) !important;
  font-weight: var(--font-weight-bold);
}

:deep(.btn-outline:hover) {
  background-color: rgba(255, 255, 255, 0.1) !important;
}

@media (max-width: 768px) {
  .hero__title {
    font-size: var(--font-size-4xl);
  }
  
  .hero__subtitle {
    font-size: var(--font-size-lg);
  }
  
  .hero__overlay {
    background: linear-gradient(to bottom, rgba(10, 22, 41, 0.4) 0%, rgba(10, 22, 41, 0.9) 100%);
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
