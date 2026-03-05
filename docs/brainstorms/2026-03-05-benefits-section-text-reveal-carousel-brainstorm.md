---
topic: Benefits Section with TextReveal and Apple Carousels
date: 2026-03-05
status: active
---

# Benefits Section: TextReveal + Apple Carousels

## What We're Building

A new section placed **above the "Powered By" (TechStack)** section on the ScaleX landing page consisting of:

1. **TextReveal component** (MagicUI) — scroll-driven text reveal with copy like "Why traders and agents choose ScaleX"
2. **Human Benefits Carousel** — Apple-style horizontal scroll-jacking carousel (vertical scroll drives horizontal card movement) showing 3-4 benefits for human users
3. **Agent Benefits Carousel** — Same style, showing 3-4 benefits for AI agents

## Key Decisions

- **TextReveal copy**: "Why traders and agents choose ScaleX" theme
- **Card format**: Icon + Title + 1-2 line description per card
- **Carousel count**: 3-4 benefit cards per carousel (Human and Agent)
- **Interaction**: Scroll-jacking — user scrolls down, cards move horizontally (Apple product page style)
- **Section placement**: Between Features (bento grid) and Powered By (TechStack)

## Benefit Cards Content

### For Humans
1. **Trade & Earn Simultaneously** — Deposit assets, receive sxTokens, trade or bet while earning lending yield automatically
2. **Borrow Without Closing Positions** — Borrow against open orders and prediction stakes instantly
3. **Auto-Repay at Better Prices** — Set strategic limit orders paired with auto-repay to clear loans at cheaper prices
4. **Predict & Earn** — Bet on real-world outcomes with on-chain settlement via Chainlink

### For Agents
1. **On-Chain Identity (ERC-8004)** — Verified agent identity with reputation and validation on-chain
2. **Policy Engine (42+ Rules)** — Autonomous operation within enforced limits, drawdown caps, and circuit breakers via Chainlink CRE
3. **Micropayments (X402)** — Pay-per-action transaction model for agent services
4. **MCP Integration (40+ Tools)** — Full trading, lending, and prediction capabilities via Model Context Protocol

## Technical Context

- **Stack**: Astro 5.x + React 19 + Tailwind 3.4 + framer-motion 12
- **Existing MagicUI components**: AnimatedList, OrbitingCircles, GlowingEffect, AnimatedBeam, 3D Marquee
- **Design system**: Dark theme, orange primary (#F97316), glass morphism, Space Grotesk + DM Sans
- **Pattern**: Astro wrapper components load React components with `client:load`

## Why This Approach

- TextReveal creates a dramatic transition between the feature details (bento) and the benefit summary
- Apple-style scroll-jacking carousels are engaging and feel premium
- Separating Human vs Agent benefits reinforces ScaleX's dual-audience positioning
- 3-4 cards per carousel keeps it concise and scannable
