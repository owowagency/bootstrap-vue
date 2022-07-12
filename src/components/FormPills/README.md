# FormPills

```vue live
<FormPills />
```

## Props

| Prop name           | Description | Type           | Values | Default         |
| ------------------- | ----------- | -------------- | ------ | --------------- |
| editItemOnBackspace |             | boolean        | -      | false           |
| maxItems            |             | number         | -      | Infinity        |
| modelValue          |             | string[]       | -      | () => []        |
| placeholder         |             | string         | -      | ''              |
| separator           |             | string\|RegExp | -      | /[\s\n]+/       |
| submitKeys          |             | string[]       | -      | () => ['Enter'] |
| valueMatcher        |             | string\|RegExp | -      | /^.+\$/         |

## Events

| Event name        | Properties | Description |
| ----------------- | ---------- | ----------- |
| update:modelValue |            |
