# ZonesApi

All URIs are relative to *https://api.sapliy.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createZone**](#createzone) | **POST** /v1/zones | Create a Zone|
|[**listZones**](#listzones) | **GET** /v1/zones | List or Get Zones|

# **createZone**
> ListZones200ResponseInner createZone(createZoneRequest)


### Example

```typescript
import {
    ZonesApi,
    Configuration,
    CreateZoneRequest
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new ZonesApi(configuration);

let createZoneRequest: CreateZoneRequest; //

const { status, data } = await apiInstance.createZone(
    createZoneRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createZoneRequest** | **CreateZoneRequest**|  | |


### Return type

**ListZones200ResponseInner**

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

# **listZones**
> Array<ListZones200ResponseInner> listZones()


### Example

```typescript
import {
    ZonesApi,
    Configuration
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new ZonesApi(configuration);

let orgId: string; // (optional) (default to undefined)
let id: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listZones(
    orgId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] |  | (optional) defaults to undefined|
| **id** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<ListZones200ResponseInner>**

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

