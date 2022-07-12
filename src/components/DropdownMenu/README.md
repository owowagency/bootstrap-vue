# DropdownMenu

```vue
<DropdownMenu :items="[Item]" />
```

## Imported Props

| Prop name | Description                    | Type                                         | Values | Default  |
| --------- | ------------------------------ | -------------------------------------------- | ------ | -------- |
| items     | The items of the dropdown menu | [Item[]](../../composables/useDropdownItems) | -      | () => [] |

## Slots

| Name    | Description                               | Bindings                                                                                                           |
| ------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| prepend | Prepends the dropdown menu                |                                                                                                                    |
| items   | Displays content inside the dropdown menu | **click-item** `function` - The function to call when an item is clicked<br/>**items** `array` - The `Item` list   |
| item    | Displays the dropdown menu item           | **click-item** `function` - The function to call when an item is clicked<br/>**item** `object` - The `Item` object |
| append  | Appends the dropdown menu                 |                                                                                                                    |

## Events

| Event name | Properties | Description |
| ---------- | ---------- | ----------- |
| click:item |            |
