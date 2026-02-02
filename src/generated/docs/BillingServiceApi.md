# BillingServiceApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**billingServiceCancelSubscription**](#billingservicecancelsubscription) | **POST** /v1/billing/subscriptions/{id}/cancel | |
|[**billingServiceCreateSubscription**](#billingservicecreatesubscription) | **POST** /v1/billing/subscriptions | |
|[**billingServiceGetSubscription**](#billingservicegetsubscription) | **GET** /v1/billing/subscriptions/{id} | |
|[**billingServiceListSubscriptions**](#billingservicelistsubscriptions) | **GET** /v1/billing/subscriptions | |

# **billingServiceCancelSubscription**
> BillingSubscription billingServiceCancelSubscription(body)


### Example

```typescript
import {
    BillingServiceApi,
    Configuration
} from '@sapliyio/fintech';

const configuration = new Configuration();
const apiInstance = new BillingServiceApi(configuration);

let id: string; // (default to undefined)
let body: object; //

const { status, data } = await apiInstance.billingServiceCancelSubscription(
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

**BillingSubscription**

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

# **billingServiceCreateSubscription**
> BillingSubscription billingServiceCreateSubscription(body)


### Example

```typescript
import {
    BillingServiceApi,
    Configuration,
    BillingCreateSubscriptionRequest
} from '@sapliyio/fintech';

const configuration = new Configuration();
const apiInstance = new BillingServiceApi(configuration);

let body: BillingCreateSubscriptionRequest; //

const { status, data } = await apiInstance.billingServiceCreateSubscription(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **BillingCreateSubscriptionRequest**|  | |


### Return type

**BillingSubscription**

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

# **billingServiceGetSubscription**
> BillingSubscription billingServiceGetSubscription()


### Example

```typescript
import {
    BillingServiceApi,
    Configuration
} from '@sapliyio/fintech';

const configuration = new Configuration();
const apiInstance = new BillingServiceApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.billingServiceGetSubscription(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**BillingSubscription**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A successful response. |  -  |
|**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **billingServiceListSubscriptions**
> BillingListSubscriptionsResponse billingServiceListSubscriptions()


### Example

```typescript
import {
    BillingServiceApi,
    Configuration
} from '@sapliyio/fintech';

const configuration = new Configuration();
const apiInstance = new BillingServiceApi(configuration);

let userId: string; // (optional) (default to undefined)
let orgId: string; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let offset: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.billingServiceListSubscriptions(
    userId,
    orgId,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | (optional) defaults to undefined|
| **orgId** | [**string**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **offset** | [**number**] |  | (optional) defaults to undefined|


### Return type

**BillingListSubscriptionsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A successful response. |  -  |
|**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

