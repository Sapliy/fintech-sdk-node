import axios, { AxiosInstance } from 'axios';
import * as crypto from 'crypto';

export interface EventEmitOptions {
    idempotencyKey?: string;
    source?: string;
    env?: string;
}

export interface EventEmitResponse {
    status: string;
    event_id?: string;
    topic?: string;
    message?: string;
}

export class Events {
    private axiosInstance: AxiosInstance;

    constructor(axiosInstance: AxiosInstance) {
        this.axiosInstance = axiosInstance;
    }

    /**
     * Emit an event to the Sapliy Gateway
     * @param type Event type (e.g., "payment.created")
     * @param data Event payload
     * @param options Optional configuration (idempotency key, source, env)
     */
    public async emit(
        type: string,
        data: Record<string, any>,
        options: EventEmitOptions = {}
    ): Promise<EventEmitResponse> {
        const idempotencyKey = options.idempotencyKey || this.generateIdempotencyKey(type, data);

        const headers: Record<string, string> = {
            'Idempotency-Key': idempotencyKey,
        };

        const payload = {
            type,
            data,
            meta: {
                source: options.source || 'sdk-node',
                env: options.env || process.env.NODE_ENV || 'development',
            },
        };

        try {
            const response = await this.axiosInstance.post('/v1/events/emit', payload, { headers });
            return response.data;
        } catch (error: any) {
            if (error.response) {
                throw new Error(`Event emission failed: ${error.response.status} ${JSON.stringify(error.response.data)}`);
            }
            throw error;
        }
    }

    private generateIdempotencyKey(type: string, data: Record<string, any>): string {
        const payloadStr = JSON.stringify(data);
        const hash = crypto.createHash('sha256').update(payloadStr).digest('hex');
        return `${type}-${hash}-${Date.now()}`;
    }
}
