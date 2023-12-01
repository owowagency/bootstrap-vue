# Table

```vue
<Table :fields="[Field]" :items="[Object]" multiSort hover />
```

## Props

| Prop name    | Description                                        | Type                            | Values | Default     |
| ------------ | -------------------------------------------------- | ------------------------------- | ------ | ----------- |
| fields       | The fields of the table                            | Field[]                         | -      | undefined   |
| items        | The items that are shown in the table              | Record&lt;string, unknown&gt;[] | -      | () =&gt; [] |
| multiSort    | Defines if multiple items can be sorted at once    | boolean                         | -      | false       |
| hover        | Defines if the `table-hover` class should be used  | boolean                         | -      | false       |
| onClick:row  | Defines if the `table-click` class should be used  | func                            | -      | undefined   |
| tbodyTrClass | The classes that will be forwarded to the tbody tr | string\|array\|object\|func     | -      | undefined   |
| theadTrClass | The classes that will be forwarded to the tbody tr | string\|array\|object           | -      | undefined   |

## Slots

| Name                           | Description                                 | Bindings                                                                                                                                                                                                                                          |
| ------------------------------ | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `header-${header.key}`         | Displays the header of the table            | **key** `string` - The key of the header<br/>**header** `object` - The header object<br/>                                                                                                                                                         |
| `header-${header.key}-content` | Displays the content of the table header    | **header** `object` - The header object<br/>                                                                                                                                                                                                      |
| top-row                        | Displays as the top row of the table        | **headers** `object[]` - The headers of the table                                                                                                                                                                                                 |
| no-items                       | Displays if there are no items in the table | **headers** `object[]` - The headers of the table                                                                                                                                                                                                 |
| row                            | Displays the row of the table               | **item** `object` - The item object<br/>**index** `int` - The index of the item                                                                                                                                                                   |
| header.key                     | Displays the content of the table row       | **key** `any` - The key of the header<br/><br/>**field** `object` - The header object<br/>**item** `object` - The item of the row<br/>**index** `int` - The index of the item of the row<br/>**value** `any` - The value that should be displayed |
| `${header.key}-content`        | Displays the content of the table row       | **field** `any` - The header object<br/>**item** `object` - The item of the row<br/>**index** `int` - The index of the item of the row<br/>**value** `any` - The value that should be displayed<br/>                                              |
| bottom-row                     | Displays as the bottom row of the table     | **headers** `object[]` - The headers of the table                                                                                                                                                                                                 |

## Events

| Event name | Properties                                                                             | Description                                   |
| ---------- | -------------------------------------------------------------------------------------- | --------------------------------------------- |
| click:row  | **item** `object` - The row that was clicked                                           | Fired when a row is clicked                   |
| hover:row  | **item** `object` - The row that was hovered<br/>**undefined** `unknown` - e The event | Fired when a row is hovered                   |
| sort       | **sorted** `object` - The sort object                                                  | Fired when the sorting of a column is changed |
