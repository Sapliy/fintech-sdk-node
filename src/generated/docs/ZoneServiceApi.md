# ZoneServiceApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**zoneServiceBulkUpdateMetadata**](#zoneservicebulkupdatemetadata) | **POST** /v1/zones/bulk-metadata | |
|[**zoneServiceCreateZone**](#zoneservicecreatezone) | **POST** /v1/zones | |
|[**zoneServiceGetZone**](#zoneservicegetzone) | **GET** /v1/zones/{id} | |
|[**zoneServiceListZones**](#zoneservicelistzones) | **GET** /v1/zones | |
|[**zoneServiceUpdateZone**](#zoneserviceupdatezone) | **PUT** /v1/zones/{id} | |

# **zoneServiceBulkUpdateMetadata**
> ZoneBulkUpdateMetadataResponse zoneServiceBulkUpdateMetadata(body)


### Example

```typescript
import {
    ZoneServiceApi,
    Configuration,
    ZoneBulkUpdateMetadataRequest
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new ZoneServiceApi(configuration);

let body: ZoneBulkUpdateMetadataRequest; //

const { status, data } = await apiInstance.zoneServiceBulkUpdateMetadata(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **ZoneBulkUpdateMetadataRequest**|  | |


### Return type

**ZoneBulkUpdateMetadataResponse**

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

# **zoneServiceCreateZone**
> ZoneZone zoneServiceCreateZone(body)


### Example

```typescript
import {
    ZoneServiceApi,
    Configuration,
    ZoneCreateZoneRequest
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new ZoneServiceApi(configuration);

let body: ZoneCreateZoneRequest; //

const { status, data } = await apiInstance.zoneServiceCreateZone(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **ZoneCreateZoneRequest**|  | |


### Return type

**ZoneZone**

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

# **zoneServiceGetZone**
> ZoneZone zoneServiceGetZone()


### Example

```typescript
import {
    ZoneServiceApi,
    Configuration
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new ZoneServiceApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.zoneServiceGetZone(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ZoneZone**

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

# **zoneServiceListZones**
> ZoneListZonesResponse zoneServiceListZones()


### Example

```typescript
import {
    ZoneServiceApi,
    Configuration
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new ZoneServiceApi(configuration);

let orgId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.zoneServiceListZones(
    orgId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ZoneListZonesResponse**

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

# **zoneServiceUpdateZone**
> ZoneZone zoneServiceUpdateZone(body)


### Example

```typescript
import {
    ZoneServiceApi,
    Configuration,
    ZoneServiceUpdateZoneBody
} from '@sapliyio/fintech-node-generated';

const configuration = new Configuration();
const apiInstance = new ZoneServiceApi(configuration);

let id: string; // (default to undefined)
let body: ZoneServiceUpdateZoneBody; //

const { status, data } = await apiInstance.zoneServiceUpdateZone(
    id,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **ZoneServiceUpdateZoneBody**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ZoneZone**

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

