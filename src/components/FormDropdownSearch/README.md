# FormDropdownSearch

```vue
<FormDropdownSearch :items="" />
```

## Imported Props

| Prop name  | Description                                  | Type                                              | Values | Default |
| ---------- | -------------------------------------------- | ------------------------------------------------- | ------ | ------- |
| autofocus  | Automatically focus on the input when loaded | boolean                                           | -      | false   |
| disabled   | Disables the component                       | boolean                                           | -      | false   |
| modelValue | The model value                              | string                                            | -      | ''      |
| plainText  | Adds the `form-control-plaintext` class      | boolean                                           | -      | false   |
| readonly   | Makes the component readonly                 | boolean                                           | -      | false   |
| size       | The size of the component                    | [Size](../../composables/useSize) (string)        | -      | 'md'    |
| type       | The type of the component                    | [Type](../../composables/useFormControl) (string) | -      | 'text'  |

## Props

| Prop name   | Description                                             | Type    | Values | Default   |
| ----------- | ------------------------------------------------------- | ------- | ------ | --------- |
| autoSearch  | Automatically search through the items                  | boolean | -      | true      |
| items       | The items of the dropdown menu                          | Item[]  | -      | () => []  |
| labelKey    | The key that is used to get the label from a given item | string  | -      | 'label'   |
| modelValue  | The model value                                         | Item    | -      | undefined |
| placeholder | The placeholder of the form input                       | string  | -      | ''        |
| search      | The current search string                               | string  | -      | ''        |

## Slots

| Name           | Description                  | Bindings |
| -------------- | ---------------------------- | -------- |
| dropdownToggle | Displays the dropdown toggle |          |
| noOptions      | _Forwarded to child_         |          |
| prepend        | _Forwarded to child_         |          |
| items          | _Forwarded to child_         |          |
| item           | _Forwarded to child_         |          |
| append         | _Forwarded to child_         |          |

## Events

| Event name        | Properties                                 | Description                            |
| ----------------- | ------------------------------------------ | -------------------------------------- |
| update:modelValue | **value** `any` - The new value            | Fired when the model value is updated  |
| update:search     | **search** `string` - The new search value | Fired when the search value is updated |
