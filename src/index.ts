export * from './generated';
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

export class SapliyClient {
  public auth: AuthServiceApi;
  public billing: BillingServiceApi;
  public ledger: LedgerServiceApi;
  public notifications: NotificationServiceApi;
  public payments: PaymentServiceApi;
  public wallets: WalletServiceApi;
  public flows: FlowServiceApi;
  public zones: ZoneServiceApi;

  constructor(apiKey: string, basePath: string = 'http://localhost:8080') {
    const config = new Configuration({
      apiKey: apiKey, // The Bearer might be handled by the interceptor or we should just pass raw if the API expects X-API-Key or similar
      basePath: basePath,
    });

    this.auth = new AuthServiceApi(config);
    this.billing = new BillingServiceApi(config);
    this.ledger = new LedgerServiceApi(config);
    this.notifications = new NotificationServiceApi(config);
    this.payments = new PaymentServiceApi(config);
    this.wallets = new WalletServiceApi(config);
    this.flows = new FlowServiceApi(config);
    this.zones = new ZoneServiceApi(config);
  }
}
