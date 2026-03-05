---
topic: landing-page-animations
date: 2026-03-06
status: active
---

# Landing Page Animations Improvement

## What We're Building

Add fade + slide-up entrance animations to every section of the ScaleX landing page, triggered via framer-motion's `whileInView`. Each section's content should animate in as the user scrolls, with staggered delays (0.15-0.2s) between child elements.

## Current State

| Section | Current Animation | Needs Work |
|---------|------------------|------------|
| Header | Scroll blur transition only | No (fixed element) |
| Hero | Static, hover effects only | Yes - entrance animation |
| Features | Advanced (beams, orbits, glow) | Yes - section entrance |
| Benefits | Scroll-driven text reveal + carousel | Minimal - already animated |
| TechStack | Marquee scrolling | Yes - heading entrance |
| CTA | Completely static | Yes - entrance animation |
| Footer | Basic hover transitions | Yes - entrance animation |

## Why This Approach

- **Fade + slide up** is clean, modern, and Apple-like
- **framer-motion whileInView** is consistent with existing codebase patterns
- **0.15-0.2s stagger** gives a noticeable but not slow cascade effect
- Converts static Astro components to React where needed, or wraps with a shared animation component

## Key Decisions

1. **Animation style**: Fade in + slide up (translateY 30-40px to 0)
2. **Trigger**: framer-motion `whileInView` with `once: true` (animate once, don't repeat)
3. **Stagger**: 0.15-0.2s delay between sibling elements
4. **Duration**: 0.5-0.6s per element
5. **Easing**: ease-out for natural deceleration
6. **Approach**: Create a reusable `<FadeIn>` React wrapper component that all sections can use

## Sections to Animate

### Hero
- Logo/title fade in first
- Subtitle + description staggered
- CTA buttons staggered
- Background glow can fade in separately

### Features (Bento Grid)
- Section as a whole fades in
- Individual bento cards stagger in

### Benefits
- Already has TextReveal + scroll carousel
- No changes needed

### TechStack (Powered By)
- Heading + subtitle fade in
- Marquee rows can fade in with slight delay

### CTA
- Heading fade in
- Description + buttons stagger

### Footer
- Logo + description fade in
- Grid columns stagger left to right
- Large "ScaleX" text fades in last
