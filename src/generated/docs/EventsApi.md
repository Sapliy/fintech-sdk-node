# EventsApi

All URIs are relative to *https://api.sapliy.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**emitEvent**](#emitevent) | **POST** /v1/events/emit | Emit an Event|
|[**getPastEvents**](#getpastevents) | **GET** /v1/zones/{zoneId}/events/past | Get Past Events (Webhook Replay)|
|[**replayEvent**](#replayevent) | **POST** /v1/events/{eventId}/replay | Replay an Event|

# **emitEvent**
> EmitEvent202Response emitEvent(emitEventRequest)


### Example

```typescript
import {
    EventsApi,
    Configuration,
    EmitEventRequest
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new EventsApi(configuration);

let emitEventRequest: EmitEventRequest; //

const { status, data } = await apiInstance.emitEvent(
    emitEventRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **emitEventRequest** | **EmitEventRequest**|  | |


### Return type

**EmitEvent202Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPastEvents**
> GetPastEvents200Response getPastEvents()


### Example

```typescript
import {
    EventsApi,
    Configuration
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new EventsApi(configuration);

let zoneId: string; // (default to undefined)
let limit: number; // (optional) (default to undefined)
let offset: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.getPastEvents(
    zoneId,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **zoneId** | [**string**] |  | defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **offset** | [**number**] |  | (optional) defaults to undefined|


### Return type

**GetPastEvents200Response**

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

# **replayEvent**
> ReplayEvent200Response replayEvent(replayEventRequest)


### Example

```typescript
import {
    EventsApi,
    Configuration,
    ReplayEventRequest
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new EventsApi(configuration);

let eventId: string; // (default to undefined)
let replayEventRequest: ReplayEventRequest; //

const { status, data } = await apiInstance.replayEvent(
    eventId,
    replayEventRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **replayEventRequest** | **ReplayEventRequest**|  | |
| **eventId** | [**string**] |  | defaults to undefined|


### Return type

**ReplayEvent200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

