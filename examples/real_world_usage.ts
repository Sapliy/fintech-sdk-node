import { SapliyClient } from '../src';

async function runExample() {
    const client = new SapliyClient('sk_test_123', { basePath: 'http://localhost:8080' });

    try {
        console.log('--- Payments Example ---');
        // Node SDK uses the generated method names
        const payment = await client.payments.createPaymentIntent('zone_main_123', {
            amount: 1000, // $10.00
            currency: 'USD',
            description: 'Example Payment for Node.js SDK'
        });
        console.log('Created Payment Intent:', payment.data.id);

        await client.payments.confirmPaymentIntent(payment.data.id, 'zone_main_123', undefined, {
            payment_method_id: 'pm_card_visa'
        });
        console.log('Confirmed Payment Intent!');

        console.log('\n--- Wallets Example ---');
        const wallet = await client.wallets.getWallet('user_123', 'zone_main_123');
        console.log('Wallet Balance:', wallet.data.balance);

        const topup = await client.wallets.topupWallet('zone_main_123', {
            amount: 5000,
            currency: 'USD',
            reference_id: 'topup_001'
        });
        console.log('Topup Transaction ID:', topup.data.transaction_id);

        console.log('\n--- Events Example ---');
        const event = await client.events.emitEvent({
            type: 'user.active',
            data: { user_id: 'user_123' }
        });
        console.log('Emitted Event ID:', event.data.event_id);

    } catch (error: any) {
        console.error('Error:', error.response?.data || error.message);
    }
}

runExample();
