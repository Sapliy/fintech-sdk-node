# AuthServiceApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**authServiceAddTeamMember**](#authserviceaddteammember) | **POST** /v1/auth/teams/members | |
|[**authServiceCreateSSOProvider**](#authservicecreatessoprovider) | **POST** /v1/auth/sso/providers | |
|[**authServiceGetAuditLogs**](#authservicegetauditlogs) | **GET** /v1/auth/audit_logs | |
|[**authServiceGetSSOProvider**](#authservicegetssoprovider) | **GET** /v1/auth/sso/providers/{id} | |
|[**authServiceInitiateSSO**](#authserviceinitiatesso) | **POST** /v1/auth/sso/initiate | |
|[**authServiceListTeamMembers**](#authservicelistteammembers) | **GET** /v1/auth/teams/{orgId}/members | |
|[**authServiceRemoveTeamMember**](#authserviceremoveteammember) | **DELETE** /v1/auth/teams/members | |
|[**authServiceValidateKey**](#authservicevalidatekey) | **POST** /v1/auth/validate | |
|[**authServiceValidateToken**](#authservicevalidatetoken) | **POST** /v1/auth/validate_token | |

# **authServiceAddTeamMember**
> AuthMembership authServiceAddTeamMember(body)


### Example

```typescript
import {
    AuthServiceApi,
    Configuration,
    AuthAddTeamMemberRequest
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new AuthServiceApi(configuration);

let body: AuthAddTeamMemberRequest; //

const { status, data } = await apiInstance.authServiceAddTeamMember(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **AuthAddTeamMemberRequest**|  | |


### Return type

**AuthMembership**

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

# **authServiceCreateSSOProvider**
> AuthSSOProvider authServiceCreateSSOProvider(body)


### Example

```typescript
import {
    AuthServiceApi,
    Configuration,
    AuthCreateSSOProviderRequest
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new AuthServiceApi(configuration);

let body: AuthCreateSSOProviderRequest; //

const { status, data } = await apiInstance.authServiceCreateSSOProvider(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **AuthCreateSSOProviderRequest**|  | |


### Return type

**AuthSSOProvider**

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

# **authServiceGetAuditLogs**
> AuthGetAuditLogsResponse authServiceGetAuditLogs()


### Example

```typescript
import {
    AuthServiceApi,
    Configuration
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new AuthServiceApi(configuration);

let orgId: string; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let offset: number; // (optional) (default to undefined)
let action: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.authServiceGetAuditLogs(
    orgId,
    limit,
    offset,
    action
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **offset** | [**number**] |  | (optional) defaults to undefined|
| **action** | [**string**] |  | (optional) defaults to undefined|


### Return type

**AuthGetAuditLogsResponse**

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

# **authServiceGetSSOProvider**
> AuthSSOProvider authServiceGetSSOProvider()


### Example

```typescript
import {
    AuthServiceApi,
    Configuration
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new AuthServiceApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.authServiceGetSSOProvider(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**AuthSSOProvider**

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

# **authServiceInitiateSSO**
> AuthInitiateSSOResponse authServiceInitiateSSO(body)


### Example

```typescript
import {
    AuthServiceApi,
    Configuration,
    AuthInitiateSSORequest
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new AuthServiceApi(configuration);

let body: AuthInitiateSSORequest; //

const { status, data } = await apiInstance.authServiceInitiateSSO(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **AuthInitiateSSORequest**|  | |


### Return type

**AuthInitiateSSOResponse**

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

# **authServiceListTeamMembers**
> AuthListTeamMembersResponse authServiceListTeamMembers()


### Example

```typescript
import {
    AuthServiceApi,
    Configuration
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new AuthServiceApi(configuration);

let orgId: string; // (default to undefined)

const { status, data } = await apiInstance.authServiceListTeamMembers(
    orgId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] |  | defaults to undefined|


### Return type

**AuthListTeamMembersResponse**

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

# **authServiceRemoveTeamMember**
> AuthRemoveTeamMemberResponse authServiceRemoveTeamMember()


### Example

```typescript
import {
    AuthServiceApi,
    Configuration
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new AuthServiceApi(configuration);

let orgId: string; // (optional) (default to undefined)
let userId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.authServiceRemoveTeamMember(
    orgId,
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] |  | (optional) defaults to undefined|
| **userId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**AuthRemoveTeamMemberResponse**

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

# **authServiceValidateKey**
> AuthValidateKeyResponse authServiceValidateKey(body)


### Example

```typescript
import {
    AuthServiceApi,
    Configuration,
    AuthValidateKeyRequest
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new AuthServiceApi(configuration);

let body: AuthValidateKeyRequest; //

const { status, data } = await apiInstance.authServiceValidateKey(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **AuthValidateKeyRequest**|  | |


### Return type

**AuthValidateKeyResponse**

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

# **authServiceValidateToken**
> AuthValidateTokenResponse authServiceValidateToken(body)


### Example

```typescript
import {
    AuthServiceApi,
    Configuration,
    AuthValidateTokenRequest
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new AuthServiceApi(configuration);

let body: AuthValidateTokenRequest; //

const { status, data } = await apiInstance.authServiceValidateToken(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **AuthValidateTokenRequest**|  | |


### Return type

**AuthValidateTokenResponse**

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

