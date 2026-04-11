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

      <div class="logos-grid">
        <div class="logo-item">Condomínio RioSul</div>
        <div class="logo-item">Clube Náutico</div>
        <div class="logo-item">Resort Barra</div>
        <div class="logo-item">Hotel Copacabana</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

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

.logos-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--spacing-6);
  margin-top: var(--spacing-12);
  border-top: 1px solid var(--color-border-light);
  padding-top: var(--spacing-10);
  opacity: 0.6;
}

.logo-item {
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-xl);
  color: var(--color-text-light);
  padding: var(--spacing-2) var(--spacing-6);
}
</style>
