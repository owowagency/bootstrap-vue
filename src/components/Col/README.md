# Col

```vue
<Col cols="10" sm="8" md="6" offset="1" offset-sm="2" offset-md="3">
    I am a column
</Col>
```

## Imported Props

| Prop name    | Description                                                                   | Type            | Values | Default   |
| ------------ | ----------------------------------------------------------------------------- | --------------- | ------ | --------- |
| cols[size]   | The amount of cols the column should span. Results in `.col-[size]-*`         | `int`\|`string` | -      | undefined |
| offset[Size] | The amount of cols the column should be offset. Results in `.offset-[size]-*` | `int`\|`string` | -      | undefined |
| order[Size]  | The position in order of the column. Results in `.order-[size]-*`             | `int`\|`string` | -      | undefined |

## Props

| Prop name | Description                                                            | Type    | Values | Default |
| --------- | ---------------------------------------------------------------------- | ------- | ------ | ------- |
| cols      | The amount of cols the column should span. Results in: `.col-*`        | colProp | -      |         |
| offset    | The amount of cols the column should be offset. Results in `.offset-*` | colProp | -      |         |
| order     | The position in order of the column. Results in `.order-*`             | colProp | -      |         |

## Slots

| Name    | Description                     | Bindings |
| ------- | ------------------------------- | -------- |
| default | Displays content inside the col |          |
