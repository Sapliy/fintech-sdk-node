# FlowServiceApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**flowServiceBulkUpdateFlows**](#flowservicebulkupdateflows) | **POST** /v1/flows/bulk-update | |
|[**flowServiceCreateFlow**](#flowservicecreateflow) | **POST** /v1/flows | |
|[**flowServiceGetExecution**](#flowservicegetexecution) | **GET** /v1/flows/executions/{id} | |
|[**flowServiceGetFlow**](#flowservicegetflow) | **GET** /v1/flows/{id} | |
|[**flowServiceListFlows**](#flowservicelistflows) | **GET** /v1/flows | |
|[**flowServiceResumeExecution**](#flowserviceresumeexecution) | **POST** /v1/flows/executions/{executionId}/resume | |
|[**flowServiceUpdateFlow**](#flowserviceupdateflow) | **PUT** /v1/flows/{id} | |

# **flowServiceBulkUpdateFlows**
> FlowBulkUpdateFlowsResponse flowServiceBulkUpdateFlows(body)


### Example

```typescript
import {
    FlowServiceApi,
    Configuration,
    FlowBulkUpdateFlowsRequest
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new FlowServiceApi(configuration);

let body: FlowBulkUpdateFlowsRequest; //

const { status, data } = await apiInstance.flowServiceBulkUpdateFlows(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **FlowBulkUpdateFlowsRequest**|  | |


### Return type

**FlowBulkUpdateFlowsResponse**

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

# **flowServiceCreateFlow**
> FlowFlow flowServiceCreateFlow(body)


### Example

```typescript
import {
    FlowServiceApi,
    Configuration,
    FlowCreateFlowRequest
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new FlowServiceApi(configuration);

let body: FlowCreateFlowRequest; //

const { status, data } = await apiInstance.flowServiceCreateFlow(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **FlowCreateFlowRequest**|  | |


### Return type

**FlowFlow**

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

# **flowServiceGetExecution**
> FlowFlowExecution flowServiceGetExecution()


### Example

```typescript
import {
    FlowServiceApi,
    Configuration
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new FlowServiceApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.flowServiceGetExecution(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**FlowFlowExecution**

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

# **flowServiceGetFlow**
> FlowFlow flowServiceGetFlow()


### Example

```typescript
import {
    FlowServiceApi,
    Configuration
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new FlowServiceApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.flowServiceGetFlow(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**FlowFlow**

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

# **flowServiceListFlows**
> FlowListFlowsResponse flowServiceListFlows()


### Example

```typescript
import {
    FlowServiceApi,
    Configuration
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new FlowServiceApi(configuration);

let zoneId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.flowServiceListFlows(
    zoneId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **zoneId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**FlowListFlowsResponse**

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

# **flowServiceResumeExecution**
> FlowResumeExecutionResponse flowServiceResumeExecution(body)


### Example

```typescript
import {
    FlowServiceApi,
    Configuration,
    FlowServiceResumeExecutionBody
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new FlowServiceApi(configuration);

let executionId: string; // (default to undefined)
let body: FlowServiceResumeExecutionBody; //

const { status, data } = await apiInstance.flowServiceResumeExecution(
    executionId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **FlowServiceResumeExecutionBody**|  | |
| **executionId** | [**string**] |  | defaults to undefined|


### Return type

**FlowResumeExecutionResponse**

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

# **flowServiceUpdateFlow**
> FlowFlow flowServiceUpdateFlow(body)


### Example

```typescript
import {
    FlowServiceApi,
    Configuration,
    FlowServiceUpdateFlowBody
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new FlowServiceApi(configuration);

let id: string; // (default to undefined)
let body: FlowServiceUpdateFlowBody; //

const { status, data } = await apiInstance.flowServiceUpdateFlow(
    id,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **FlowServiceUpdateFlowBody**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**FlowFlow**

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

