# Prompt — Continentes (Mídias + Lighthouse + Versionamento)

Use este prompt quando você quiser implementar/atualizar a seção **Mídias** da página **Planeta Terra → Continentes**, mantendo consistência visual, evitando problemas com nomes/URLs e melhorando a pontuação do Lighthouse.

---

## Papel

Você é um assistente de programação trabalhando no projeto **Enciclopédia da Ciência** (Next.js Pages Router + React + TS + Tailwind). Você deve:

- Implementar a seção de mídias por continente seguindo o padrão definido.
- Garantir compatibilidade com Windows/OneDrive (evitar nomes problemáticos e arquivos locais).
- Validar com `npm run build`.
- Versionar com branch/commits coesos e PR.

---

## Arquivo-alvo

- Página: `src/pages/capitulo/planeta-terra/continentes.tsx`
- Componente de galeria: `src/components/ui/ImageCarousel.tsx`

---

## Requisitos funcionais (obrigatórios)

### 1) Ordem das mídias (sempre)

Para o continente que estiver sendo trabalhado, a seção **Mídias** deve seguir exatamente a ordem:

1. **Vídeo (YouTube embed)**
2. **Infográfico (imagem)**
3. **Galeria em carousel (imagens)**

Sem criar novas páginas, modais ou variações de layout além desse padrão.

### 2) Estrutura de pastas (assets)

- Imagens do continente:
  - `public/images/continentes/<continente>/...`
  - Ex.: `public/images/continentes/africa/`
  - Ex.: `public/images/continentes/america/`

- Infográficos:
  - `public/images/infograficos/`

### 3) Nomes de arquivos “seguros”

Antes de referenciar imagens/infográficos no código:

- Remover **acentos**, **espaços** e **pontuação**.
- Preferir `snake_case` (ou `kebab-case`, mas manter consistência por pasta).
- Manter extensões padronizadas (ex.: `.png`).

Exemplo:
- Ruim: `Estátua da Liberdade, EUA (Nova York).png`
- Bom: `estatua_da_liberdade_eua_nova_york.png`

### 4) Carousel

- Usar o componente `ImageCarousel`.
- Passar `images`, `altPrefix` e `getCaption`.
- A legenda deve vir do filename (sem extensão, `_` → espaço), usando o helper existente na página.
- Exibir o contador `{n} fotos` ao lado do título “Galeria em carousel”.

### 5) YouTube (privacy)

- Usar embed no modo privacy-enhanced:
  - `https://www.youtube-nocookie.com/embed/<id>`

### 6) Imagens com dimensões explícitas

- Em `<img>` de infográficos e imagens do carousel, usar `width` e `height` para reduzir avisos do Lighthouse.
- Preferir também `loading="lazy"` e `decoding="async"`.

---

## Requisitos de UX/A11y (Lighthouse)

- **Touch targets**: botões do carousel devem ter área clicável confortável (alvo mínimo ~44×44).
- **Contraste**: textos precisam ser legíveis no light/dark (usar tokens existentes do projeto, sem inventar cores novas fora do padrão).
- **Evitar overflow**: indicadores (dots) não podem estourar a largura; se houver muitos, permitir wrap ou outra estratégia sem quebrar o layout.

---

## Requisitos de validação

Antes de commitar:

- Rodar `npm run build` e garantir que o build passe.

Se `npm run dev` estiver instável por OneDrive/locks, use `npm run build` como gate mínimo.

---

## Versionamento (padrão)

- Criar/usar branch com prefixo apropriado (ex.: `content/<tema>`).
- Fazer commits pequenos e coesos.
- Fazer push e atualizar PR.

Sugestões de commits:
- `feat(continentes): midias da <continente> (video + infografico + carousel)`
- `chore(assets): normalize filenames for <continente> images`
- `perf(a11y): youtube-nocookie + touch targets + explicit image sizes`

---

## Checklist final (obrigatório)

- [ ] Seção do continente implementada na ordem: vídeo → infográfico → carousel
- [ ] Assets em pastas corretas
- [ ] Nomes de arquivos sem acentos/espaços/pontuação
- [ ] `youtube-nocookie` no embed
- [ ] `<img>` com `width/height` + `decoding="async"`
- [ ] Carousel com legendas derivadas do filename
- [ ] Sem overflow dos dots
- [ ] `npm run build` passou
- [ ] Commit/push feitos e PR atualizada

---

## Referências internas

- Guia completo de versionamento: `.github/prompts/guia-versionamento-padroes.md`
- Guia de mídias em Continentes: `.github/prompts/guia-midias-continentes.md`
