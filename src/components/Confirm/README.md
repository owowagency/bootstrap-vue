# Confirm

```vue
<Confirm body="Are you sure you want to delete this?" :cancelOutline="true" />
```

## Imported Props

| Prop name     | Description                  | Type                                             | Values | Default   |
| ------------- | ---------------------------- | ------------------------------------------------ | ------ | --------- |
| cancelVariant | The variant of the component | [Variant](../../composables/useVariant) (string) | -      | 'light'   |
| okVariant     | The variant of the component | [Variant](../../composables/useVariant) (string) | -      | 'primary' |

## Props

| Prop name     | Description                                     | Type                   | Values | Default         |
| ------------- | ----------------------------------------------- | ---------------------- | ------ | --------------- |
| body          | The body of the confirm modal                   | string                 | -      | 'Are you sure?' |
| cancelOutline | Changes the cancel button to an outline variant | boolean                | -      | false           |
| cancelText    | The text of the cancel button                   | string                 | -      | 'No'            |
| cancelVariant | The variant of the cancel button                | variantProp('light')   | -      |                 |
| okText        | The text of the ok button                       | string                 | -      | 'Yes'           |
| okVariant     | The variant of the ok button                    | variantProp('primary') | -      |                 |
| title         | The title of the confirm modal                  | string                 | -      | 'Confirmation'  |

## Slots

| Name         | Description                               | Bindings |
| ------------ | ----------------------------------------- | -------- |
| default      | Displays content inside the confirm modal |          |
| buttonCancel | Displays content inside the cancel button |          |
| buttonOk     | Displays content inside the ok button     |          |

## Events

| Event name | Properties | Description                               |
| ---------- | ---------- | ----------------------------------------- |
| cancelled  |            | Emitted when the cancel button is clicked |
| confirmed  |            | Emitted when the ok button is clicked     |
