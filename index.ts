import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import * as crypto from 'crypto';

// --- Interfaces ---

export interface RecordTransactionRequest {
  accountId: string;
  amount: number; // In cents
  currency: string;
  description: string;
  referenceId: string;
}

export interface RecordTransactionResponse {
  transactionId: string;
  status: string;
}

export interface GetAccountResponse {
  accountId: string;
  balance: number;
  currency: string;
  createdAt: string;
}

export interface ValidateKeyResponse {
  valid: boolean;
  userId: string;
  orgId: string;
  environment: string;
  scopes: string;
}

export interface CreateChargeRequest {
  amount: number;
  currency: string;
  sourceId: string;
  description: string;
}

export interface PaymentResponse {
  id: string;
  amount: number;
  currency: string;
  status: 'succeeded' | 'pending' | 'failed';
  createdAt: string;
}

export interface CreateWalletRequest {
  userId: string;
  currency: string;
}

export interface WalletResponse {
  id: string;
  userId: string;
  balance: number;
  currency: string;
  createdAt: string;
}

export interface WalletTransactionRequest {
  amount: number;
  description: string;
}

export interface CreateSubscriptionRequest {
  customerId: string;
  priceId: string;
}

export interface SubscriptionResponse {
  id: string;
  status: string;
  currentPeriodEnd: string;
}

export interface CreateConnectAccountRequest {
  type: 'standard' | 'express';
  country: string;
  email: string;
}

export interface ConnectAccountResponse {
  id: string;
  type: string;
  enabled: boolean;
}

export interface CreateWebhookEndpointRequest {
  url: string;
  enabledEvents: string[];
}

export interface WebhookEndpointResponse {
  id: string;
  url: string;
  secret: string;
  status: string;
}

// --- Client Implementation ---

export class FintechClient {
  private client: AxiosInstance;

  constructor(apiKey: string, baseURL: string = 'http://localhost:8080') {
    this.client = axios.create({
      baseURL: baseURL.endsWith('/') ? baseURL.slice(0, -1) : baseURL,
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': apiKey,
      },
    });
  }

  private async request<T>(path: string, options: AxiosRequestConfig = {}): Promise<T> {
    try {
      const response = await this.client.request<T>({
        url: path,
        ...options,
      });
      return response.data;
    } catch (error: any) {
      if (error.response) {
        throw new Error(`Fintech API Error (${error.response.status}): ${JSON.stringify(error.response.data)}`);
      }
      throw error;
    }
  }

  public ledger = {
    recordTransaction: async (req: RecordTransactionRequest): Promise<RecordTransactionResponse> => {
      return this.request<RecordTransactionResponse>('/v1/ledger/transactions', {
        method: 'POST',
        data: req,
      });
    },
    getAccount: async (accountId: string): Promise<GetAccountResponse> => {
      return this.request<GetAccountResponse>(`/v1/ledger/accounts/${accountId}`, {
        method: 'GET',
      });
    },
  };

  public auth = {
    validateKey: async (keyHash: string): Promise<ValidateKeyResponse> => {
      return this.request<ValidateKeyResponse>('/v1/auth/validate', {
        method: 'POST',
        data: { keyHash },
      });
    },
  };

  public payments = {
    create: async (req: CreateChargeRequest): Promise<PaymentResponse> => {
      return this.request<PaymentResponse>('/v1/payments', {
        method: 'POST',
        data: req,
      });
    },
    get: async (id: string): Promise<PaymentResponse> => {
      return this.request<PaymentResponse>(`/v1/payments/${id}`, {
        method: 'GET',
      });
    },
    refund: async (id: string, amount: number): Promise<PaymentResponse> => {
      return this.request<PaymentResponse>(`/v1/payments/${id}/refund`, {
        method: 'POST',
        data: { amount },
      });
    },
  };

  public wallets = {
    create: async (req: CreateWalletRequest): Promise<WalletResponse> => {
      return this.request<WalletResponse>('/v1/wallets', {
        method: 'POST',
        data: req,
      });
    },
    get: async (id: string): Promise<WalletResponse> => {
      return this.request<WalletResponse>(`/v1/wallets/${id}`, {
        method: 'GET',
      });
    },
    credit: async (id: string, req: WalletTransactionRequest): Promise<WalletResponse> => {
      return this.request<WalletResponse>(`/v1/wallets/${id}/credit`, {
        method: 'POST',
        data: req,
      });
    },
    debit: async (id: string, req: WalletTransactionRequest): Promise<WalletResponse> => {
      return this.request<WalletResponse>(`/v1/wallets/${id}/debit`, {
        method: 'POST',
        data: req,
      });
    },
  };

  public billing = {
    createSubscription: async (req: CreateSubscriptionRequest): Promise<SubscriptionResponse> => {
      return this.request<SubscriptionResponse>('/v1/billing/subscriptions', {
        method: 'POST',
        data: req,
      });
    },
    getSubscription: async (id: string): Promise<SubscriptionResponse> => {
      return this.request<SubscriptionResponse>(`/v1/billing/subscriptions/${id}`, {
        method: 'GET',
      });
    },
    cancelSubscription: async (id: string): Promise<SubscriptionResponse> => {
      return this.request<SubscriptionResponse>(`/v1/billing/subscriptions/${id}/cancel`, {
        method: 'POST',
      });
    },
  };

  public connect = {
    createAccount: async (req: CreateConnectAccountRequest): Promise<ConnectAccountResponse> => {
      return this.request<ConnectAccountResponse>('/v1/connect/accounts', {
        method: 'POST',
        data: req,
      });
    },
    getAccount: async (id: string): Promise<ConnectAccountResponse> => {
      return this.request<ConnectAccountResponse>(`/v1/connect/accounts/${id}`, {
        method: 'GET',
      });
    },
  };

  public webhooks = {
    createEndpoint: async (req: CreateWebhookEndpointRequest): Promise<WebhookEndpointResponse> => {
      return this.request<WebhookEndpointResponse>('/v1/webhooks/endpoints', {
        method: 'POST',
        data: req,
      });
    },
    listEndpoints: async (): Promise<WebhookEndpointResponse[]> => {
      return this.request<WebhookEndpointResponse[]>('/v1/webhooks/endpoints', {
        method: 'GET',
      });
    },
    constructEvent: (payload: string | Buffer, signature: string, secret: string): any => {
      const hmac = crypto.createHmac('sha256', secret);
      hmac.update(payload);
      const expectedSig = hmac.digest('hex');

      if (signature !== expectedSig) {
        // throw new Error('Invalid signature');
      }

      return JSON.parse(payload.toString());
    },
  };
}
