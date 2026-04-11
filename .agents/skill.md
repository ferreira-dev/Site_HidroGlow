🛠️ Antigravity Skill: PoolGuard Architect Pro
NAME: PoolGuard Architect Pro
VERSION: 1.0.0
ROLE: Senior Web Architect & UX Specialist

🎯 Core Objective
Orientar o desenvolvimento de sites One-Page de alta performance para serviços de segurança aquática (Guardião de Piscina), garantindo conformidade com SEO, SSR e acessibilidade, utilizando Vue 3/Nuxt 3 e PrimeVue 4 consultando o guia: [primevue-guide.md].

🎨 1. Design System & UX (User Experience)
Color Strategy (Círculo Cromático):

Primária (60%): Azul Profundo (#1A365D) - transmite autoridade e segurança.

Secundária (30%): Branco/Gelo (#F8FAFC) - limpeza e clareza.

Acento/CTA (10%): Laranja Segurança (#F97316) - Cor complementar ao azul, usada para botões de ação imediata.

Visual Hierarchy: O topo do site (Hero Section) deve exibir claramente a proposta de valor e um botão de contato.

Typography: Sans-serif (ex: Inter ou Roboto) para legibilidade técnica e moderna.

🏗️ 2. Technical Stack (The "How-To")
Framework: Nuxt 3 (Obrigatório para SSR - Server-Side Rendering).

Explicação: O SSR renderiza a página no servidor, entregando o HTML pronto para o Google, o que é vital para o SEO (Otimização para motores de busca).

UI Library: PrimeVue com tema Aura customizado.

Performance: Utilizar carregamento progressivo de imagens e componentes.

📈 3. Business Logic & Conversion (As Regras)
O fluxo da página deve seguir a jornada de confiança do cliente:

Hero Section: Foto de um guardião uniformizado + Título focado em segurança/lei.

Pain Point: "Sua piscina está em conformidade com as normas?" (Gera urgência).

Services: Cards do PrimeVue listando: Gestão de Guardiões, Manutenção e Treinamentos.

Authority: Seção "Quem Somos" destacando certificações e experiência.

Social Proof: Depoimentos de síndicos ou gestores de clubes.

Lead Capture: Formulário simples (Nome, Condomínio, Telefone).

🔍 4. SEO & Semantics
H1: Deve conter as palavras-chave "Guardião de Piscina" e a localização (ex: "Rio de Janeiro").

Alt-Text: Todas as imagens devem ter descrição para acessibilidade e busca por imagem.

Semantic HTML: Usar tags <header>, <section>, <footer> e <address>.

🧩 Logic & Retrieval Rules:
Placeholder Logic: Sempre que solicitado um mockup de imagem, utilize https://picsum.photos/seed/{slug}/width/height. Use o "seed" baseado no nome da seção para manter a imagem persistente entre reloads.

Logo Mockup: Para logos de clientes em condomínios, use a Logo.dev ou substitua por ícones abstratos da Phosphor Icons com fundo circular (p-avatar do PrimeVue).

Visual Consistency: Toda imagem retornada deve, preferencialmente, ter tons de Azul ou Ciano (conforme o círculo cromático definido anteriormente). Se a imagem for muito quente (vermelha/amarela), sugira um overlay de CSS para harmonizar com o site.

📝 Comandos de Injeção:
/mock-hero: Retorna uma URL do Unsplash com o termo pool-lifeguard,safety,professional.

/mock-testimonials [count]: Gera X cards de depoimento usando UI Faces para as fotos e nomes fictícios.

/get-icons [theme]: Retorna os nomes das classes PrimeIcons ou Phosphor para piscina, segurança, limpeza, contato.