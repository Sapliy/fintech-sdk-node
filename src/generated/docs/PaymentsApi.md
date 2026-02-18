# PaymentsApi

All URIs are relative to *https://api.sapliy.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**confirmPaymentIntent**](#confirmpaymentintent) | **POST** /v1/payments/intents/{id}/confirm | Confirm a Payment Intent|
|[**createPaymentIntent**](#createpaymentintent) | **POST** /v1/payments | Create a Payment Intent|

# **confirmPaymentIntent**
> PaymentIntent confirmPaymentIntent()


### Example

```typescript
import {
    PaymentsApi,
    Configuration,
    ConfirmPaymentIntentRequest
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let id: string; // (default to undefined)
let xZoneID: string; //The ID of the zone for this request. (default to undefined)
let xZoneMode: 'live' | 'test'; //The mode of the zone (live or test). (optional) (default to undefined)
let confirmPaymentIntentRequest: ConfirmPaymentIntentRequest; // (optional)

const { status, data } = await apiInstance.confirmPaymentIntent(
    id,
    xZoneID,
    xZoneMode,
    confirmPaymentIntentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **confirmPaymentIntentRequest** | **ConfirmPaymentIntentRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|
| **xZoneID** | [**string**] | The ID of the zone for this request. | defaults to undefined|
| **xZoneMode** | [**&#39;live&#39; | &#39;test&#39;**]**Array<&#39;live&#39; &#124; &#39;test&#39;>** | The mode of the zone (live or test). | (optional) defaults to undefined|


### Return type

**PaymentIntent**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Confirmed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createPaymentIntent**
> PaymentIntent createPaymentIntent(createPaymentIntentRequest)


### Example

```typescript
import {
    PaymentsApi,
    Configuration,
    CreatePaymentIntentRequest
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let xZoneID: string; //The ID of the zone for this request. (default to undefined)
let createPaymentIntentRequest: CreatePaymentIntentRequest; //
let xZoneMode: 'live' | 'test'; //The mode of the zone (live or test). (optional) (default to undefined)

const { status, data } = await apiInstance.createPaymentIntent(
    xZoneID,
    createPaymentIntentRequest,
    xZoneMode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPaymentIntentRequest** | **CreatePaymentIntentRequest**|  | |
| **xZoneID** | [**string**] | The ID of the zone for this request. | defaults to undefined|
| **xZoneMode** | [**&#39;live&#39; | &#39;test&#39;**]**Array<&#39;live&#39; &#124; &#39;test&#39;>** | The mode of the zone (live or test). | (optional) defaults to undefined|


### Return type

**PaymentIntent**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |
|**400** | Invalid request parameters. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

