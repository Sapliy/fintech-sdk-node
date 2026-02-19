# AuthApi

All URIs are relative to *https://api.sapliy.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**loginUser**](#loginuser) | **POST** /v1/auth/login | Login|
|[**registerUser**](#registeruser) | **POST** /v1/auth/register | Register a new user|
|[**validateKey**](#validatekey) | **POST** /v1/auth/validate | Validate an API key|

# **loginUser**
> RegisterUser201Response loginUser(registerUserRequest)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    RegisterUserRequest
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let registerUserRequest: RegisterUserRequest; //

const { status, data } = await apiInstance.loginUser(
    registerUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerUserRequest** | **RegisterUserRequest**|  | |


### Return type

**RegisterUser201Response**

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

# **registerUser**
> RegisterUser201Response registerUser(registerUserRequest)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    RegisterUserRequest
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let registerUserRequest: RegisterUserRequest; //

const { status, data } = await apiInstance.registerUser(
    registerUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerUserRequest** | **RegisterUserRequest**|  | |


### Return type

**RegisterUser201Response**

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

# **validateKey**
> ValidateKey200Response validateKey(validateKeyRequest)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    ValidateKeyRequest
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let validateKeyRequest: ValidateKeyRequest; //

const { status, data } = await apiInstance.validateKey(
    validateKeyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **validateKeyRequest** | **ValidateKeyRequest**|  | |


### Return type

**ValidateKey200Response**

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

