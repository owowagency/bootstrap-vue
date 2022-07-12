# FormCheckGroup

```vue live
<FormCheckGroup :items="Default Example Usage" />
```

## Props

| Prop name  | Description | Type                             | Values | Default                                                             |
| ---------- | ----------- | -------------------------------- | ------ | ------------------------------------------------------------------- |
| switch     |             | boolean                          | -      | false                                                               |
| items      |             | Item[]                           | -      |                                                                     |
| type       |             | typeProp                         | -      |                                                                     |
| modelValue |             | array\|string\|number\|undefined | -      | (props: {type: Type}) => props.type === 'checkbox' ? [] : undefined |

## Events

| Event name        | Properties | Description |
| ----------------- | ---------- | ----------- |
| update:modelValue |            |
