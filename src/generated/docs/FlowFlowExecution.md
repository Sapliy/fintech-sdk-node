# FlowFlowExecution


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**flowId** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**currentNodeId** | **string** |  | [optional] [default to undefined]
**inputJson** | **string** |  | [optional] [default to undefined]
**metadataJson** | **string** |  | [optional] [default to undefined]
**steps** | [**Array&lt;FlowExecutionStep&gt;**](FlowExecutionStep.md) |  | [optional] [default to undefined]
**startedAt** | **string** |  | [optional] [default to undefined]
**finishedAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { FlowFlowExecution } from '@sapliyio/fintech-node-generated';

const instance: FlowFlowExecution = {
    id,
    flowId,
    status,
    currentNodeId,
    inputJson,
    metadataJson,
    steps,
    startedAt,
    finishedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
