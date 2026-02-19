import { SapliyClient } from '../src';

/**
 * Real-world Example: E-commerce Checkout Integration
 * 
 * This example shows how to handle a checkout process:
 * 1. Create a Payment Intent
 * 2. Record revenue in the Ledger
 * 3. Trigger an order confirmation event
 */
async function runCheckoutExample() {
    // Config uses basePath
    const client = new SapliyClient('sk_test_ecommerce_123', { basePath: 'http://localhost:8080' });

    const zoneID = 'zone_ecommerce_prod';

    console.log('--- Step 1: Creating Payment Intent ---');
    try {
        const payment = await client.payments.createPaymentIntent(zoneID, {
            amount: 4999, // $49.99
            currency: 'USD',
            description: 'Order #ORD-9982',
        });
        console.log(`Payment Intent created: ${payment.data.id} - Status: ${payment.data.status}`);

        console.log('\n--- Step 2: Recording Revenue in Ledger ---');
        // We record the double-entry transaction using the helper or direct v1LedgerTransactionsPost
        await client.recordTransaction(zoneID, {
            reference_id: payment.data.id,
            description: 'Sale Revenue: Order #ORD-9982',
            entries: [
                { account_id: 'acc_cash_usd', amount: 4999 },    // Debit Cash
                { account_id: 'acc_revenue_usd', amount: -4999 } // Credit Revenue
            ]
        });
        console.log('Ledger transaction recorded.');

        console.log('\n--- Step 3: Triggering Order Confirmation ---');
        console.log('Emitting "order.completed" event...');
        const event = await client.emitEvent({
            type: 'order.completed',
            data: {
                order_id: 'ORD-9982',
                payment_id: payment.data.id,
                amount: 4999,
                currency: 'USD'
            }
        });
        console.log('Event emitted ID:', event.data.event_id);

    } catch (error: any) {
        console.error('Error during checkout:', error.response?.data || error.message);
    }
}

// runCheckoutExample();
runCheckoutExample().then(() => console.log('Checkout example finished.'));
