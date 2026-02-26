# AI Market Map — CLAUDE.md

## Project Overview
Interactive investment banking software market map for **Aeris Partners**.
Displays AI tools and incumbent software across 8 categories in a radial wheel layout.

## Live URLs
- **Production**: https://ai-market-map.vercel.app
- **GitHub**: https://github.com/champ283/AI-Market-Map
- **Figma**: https://www.figma.com/design/2Eynq8AonVSC8WcNn4i1bI/AI-Market-Map-%E2%80%94-v3-Capture

## Stack
- React 18 + TypeScript + Vite
- Tailwind CSS + shadcn/ui
- react-router-dom, @tanstack/react-query
- Fonts: Syne (`font-syne`), JetBrains Mono (`font-mono-jb`)

## Dev Workflow
```bash
# Start dev server (port 8080)
npm run dev

# Deploy to Vercel (auto-deploys on git push to main)
git push origin main
```

## Key Files
| File | Purpose |
|------|---------|
| `src/components/MarketWheel.tsx` | Main layout — header, legend, wheel, search/filter |
| `src/components/WheelSection.tsx` | Individual wheel cards (radius, sizing, hover behavior) |
| `src/components/SectionPanel.tsx` | Slide-in side panel when a card is clicked |
| `src/data/marketMapData.ts` | All tool/company data, section definitions, badge types |
| `index.html` | Page title and meta tags |
| `tailwind.config.ts` | Custom colors, fonts, CSS variables |

## Layout Architecture
- **Desktop**: Legend overlays left side (`absolute left-0 w-44 z-20`), wheel spans full width centered
- **Mobile**: Grid of cards with legend at top
- **Wheel**: 8 sections at angles `[-90, -45, 0, 45, 90, 135, 180, 225]` degrees
- **Wheel radius** (resting): `min(23vw, 31vh, 295px)` — must satisfy `R × 0.707 > card_width × 0.93` to prevent overlap
- **Card size**: `w-[208px]` at `scale(0.93)` rest, `scale(1.06)` on hover

## Design Tokens (tailwind.config.ts)
- `map-bg2`: dark navy card background (`#0D0830`)
- `map-line`: card border color
- `map-white`: bright text
- `map-txt-dim` / `map-txt-faint`: muted text colors
- Each section has a `--color-*` CSS variable for its accent color

## Badge Types
`ai-scaled` | `ai-emerging` | `ai-enhanced` | `llm` | `multi` | `incumbent`

## Figma ↔ Code Workflow
1. Re-import from Vercel URL using Anima or HTML-to-Figma plugin
2. Edit design in Figma
3. Share Figma link — Claude reads it via Figma REST API (token in `~/.claude.json`)
4. Claude updates React code → `git push` → auto-deploys

## Figma API Access
Token stored in `~/.claude.json` under `mcpServers.figma.headers.X-Figma-Token`.
File key: `2Eynq8AonVSC8WcNn4i1bI`
