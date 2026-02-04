# LedgerServiceApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**ledgerServiceBulkRecordTransactions**](#ledgerservicebulkrecordtransactions) | **POST** /v1/ledger/bulk-transactions | |
|[**ledgerServiceCreateAccount**](#ledgerservicecreateaccount) | **POST** /v1/ledger/accounts | |
|[**ledgerServiceGetAccount**](#ledgerservicegetaccount) | **GET** /v1/ledger/accounts/{accountId} | |
|[**ledgerServiceRecordTransaction**](#ledgerservicerecordtransaction) | **POST** /v1/ledger/transactions | |

# **ledgerServiceBulkRecordTransactions**
> LedgerBulkRecordResponse ledgerServiceBulkRecordTransactions(body)


### Example

```typescript
import {
    LedgerServiceApi,
    Configuration,
    LedgerBulkRecordRequest
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new LedgerServiceApi(configuration);

let body: LedgerBulkRecordRequest; //

const { status, data } = await apiInstance.ledgerServiceBulkRecordTransactions(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **LedgerBulkRecordRequest**|  | |


### Return type

**LedgerBulkRecordResponse**

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

# **ledgerServiceCreateAccount**
> LedgerCreateAccountResponse ledgerServiceCreateAccount(body)


### Example

```typescript
import {
    LedgerServiceApi,
    Configuration,
    LedgerCreateAccountRequest
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new LedgerServiceApi(configuration);

let body: LedgerCreateAccountRequest; //

const { status, data } = await apiInstance.ledgerServiceCreateAccount(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **LedgerCreateAccountRequest**|  | |


### Return type

**LedgerCreateAccountResponse**

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

# **ledgerServiceGetAccount**
> LedgerGetAccountResponse ledgerServiceGetAccount()


### Example

```typescript
import {
    LedgerServiceApi,
    Configuration
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new LedgerServiceApi(configuration);

let accountId: string; // (default to undefined)

const { status, data } = await apiInstance.ledgerServiceGetAccount(
    accountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] |  | defaults to undefined|


### Return type

**LedgerGetAccountResponse**

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

# **ledgerServiceRecordTransaction**
> LedgerRecordTransactionResponse ledgerServiceRecordTransaction(body)


### Example

```typescript
import {
    LedgerServiceApi,
    Configuration,
    LedgerRecordTransactionRequest
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new LedgerServiceApi(configuration);

let body: LedgerRecordTransactionRequest; //

const { status, data } = await apiInstance.ledgerServiceRecordTransaction(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **LedgerRecordTransactionRequest**|  | |


### Return type

**LedgerRecordTransactionResponse**

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

