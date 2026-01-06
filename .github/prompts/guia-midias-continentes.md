# Guia de Mídias na Página Continentes

Este guia documenta o padrão adotado para a seção **Mídias** da página de continentes (Planeta Terra → Continentes).

Página:
- `src/pages/capitulo/planeta-terra/continentes.tsx`

---

## Objetivo do padrão

Manter consistência visual e evitar problemas comuns com paths e nomes de arquivos, seguindo a ordem:

1. **Vídeo (YouTube embed)**
2. **Infográfico (imagem)**
3. **Galeria em carousel (imagens)**

---

## Estrutura de pastas (assets)

- Imagens do continente:
  - `public/images/continentes/<continente>/...`
  - Ex.: `public/images/continentes/africa/...`
  - Ex.: `public/images/continentes/america/...`

- Infográficos:
  - `public/images/infograficos/...`
  - Ex.: `public/images/infograficos/africa-infografico.png`
  - Ex.: `public/images/infograficos/america_infografico.png`

---

## Regras de nomenclatura (para não quebrar URLs)

### Regras

- Evitar **acentos**, **espaços** e **pontuação** (`,`, `(`, `)`, `-` duplicado, etc.) no nome do arquivo.
- Preferir `snake_case` ou `kebab-case`.
- Padronizar extensão e manter consistência (ex.: `.png`).

### Exemplos

- Ruim: `Estátua da Liberdade, EUA (Nova York).png`
- Bom: `estatua_da_liberdade_eua_nova_york.png`

---

## Script (PowerShell) para renomear imagens com nomes “seguros”

Este é um exemplo do mesmo tipo de regra usada no projeto: remove acentos e troca caracteres inválidos por `_`.

```powershell
Set-Location "<repo>"
$dir = "public\images\continentes\america"

function Convert-ToSafeName([string]$name) {
  $base = [System.IO.Path]::GetFileNameWithoutExtension($name)
  $ext  = [System.IO.Path]::GetExtension($name)

  $normalized = $base.Normalize([Text.NormalizationForm]::FormD)
  $sb = New-Object System.Text.StringBuilder
  foreach ($ch in $normalized.ToCharArray()) {
    if ([Globalization.CharUnicodeInfo]::GetUnicodeCategory($ch) -ne [Globalization.UnicodeCategory]::NonSpacingMark) {
      [void]$sb.Append($ch)
    }
  }
  $ascii = $sb.ToString().Normalize([Text.NormalizationForm]::FormC)

  $safe = ($ascii -replace "[^a-zA-Z0-9]+", "_")
  $safe = ($safe -replace "_+", "_").Trim('_')
  if ([string]::IsNullOrWhiteSpace($safe)) { $safe = "imagem" }

  return "$safe$ext".ToLowerInvariant()
}

Get-ChildItem $dir -File | ForEach-Object {
  $newName = Convert-ToSafeName $_.Name
  if ($newName -ne $_.Name) { Rename-Item -LiteralPath $_.FullName -NewName $newName }
}
```

---

## Como adicionar um novo continente (passo a passo)

### 1) Adicionar vídeo (YouTube)

- Use embed: `https://www.youtube.com/embed/<id>`
- Defina `title` do iframe com o nome real do vídeo.

### 2) Adicionar infográfico

- Coloque o arquivo em `public/images/infograficos/` com nome seguro.
- Renderize com `<img src="/images/infograficos/..." />` (padrão atual da página).

### 3) Adicionar carousel de imagens

- Declare um array com os caminhos em `continentes.tsx`, por ex.:

```ts
const americaImagens = [
  "/images/continentes/america/exemplo.png",
];
```

- Renderize usando `ImageCarousel`:

```tsx
<ImageCarousel
  images={americaImagens}
  altPrefix="América - Galeria"
  getCaption={(src) => legendaDeImagem(src)}
/>
```

### Legendas do carousel

- A página usa o helper `legendaDeImagem(src)` para derivar a legenda a partir do nome do arquivo:
  - remove extensão
  - troca `_` por espaço

---

## Validação e versionamento

- Validar antes de commitar:
  - `npm run build`

- Commits sugeridos (exemplos):
  - `feat(continentes): mídias da América (vídeo + infográfico + carousel)`
  - `chore(assets): rename America images to safe filenames`

- Subir via PR (branch `content/...`):
  - `git push -u origin <branch>`

Para o fluxo completo, veja `.github/prompts/guia-versionamento-padroes.md`.
