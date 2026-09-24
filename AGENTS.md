# AGENTS.md

## Project

AI-native, responsive PWA for generic inventory management. Products can be registered manually or through barcode scanning; sales create inventory movements and reduce stock transactionally.

## Stack

- Frontend: React + TypeScript + Vite
- API: Hono + TypeScript on Cloudflare Workers
- Database: Neon PostgreSQL + Drizzle ORM
- Storage: Cloudflare R2
- Async processing: Cloudflare Queues only when asynchronous processing is actually required
- Deployment/runtime: Cloudflare

## Core Rules

- Treat GitHub as the source of truth.
- Keep the application responsive across mobile, tablet, and desktop.
- PWA is the primary client model; do not introduce native mobile apps unless a real requirement justifies it.
- Inventory changes must be represented by explicit movements; do not silently mutate stock without an auditable movement.
- Sale and stock deduction must remain transactionally consistent in the database; do not put the core stock deduction behind a queue.
- Do not add infrastructure or dependencies without a concrete requirement.
- Prefer small, focused changes that preserve existing behavior.
- Update the relevant `.ai/` context when architecture, domain rules, or important decisions change.

## Context Map

Read only the context relevant to the task:

- `.ai/product.md` — product scope and goals
- `.ai/domain.md` — domain model
- `.ai/architecture.md` — technical architecture and stack decisions
- `.ai/business-rules.md` — business invariants and rules
- `.ai/inventory.md` — inventory and movement rules
- `.ai/barcode.md` — barcode/scanning decisions
- `.ai/pwa.md` — PWA and responsive requirements
- `.ai/database.md` — schema and persistence rules
- `.ai/security.md` — security requirements
- `.ai/testing.md` — validation strategy
- `.ai/deployment.md` — deployment/runtime details
- `.ai/decisions/` — architectural decisions
- `.ai/tasks/` — implementation tasks

## Workflow

1. Inspect the relevant context before coding.
2. Make the smallest coherent implementation.
3. Run the narrowest relevant validation available.
4. Do not invent commands, APIs, schema, or business rules that are not documented or evident from the codebase.
5. Update context when the implementation changes a documented decision or invariant.

## Definition of Done

A task is not complete when code merely compiles. Confirm relevant behavior, validation, and documentation/context updates before considering the task complete.
