---
title: "feat: Align Landing Page & Docs with Full Product (Agents, Predictions, ERC-8004, X402, CRE)"
type: feat
status: completed
date: 2026-03-05
brainstorm: docs/brainstorms/2026-03-05-landing-page-docs-alignment-brainstorm.md
---

# feat: Align Landing Page & Docs with Full Product

## Overview

Update the ScaleX landing page and Mintlify docs site to accurately represent the full product offering. The landing page currently only covers yield-on-orders and lending — it completely omits AI agents, prediction markets, ERC-8004, X402, CRE, MCP, and A2A. The page structure will be reorganized around three pillars: **Capital Efficiency + Safety + Agentic**.

## Problem Statement / Motivation

The headline says "for Agent and Human" but zero content below explains the agent side. This creates a credibility gap for all audiences:
- **Traders** don't learn about prediction markets or agent-assisted trading
- **Developers** don't see ERC-8004, MCP, A2A integration points
- **Investors/partners** miss the full technical depth and ecosystem integrations (Chainlink CRE, Coinbase X402)

The docs site already has pages for agent, erc8004, and x402 architecture, but is missing predictions, CRE, MCP, and A2A.

## Proposed Solution

Improve existing landing page sections and add new ones. Create 4 new docs pages. All changes deploy simultaneously.

### Section Order (Post-Update)

```
Header (improve: add nav links for Agents, Predictions)
Hero (improve: update subtext + meta description)
ProblemSolution (improve: expand to 3 pillars)
Features (expand: 4 → 7 cards, interleaved by pillar)
ComparisonTable (expand: 5 → 8 rows)
TechStack (NEW: "Powered By" badges with partner logos)
Flywheel (improve: add agent/prediction context)
CTA (improve: add "Build Your Agent" developer CTA)
Footer (no changes)
```

## Technical Approach

### Phase 1: Landing Page Content Updates (Existing Components)

#### 1.1 Hero Section — Update Subtext & Meta

**File:** `src/components/Hero.astro`
**File:** `src/pages/index.astro` (meta tags)

Current subtext:
> "The only DEX where limit orders generate yield automatically. Trade smarter. Earn passively. Zero extra steps."

New subtext:
> "Trade, predict, and deploy AI agents on the most capital-efficient DEX. Earn yield on every order. Settle predictions trustlessly. Build agents with on-chain identity."

Update meta description in `index.astro` to match:
> "ScaleX is an AI-agent-native DEX with integrated lending, prediction markets, and ERC-8004 agent identity. Capital efficient, safe, and multi-chain."

- [x] Update Hero subtext copy in `Hero.astro`
- [x] Update `<meta name="description">` in `index.astro`
- [x] Keep headline and stats as-is

#### 1.2 ProblemSolution Section — Expand to 3 Pillars

**File:** `src/components/ProblemSolution.astro`

Expand the "Other DEXs" problems list to include agent/prediction gaps:

**Problems (left card):**
1. Capital sits idle in open orders (existing)
2. No integrated lending — move assets between protocols (existing)
3. No AI agent support — can't automate strategies on-chain
4. No prediction markets — no way to earn from market views
5. No trustless settlement — centralized oracle dependencies

**ScaleX Solution (right card):**
1. Every order earns yield automatically (existing)
2. 1-click borrowing from your portfolio (existing)
3. Deploy AI agents with ERC-8004 on-chain identity and policy guardrails
4. Binary prediction markets with yield while staked
5. Chainlink CRE trustless settlement — no single point of failure

- [x] Add 3 new problem bullet points
- [x] Add 3 new solution bullet points
- [x] Test mobile card height balance (both cards should have similar height)

#### 1.3 Features Section — Expand from 4 to 7 Cards

**File:** `src/components/Features.astro`

Current 2x2 grid must be refactored to a 3-column responsive grid to accommodate 7 features.

**Interleaved feature order (Capital Efficiency → Agentic → Safety pattern):**

