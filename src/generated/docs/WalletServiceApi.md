# WalletServiceApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**walletServiceCreateWallet**](#walletservicecreatewallet) | **POST** /v1/wallets | |
|[**walletServiceGetWallet**](#walletservicegetwallet) | **GET** /v1/wallets/{userId} | |
|[**walletServiceTopUp**](#walletservicetopup) | **POST** /v1/wallets/top-up | |
|[**walletServiceTransfer**](#walletservicetransfer) | **POST** /v1/wallets/transfer | |

# **walletServiceCreateWallet**
> WalletWallet walletServiceCreateWallet(body)


### Example

```typescript
import {
    WalletServiceApi,
    Configuration,
    WalletCreateWalletRequest
} from '@sapliyio/fintech';

const configuration = new Configuration();
const apiInstance = new WalletServiceApi(configuration);

let body: WalletCreateWalletRequest; //

const { status, data } = await apiInstance.walletServiceCreateWallet(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **WalletCreateWalletRequest**|  | |


### Return type

**WalletWallet**

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

# **walletServiceGetWallet**
> WalletWallet walletServiceGetWallet()


### Example

```typescript
import {
    WalletServiceApi,
    Configuration
} from '@sapliyio/fintech';

const configuration = new Configuration();
const apiInstance = new WalletServiceApi(configuration);

let userId: string; // (default to undefined)

const { status, data } = await apiInstance.walletServiceGetWallet(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**WalletWallet**

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

# **walletServiceTopUp**
> WalletTransactionResponse walletServiceTopUp(body)


### Example

```typescript
import {
    WalletServiceApi,
    Configuration,
    WalletTopUpRequest
} from '@sapliyio/fintech';

const configuration = new Configuration();
const apiInstance = new WalletServiceApi(configuration);

let body: WalletTopUpRequest; //

const { status, data } = await apiInstance.walletServiceTopUp(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **WalletTopUpRequest**|  | |


### Return type

**WalletTransactionResponse**

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

# **walletServiceTransfer**
> WalletTransactionResponse walletServiceTransfer(body)


### Example

```typescript
import {
    WalletServiceApi,
    Configuration,
    WalletTransferRequest
} from '@sapliyio/fintech';

const configuration = new Configuration();
const apiInstance = new WalletServiceApi(configuration);

let body: WalletTransferRequest; //

const { status, data } = await apiInstance.walletServiceTransfer(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **WalletTransferRequest**|  | |


### Return type

**WalletTransactionResponse**

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

