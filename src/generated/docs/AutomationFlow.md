# AutomationFlow


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**org_id** | **string** |  | [optional] [default to undefined]
**zone_id** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**enabled** | **boolean** |  | [optional] [default to undefined]
**version** | **number** |  | [optional] [default to undefined]
**trigger** | [**AutomationFlowTrigger**](AutomationFlowTrigger.md) |  | [optional] [default to undefined]
**nodes** | [**Array&lt;AutomationFlowNode&gt;**](AutomationFlowNode.md) |  | [optional] [default to undefined]
**edges** | [**Array&lt;AutomationFlowEdge&gt;**](AutomationFlowEdge.md) |  | [optional] [default to undefined]
**created_at** | **string** |  | [optional] [default to undefined]
**updated_at** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { AutomationFlow } from '@sapliyio/fintech-node-generated';

const instance: AutomationFlow = {
    id,
    org_id,
    zone_id,
    name,
    description,
    enabled,
    version,
    trigger,
    nodes,
    edges,
    created_at,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
