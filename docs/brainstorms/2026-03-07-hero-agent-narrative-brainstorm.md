# Hero Section — AI Agent Narrative Alignment

**Date:** 2026-03-07
**Status:** Ready for implementation

---

## What We're Building

Update the hero section description and stats to lead with ScaleX's agent-first identity. Currently the copy buries agents as a feature; we want them front and center as the platform's core narrative.

**File:** `src/components/Hero.astro`

---

## Current State

**Description:**
> Trade, predict, and deploy AI agents on the most capital-efficient DEX. Earn yield on every order. Settle predictions trustlessly. Build agents with on-chain identity.

**Stats:**
- $1.2B — Total Volume
- 12.5% — Limit Order APY
- $450M — TVL

---

## What Changes

### Description (replace entirely)

> The DeFi platform built for AI agents. Deploy agents that trade, lend, and predict — secured by on-chain policy, identified by ERC-8004, and paid via X402 micropayments.

**Why:** Leads with the agent-first identity, names all three verticals (trading, lending, prediction), and surfaces the key differentiators (on-chain policy, ERC-8004, X402) without over-explaining.

### Stats (replace middle stat)

| Before | After |
|---|---|
| $1.2B — Total Volume | $1.2B — Total Volume ✓ |
| 12.5% — Limit Order APY | TBD — Active Agents ← replace |
| $450M — TVL | $450M — TVL ✓ |

**Why Limit Order APY:** It's the least universal metric; Active Agents reinforces adoption of the agent system and the platform's core identity.

**Open:** What number to use for Active Agents (placeholder vs real data)?

---

## Key Decisions

- **Platform scope:** Not a DEX — ScaleX is trading + lending + prediction markets
- **Copy direction:** Agent-led, platform-breadth (Option A)
- **Stat swap:** Replace Limit Order APY with Active Agents count
- **Tone:** Technical but accessible — names ERC-8004 and X402 without explaining them
