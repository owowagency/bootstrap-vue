# Table

```vue live
<Table>Default Example Usage</Table>
```

## Props

| Prop name   | Description | Type                      | Values | Default   |
| ----------- | ----------- | ------------------------- | ------ | --------- |
| fields      |             | Field[]                   | -      | undefined |
| items       |             | Record<string, unknown>[] | -      | () => []  |
| multiSort   |             | boolean                   | -      | false     |
| hover       |             | boolean                   | -      | false     |
| onClick:row |             | func                      | -      | undefined |

## Slots

| Name       | Description | Bindings        |
| ---------- | ----------- | --------------- |
| default    |             | <br/><br/><br/> |
| top-row    |             |                 |
| no-items   |             |                 |
| row        |             | <br/>           |
| bottom-row |             |                 |

## Events

| Event name | Properties | Description |
| ---------- | ---------- | ----------- |
| click:row  |            |
| sort       |            |
