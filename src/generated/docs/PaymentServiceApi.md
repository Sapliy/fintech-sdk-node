# PaymentServiceApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**paymentServiceConfirmPaymentIntent**](#paymentserviceconfirmpaymentintent) | **POST** /v1/payments/intents/{id}/confirm | |
|[**paymentServiceCreatePaymentIntent**](#paymentservicecreatepaymentintent) | **POST** /v1/payments/intents | |
|[**paymentServiceRefundPaymentIntent**](#paymentservicerefundpaymentintent) | **POST** /v1/payments/intents/{id}/refund | |

# **paymentServiceConfirmPaymentIntent**
> PaymentsPaymentIntent paymentServiceConfirmPaymentIntent(body)


### Example

```typescript
import {
    PaymentServiceApi,
    Configuration,
    PaymentServiceConfirmPaymentIntentBody
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new PaymentServiceApi(configuration);

let id: string; // (default to undefined)
let body: PaymentServiceConfirmPaymentIntentBody; //

const { status, data } = await apiInstance.paymentServiceConfirmPaymentIntent(
    id,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **PaymentServiceConfirmPaymentIntentBody**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**PaymentsPaymentIntent**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A successful response. |  -  |
|**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **paymentServiceCreatePaymentIntent**
> PaymentsPaymentIntent paymentServiceCreatePaymentIntent(body)


### Example

```typescript
import {
    PaymentServiceApi,
    Configuration,
    PaymentsCreatePaymentIntentRequest
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new PaymentServiceApi(configuration);

let body: PaymentsCreatePaymentIntentRequest; //

const { status, data } = await apiInstance.paymentServiceCreatePaymentIntent(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **PaymentsCreatePaymentIntentRequest**|  | |


### Return type

**PaymentsPaymentIntent**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A successful response. |  -  |
|**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **paymentServiceRefundPaymentIntent**
> PaymentsPaymentIntent paymentServiceRefundPaymentIntent(body)


### Example

```typescript
import {
    PaymentServiceApi,
    Configuration
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new PaymentServiceApi(configuration);

let id: string; // (default to undefined)
let body: object; //

const { status, data } = await apiInstance.paymentServiceRefundPaymentIntent(
    id,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**PaymentsPaymentIntent**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A successful response. |  -  |
|**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

