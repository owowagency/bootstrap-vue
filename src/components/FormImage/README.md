# FormImage

```vue
<FormImage v-model="b64" type="base64" />
```

## Imported Props

| Prop name | Description                   | Type   | Values | Default |
| --------- | ----------------------------- | ------ | ------ | ------- |
| id        | The id used for the component | string | -      | `uuid`  |

## Props

| Prop name  | Description                | Type         | Values             | Default   |
| ---------- | -------------------------- | ------------ | ------------------ | --------- |
| dataType   | The data type of the model | DataType     | `'file'\|'base64'` | 'base64'  |
| modelValue | The model value            | File\|string | -                  | undefined |
| preview    | The preview                | string       | -                  | undefined |

## Slots

| Name        | Description              | Bindings |
| ----------- | ------------------------ | -------- |
| placeholder | Displays the placeholder |          |

## Events

| Event name        | Properties | Description |
| ----------------- | ---------- | ----------- |
| update:modelValue |            |
