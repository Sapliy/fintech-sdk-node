# ExecutionsApi

All URIs are relative to *https://api.sapliy.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getExecution**](#getexecution) | **GET** /v1/executions/{executionId} | Get Execution details|
|[**resumeExecution**](#resumeexecution) | **POST** /v1/executions/{executionId}/resume | Resume a paused Execution|

# **getExecution**
> AutomationFlowExecution getExecution()


### Example

```typescript
import {
    ExecutionsApi,
    Configuration
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new ExecutionsApi(configuration);

let executionId: string; // (default to undefined)

const { status, data } = await apiInstance.getExecution(
    executionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **executionId** | [**string**] |  | defaults to undefined|


### Return type

**AutomationFlowExecution**

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

# **resumeExecution**
> ResumeExecution200Response resumeExecution()


### Example

```typescript
import {
    ExecutionsApi,
    Configuration
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new ExecutionsApi(configuration);

let executionId: string; // (default to undefined)
let requestBody: { [key: string]: any; }; // (optional)

const { status, data } = await apiInstance.resumeExecution(
    executionId,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |
| **executionId** | [**string**] |  | defaults to undefined|


### Return type

**ResumeExecution200Response**

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

