# FlowsApi

All URIs are relative to *https://api.sapliy.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createFlow**](#createflow) | **POST** /v1/flows | Create a Flow|
|[**deleteFlow**](#deleteflow) | **DELETE** /v1/flows/{flowId} | Delete a Flow|
|[**getFlow**](#getflow) | **GET** /v1/flows/{flowId} | Get Flow details|
|[**listFlows**](#listflows) | **GET** /v1/zones/{zoneId}/flows | List Flows in a Zone|
|[**updateFlow**](#updateflow) | **PUT** /v1/flows/{flowId} | Update a Flow|

# **createFlow**
> AutomationFlow createFlow(automationFlow)


### Example

```typescript
import {
    FlowsApi,
    Configuration,
    AutomationFlow
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new FlowsApi(configuration);

let automationFlow: AutomationFlow; //

const { status, data } = await apiInstance.createFlow(
    automationFlow
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **automationFlow** | **AutomationFlow**|  | |


### Return type

**AutomationFlow**

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

# **deleteFlow**
> deleteFlow()


### Example

```typescript
import {
    FlowsApi,
    Configuration
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new FlowsApi(configuration);

let flowId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteFlow(
    flowId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **flowId** | [**string**] |  | defaults to undefined|


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
|**204** | Deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFlow**
> AutomationFlow getFlow()


### Example

```typescript
import {
    FlowsApi,
    Configuration
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new FlowsApi(configuration);

let flowId: string; // (default to undefined)

const { status, data } = await apiInstance.getFlow(
    flowId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **flowId** | [**string**] |  | defaults to undefined|


### Return type

**AutomationFlow**

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

# **listFlows**
> ListFlows200Response listFlows()


### Example

```typescript
import {
    FlowsApi,
    Configuration
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new FlowsApi(configuration);

let zoneId: string; // (default to undefined)

const { status, data } = await apiInstance.listFlows(
    zoneId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **zoneId** | [**string**] |  | defaults to undefined|


### Return type

**ListFlows200Response**

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

# **updateFlow**
> AutomationFlow updateFlow(automationFlow)


### Example

```typescript
import {
    FlowsApi,
    Configuration,
    AutomationFlow
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new FlowsApi(configuration);

let flowId: string; // (default to undefined)
let automationFlow: AutomationFlow; //

const { status, data } = await apiInstance.updateFlow(
    flowId,
    automationFlow
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **automationFlow** | **AutomationFlow**|  | |
| **flowId** | [**string**] |  | defaults to undefined|


### Return type

**AutomationFlow**

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

