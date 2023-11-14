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

| Prop name | Description                              | Type                                  | Values | Default   |
| --------- | ---------------------------------------- | ------------------------------------- | ------ | --------- |
| href      |                                          | string                                | -      | undefined |
| is        |                                          | string                                | -      | undefined |
| outline   | Changes the button to an outline variant | boolean                               | -      | false     |
| to        |                                          | string\|Record&lt;string, unknown&gt; | -      | undefined |

## Slots

| Name    | Description                        | Bindings |
| ------- | ---------------------------------- | -------- |
| default | Displays content inside the button |          |
