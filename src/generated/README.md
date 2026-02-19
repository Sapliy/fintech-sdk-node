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
*AuthApi* | [**loginUser**](docs/AuthApi.md#loginuser) | **POST** /v1/auth/login | Login
*AuthApi* | [**registerUser**](docs/AuthApi.md#registeruser) | **POST** /v1/auth/register | Register a new user
*AuthApi* | [**validateKey**](docs/AuthApi.md#validatekey) | **POST** /v1/auth/validate | Validate an API key
*BillingApi* | [**cancelSubscription**](docs/BillingApi.md#cancelsubscription) | **DELETE** /v1/billing/subscriptions/{id} | Cancel Subscription
*BillingApi* | [**createSubscription**](docs/BillingApi.md#createsubscription) | **POST** /v1/billing/subscriptions | Create Subscription
*BillingApi* | [**getSubscription**](docs/BillingApi.md#getsubscription) | **GET** /v1/billing/subscriptions/{id} | Get Subscription details
*EventsApi* | [**emitEvent**](docs/EventsApi.md#emitevent) | **POST** /v1/events/emit | Emit an Event
*EventsApi* | [**getPastEvents**](docs/EventsApi.md#getpastevents) | **GET** /v1/zones/{zoneId}/events/past | Get Past Events (Webhook Replay)
*EventsApi* | [**replayEvent**](docs/EventsApi.md#replayevent) | **POST** /v1/events/{eventId}/replay | Replay an Event
*ExecutionsApi* | [**getExecution**](docs/ExecutionsApi.md#getexecution) | **GET** /v1/executions/{executionId} | Get Execution details
*ExecutionsApi* | [**resumeExecution**](docs/ExecutionsApi.md#resumeexecution) | **POST** /v1/executions/{executionId}/resume | Resume a paused Execution
*FlowsApi* | [**createFlow**](docs/FlowsApi.md#createflow) | **POST** /v1/flows | Create a Flow
*FlowsApi* | [**deleteFlow**](docs/FlowsApi.md#deleteflow) | **DELETE** /v1/flows/{flowId} | Delete a Flow
*FlowsApi* | [**getFlow**](docs/FlowsApi.md#getflow) | **GET** /v1/flows/{flowId} | Get Flow details
*FlowsApi* | [**listFlows**](docs/FlowsApi.md#listflows) | **GET** /v1/zones/{zoneId}/flows | List Flows in a Zone
*FlowsApi* | [**updateFlow**](docs/FlowsApi.md#updateflow) | **PUT** /v1/flows/{flowId} | Update a Flow
*LedgerApi* | [**getLedgerAccount**](docs/LedgerApi.md#getledgeraccount) | **GET** /v1/ledger/accounts/{id} | Get Ledger Account details
*LedgerApi* | [**getLedgerTransaction**](docs/LedgerApi.md#getledgertransaction) | **GET** /v1/ledger/transactions/{id} | Get Ledger Transaction details
*LedgerApi* | [**v1LedgerAccountsPost**](docs/LedgerApi.md#v1ledgeraccountspost) | **POST** /v1/ledger/accounts | Create Ledger Account
*LedgerApi* | [**v1LedgerTransactionsPost**](docs/LedgerApi.md#v1ledgertransactionspost) | **POST** /v1/ledger/transactions | Record Transaction
*PaymentsApi* | [**confirmPaymentIntent**](docs/PaymentsApi.md#confirmpaymentintent) | **POST** /v1/payments/intents/{id}/confirm | Confirm a Payment Intent
*PaymentsApi* | [**createPaymentIntent**](docs/PaymentsApi.md#createpaymentintent) | **POST** /v1/payments | Create a Payment Intent
*PaymentsApi* | [**getPaymentIntent**](docs/PaymentsApi.md#getpaymentintent) | **GET** /v1/payments/{id} | Get Payment Intent details
*WalletsApi* | [**getWallet**](docs/WalletsApi.md#getwallet) | **GET** /v1/wallets/{user_id} | Get Wallet Balance
*WalletsApi* | [**topupWallet**](docs/WalletsApi.md#topupwallet) | **POST** /v1/wallets/topup | Top up a wallet
*WalletsApi* | [**transferWallet**](docs/WalletsApi.md#transferwallet) | **POST** /v1/wallets/transfer | Transfer between wallets
*ZonesApi* | [**createZone**](docs/ZonesApi.md#createzone) | **POST** /v1/zones | Create a Zone
*ZonesApi* | [**listZones**](docs/ZonesApi.md#listzones) | **GET** /v1/zones | List or Get Zones


### Documentation For Models

 - [AutomationFlow](docs/AutomationFlow.md)
 - [AutomationFlowEdge](docs/AutomationFlowEdge.md)
 - [AutomationFlowExecution](docs/AutomationFlowExecution.md)
 - [AutomationFlowExecutionStep](docs/AutomationFlowExecutionStep.md)
 - [AutomationFlowNode](docs/AutomationFlowNode.md)
 - [AutomationFlowTrigger](docs/AutomationFlowTrigger.md)
 - [BillingSubscription](docs/BillingSubscription.md)
 - [ConfirmPaymentIntentRequest](docs/ConfirmPaymentIntentRequest.md)
 - [CreatePaymentIntentRequest](docs/CreatePaymentIntentRequest.md)
 - [CreateSubscriptionRequest](docs/CreateSubscriptionRequest.md)
 - [CreateZoneRequest](docs/CreateZoneRequest.md)
 - [EmitEvent202Response](docs/EmitEvent202Response.md)
 - [EmitEventRequest](docs/EmitEventRequest.md)
 - [ErrorEnvelope](docs/ErrorEnvelope.md)
 - [ErrorEnvelopeError](docs/ErrorEnvelopeError.md)
 - [GetPastEvents200Response](docs/GetPastEvents200Response.md)
 - [LedgerAccount](docs/LedgerAccount.md)
 - [LedgerEntry](docs/LedgerEntry.md)
 - [LedgerTransaction](docs/LedgerTransaction.md)
 - [ListFlows200Response](docs/ListFlows200Response.md)
 - [ListZones200ResponseInner](docs/ListZones200ResponseInner.md)
 - [PaymentIntent](docs/PaymentIntent.md)
 - [RegisterUser201Response](docs/RegisterUser201Response.md)
 - [RegisterUserRequest](docs/RegisterUserRequest.md)
 - [ReplayEvent200Response](docs/ReplayEvent200Response.md)
 - [ReplayEventRequest](docs/ReplayEventRequest.md)
 - [ResumeExecution200Response](docs/ResumeExecution200Response.md)
 - [TopupWallet200Response](docs/TopupWallet200Response.md)
 - [TopupWalletRequest](docs/TopupWalletRequest.md)
 - [TransferWalletRequest](docs/TransferWalletRequest.md)
 - [User](docs/User.md)
 - [V1LedgerAccountsPostRequest](docs/V1LedgerAccountsPostRequest.md)
 - [V1LedgerTransactionsPost201Response](docs/V1LedgerTransactionsPost201Response.md)
 - [V1LedgerTransactionsPostRequest](docs/V1LedgerTransactionsPostRequest.md)
 - [ValidateKey200Response](docs/ValidateKey200Response.md)
 - [ValidateKeyRequest](docs/ValidateKeyRequest.md)
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

