## @sapliyio/fintech@version not set

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install @sapliyio/fintech@version not set --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AuthServiceApi* | [**authServiceAddTeamMember**](docs/AuthServiceApi.md#authserviceaddteammember) | **POST** /v1/auth/teams/members | 
*AuthServiceApi* | [**authServiceCreateSSOProvider**](docs/AuthServiceApi.md#authservicecreatessoprovider) | **POST** /v1/auth/sso/providers | 
*AuthServiceApi* | [**authServiceGetAuditLogs**](docs/AuthServiceApi.md#authservicegetauditlogs) | **GET** /v1/auth/audit_logs | 
*AuthServiceApi* | [**authServiceGetSSOProvider**](docs/AuthServiceApi.md#authservicegetssoprovider) | **GET** /v1/auth/sso/providers/{id} | 
*AuthServiceApi* | [**authServiceInitiateSSO**](docs/AuthServiceApi.md#authserviceinitiatesso) | **POST** /v1/auth/sso/initiate | 
*AuthServiceApi* | [**authServiceListTeamMembers**](docs/AuthServiceApi.md#authservicelistteammembers) | **GET** /v1/auth/teams/{orgId}/members | 
*AuthServiceApi* | [**authServiceRemoveTeamMember**](docs/AuthServiceApi.md#authserviceremoveteammember) | **DELETE** /v1/auth/teams/members | 
*AuthServiceApi* | [**authServiceValidateKey**](docs/AuthServiceApi.md#authservicevalidatekey) | **POST** /v1/auth/validate | 
*AuthServiceApi* | [**authServiceValidateToken**](docs/AuthServiceApi.md#authservicevalidatetoken) | **POST** /v1/auth/validate_token | 
*BillingServiceApi* | [**billingServiceCancelSubscription**](docs/BillingServiceApi.md#billingservicecancelsubscription) | **POST** /v1/billing/subscriptions/{id}/cancel | 
*BillingServiceApi* | [**billingServiceCreateSubscription**](docs/BillingServiceApi.md#billingservicecreatesubscription) | **POST** /v1/billing/subscriptions | 
*BillingServiceApi* | [**billingServiceGetSubscription**](docs/BillingServiceApi.md#billingservicegetsubscription) | **GET** /v1/billing/subscriptions/{id} | 
*BillingServiceApi* | [**billingServiceListSubscriptions**](docs/BillingServiceApi.md#billingservicelistsubscriptions) | **GET** /v1/billing/subscriptions | 
*LedgerServiceApi* | [**ledgerServiceGetAccount**](docs/LedgerServiceApi.md#ledgerservicegetaccount) | **GET** /v1/ledger/accounts/{accountId} | 
*LedgerServiceApi* | [**ledgerServiceRecordTransaction**](docs/LedgerServiceApi.md#ledgerservicerecordtransaction) | **POST** /v1/ledger/transactions | 
*NotificationServiceApi* | [**notificationServiceCreateWebhookEndpoint**](docs/NotificationServiceApi.md#notificationservicecreatewebhookendpoint) | **POST** /v1/webhooks/endpoints | 
*NotificationServiceApi* | [**notificationServiceDeleteWebhookEndpoint**](docs/NotificationServiceApi.md#notificationservicedeletewebhookendpoint) | **DELETE** /v1/webhooks/endpoints/{id} | 
*NotificationServiceApi* | [**notificationServiceGetNotificationHistory**](docs/NotificationServiceApi.md#notificationservicegetnotificationhistory) | **GET** /v1/notifications | 
*NotificationServiceApi* | [**notificationServiceListWebhookEndpoints**](docs/NotificationServiceApi.md#notificationservicelistwebhookendpoints) | **GET** /v1/webhooks/endpoints | 
*PaymentServiceApi* | [**paymentServiceConfirmPaymentIntent**](docs/PaymentServiceApi.md#paymentserviceconfirmpaymentintent) | **POST** /v1/payments/intents/{id}/confirm | 
*PaymentServiceApi* | [**paymentServiceCreatePaymentIntent**](docs/PaymentServiceApi.md#paymentservicecreatepaymentintent) | **POST** /v1/payments/intents | 
*PaymentServiceApi* | [**paymentServiceRefundPaymentIntent**](docs/PaymentServiceApi.md#paymentservicerefundpaymentintent) | **POST** /v1/payments/intents/{id}/refund | 
*WalletServiceApi* | [**walletServiceCreateWallet**](docs/WalletServiceApi.md#walletservicecreatewallet) | **POST** /v1/wallets | 
*WalletServiceApi* | [**walletServiceGetWallet**](docs/WalletServiceApi.md#walletservicegetwallet) | **GET** /v1/wallets/{userId} | 
*WalletServiceApi* | [**walletServiceTopUp**](docs/WalletServiceApi.md#walletservicetopup) | **POST** /v1/wallets/top-up | 
*WalletServiceApi* | [**walletServiceTransfer**](docs/WalletServiceApi.md#walletservicetransfer) | **POST** /v1/wallets/transfer | 


### Documentation For Models

 - [AuthAddTeamMemberRequest](docs/AuthAddTeamMemberRequest.md)
 - [AuthAuditLog](docs/AuthAuditLog.md)
 - [AuthCreateSSOProviderRequest](docs/AuthCreateSSOProviderRequest.md)
 - [AuthGetAuditLogsResponse](docs/AuthGetAuditLogsResponse.md)
 - [AuthInitiateSSORequest](docs/AuthInitiateSSORequest.md)
 - [AuthInitiateSSOResponse](docs/AuthInitiateSSOResponse.md)
 - [AuthListTeamMembersResponse](docs/AuthListTeamMembersResponse.md)
 - [AuthMembership](docs/AuthMembership.md)
 - [AuthRemoveTeamMemberResponse](docs/AuthRemoveTeamMemberResponse.md)
 - [AuthSSOProvider](docs/AuthSSOProvider.md)
 - [AuthValidateKeyRequest](docs/AuthValidateKeyRequest.md)
 - [AuthValidateKeyResponse](docs/AuthValidateKeyResponse.md)
 - [AuthValidateTokenRequest](docs/AuthValidateTokenRequest.md)
 - [AuthValidateTokenResponse](docs/AuthValidateTokenResponse.md)
 - [BillingCreateSubscriptionRequest](docs/BillingCreateSubscriptionRequest.md)
 - [BillingListSubscriptionsResponse](docs/BillingListSubscriptionsResponse.md)
 - [BillingSubscription](docs/BillingSubscription.md)
 - [LedgerGetAccountResponse](docs/LedgerGetAccountResponse.md)
 - [LedgerRecordTransactionRequest](docs/LedgerRecordTransactionRequest.md)
 - [LedgerRecordTransactionResponse](docs/LedgerRecordTransactionResponse.md)
 - [NotificationsCreateWebhookEndpointRequest](docs/NotificationsCreateWebhookEndpointRequest.md)
 - [NotificationsDeleteWebhookEndpointResponse](docs/NotificationsDeleteWebhookEndpointResponse.md)
 - [NotificationsGetNotificationHistoryResponse](docs/NotificationsGetNotificationHistoryResponse.md)
 - [NotificationsListWebhookEndpointsResponse](docs/NotificationsListWebhookEndpointsResponse.md)
 - [NotificationsNotification](docs/NotificationsNotification.md)
 - [NotificationsWebhookEndpoint](docs/NotificationsWebhookEndpoint.md)
 - [PaymentServiceConfirmPaymentIntentBody](docs/PaymentServiceConfirmPaymentIntentBody.md)
 - [PaymentsCreatePaymentIntentRequest](docs/PaymentsCreatePaymentIntentRequest.md)
 - [PaymentsPaymentIntent](docs/PaymentsPaymentIntent.md)
 - [ProtobufAny](docs/ProtobufAny.md)
 - [RpcStatus](docs/RpcStatus.md)
 - [WalletCreateWalletRequest](docs/WalletCreateWalletRequest.md)
 - [WalletTopUpRequest](docs/WalletTopUpRequest.md)
 - [WalletTransactionResponse](docs/WalletTransactionResponse.md)
 - [WalletTransferRequest](docs/WalletTransferRequest.md)
 - [WalletWallet](docs/WalletWallet.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization

Endpoints do not require authorization.

