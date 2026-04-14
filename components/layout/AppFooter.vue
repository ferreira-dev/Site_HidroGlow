<template>
  <footer class="app-footer">
    <div class="container app-footer__container">
      <div class="footer-brand">
        <div class="brand">
          <img src="~/assets/images/logo_oficial.png" alt="HydroGlow Logo" class="brand__logo-img" />
        </div>
        <p class="brand__desc">
          Excelência em Segurança Aquática. Protegendo vidas em piscinas e complexos de lazer por todo o estado do Rio de Janeiro.
        </p>
      </div>

      <div class="footer-links">
        <h4 class="footer-title">Navegação</h4>
        <ul>
           <li><a href="#hero" @click.prevent="scrollTo('hero')">Início</a></li>
           <li><a href="#servicos" @click.prevent="scrollTo('servicos')">Serviços</a></li>
           <li><a href="#sobre" @click.prevent="scrollTo('sobre')">Quem Somos</a></li>
           <li><a href="#contato" @click.prevent="scrollTo('contato')">Contato</a></li>
        </ul>
      </div>

      <div class="footer-contact">
        <h4 class="footer-title">Contatos</h4>
        <address>
          <p><i class="pi pi-map-marker"></i> Rio de Janeiro, RJ</p>
          <p><i class="pi pi-whatsapp"></i> (21) 99068-9196</p>
          <p><i class="pi pi-envelope"></i> contato@hydroglow.com.br</p>
        </address>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="container footer-bottom__inner">
        <p>&copy; {{ new Date().getFullYear() }} HydroGlow Guardiões. Todos os direitos reservados.</p>
        <p class="cnjp">CNPJ: 00.000.000/0001-00</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { scrollTo } = useScrollTo()
</script>

<style scoped>
.app-footer {
  background-color: var(--color-white);
  color: var(--color-text);
  padding-top: var(--spacing-16);
}

.app-footer__container {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-10);
  margin-bottom: var(--spacing-12);
}

@media (min-width: 768px) {
  .app-footer__container {
    grid-template-columns: 2fr 1fr 1fr;
  }
}

.brand {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  color: var(--color-white);
  margin-bottom: var(--spacing-4);
}

.brand__logo-img {
  max-width: 180px;
  height: auto;
  display: block;
}

.brand__desc {
  line-height: var(--line-height-relaxed);
  max-width: 400px;
  color: var(--color-text-light);
}

.footer-title {
  color: var(--color-primary-dark);
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-4);
  font-weight: var(--font-weight-bold);
}

.footer-links ul {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.footer-links a {
  color: var(--color-text-light);
  transition: color var(--transition);
}

.footer-links a:hover {
  color: var(--color-accent);
}

.footer-contact address {
  font-style: normal;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}

.footer-contact p {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  margin: 0;
  color: var(--color-text-light);
}

.footer-bottom {
  background-color: var(--color-primary-900);
  padding-block: var(--spacing-6);
  font-size: var(--font-size-sm);
}

.footer-bottom__inner {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-4);
}

@media (min-width: 768px) {
  .footer-bottom__inner {
    flex-direction: row;
  }
}

.cnjp {
  opacity: 0.7;
}
</style>
