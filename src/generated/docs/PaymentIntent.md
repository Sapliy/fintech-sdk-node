# PaymentIntent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**amount** | **number** |  | [default to undefined]
**currency** | **string** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**client_secret** | **string** | Used for client-side confirmation. | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**metadata** | **{ [key: string]: string; }** |  | [optional] [default to undefined]
**created_at** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { PaymentIntent } from '@sapliyio/fintech-node-generated';

const instance: PaymentIntent = {
    id,
    amount,
    currency,
    status,
    client_secret,
    description,
    metadata,
    created_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
