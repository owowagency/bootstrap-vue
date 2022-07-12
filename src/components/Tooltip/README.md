# Tooltip

```vue live
<Tooltip>Default Example Usage</Tooltip>
```

## Props

| Prop name    | Description | Type                         | Values | Default           |
| ------------ | ----------- | ---------------------------- | ------ | ----------------- |
| boundary     |             | string\|HTMLElement          | -      | 'clippingParents' |
| container    |             | string\|HTMLElement\|boolean | -      | false             |
| customClass  |             | string\|array\|object        | -      | ''                |
| delay        |             | number\|object               | -      | 0                 |
| html         |             | boolean                      | -      | false             |
| offset       |             | string \| number[]           | -      | () => [0, 0]      |
| popperConfig |             | object\|func                 | -      | () => ({})        |
| tag          |             | string                       | -      | 'div'             |
| title        |             | string                       | -      | ''                |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |
