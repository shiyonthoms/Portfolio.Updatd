# Shiyon Thomas — Portfolio

A pixel-faithful, SEO-optimized rebuild of the "Alabaster Liquid Glass" personal
design system for **Shiyon Thomas**, Adobe Campaign Developer & MarTech Systems
Architect. Built with **Next.js (App Router)**, **React 19**, **TypeScript**, and
**Tailwind CSS**.

## Stack

- **Next.js 15** — App Router, static generation, metadata API
- **React 19** — client components for micro-interactions
- **Tailwind CSS 3** — utility-first styling matching the original design tokens
- **TypeScript** — type-safe components and data models

## Getting Started

```bash
pnpm install
pnpm dev      # http://localhost:3000
```

Production build:

```bash
pnpm build
pnpm start
```

## Configuration

Set your production domain in `.env.local` (see `env.example`):

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

This value drives canonical URLs, the sitemap, and Open Graph metadata.

## AI Chatbot (DeepSeek)

The floating "Shiyon AI Companion" is powered by the [DeepSeek API](https://api.deepseek.com).
The browser never sees your key: it calls a server route (`app/api/chat/route.ts`)
which proxies the request with `DEEPSEEK_API_KEY` and streams the reply back.

Add your key to `.env.local` (and to your Vercel project's Environment Variables):

```bash
DEEPSEEK_API_KEY=sk-your-key-here
# optional, defaults to deepseek-flash
DEEPSEEK_MODEL=deepseek-flash
```

Get a key at [platform.deepseek.com/api_keys](https://platform.deepseek.com/api_keys).
If the key is missing, the chatbot automatically falls back to its built-in
keyword-based answers, so the site keeps working.

The assistant is constrained by a system prompt to answer only about Shiyon's
professional profile (career, skills, projects, education, contact) and to avoid
inventing facts. Edit `SYSTEM_PROMPT` in `app/api/chat/route.ts` to change the
knowledge base.

## SEO Features

- Server-rendered page content (fully crawlable)
- `metadata` + `viewport` exports (title, description, keywords, robots)
- Open Graph and Twitter Card meta tags
- `JSON-LD` `Person` structured data
- Auto-generated `sitemap.xml` and `robots.txt`
- Self-hosted Google Fonts via `next/font` (Plus Jakarta Sans, JetBrains Mono)
- Static Open Graph image (`opengraph-image.tsx`) and SVG favicon (`icon.svg`)

## Structure

```
app/
  layout.tsx          # Root layout, fonts, metadata, JSON-LD
  page.tsx            # Page entry
  globals.css         # Design-system CSS + dark-mode overrides
  sitemap.ts          # Sitemap
  robots.ts           # Robots.txt
  icon.svg            # Favicon
  opengraph-image.tsx # OG image
  api/chat/route.ts   # DeepSeek chat proxy (server-side)
components/
  PortfolioPage.tsx   # Page assembly + scroll-reveal observer
  Header.tsx          # Liquid-glass nav pill
  Hero.tsx            # Hero + migration parity
  PipelineSimulator.tsx
  Architecture.tsx
  Blueprints.tsx
  Skills.tsx
  Experience.tsx
  Contact.tsx
  Footer.tsx
  LightbulbWidget.tsx # Dark-mode toggle
  ChatbotWidget.tsx   # AI companion (chatbot)
  icons.tsx           # Inline SVG icon set
lib/
  site.ts             # Central site configuration
```

## Features Preserved From the Original

- Apple Liquid Glass surfaces (`tech-card`, `liquid-nav-pill`)
- Interactive workflow pipeline inspector
- Blueprint category filtering
- Bidirectional blur-on-scroll reveal (`apple-blur-reveal`)
- Email copy-to-clipboard + contact form simulation
- Vintage lightbulb dark-mode toggle with mechanical click audio
