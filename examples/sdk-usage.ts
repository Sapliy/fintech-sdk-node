import { SapliyClient } from '../src/index';

async function main() {
    // Config uses basePath now
    const client = new SapliyClient('sk_test_12345', { basePath: 'http://localhost:8080' });

    // Emit an event
    try {
        const response = await client.events.emitEvent({
            type: 'payment.created',
            data: {
                amount: 1000,
                currency: 'USD',
                customer_id: 'cust_123'
            }
        });
        console.log('Event emitted:', response.data);
    } catch (error) {
        console.error('Error emitting event:', error);
    }
}

main();
