# Imagens da Clínica — Instruções

Coloque os ficheiros de imagem **nesta pasta** (`src/assets/`) com os nomes exactos abaixo.
Estes nomes correspondem directamente ao código dos componentes.

## Lista de Imagens Necessárias

| Ficheiro a criar                                       | Descrição                         |
|--------------------------------------------------------|-----------------------------------|
| `bd0c47f6cb2435126e2924d6c298e7f1bb4f338f.png`         | **Logo** da clínica               |
| `c50ae334707ba9b1825aa0dc1f7c57af4bac43d1.png`         | **Exterior** da clínica           |
| `7d8ae26c0e3a71d4a1985b6256dd0f4e7238d8c5.png`         | **Ecografia / Consulta médica**   |
| `1adf03808092d9e0d1067b4d078f3e620e857e3c.png`         | **Sala de Internamento**          |
| `aee0b42a5025c5cb14dda4e36321428e64fa7236.png`         | **Sala de Espera**                |
| `1f777484ee2dd1feef27a81e75b0114875dc5d1a.png`         | **Consultório Médico**            |

## Como obter as imagens

Estas imagens foram importadas do Figma. Pode exportá-las directamente do Figma:
1. Abra o ficheiro no Figma.
2. Seleccione cada imagem.
3. No painel da direita → "Export" → PNG.
4. Renomeie o ficheiro exportado com o nome da tabela acima.
5. Coloque-o nesta pasta (`src/assets/`).

## Alternativa — Renomear com nomes simples

Se preferir nomes mais simples, pode renomear os ficheiros e actualizar as importações
nos respectivos componentes:

- `Navbar.tsx`    → importa o logo
- `Hero.tsx`      → importa o exterior
- `About.tsx`     → importa a ecografia/consulta
- `Facilities.tsx`→ importa as 4 imagens (internamento, espera, consultório, exterior)
