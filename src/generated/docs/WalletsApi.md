# WalletsApi

All URIs are relative to *https://api.sapliy.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getWallet**](#getwallet) | **GET** /v1/wallets/{user_id} | Get Wallet Balance|
|[**topupWallet**](#topupwallet) | **POST** /v1/wallets/topup | Top up a wallet|
|[**transferWallet**](#transferwallet) | **POST** /v1/wallets/transfer | Transfer between wallets|

# **getWallet**
> Wallet getWallet()


### Example

```typescript
import {
    WalletsApi,
    Configuration
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new WalletsApi(configuration);

let userId: string; // (default to undefined)
let xZoneID: string; //The ID of the zone for this request. (default to undefined)
let xZoneMode: 'live' | 'test'; //The mode of the zone (live or test). (optional) (default to undefined)

const { status, data } = await apiInstance.getWallet(
    userId,
    xZoneID,
    xZoneMode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | defaults to undefined|
| **xZoneID** | [**string**] | The ID of the zone for this request. | defaults to undefined|
| **xZoneMode** | [**&#39;live&#39; | &#39;test&#39;**]**Array<&#39;live&#39; &#124; &#39;test&#39;>** | The mode of the zone (live or test). | (optional) defaults to undefined|


### Return type

**Wallet**

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

# **topupWallet**
> TopupWallet200Response topupWallet(topupWalletRequest)


### Example

```typescript
import {
    WalletsApi,
    Configuration,
    TopupWalletRequest
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new WalletsApi(configuration);

let xZoneID: string; //The ID of the zone for this request. (default to undefined)
let topupWalletRequest: TopupWalletRequest; //
let xZoneMode: 'live' | 'test'; //The mode of the zone (live or test). (optional) (default to undefined)

const { status, data } = await apiInstance.topupWallet(
    xZoneID,
    topupWalletRequest,
    xZoneMode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **topupWalletRequest** | **TopupWalletRequest**|  | |
| **xZoneID** | [**string**] | The ID of the zone for this request. | defaults to undefined|
| **xZoneMode** | [**&#39;live&#39; | &#39;test&#39;**]**Array<&#39;live&#39; &#124; &#39;test&#39;>** | The mode of the zone (live or test). | (optional) defaults to undefined|


### Return type

**TopupWallet200Response**

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

# **transferWallet**
> TopupWallet200Response transferWallet(transferWalletRequest)


### Example

```typescript
import {
    WalletsApi,
    Configuration,
    TransferWalletRequest
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new WalletsApi(configuration);

let xZoneID: string; //The ID of the zone for this request. (default to undefined)
let transferWalletRequest: TransferWalletRequest; //
let xZoneMode: 'live' | 'test'; //The mode of the zone (live or test). (optional) (default to undefined)

const { status, data } = await apiInstance.transferWallet(
    xZoneID,
    transferWalletRequest,
    xZoneMode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transferWalletRequest** | **TransferWalletRequest**|  | |
| **xZoneID** | [**string**] | The ID of the zone for this request. | defaults to undefined|
| **xZoneMode** | [**&#39;live&#39; | &#39;test&#39;**]**Array<&#39;live&#39; &#124; &#39;test&#39;>** | The mode of the zone (live or test). | (optional) defaults to undefined|


### Return type

**TopupWallet200Response**

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

