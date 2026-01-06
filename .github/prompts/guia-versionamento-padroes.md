# Guia de Versionamento (Padrões Recomendados)

Este guia define um fluxo consistente e seguro de versionamento para projetos com Git + GitHub, incluindo boas práticas para conteúdo (imagens/infográficos), código e colaboração.

---

## Objetivo

- Manter histórico limpo e rastreável.
- Evitar que mudanças “quebrem” a branch principal.
- Facilitar revisão, rollback e auditoria.

---

## Fluxo recomendado (padrão)

### 1) Atualize sua base antes de começar

- Garanta que a branch principal local está atualizada:
  - `git checkout master` (ou `main`)
  - `git pull`

> Regra: nunca comece uma mudança grande com a base desatualizada.

### 2) Crie uma branch por mudança

Crie uma branch com nome descritivo e escopo claro.

Sugestões de prefixo:
- `feature/` para funcionalidade
- `content/` para conteúdo/editorial
- `fix/` para correção
- `chore/` para manutenção

Exemplos:
- `content/africa-midias`
- `feature/image-carousel-props`
- `fix/footer-links`

Comando:
- `git checkout -b content/africa-midias`

### 3) Faça commits pequenos e coesos

Um commit deve responder: “o que mudou e por quê?”

Regras práticas:
- Evite commits gigantes misturando várias ideias.
- Prefira 2–5 commits bons a 1 commit enorme.
- Se uma mudança é “refactor” e outra é “conteúdo”, separe em commits.

### 4) Antes de abrir PR: valide

Rodar pelo menos:
- `npm run build`

Se o lint falhar por ambiente (Windows/OneDrive), priorize o build como gate mínimo (sem “mascarar” problemas reais).

### 5) Abra Pull Request (PR)

- Faça push da branch:
  - `git push -u origin content/africa-midias`
- Abra PR para a branch principal.

Checklist no PR:
- O que mudou (bullets curtos)
- Como validar (passo a passo)
- Prints/GIFs se for UI
- Riscos/impacto (se houver)

### 6) Revisão e merge

- Ideal: pelo menos 1 revisão (mesmo em projeto solo, revisar antes de merge ajuda muito).
- Método de merge:
  - **Squash merge**: bom para manter histórico “1 PR = 1 commit” na principal.
  - **Merge commit**: bom para preservar commits internos do PR.

> Padrão recomendado: **Squash merge** quando o PR tem muitos commits pequenos e “WIP”.

---

## Padrão de mensagens de commit

### Recomendações

Use mensagens simples, legíveis, e com escopo:

- `feat: ...` (funcionalidade)
- `fix: ...` (correção)
- `refactor: ...` (refatoração sem mudar comportamento)
- `chore: ...` (manutenção)
- `docs: ...` (documentação)

Exemplos:
- `feat: add Africa video and infographic`
- `refactor: make ImageCarousel accept images prop`
- `fix: use Next Link in footer`

#### Dica importante (Windows/terminal)

Para evitar problemas com acentos/aspas no `cmd`, prefira mensagens sem caracteres especiais:
- Evite `á`, `ç`, `ã` no `-m` quando estiver usando `cmd.exe`.

---

## Conteúdo (imagens, infográficos, vídeos)

### Regras para assets

- Nome de arquivo: **sem acentos e sem espaços**.
  - Bom: `africa-infografico.png`
  - Evitar: `África infográfico.png`

- Organização: agrupe por tema/capítulo.
  - Ex.: `public/images/continentes/africa/...`

### Commits com imagens

- Ok commitar imagens no repo quando:
  - são assets do site (fazem parte do conteúdo)
  - tamanho não é absurdo

Se começar a ficar pesado (repo inchando), considere:
- Git LFS (para muitos binários grandes)
- Hospedar mídia externa (CDN) e versionar apenas links/metadados

### Vídeo do YouTube

- O link do vídeo deve estar no PR e no código.
- Ideal usar embed `https://www.youtube.com/embed/<id>`.

---

## O que NÃO versionar

- Logs, builds e artefatos:
  - `.next/`, `dist/`, `build/`, `.build-output.log`

- Configs locais do editor (regra geral):
  - `.vscode/` (a menos que o time decida padronizar tasks/settings)

> Se for útil padronizar tasks (como `build`), combine com a equipe e documente.

---

## Padrão de PR (modelo rápido)

**Título**
- Curto e objetivo, ex.: `África: vídeo + infográfico + carousel`

**Descrição**
- O que mudou
- Como validar
- Screenshots (se UI)

**Validação**
- `npm run build` (sempre que possível)

---

## Sugestão de rotina (projeto solo)

Mesmo sozinho, o fluxo ideal continua:
- branch → commits bons → PR → merge

Benefícios:
- Você enxerga a mudança “de fora” no PR
- Ajuda a manter histórico limpo
- Facilita rollback

---

## Windows + OneDrive (pitfalls)

- Evite deixar `npm run dev` rodando enquanto faz operações pesadas de Git/Node.
- Se ocorrerem erros de permissão/lock, feche o dev server e tente novamente.
- Se aparecer aviso LF/CRLF:
  - não é fatal, mas vale manter consistência do projeto.

---

## Checklist final (antes do merge)

- [ ] Build passou (`npm run build`)
- [ ] Página/feature testada manualmente
- [ ] Assets com nomes sem acentos/espaços
- [ ] PR descreve claramente o que mudou
- [ ] Branch pronta para merge (sem arquivos locais acidentais)

---

## Guias relacionados

- Para o padrão específico de mídias na página de continentes (vídeo → infográfico → carousel, e nomes seguros): veja `.github/prompts/guia-midias-continentes.md`.
