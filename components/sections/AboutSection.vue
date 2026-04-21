<template>
  <section id="sobre" class="section section--alt">
    <div class="container about__container">
      <div class="about__image-col">
        <div class="image-wrapper">
          <!-- Placeholder using a sophisticated CSS pattern instead of an image to avoid external dependencies, 
               but we can easily replace it with a real image later -->
          <div class="img-overlay-container">
            <img src="/img/equipe_certificada.png" alt="Empresa Certificada" class="about__img" />
            <div class="blue-overlay"></div>
          </div>
          <div class="experience-badge">
            <span class="experience-badge__number">+7</span>
            <span class="experience-badge__text">Anos de<br>Experiência</span>
          </div>
        </div>
      </div>
      <div class="about__text-col">
        <span class="badge badge--pill">Nossa História</span>
        <h2 class="about__title">Autoridade e Especialização em Segurança Aquática</h2>
        <p class="about__desc">
          A <strong>HydroGlow</strong> nasceu com a missão de transformar a experiência em áreas de lazer aquático, unindo tranquilidade jurídica aos gestores e proteção máxima aos banhistas. 
        </p>
        <p class="about__desc">
          Nossa equipe é formada integralmente por profissionais homologados pelo Grupamento Marítimo (GMAR) e habilitados em técnicas avançadas de resgate e suporte básico de vida. Atuamos com padronização rigorosa de uniformes, equipamentos de ponta e protocolo de conduta.
        </p>
        
        <ul class="about__list">
          <li><i class="pi pi-check-circle text-accent"></i> Equipe homologada e treinada regularmente.</li>
          <li><i class="pi pi-check-circle text-accent"></i> Equipamentos de resgate de última geração inclusos.</li>
          <li><i class="pi pi-check-circle text-accent"></i> Suporte e atendimento emergencial 24h para o síndico.</li>
          <li><i class="pi pi-check-circle text-accent"></i> Foco integral na conformidade das normas técnicas.</li>
        </ul>

        <div class="about__action">
          <Button label="Agende uma Consultoria Gratuita" class="p-button-outlined" icon="pi pi-calendar" @click="scrollTo('contato')" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { scrollTo } = useScrollTo()
</script>

<style scoped>
.about__container {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-12);
  align-items: center;
}

@media (min-width: 992px) {
  .about__container {
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-16);
  }
}

.about__image-col {
  position: relative;
}

.image-wrapper {
  position: relative;
  border-radius: var(--border-radius-2xl);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
}

.img-overlay-container {
  width: 100%;
  aspect-ratio: 4/5;
  position: relative;
}

.about__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.blue-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color-primary);
  opacity: 0.6;
  mix-blend-mode: multiply;
}

.experience-badge {
  position: absolute;
  bottom: -20px;
  right: -20px;
  background: var(--color-accent);
  color: var(--color-white);
  padding: var(--spacing-6);
  border-radius: var(--border-radius-full);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: var(--shadow-lg);
  border: 8px solid var(--color-secondary);
}

@media (max-width: 768px) {
  .experience-badge {
    bottom: 20px;
    right: 20px;
    border-width: 4px;
    padding: var(--spacing-4);
  }
}

.experience-badge__number {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  line-height: 1;
}

.experience-badge__text {
  font-size: var(--font-size-sm);
  text-transform: uppercase;
  letter-spacing: 1px;
}

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

.about__title {
  margin-bottom: var(--spacing-6);
  line-height: var(--line-height-tight);
}

.about__desc {
  font-size: var(--font-size-lg);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-4);
}

.about__list {
  margin-top: var(--spacing-8);
  margin-bottom: var(--spacing-8);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}

.about__list li {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-3);
  font-weight: var(--font-weight-medium);
  color: var(--color-primary-900);
}

.about__list i {
  margin-top: 3px;
  font-size: 1.2rem;
}
</style>
