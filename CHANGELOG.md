# 📝 Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

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
