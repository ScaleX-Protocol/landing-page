# ScaleX Landing Page

A modern, high-performance landing page for ScaleX Protocol built with [Astro](https://astro.build/) and [TailwindCSS](https://tailwindcss.com/).

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm 8+

### Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site will be available at `http://localhost:4321`

### Build

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 🐳 Docker Deployment

### Build and Run

```bash
# Build the Docker image
docker build -t scalex-landing:latest .

# Run the container
docker run -d -p 80:80 --name scalex-landing scalex-landing:latest
```

### Using Docker Compose

```bash
# Production
docker-compose up -d

# Development (with volume mounting)
docker-compose -f docker-compose.dev.yml up -d
```

### Health Check

The container exposes a health check endpoint at `/health`

```bash
curl http://localhost/health
```

## 📁 Project Structure

```
src/
├── components/          # Astro components
│   ├── Header.astro
│   ├── Hero.astro
│   ├── Stats.astro
│   ├── ProblemSolution.astro
│   ├── Features.astro
│   ├── ComparisonTable.astro
│   ├── Flywheel.astro
│   ├── CTA.astro
│   └── Footer.astro
├── layouts/
│   └── Layout.astro     # Main HTML layout
├── pages/
│   └── index.astro      # Home page
├── styles/
│   └── global.css       # Global styles & Tailwind
└── assets/              # Static assets
```

## 🎨 Design System

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#F97316` | CTAs, accents |
| Success | `#16A34A` | Positive states |
| Surface Primary | `#0A0B0F` | Background |
| Surface Secondary | `#111318` | Cards |

### Typography

- **Headings**: Space Grotesk
- **Body**: DM Sans

## 🔧 Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

| Variable | Description |
|----------|-------------|
| `PUBLIC_SITE_URL` | Main site URL |
| `PUBLIC_APP_URL` | App URL for CTAs |
| `PUBLIC_DOCS_URL` | Documentation URL |

## 📦 Tech Stack

- **Framework**: [Astro](https://astro.build/) 5.x
- **Styling**: [TailwindCSS](https://tailwindcss.com/) 3.x
- **Fonts**: Space Grotesk, DM Sans (Google Fonts)
- **Server**: Nginx Alpine
- **Container**: Docker

## 📄 License

Copyright © 2024 ScaleX Protocol. All rights reserved.
