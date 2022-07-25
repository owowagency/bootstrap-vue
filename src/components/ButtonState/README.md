# ButtonState

```vue
<ButtonState :error="error" :loading="loading" :success="success">
    Submit
</ButtonState>
```

## Imported Props

| Prop name      | Description                                       | Type                                             | Values | Default   |
| -------------- | ------------------------------------------------- | ------------------------------------------------ | ------ | --------- |
| errorVariant   | The variant of the component in the error state   | [Variant](../../composables/useVariant) (string) | -      | 'danger'  |
| successVariant | The variant of the component in the success state | [Variant](../../composables/useVariant) (string) | -      | 'success' |
| variant        | The variant of the component                      | [Variant](../../composables/useVariant) (string) | -      | 'primary' |

## Props

| Prop name      | Description                              | Type                   | Values | Default |
| -------------- | ---------------------------------------- | ---------------------- | ------ | ------- |
| error          | Controls the error state of the button   | boolean                | -      | false   |
| errorVariant   |                                          | variantProp('danger')  | -      |         |
| loading        | Controls the loading state of the button | boolean                | -      | false   |
| success        | Controls the success state of the button | boolean                | -      | false   |
| successVariant |                                          | variantProp('success') | -      |         |
| variant        |                                          | variantProp()          | -      |         |

## Slots

| Name    | Description                        | Bindings |
| ------- | ---------------------------------- | -------- |
| default | Displays content inside the button |          |
