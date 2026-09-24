# ADR 0001: Authentication Architecture

- Status: Accepted
- Date: 2026-09-24

## Context

The application needs both traditional account authentication and social sign-in while keeping the business domain independent from the identity provider. The project also uses Cloudflare Workers, Hono, and Neon PostgreSQL, with a possible future migration to self-hosted PostgreSQL.

## Decision

Use Better Auth self-hosted inside the Cloudflare Worker/Hono application as the authentication layer.

Initial authentication methods:

- Email and password.
- Google OAuth.

Better Auth owns authentication concerns such as users, accounts, sessions, verification, and provider credentials. The application domain owns organizations and memberships and must not depend directly on Neon Auth-specific tables or APIs.

Neon PostgreSQL is the initial managed PostgreSQL provider, but Neon Auth is not part of the application architecture.

## Domain boundary

The domain should reference authenticated identity through a stable user identifier and application-owned membership relationships:

`User identity -> Membership -> Organization -> domain data`

Products, inventory, inventory movements, and sales must not contain Neon Auth-specific dependencies.

## Portability

A future migration from Neon PostgreSQL to self-hosted PostgreSQL should not require replacing the authentication mechanism at the same time. A database migration may still require explicit authentication-data and session migration work, but the application continues to use the same Better Auth layer.

## Consequences

### Positive

- One authentication mechanism for email/password and Google OAuth.
- Authentication remains under application control.
- No dependency on Neon Auth for identity or sessions.
- Better portability if PostgreSQL moves away from Neon.
- Authentication concerns remain separated from inventory and sales rules.

### Trade-offs

- We own Better Auth configuration, secrets, migrations, and operational responsibility.
- OAuth configuration and production secrets must be managed per environment.
- Authentication endpoints run as part of the Cloudflare Worker and must respect its runtime constraints.

## Rejected alternative

### Neon Auth as the authentication provider

Not selected because the project explicitly values portability away from Neon and wants the authentication mechanism to remain under application control. Neon Auth is a valid managed alternative, but adopting it would introduce a provider-specific authentication service that would need to be migrated separately from PostgreSQL in a future move to self-hosted infrastructure.
