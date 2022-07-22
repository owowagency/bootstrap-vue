# FormDropdown

```vue
<FormDropdown :items="[Item]" />
```

## Imported Props

| Prop name | Description                                    | Type                                             | Values | Default   |
| --------- | ---------------------------------------------- | ------------------------------------------------ | ------ | --------- |
| items     | The items of the dropdown menu                 | [Item[]](../../composables/useDropdownItems)     | -      | () => []  |
| menuClass | The classes that will be forwarded to the menu | `string`\|`array`\|`object`                      | -      | undefined |
| size      | The size of the component                      | [Size](../../composables/useSize) (string)       | -      | 'md'      |
| variant   | The variant of the component                   | [Variant](../../composables/useVariant) (string) | -      | 'primary' |

## Props

| Prop name   | Description                                             | Type         | Values | Default   |
| ----------- | ------------------------------------------------------- | ------------ | ------ | --------- |
| disabled    | Disables the component                                  | disabledProp | -      |           |
| labelKey    | The key that is used to get the label from a given item | string       | -      | 'label'   |
| menuClass   | The classes that will be forwarded to the menu          | string       | -      | 'w-100'   |
| modelValue  | The model value                                         | object       | -      | undefined |
| placeholder | The placeholder of the dropdown                         | string       | -      | 'Select'  |
| size        |                                                         | sizeProp     | -      |           |
| toggleClass | The classes that will be forwarded to the toggle        | string       | -      | undefined |

## Slots

| Name           | Description                                | Bindings |
| -------------- | ------------------------------------------ | -------- |
| dropdownToggle | Displays the dropdown toggle               |          |
| noOptions      | Displays content when there are no options |          |
| prepend        | Prepends the dropdown options              |          |
| items          | _Forwarded to child_                       |          |
| item           | _Forwarded to child_                       |          |
| append         | _Forwarded to child_                       |          |

## Events

| Event name        | Properties                      | Description                           |
| ----------------- | ------------------------------- | ------------------------------------- |
| update:modelValue | **value** `any` - The new value | Fired when the model value is updated |
