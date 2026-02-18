# AuthApi

All URIs are relative to *https://api.sapliy.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**v1AuthLoginPost**](#v1authloginpost) | **POST** /v1/auth/login | Login|
|[**v1AuthRegisterPost**](#v1authregisterpost) | **POST** /v1/auth/register | Register a new user|

# **v1AuthLoginPost**
> V1AuthRegisterPost201Response v1AuthLoginPost(v1AuthRegisterPostRequest)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    V1AuthRegisterPostRequest
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let v1AuthRegisterPostRequest: V1AuthRegisterPostRequest; //

const { status, data } = await apiInstance.v1AuthLoginPost(
    v1AuthRegisterPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1AuthRegisterPostRequest** | **V1AuthRegisterPostRequest**|  | |


### Return type

**V1AuthRegisterPost201Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1AuthRegisterPost**
> V1AuthRegisterPost201Response v1AuthRegisterPost(v1AuthRegisterPostRequest)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    V1AuthRegisterPostRequest
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let v1AuthRegisterPostRequest: V1AuthRegisterPostRequest; //

const { status, data } = await apiInstance.v1AuthRegisterPost(
    v1AuthRegisterPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1AuthRegisterPostRequest** | **V1AuthRegisterPostRequest**|  | |


### Return type

**V1AuthRegisterPost201Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

