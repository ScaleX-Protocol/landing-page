# Brainstorm: Landing Page & Docs Alignment

**Date:** 2026-03-05
**Status:** Draft
**Participants:** User + Claude

## What We're Building

A content update to the ScaleX landing page and documentation site to accurately represent the full product: an AI-agent-native DeFi platform with capital efficiency, safety, and agentic capabilities.

### Problem

The landing page currently only covers yield-on-orders and lending integration. It completely omits:
- AI Agent Marketplace (ERC-8004 identity/reputation/validation)
- Prediction Markets (Chainlink CRE settlement)
- X402 payment gating for agent services
- MCP (40+ tools) + A2A protocol support
- Agent strategy system (9 presets + custom builder)
- Multi-chain support

The headline says "for Agent and Human" but zero content below explains the agent side.

The docs site has agent, ERC-8004, and X402 pages in architecture but is missing Predictions, CRE, MCP, and A2A.

### Target Audiences

1. **DeFi traders/users** — Want manual + agent-assisted trading + predictions
2. **AI agent developers** — Want to build/deploy trading agents via ERC-8004, MCP, A2A
3. **Investors/partners** — Need to see full technical depth and ecosystem integrations
4. **General crypto audience** — Understanding the value proposition

## Why This Approach

**Three-Pillar restructure** (Capital Efficiency + Safety + Agentic) chosen because:
- Aligns with existing headline "The Most Capital Efficient and Safe DApp for Agent and Human"
- Minimizes rewrite — improves existing sections, adds new ones where needed
- Addresses all audiences without diluting the core narrative
- Technology standards (ERC-8004, X402, CRE, MCP, A2A) get a prominent dedicated section

## Key Decisions

### Landing Page Changes

#### 1. Hero Section (Improve Existing)
- Keep headline: "The Most Capital Efficient and Safe DApp for Agent and Human"
- Update subtext to mention agents and predictions alongside yield
- Keep existing stats as-is for now ($1.2B volume, 12.5% APY, $450M TVL)

#### 2. ProblemSolution Section (Improve Existing)
- Expand "Other DEXs" problems to include: no agent support, no prediction markets, no trustless settlement
- Expand ScaleX solution to highlight all three pillars

#### 3. Features Section (Expand Existing)
Current 4 features (yield, borrow, soft liquidation, auto-repay) only cover capital efficiency + safety.

Add features to cover the Agentic pillar:
- **AI Agent Marketplace** — Deploy and authorize trading agents with on-chain identity (ERC-8004)
- **Prediction Markets** — Binary price predictions with yield while staked, settled via Chainlink CRE
- **Agent Strategies** — 9 built-in presets + custom strategy builder with policy guardrails

Layout: Interleave features by pillar (one capital efficiency, one agent, one safety, etc.) to show the full platform in a balanced way.

#### 4. ComparisonTable Section (Improve Existing)
Add rows:
- AI Agent Support: Yes (ERC-8004) vs No vs No
- Prediction Markets: Yes (CRE-settled) vs No vs No
- Agent Payment Protocol: X402 vs None vs None

#### 5. NEW: Technology Stack / "Powered By" Section
Prominent badges/cards for each standard:
- **ERC-8004** — On-chain agent identity, reputation, and validation standard
- **X402** — Coinbase micropayment protocol for agent service monetization
- **Chainlink CRE** — Trustless prediction market settlement via Compute Runtime Environment
- **MCP** — Model Context Protocol with 40+ trading tools
- **A2A** — Google Agent-to-Agent communication protocol

Each badge links to its docs page.

#### 6. Flywheel Section (Improve Existing)
Expand the compounding engine to show how agents participate:
- Deposit -> Trade (manual or via agent) -> Earn (yield + predictions) -> Compound

#### 7. NEW or Improve CTA Section
Add developer-focused CTA: "Build Your Agent" alongside "Start Trading"

### Docs Changes

#### Existing Pages (Already Documented)
- `architecture/agent.mdx` — Agent architecture
- `architecture/erc8004.mdx` — ERC-8004 standard
- `architecture/x402.mdx` — X402 payment protocol

#### New Pages Needed
1. **`architecture/predictions.mdx`** — PricePrediction contract, market types (Directional/Absolute), staking, yield while predicted, settlement flow
2. **`architecture/cre.mdx`** — Chainlink CRE integration, settlement workflow, DON quorum, report encoding
3. **`developers/mcp.mdx`** — High-level MCP integration overview (how agents connect, transport options). Not a full tool catalog — tool details are up to individual agent developers.
4. **`developers/a2a.mdx`** — High-level A2A integration overview (agent card discovery, communication patterns). Not a full protocol reference.

#### Navigation Update
Add Predictions to Architecture section. Add MCP and A2A to Developer section.

## Resolved Questions

1. **Stats in Hero:** Leave existing placeholder stats as-is for now.
2. **Multi-chain messaging:** Show "Multi-chain" generically without listing specific chains. Details in docs.
3. **Feature prioritization:** Interleave features by pillar (capital efficiency, agent, safety) for balanced representation.
4. **Docs depth for MCP/A2A:** High-level overviews only. Tool details are up to individual agent developers.

## Resolved Questions (continued)

5. **Partner logos:** Yes — use Chainlink, Coinbase (x402), and other partner logos in the "Powered By" section.

## Open Questions

None — all questions resolved.
