# Imagens da Clinica — Instrucoes

Coloque os ficheiros de imagem **nesta pasta** (`src/assets/`) com os nomes abaixo.

## Lista de Imagens

| Ficheiro            | Descricao                       |
|---------------------|---------------------------------|
| `logo.png`          | **Logo** da clinica             |
| `exterior.png`      | **Exterior** da clinica         |
| `consulta.png`      | **Ecografia / Consulta medica** |
| `internamento.png`  | **Sala de Internamento**        |
| `espera.png`        | **Sala de Espera**              |
| `consultorio.png`   | **Consultorio Medico**          |

## Componentes que utilizam

- `Navbar.tsx` / `Footer.tsx` → `logo.png`
- `Hero.tsx` → `exterior.png`, `internamento.png`, `espera.png`, `consultorio.png`
- `About.tsx` → `consulta.png`
- `Facilities.tsx` → `internamento.png`, `espera.png`, `consultorio.png`, `exterior.png`
