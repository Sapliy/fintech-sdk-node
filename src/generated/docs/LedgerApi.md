# LedgerApi

All URIs are relative to *https://api.sapliy.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getLedgerAccount**](#getledgeraccount) | **GET** /v1/ledger/accounts/{id} | Get Ledger Account details|
|[**getLedgerTransaction**](#getledgertransaction) | **GET** /v1/ledger/transactions/{id} | Get Ledger Transaction details|
|[**v1LedgerAccountsPost**](#v1ledgeraccountspost) | **POST** /v1/ledger/accounts | Create Ledger Account|
|[**v1LedgerTransactionsPost**](#v1ledgertransactionspost) | **POST** /v1/ledger/transactions | Record Transaction|

# **getLedgerAccount**
> LedgerAccount getLedgerAccount()


### Example

```typescript
import {
    LedgerApi,
    Configuration
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new LedgerApi(configuration);

let id: string; // (default to undefined)
let xZoneID: string; //The ID of the zone for this request. (default to undefined)

const { status, data } = await apiInstance.getLedgerAccount(
    id,
    xZoneID
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **xZoneID** | [**string**] | The ID of the zone for this request. | defaults to undefined|


### Return type

**LedgerAccount**

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

# **getLedgerTransaction**
> LedgerTransaction getLedgerTransaction()


### Example

```typescript
import {
    LedgerApi,
    Configuration
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new LedgerApi(configuration);

let id: string; // (default to undefined)
let xZoneID: string; //The ID of the zone for this request. (default to undefined)

const { status, data } = await apiInstance.getLedgerTransaction(
    id,
    xZoneID
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **xZoneID** | [**string**] | The ID of the zone for this request. | defaults to undefined|


### Return type

**LedgerTransaction**

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

# **v1LedgerAccountsPost**
> LedgerAccount v1LedgerAccountsPost(v1LedgerAccountsPostRequest)


### Example

```typescript
import {
    LedgerApi,
    Configuration,
    V1LedgerAccountsPostRequest
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new LedgerApi(configuration);

let xZoneID: string; //The ID of the zone for this request. (default to undefined)
let v1LedgerAccountsPostRequest: V1LedgerAccountsPostRequest; //

const { status, data } = await apiInstance.v1LedgerAccountsPost(
    xZoneID,
    v1LedgerAccountsPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1LedgerAccountsPostRequest** | **V1LedgerAccountsPostRequest**|  | |
| **xZoneID** | [**string**] | The ID of the zone for this request. | defaults to undefined|


### Return type

**LedgerAccount**

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

# **v1LedgerTransactionsPost**
> V1LedgerTransactionsPost201Response v1LedgerTransactionsPost(v1LedgerTransactionsPostRequest)


### Example

```typescript
import {
    LedgerApi,
    Configuration,
    V1LedgerTransactionsPostRequest
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new LedgerApi(configuration);

let xZoneID: string; //The ID of the zone for this request. (default to undefined)
let v1LedgerTransactionsPostRequest: V1LedgerTransactionsPostRequest; //

const { status, data } = await apiInstance.v1LedgerTransactionsPost(
    xZoneID,
    v1LedgerTransactionsPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1LedgerTransactionsPostRequest** | **V1LedgerTransactionsPostRequest**|  | |
| **xZoneID** | [**string**] | The ID of the zone for this request. | defaults to undefined|


### Return type

**V1LedgerTransactionsPost201Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Recorded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

