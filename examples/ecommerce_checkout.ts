import { SapliyClient } from '../src';

/**
 * Real-world Example: E-commerce Checkout Integration
 * 
 * This example shows how to handle a checkout process:
 * 1. Create a Payment Intent
 * 2. Record revenue in the Ledger
 * 3. Trigger a "notification" flow for order confirmation
 */
async function runCheckoutExample() {
    const client = new SapliyClient('sk_test_ecommerce_123', 'http://localhost:8080');

    const zoneID = 'zone_ecommerce_prod';

    console.log('--- Step 1: Creating Payment Intent ---');
    try {
        const payment = await client.payments.paymentServiceCreatePaymentIntent({
            amount: "4999", // Note: The generated API expects strings for int64/decimal usually
            currency: 'USD',
            description: 'Order #ORD-9982',
        });
        console.log(`Payment Intent created: ${payment.data.id} - Status: ${payment.data.status}`);

        console.log('\n--- Step 2: Recording Revenue in Ledger ---');
        // We record the gross amount in our Asset account (Cash) and Revenue account
        await client.ledger.ledgerServiceRecordTransaction({
            accountId: 'acc_cash_usd',
            amount: "4999",
            currency: 'USD',
            description: 'Sale Revenue: Order #ORD-9982',
            referenceId: payment.data.id,
            zoneId: zoneID,
            mode: 'test'
        });
        console.log('Ledger transaction recorded.');

        console.log('\n--- Step 3: Triggering Order Confirmation Flow ---');
        // We emit an event that triggers a flow configured in the Flow Builder
        // This flow might send a WhatsApp message, generate an invoice, and update CRM.
        // Since we don't have a direct "emit" in the generated API yet (it's usually a POST to /events),
        // we use the generic auth service or custom integration.
        // In Sapliy, events are often handled via the Gateway or specialized endpoints.

        // For this example, let's assume we have a flow that starts on "order.completed"
        console.log('Emitting "order.completed" event...');
        // (Actual implementation would depend on the Event API structure)

    } catch (error: any) {
        console.error('Error during checkout:', error.response?.data || error.message);
    }
}

// runCheckoutExample();
