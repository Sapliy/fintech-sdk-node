# @sapliyio/fintech

[![NPM Version](https://img.shields.io/npm/v/@sapliyio/fintech.svg)](https://www.npmjs.com/package/@sapliyio/fintech)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Official Node.js SDK for the Sapliy Fintech Ecosystem. Build robust financial applications with a modern, type-safe SDK.

## Features

- **Payments** — Create charges, handle refunds, manage payment lifecycle
- **Wallets** — User balances and internal accounting
- **Ledger** — Double-entry bookkeeping for high-integrity transactions
- **Billing** — Subscriptions and recurring billing
- **Connect** — Multi-tenant support and managed accounts
- **Webhooks** — Event handling with signature verification
- **TypeScript** — Full type definitions included
- **Events** — Emit events to trigger flows

## Installation

```bash
npm install @sapliyio/fintech
# or
yarn add @sapliyio/fintech
```

## Quick Start

```typescript
import { FintechClient } from '@sapliyio/fintech';

const client = new FintechClient('sk_test_...');

// Create a payment
const payment = await client.payments.create({
  amount: 2000, // $20.00
  currency: 'USD',
  sourceId: 'src_123',
  description: 'Order #1234'
});

console.log('Payment created:', payment.id);
```

## Configuration

```typescript
// Custom base URL (for self-hosted)
const client = new FintechClient('sk_test_...', {
  baseUrl: 'https://api.yourdomain.com'
});

// Custom timeout
const client = new FintechClient('sk_test_...', {
  timeout: 30000 // 30 seconds
});
```

## API Reference

### Payments

```typescript
// Create a charge
const payment = await client.payments.create({
  amount: 1000,
  currency: 'USD',
  sourceId: 'src_123',
  description: 'Coffee'
});

// Get payment details
const payment = await client.payments.get('pay_123');

// Refund a payment
const refund = await client.payments.refund('pay_123', 500); // partial refund
```

### Wallets

```typescript
// Create a wallet
const wallet = await client.wallets.create({
  name: 'User Wallet',
  currency: 'USD'
});

// Get wallet balance
const wallet = await client.wallets.get('wal_123');

// Credit (add funds)
const wallet = await client.wallets.credit('wal_123', {
  amount: 1000,
  description: 'Deposit'
});

// Debit (withdraw funds)
const wallet = await client.wallets.debit('wal_123', {
  amount: 500,
  description: 'Purchase'
});
```

### Ledger

```typescript
// Record a transaction
const response = await client.ledger.recordTransaction({
  accountId: 'acc_123',
  amount: 1000,
  currency: 'USD',
  description: 'Payment received',
  referenceId: 'ref_456'
});

// Get account details
const account = await client.ledger.getAccount('acc_123');
console.log('Balance:', account.balance);
```

### Billing

```typescript
// Create a subscription
const subscription = await client.billing.createSubscription({
  customerId: 'cust_123',
  planId: 'plan_monthly'
});

// Get subscription
const subscription = await client.billing.getSubscription('sub_123');

// Cancel subscription
await client.billing.cancelSubscription('sub_123');
```

### Events (Automation)

```typescript
// Emit an event to trigger flows
await client.events.emit('checkout.completed', {
  cartId: 'cart_123',
  total: 5000,
  customerId: 'cust_456'
});
```

## Webhook Handling

### Express

```typescript
import express from 'express';
import { FintechClient } from '@sapliyio/fintech';

const app = express();
const client = new FintechClient('sk_test_...');

app.post('/webhooks', express.raw({ type: 'application/json' }), (req, res) => {
  const signature = req.headers['x-sapliy-signature'] as string;
  const secret = process.env.SAPLIY_WEBHOOK_SECRET!;

  try {
    const event = client.webhooks.constructEvent(req.body, signature, secret);

    switch (event.type) {
      case 'payment.succeeded':
        const payment = event.data.object;
        console.log('Payment succeeded:', payment.id);
        break;
      case 'payment.failed':
        console.log('Payment failed');
        break;
    }
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  res.json({ received: true });
});
```

### Next.js (App Router)

```typescript
// app/api/webhooks/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { FintechClient } from '@sapliyio/fintech';

const client = new FintechClient(process.env.SAPLIY_SECRET_KEY!);

export async function POST(req: NextRequest) {
  const payload = await req.text();
  const signature = req.headers.get('x-sapliy-signature')!;
  const secret = process.env.SAPLIY_WEBHOOK_SECRET!;

  try {
    const event = client.webhooks.constructEvent(payload, signature, secret);

    if (event.type === 'payment.succeeded') {
      // Handle successful payment
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }
}
```

## Error Handling

```typescript
import { FintechError, PaymentError } from '@sapliyio/fintech';

try {
  await client.payments.get('invalid_id');
} catch (error) {
  if (error instanceof PaymentError) {
    console.log('Payment error:', error.message);
  } else if (error instanceof FintechError) {
    console.log(`API error (${error.statusCode}):`, error.message);
  }
}
```

## TypeScript Support

Full TypeScript definitions are included:

```typescript
import {
  FintechClient,
  Payment,
  Wallet,
  Subscription,
  WebhookEvent
} from '@sapliyio/fintech';

const handlePayment = (payment: Payment) => {
  console.log(payment.id, payment.amount, payment.status);
};
```

## Part of Sapliy Fintech Ecosystem

- [fintech-ecosystem](https://github.com/Sapliy/fintech-ecosystem) — Core backend
- [fintech-sdk-go](https://github.com/Sapliy/fintech-sdk-go) — Go SDK
- [fintech-sdk-python](https://github.com/Sapliy/fintech-sdk-python) — Python SDK
- [fintech-ui](https://github.com/Sapliy/fintech-ui) — React components
- [sapliy-cli](https://github.com/Sapliy/sapliy-cli) — Developer CLI

See [ARCHITECTURE.md](https://github.com/Sapliy/Sapliy-fintech/blob/main/ARCHITECTURE.md) for the full system design.

## License

MIT © [Sapliy](https://github.com/sapliy)
