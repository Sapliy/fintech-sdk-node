# @sapliyio/fintech

[![NPM Version](https://img.shields.io/npm/v/@sapliyio/fintech.svg)](https://www.npmjs.com/package/@sapliyio/fintech)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Official Node.js SDK for the Sapliy Fintech Ecosystem. Build robust financial applications with ease using our modern, type-safe SDK.

## Features

- **Payments**: Create charges, handle refunds, and manage payment states.
- **Wallets**: First-class wallet primitives for user balances and internal accounting.
- **Ledger**: Double-entry bookkeeping for high-integrity transaction tracking.
- **Billing**: Manage subscriptions and recurring billing.
- **Connect**: Multi-tenant support and managed accounts.
- **Webhooks**: Simple event handling with signature verification.
- **Type-Safe**: Full TypeScript support with detailed interfaces.

## Installation

```bash
npm install @sapliyio/fintech
# or
yarn add @sapliyio/fintech
```

## Quick Start

Initialize the client with your API key and start making requests.

```javascript
const { FintechClient } = require('@sapliyio/fintech');

const client = new FintechClient('your_api_key_here');

async function createPayment() {
  try {
    const payment = await client.payments.create({
      amount: 2000, // $20.00
      currency: 'USD',
      sourceId: 'src_123',
      description: 'Order #1234'
    });
    console.log('Payment created:', payment.id);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

createPayment();
```

## API Reference

### Payments
- `client.payments.create(req)`: Create a new charge.
- `client.payments.get(id)`: Retrieve payment details.
- `client.payments.refund(id, amount)`: Refund a specific payment.

### Wallets
- `client.wallets.create(req)`: Create a new wallet.
- `client.wallets.get(id)`: Get wallet balance and details.
- `client.wallets.credit(id, req)`: Add funds to a wallet.
- `client.wallets.debit(id, req)`: Withdraw funds from a wallet.

### Ledger
- `client.ledger.recordTransaction(req)`: Record a transaction in the immutable ledger.
- `client.ledger.getAccount(accountId)`: Get ledger account details and balance.

### Billing
- `client.billing.createSubscription(req)`: Start a new subscription.
- `client.billing.getSubscription(id)`: Retrieve subscription status.
- `client.billing.cancelSubscription(id)`: Cancel an active subscription.

### Webhooks
- `client.webhooks.constructEvent(payload, signature, secret)`: Verify and parse webhook events.

## Webhooks Handling

Sapliy sends webhooks for various events. Here's how to handle them using Express:

```javascript
const express = require('express');
const app = express();

app.post('/webhooks', express.raw({type: 'application/json'}), (req, res) => {
  const sig = req.headers['x-sapliy-signature'];
  const secret = process.env.SAPLIY_WEBHOOK_SECRET;

  try {
    const event = client.webhooks.constructEvent(req.body, sig, secret);
    
    switch (event.type) {
      case 'payment.succeeded':
        const payment = event.data.object;
        // Handle successful payment
        break;
      // ... handle other event types
    }
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  res.json({received: true});
});
```

## Error Handling

The SDK throws descriptive errors when an API call fails:

```javascript
try {
  await client.payments.get('invalid_id');
} catch (error) {
  // error.message will contain: "Fintech API Error (404): ..."
}
```

## License

MIT © [Sapliy](https://github.com/sapliy)
