# DropdownMenuItem

```vue
<DropdownMenuItem label="Menu item" />
```

## Props

| Prop name | Description              | Type                                  | Values | Default   |
| --------- | ------------------------ | ------------------------------------- | ------ | --------- |
| active    | Adds the `active` class  | boolean                               | -      | false     |
| divider   | Displays a divider       | boolean                               | -      | false     |
| header    | Displays label as header | boolean                               | -      | false     |
| href      |                          | string                                | -      | '#'       |
| is        |                          | string                                | -      | undefined |
| label     | The label to display     | string                                | -      | undefined |
| to        |                          | string\|Record&lt;string, unknown&gt; | -      | undefined |

## Slots

| Name    | Description                                     | Bindings |
| ------- | ----------------------------------------------- | -------- |
| default | Displays content inside the dropdown menu item. |          |
