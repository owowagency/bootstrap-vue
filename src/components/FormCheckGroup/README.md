# FormCheckGroup

```vue
<FormCheckGroup v-model="checks" :items="[Item]" type="checkbox" />
```

## Imported Props

| Prop name | Description            | Type    | Values | Default |
| --------- | ---------------------- | ------- | ------ | ------- |
| disabled  | Disables the component | boolean | -      | false   |

## Props

| Prop name  | Description                                                      | Type                             | Values                | Default                                                             |
| ---------- | ---------------------------------------------------------------- | -------------------------------- | --------------------- | ------------------------------------------------------------------- |
| switch     | Display the checks as a switch by adding the `form-switch` class | boolean                          | -                     | false                                                               |
| items      | The items to display in the group                                | Item[]                           | -                     |                                                                     |
| type       | The type of the input                                            | typeProp                         | `'checkbox'\|'radio'` |                                                                     |
| modelValue | The model value                                                  | array\|string\|number\|undefined | -                     | (props: {type: Type}) => props.type === 'checkbox' ? [] : undefined |

## Events

| Event name        | Properties | Description |
| ----------------- | ---------- | ----------- |
| update:modelValue |            |