| # | Feature | Pillar | Stat | Icon |
|---|---------|--------|------|------|
| 1 | Passive Yield on Every Order | Capital Efficiency | 12.5% APY | Existing |
| 2 | AI Agent Marketplace | Agentic | ERC-8004 | Robot/agent SVG |
| 3 | Soft Liquidations | Safety | Gradual | Existing |
| 4 | Prediction Markets | Agentic | CRE-Settled | Chart/crystal ball SVG |
| 5 | Borrow from Your Portfolio | Capital Efficiency | 1-Click | Existing |
| 6 | Agent Strategies | Agentic | 9+ Presets | Strategy/gear SVG |
| 7 | Auto-Repay Loans | Safety | Automatic | Existing |

**New feature card copy:**

**AI Agent Marketplace:**
- Title: "AI Agent Marketplace"
- Stat: "ERC-8004"
- Description: "Deploy and authorize AI trading agents with on-chain identity, reputation tracking, and policy-based guardrails."

**Prediction Markets:**
- Title: "Prediction Markets"
- Stat: "CRE-Settled"
- Description: "Binary price predictions with yield earned while staked. Trustlessly settled via Chainlink CRE — no centralized oracles."

**Agent Strategies:**
- Title: "Agent Strategies"
- Stat: "9+ Presets"
- Description: "Choose from built-in strategy presets or build custom strategies with configurable limits, whitelisted tokens, and automatic execution."

**Layout changes:**
- Desktop (lg+): 3 columns, rows of 3-3-1 (last card centered or spans 2 cols)
- Tablet (md): 2 columns
- Mobile: 1 column stack

- [x] Refactor `Features.astro` grid from fixed 2x2 to dynamic responsive grid
- [x] Add 3 new feature objects to the features array
- [x] Add inline SVG icons for 3 new features
- [x] Reorder features array to interleave by pillar
- [x] Test responsive layout on mobile/tablet/desktop

#### 1.4 ComparisonTable Section — Add 3 New Rows

**File:** `src/components/ComparisonTable.astro`

Add rows after existing 5:

| Feature | ScaleX | Standard DEX | Lending Protocol |
|---------|--------|-------------|-----------------|
| AI Agent Support | Yes (ERC-8004) | No | No |
| Prediction Markets | Yes (CRE-settled) | No | No |
| Agent Payments | X402 Micropayments | None | None |

- [x] Add 3 new row objects to the features array in `ComparisonTable.astro`
- [x] Use check/cross icons consistent with existing rows
- [x] Test mobile card view with 8 rows (acceptable scroll length)

#### 1.5 Flywheel Section — Add Agent/Prediction Context

**File:** `src/components/Flywheel.astro`

Update step descriptions:

- **Step 2 "Trade"**: "Trade manually or deploy AI agents for automatic strategy execution. Use yield-bearing tokens as margin."
- **Step 3 "Earn"**: "Yield auto-compounds. Prediction rewards accumulate. Loans auto-repay. Collateral grows."

- [x] Update step 2 description text
- [x] Update step 3 description text

#### 1.6 CTA Section — Add Developer CTA

**File:** `src/components/CTA.astro`

Add a third button: "Build Your Agent" → links to docs agent architecture page (`https://scalex.mintlify.app/architecture/agent`).

- [x] Add "Build Your Agent" as `btn-secondary` alongside existing "Launch App" and "Read Docs"
- [x] Link to `https://scalex.mintlify.app/architecture/agent`

### Phase 2: New Landing Page Section — TechStack / "Powered By"

#### 2.1 Create TechStack Component

**New file:** `src/components/TechStack.astro`

A "Powered By" section with 5 technology standard badges, each with:
- Partner logo (SVG, white variant for dark bg)
- Standard name
- One-line description
- Link to docs page

**Layout:**
- Section title: "Built on Open Standards"
- Desktop: 5 badges in a horizontal row
- Tablet: 3+2 grid
- Mobile: 2+2+1 grid or vertical stack

**Badge data:**

