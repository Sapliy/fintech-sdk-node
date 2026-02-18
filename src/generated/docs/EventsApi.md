# EventsApi

All URIs are relative to *https://api.sapliy.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**emitEvent**](#emitevent) | **POST** /v1/events/emit | Emit an Event|

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

