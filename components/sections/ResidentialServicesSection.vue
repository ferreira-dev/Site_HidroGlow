<template>
  <section id="servicos-residenciais" class="section section--alt">
    <div class="container">
      <div class="residential-layout">
        <!-- Image side -->
        <div class="residential-image-wrapper">
          <img src="~/assets/images/residencial.webp" alt="Tratamento de Piscina Residencial" class="residential-image" />
          <div class="image-overlay"></div>
        </div>

        <!-- Content side -->
        <div class="residential-content">
          <div class="section__header text-left">
            <span class="badge badge--pill badge--secondary">Serviços Particulares</span>
            <h2 class="section__title">Sua Casa, Nossa Prioridade</h2>
            <p class="section__subtitle">
              A <strong>HydroGlow</strong> também vai até você! Sabemos que a piscina de casa é o refúgio da família. Por isso, oferecemos tratamentos especializados para residências, garantindo água cristalina e saúde sem que você precise se preocupar com nada.
            </p>
          </div>

          <div class="plans-grid">
            <!-- Plan 1 -->
            <div class="plan-card" @click="openWhatsAppPlan('Diária')" role="button" tabindex="0">
              <div class="plan-header">
                <div class="plan-icon"><i class="pi pi-sun"></i></div>
                <h3>Diária</h3>
              </div>
              <p>Tratamento avulso ou de choque (ex: após chuva forte ou antes de festas). Deixamos a água pronta para uso no mesmo dia.</p>
            </div>

            <!-- Plan 2 -->
            <div class="plan-card" @click="openWhatsAppPlan('Semanal')" role="button" tabindex="0">
              <div class="plan-header">
                <div class="plan-icon"><i class="pi pi-calendar"></i></div>
                <h3>Semanal</h3>
              </div>
              <p>Visitas semanais para aspiração, escovação e controle químico rigoroso. Ideal para quem usa a piscina frequentemente.</p>
            </div>

            <!-- Plan 3 -->
            <div class="plan-card plan-card--highlight" @click="openWhatsAppPlan('Mensal')" role="button" tabindex="0">
              <span class="plan-badge">O Mais Valioso</span>
              <div class="plan-header">
                <div class="plan-icon"><i class="pi pi-verified"></i></div>
                <h3>Mensal</h3>
              </div>
              <p>Pacote completo para você apenas curtir! Manutenção preventiva, limpeza regular e reposição química mensal inclusa.</p>
            </div>
          </div>
          
          <div class="residential-action">
            <Button label="Quero um orçamento pra minha casa" icon="pi pi-whatsapp" size="large" class="btn-whatsapp" @click="scrollTo('contato')" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { scrollTo } = useScrollTo()

const openWhatsAppPlan = (planName: string) => {
  const text = `Olá! Gostaria de saber mais sobre o pacote ${planName} para o tratamento da minha piscina residencial.`
  window.open(`https://wa.me/5521990689196?text=${encodeURIComponent(text)}`, '_blank')
}
</script>

<style scoped>
.section--alt {
  background-color: var(--color-background-alt);
}

.text-left {
  text-align: left;
  align-items: flex-start;
}

.text-left .section__subtitle {
  margin-left: 0;
  margin-right: auto;
}

.badge--secondary {
  background-color: var(--color-accent-light);
  color: var(--color-primary-900);
}

.residential-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-12);
  align-items: center;
}

.residential-image-wrapper {
  position: relative;
  border-radius: var(--border-radius-2xl);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
  height: 100%;
  min-height: 500px;
}

.residential-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(10, 22, 41, 0.4) 0%, transparent 50%);
}

.plans-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-4);
  margin-top: var(--spacing-8);
  margin-bottom: var(--spacing-8);
}

.plan-card {
  background-color: var(--color-white);
  border: 1px solid var(--color-border-light);
  border-radius: var(--border-radius-xl);
  padding: var(--spacing-6);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  cursor: pointer;
}

.plan-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.plan-card--highlight {
  border-color: var(--color-accent);
  border-width: 2px;
  background: linear-gradient(to right, var(--color-white), #fffbf5);
}

.plan-badge {
  position: absolute;
  top: -12px;
  right: 20px;
  background-color: var(--color-accent);
  color: var(--color-white);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
  box-shadow: var(--shadow-sm);
}

.plan-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-3);
}

.plan-icon {
  width: 40px;
  height: 40px;
  background-color: var(--color-primary-100);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 1.2rem;
}

.plan-card--highlight .plan-icon {
  background-color: var(--color-accent);
  color: var(--color-white);
}

.plan-card h3 {
  font-size: var(--font-size-lg);
  color: var(--color-primary-dark);
  margin: 0;
}

.plan-card p {
  color: var(--color-text);
  font-size: var(--font-size-base);
  margin: 0;
  line-height: var(--line-height-relaxed);
}

.residential-action {
  margin-top: var(--spacing-8);
}

.btn-whatsapp {
  background-color: #25D366 !important;
  border-color: #25D366 !important;
  font-weight: var(--font-weight-bold);
  box-shadow: var(--shadow-lg);
  width: 100%;
}

.btn-whatsapp:hover {
  background-color: #20BA5A !important;
  border-color: #20BA5A !important;
  transform: translateY(-2px);
}

@media (max-width: 992px) {
  .residential-layout {
    grid-template-columns: 1fr;
  }
  
  .residential-image-wrapper {
    min-height: 350px;
  }
}
</style>
