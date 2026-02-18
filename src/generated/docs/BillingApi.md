# BillingApi

All URIs are relative to *https://api.sapliy.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cancelSubscription**](#cancelsubscription) | **DELETE** /v1/billing/subscriptions/{id} | Cancel Subscription|
|[**getSubscription**](#getsubscription) | **GET** /v1/billing/subscriptions/{id} | Get Subscription details|
|[**v1BillingSubscriptionsPost**](#v1billingsubscriptionspost) | **POST** /v1/billing/subscriptions | Create Subscription|

# **cancelSubscription**
> cancelSubscription()


### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.cancelSubscription(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Canceled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSubscription**
> Subscription getSubscription()


### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getSubscription(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Subscription**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1BillingSubscriptionsPost**
> Subscription v1BillingSubscriptionsPost(v1BillingSubscriptionsPostRequest)


### Example

```typescript
import {
    BillingApi,
    Configuration,
    V1BillingSubscriptionsPostRequest
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let v1BillingSubscriptionsPostRequest: V1BillingSubscriptionsPostRequest; //

const { status, data } = await apiInstance.v1BillingSubscriptionsPost(
    v1BillingSubscriptionsPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1BillingSubscriptionsPostRequest** | **V1BillingSubscriptionsPostRequest**|  | |


### Return type

**Subscription**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

