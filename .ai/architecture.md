# Architecture

## Stack

- Frontend: React + TypeScript + Vite
- API: Hono + TypeScript on Cloudflare Workers
- Database: Neon PostgreSQL
- ORM: Drizzle ORM
- Object storage: Cloudflare R2
- Asynchronous processing: Cloudflare Queues when a concrete asynchronous requirement exists
- Deployment/runtime: Cloudflare

## Architectural principles

- Serverless-first.
- Keep synchronous business-critical operations synchronous.
- Keep sale confirmation and stock deduction transactionally consistent in PostgreSQL.
- Use queues for secondary/asynchronous work, not as a substitute for transactional inventory updates.
- Prefer managed platform services over introducing separately operated infrastructure.
- Keep the frontend responsive and installable as a PWA across mobile, tablet, and desktop.

## Initial scope

Do not introduce RabbitMQ or additional infrastructure unless a concrete requirement cannot be satisfied by the existing platform services.

## Context discipline

Architecture changes must be reflected in this file and, when significant, recorded under `.ai/decisions/`. Implementation tasks should reference only the context they need.
