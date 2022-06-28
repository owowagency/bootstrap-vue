# ButtonState

A button that can display certain states wich are usually paired with asynchronous events.

```html
<ButtonState
    :error="error"
    :loading="loading"
    :success="success"
>
    Submit
</ButtonState>
```

## Props

| Name | Type | Description |
| - | - | - |
| error | boolean | Controls the error state of the button. |
| errorVariant | [Variant](#link-to-variant-definition) (string) | The variant of the button in the error state. |
| loading | boolean | Controls the loading state of the button. |
| loadingVariant | [Variant](#link-to-variant-definition) (string) | The variant of the button in the loading state. |
| success | boolean | Controls the success state of the button. |
| successVariant | [Variant](#link-to-variant-definition) (string) | The variant of the button in the success state. |
| variant | [Variant](#link-to-variant-definition) (string) | The variant of the button in idle state. |

## Slots

| Name | Description |
| - | - |
| default | Displays content inside the button. |
