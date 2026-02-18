# LedgerTransaction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**reference_id** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [default to undefined]
**entries** | [**Array&lt;LedgerEntry&gt;**](LedgerEntry.md) |  | [optional] [default to undefined]

## Example

```typescript
import { LedgerTransaction } from '@sapliyio/fintech-node-generated';

const instance: LedgerTransaction = {
    id,
    reference_id,
    description,
    status,
    entries,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
