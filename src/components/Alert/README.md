# Alert

```vue
<Alert variant="danger">
    Something went wrong!
</Alert>
```

## Imported Props

| Prop name | Description                  | Type                                             | Values | Default   |
| --------- | ---------------------------- | ------------------------------------------------ | ------ | --------- |
| variant   | The variant of the component | [Variant](../../composables/useVariant) (string) | -      | 'primary' |

<!-- TODO Auto-generate based on type? -->

## Events

| Name   | Args | Description                                                             |
| ------ | ---- | ----------------------------------------------------------------------- |
| close  |      | Fires immediately when the `close` instance method is called            |
| closed |      | Fired when the alert has been closed and CSS transitions have completed |

## Slots

| Name    | Description                       | Bindings |
| ------- | --------------------------------- | -------- |
| default | Displays content inside the alert |          |
