# FormDropdownSearch

```vue live
<FormDropdownSearch>Default Example Usage</FormDropdownSearch>
```

## Props

| Prop name   | Description | Type    | Values | Default   |
| ----------- | ----------- | ------- | ------ | --------- |
| autoSearch  |             | boolean | -      | true      |
| items       |             | Item[]  | -      | () => []  |
| labelKey    |             | string  | -      | 'label'   |
| modelValue  |             | Item    | -      | undefined |
| placeholder |             | string  | -      | ''        |
| search      |             | string  | -      | ''        |

## Slots

| Name           | Description | Bindings |
| -------------- | ----------- | -------- |
| dropdownToggle |             |          |
| noOptions      |             |          |
| prepend        |             |          |
| items          |             |          |
| item           |             |          |
| append         |             |          |

## Events

| Event name        | Properties | Description |
| ----------------- | ---------- | ----------- |
| update:modelValue |            |
| update:search     |            |
