# WalletsApi

All URIs are relative to *https://api.sapliy.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getWallet**](#getwallet) | **GET** /v1/wallets/{user_id} | Get Wallet Balance|
|[**v1WalletsTopupPost**](#v1walletstopuppost) | **POST** /v1/wallets/topup | Top up a wallet|
|[**v1WalletsTransferPost**](#v1walletstransferpost) | **POST** /v1/wallets/transfer | Transfer between wallets|

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

# **v1WalletsTopupPost**
> V1WalletsTopupPost200Response v1WalletsTopupPost(v1WalletsTopupPostRequest)


### Example

```typescript
import {
    WalletsApi,
    Configuration,
    V1WalletsTopupPostRequest
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new WalletsApi(configuration);

let v1WalletsTopupPostRequest: V1WalletsTopupPostRequest; //

const { status, data } = await apiInstance.v1WalletsTopupPost(
    v1WalletsTopupPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1WalletsTopupPostRequest** | **V1WalletsTopupPostRequest**|  | |


### Return type

**V1WalletsTopupPost200Response**

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

# **v1WalletsTransferPost**
> V1WalletsTopupPost200Response v1WalletsTransferPost(v1WalletsTransferPostRequest)


### Example

```typescript
import {
    WalletsApi,
    Configuration,
    V1WalletsTransferPostRequest
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new WalletsApi(configuration);

let v1WalletsTransferPostRequest: V1WalletsTransferPostRequest; //

const { status, data } = await apiInstance.v1WalletsTransferPost(
    v1WalletsTransferPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1WalletsTransferPostRequest** | **V1WalletsTransferPostRequest**|  | |


### Return type

**V1WalletsTopupPost200Response**

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

