# Centro Médico Camuazu — Landing Page

Landing page moderna e responsiva para o Centro Médico Camuazu, construída com **React 18 + Vite + Tailwind CSS v4**.

---

## Pré-requisitos

Antes de começar, certifique-se de que tem instalado:

- [Node.js](https://nodejs.org/) **v18 ou superior**
- [npm](https://www.npmjs.com/) (incluído com Node.js) **ou** [pnpm](https://pnpm.io/)

---

## Instalação e Execução

### 1. Descomprima o projecto

```bash
unzip centro-medico-camuazu.zip
cd centro-medico-camuazu
```

### 2. Instale as dependências

```bash
# Com npm
npm install

# Ou com pnpm (recomendado)
npm install -g pnpm
pnpm install
```

### 3. Adicione as imagens da clínica

Copie as suas imagens para a pasta `src/assets/` com os nomes correctos.
**Consulte o ficheiro `src/assets/IMAGES.md` para a lista completa.**

Os nomes são:
```
src/assets/bd0c47f6cb2435126e2924d6c298e7f1bb4f338f.png  ← Logo
src/assets/c50ae334707ba9b1825aa0dc1f7c57af4bac43d1.png  ← Exterior
src/assets/7d8ae26c0e3a71d4a1985b6256dd0f4e7238d8c5.png  ← Ecografia
src/assets/1adf03808092d9e0d1067b4d078f3e620e857e3c.png  ← Sala Internamento
src/assets/aee0b42a5025c5cb14dda4e36321428e64fa7236.png  ← Sala de Espera
src/assets/1f777484ee2dd1feef27a81e75b0114875dc5d1a.png  ← Consultório
```

### 4. Inicie o servidor de desenvolvimento

```bash
# Com npm
npm run dev

# Com pnpm
pnpm dev
```

Abra o browser em: **http://localhost:5173**

---

## Scripts Disponíveis

| Comando            | Descrição                                          |
|--------------------|----------------------------------------------------|
| `npm run dev`      | Inicia o servidor de desenvolvimento               |
| `npm run build`    | Compila o projecto para produção (pasta `dist/`)   |
| `npm run preview`  | Pré-visualiza o build de produção localmente       |

---

## Estrutura do Projecto

```
centro-medico-camuazu/
├── index.html                  # Entrada HTML do Vite
├── vite.config.ts              # Configuração do Vite
├── tsconfig.json               # Configuração TypeScript
├── package.json                # Dependências e scripts
├── src/
│   ├── main.tsx                # Entrada React
│   ├── assets/                 # ⚠️  Coloque as imagens aqui
│   │   └── IMAGES.md           # Guia de imagens
│   ├── app/
│   │   ├── App.tsx             # Componente principal
│   │   └── components/
│   │       ├── Navbar.tsx      # Barra de navegação
│   │       ├── Hero.tsx        # Secção principal (hero)
│   │       ├── Stats.tsx       # Estatísticas
│   │       ├── About.tsx       # Sobre nós
│   │       ├── Services.tsx    # Especialidades
│   │       ├── Facilities.tsx  # Instalações (galeria)
│   │       ├── WhyUs.tsx       # Porque nos escolher
│   │       ├── Testimonials.tsx# Testemunhos
│   │       ├── Contact.tsx     # Contacto + formulário
│   │       └── Footer.tsx      # Rodapé
│   └── styles/
│       ├── index.css           # CSS principal
│       ├── fonts.css           # Google Fonts
│       ├── tailwind.css        # Tailwind
│       └── theme.css           # Variáveis de tema
└── README.md
```

---

## Deploy (Publicar Online)

### Vercel (recomendado — gratuito)
1. Crie uma conta em [vercel.com](https://vercel.com)
2. Instale o CLI: `npm i -g vercel`
3. Na pasta do projecto: `vercel`
4. Siga as instruções — a Vercel detecta automaticamente Vite/React

### Netlify (alternativa — gratuito)
1. Faça o build: `npm run build`
2. Aceda a [netlify.com](https://netlify.com) → "Add new site" → "Deploy manually"
3. Arraste a pasta `dist/` para a área de upload

---

## Personalização

### Alterar informações de contacto
Edite os ficheiros:
- `src/app/components/Contact.tsx` — Morada, telefone, email, horário
- `src/app/components/Footer.tsx` — Mesmas informações no rodapé
- `src/app/components/Navbar.tsx` — Botão de marcação de consulta

### Alterar cores da marca
As cores principais estão definidas directamente nos componentes:
- **Azul principal:** `#1BAFD6`
- **Vermelho:** `#E02020`
- **Azul escuro (fundo):** `#03224C`

### Adicionar/remover especialidades
Edite o array `services` em `src/app/components/Services.tsx`.

---

## Tecnologias Utilizadas

- ⚛️  **React 18** — Interface
- ⚡  **Vite 6** — Bundler ultra-rápido
- 🎨  **Tailwind CSS v4** — Estilização
- 🎞️  **Motion** — Animações
- 🔷  **TypeScript** — Tipagem estática
- 🖼️  **Lucide React** — Ícones

---

## Suporte

Para dúvidas ou personalizações, contacte o desenvolvedor.
