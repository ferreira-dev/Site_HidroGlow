<template>
  <section id="contato" class="section section--alt contact-section">
    <div class="container contact__container">
      
      <div class="contact__info">
        <span class="badge badge--pill">Fale Conosco</span>
        <h2 class="contact__title">Pronto para garantir a segurança da sua piscina?</h2>
        <p class="contact__desc">
          Nossa equipe comercial está pronta para entender as demandas do seu condomínio ou complexo aquático e montar um escopo de serviços sob medida e dentro da lei.
        </p>
        
        <div class="contact-methods">
          <div class="method-card">
            <img src="https://svgl.app/library/whatsapp.svg" class="method-logo-img" alt="WhatsApp" />
            <div>
              <strong>WhatsApp Business</strong>
              <p>(21) 99999-9999</p>
            </div>
          </div>
          <div class="method-card">
            <img src="https://svgl.app/library/gmail.svg" class="method-logo-img" alt="E-mail" />
            <div>
              <strong>E-mail</strong>
              <p>comercial@hydroglow.com.br</p>
            </div>
          </div>
          <div class="method-card">
            <img src="https://svgl.app/library/google_maps.svg" class="method-logo-img" alt="Sede" />
            <div>
              <strong>Sede Operacional</strong>
              <p>Barra da Tijuca, Rio de Janeiro - RJ</p>
            </div>
          </div>
        </div>
      </div>

      <div class="contact__form-wrapper">
        <div class="form-card">
          <h3 class="form-title">Solicite um Orçamento</h3>
          <p class="form-subtitle">Resposta rápida em até 2 horas úteis.</p>

          <form @submit.prevent="submitForm" class="contact-form">
            <div class="p-field">
              <label for="name">Nome Completo</label>
              <InputText id="name" name="name" v-model="form.name" placeholder="Ex: João da Silva" required class="w-full" />
            </div>

            <div class="p-field">
              <label for="condominio">Nome do Condomínio / Empresa</label>
              <InputText id="condominio" name="condominio" v-model="form.condominio" placeholder="Ex: Condomínio Rio das Pedras" required class="w-full" />
            </div>

            <div class="p-field">
              <label for="phone">Telefone (WhatsApp)</label>
              <InputMask id="phone" name="phone" v-model="form.phone" mask="(99) 99999-9999" placeholder="(21) 90000-0000" required class="w-full" />
            </div>

            <div class="p-field">
              <label for="message">Detalhes (Opcional)</label>
              <Textarea id="message" name="message" v-model="form.message" rows="4" placeholder="Quantas piscinas? Qual a escala pretendida?" class="w-full"></Textarea>
            </div>

            <Button type="submit" :label="formStatus === 'loading' ? 'Enviando...' : 'Enviar Solicitação'" :icon="formStatus === 'loading' ? 'pi pi-spin pi-spinner' : 'pi pi-send'" class="btn-submit p-button-warning w-full" :disabled="formStatus === 'loading'" />
            
            <transition name="p-message">
              <Message v-if="formStatus === 'success'" severity="success" :closable="false" class="mt-4">
                Solicitação enviada! Entraremos em contato em breve.
              </Message>
            </transition>
            
            <transition name="p-message">
              <Message v-if="formStatus === 'error'" severity="error" :closable="false" class="mt-4">
                Erro ao enviar a mensagem. Tente novamente mais tarde.
              </Message>
            </transition>
          </form>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  condominio: '',
  phone: '',
  message: ''
})

const formStatus = ref<'idle' | 'loading' | 'success' | 'error'>('idle')

const submitForm = async () => {
  formStatus.value = 'loading'
  
  try {
    const response = await fetch('https://formspree.io/f/mykbrqzk', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.value)
    })

    console.log("resposta:", response)

    if (response.ok) {
      formStatus.value = 'success'
      form.value = { name: '', condominio: '', phone: '', message: '' }
      
      setTimeout(() => {
        formStatus.value = 'idle'
      }, 5000)
    } else {
      formStatus.value = 'error'
      setTimeout(() => {
        formStatus.value = 'idle'
      }, 5000)
    }
  } catch (error) {
    formStatus.value = 'error'
    setTimeout(() => {
      formStatus.value = 'idle'
    }, 5000)
  }
}
</script>

<style scoped>
.contact-section {
  background-color: var(--color-primary-900);
  background-image: radial-gradient(circle at top right, var(--color-primary-800) 0%, transparent 50%);
  color: var(--color-white);
}

.contact__container {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-12);
}

@media (min-width: 992px) {
  .contact__container {
    grid-template-columns: 1fr 1fr;
  }
}

.badge--pill {
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--color-white);
  padding: var(--spacing-1) var(--spacing-4);
  border-radius: var(--border-radius-full);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-4);
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.contact__title {
  color: var(--color-white);
  line-height: var(--line-height-tight);
}

.contact__desc {
  color: var(--color-secondary-darker);
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-10);
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
}

.method-card {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  background: rgba(255, 255, 255, 0.05);
  padding: var(--spacing-4);
  border-radius: var(--border-radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: background var(--transition);
}

.method-card:hover {
  background: rgba(255, 255, 255, 0.1);
}

.method-logo-img {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

.method-card strong {
  display: block;
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-1);
}

.method-card p {
  color: var(--color-secondary-darker);
  margin: 0;
}

/* Formulario */
.form-card {
  background: var(--color-white);
  padding: var(--spacing-8);
  border-radius: var(--border-radius-xl);
  color: var(--color-text);
  box-shadow: var(--shadow-xl);
}

.form-title {
  color: var(--color-primary-dark);
  margin-bottom: var(--spacing-2);
}

.form-subtitle {
  color: var(--color-text-light);
  margin-bottom: var(--spacing-6);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}

.p-field {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.p-field label {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary-dark);
}

:deep(.p-inputtext), :deep(.p-inputmask) {
  padding: 0.75rem 1rem;
  border-color: var(--color-border);
}

:deep(.p-inputtext:enabled:focus), :deep(.p-inputmask:enabled:focus) {
  border-color: var(--color-accent);
  box-shadow: 0 0 0 1px var(--color-accent);
}

:deep(.btn-submit) {
  margin-top: var(--spacing-4);
  padding-block: 1rem;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  background-color: var(--color-accent) !important;
  border-color: var(--color-accent) !important;
}

:deep(.btn-submit:hover:not(:disabled)) {
  background-color: var(--color-accent-hover) !important;
  border-color: var(--color-accent-hover) !important;
}
</style>
