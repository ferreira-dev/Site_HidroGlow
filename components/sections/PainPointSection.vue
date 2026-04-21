<template>
  <section id="conformidade" class="pain-point section section--alt">
    <div class="container pain-point__container">
      <div class="pain-point__content text-center">
        <div class="alert-icon">
          <i class="pi pi-exclamation-triangle"></i>
        </div>
        <h2 class="pain-point__title">Sua piscina está em conformidade com as normas?</h2>
        <p class="pain-point__desc">
          No Estado do Rio de Janeiro, a legislação exige a presença de um guardião de piscina capacitado em áreas de uso coletivo (condomínios, clubes, hotéis). A ausência desse profissional expõe os frequentadores a riscos vitais e gera severas multas e responsabilidades criminais ao gestor.
        </p>
        <div class="pain-point__stats">
          <div class="stat">
            <span class="stat__number">100%</span>
            <span class="stat__label">Conformidade Legal Garantida</span>
          </div>
          <div class="stat divider"></div>
          <div class="stat">
            <span class="stat__number">100%</span>
            <span class="stat__label">Parâmetros Químicos Adequados </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pain-point {
  background-color: var(--color-primary-50);
}

.pain-point__content {
  max-width: 800px;
  margin-inline: auto;
  background: var(--color-white);
  padding: var(--spacing-12) var(--spacing-6);
  border-radius: var(--border-radius-2xl);
  box-shadow: var(--shadow-xl);
  transform: translateY(-50px);
  margin-bottom: -50px;
  border-top: 5px solid var(--color-accent);
}

.alert-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background-color: rgba(249, 115, 22, 0.1);
  color: var(--color-accent);
  border-radius: var(--border-radius-full);
  margin-bottom: var(--spacing-6);
}

.alert-icon i {
  font-size: 2.5rem;
}

.pain-point__title {
  margin-bottom: var(--spacing-4);
  color: var(--color-primary-dark);
}

.pain-point__desc {
  font-size: var(--font-size-lg);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-8);
}

.pain-point__stats {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-6);
  padding-top: var(--spacing-6);
  border-top: 1px solid var(--color-border-light);
}

@media (min-width: 768px) {
  .pain-point__stats {
    flex-direction: row;
    gap: var(--spacing-10);
  }
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-1);
}

.stat__number {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  line-height: 1;
}

.stat__label {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--color-text-lighter);
}

.divider {
  display: none;
  width: 1px;
  height: 50px;
  background-color: var(--color-border-light);
}

@media (min-width: 768px) {
  .divider {
    display: block;
  }
}
</style>
