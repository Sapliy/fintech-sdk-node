## @sapliyio/fintech-node-generated@1.0.0

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
npm install @sapliyio/fintech-node-generated@1.0.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *https://api.sapliy.io*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AuthApi* | [**v1AuthLoginPost**](docs/AuthApi.md#v1authloginpost) | **POST** /v1/auth/login | Login
*AuthApi* | [**v1AuthRegisterPost**](docs/AuthApi.md#v1authregisterpost) | **POST** /v1/auth/register | Register a new user
*BillingApi* | [**cancelSubscription**](docs/BillingApi.md#cancelsubscription) | **DELETE** /v1/billing/subscriptions/{id} | Cancel Subscription
*BillingApi* | [**getSubscription**](docs/BillingApi.md#getsubscription) | **GET** /v1/billing/subscriptions/{id} | Get Subscription details
*BillingApi* | [**v1BillingSubscriptionsPost**](docs/BillingApi.md#v1billingsubscriptionspost) | **POST** /v1/billing/subscriptions | Create Subscription
*EventsApi* | [**emitEvent**](docs/EventsApi.md#emitevent) | **POST** /v1/events/emit | Emit an Event
*LedgerApi* | [**getLedgerAccount**](docs/LedgerApi.md#getledgeraccount) | **GET** /v1/ledger/accounts/{id} | Get Ledger Account details
*LedgerApi* | [**getLedgerTransaction**](docs/LedgerApi.md#getledgertransaction) | **GET** /v1/ledger/transactions/{id} | Get Ledger Transaction details
*LedgerApi* | [**v1LedgerAccountsPost**](docs/LedgerApi.md#v1ledgeraccountspost) | **POST** /v1/ledger/accounts | Create Ledger Account
*LedgerApi* | [**v1LedgerTransactionsPost**](docs/LedgerApi.md#v1ledgertransactionspost) | **POST** /v1/ledger/transactions | Record Transaction
*PaymentsApi* | [**confirmPaymentIntent**](docs/PaymentsApi.md#confirmpaymentintent) | **POST** /v1/payments/intents/{id}/confirm | Confirm a Payment Intent
*PaymentsApi* | [**createPaymentIntent**](docs/PaymentsApi.md#createpaymentintent) | **POST** /v1/payments | Create a Payment Intent
*WalletsApi* | [**getWallet**](docs/WalletsApi.md#getwallet) | **GET** /v1/wallets/{user_id} | Get Wallet Balance
*WalletsApi* | [**v1WalletsTopupPost**](docs/WalletsApi.md#v1walletstopuppost) | **POST** /v1/wallets/topup | Top up a wallet
*WalletsApi* | [**v1WalletsTransferPost**](docs/WalletsApi.md#v1walletstransferpost) | **POST** /v1/wallets/transfer | Transfer between wallets


### Documentation For Models

 - [ConfirmPaymentIntentRequest](docs/ConfirmPaymentIntentRequest.md)
 - [CreatePaymentIntentRequest](docs/CreatePaymentIntentRequest.md)
 - [EmitEvent202Response](docs/EmitEvent202Response.md)
 - [EmitEventRequest](docs/EmitEventRequest.md)
 - [ErrorEnvelope](docs/ErrorEnvelope.md)
 - [ErrorEnvelopeError](docs/ErrorEnvelopeError.md)
 - [LedgerAccount](docs/LedgerAccount.md)
 - [LedgerEntry](docs/LedgerEntry.md)
 - [LedgerTransaction](docs/LedgerTransaction.md)
 - [PaymentIntent](docs/PaymentIntent.md)
 - [Subscription](docs/Subscription.md)
 - [User](docs/User.md)
 - [V1AuthRegisterPost201Response](docs/V1AuthRegisterPost201Response.md)
 - [V1AuthRegisterPostRequest](docs/V1AuthRegisterPostRequest.md)
 - [V1BillingSubscriptionsPostRequest](docs/V1BillingSubscriptionsPostRequest.md)
 - [V1LedgerAccountsPostRequest](docs/V1LedgerAccountsPostRequest.md)
 - [V1LedgerTransactionsPost201Response](docs/V1LedgerTransactionsPost201Response.md)
 - [V1LedgerTransactionsPostRequest](docs/V1LedgerTransactionsPostRequest.md)
 - [V1WalletsTopupPost200Response](docs/V1WalletsTopupPost200Response.md)
 - [V1WalletsTopupPostRequest](docs/V1WalletsTopupPostRequest.md)
 - [V1WalletsTransferPostRequest](docs/V1WalletsTransferPostRequest.md)
 - [Wallet](docs/Wallet.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="ApiKeyAuth"></a>
### ApiKeyAuth

- **Type**: Bearer authentication

<a id="CookieAuth"></a>
### CookieAuth

- **Type**: API key
- **API key parameter name**: auth-token
- **Location**: 

