export * from './generated';
export * from './generated/api';

import axios, { AxiosInstance, RawAxiosRequestConfig } from 'axios';
import {
  AuthApi,
  BillingApi,
  EventsApi,
  ExecutionsApi,
  FlowsApi,
  LedgerApi,
  PaymentsApi,
  WalletsApi,
  ZonesApi,
  EmitEventRequest,
  V1LedgerAccountsPostRequest,
  V1LedgerTransactionsPostRequest,
  CreateSubscriptionRequest,
  CreateZoneRequest,
} from './generated/api';
import { Configuration } from './generated/configuration';

export interface SapliyClientOptions {
  /** Base URL of the Sapliy API gateway. Defaults to production. */
  basePath?: string;
  /** Request timeout in milliseconds. Defaults to 30000. */
  timeout?: number;
}

/**
 * SapliyClient is the main entry point for the Sapliy Fintech Node.js SDK.
 */
export class SapliyClient {
  public auth: AuthApi;
  public billing: BillingApi;
  public events: EventsApi;
  public executions: ExecutionsApi;
  public flows: FlowsApi;
  public ledger: LedgerApi;
  public payments: PaymentsApi;
  public wallets: WalletsApi;
  public zones: ZonesApi;

  constructor(apiKey: string, options: SapliyClientOptions = {
    basePath: "https://api.sapliy.io",
    timeout: 30000
  }) {
    const basePath = options.basePath;
    const timeout = options.timeout;

    const config = new Configuration({
      accessToken: apiKey,
      basePath,
    });

    const axiosInstance = axios.create({
      baseURL: basePath,
      timeout,
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    this.auth = new AuthApi(config, basePath, axiosInstance);
    this.billing = new BillingApi(config, basePath, axiosInstance);
    this.events = new EventsApi(config, basePath, axiosInstance);
    this.executions = new ExecutionsApi(config, basePath, axiosInstance);
    this.flows = new FlowsApi(config, basePath, axiosInstance);
    this.ledger = new LedgerApi(config, basePath, axiosInstance);
    this.payments = new PaymentsApi(config, basePath, axiosInstance);
    this.wallets = new WalletsApi(config, basePath, axiosInstance);
    this.zones = new ZonesApi(config, basePath, axiosInstance);
  }

  // Helper methods for common tasks (DRY)
  public async emitEvent(request: EmitEventRequest) {
    return this.events.emitEvent(request);
  }

  public async recordTransaction(zoneId: string, request: V1LedgerTransactionsPostRequest) {
    return this.ledger.v1LedgerTransactionsPost(zoneId, request);
  }
}
