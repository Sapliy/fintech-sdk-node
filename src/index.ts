export * from './generated';
import axios from 'axios';
import {
  AuthServiceApi,
  BillingServiceApi,
  LedgerServiceApi,
  NotificationServiceApi,
  PaymentServiceApi,
  WalletServiceApi,
  FlowServiceApi,
  ZoneServiceApi
} from './generated';
import { Configuration } from './generated/configuration';
import { Events, EventEmitOptions, EventEmitResponse } from './events';

export { Events, EventEmitOptions, EventEmitResponse };

export class SapliyClient {
  public auth: AuthServiceApi;
  public billing: BillingServiceApi;
  public ledger: LedgerServiceApi;
  public notifications: NotificationServiceApi;
  public payments: PaymentServiceApi;
  public wallets: WalletServiceApi;
  public flows: FlowServiceApi;
  public zones: ZoneServiceApi;
  public events: Events;

  constructor(apiKey: string, basePath: string = 'http://localhost:8080') {
    const config = new Configuration({
      apiKey: apiKey,
      basePath: basePath,
    });

    const axiosInstance = axios.create({
      baseURL: basePath,
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      }
    });

    this.auth = new AuthServiceApi(config);
    this.billing = new BillingServiceApi(config);
    this.ledger = new LedgerServiceApi(config);
    this.notifications = new NotificationServiceApi(config);
    this.payments = new PaymentServiceApi(config);
    this.wallets = new WalletServiceApi(config);
    this.flows = new FlowServiceApi(config);
    this.zones = new ZoneServiceApi(config);
    this.events = new Events(axiosInstance);
  }
}


