# FormCheck

```vue
<FormCheck v-model="check" label="Check me" switch />
```

## Imported Props

| Prop name | Description                   | Type    | Values | Default |
| --------- | ----------------------------- | ------- | ------ | ------- |
| disabled  | Disables the component        | boolean | -      | false   |
| id        | The id used for the component | string  | -      | `uuid`  |

## Props

| Prop name  | Description                                                     | Type                    | Values                | Default   |
| ---------- | --------------------------------------------------------------- | ----------------------- | --------------------- | --------- |
| inline     | Adds the `form-check-inline` class                              | boolean                 | -                     | false     |
| inputClass | The classes that will be forwarded to the input                 | string\|array\|object   | -                     | undefined |
| label      | The label to display                                            | string                  | -                     | undefined |
| modelValue | The model value                                                 | boolean\|string\|number | -                     | false     |
| name       | The name of the input                                           | string                  | -                     | undefined |
| switch     | Display the check as a switch by adding the `form-switch` class | boolean                 | -                     | false     |
| type       | The type of the input                                           | typeProp                | `'checkbox'\|'radio'` |           |
| value      | The value of the input                                          | string\|number          | -                     | undefined |

## Slots

| Name    | Description                       | Bindings |
| ------- | --------------------------------- | -------- |
| default | Displays content inside the label |          |

## Events

| Event name        | Properties                      | Description                           |
| ----------------- | ------------------------------- | ------------------------------------- |
| update:modelValue | **value** `any` - The new value | Fired when the model value is updated |
