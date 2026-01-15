# 📝 Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

---

## [0.5.2-beta] - 2026-01-15

### ✨ Adicionado

- **Continentes: Mídias da Ásia** (vídeo + infográfico).

### 🔧 Corrigido

- **Continentes: título do vídeo da Ásia** atualizado para o nome oficial: "Ásia: O continente dos Extremos.".

## [0.5.1-beta] - 2026-01-05

### ✨ Adicionado

- **Continentes: Mídias da África** (vídeo + infográfico + carousel de imagens).
- **Continentes: Mídias da América** (vídeo + infográfico + carousel de imagens).
- **Legendas no carousel** derivadas do nome do arquivo (exibidas abaixo da imagem).

### 🧰 Conteúdo / Assets

- Imagens da América adicionadas em `public/images/continentes/america/` com nomes normalizados (sem acentos e sem espaços).
- Infográfico da América adicionado em `public/images/infograficos/america_infografico.png`.

### 📚 Documentação

- Guia de versionamento e guia de mídias para Continentes adicionados em `.github/prompts/`.

## [0.5.0-beta] - 2025-12-07

### 🌋 Nova Página: Vulcões + Visualização 3D Cross-Section

Esta versão introduz a página "Vulcões", trazendo uma experiência imersiva com visualizações 3D educativas, diagramas de anatomia interativos e conteúdo rico sobre vulcanologia.

### ✨ Adicionado

#### Página Vulcões (`/capitulo/planeta-terra/vulcoes`)

**Visualizações 3D Duplas**

- **Sketchfab Embed** - Integração com modelo realista ("The Volcano" por Cozmoth) para visualização externa de uma erupção.
- **Vulcao3D (Cross-Section)** - Componente proprietário reescrito para mostrar o **corte transversal** do vulcão.
  - Vizualização interna da Câmara Magmática, Chaminés e Camadas.
  - **Interativo**: Tooltips flutuantes explicam cada parte ao passar o mouse.
  - **Estilo Educativo**: Design estilizado para facilitar a compreensão das estruturas.

**Conteúdo Científico**

- **Anatomia Detalhada** - Seção explicativa interativa sincronizada com o modelo 3D.
- **Tipos de Vulcões** - Cards informativos sobre Vulcão-Escudo, Estratovulcão, Cone de Cinzas e Caldera.
- **Dados Explosivos** - Estatísticas sobre temperatura, quantidade de vulcões ativos e índices VEI.
- **Curiosidades** - Fatos sobre raios vulcânicos, solo fértil e sons históricos.
- **Vídeo Educativo** - Player YouTube incorporado.

#### Novos Componentes

- **Vulcao3D.tsx** (`src/components/content/`) - Modelo 3D de corte transversal com:
  - Geometria procedural (Three.js) otimizada com `useMemo`.
  - Sistema de partículas para fumaça (low-poly).
  - Annotations (`<Html>`) para tooltips 3D.

### 🔧 Técnico

- **Otimização 3D** - Memoização de geometrias pesadas (`TubeGeometry`, `CatmullRomCurve3`) para evitar re-renders desnecessários.
- **Loading States** - Fallbacks visuais ("Carregando Modelo 3D...") adicionados aos imports dinâmicos (`next/dynamic`) para melhor UX.
- **Refatoração de Layout** - Grid responsivo na seção de anatomia para acomodar lista detalhada e modelo 3D lado a lado.
- **Correção de Assets** - Remoção de código morto e textos de debug da interface.

## [0.4.3-beta] - 2025-12-05

### 🎨 Correção de Visibilidade Light/Dark Mode

Esta versão corrige problemas de visibilidade de elementos em modo claro (light mode) em todas as páginas do capítulo Planeta Terra, e estabelece padrões de cores para desenvolvimento futuro.

### ✨ Adicionado

#### Documentação de Padrões de Cores

- **docs/THEME-PATTERNS.md** - Novo documento de referência completo
- Padrões de cores para textos (títulos, corpo, secundário, acentuados)
- Padrões de gradientes para cards de dados
- Padrões de bordas e fundos
- Tabelas de referência rápida para todas as cores
- Exemplos práticos de implementação
- Checklist de revisão para novas páginas
- Lista de erros comuns a evitar

### 🔧 Corrigido

#### Página `rotacao-terra.tsx`

- **Cards "Consequências da Rotação"** - Títulos e descrições agora visíveis em light mode
  - Títulos: `text-gray-900 dark:text-white` (era `text-white`)
  - Descrições: `text-gray-700 dark:text-slate-300` (era `text-slate-300`)
- **Cards de Dados Científicos** - Valores e labels corrigidos
  - Valores: `text-cyan-600 dark:text-cyan-400` (era `text-cyan-400`)
  - Labels: `text-gray-900 dark:text-white` (era `text-white`)
- **Gradientes** - Adicionadas variantes light mode
  - `from-amber-300/40 dark:from-amber-500/20` (era apenas dark)
- **Ponto da timeline** - `bg-gray-800 dark:bg-slate-900`

#### Página `estrutura-terra.tsx`

- **Seção "Geodínamo"** - Container e textos corrigidos
  - Container: `bg-gray-200/60 dark:bg-slate-800/60`
  - Texto: `text-gray-700 dark:text-slate-300`
- **Cards de Dados Científicos** - Gradientes e cores corrigidos
- **Gradientes dos Cards de Camadas** - Escurecidos para melhor contraste
  - Núcleo Externo: `from-yellow-600 to-amber-800`
  - Núcleo Interno: `from-red-600 to-orange-700`
- **Diagrama de Profundidade** - Texto do Núcleo Externo agora `text-gray-900`
- **Badge do Hero** - Adicionado gradiente light mode

#### Página `sistema-solar.tsx`

- **Sketchfab Embed** - `bg-gray-200/50 dark:bg-slate-900/50`
- **Link Externo** - Cores light mode adicionadas
- **Cards do Sol** - Títulos, valores e descrições corrigidos
- **Cards de Estatísticas** - Todos os 4 cards corrigidos
- **Cards de Recordes** - Corrigidos backgrounds e textos
- **Cards de Satélites** - Overlays e tooltips corrigidos

#### Página `continentes.tsx`

- **Dados dos Continentes** - textCor, bgCor, borderCor de todos os 6 continentes
  - África: `text-amber-600 dark:text-amber-400`
  - América: `text-emerald-600 dark:text-emerald-400`
  - Ásia: `text-red-600 dark:text-red-400`
  - Europa: `text-blue-600 dark:text-blue-400`
  - Oceania: `text-cyan-600 dark:text-cyan-400`
  - Antártida: `text-slate-600 dark:text-slate-300`
- **Gradientes dos Continentes** - Variantes light mode adicionadas
- **Dados Globais** - 4 cards de estatísticas corrigidos

### 📋 Padrões Estabelecidos

#### Cores de Texto

| Uso        | Light Mode       | Dark Mode             |
| ---------- | ---------------- | --------------------- |
| Título     | `text-gray-900`  | `dark:text-white`     |
| Corpo      | `text-gray-700`  | `dark:text-slate-300` |
| Secundário | `text-gray-600`  | `dark:text-slate-400` |
| Acentuado  | `text-[cor]-600` | `dark:text-[cor]-400` |

#### Gradientes de Cards

| Light Mode                           | Dark Mode                                      |
| ------------------------------------ | ---------------------------------------------- |
| `from-[cor]-200/50 to-[cor2]-200/50` | `dark:from-[cor]-900/30 dark:to-[cor2]-900/30` |

#### Fundos

| Uso   | Light Mode       | Dark Mode              |
| ----- | ---------------- | ---------------------- |
| Card  | `bg-gray-200/60` | `dark:bg-slate-800/60` |
| Seção | `bg-gray-200/50` | `dark:bg-slate-800/30` |

### 🔧 Técnico

- Novo arquivo: `docs/THEME-PATTERNS.md`
- Arquivos modificados:
  - `src/pages/capitulo/planeta-terra/rotacao-terra.tsx`
  - `src/pages/capitulo/planeta-terra/estrutura-terra.tsx`
  - `src/pages/capitulo/planeta-terra/sistema-solar.tsx`
  - `src/pages/capitulo/planeta-terra/continentes.tsx`

---

## [0.4.2-beta] - 2025-12-04

### 🎠 Melhorias na Página Rotação da Terra

Esta versão adiciona infográfico educativo, galeria de imagens com carousel e vídeo exclusivo do canal do YouTube.

### ✨ Adicionado

#### Infográfico Educativo

- **Infográfico "A Terra em Movimento"** - Guia rápido sobre a rotação do planeta
- Resumo visual de velocidade, inclinação axial, efeitos e variações
- Layout consistente com a página estrutura-terra

#### Galeria de Imagens com Carousel

- **RotacaoTerraCarousel.tsx** - Novo componente de carousel com 15 imagens
- Funcionalidades:
  - Autoplay com transição a cada 5 segundos
  - Botões Pausar/Reproduzir para controle da reprodução
  - Navegação manual (Anterior/Próxima)
  - Indicadores de pontos clicáveis
  - Barra de progresso visual
  - Controles responsivos para mobile e desktop
- Seção "A Terra em Movimento" com jornada científica pela rotação

#### Vídeo Exclusivo

- **Novo vídeo do canal YouTube** substituindo o vídeo genérico
- URL: `https://youtu.be/ukkaTKdnfw4`
- Título atualizado para "Vídeo Exclusivo"

### 🔧 Técnico

- Novo componente: `src/components/ui/RotacaoTerraCarousel.tsx`
- Importação do `FaBookOpen` para ícone da galeria
- 15 imagens em `public/images/rotacao-terra/` (1.jpg a 15.jpg)
- Infográfico em `public/images/infograficos/Rotação da Terra infográfico.png`

---

## [0.4.1-beta] - 2025-12-03

### 🌍 Nova Página: Rotação da Terra + Visualização 3D

Esta versão adiciona uma página completa e interativa sobre a Rotação da Terra, com componente 3D da Terra girando em seu eixo inclinado.

### ✨ Adicionado

#### Página Rotação da Terra (`/capitulo/planeta-terra/rotacao-terra`)

**Visualização 3D Interativa**

- **PlanetEarthRotation3D.tsx** - Componente React Three Fiber com:
  - Terra girando com eixo inclinado em 23,5°
  - Linha amarela indicando o eixo de rotação
  - Linha vermelha marcando o equador
  - Rotação contínua automática via `useFrame`
  - Fundo espacial com estrelas (`Stars` do Drei)
  - `OrbitControls` para interação do usuário

**Conteúdo Científico Completo**

- **Dados Científicos** - 4 cards: Período Sideral (23h 56m 4s), Velocidade no Equador (1.670 km/h), Inclinação Axial (23,5°), Velocidade Angular (465 m/s)
- **Velocidade por Latitude** - Gráfico de barras do equador aos polos
- **6 Consequências da Rotação** - Dia/Noite, Efeito Coriolis, Correntes Oceânicas, Padrões de Ventos, Achatamento Polar, Campo Magnético
- **Inclinação Axial e Estações** - Explicação detalhada com dados dos trópicos e círculos polares
- **Evolução Histórica** - Timeline de 4,5 bilhões de anos até previsão futura (5 marcos)
- **Efeito Coriolis Detalhado** - Fórmula física, aplicações práticas, mito do ralo desvendado
- **6 Curiosidades Fascinantes** - Influência da Lua, Dias dos Dinossauros, Segundos Intercalares, etc.
- **Vídeo Educativo** - Player YouTube incorporado com design destacado

**Navegação e Rodapé**

- Link para página anterior: Estrutura da Terra
- Link para próxima página: Continentes
- Rodapé institucional padrão

#### Novo Componente

- **PlanetEarthRotation3D.tsx** (`src/components/content/`) - Componente 3D reutilizável da Terra rotacionando

### 🔧 Técnico

- Importação dinâmica com `next/dynamic` e loading state
- Textura da Terra via `useTexture` do Drei
- Inclinação de 23,5° implementada com `rotation={[0.41, 0, 0]}`
- Compatível com modo escuro
- Responsivo (altura adaptativa mobile/desktop)

---

## [0.4.0-beta] - 2025-12-03

### 🎨 Padronização de Navegação e Rodapé Institucional

Esta versão padroniza os botões de navegação inferior e adiciona rodapé institucional consistente em todas as páginas do capítulo Planeta Terra.

### ✨ Adicionado

#### Rodapé Institucional

- **Novo texto institucional** em todas as páginas:
  - "Enciclopédia da Ciência 2025"
  - "Conteúdo Feito com ❤️ e ☕ por Jhonnatan Luiz"
- **Footer.tsx atualizado** - Componente global com novo texto institucional
- **Rodapé inline** adicionado em páginas de subcapítulos (introdução, sistema-solar, estrutura-terra)

#### Navegação Padronizada

- **Estilo unificado** de botões de navegação conforme página `estrutura-terra`:
  - Botão "Anterior": `bg-slate-800 hover:bg-slate-700` com ícone animado
  - Botão "Próximo": `bg-gradient-to-r from-cyan-600 to-blue-600` com ícone animado
- **Página Planeta Terra (index)** - Botões estilizados com gradiente, usando componente `<Link>`
- **Página Introdução** - Navegação padronizada com `<Link>` e ícones `FaArrowLeft`/`FaArrowRight`
- **Páginas Sistema Solar e Estrutura da Terra** - Rodapé institucional adicionado após navegação

### 🔄 Modificado

- **Footer.tsx** - Texto atualizado de "© 2025 - Todos os direitos reservados" para novo formato institucional
- **planeta-terra/index.tsx** - Botões de navegação com estilo gradiente, removido rodapé duplicado (mantém apenas Footer global)
- **introducao.tsx** - Botões estilizados conforme padrão `estrutura-terra`

### 🐛 Corrigido

- **Rodapé duplicado** removido da página `planeta-terra/index.tsx` (mantém apenas o `<Footer />` global)
- **Links de navegação** convertidos de `<a>` para `<Link>` para melhor performance do Next.js

### 🔧 Técnico

- Responsividade mantida com classes `dark:text-gray-400` e `dark:text-blue-400`
- Compatibilidade total com modo escuro
- Animações de hover nos ícones de navegação (`group-hover:-translate-x-1` e `group-hover:translate-x-1`)

---

## [0.3.0-beta] - 2025-12-02

### 🌍 Página Estrutura da Terra Completa + Integração Sketchfab

Esta versão adiciona conteúdo multimídia rico às páginas Sistema Solar e Estrutura da Terra, incluindo modelos 3D via Sketchfab, infográficos, vídeos e carousel de imagens.

### ✨ Adicionado

#### Página Sistema Solar

- **Sketchfab Embed** - Modelo 3D interativo do Sistema Solar
- **Instruções de interação** - Dicas de uso (rotacionar, zoom, explorar)
- **Link externo** para visualização no Sketchfab

#### Página Estrutura da Terra (`/capitulo/planeta-terra/estrutura-terra`)

**Visualização 3D via Sketchfab**

- Modelo interativo das camadas internas da Terra
- Autostart com tema escuro
- Link para visualização no Sketchfab

**Infográfico Educativo**

- Infográfico "Desvendando a Estrutura da Terra"
- Composição química e propriedades mecânicas das camadas
- Fonte: Enciclopédia da Ciência

**Vídeo Educativo**

- Player do YouTube incorporado
- Design destacado com gradiente vermelho/roxo
- Link direto para o YouTube

**Carousel de Imagens - O Interior do Nosso Planeta**

- 12 imagens do PDF educativo
- Transição automática a cada 5 segundos
- Controles manuais: Anterior, Pausar/Reproduzir, Próxima
- Indicadores de pontos clicáveis
- Barra de progresso visual

#### Novos Componentes

**ImageCarousel.tsx** (`src/components/ui/`)

- Carousel reutilizável com autoplay
- Controles de navegação responsivos
- Indicadores de progresso
- Compatível com tema escuro

**EarthLayersModel.tsx** (`src/components/content/`)

- Modelo 3D das camadas terrestres
- Desenvolvido com React Three Fiber

#### Novos Assets

**Imagens do PDF** (`/images/estrutura-terra/`)

- 12 imagens renomeadas de 1.jpg a 12.jpg
- Originalmente: O_Interior_do_Nosso_Planeta_Uma_Jornada_Científica_page-0001 a 0012

**Infográfico** (`/images/infograficos/`)

- Estrutura da Terra infográfico.png

### 🔧 Técnico

- Integração com Sketchfab via iframe embed
- Parâmetros: autostart=1, ui_theme=dark, ui_infos=0, ui_watermark=0
- Renomeação de arquivos para evitar problemas com caracteres especiais
- Componente ImageCarousel com useState e useEffect para autoplay

---

## [0.2.0-beta] - 2025-11-28

### 🌌 Página Sistema Solar Completa

Esta versão adiciona uma página completa e rica sobre o Sistema Solar, com conteúdo educativo detalhado, imagens e vídeo exclusivo.

### ✨ Adicionado

#### Página Sistema Solar (`/capitulo/planeta-terra/sistema-solar`)

**O Sol - Nossa Estrela**

- Imagem principal do Sol com gradiente overlay
- Dados científicos: diâmetro, temperatura, idade
- Cards informativos com design moderno

**Os 8 Planetas**

- Grid de cards com imagens de alta qualidade
- Informações: tipo (Rochoso/Gasoso/Gigante de Gelo), diâmetro, distância
- Curiosidades científicas para cada planeta
- Tags coloridas por tipo de planeta