```
1. ERC-8004 → "On-chain agent identity, reputation & validation"
   Logo: Ethereum logo (or ERC badge)
   Link: https://scalex.mintlify.app/architecture/erc8004

2. X402 → "Coinbase micropayment protocol for agent services"
   Logo: Coinbase logo
   Link: https://scalex.mintlify.app/architecture/x402

3. Chainlink CRE → "Trustless prediction settlement via DON consensus"
   Logo: Chainlink logo
   Link: https://scalex.mintlify.app/architecture/cre

4. MCP → "Model Context Protocol — 40+ agent trading tools"
   Logo: MCP logo or Anthropic logo
   Link: https://scalex.mintlify.app/developers/mcp

5. A2A → "Google Agent-to-Agent communication protocol"
   Logo: Google A2A logo
   Link: https://scalex.mintlify.app/developers/a2a
```

**Styling:** Follow existing design system:
- Glass card background (`glass-card` class)
- `data-reveal` scroll animation
- Orange accent on hover
- `font-['Schibsted_Grotesk']` for heading

- [x] Create `src/components/TechStack.astro` following existing component patterns
- [x] Source and add partner logo SVGs to `src/assets/images/`
- [x] Use white/light logo variants for dark background
- [x] Add section between Flywheel and CTA in `src/pages/index.astro`
- [x] Responsive layout: 5-col → 3+2 → stack
- [x] Add `data-reveal` animations

### Phase 3: Documentation Updates (Mintlify)

All docs work is in the `/Users/renaka/gtx/docs` repository.

#### 3.1 New Page: Predictions Architecture

**New file:** `/Users/renaka/gtx/docs/architecture/predictions.mdx`

Content outline:
- Overview of PricePrediction module
- Market types: Directional (UP/DOWN) vs Absolute (Above/Below)
- How it works: create market → predict → settlement → claim
- Yield while staked (BalanceManager integration)
- Settlement flow via Chainlink CRE (link to cre.mdx)
- Smart contract interface reference (key functions)

- [x] Create `architecture/predictions.mdx` with frontmatter
- [x] Source content from `PricePrediction.sol` and `IPricePrediction.sol` interfaces

#### 3.2 New Page: Chainlink CRE Integration

**New file:** `/Users/renaka/gtx/docs/architecture/cre.mdx`

Content outline:
- What is CRE (Compute Runtime Environment)
- How ScaleX uses CRE for prediction settlement
- Workflow: EVM Log Trigger → TWAP read → outcome computation → signed report → BFT quorum → onReport()
- Report encoding format
- Security: DON consensus, KeystoneForwarder verification

- [x] Create `architecture/cre.mdx` with frontmatter
- [x] Source content from `cre-workflows/price-prediction/README.md` and `workflow.yaml`

#### 3.3 New Page: MCP Integration Overview

**New file:** `/Users/renaka/gtx/docs/developers/mcp.mdx`

Content outline (high-level, not full tool catalog):
- What is MCP (Model Context Protocol)
- How ScaleX exposes MCP server for agent integration
- Transport options: stdio + SSE
- Tool categories: Trading, Lending, Wallet Management, Strategy
- How to connect your agent to ScaleX via MCP
- Link to MCP specification

- [x] Create `developers/mcp.mdx` with frontmatter
- [x] Source structure from `scalex-8004/src/mcp/` README and server code

#### 3.4 New Page: A2A Integration Overview

**New file:** `/Users/renaka/gtx/docs/developers/a2a.mdx`

Content outline (high-level):
- What is A2A (Agent-to-Agent protocol by Google)
- Agent card discovery (`.well-known/agent-card.json`)
- JSON-RPC 2.0 communication pattern
- How agents discover and communicate with ScaleX
- Link to A2A specification

- [x] Create `developers/a2a.mdx` with frontmatter
- [x] Source structure from `scalex-8004/src/a2a/` and `.well-known/agent-card.json`

#### 3.5 Update docs.json Navigation

**File:** `/Users/renaka/gtx/docs/docs.json`

Add new pages to navigation:

```json
// In Guides tab → Architecture group, after "architecture/x402":
"architecture/predictions",
"architecture/cre"

// In Developer tab, new group "Agent Protocols":
{
  "group": "Agent Protocols",
  "pages": [
    "developers/mcp",
    "developers/a2a"
  ]
}
```

