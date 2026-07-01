# Slides Builder

[![Deploy Slides](https://github.com/0vas/slides-builder/actions/workflows/deploy.yml/badge.svg)](https://github.com/0vas/slides-builder/actions/workflows/deploy.yml)
[![Release Package](https://github.com/0vas/slides-builder/actions/workflows/release.yml/badge.svg)](https://github.com/0vas/slides-builder/actions/workflows/release.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Slidev](https://img.shields.io/badge/Slidev-52.15.2-2B90B6.svg)](https://sli.dev)

Open-source Slidev workspace for building presentation decks as code with
reusable components, agent-friendly specs, local assets, and GitHub Pages
deployment.

Use this repository as the master template. Fork it into another account or
organization for personal/team decks, or generate from it as a template when
the downstream repository must live under the same GitHub user. Keep this
upstream generic.

## What's Included

- `decks/_template`: starting point for new talks.
- `decks/component-showcase`: visual catalog and component reference.
- `decks/platform-engineering-that-teams-actually-adopt`: example talk.
- `shared/components`: reusable Vue/Slidev components.
- `.agents/skills`: reusable agent workflows for triage, generation, QA, and TDD.
- `.github/workflows`: deploy and release automation.

## Quick Start

```bash
npm install
make list
make dev DECK=platform-engineering-that-teams-actually-adopt
make check DECK=platform-engineering-that-teams-actually-adopt
make build-all
```

Common exports:

```bash
make pdf DECK=<slug>
make pptx DECK=<slug>
```

PPTX exports are static snapshots; use hosted Slidev for live motion.

## Create A Deck

1. Start from `decks/_template`.
2. Use `decks/platform-engineering-that-teams-actually-adopt` as the complete
   reference example for structure, brief, local media, components, and visual
   rhythm.
3. Record the brief in `decks/<slug>/deck.brief.md`.
4. Store deck media in `decks/<slug>/public/media/`.
5. Reuse shared components before creating deck-local ones.
6. Run `make check DECK=<slug>` before handoff.

Required prompt inputs for agent-assisted decks:

- title/topic
- audience and level
- duration
- desired outcome
- required points
- tone/context
- constraints
- available assets
- visual mode: light, dark, or black/keynote

Example prompt:

```text
Create a presentation titled "Platform Engineering That Teams Actually Adopt".

Audience: engineering managers, platform engineers, and senior developers.
Audience level: intermediate.
Duration: 30 minutes.
Event context: internal engineering conference where teams are evaluating
whether to invest in a platform organization.

Goal: attendees should leave with a practical operating model for building,
adopting, and measuring an internal developer platform.

Core message: a platform succeeds when teams choose to use it, not merely when
the organization deploys more tools.

Must cover:
- the difference between a platform and a collection of tools,
- product thinking and developer experience,
- golden paths and self-service workflows,
- governance and security without unnecessary friction,
- adoption and outcome metrics,
- a phased implementation roadmap.

Tone: practical, candid, and executive-friendly.
Constraints: reserve the final 5 minutes for questions, do not depend on a live
demo, keep product references vendor-neutral, include a concise closing takeaway
and recommended next steps.
Assets: no images or diagrams yet; search for suitable local assets when an
image-bearing slide is planned.
Visual mode: light, modern, editorial style with restrained motion; favor
diagrams, one clear data visualization, and a few strong images over dense text.
```

## Repository Map

```text
decks/                 Slidev decks
shared/components/     reusable visual components
shared/styles/         theme and palettes
data/speaker/          generic speaker data placeholder
docs/                  workflow, style, release, and component guidance
scripts/deck.mjs       multi-deck dev/build/export wrapper
AGENTS.md              canonical agent instructions
```

## Documentation

- [Agent specification](AGENTS.md)
- [New deck guide](docs/new-deck-agent-guide.md)
- [Deck workflow](docs/deck-generation-workflow.md)
- [Component catalog](docs/component-catalog.md)
- [Style catalog](docs/style-catalog.md)
- [Slide guidelines](docs/slide-guidelines.md)
- [Release workflow](docs/release-workflow.md)

## Repository Rulesets

This template ships with `.github/CODEOWNERS` assigning repository ownership to
`@0vas` and a required-check friendly workflow:

```text
Status Check / template
```

Use that exact status check name when configuring branch or repository rulesets.

## Template Rule

Keep this repository reusable. Personal talks, private assets, speaker CV
details, and organization-specific content belong in downstream forks.