**Os 5 Planetas Anões**

- Plutão em destaque com imagem grande
- Grid com Éris, Haumea, Makemake e Ceres
- Localização (Cinturão de Kuiper, Disco Disperso, etc.)
- Curiosidades sobre cada planeta anão

**Cometas Famosos**

- 3 cometas com imagens: Halley, Hale-Bopp, 67P/Churyumov-Gerasimenko
- Comparação detalhada Halley vs Hale-Bopp
- Períodos orbitais, última e próxima passagem
- Informações sobre a missão Rosetta

**Satélites Naturais (10 Luas)**

- Grid compacto de 5 colunas
- Luas de Terra, Júpiter, Saturno, Urano e Netuno
- Efeito hover com curiosidades
- Tags coloridas por planeta

**Vídeo Exclusivo do YouTube**

- Player embeddado do vídeo criado especialmente para o site
- Design destacado com gradiente vermelho/roxo
- Link direto para o YouTube

**Dados Científicos Expandidos**

- Estatísticas principais (idade, massa do Sol, luas, asteroides)
- 6 cards de curiosidades fascinantes
- Seção de comparações de escala
- 4 recordes do Sistema Solar

#### API de Imagens

- **`/api/planeta-img.ts`** - API route para servir imagens do sistema solar
- Suporte para PNG e JPG
- Cache de longa duração (1 ano)

#### Imagens Adicionadas

- 8 imagens de planetas (Mercúrio a Netuno)
- 1 imagem do Sol
- 5 imagens de planetas anões
- 3 imagens de cometas famosos
- 10 imagens de satélites naturais (luas)

### 🔧 Técnico

- API route customizada para contornar limitações de arquivos estáticos
- Importações dinâmicas para componentes 3D
- Layout responsivo com grid adaptativo

---

## [0.1.0-beta] - 2025-11-28

### 🎉 Versão Beta - Lançamento Público

Esta é a primeira versão beta pública da Enciclopédia da Ciência, incluindo PWA para funcionamento offline e conteúdo enriquecido do Planeta Terra.

### ✨ Adicionado

#### PWA (Progressive Web App)

- **Service Worker manual** (`public/sw.js`) para cache e offline
- **Manifest.json** com metadados do aplicativo
- **Ícone SVG** para instalação do app
- **Meta tags PWA** no `_document.tsx`
- **Registro automático** do Service Worker em produção
- **Estratégia Network First** com fallback para cache
- **Cache de assets estáticos** (imagens, CSS, JS)

#### Conteúdo Planeta Terra

- **Introdução completa** com seções científicas detalhadas:
  - O Que É a Terra?
  - Dados Científicos Fundamentais
  - Estrutura Interna
  - Atmosfera
  - Campo Magnético
  - Hidrosfera
  - Por Que a Terra é Especial?
- **7 imagens científicas** com contexto educacional:
  - Floresta Amazônica
  - Himalaia e Everest
  - Deserto do Saara
  - Fundo do Oceano
  - Terra vista do Espaço
  - Fauna Terrestre
  - Habitat Humano
- **Vídeo do YouTube** incorporado ("Planeta Terra: Uma Biografia")

#### Visualização 3D

- **PlanetEarth3D component** - Terra 3D interativa com:
  - Textura realista da Terra
  - Rotação automática
  - OrbitControls para interação
  - Iluminação ambiente e direcional
  - Fundo com estrelas

#### Busca

- **Sistema de busca** implementado com Fuse.js
- **Busca fuzzy** por todo o conteúdo da enciclopédia

### 📦 Novas Dependências

```json
{
  "react-icons": "^5.5.0",
  "fuse.js": "^7.x"
}
```

### 🔧 Técnico

- Service Worker customizado compatível com Next.js 16 + Turbopack
- Registro do SW em `_app.tsx` via `useEffect`
- Nomes de arquivos de imagem normalizados (sem acentos/espaços)

---

## [1.0.0] - 2024-11-27

### 🎉 Lançamento Inicial

Esta é a primeira versão da Enciclopédia da Ciência, incluindo a estrutura base completa do projeto com interface moderna e funcionalidades interativas.

### ✨ Adicionado

#### Interface & Layout

- **Header responsivo** com navegação, logo e menu mobile
- **Sidebar** com lista de todos os 10 capítulos e ícones
- **Footer** com links, badges de tecnologia e gradiente
- **Grid de cards** responsivo para exibição dos capítulos na home
- **Design system** com cores consistentes (cyan, purple, pink)

