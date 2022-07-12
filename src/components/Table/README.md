# Table

```vue
<Table :fields="[Field]" :items="[Object]" multiSort hover />
```

## Props

| Prop name   | Description                                       | Type                      | Values | Default   |
| ----------- | ------------------------------------------------- | ------------------------- | ------ | --------- |
| fields      | The fields of the table                           | Field[]                   | -      | undefined |
| items       | The items that are shown in the table             | Record<string, unknown>[] | -      | () => []  |
| multiSort   | Defines if multiple items can be sorted at once   | boolean                   | -      | false     |
| hover       | Defines if the `table-hover` class should be used | boolean                   | -      | false     |
| onClick:row | Defines if the `table-click` class should be used | func                      | -      | undefined |

## Slots

| Name       | Description                                 | Bindings                                                                                                                                                                             |
| ---------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| default    | Displays the header of the table            | **key** `any` - The key of the header<br/>**name** `any` - The name of the header<br/>**item** `object` - The item of the row<br/>**index** `int` - The index of the item of the row |
| top-row    | Displays as the top row of the table        |                                                                                                                                                                                      |
| no-items   | Displays if there are no items in the table |                                                                                                                                                                                      |
| row        | Displays the row of the table               | **item** `object` - The item object<br/>**index** `int` - The index of the item                                                                                                      |
| bottom-row | Displays as the bottom row of the table     |                                                                                                                                                                                      |

## Events

| Event name | Properties | Description |
| ---------- | ---------- | ----------- |
| click:row  |            |
| sort       |            |
