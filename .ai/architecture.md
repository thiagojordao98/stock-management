# Architecture

## Stack

- Frontend: React + TypeScript + Vite
- API: Hono + TypeScript on Cloudflare Workers
- Authentication: Better Auth self-hosted in the Cloudflare Worker
- Database: Neon PostgreSQL
- ORM: Drizzle ORM
- Object storage: Cloudflare R2
- Asynchronous processing: Cloudflare Queues when a concrete asynchronous requirement exists
- Deployment/runtime: Cloudflare

## Authentication architecture

- Better Auth is the application's authentication layer; do not introduce Neon Auth as a second authentication provider.
- Initial authentication methods are email/password and Google OAuth.
- Authentication-provider concerns remain isolated from the business domain.
- Organization and membership are application-domain concepts, not Neon Auth dependencies.
- The application must not depend directly on Neon Auth-specific tables or APIs.
- Keep the authentication boundary portable so PostgreSQL can move from Neon to self-hosted infrastructure without changing the core authentication mechanism.

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