#### Modo Escuro/Claro

- **ThemeToggle component** com ícones animados (🌙/☀️)
- **Detecção automática** de `prefers-color-scheme` do sistema
- **Persistência** da preferência do usuário em `localStorage`
- **Transições suaves** (300ms) entre temas
- **Configuração Tailwind v4** com `@custom-variant dark`
- **Scrollbar customizada** para ambos os temas

#### Átomo Interativo

- **HeroAtom (2D)** - Animação CSS com:

  - 3 órbitas com velocidades diferentes
  - 5 elétrons orbitando
  - Núcleo pulsante com gradiente
  - Partículas decorativas com `animate-ping`
  - Badges informativos (10 Capítulos, 207 Páginas, 100% Gratuito)

- **Atom3D (Three.js)** - Modelo 3D interativo com:

  - React Three Fiber + Drei
  - Núcleo com prótons (vermelho) e nêutrons (azul)
  - 9 elétrons em 3 camadas orbitais (K, L, M)
  - OrbitControls para rotação 360°
  - Fundo espacial com estrelas
  - Legenda explicativa
  - Carregamento dinâmico (SSR disabled)

- **Toggle 2D/3D** na seção hero para alternar visualizações

#### Estrutura de Dados

- **capitulos.ts** - Arquivo centralizado com:
  - 10 capítulos com slug, título, descrição
  - Ícones emoji únicos para cada capítulo
  - Cores de gradiente customizadas

#### Páginas

- **index.tsx** - Home page completa com todos os componentes
- **sumario.tsx** - Placeholder para sumário
- **buscar.tsx** - Placeholder para busca
- **10 pastas de capítulos** com index.tsx

#### Configurações

- **tailwind.config.js** com:
  - `darkMode: 'class'`
  - Cores customizadas (primary, secondary, danger, success, warning)
  - Animações personalizadas (spin-slow, spin-reverse, pulse-slow)
- **globals.css** com:
  - `@custom-variant dark` para Tailwind v4
  - CSS variables para tema escuro
  - Classes utilitárias (.btn-primary, .btn-secondary, .card)
  - Scrollbar customizada

### 📦 Dependências

```json
{
  "next": "16.0.5",
  "react": "19.2.0",
  "react-dom": "19.2.0",
  "three": "^0.176.0",
  "@react-three/fiber": "^9.1.2",
  "@react-three/drei": "^10.0.7",
  "tailwindcss": "^4.1.17",
  "@tailwindcss/postcss": "^4.1.17",
  "typescript": "^5"
}
```

### 🔧 Técnico

- Next.js 16 com Pages Router
- Turbopack para desenvolvimento
- TypeScript para tipagem
- PostCSS para processamento CSS
- ESLint para linting

---

## [Unreleased]

### 🚧 Planejado para v1.0.0 (Release Final)

#### Conteúdo

- [ ] Completar todos os 10 capítulos com conteúdo científico
- [ ] Mais visualizações 3D (Sistema Solar, Átomos, Moléculas)
- [ ] Diagramas interativos

#### Funcionalidades

- [ ] Quiz interativo por capítulo
- [ ] Sistema de progresso do usuário
- [ ] Favoritos/Bookmarks
- [ ] Navegação entre subcapítulos (anterior/próximo)

#### UX/UI

- [ ] Animações de entrada nas páginas
- [ ] Loading skeletons
- [ ] Tooltips informativos

### 🚧 Planejado para v1.1.0

- [ ] Internacionalização (pt-BR, en-US, es)
- [ ] SEO otimizado com meta tags dinâmicas
- [ ] Sitemap automático
- [ ] Analytics integrado

---

## Tipos de Mudanças

- ✨ **Adicionado** - para novas funcionalidades
- 🔄 **Modificado** - para mudanças em funcionalidades existentes
- 🗑️ **Removido** - para funcionalidades removidas
- 🐛 **Corrigido** - para correções de bugs
- 🔒 **Segurança** - para vulnerabilidades corrigidas
- 📦 **Dependências** - para atualizações de pacotes
- 📝 **Documentação** - para mudanças em docs

---

## Links

- [Repositório](https://github.com/JhonnatanLuiz/enciclopedia-da-ciencia)
- [Issues](https://github.com/JhonnatanLuiz/enciclopedia-da-ciencia/issues)
- [Pull Requests](https://github.com/JhonnatanLuiz/enciclopedia-da-ciencia/pulls)
