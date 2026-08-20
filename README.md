```
███████╗ █████╗ ██████╗ ██╗     ██╗   ██╗ ██╗   ██╗
██╔════╝██╔══██╗██╔══██╗██║     ██║   ██║ ╚██╗ ██╔╝
███████╗███████║██████╔╝██║     ██║   ██║  ╚████╔╝
╚════██║██╔══██║██╔══██╗██║     ██║   ██║   ╚██╔╝
███████║██║  ██║██║  ██║███████╗╚██████╔╝    ██║
╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝ ╚═════╝     ╚═╝
```

# @sapliyio/fintech

Official Node.js SDK for the Sapliy AI-Native Financial Operations Platform.

> **Sapliy is an AI-native Financial Operations Intelligence Layer that turns business goals into reliable, explainable, auditable financial outcomes — by orchestrating the systems companies already run (Stripe, PayPal, Paddle, HubSpot, Xero), not replacing them.**

| Badge | |
|---|---|
| Package | [`@sapliyio/fintech`](https://www.npmjs.com/package/@sapliyio/fintech) |
| Version | `1.1.0` |
| License | [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) |
| Build | [![NPM Version](https://img.shields.io/npm/v/@sapliyio/fintech.svg)](https://www.npmjs.com/package/@sapliyio/fintech) |
| Language | TypeScript (full type definitions included) |

> **Legacy package name:** `@sapliyio/fintech` is the published name, kept for compatibility with the platform's fintech heritage. It is the official Sapliy Node.js SDK.

---

## What is this?

The **official Node.js client** for the Sapliy core backend (`sapliy-ecosystem`). A generated, type-safe OpenAPI client (`SapliyClient`) covering auth, billing, events, executions, flows, ledger, payments, wallets, and zones — plus a first-class **Operational Playbook catalog** that maps business goals to the MVP playbooks.

Like every Sapliy SDK, it orchestrates and audits the systems you already run — it never replaces your payment stack.

## Key features

- **Payments** — create, fetch, and confirm payment intents
- **Wallets** — read balances, top up, and transfer funds
- **Ledger** — double-entry bookkeeping: accounts and transactions
- **Billing** — subscriptions and recurring billing
- **Zones** — test/live environment isolation
- **Events** — emit, replay, and list past events (drives the MVP Operational Playbooks)
- **Flows & Executions** — manage automation flows and resume paused executions
- **Playbooks** — `.playbooks.list()` / `.playbooks.bootstrap()` for the MVP catalog
- **Convenience helpers** — `client.emitEvent()` and `client.recordTransaction()` wrap common calls
- **TypeScript** — every request/response type exported from the package root
- **Fixed-point money** — all amounts are integer cents, never floats

## Install

```bash
npm install @sapliyio/fintech
# or
yarn add @sapliyio/fintech
```

## Quickstart

```typescript
import { SapliyClient } from '@sapliyio/fintech';

const client = new SapliyClient('sk_test_...');

// Create a payment intent (amount in cents)
const payment = await client.payments.createPaymentIntent('zone_main_123', {
  amount: 2000, // $20.00
  currency: 'USD',
  description: 'Order #1234'
});
console.log('Payment created:', payment.data.id);

// List the MVP Operational Playbook catalog
console.log(client.playbooks.list());

// Bootstrap a scaffold config for a playbook
const config = client.playbooks.bootstrap('revenue-recovery');
console.log(config);
```

> The constructor defaults to `https://api.sapliy.io` with a 30s timeout.

## Configuration

```typescript
// Custom base URL (for self-hosted)
const client = new SapliyClient('sk_test_...', {
  basePath: 'https://api.yourdomain.com'
});

// Custom timeout
const client = new SapliyClient('sk_test_...', {
  basePath: 'https://api.yourdomain.com',
  timeout: 30000 // 30 seconds
});
```

## API overview

### Payments

```typescript
// xZoneID first, amount in cents
const payment = await client.payments.createPaymentIntent('zone_main_123', {
  amount: 1000,
  currency: 'USD',
  description: 'Coffee'
});

const payment = await client.payments.getPaymentIntent('pi_123', 'zone_main_123');

const payment = await client.payments.confirmPaymentIntent('pi_123', 'zone_main_123', undefined, {
  payment_method_id: 'pm_card_visa'
});
```

### Wallets

```typescript
const wallet = await client.wallets.getWallet('user_123', 'zone_main_123');
console.log('Balance:', wallet.data.balance);

await client.wallets.topupWallet('zone_main_123', {
  amount: 1000,
  currency: 'USD',
  reference_id: 'topup_001'
});

await client.wallets.transferWallet('zone_main_123', {
  to_user_id: 'user_456',
  amount: 500,
  currency: 'USD',
  reference_id: 'transfer_001'
});
```

### Ledger

```typescript
const account = await client.ledger.v1LedgerAccountsPost('zone_main_123', {
  name: 'Merchant',
  type: 'liability',
  currency: 'USD'
});

// Record a transaction (double-entry)
const txn = await client.ledger.v1LedgerTransactionsPost('zone_main_123', {
  reference_id: 'ref_456',
  description: 'Payment received',
  entries: [ /* LedgerEntry[] */ ]
});

const account = await client.ledger.getLedgerAccount('acc_123', 'zone_main_123');
const txn = await client.ledger.getLedgerTransaction('txn_123', 'zone_main_123');
```

### Billing

```typescript
const subscription = await client.billing.createSubscription({
  plan_id: 'plan_monthly',
  customer_id: 'cust_123'
});

const subscription = await client.billing.getSubscription('sub_123');
await client.billing.cancelSubscription('sub_123');
```

### Events (drive playbooks)

```typescript
await client.events.emitEvent({
  type: 'payment.failed',
  data: { amount: 2000, currency: 'USD' },
  idempotency_key: 'idem-1'
});

const events = await client.events.getPastEvents('zone_main_123', 20, 0);

await client.events.replayEvent('evt_123', { zone_id: 'zone_main_123' });
```

### Zones

```typescript
const zone = await client.zones.createZone({
  org_id: 'org_123',
  name: 'My Zone',
  mode: 'test'
});

const zones = await client.zones.listZones('org_123');
```

### Flows & Executions

```typescript
const flow = await client.flows.createFlow({ /* AutomationFlow */ });
await client.flows.updateFlow('fl_123', flow);
const flows = await client.flows.listFlows('zone_main_123');

const execution = await client.executions.getExecution('ex_123');
await client.executions.resumeExecution('ex_123', { approved: true });
```

### Playbooks

```typescript
client.playbooks.list();                     // PlaybookCatalog[] — the MVP catalog
client.playbooks.bootstrap('refund-approval'); // PlaybookBootstrap scaffold
```

### Convenience helpers

```typescript
// Wraps events.emitEvent
await client.emitEvent({ type: 'checkout.completed', data: { total: 5000 } });

// Wraps ledger.v1LedgerTransactionsPost
await client.recordTransaction('zone_main_123', { reference_id: 'ref', description: 'd', entries: [] });
```

## Operational Playbooks

The SDK ships the same MVP playbook catalog the backend playbook engine and the console expose:

| Playbook | Type | Purpose |
|---|---|---|
| Revenue Recovery & Dunning | `revenue-recovery` | Recover failed subscription payments with automated dunning and smart retries |
| Refund & Invoice Orchestration | `refund-approval` | Route refunds and invoice adjustments through the policy engine for approval |
| Invoice Reminders | `invoice-reminders` | Send automated reminders for overdue invoices |

## Architecture / how it works

```mermaid
flowchart LR
    App[Your Node.js service] --> SDK[SapliyClient<br/>@sapliyio/fintech]
    SDK --> Gateway[Sapliy API Gateway<br/>sapliy-ecosystem]
    Gateway --> Engine[Playbook & Policy Engines]
    Engine --> Stripe[Stripe / PayPal / Paddle]
    Engine --> HubSpot[HubSpot / Xero]
    Engine --> Log[Audit Decision Log]
```

The SDK never talks to providers directly — it drives the Sapliy gateway, which orchestrates the systems you already run and records every decision in the immutable audit log.

## Error handling

The generated client is built on Axios. Errors surface as Axios errors with the API response attached:

```typescript
try {
  await client.payments.getPaymentIntent('invalid_id', 'zone_main_123');
} catch (error: any) {
  console.log(`API error:`, error.response?.data || error.message);
}
```

## TypeScript support

Full type definitions are included — every request and response type is exported from the package root:

```typescript
import {
  SapliyClient,
  PaymentIntent,
  LedgerAccount,
  EmitEventRequest,
  Wallet
} from '@sapliyio/fintech';
```

## Development

```bash
npm run build   # tsc
npm run lint    # tsc --noEmit
npm test        # build + node --test dist/**/*.test.js
```

## Examples

See the [`examples/`](examples/) directory for checkout and real-world usage walkthroughs.

## Part of the Sapliy platform

- [`sapliy-ecosystem`](https://github.com/Sapliy/sapliy-ecosystem) — core backend, playbook engine, policy & audit engines
- [`sapliy-sdk-go`](https://github.com/Sapliy/sapliy-sdk-go) — Go SDK
- [`sapliy-sdk-python`](https://github.com/Sapliy/sapliy-sdk-python) — Python SDK (`sapliyio-fintech`)
- [`sapliy-ui`](https://github.com/Sapliy/sapliy-ui) — React components (`@sapliyio/fintech-ui`)
- [`sapliy-cli`](https://github.com/Sapliy/sapliy-cli) — developer CLI
- Docs — [docs.sapliy.io](https://docs.sapliy.io)

## License

MIT © [Sapliy](https://github.com/sapliy)