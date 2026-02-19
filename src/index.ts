export * from './generated';
export * from './generated/api';

import axios from 'axios';
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
} from './generated/api';
import { Configuration } from './generated/configuration';
import { Events, EventEmitOptions, EventEmitResponse } from './events';

export { Events, EventEmitOptions, EventEmitResponse };

export interface SapliyClientOptions {
  /** Base URL of the Sapliy API gateway. Defaults to production. */
  basePath?: string;
  /** Request timeout in milliseconds. Defaults to 30000. */
  timeout?: number;
}

/**
 * SapliyClient is the main entry point for the Sapliy Fintech Node.js SDK.
 *
 * @example
 * ```ts
 * import { SapliyClient } from '@sapliyio/fintech';
 * const client = new SapliyClient('sk_live_...');
 * const intent = await client.payments.createPaymentIntent({ ... });
 * ```
 */
export class SapliyClient {
  public auth: AuthApi;
  public billing: BillingApi;
  public events: Events;
  public executions: ExecutionsApi;
  public flows: FlowsApi;
  public ledger: LedgerApi;
  public payments: PaymentsApi;
  public rawEvents: EventsApi;
  public wallets: WalletsApi;
  public zones: ZonesApi;

  constructor(apiKey: string, options: SapliyClientOptions = {}) {
    const basePath = options.basePath ?? 'https://api.sapliy.io';
    const timeout = options.timeout ?? 30000;

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
    this.executions = new ExecutionsApi(config, basePath, axiosInstance);
    this.flows = new FlowsApi(config, basePath, axiosInstance);
    this.ledger = new LedgerApi(config, basePath, axiosInstance);
    this.payments = new PaymentsApi(config, basePath, axiosInstance);
    this.rawEvents = new EventsApi(config, basePath, axiosInstance);
    this.wallets = new WalletsApi(config, basePath, axiosInstance);
    this.zones = new ZonesApi(config, basePath, axiosInstance);
    this.events = new Events(axiosInstance);
  }
}
