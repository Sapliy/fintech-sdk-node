import { SapliyClient } from '../index';

async function runExample() {
    const client = new SapliyClient('sk_test_123', 'http://localhost:8080');

    try {
        console.log('--- Payments Example ---');
        const payment = await client.payments.paymentServiceCreatePaymentIntent({
            amount: '1000', // $10.00
            currency: 'USD',
            description: 'Example Payment for Node.js SDK'
        });
        console.log('Created Payment Intent:', payment.data.id);

        await client.payments.paymentServiceConfirmPaymentIntent(payment.data.id!, {
            paymentMethodId: 'pm_card_visa'
        });
        console.log('Confirmed Payment Intent!');

        console.log('\n--- Wallets Example ---');
        const wallet = await client.wallets.walletServiceCreateWallet({
            userId: 'user_123',
            currency: 'USD'
        });
        console.log('Created Wallet:', wallet.data.id);

        console.log('\n--- Notifications Example ---');
        const webhook = await client.notifications.notificationServiceCreateWebhookEndpoint({
            url: 'https://example.com/webhook',
            enabledEvents: ['payment.succeeded', 'payment.failed'],
            description: 'Main Webhook'
        });
        console.log('Created Webhook Endpoint:', webhook.data.id);

        const history = await client.notifications.notificationServiceGetNotificationHistory('user_123');
        console.log('Retrieved Notification History, count:', history.data.notifications?.length);

    } catch (error: any) {
        console.error('Error:', error.response?.data || error.message);
    }
}

runExample();
