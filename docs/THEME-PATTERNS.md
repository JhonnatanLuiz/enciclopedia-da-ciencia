# 🎨 Padrões de Cores - Light/Dark Mode

Este documento define os padrões de cores que devem ser seguidos para garantir visibilidade adequada em ambos os modos (claro e escuro) do tema.

---

## 📋 Índice

1. [Princípios Gerais](#princípios-gerais)
2. [Cores de Texto](#cores-de-texto)
3. [Cores de Fundo](#cores-de-fundo)
4. [Gradientes](#gradientes)
5. [Bordas](#bordas)
6. [Cores Acentuadas](#cores-acentuadas)
7. [Exemplos Práticos](#exemplos-práticos)

---

## 🎯 Princípios Gerais

### Regra de Ouro
> **SEMPRE** usar o prefixo `dark:` para definir variantes do modo escuro. Nunca use cores únicas que funcionam apenas em um modo.

### Padrão de Nomenclatura
```
[cor-light] dark:[cor-dark]
```

### Escala de Intensidade
- **Light Mode**: Usar cores mais escuras (600-900) para textos, mais claras (100-300) para fundos
- **Dark Mode**: Usar cores mais claras (300-400) para textos, mais escuras (800-900) para fundos

---

## ✏️ Cores de Texto

### Títulos Principais
```css
text-gray-900 dark:text-white
```

### Texto de Corpo (Parágrafos)
```css
text-gray-700 dark:text-slate-300
```

### Texto Secundário (Descrições, Labels)
```css
text-gray-600 dark:text-slate-400
/* ou */
text-gray-600 dark:text-gray-400
```

### Texto Terciário (Notas, Metadados)
```css
text-gray-500 dark:text-slate-500
```

### Cores Acentuadas (Ex: cyan, purple, amber)
```css
/* ❌ ERRADO - invisível no light mode */
text-cyan-400

/* ✅ CORRETO */
text-cyan-600 dark:text-cyan-400
```

### Tabela de Cores Acentuadas

| Cor | Light Mode | Dark Mode | Classe Completa |
|-----|------------|-----------|-----------------|
| Cyan | `text-cyan-600` | `text-cyan-400` | `text-cyan-600 dark:text-cyan-400` |
| Blue | `text-blue-600` | `text-blue-400` | `text-blue-600 dark:text-blue-400` |
| Purple | `text-purple-600` | `text-purple-400` | `text-purple-600 dark:text-purple-400` |
| Green | `text-green-600` | `text-green-400` | `text-green-600 dark:text-green-400` |
| Emerald | `text-emerald-600` | `text-emerald-400` | `text-emerald-600 dark:text-emerald-400` |
| Orange | `text-orange-600` | `text-orange-400` | `text-orange-600 dark:text-orange-400` |
| Amber | `text-amber-600` | `text-amber-400` | `text-amber-600 dark:text-amber-400` |
| Red | `text-red-600` | `text-red-400` | `text-red-600 dark:text-red-400` |
| Yellow | `text-yellow-600` | `text-yellow-400` | `text-yellow-600 dark:text-yellow-400` |
| Teal | `text-teal-600` | `text-teal-400` | `text-teal-600 dark:text-teal-400` |
| Indigo | `text-indigo-600` | `text-indigo-400` | `text-indigo-600 dark:text-indigo-400` |
| Pink | `text-pink-600` | `text-pink-400` | `text-pink-600 dark:text-pink-400` |
| Rose | `text-rose-600` | `text-rose-400` | `text-rose-600 dark:text-rose-400` |
| Violet | `text-violet-600` | `text-violet-400` | `text-violet-600 dark:text-violet-400` |
| Slate | `text-slate-600` | `text-slate-300` | `text-slate-600 dark:text-slate-300` |

---

## 🖼️ Cores de Fundo

### Fundo Principal da Página
```css
bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900
```

### Fundo de Seções Alternadas
```css
bg-gray-200/50 dark:bg-slate-800/30
```

### Fundo de Cards
```css
bg-gray-200/60 dark:bg-slate-800/60
/* ou */
bg-gray-200/50 dark:bg-slate-800/50
```

### Fundo de Cards com Hover
```css
bg-gray-200/60 dark:bg-slate-800/60 hover:bg-gray-300/60 dark:hover:bg-slate-700/60
```

### Fundo de Elementos Internos (badges, tags)
```css
bg-gray-300/50 dark:bg-slate-900/50
/* ou */
bg-gray-300/50 dark:bg-slate-700/50
```

### Navegação
```css
bg-white/90 dark:bg-slate-900/90
```

---

## 🌈 Gradientes

### Padrão para Gradientes de Cards de Dados

```css
/* ❌ ERRADO - muito escuro no light mode */
from-cyan-900/30 to-blue-900/30

/* ✅ CORRETO */
from-cyan-200/50 to-blue-200/50 dark:from-cyan-900/30 dark:to-blue-900/30
```

### Tabela de Gradientes por Cor

| Cor | Light Mode | Dark Mode |
|-----|------------|-----------|
| Cyan/Blue | `from-cyan-200/50 to-blue-200/50` | `dark:from-cyan-900/30 dark:to-blue-900/30` |
| Orange/Red | `from-orange-200/50 to-red-200/50` | `dark:from-orange-900/30 dark:to-red-900/30` |
| Purple/Pink | `from-purple-200/50 to-pink-200/50` | `dark:from-purple-900/30 dark:to-pink-900/30` |
| Green/Emerald | `from-green-200/50 to-emerald-200/50` | `dark:from-green-900/30 dark:to-emerald-900/30` |
| Amber/Orange | `from-amber-200/50 to-orange-200/50` | `dark:from-amber-900/30 dark:to-orange-900/30` |
| Yellow/Orange | `from-yellow-200/50 to-orange-200/50` | `dark:from-yellow-900/30 dark:to-orange-900/30` |
| Red/Orange | `from-red-200/50 to-orange-200/50` | `dark:from-red-900/30 dark:to-orange-900/30` |
| Blue/Indigo | `from-blue-200/50 to-indigo-200/50` | `dark:from-blue-900/30 dark:to-indigo-900/30` |
| Emerald/Teal | `from-emerald-200/50 to-teal-200/50` | `dark:from-emerald-900/30 dark:to-teal-900/30` |
| Slate/Zinc | `from-slate-300/50 to-zinc-300/50` | `dark:from-slate-800/30 dark:to-zinc-800/30` |

### Gradientes para Seções Especiais

```css
/* Seção destacada com borda */
bg-gradient-to-br from-purple-100/20 via-gray-200/50 to-indigo-100/20 
dark:from-purple-900/20 dark:via-slate-800/50 dark:to-indigo-900/20

/* Hero section */
bg-gradient-to-r from-indigo-100/40 to-purple-100/40 
dark:from-indigo-900/40 dark:to-purple-900/40
```

---

## 📏 Bordas

### Bordas de Cards
```css
border border-gray-300/50 dark:border-slate-700/50
```

### Bordas com Cor Acentuada
```css
/* ❌ ERRADO */
border-cyan-500/20

/* ✅ CORRETO */
border-cyan-400/30 dark:border-cyan-500/20
```

### Tabela de Bordas por Cor

| Cor | Light Mode | Dark Mode |
|-----|------------|-----------|
| Cyan | `border-cyan-400/30` | `dark:border-cyan-500/20` |
| Blue | `border-blue-400/30` | `dark:border-blue-500/20` |
| Purple | `border-purple-400/30` | `dark:border-purple-500/20` |
| Green | `border-green-400/30` | `dark:border-green-500/20` |
| Orange | `border-orange-400/30` | `dark:border-orange-500/20` |
| Amber | `border-amber-400/50` | `dark:border-amber-500/30` |
| Red | `border-red-400/50` | `dark:border-red-500/30` |

### Bordas de Hover
```css
hover:border-gray-400/50 dark:hover:border-slate-600/50
/* ou com cor */
hover:border-cyan-500/30
```

---

## 🎨 Cores Acentuadas (Badges, Tags, Ícones)

### Badges com Fundo
```css
/* Fundo + Texto */
bg-cyan-500/20 text-cyan-700 dark:text-cyan-300
bg-purple-500/20 text-purple-600 dark:text-purple-400
bg-amber-500/20 text-amber-600 dark:text-amber-400
```

### Ícones de Seção
```css
/* Ícones que acompanham títulos */
text-cyan-600 dark:text-cyan-400
text-purple-600 dark:text-purple-400
```

---

## 📝 Exemplos Práticos

### Card de Dados Científicos (Completo)

```tsx
<div className="bg-gradient-to-br from-cyan-200/50 to-blue-200/50 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-2xl p-6 border border-cyan-400/30 dark:border-cyan-500/20">
  <p className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">
    1.670
    <span className="text-lg ml-1">km/h</span>
  </p>
  <p className="text-gray-900 dark:text-white font-medium mt-1">Velocidade</p>
  <p className="text-gray-600 dark:text-gray-400 text-xs mt-2">No equador</p>
</div>
```

### Card de Conteúdo (Completo)

```tsx
<div className="bg-gray-200/60 dark:bg-slate-800/60 rounded-xl p-5 border border-gray-300/50 dark:border-slate-700/50 hover:border-gray-400/50 dark:hover:border-slate-600/50 transition-colors">
  <h3 className="text-gray-900 dark:text-white font-medium mb-2">Título</h3>
  <p className="text-gray-700 dark:text-slate-300 text-sm">Descrição do conteúdo.</p>
  <span className="text-gray-500 dark:text-slate-500 text-xs">Metadado</span>
</div>
```

### Seção com Título e Descrição

```tsx
<section className="py-12 bg-gray-200/50 dark:bg-slate-800/30">
  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
    <IconComponent className="text-cyan-600 dark:text-cyan-400" />
    Título da Seção
  </h2>
  <p className="text-gray-600 dark:text-slate-400 max-w-3xl">
    Descrição da seção com informações relevantes.
  </p>
</section>
```

### Botão de Navegação

```tsx
<Link
  href="/pagina"
  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-200 hover:bg-gray-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all"
>
  Texto do Botão
</Link>
```

---

## ⚠️ Erros Comuns a Evitar

### 1. Texto Claro Sem Variante Dark
```css
/* ❌ ERRADO - invisível no light mode */
text-white
text-slate-300
text-cyan-400

/* ✅ CORRETO */
text-gray-900 dark:text-white
text-gray-700 dark:text-slate-300
text-cyan-600 dark:text-cyan-400
```

### 2. Gradientes Escuros Sem Variante Light
```css
/* ❌ ERRADO - muito escuro no light mode */
from-cyan-900/30 to-blue-900/30

/* ✅ CORRETO */
from-cyan-200/50 to-blue-200/50 dark:from-cyan-900/30 dark:to-blue-900/30
```

### 3. Fundo Escuro Sem Variante Light
```css
/* ❌ ERRADO */
bg-slate-800/60

/* ✅ CORRETO */
bg-gray-200/60 dark:bg-slate-800/60
```

### 4. Borda Sem Variante Light
```css
/* ❌ ERRADO */
border-slate-700/50

/* ✅ CORRETO */
border-gray-300/50 dark:border-slate-700/50
```

---

## 🔍 Checklist de Revisão

Antes de finalizar uma página, verifique:

- [ ] Todos os textos têm variantes `dark:`?
- [ ] Todos os fundos têm variantes `dark:`?
- [ ] Todos os gradientes têm variantes `dark:`?
- [ ] Todas as bordas têm variantes `dark:`?
- [ ] As cores acentuadas usam versões 600 para light e 400 para dark?
- [ ] Os cards são visíveis em ambos os modos?
- [ ] Os botões de navegação funcionam em ambos os modos?

---

## 📚 Referência Rápida

### Padrão de Texto
| Uso | Classes |
|-----|---------|
| Título | `text-gray-900 dark:text-white` |
| Corpo | `text-gray-700 dark:text-slate-300` |
| Secundário | `text-gray-600 dark:text-slate-400` |
| Terciário | `text-gray-500 dark:text-slate-500` |
| Acentuado | `text-[cor]-600 dark:text-[cor]-400` |

### Padrão de Fundo
| Uso | Classes |
|-----|---------|
| Card | `bg-gray-200/60 dark:bg-slate-800/60` |
| Seção | `bg-gray-200/50 dark:bg-slate-800/30` |
| Interno | `bg-gray-300/50 dark:bg-slate-900/50` |

### Padrão de Gradiente
| Uso | Classes |
|-----|---------|
| Card dados | `from-[cor]-200/50 to-[cor2]-200/50 dark:from-[cor]-900/30 dark:to-[cor2]-900/30` |

### Padrão de Borda
| Uso | Classes |
|-----|---------|
| Card | `border-gray-300/50 dark:border-slate-700/50` |
| Acentuada | `border-[cor]-400/30 dark:border-[cor]-500/20` |

---

*Documento criado em: 05/12/2025*
*Última atualização: 05/12/2025*
