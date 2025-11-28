# 🔬 Enciclopédia da Ciência

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.0.5-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.17-38B2AC?style=for-the-badge&logo=tailwind-css)
![Three.js](https://img.shields.io/badge/Three.js-3D-black?style=for-the-badge&logo=three.js)
![PWA](https://img.shields.io/badge/PWA-Ready-5A0FC8?style=for-the-badge&logo=pwa)

**Uma enciclopédia científica interativa com 10 capítulos e 209 páginas de conteúdo**

**🆕 Versão Beta - Novembro 2025**

[🚀 Demo](#demo) • [📖 Documentação](#estrutura-do-projeto) • [🛠️ Instalação](#como-executar) • [📝 Changelog](./CHANGELOG.md)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Capítulos](#capítulos-e-subcapítulos)
- [Como Executar](#como-executar)
- [Configurações](#configurações)
- [Roadmap](#roadmap)

---

## 📖 Sobre o Projeto

A **Enciclopédia da Ciência** é uma aplicação web moderna desenvolvida com Next.js, oferecendo uma experiência imersiva de aprendizado científico. O projeto apresenta conteúdo organizado em 10 capítulos principais, abrangendo desde a estrutura do Planeta Terra até Conservação e Meio Ambiente.

### ✨ Destaques

- 🎨 **Interface Moderna** - Design responsivo com gradientes e animações suaves
- 🌙 **Modo Escuro** - Alternância entre temas claro e escuro com persistência
- ⚛️ **Átomo Interativo** - Visualização animada e modelo 3D com Three.js
- 📱 **Responsivo** - Layout adaptável para desktop, tablet e mobile
- ⚡ **Performance** - Otimizado com Turbopack e carregamento dinâmico

---

## 🛠️ Tecnologias Utilizadas

### Core
| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| [Next.js](https://nextjs.org/) | 16.0.5 | Framework React com Pages Router |
| [React](https://react.dev/) | 19.2.0 | Biblioteca de UI |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Tipagem estática |
| [Tailwind CSS](https://tailwindcss.com/) | 4.1.17 | Framework CSS utilitário |

### 3D & Animações
| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| [Three.js](https://threejs.org/) | 0.176.0 | Biblioteca 3D |
| [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) | 9.1.2 | React renderer para Three.js |
| [@react-three/drei](https://github.com/pmndrs/drei) | 10.0.7 | Helpers para R3F |

### Build & Dev
| Tecnologia | Descrição |
|------------|-----------|
| Turbopack | Bundler de alta performance |
| PostCSS | Processador CSS |
| ESLint | Linting de código |

---

## 🎯 Funcionalidades

### Implementadas ✅

- [x] **Layout Principal** - Header, Sidebar e Footer responsivos
- [x] **Navegação por Capítulos** - 10 capítulos com ícones e cores únicas
- [x] **Modo Escuro/Claro** - Toggle com detecção de preferência do sistema
- [x] **Átomo 2D Animado** - CSS animations com órbitas e elétrons
- [x] **Átomo 3D Interativo** - Three.js com rotação 360° e OrbitControls
- [x] **Terra 3D Interativa** - Modelo 3D do Planeta Terra com texturas realistas
- [x] **Barra de Busca** - Sistema de busca com Fuse.js
- [x] **Cards de Capítulos** - Grid responsivo com hover effects
- [x] **Persistência de Tema** - localStorage para manter preferência
- [x] **PWA (Progressive Web App)** - Funciona offline após primeira visita
- [x] **Service Worker** - Cache de páginas e assets para uso offline
- [x] **Instalável** - Pode ser instalado como app no desktop/mobile
- [x] **Conteúdo Planeta Terra** - Introdução completa com imagens e vídeo
- [x] **Integração YouTube** - Vídeos educativos incorporados

### Em Desenvolvimento 🚧

- [ ] Conteúdo completo de todos os capítulos
- [ ] Mais visualizações 3D interativas
- [ ] Quiz e exercícios

---

## 📁 Estrutura do Projeto

```
enciclopedia-da-ciencia/
├── 📂 public/
│   ├── 📂 icons/
│   │   └── icon.svg              # Ícone do PWA
│   ├── 📂 images/
│   │   └── planeta-terra/        # Imagens do capítulo
│   ├── 📂 textures/
│   │   └── earth.jpg             # Textura 3D da Terra
│   ├── manifest.json             # Manifest do PWA
│   └── sw.js                     # Service Worker
├── 📂 src/
│   ├── 📂 components/
│   │   ├── 📂 content/
│   │   │   ├── Atom3D.tsx          # Átomo 3D com Three.js
│   │   │   ├── PlanetEarth3D.tsx   # Terra 3D com Three.js
│   │   │   └── HeroAtom.tsx        
│   │   ├── 📂 layout/
│   │   │   ├── Header.tsx          # Cabeçalho com navegação
│   │   │   ├── Sidebar.tsx         # Menu lateral de capítulos
│   │   │   └── Footer.tsx          # Rodapé
│   │   └── 📂 ui/
│   │       └── ThemeToggle.tsx     # Botão de alternância de tema
│   ├── 📂 contexts/
│   │   └── ThemeContext.tsx        # Contexto de tema (opcional)
│   ├── 📂 data/
│   │   └── capitulos.ts            # Dados centralizados dos capítulos
│   ├── 📂 pages/
│   │   ├── _app.tsx                # Componente raiz + Service Worker
│   │   ├── _document.tsx           # Documento HTML + PWA meta tags
│   │   ├── index.tsx               # Página inicial
│   │   ├── buscar.tsx              # Página de busca
│   │   ├── sumario.tsx             # Sumário
│   │   └── 📂 capitulo/            # Páginas dos capítulos
│   │       ├── planeta-terra/
│   │       ├── seres-vivos/
│   │       ├── biologia-humana/
│   │       ├── quimica-elementos/
│   │       ├── materiais-tecnologia/
│   │       ├── luz-energia/
│   │       ├── forca-movimento/
│   │       ├── eletricidade-eletronica/
│   │       ├── espaco-tempo/
│   │       └── conservacao-meio-ambiente/
│   └── 📂 styles/
│       └── globals.css             # Estilos globais + Tailwind
├── 📄 next.config.ts               # Configuração Next.js
├── 📄 tailwind.config.js           # Configuração Tailwind
├── 📄 postcss.config.js            # Configuração PostCSS
├── 📄 tsconfig.json                # Configuração TypeScript
├── 📄 package.json                 # Dependências
├── 📄 CHANGELOG.md                 # Histórico de versões
└── 📄 README.md                    # Este arquivo
```

---

## 📚 Capítulos e Subcapítulos

| # | Capítulo | Subcapítulos | Ícone |
|---|----------|--------------|-------|
| 1 | **Planeta Terra** | 17 | 🌍 |
| 2 | **Seres Vivos** | 20 | 🦋 |
| 3 | **Biologia Humana** | 22 | 🧬 |
| 4 | **Química e Elementos** | 21 | 🧪 |
| 5 | **Materiais e Tecnologia** | 17 | 🔧 |
| 6 | **Luz e Energia** | 18 | 💡 |
| 7 | **Força e Movimento** | 20 | 🚀 |
| 8 | **Eletricidade e Eletrônica** | 16 | ⚡ |
| 9 | **Espaço e Tempo** | 22 | 🌌 |
| 10 | **Conservação e Meio Ambiente** | 21 | 🌱 |

**Total: 10 capítulos • 209 páginas**

---

## 📱 PWA (Progressive Web App)

A Enciclopédia da Ciência funciona como um **aplicativo instalável** com suporte offline.

### Como Instalar

1. Acesse o site em um navegador compatível (Chrome, Edge, Safari)
2. Clique no ícone de instalação na barra de endereço
3. Ou vá em Menu (⋮) → "Instalar Enciclopédia da Ciência"

### Funcionamento Offline

- **Estratégia Network First**: Busca conteúdo online primeiro, usa cache se offline
- **Cache de Assets**: Imagens, CSS, JS são armazenados localmente
- **Navegação Offline**: Páginas visitadas ficam disponíveis sem internet

### Arquivos do PWA

| Arquivo | Descrição |
|---------|-----------|
| `public/manifest.json` | Metadados do app (nome, cores, ícones) |
| `public/sw.js` | Service Worker para cache e offline |
| `public/icons/icon.svg` | Ícone do aplicativo |

---

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/JhonnatanLuiz/enciclopedia-da-ciencia.git

# Entre no diretório
cd enciclopedia-da-ciencia

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse: **http://localhost:3000**

### Build de Produção

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

---

## ⚙️ Configurações

### Cores do Tema

```javascript
// tailwind.config.js
colors: {
  primary: '#06b6d4',    // Cyan
  secondary: '#8b5cf6',  // Purple
  danger: '#ef4444',     // Red
  success: '#10b981',    // Green
  warning: '#f59e0b',    // Orange
}
```

### Modo Escuro (Tailwind v4)

```css
/* globals.css */
@custom-variant dark (&:where(.dark, .dark *));
```

### Animações Customizadas

- `animate-spin-slow` - Rotação lenta (12s)
- `animate-spin-slower` - Rotação mais lenta (18s)
- `animate-spin-slowest` - Rotação muito lenta (24s)
- `animate-spin-reverse` - Rotação reversa (15s)
- `animate-pulse-slow` - Pulsação suave (3s)

---

## 🗺️ Roadmap

### Versão 0.1.0 - Beta (Atual) ✅
- ✅ Estrutura base do projeto
- ✅ Layout responsivo
- ✅ Modo escuro/claro
- ✅ Átomo 2D e 3D
- ✅ PWA com Service Worker
- ✅ Funcionamento offline
- ✅ Conteúdo Planeta Terra (introdução)
- ✅ Integração com YouTube

### Versão 1.0 (Próxima)
- [ ] Conteúdo completo de todos os capítulos
- [ ] Mais modelos 3D interativos
- [ ] Melhorias de performance

### Versão 1.1 (Futuro)
- [ ] Quiz interativo
- [ ] Favoritos e progresso do usuário
- [ ] Internacionalização (i18n)

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

## 👤 Autor

**Jhonnatan Luiz**

- GitHub: [@JhonnatanLuiz](https://github.com/JhonnatanLuiz)

---

<div align="center">

Feito com ❤️ e ☕ por Jhonnatan Luiz

</div>
