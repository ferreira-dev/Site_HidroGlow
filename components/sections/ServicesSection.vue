<template>
  <section id="servicos" class="section">
    <div class="container">
      <div class="section__header">
        <span class="badge badge--pill">Soluções Completas</span>
        <h2 class="section__title">Nossos Serviços</h2>
        <p class="section__subtitle">Prevenção, manutenção e capacitação para garantir excelência em segurança aquática.</p>
      </div>

      <div class="services-grid">
        <!-- Serviço 1 -->
        <Card class="service-card">
          <template #header>
            <div class="service-icon-wrapper">
              <i class="pi pi-shield service-icon"></i>
            </div>
          </template>
          <template #title>Gestão de Guardiões</template>
          <template #content>
            <p>Terceirização completa de profissionais socorristas habilitados e uniformizados. Gerenciamos escalas, reposições ágeis e treinamentos constantes para que o seu condomínio ou clube foque apenas em desfrutar.</p>
          </template>
        </Card>

        <!-- Serviço 2 -->
        <Card class="service-card">
          <template #header>
            <div class="service-icon-wrapper">
              <i class="pi pi-wrench service-icon"></i>
            </div>
          </template>
          <template #title>Manutenção de Piscinas</template>
          <template #content>
            <p>Controle químico rigoroso e limpeza física de precisão. Trabalhamos em conformidade com as exigências sanitárias para manter a água cristalina e com os níveis ideais de alcalinidade, pH e cloro.</p>
          </template>
        </Card>

        <!-- Serviço 3 -->
        <Card class="service-card">
          <template #header>
            <div class="service-icon-wrapper">
              <i class="pi pi-heart-fill service-icon"></i>
            </div>
          </template>
          <template #title>Treinamento & Consultoria</template>
          <template #content>
            <p>Oferecemos suporte consultivo sobre normas de segurança vigentes (ex: ralo anti-aprisionamento) e capacitamos equipes locais em Primeiros Socorros e Suporte Básico de Vida.</p>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-8);
}

@media (min-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
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

:deep(.service-card) {
  height: 100%;
  border-radius: var(--border-radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-md) !important;
  transition: transform var(--transition), box-shadow var(--transition);
  border: 1px solid var(--color-border-light);
  background: var(--color-white);
}

:deep(.service-card:hover) {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl) !important;
  border-color: var(--color-primary-200);
}

:deep(.p-card-header) {
  padding: var(--spacing-6) var(--spacing-6) 0;
}

.service-icon-wrapper {
  background: var(--color-primary-50);
  width: 70px;
  height: 70px;
  border-radius: var(--border-radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-2);
}

.service-icon {
  font-size: 2rem;
  color: var(--color-primary);
}

:deep(.p-card-title) {
  font-size: var(--font-size-xl);
  color: var(--color-primary-dark);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-3);
  padding-inline: var(--spacing-6);
}

:deep(.p-card-content) {
  padding: 0 var(--spacing-6) var(--spacing-6);
}

:deep(.p-card-content p) {
  color: var(--color-text-light);
  margin: 0;
}
</style>
