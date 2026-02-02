# NotificationServiceApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**notificationServiceCreateWebhookEndpoint**](#notificationservicecreatewebhookendpoint) | **POST** /v1/webhooks/endpoints | |
|[**notificationServiceDeleteWebhookEndpoint**](#notificationservicedeletewebhookendpoint) | **DELETE** /v1/webhooks/endpoints/{id} | |
|[**notificationServiceGetNotificationHistory**](#notificationservicegetnotificationhistory) | **GET** /v1/notifications | |
|[**notificationServiceListWebhookEndpoints**](#notificationservicelistwebhookendpoints) | **GET** /v1/webhooks/endpoints | |

# **notificationServiceCreateWebhookEndpoint**
> NotificationsWebhookEndpoint notificationServiceCreateWebhookEndpoint(body)


### Example

```typescript
import {
    NotificationServiceApi,
    Configuration,
    NotificationsCreateWebhookEndpointRequest
} from '@sapliyio/fintech';

const configuration = new Configuration();
const apiInstance = new NotificationServiceApi(configuration);

let body: NotificationsCreateWebhookEndpointRequest; //

const { status, data } = await apiInstance.notificationServiceCreateWebhookEndpoint(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **NotificationsCreateWebhookEndpointRequest**|  | |


### Return type

**NotificationsWebhookEndpoint**

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

# **notificationServiceDeleteWebhookEndpoint**
> NotificationsDeleteWebhookEndpointResponse notificationServiceDeleteWebhookEndpoint()


### Example

```typescript
import {
    NotificationServiceApi,
    Configuration
} from '@sapliyio/fintech';

const configuration = new Configuration();
const apiInstance = new NotificationServiceApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.notificationServiceDeleteWebhookEndpoint(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**NotificationsDeleteWebhookEndpointResponse**

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

# **notificationServiceGetNotificationHistory**
> NotificationsGetNotificationHistoryResponse notificationServiceGetNotificationHistory()


### Example

```typescript
import {
    NotificationServiceApi,
    Configuration
} from '@sapliyio/fintech';

const configuration = new Configuration();
const apiInstance = new NotificationServiceApi(configuration);

let userId: string; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let offset: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.notificationServiceGetNotificationHistory(
    userId,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **offset** | [**number**] |  | (optional) defaults to undefined|


### Return type

**NotificationsGetNotificationHistoryResponse**

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

# **notificationServiceListWebhookEndpoints**
> NotificationsListWebhookEndpointsResponse notificationServiceListWebhookEndpoints()


### Example

```typescript
import {
    NotificationServiceApi,
    Configuration
} from '@sapliyio/fintech';

const configuration = new Configuration();
const apiInstance = new NotificationServiceApi(configuration);

const { status, data } = await apiInstance.notificationServiceListWebhookEndpoints();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**NotificationsListWebhookEndpointsResponse**

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