- [x] Add `architecture/predictions` and `architecture/cre` to Architecture group
- [x] Add new "Agent Protocols" group with `developers/mcp` and `developers/a2a`

### Phase 4: i18n Updates

**File:** `src/i18n/translations.ts`

Add English keys for all new content. Other languages (ID, ZH, JA) get English as placeholder — note that the i18n system is partially implemented (translations defined but not yet consumed by components at runtime).

New key namespaces:
- `features.agentMarketplace.*`, `features.predictions.*`, `features.agentStrategies.*`
- `comparison.agentSupport.*`, `comparison.predictions.*`, `comparison.agentPayments.*`
- `techStack.*` (title, 5 badge names + descriptions)
- `cta.buildAgent`

- [x] Add all new English translation keys
- [x] Add placeholder translations for ID, ZH, JA (same as English for now)

## Acceptance Criteria

### Landing Page
- [x] Hero subtext mentions agents, predictions, and yield
- [x] Meta description updated for SEO (includes agents, predictions, ERC-8004)
- [x] ProblemSolution has 5 problems and 5 solutions covering all 3 pillars
- [x] Features section shows 7 cards in interleaved pillar order
- [x] 3 new feature cards have title, stat badge, description, and SVG icon
- [x] Features grid is responsive (3-col desktop, 2-col tablet, 1-col mobile)
- [x] ComparisonTable has 8 rows including AI Agent Support, Prediction Markets, Agent Payments
- [x] TechStack section shows 5 technology badges with partner logos
- [x] Each TechStack badge links to its docs page
- [x] Flywheel steps 2 and 3 mention agents and predictions
- [x] CTA section has "Build Your Agent" button linking to docs
- [x] All new sections use `data-reveal` scroll animations
- [x] All new content follows existing design system (colors, fonts, glass cards)
- [x] Page renders correctly on mobile (375px), tablet (768px), desktop (1440px)

### Documentation
- [x] `architecture/predictions.mdx` exists with market types, staking, settlement flow
- [x] `architecture/cre.mdx` exists with CRE workflow and settlement details
- [x] `developers/mcp.mdx` exists with high-level MCP integration overview
- [x] `developers/a2a.mdx` exists with high-level A2A integration overview
- [x] `docs.json` navigation updated with all 4 new pages
- [x] All landing page → docs links resolve (no 404s)

### i18n
- [x] English translation keys added for all new content
- [x] Placeholder keys added for ID, ZH, JA

## Dependencies & Risks

| Risk | Severity | Mitigation |
|------|----------|-----------|
| Partner logo sourcing (need white SVG variants) | Medium | Download from official brand resources; use text-only badges as fallback |
| 7-card grid layout complexity | Medium | Test responsive breakpoints early; accept 3+3+1 layout on desktop |
| Docs pages not written before landing page deploys | High | Write all 4 docs pages as part of same PR/deployment |
| i18n translations incomplete for non-English | Low | Ship with English placeholders; translations are non-blocking since i18n runtime isn't active |

## References & Research

### Internal References
- Brainstorm: `docs/brainstorms/2026-03-05-landing-page-docs-alignment-brainstorm.md`
- Landing page index: `src/pages/index.astro`
- Features component: `src/components/Features.astro`
- ComparisonTable component: `src/components/ComparisonTable.astro`
- Hero component: `src/components/Hero.astro`
- ProblemSolution component: `src/components/ProblemSolution.astro`
- Flywheel component: `src/components/Flywheel.astro`
- CTA component: `src/components/CTA.astro`
- i18n translations: `src/i18n/translations.ts`
- Tailwind config: `tailwind.config.mjs`
- Global styles: `src/styles/global.css`
- Docs config: `/Users/renaka/gtx/docs/docs.json`
- PricePrediction interface: `/Users/renaka/gtx/clob-dex/src/core/interfaces/IPricePrediction.sol`
- CRE workflow: `/Users/renaka/gtx/clob-dex/cre-workflows/price-prediction/`
- ScaleX Agent: `/Users/renaka/gtx/scalex-8004/`
- ERC-8004 contracts: `/Users/renaka/gtx/clob-dex/src/ai-agents/registries/`
