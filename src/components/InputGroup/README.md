# InputGroup

```vue
<InputGroup prepend="$">
    <FormControl v-model="price" />
</InputGroup>
```

## Imported Props

| Prop name | Description               | Type                                       | Values | Default |
| --------- | ------------------------- | ------------------------------------------ | ------ | ------- |
| size      | The size of the component | [Size](../../composables/useSize) (string) | -      | 'md'    |

## Props

| Prop name | Description                      | Type   | Values | Default   |
| --------- | -------------------------------- | ------ | ------ | --------- |
| append    | The text to prepend to the input | string | -      | undefined |
| prepend   | The text to append to the input  | string | -      | undefined |

## Slots

| Name    | Description                       | Bindings |
| ------- | --------------------------------- | -------- |
| prepend | Displays the prepend of the input |          |
| default | Displays the content of the input |          |
| append  | Displays the append of the input  |          |
