# Dropdown

```vue
<Dropdown :items="[Item]">
```

## Imported Props

| Prop name | Description                                    | Type                                             | Values | Default   |
| --------- | ---------------------------------------------- | ------------------------------------------------ | ------ | --------- |
| items     | The items of the dropdown menu                 | [Item[]](../../composables/useDropdownItems)     | -      | () => []  |
| menuClass | The classes that will be forwarded to the menu | `string`\|`array`\|`object`                      | -      | undefined |
| size      | The size of the component                      | [Size](../../composables/useSize) (string)       | -      | 'md'      |
| variant   | The variant of the component                   | [Variant](../../composables/useVariant) (string) | -      | 'primary' |

## Slots

| Name           | Description                                 | Bindings                                 |
| -------------- | ------------------------------------------- | ---------------------------------------- |
| dropdownToggle | Displays the dropdown toggle                |                                          |
| default        | Displays content inside the dropdown toggle |                                          |
| dropdownMenu   | Displays the dropdown menu                  | <br/>**items** `array` - The `Item` list |
| prepend        | _Forwarded to child_                        |                                          |
| items          | _Forwarded to child_                        |                                          |
| item           | _Forwarded to child_                        |                                          |
| append         | _Forwarded to child_                        |                                          |
