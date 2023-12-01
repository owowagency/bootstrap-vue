# FormControl

```vue
<FormControl name="username" v-model="username" placeholder="JohnDoe" />
```

## Imported Props

| Prop name   | Description                                  | Type                                              | Values | Default |
| ----------- | -------------------------------------------- | ------------------------------------------------- | ------ | ------- |
| autofocus   | Automatically focus on the input when loaded | boolean                                           | -      | false   |
| disabled    | Disables the component                       | boolean                                           | -      | false   |
| modelValue  | The model value                              | string                                            | -      | ''      |
| placeholder | The placeholder of the form input            | string                                            | -      | ''      |
| plainText   | Adds the `form-control-plaintext` class      | boolean                                           | -      | false   |
| readonly    | Makes the component readonly                 | boolean                                           | -      | false   |
| size        | The size of the component                    | [Size](../../composables/useSize) (string)        | -      | 'md'    |
| type        | The type of the component                    | [Type](../../composables/useFormControl) (string) | -      | 'text'  |

## Events

| Event name        | Properties                      | Description                           |
| ----------------- | ------------------------------- | ------------------------------------- |
| update:modelValue | **value** `any` - The new value | Fired when the model value is updated |
