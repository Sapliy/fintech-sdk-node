export * from './generated';
import { AuthServiceApi, BillingServiceApi, LedgerServiceApi, NotificationServiceApi, PaymentServiceApi, WalletServiceApi } from './generated';
import { Configuration } from './generated/configuration';

export class SapliyClient {
  public auth: AuthServiceApi;
  public billing: BillingServiceApi;
  public ledger: LedgerServiceApi;
  public notifications: NotificationServiceApi;
  public payments: PaymentServiceApi;
  public wallets: WalletServiceApi;

  constructor(apiKey: string, basePath: string = 'http://localhost:8080') {
    const config = new Configuration({
      apiKey: `Bearer ${apiKey}`,
      basePath: basePath,
    });

    this.auth = new AuthServiceApi(config);
    this.billing = new BillingServiceApi(config);
    this.ledger = new LedgerServiceApi(config);
    this.notifications = new NotificationServiceApi(config);
    this.payments = new PaymentServiceApi(config);
    this.wallets = new WalletServiceApi(config);
  }
}
