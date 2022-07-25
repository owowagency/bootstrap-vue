# Row

```vue
<Row align-sm="center" align-xl="start" row-cols>
    <Col>...</Col>

    <Col>...</Col>
</Row>
```

## Imported Props

| Prop name      | Description                                                                       | Type            | Values | Default   |
| -------------- | --------------------------------------------------------------------------------- | --------------- | ------ | --------- |
| align[Size]    | The alignment of the children. Results in `.align-items-[size]-*`                 | `string`        | -      | undefined |
| cols[Size]     | The amount of cols the column should span. Results in `.row-cols-[size]-*`        | `int`\|`string` | -      | undefined |
| gutters[Size]  | The amount of cols the column should span. Results in `.g-[size]-*`               | `int`\|`string` | -      | undefined |
| guttersX[Size] | The amount of cols the column should span. Results in `.g-x-[size]-*`             | `int`\|`string` | -      | undefined |
| guttersY[Size] | The amount of cols the column should span. Results in `.g-y-[size]-*`             | `int`\|`string` | -      | undefined |
| justify[Size]  | The amount of cols the column should span. Results in `.justify-content-[size]-*` | `string`        | -      | undefined |
| tag            | The html tag that will be used for the component                                  | `string`        | -      | 'div'     |

## Props

| Prop name | Description | Type        | Values | Default |
| --------- | ----------- | ----------- | ------ | ------- |
| align     |             | alignProp   | -      |         |
| cols      |             | colProp     | -      |         |
| gutters   |             | gutterProp  | -      |         |
| guttersX  |             | gutterProp  | -      |         |
| guttersY  |             | gutterProp  | -      |         |
| justify   |             | justifyProp | -      |         |

## Slots

| Name    | Description                     | Bindings |
| ------- | ------------------------------- | -------- |
| default | Displays content inside the row |          |
