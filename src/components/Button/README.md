# Button

```vue
<Button variant="danger">
    Delete
</Button>
```

## Imported Props

| Prop name | Description                  | Type                                             | Values | Default   |
| --------- | ---------------------------- | ------------------------------------------------ | ------ | --------- |
| disabled  | Disables the component       | boolean                                          | -      | false     |
| size      | The size of the component    | [Size](../../composables/useSize) (string)       | -      | 'md'      |
| variant   | The variant of the component | [Variant](../../composables/useVariant) (string) | -      | 'primary' |

## Props

| Prop name | Description                              | Type    | Values | Default |
| --------- | ---------------------------------------- | ------- | ------ | ------- |
| outline   | Changes the button to an outline variant | boolean | -      | false   |

## Slots

| Name    | Description                        | Bindings |
| ------- | ---------------------------------- | -------- |
| default | Displays content inside the button |          |
