# FlowExecution


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**flow_id** | **string** |  | [default to undefined]
**flow_version** | **number** |  | [optional] [default to undefined]
**trigger_id** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [default to undefined]
**current_node_id** | **string** |  | [optional] [default to undefined]
**input** | **object** |  | [optional] [default to undefined]
**output** | **object** |  | [optional] [default to undefined]
**steps** | [**Array&lt;ExecutionStep&gt;**](ExecutionStep.md) |  | [optional] [default to undefined]
**started_at** | **string** |  | [optional] [default to undefined]
**ended_at** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { FlowExecution } from '@sapliyio/fintech-node-generated';

const instance: FlowExecution = {
    id,
    flow_id,
    flow_version,
    trigger_id,
    status,
    current_node_id,
    input,
    output,
    steps,
    started_at,
    ended_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
