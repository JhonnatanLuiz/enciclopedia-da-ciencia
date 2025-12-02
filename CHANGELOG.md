# 📝 Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

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
