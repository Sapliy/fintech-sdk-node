import { SapliyClient } from '../src/index';

async function main() {
    const client = new SapliyClient('sk_test_12345', 'http://localhost:8080');

    // Emit an event
    try {
        const response = await client.events.emit('payment.created', {
            amount: 1000,
            currency: 'USD',
            customer_id: 'cust_123'
        });
        console.log('Event emitted:', response);
    } catch (error) {
        console.error('Error emitting event:', error);
    }
}

main();
